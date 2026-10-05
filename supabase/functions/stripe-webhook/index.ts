import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

const TIER_CONFIG: Record<string, { tier: string; limit: number | null }> = {
  'price_1T8uNDGxnZLw8J7OrBKrbePR': { tier: 'pay_per_use', limit: 1 },
  'price_1T8uToGxnZLw8J7O6GcOuV1w': { tier: 'unlimited', limit: null },
  'price_1SSVqkGxnZLw8J7O3GwCyKRn': { tier: 'pay_per_use', limit: 1 },
  'price_1SHEOxGxnZLw8J7O2zzfPVBK': { tier: 'unlimited', limit: null },
  'price_1SHEUQGxnZLw8J7OinyVqNMK': { tier: 'personal', limit: 50 },
  'price_1SHEiuGxnZLw8J7OszscBBk7': { tier: 'professional', limit: null },
  'price_1SHEnFGxnZLw8J7Oq1PM96Eo': { tier: 'enterprise', limit: null },
  'price_starter_monthly_499': { tier: 'starter', limit: 15 },
  'price_personal_monthly_999': { tier: 'personal', limit: 50 },
  'price_professional_monthly_2999': { tier: 'professional', limit: null },
  'price_enterprise_custom': { tier: 'enterprise', limit: null },
  'price_pay_per_use_50': { tier: 'pay_per_use', limit: 1 },
  'price_1Rz7rm2eGaMDLFHojH9Vch1Y': { tier: 'starter', limit: 15 },
  'price_1Rz7xu2eGaMDLFHoqGT0Pyjk': { tier: 'personal', limit: 50 },
  'price_1Rz80X2eGaMDLFHozeZyChte': { tier: 'professional', limit: null },
  'price_1Rz83i2eGaMDLFHonAmu86lS': { tier: 'professional', limit: null },
};

// Oct 2 2026 pricing: $3.99 single check, $14.99/month (20 phone blacklist searches, everything else unlimited).
// create-checkout creates these Stripe prices with fixed lookup keys, so they are matched by key, not ID.
const LOOKUP_TIERS: Record<string, { tier: string; limit: number | null }> = {
  'sos_single_399': { tier: 'pay_per_use', limit: 1 },
  'sos_monthly_1499': { tier: 'unlimited', limit: null },
};

const TIER_LIMITS: Record<string, number | null> = {
  'pay_per_use': 1,
  'starter': 15,
  'unlimited': null,
  'personal': 50,
  'professional': null,
  'enterprise': null,
};

// past_due means a card payment failed but Stripe is still retrying it.
// Keep access on during that retry window so a paying customer is not
// locked out over a card hiccup. If Stripe gives up, it moves the
// subscription to canceled/unpaid and access is removed then.
function gateStatusFor(stripeStatus: string): string {
  if (stripeStatus === 'active' || stripeStatus === 'trialing' || stripeStatus === 'past_due') return 'active';
  return 'canceled';
}

async function resolveTier(
  priceId: string | undefined,
  supabaseClient: any,
  fallback: { tier: string; limit: number | null },
  context: Record<string, unknown>,
  lookupKey?: string | null
): Promise<{ tier: string; limit: number | null }> {
  if (lookupKey && LOOKUP_TIERS[lookupKey]) {
    return LOOKUP_TIERS[lookupKey];
  }
  if (priceId && TIER_CONFIG[priceId]) {
    return TIER_CONFIG[priceId];
  }
  console.error(`[WEBHOOK] UNMAPPED PRICE ID: ${priceId} (lookup ${lookupKey ?? 'none'}) -- falling back to ${fallback.tier}`);
  try {
    await supabaseClient.from('audit_logs').insert({
      action: 'UNMAPPED_STRIPE_PRICE',
      table_name: 'stripe_webhook_events',
      new_values: {
        price_id: priceId ?? 'none',
        lookup_key: lookupKey ?? 'none',
        fallback_tier: fallback.tier,
        detected_at: new Date().toISOString(),
        ...context,
      },
    });
  } catch (e) {
    console.error('[WEBHOOK] Failed to log unmapped price', e);
  }
  return fallback;
}

