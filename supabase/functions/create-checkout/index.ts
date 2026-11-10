import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

const PRODUCTION_BASE_URL = 'https://safeorstolen.com';

// New checkouts use one universal check. Existing Stripe sessions and prices remain valid.
const UNIVERSAL_PRICE_ID = 'price_1UaFfUGxnZLw8J7OhpJBpwCB';
const MONTHLY_PRICE_ID = 'price_1T8uToGxnZLw8J7O6GcOuV1w';
const CERTIFICATE_AMOUNT = 199;

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
    const isSubscription = !!body?.isSubscription || (/unlimited|month|pro\b|plan/.test(pn) && !/single|per check|pay per|one-time|one time|complete|gun buyer/.test(pn));
    const isGunBuyer = false; // old clients are shown the universal price before payment
    const isComplete = false;
    const isInlineCheckPack = isComplete || isGunBuyer;
    const fingerprint = cleanFingerprint(body?.fingerprint);
    const isGuest = !user;
    console.log(`[CREATE-CHECKOUT] ${isGuest ? 'GUEST' : 'User ' + user!.email}`, { priceId, planName, isSubscription, isComplete, isGunBuyer, hasFingerprint: !!fingerprint });

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
    if (!stripeKey || !/^(sk|rk)_(live|test)_/.test(stripeKey)) {
      console.log(`[CREATE-CHECKOUT] Invalid Stripe key`);
      return new Response(JSON.stringify({ error: "Payment system configuration error", code: "STRIPE_CONFIG" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    if (body?.action === 'payment_status') {
      const id = String(body?.sessionId || '');
      if (!/^cs_[A-Za-z0-9_]{6,240}$/.test(id)) {
        return new Response(JSON.stringify({ error: 'Invalid checkout session' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      const session = await stripe.checkout.sessions.retrieve(id);
      const owned = (user?.id && session.metadata?.user_id === user.id) ||
        (fingerprint && session.metadata?.fingerprint === fingerprint);
      if (!owned) return new Response(JSON.stringify({ error: 'Checkout session not found' }), { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      const paid = session.payment_status === 'paid';
      const entitlementId = typeof session.subscription === 'string' ? session.subscription : session.id;
      const { data: entitlement } = await supabaseClient.from('subscriptions').select('status').eq('stripe_subscription_id', entitlementId).maybeSingle();
      return new Response(JSON.stringify({ paid, ready: paid && entitlement?.status === 'active', status: session.status }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

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

      if (user?.id || fingerprint) {
        let q: any = supabaseClient.from('subscriptions').select('id').eq('plan', 'complete')
          .gte('created_at', new Date(Date.now() - 30 * 86400000).toISOString()).limit(1);
        q = user?.id ? q.eq('user_id', user.id) : q.eq('fingerprint', fingerprint);
        const { data: comp } = await q;
        if (comp && comp.length) {
          await supabaseClient.from('proof_records').update({ paid_at: new Date().toISOString() }).eq('id', proofId);
          console.log(`[CREATE-CHECKOUT] Certificate ${proofId} included with Complete check`);
          return new Response(JSON.stringify({ url: `${PRODUCTION_BASE_URL}/proof/${proofId}?paid=1`, alreadyPaid: true, included: true }),
            { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
        }
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

    const resolvedPriceId = isSubscription ? MONTHLY_PRICE_ID : UNIVERSAL_PRICE_ID;

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

    const planLabel = isSubscription ? 'Monthly' : 'One verification check';
    const metadata: Record<string, string> = {
      user_id: user?.id || '',
      guest: isGuest ? 'true' : 'false',
      fingerprint,
      item_type: itemType || 'unknown',
      serial_number: (serialNumber || '').toString().slice(0, 200),
      verification_id: verificationId || '',
      plan_name: planLabel,
    };
    if (isInlineCheckPack) metadata.purchase_type = 'complete_check';

    const lineItems = [{ price: resolvedPriceId, quantity: 1 }];
    if (!isSubscription) {
      metadata.pricing_version = 'universal_499_v1';
      metadata.checks = '1';
    }

    const sessionConfig: any = {
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: isSubscription ? "subscription" : "payment",
      line_items: lineItems,
      metadata,
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
    };
    if (!isSubscription) sessionConfig.payment_intent_data = { metadata };
    if (customerId) { sessionConfig.customer = customerId; sessionConfig.customer_update = { address: 'auto' }; }
    else if (user?.email) sessionConfig.customer_email = user.email;
    if (!isSubscription && !customerId) sessionConfig.customer_creation = 'always';
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
    console.log(`[CREATE-CHECKOUT] Session created: ${session.id} (${isGuest ? 'guest' : 'user'}) ${planLabel} item=${itemType || 'unknown'} ${resolvedPriceId ? 'price=' + resolvedPriceId : ''}`);

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
