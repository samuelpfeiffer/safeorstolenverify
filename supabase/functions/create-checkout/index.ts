import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

const PRODUCTION_BASE_URL = 'https://safeorstolen.com';

// Free (2 checks) -> $0.99/check -> $10/month unlimited
const STRIPE_PRICES = {
  unlimited: 'price_1T8uToGxnZLw8J7O6GcOuV1w',
  payPerCheck: 'price_1T8uNDGxnZLw8J7OrBKrbePR',
  singleVerification: 'price_1SSVqkGxnZLw8J7O3GwCyKRn',
  starter: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
  personal: 'price_1SHEUQGxnZLw8J7OinyVqNMK',
  professional: 'price_1SHEiuGxnZLw8J7OszscBBk7',
  enterprise: 'price_1SHEnFGxnZLw8J7Oq1PM96Eo',
} as const;

const resolvePriceId = (priceId?: string, planName?: string, isSubscription?: boolean): string => {
  if (priceId && Object.values(STRIPE_PRICES).includes(priceId as any)) return priceId;
  if (!planName) return isSubscription ? STRIPE_PRICES.unlimited : STRIPE_PRICES.payPerCheck;
  const name = planName.toLowerCase();
  if (name.includes('pay per') || name.includes('pay-per') || name.includes('per check') ||
      name.includes('single') || name.includes('one-time') || name.includes('one time') ||
      name.includes('verification')) return STRIPE_PRICES.payPerCheck;
  if (name.includes('unlimited')) return STRIPE_PRICES.unlimited;
  if (name.includes('enterprise') || name.includes('business pro')) return STRIPE_PRICES.enterprise;
  if (name.includes('professional') || name.includes('pro') || name.includes('savvy')) return STRIPE_PRICES.professional;
  if (name.includes('personal') || name.includes('smart buyer') || name.includes('individual')) return STRIPE_PRICES.personal;
  if (name.includes('starter') || name.includes('basic') || name.includes('entry')) return STRIPE_PRICES.unlimited;
  return isSubscription ? STRIPE_PRICES.unlimited : STRIPE_PRICES.payPerCheck;
};

function cleanFingerprint(fp: unknown): string {
  if (typeof fp !== 'string') return '';
  const s = fp.trim();
  return /^[A-Za-z0-9_\-:.]{6,200}$/.test(s) ? s : '';
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    console.log(`[CREATE-CHECKOUT] Request started`);
    const supabaseClient = createClient(Deno.env.get("SUPABASE_URL") ?? "", Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "");

    // Signed-in user if the token is a real user session; otherwise GUEST checkout.
    // (Sept 29 2026: guests used to get a 401 and a "Something went wrong" alert.)
    let user: { id: string; email?: string } | null = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const jwt = authHeader.replace("Bearer ", "");
      const { data, error } = await supabaseClient.auth.getUser(jwt);
      if (!error && data?.user) user = { id: data.user.id, email: data.user.email ?? undefined };
    }

    const body = await req.json().catch(() => ({}));
    const { priceId, serialNumber, itemType, isSubscription, planName } = body || {};
    const fingerprint = cleanFingerprint(body?.fingerprint);
    const isGuest = !user;
    console.log(`[CREATE-CHECKOUT] ${isGuest ? 'GUEST' : 'User ' + user!.email}`, { priceId, planName, isSubscription, hasFingerprint: !!fingerprint });

    if (isGuest && !fingerprint) {
      return new Response(JSON.stringify({ error: "Please sign in to continue", code: "NO_AUTH" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
    if (!stripeKey || !/^(sk|rk)_(live|test)_/.test(stripeKey)) {
      console.log(`[CREATE-CHECKOUT] Invalid Stripe key`);
      return new Response(JSON.stringify({ error: "Payment system configuration error", code: "STRIPE_CONFIG" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    let customerId: string | undefined;
    if (user?.email) {
      const customers = await stripe.customers.list({ email: user.email, limit: 1 });
      customerId = customers.data.length > 0 ? customers.data[0].id : undefined;
    }

    const resolvedPriceId = resolvePriceId(priceId, planName, isSubscription);
    try {
      const price = await stripe.prices.retrieve(resolvedPriceId);
      if (!price.active) throw new Error(`Price ${resolvedPriceId} is not active`);
    } catch (e) {
      console.log(`[CREATE-CHECKOUT] Price verification failed:`, e);
      return new Response(JSON.stringify({ error: "Invalid pricing configuration", code: "INVALID_PRICE" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let verificationId: string | undefined;
    if (user && !isSubscription && serialNumber?.trim()) {
      const { data: verification, error } = await supabaseClient.from("verification_searches")
        .insert({ user_id: user.id, serial_number: serialNumber.trim(), item_type: itemType || 'unknown' })
        .select().single();
      if (!error && verification) verificationId = verification.id;
    }

    const successUrl = verificationId
      ? `${PRODUCTION_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&verification_id=${verificationId}`
      : `${PRODUCTION_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${PRODUCTION_BASE_URL}/verify?checkout=cancelled`;

    const metadata: Record<string, string> = {
      user_id: user?.id || '',
      guest: isGuest ? 'true' : 'false',
      fingerprint,
      item_type: itemType || 'unknown',
      serial_number: (serialNumber || '').toString().slice(0, 200),
      verification_id: verificationId || '',
      plan_name: planName || 'Unlimited Plan',
    };

    const sessionConfig: any = {
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: isSubscription ? "subscription" : "payment",
      line_items: [{ price: resolvedPriceId, quantity: 1 }],
      metadata,
      allow_promotion_codes: true,
    };
    if (customerId) sessionConfig.customer = customerId;
    else if (user?.email) sessionConfig.customer_email = user.email;
    // Guests: Stripe asks for their email on the payment page.
    if (!isSubscription && !customerId) sessionConfig.customer_creation = 'always';
    if (isSubscription) sessionConfig.subscription_data = { trial_period_days: 7, metadata };

    const { data: purchaseRecord, error: purchaseError } = await supabaseClient.from("purchases").insert({
      user_id: user?.id ?? null,
      fingerprint: fingerprint || null,
      stripe_session_id: "creating",
      amount: 0,
      currency: "usd",
      verification_id: verificationId || null,
      status: 'pending',
    }).select('id').single();
    if (purchaseError) console.log(`[CREATE-CHECKOUT] Purchase record error:`, purchaseError);

    const session = await stripe.checkout.sessions.create(sessionConfig);
    console.log(`[CREATE-CHECKOUT] Session created: ${session.id} (${isGuest ? 'guest' : 'user'})`);

    if (purchaseRecord?.id) {
      await supabaseClient.from("purchases").update({ stripe_session_id: session.id }).eq("id", purchaseRecord.id);
    }

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id, guest: isGuest }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.log(`[CREATE-CHECKOUT] Error:`, error instanceof Error ? error.message : String(error));
    return createErrorResponse(error, { functionName: 'create-checkout', operation: 'checkout_creation' }, corsHeaders);
  }
});