function paymentFailedEmailHtml(amount: string, payUrl: string, finalAttempt: boolean): string {
  const lead = finalAttempt
    ? `We tried your card a few times for your SafeOrStolen plan ($${amount}), and it still didn't go through. To keep your plan, please update your card now.`
    : `We tried to charge your card for your SafeOrStolen plan ($${amount}), and it didn't go through. This happens a lot, usually because a card expired or the bank flagged the charge.`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin:0; padding:20px; background:#f5f5f5;">
<div style="max-width:600px; margin:0 auto; background:white; border-radius:12px; overflow:hidden;">
<div style="background:#1f2937; padding:24px; text-align:center;"><h1 style="color:white; margin:0; font-size:24px;">SafeOrStolen</h1></div>
<div style="padding:28px;">
<h2 style="color:#1f2937; margin:0 0 14px;">Your payment didn't go through</h2>
<p style="color:#4b5563; line-height:1.6;">${lead}</p>
<p style="color:#4b5563; line-height:1.6;">Your access is still on for now. It only takes a minute to fix:</p>
<div style="text-align:center; margin:28px 0;"><a href="${payUrl}" style="background:#dc2626; color:white; padding:14px 34px; border-radius:8px; text-decoration:none; font-weight:600; display:inline-block;">Update card and pay</a></div>
<p style="color:#6b7280; font-size:14px; line-height:1.6;">If you meant to cancel, you can ignore this email. Questions? Just reply and I'll help.</p>
<p style="color:#4b5563;">Thanks,<br>Sam, founder of SafeOrStolen</p>
</div>
<div style="background:#f9fafb; padding:16px; text-align:center; border-top:1px solid #e5e7eb;"><p style="color:#9ca3af; font-size:12px; margin:0;">SafeOrStolen, Peoria, AZ. You're getting this because you have a paid SafeOrStolen plan.</p></div>
</div></body></html>`;
}

serve(async (req) => {
  console.log(`Webhook received: ${req.method} request`);
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  if (req.method === 'GET') {
    return new Response(JSON.stringify({
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests from Stripe webhooks"
    }), { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    const missing: string[] = [];
    if (!stripeSecretKey) missing.push("STRIPE_SECRET_KEY");
    if (!webhookSecret) missing.push("STRIPE_WEBHOOK_SECRET");
    if (!supabaseUrl) missing.push("SUPABASE_URL");
    if (!supabaseServiceKey) missing.push("SUPABASE_SERVICE_ROLE_KEY");

    if (missing.length > 0) {
      console.error(`Missing required environment variables: ${missing.join(", ")}`);
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(stripeSecretKey!, { apiVersion: "2023-10-16" });
    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      console.error("No Stripe signature provided");
      return new Response(JSON.stringify({ error: "No signature" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.text();
    let event: any;

    try {
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret!);
      console.log(`[WEBHOOK] Signature verified for event: ${event.type} (${event.id})`);
    } catch (err) {
      console.error(`[WEBHOOK] SIGNATURE VERIFICATION FAILED`);
      console.error(`[WEBHOOK] Error: ${(err instanceof Error ? err.message : String(err))}`);
      const supabaseClient = createClient(supabaseUrl!, supabaseServiceKey!);
      await supabaseClient.from('audit_logs').insert({
        action: 'WEBHOOK_SIGNATURE_FAILURE',
        table_name: 'stripe_webhook_events',
        new_values: {
          error: (err instanceof Error ? err.message : String(err)),
          timestamp: new Date().toISOString(),
          signature_present: !!signature,
          secret_configured: !!webhookSecret
        }
      });
      return new Response(JSON.stringify({
        error: `Webhook signature verification failed`,
        hint: "Ensure STRIPE_WEBHOOK_SECRET matches the signing secret from your Stripe webhook endpoint"
      }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const supabaseClient = createClient(supabaseUrl!, supabaseServiceKey!);
    console.log(`Processing Stripe event: ${event.type} (ID: ${event.id})`);

    const { data: existingEvent } = await supabaseClient
      .from('stripe_webhook_events')
      .select('id, processed_at')
      .eq('stripe_event_id', event.id)
      .single();

    if (existingEvent && existingEvent.processed_at) {
      console.log(`Event ${event.id} already processed - returning success`);
      return new Response(JSON.stringify({ received: true, already_processed: true }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    if (!existingEvent) {
      await supabaseClient.from('stripe_webhook_events').insert({
        stripe_event_id: event.id,
        event_type: event.type,
        processed_at: null
      });
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;
          console.log(`Processing checkout completion for session ${session.id}`);
          console.log(`Session mode: ${session.mode}, payment_status: ${session.payment_status}`);

          const metadata = session.metadata || {};
          const purchaseType = metadata.purchase_type || 'subscription';
          const userId = metadata.user_id || undefined;

          // Oct 5 2026: a $1.99 verification certificate. It only issues the
          // certificate; it must never grant checks or change the buyer's plan,
          // so it is handled here and nothing below runs.
          if (purchaseType === 'certificate') {
            const proofId = (metadata.proof_id || '').toString().trim().toUpperCase();
            if (session.payment_status === 'paid' && proofId) {
              const { error: proofError } = await supabaseClient
                .from('proof_records')
                .update({ paid_at: new Date().toISOString(), stripe_session_id: session.id })
                .eq('id', proofId)
                .is('paid_at', null);
              if (proofError) console.error(`[WEBHOOK] Certificate ${proofId} not marked paid: ${proofError.message}`);
              else console.log(`[WEBHOOK] Certificate ${proofId} issued`);
            } else {
              console.error(`[WEBHOOK] Certificate session ${session.id} not paid or missing proof_id`);
            }
            const { error: certPurchaseError } = await supabaseClient
              .from('purchases')
              .update({
                status: session.payment_status === 'paid' ? 'completed' : 'pending',
                stripe_customer_id: session.customer,
                amount: session.amount_total ?? undefined,
                currency: session.currency ?? undefined,
                guest_email: userId ? undefined : (session.customer_details?.email?.toLowerCase() ?? undefined),
                updated_at: new Date().toISOString(),
              })
              .eq('stripe_session_id', session.id);
            if (certPurchaseError) console.error(`Error updating certificate purchase: ${certPurchaseError.message}`);
            break;
          }

          if (purchaseType === 'credit_pack') {
            const creditsAmount = parseInt(metadata.credits_amount || '0');
            if (creditsAmount > 0 && userId) {
              const { data: profile } = await supabaseClient
                .from('profiles').select('credit_balance').eq('id', userId).single();
              const currentBalance = profile?.credit_balance || 0;
              const newBalance = currentBalance + creditsAmount;
              const { error: creditError } = await supabaseClient
                .from('profiles').update({ credit_balance: newBalance }).eq('id', userId);
              if (!creditError) {
                await supabaseClient.from('credit_transactions').insert({
                  user_id: userId,
                  transaction_type: 'purchase',
                  amount: creditsAmount,
                  balance_after: newBalance,
                  description: `Credit pack purchase (${creditsAmount} credits)`,
                  stripe_session_id: session.id
                });
              }
            }
          }

          const customerEmail = session.customer_details?.email?.toLowerCase();
          const guestFingerprint = (metadata.fingerprint || '').toString().trim();

          if (session.payment_status === 'paid' || (session.mode === 'subscription' && session.status === 'complete')) {
            let profileId = userId;
            if (!profileId && customerEmail) {
              const { data: profileByEmail } = await supabaseClient
                .from('profiles').select('id').ilike('email', customerEmail).maybeSingle();
              if (profileByEmail) profileId = profileByEmail.id;
            }

            let subscriptionTier = 'starter';
            let monthlyLimit: number | null = 15;

            if (session.mode === 'subscription' && session.subscription) {
              const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
              const price0: any = subscription.items.data[0]?.price;
              const tierInfo = await resolveTier(
                price0?.id, supabaseClient, { tier: 'starter', limit: 15 },
                { source: 'checkout.session.completed', session_id: session.id, customer_email: customerEmail },
                price0?.lookup_key
              );
              subscriptionTier = tierInfo.tier;
              monthlyLimit = tierInfo.limit;
            } else if (session.mode === 'payment') {
              let oneTimePriceId: string | undefined;
              let oneTimeLookup: string | null | undefined;
              try {
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 });
                oneTimePriceId = lineItems.data[0]?.price?.id;
                oneTimeLookup = (lineItems.data[0]?.price as any)?.lookup_key;
              } catch (e) {
                console.error('[WEBHOOK] Could not list line items for one-time payment', e);
              }
              const tierInfo = await resolveTier(
                oneTimePriceId, supabaseClient, { tier: 'pay_per_use', limit: 1 },
                { source: 'checkout.session.completed:payment', session_id: session.id, customer_email: customerEmail },
                oneTimeLookup
              );
              subscriptionTier = tierInfo.tier;
              monthlyLimit = tierInfo.limit;
            }

            let profileOk = false;
            if (profileId) {
              const { error: profileUpdateError } = await supabaseClient
                .from('profiles')
                .update({
                  stripe_customer_id: session.customer as string,
                  subscription_tier: subscriptionTier,
                  monthly_verification_limit: monthlyLimit,
                  verifications_used_this_month: 0,
                  billing_cycle_start_date: new Date().toISOString(),
                  is_trial_expired: true,
                  subscription_end: session.mode === 'subscription' && session.subscription
                    ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
                    : null,
                  updated_at: new Date().toISOString()
                })
                .eq('id', profileId);
              profileOk = !profileUpdateError;
              if (profileUpdateError) console.error(`[WEBHOOK] Profile update error: ${profileUpdateError.message}`);
            }

            // Grant access: by account (profileId) and/or by browser fingerprint (guest checkout, Sept 29 2026).
            if (profileOk || guestFingerprint) {
              const planMapping: Record<string, string> = {
                'pay_per_use': 'single', 'starter': 'basic', 'unlimited': 'pro',
                'personal': 'pro', 'professional': 'pro', 'enterprise': 'business',
              };
              const gatePlan = planMapping[subscriptionTier] || 'basic';
              const planLimits: Record<string, number> = { single: 1, basic: 50, pro: 999999, business: 999999 };
              const row: Record<string, unknown> = {
                user_id: profileOk ? profileId : null,
                stripe_customer_id: session.customer as string,
                stripe_subscription_id: (session.subscription as string) || session.id,
                plan: gatePlan,
                status: 'active',
                checks_used_this_month: 0,
                checks_limit: planLimits[gatePlan] || 50,
                period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                updated_at: new Date().toISOString(),
              };
              if (guestFingerprint) row.fingerprint = guestFingerprint;
              const { error: gateErr } = await supabaseClient.from('subscriptions').upsert(row, { onConflict: 'stripe_subscription_id' });
              if (gateErr) console.error(`[WEBHOOK] CRITICAL: access grant failed: ${gateErr.message}`);
              else console.log(`[WEBHOOK] Access granted plan=${gatePlan} user=${profileOk ? profileId : 'guest'} fingerprint=${guestFingerprint ? 'yes' : 'no'}`);
            } else {
              console.error(`CRITICAL: Could not find profile or fingerprint. Email: ${customerEmail}, UserId: ${userId}`);
              await supabaseClient.from('audit_logs').insert({
                action: 'PAID_BUT_NOT_GRANTED',
                table_name: 'stripe_webhook_events',
                new_values: { session_id: session.id, customer_email: customerEmail ?? null, detected_at: new Date().toISOString() },
              });
            }
          }

          try {
            const { error: purchaseError } = await supabaseClient
              .from("purchases")
              .update({
                status: "completed",
                stripe_customer_id: session.customer,
                amount: session.amount_total ?? undefined,
                currency: session.currency ?? undefined,
                guest_email: userId ? undefined : (customerEmail ?? undefined),
                updated_at: new Date().toISOString()
              })
              .eq("stripe_session_id", session.id);
            if (purchaseError) console.error(`Error updating purchase: ${purchaseError.message}`);
          } catch (purchaseUpdateError) {
            console.error(`Exception updating purchase: ${(purchaseUpdateError instanceof Error ? purchaseUpdateError.message : String(purchaseUpdateError))}`);
          }
          break;
        }

        case "customer.subscription.created":
        case "customer.subscription.updated": {
          const subscription = event.data.object;
          console.log(`Processing subscription ${event.type} for ${subscription.id} (stripe status: ${subscription.status})`);

          try {
            const customer: any = await stripe.customers.retrieve(subscription.customer);
            if (customer.deleted) { console.error("Customer was deleted, skipping subscription update"); break; }

            const priceId = subscription.items.data[0].price.id;
            const lookupKey = (subscription.items.data[0].price as any).lookup_key;
            const interval = subscription.items.data[0].price.recurring?.interval || 'month';
            const customerEmail = customer.email?.toLowerCase();

            const tierInfo = await resolveTier(
              priceId, supabaseClient, { tier: 'starter', limit: 15 },
              { source: event.type, subscription_id: subscription.id, customer_email: customerEmail },
              lookupKey
            );
            const subscriptionTier = tierInfo.tier;
            const monthlyLimit = tierInfo.limit !== undefined ? tierInfo.limit : (TIER_LIMITS[subscriptionTier] ?? 15);

            // Keep public.subscriptions.status in sync with Stripe's real
            // subscription status. check-gate reads this table first.
            const gateStatus = gateStatusFor(subscription.status);
            const { error: gateUpdateError } = await supabaseClient
              .from('subscriptions')
              .update({
                status: gateStatus,
                period_end: new Date(subscription.current_period_end * 1000).toISOString(),
                updated_at: new Date().toISOString(),
              })
              .eq('stripe_customer_id', customer.id);
            if (gateUpdateError) {
              console.error(`[WEBHOOK] Failed to sync gating status: ${gateUpdateError.message}`);
            } else {
              console.log(`[WEBHOOK] Synced subscriptions.status -> ${gateStatus} for customer ${customer.id}`);
            }

            const { data: profile, error: profileLookupError } = await supabaseClient
              .from('profiles').select('id').ilike('email', customerEmail || '').maybeSingle();
            if (profileLookupError) console.error(`Profile lookup error: ${profileLookupError.message}`);

            if (profile) {
              if (gateStatus === 'active') {
                // Only reset usage on a genuinely active/trialing sub, not while past_due.
                const resetUsage = subscription.status !== 'past_due';
                const profileUpdate: Record<string, unknown> = {
                  stripe_customer_id: customer.id,
                  subscription_tier: subscriptionTier,
                  subscription_interval: interval,
                  subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
                  monthly_verification_limit: monthlyLimit,
                  is_trial_expired: true,
                  updated_at: new Date().toISOString()
                };
                if (resetUsage) {
                  profileUpdate.verifications_used_this_month = 0;
                  profileUpdate.billing_cycle_start_date = new Date().toISOString();
                }
                const { error: updateError } = await supabaseClient
                  .from('profiles')
                  .update(profileUpdate)
                  .eq('id', profile.id);
                if (updateError) console.error(`Profile update error: ${updateError.message}`);
              } else {
                const { error: downgradeError } = await supabaseClient
                  .from('profiles')
                  .update({
                    subscription_tier: null,
                    subscription_interval: null,
                    updated_at: new Date().toISOString()
                  })
                  .eq('id', profile.id);
                if (downgradeError) console.error(`Profile downgrade error: ${downgradeError.message}`);
                else console.log(`Downgraded profile ${profile.id} (stripe status: ${subscription.status})`);
              }
            } else {
              console.log(`No profile for email ${customerEmail} (guest subscriber; access handled by subscriptions row)`);
            }

            const { error: subscriptionError } = await supabaseClient
              .from("subscribers")
              .upsert({
                email: customer.email,
                stripe_customer_id: customer.id,
                subscribed: ["active", "trialing", "past_due"].includes(subscription.status),
                subscription_tier: subscriptionTier,
                subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
                updated_at: new Date().toISOString(),
              }, { onConflict: 'email' });
            if (subscriptionError) console.error(`Error updating subscriber: ${subscriptionError.message}`);
          } catch (subscriptionUpdateError) {
            console.error(`Exception processing subscription: ${(subscriptionUpdateError instanceof Error ? subscriptionUpdateError.message : String(subscriptionUpdateError))}`);
          }
          break;
        }

        case "customer.subscription.deleted": {
          const subscription = event.data.object;
          console.log(`Processing subscription deletion for ${subscription.id}`);

          try {
            const customer: any = await stripe.customers.retrieve(subscription.customer);
            if (customer.deleted) { console.error("Customer was deleted, skipping"); break; }

            const { error: gateCancelError } = await supabaseClient
              .from('subscriptions')
              .update({ status: 'canceled', updated_at: new Date().toISOString() })
              .eq('stripe_customer_id', customer.id);
            if (gateCancelError) {
              console.error(`[WEBHOOK] Failed to cancel gating row: ${gateCancelError.message}`);
            } else {
              console.log(`[WEBHOOK] Set subscriptions.status = canceled for customer ${customer.id}`);
            }

            const { data: profile } = await supabaseClient
              .from('profiles').select('id').ilike('email', customer.email || '').maybeSingle();
            if (profile) {
              await supabaseClient
                .from('profiles')
                .update({
                  subscription_tier: null,
                  subscription_interval: null,
                  subscription_end: null,
                  updated_at: new Date().toISOString()
                })
                .eq('id', profile.id);
            }

            const { error: cancellationError } = await supabaseClient
              .from("subscribers")
              .update({
                subscribed: false,
                subscription_tier: null,
                subscription_end: null,
                updated_at: new Date().toISOString(),
              })
              .eq("stripe_customer_id", customer.id);
            if (cancellationError) console.error(`Error updating cancelled subscription: ${cancellationError.message}`);
          } catch (cancellationError) {
            console.error(`Exception processing deletion: ${(cancellationError instanceof Error ? cancellationError.message : String(cancellationError))}`);
          }
          break;
        }

        case "invoice.payment_failed": {
          // Tell the customer their card failed and give them a link to fix it.
          // Emails on the first failure and on Stripe's final retry only, so
          // nobody gets spammed on every retry.
          const invoice = event.data.object as any;
          try {
            if (!invoice.subscription) {
              console.log(`[DUNNING] Invoice ${invoice.id} is not for a subscription, skipping email`);
              break;
            }
            const attempt = invoice.attempt_count || 1;
            const finalAttempt = !invoice.next_payment_attempt;
            if (attempt !== 1 && !finalAttempt) {
              console.log(`[DUNNING] Attempt ${attempt} for ${invoice.id}, not emailing this time`);
              break;
            }

            let email: string | undefined = invoice.customer_email || undefined;
            if (!email && invoice.customer) {
              const customer = await stripe.customers.retrieve(invoice.customer as string);
              if (!(customer as any).deleted) email = (customer as any).email || undefined;
            }
            if (!email) {
              console.error(`[DUNNING] No email for invoice ${invoice.id}`);
              break;
            }

            const payUrl: string = invoice.hosted_invoice_url || 'https://safeorstolen.com/dashboard';
            const amount = ((invoice.amount_due || 0) / 100).toFixed(2);
            const resendKey = Deno.env.get('RESEND_API_KEY');
            if (!resendKey) {
              console.error('[DUNNING] RESEND_API_KEY not set, cannot email customer');
              break;
            }

            const resp = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({
                from: 'SafeOrStolen <noreply@safeorstolen.com>',
                to: [email],
                reply_to: 'safeorstolenmail@gmail.com',
                subject: finalAttempt
                  ? 'Last reminder: your SafeOrStolen payment needs attention'
                  : "Your SafeOrStolen payment didn't go through",
                html: paymentFailedEmailHtml(amount, payUrl, finalAttempt),
              }),
            });
            const respText = await resp.text();
            if (!resp.ok) console.error(`[DUNNING] Resend error ${resp.status}: ${respText}`);
            else console.log(`[DUNNING] Payment-failed email sent to ${email} (attempt ${attempt})`);

            await supabaseClient.from('audit_logs').insert({
              action: resp.ok ? 'PAYMENT_FAILED_EMAIL_SENT' : 'PAYMENT_FAILED_EMAIL_ERROR',
              table_name: 'stripe_webhook_events',
              new_values: {
                invoice_id: invoice.id,
                customer_id: invoice.customer,
                email,
                attempt,
                final_attempt: finalAttempt,
                amount_due: invoice.amount_due,
                sent_at: new Date().toISOString(),
              },
            });
          } catch (dunningError) {
            console.error(`[DUNNING] Exception: ${(dunningError instanceof Error ? dunningError.message : String(dunningError))}`);
          }
          break;
        }

        case "payment_intent.succeeded": {
          console.log(`Payment intent succeeded: ${event.data.object.id}`);
          break;
        }

        case "payment_intent.payment_failed": {
          console.log(`Payment failed: ${event.data.object.id}`);
          break;
        }

        default: {
          console.log(`Unhandled event type: ${event.type}`);
          break;
        }
      }

      console.log(`Successfully processed event ${event.type} (ID: ${event.id})`);

      await supabaseClient
        .from('stripe_webhook_events')
        .update({ processed_at: new Date().toISOString() })
        .eq('stripe_event_id', event.id);

      return new Response(JSON.stringify({ received: true, event_id: event.id }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200,
      });

    } catch (eventProcessingError) {
      console.error(`Error processing event ${event.type}: ${(eventProcessingError instanceof Error ? eventProcessingError.message : String(eventProcessingError))}`);
      await supabaseClient
        .from('stripe_webhook_events')
        .update({
          processed_at: new Date().toISOString(),
          error_message: (eventProcessingError instanceof Error ? eventProcessingError.message : String(eventProcessingError))
        })
        .eq('stripe_event_id', event.id);
      return new Response(JSON.stringify({
        received: true, event_id: event.id, processing_error: "Event acknowledged but processing failed"
      }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 });
    }

  } catch (error) {
    console.error(`Critical webhook error: ${(error instanceof Error ? error.message : String(error))}`);
    return createErrorResponse(error, { functionName: 'stripe-webhook', operation: 'webhook_processing' }, corsHeaders);
  }
});
