import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

const PRODUCTION_BASE_URL = 'https://safeorstolen.com';

// Oct 2 2026 pricing: Free (2 checks) -> $3.99 single check -> $14.99/month (20 phone blacklist searches,
// everything else unlimited). No free trial. Prices are created once in Stripe with fixed lookup keys;
// stripe-webhook maps those keys to plans. Existing $10 subscribers keep their old price.
// SAFETY: if the Stripe key cannot create prices yet (needs "Prices: Write"), fall back to the old
// working price so checkout never breaks. Once permission is granted, new prices take over automatically.
const NEW_PRICES = {
  single: { lookup: 'sos_single_399', amount: 399, base: 'price_1T8uNDGxnZLw8J7OrBKrbePR', recurring: false, nickname: 'Single check $3.99' },
  monthly: { lookup: 'sos_monthly_1499', amount: 1499, base: 'price_1T8uToGxnZLw8J7O6GcOuV1w', recurring: true, nickname: 'Monthly $14.99' },
} as const;

// Oct 5 2026: verification certificate for one completed check. Priced inline so it never
// matches a plan price; stripe-webhook handles purchase_type=certificate before any plan logic.
const CERTIFICATE_AMOUNT = 199;

async function getOrCreatePrice(stripe: Stripe, cfg: typeof NEW_PRICES[keyof typeof NEW_PRICES]): Promise<string> {
  try {
    const found = await stripe.prices.list({ lookup_keys: [cfg.lookup], active: true, limit: 1 });
    if (found.data[0]) return found.data[0].id;
    const base = await stripe.prices.retrieve(cfg.base);
    const product = typeof base.product === 'string' ? base.product : (base.product as any).id;
    const created = await stripe.prices.create({
      product,
      currency: 'usd',
      unit_amount: cfg.amount,
      lookup_key: cfg.lookup,
      nickname: cfg.nickname,
      ...(cfg.recurring ? { recurring: { interval: 'month' as const } } : {}),
    });
    console.log(`[CREATE-CHECKOUT] Created Stripe price ${created.id} for ${cfg.lookup}`);
    return created.id;
  } catch (e) {
    console.error(`[CREATE-CHECKOUT] NEW PRICE UNAVAILABLE (${cfg.lookup}), using old price ${cfg.base}:`, e instanceof Error ? e.message.slice(0, 200) : e);
    return cfg.base;
  }
}

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
    let user: { id: string; email?: string } | null = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const jwt = authHeader.replace("Bearer ", "");
      const { data, error } = await supabaseClient.auth.getUser(jwt);
      if (!error && data?.user) user = { id: data.user.id, email: data.user.email ?? undefined };
    }

    const body = await req.json().catch(() => ({}));
    const { priceId, serialNumber, itemType, planName } = body || {};
    const pn = String(planName || '').toLowerCase();
    // Monthly if the page asked for a subscription, or named the monthly/unlimited plan.
    const isSubscription = !!body?.isSubscription || (/unlimited|month|pro\b|plan/.test(pn) && !/single|per check|pay per|one-time|one time/.test(pn));
    const fingerprint = cleanFingerprint(body?.fingerprint);
    const isGuest = !user;
    console.log(`[CREATE-CHECKOUT] ${isGuest ? 'GUEST' : 'User ' + user!.email}`, { priceId, planName, isSubscription, hasFingerprint: !!fingerprint });

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
    if (!stripeKey || !/^(sk|rk)_(live|test)_/.test(stripeKey)) {
      console.log(`[CREATE-CHECKOUT] Invalid Stripe key`);
      return new Response(JSON.stringify({ error: "Payment system configuration error", code: "STRIPE_CONFIG" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // ===== Verification certificate ($1.99, one completed check) =====
    if (body?.product === 'certificate') {
      const proofId = String(body?.proofId || '').trim().toUpperCase();
      if (!/^[A-Z0-9-]{4,40}$/.test(proofId)) {
        return new Response(JSON.stringify({ error: 'Missing certificate', code: 'BAD_REQUEST' }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const { data: proof } = await supabaseClient
        .from('proof_records').select('id, paid_at, deleted_at').eq('id', proofId).maybeSingle();
      if (!proof || proof.deleted_at) {
        return new Response(JSON.stringify({ error: 'Certificate not found', code: 'NOT_FOUND' }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      if (proof.paid_at) {
        return new Response(JSON.stringify({ url: `${PRODUCTION_BASE_URL}/proof/${proofId}`, alreadyPaid: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }

      const certMetadata: Record<string, string> = {
        purchase_type: 'certificate',
        proof_id: proofId,
        user_id: user?.id || '',
        guest: isGuest ? 'true' : 'false',
      };
      const certConfig: any = {
        mode: 'payment',
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: CERTIFICATE_AMOUNT,
            product_data: {
              name: 'SafeOrStolen Verification Certificate',
              description: `Certificate ${proofId}: a dated, tamper-evident record of your SafeOrStolen check.`,
            },
          },
        }],
        metadata: certMetadata,
        payment_intent_data: { metadata: certMetadata },
        success_url: `${PRODUCTION_BASE_URL}/proof/${proofId}?paid=1`,
        cancel_url: `${PRODUCTION_BASE_URL}/proof/${proofId}`,
        allow_promotion_codes: true,
      };
      if (user?.email) certConfig.customer_email = user.email;

      const { data: certPurchase } = await supabaseClient.from('purchases').insert({
        user_id: user?.id ?? null,
        fingerprint: fingerprint || null,
        stripe_session_id: 'creating',
        amount: 0,
        currency: 'usd',
        status: 'pending',
      }).select('id').single();

      const certSession = await stripe.checkout.sessions.create(certConfig);
      if (certPurchase?.id) {
        await supabaseClient.from('purchases').update({ stripe_session_id: certSession.id }).eq('id', certPurchase.id);
      }
      console.log(`[CREATE-CHECKOUT] Certificate session ${certSession.id} for ${proofId}`);
      return new Response(JSON.stringify({ url: certSession.url, sessionId: certSession.id }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (isGuest && !fingerprint) {
      return new Response(JSON.stringify({ error: "Please sign in to continue", code: "NO_AUTH" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let customerId: string | undefined;
    if (user?.email) {
      const customers = await stripe.customers.list({ email: user.email, limit: 1 });
      customerId = customers.data.length > 0 ? customers.data[0].id : undefined;
    }

    const resolvedPriceId = await getOrCreatePrice(stripe, isSubscription ? NEW_PRICES.monthly : NEW_PRICES.single);

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
      plan_name: isSubscription ? 'Monthly' : 'Single check',
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
    // Oct 2 2026: no free trial (phone searches cost real money from day one).
    if (isSubscription) sessionConfig.subscription_data = { metadata };

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
    console.log(`[CREATE-CHECKOUT] Session created: ${session.id} (${isGuest ? 'guest' : 'user'}) price=${resolvedPriceId}`);

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
