import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

// SIMPLIFIED PRICING MODEL - Tier configuration with quotas
// Unlimited plan ($4.99/month) uses the starter price ID with unlimited quota (300 fair-use cap)
const TIER_CONFIG: Record<string, { tier: string; limit: number | null }> = {
  'price_1SSVqkGxnZLw8J7O3GwCyKRn': { tier: 'pay_per_use', limit: 1 },
  'price_1SHEOxGxnZLw8J7O2zzfPVBK': { tier: 'unlimited', limit: null }, // $4.99/month Unlimited (was starter)
  'price_1SHEUQGxnZLw8J7OinyVqNMK': { tier: 'personal', limit: 50 },    // Legacy
  'price_1SHEiuGxnZLw8J7OszscBBk7': { tier: 'professional', limit: null },
  'price_1SHEnFGxnZLw8J7Oq1PM96Eo': { tier: 'enterprise', limit: null },
};

serve(async (req) => {
  console.log(`Webhook received: ${req.method} request`);
  
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // GET request: Disabled for security - diagnostic info previously exposed configuration details
  // To sync stuck payments, use an authenticated admin endpoint instead
  if (req.method === 'GET') {
    return new Response(JSON.stringify({ 
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests from Stripe webhooks"
    }), {
      status: 405, 
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
  
  try {

    // Validate environment variables
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
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      console.error("No Stripe signature provided");
      return new Response(JSON.stringify({ error: "No signature" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get the raw body as text
    const body = await req.text();
    let event;

    try {
      console.log("[WEBHOOK] Verifying signature...");
      console.log(`[WEBHOOK] Signature prefix: ${signature?.substring(0, 20)}...`);
      console.log(`[WEBHOOK] Body length: ${body.length}`);
      console.log(`[WEBHOOK] Secret prefix: ${webhookSecret?.substring(0, 10)}...`);
      
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        webhookSecret
      );
      console.log(`[WEBHOOK] ✓ Signature verified for event: ${event.type} (${event.id})`);
    } catch (err) {
      // OBSERVABILITY: Log detailed signature failure info
      console.error(`[WEBHOOK] ✗ SIGNATURE VERIFICATION FAILED`);
      console.error(`[WEBHOOK] Error: ${err.message}`);
      console.error(`[WEBHOOK] Timestamp: ${new Date().toISOString()}`);
      console.error(`[WEBHOOK] Signature header present: ${!!signature}`);
      console.error(`[WEBHOOK] Secret configured: ${!!webhookSecret}`);
      console.error(`[WEBHOOK] Secret starts with whsec_: ${webhookSecret?.startsWith('whsec_')}`);
      
      // Log to audit for admin visibility
      const supabaseClient = createClient(supabaseUrl!, supabaseServiceKey!);
      await supabaseClient.from('audit_logs').insert({
        action: 'WEBHOOK_SIGNATURE_FAILURE',
        table_name: 'stripe_webhook_events',
        new_values: {
          error: err.message,
          timestamp: new Date().toISOString(),
          signature_present: !!signature,
          secret_configured: !!webhookSecret
        }
      });
      
      return new Response(JSON.stringify({ 
        error: `Webhook signature verification failed`,
        hint: "Ensure STRIPE_WEBHOOK_SECRET matches the signing secret from your Stripe webhook endpoint"
      }), { 
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }, 
      });
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);
    console.log(`Processing Stripe event: ${event.type} (ID: ${event.id})`);

    // SECURITY FIX: Insert idempotency record BEFORE processing
    const { data: existingEvent, error: checkError } = await supabaseClient
      .from('stripe_webhook_events')
      .select('id, processed_at')
      .eq('stripe_event_id', event.id)
      .single();

    if (existingEvent && existingEvent.processed_at) {
      console.log(`Event ${event.id} already processed - returning success`);
      return new Response(
        JSON.stringify({ received: true, already_processed: true }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Insert processing marker
    if (!existingEvent) {
      await supabaseClient.from('stripe_webhook_events').insert({
        stripe_event_id: event.id,
        event_type: event.type,
        processed_at: null // Mark as processing
      });
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;
          console.log(`Processing checkout completion for session ${session.id}`);
          console.log(`Session mode: ${session.mode}, payment_status: ${session.payment_status}`);
          console.log(`Customer email: ${session.customer_details?.email}, Customer ID: ${session.customer}`);
          
          // REVENUE FIX: Grant credits for credit pack purchases
          const metadata = session.metadata || {};
          const purchaseType = metadata.purchase_type || 'subscription';
          const userId = metadata.user_id;
          
          if (purchaseType === 'credit_pack') {
            const creditsAmount = parseInt(metadata.credits_amount || '0');
            
            if (creditsAmount > 0 && userId) {
              console.log(`Granting ${creditsAmount} credits to user ${userId}`);
              
              // Get current balance
              const { data: profile } = await supabaseClient
                .from('profiles')
                .select('credit_balance')
                .eq('id', userId)
                .single();
              
              const currentBalance = profile?.credit_balance || 0;
              const newBalance = currentBalance + creditsAmount;
              
              // Update credit balance
              const { error: creditError } = await supabaseClient
                .from('profiles')
                .update({ credit_balance: newBalance })
                .eq('id', userId);
              
              if (creditError) {
                console.error(`Error granting credits: ${creditError.message}`);
              } else {
                console.log(`Successfully granted ${creditsAmount} credits. New balance: ${newBalance}`);
                
                // Log transaction
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
          
          // CRITICAL FIX: Update user profile for ALL successful checkouts
          const customerEmail = session.customer_details?.email?.toLowerCase();
          
          if (session.payment_status === 'paid') {
            console.log(`Payment confirmed paid, updating user profile...`);
            
            // Try to find user by metadata user_id first, then by email
            let profileId = userId;
            
            if (!profileId && customerEmail) {
              console.log(`Looking up profile by email: ${customerEmail}`);
              const { data: profileByEmail } = await supabaseClient
                .from('profiles')
                .select('id')
                .ilike('email', customerEmail) // Case-insensitive match
                .single();
              
              if (profileByEmail) {
                profileId = profileByEmail.id;
                console.log(`Found profile by email: ${profileId}`);
              }
            }
            
            if (profileId) {
              // Determine tier from session
              let subscriptionTier = 'starter';
              let monthlyLimit = 15;
              
              if (session.mode === 'subscription' && session.subscription) {
                // Get subscription details
                const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
                const priceId = subscription.items.data[0]?.price.id;
                
                // UPDATED: Use real live price IDs
                const TIER_MAPPING: Record<string, { tier: string; limit: number | null }> = {
                  // Current live price IDs
                  'price_1SSVqkGxnZLw8J7O3GwCyKRn': { tier: 'pay_per_use', limit: 1 },
                  'price_1SHEOxGxnZLw8J7O2zzfPVBK': { tier: 'starter', limit: 15 },
                  'price_1SHEUQGxnZLw8J7OinyVqNMK': { tier: 'personal', limit: 50 },
                  'price_1SHEiuGxnZLw8J7OszscBBk7': { tier: 'professional', limit: null },
                  'price_1SHEnFGxnZLw8J7Oq1PM96Eo': { tier: 'enterprise', limit: null },
                  // Legacy support
                  'price_starter_monthly_499': { tier: 'starter', limit: 15 },
                  'price_personal_monthly_999': { tier: 'personal', limit: 50 },
                  'price_professional_monthly_2999': { tier: 'professional', limit: null },
                  'price_enterprise_custom': { tier: 'enterprise', limit: null },
                  "price_1Rz7rm2eGaMDLFHojH9Vch1Y": { tier: 'starter', limit: 15 },
                  "price_1Rz7xu2eGaMDLFHoqGT0Pyjk": { tier: 'personal', limit: 50 },
                  "price_1Rz80X2eGaMDLFHozeZyChte": { tier: 'professional', limit: null },
                  "price_1Rz83i2eGaMDLFHonAmu86lS": { tier: 'professional', limit: null }
                };
                
                const tierInfo = TIER_MAPPING[priceId] || { tier: 'starter', limit: 15 };
                subscriptionTier = tierInfo.tier;
                console.log(`[WEBHOOK] Subscription priceId: ${priceId} -> tier: ${subscriptionTier}`);
                monthlyLimit = tierInfo.limit;
                
                console.log(`Subscription tier determined: ${subscriptionTier}, limit: ${monthlyLimit}`);
              } else if (session.mode === 'payment') {
                // One-time payment - grant single verification credit
                subscriptionTier = 'pay_per_use';
                monthlyLimit = 1;
              }
              
              // Update the profile
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
              
              if (profileUpdateError) {
                console.error(`Error updating profile: ${profileUpdateError.message}`);
              } else {
                console.log(`SUCCESS: Updated profile ${profileId} with tier ${subscriptionTier}`);

                // Also upsert into subscriptions table for check-gate
                const planMapping: Record<string, string> = {
                  'pay_per_use': 'single',
                  'starter': 'basic',
                  'unlimited': 'basic',
                  'personal': 'pro',
                  'professional': 'pro',
                  'enterprise': 'business',
                };
                const gatePlan = planMapping[subscriptionTier] || 'basic';
                const planLimits: Record<string, number> = {
                  single: 1, basic: 50, pro: 999999, business: 999999,
                };

                await supabaseClient
                  .from('subscriptions')
                  .upsert({
                    user_id: profileId,
                    stripe_customer_id: session.customer as string,
                    stripe_subscription_id: (session.subscription as string) || session.id,
                    plan: gatePlan,
                    status: 'active',
                    checks_used_this_month: 0,
                    checks_limit: planLimits[gatePlan] || 50,
                    period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                    updated_at: new Date().toISOString(),
                  }, { onConflict: 'stripe_subscription_id' });
                console.log(`[WEBHOOK] Upserted subscriptions table for check-gate, plan: ${gatePlan}`);
              }
            } else {
              console.error(`CRITICAL: Could not find profile for checkout. Email: ${customerEmail}, UserId: ${userId}`);
            }
          }
          
          try {
            // Update purchase status with error handling
            const { error: purchaseError } = await supabaseClient
              .from("purchases")
              .update({ 
                status: "completed",
                stripe_customer_id: session.customer,
                updated_at: new Date().toISOString()
              })
              .eq("stripe_session_id", session.id);

            if (purchaseError) {
              console.error(`Error updating purchase: ${purchaseError.message}`);
            } else {
              console.log(`Successfully updated purchase for session ${session.id}`);
            }
          } catch (purchaseUpdateError) {
            console.error(`Exception updating purchase: ${purchaseUpdateError.message}`);
          }
          
          // Get the verification ID from the session metadata
          const verificationId = session.metadata?.verification_id;
          
          if (verificationId) {
            console.log(`Processing verification result for ID: ${verificationId}`);
            
            try {
              // Generate a comprehensive verification result
              const mockResult = {
                status: "verified",
                verified_at: new Date().toISOString(),
                manufacturer: "Apple",
                model: "iPhone 14 Pro",
                manufactureDate: "2022-09-15",
                originalOwner: true,
                hasWarranty: true,
                warrantyExpiresAt: "2024-09-15",
                serialDetails: {
                  valid: true,
                  registrationDate: "2022-09-20",
                  lastChecked: new Date().toISOString(),
                },
                marketValue: {
                  currency: "USD",
                  amount: 899,
                  condition: "excellent"
                }
              };
              
              // Update the verification with the result
              const { error: verificationError } = await supabaseClient
                .from("verification_searches")
                .update({ 
                  result: mockResult 
                })
                .eq("id", verificationId);
                
              if (verificationError) {
                console.error(`Error updating verification: ${verificationError.message}`);
              } else {
                console.log(`Successfully updated verification result for ID: ${verificationId}`);
              }
            } catch (verificationUpdateError) {
              console.error(`Exception updating verification: ${verificationUpdateError.message}`);
            }
          }
          break;
        }
        
        case "customer.subscription.created":
        case "customer.subscription.updated": {
          const subscription = event.data.object;
          console.log(`Processing subscription ${event.type} for subscription ${subscription.id}`);
          
          try {
            // Get customer details
            const customer = await stripe.customers.retrieve(subscription.customer);
            if (customer.deleted) {
              console.error("Customer was deleted, skipping subscription update");
              break;
            }
            
            // Determine subscription tier and interval from price
            const priceId = subscription.items.data[0].price.id;
            const interval = subscription.items.data[0].price.recurring?.interval || 'month';
            // UPDATED: Map Stripe Price IDs to tiers - includes real live price IDs
            const TIER_MAPPING: Record<string, string> = {
              // Current live price IDs
              'price_1SSVqkGxnZLw8J7O3GwCyKRn': 'pay_per_use',
              'price_1SHEOxGxnZLw8J7O2zzfPVBK': 'starter',
              'price_1SHEUQGxnZLw8J7OinyVqNMK': 'personal',
              'price_1SHEiuGxnZLw8J7OszscBBk7': 'professional',
              'price_1SHEnFGxnZLw8J7Oq1PM96Eo': 'enterprise',
              // Legacy support
              'price_starter_monthly_499': 'starter',
              'price_personal_monthly_999': 'personal',
              'price_professional_monthly_2999': 'professional',
              'price_enterprise_custom': 'enterprise',
              'price_pay_per_use_50': 'pay_per_use',
              "price_1Rz7rm2eGaMDLFHojH9Vch1Y": "starter",
              "price_1Rz7xu2eGaMDLFHoqGT0Pyjk": "personal",
              "price_1Rz80X2eGaMDLFHozeZyChte": "professional",
              "price_1Rz83i2eGaMDLFHonAmu86lS": "professional"
            };
            
            const subscriptionTier = TIER_MAPPING[priceId] || 'starter';
            console.log(`Mapped price ID ${priceId} to tier: ${subscriptionTier}`);
            
            // Determine quota based on tier
            const quotaMapping: Record<string, number | null> = {
              'starter': 15,
              'personal': 50,
              'professional': null, // unlimited
              'enterprise': null // unlimited
            };
            const monthlyLimit = quotaMapping[subscriptionTier] || 15;
            
            console.log(`Subscription interval: ${interval}, tier: ${subscriptionTier}`);
            
            // REVENUE FIX: Update profiles table with subscription_interval (case-insensitive)
            const customerEmail = customer.email?.toLowerCase();
            console.log(`Looking up profile for subscription update. Email: ${customerEmail}`);
            
            const { data: profile, error: profileLookupError } = await supabaseClient
              .from('profiles')
              .select('id')
              .ilike('email', customerEmail || '') // Case-insensitive match
              .single();
            
            if (profileLookupError) {
              console.error(`Profile lookup error: ${profileLookupError.message}`);
            }
            
            if (profile) {
              const { error: updateError } = await supabaseClient
                .from('profiles')
                .update({
                  stripe_customer_id: customer.id,
                  subscription_tier: subscriptionTier,
                  subscription_interval: interval,
                  subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
                  monthly_verification_limit: monthlyLimit,
                  verifications_used_this_month: 0,
                  billing_cycle_start_date: new Date().toISOString(),
                  is_trial_expired: true,
                  updated_at: new Date().toISOString()
                })
                .eq('id', profile.id);
              
              if (updateError) {
                console.error(`Profile update error: ${updateError.message}`);
              } else {
                console.log(`SUCCESS: Updated profile ${profile.id} with tier: ${subscriptionTier}, limit: ${monthlyLimit}`);
              }
            } else {
              console.error(`CRITICAL: No profile found for email: ${customerEmail}`);
            }
            
            // Update subscriber record with error handling
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

            if (subscriptionError) {
              console.error(`Error updating subscriber: ${subscriptionError.message}`);
            } else {
              console.log(`Successfully updated subscriber record for ${customer.email}`);
            }
          } catch (subscriptionUpdateError) {
            console.error(`Exception processing subscription: ${subscriptionUpdateError.message}`);
          }
          break;
        }
        
        case "customer.subscription.deleted": {
          const subscription = event.data.object;
          console.log(`Processing subscription deletion for subscription ${subscription.id}`);
          
          try {
            // Get customer details
            const customer = await stripe.customers.retrieve(subscription.customer);
            if (customer.deleted) {
              console.error("Customer was deleted, skipping subscription deletion update");
              break;
            }
            
            // Update profiles table
            const { data: profile } = await supabaseClient
              .from('profiles')
              .select('id')
              .eq('email', customer.email)
              .single();
            
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
            
            // Update subscriber record to reflect cancellation
            const { error: cancellationError } = await supabaseClient
              .from("subscribers")
              .update({
                subscribed: false,
                subscription_tier: null,
                subscription_end: null,
                updated_at: new Date().toISOString(),
              })
              .eq("stripe_customer_id", customer.id);

            if (cancellationError) {
              console.error(`Error updating cancelled subscription: ${cancellationError.message}`);
            } else {
              console.log(`Successfully updated subscriber record for cancelled subscription: ${customer.email}`);
            }
          } catch (cancellationError) {
            console.error(`Exception processing subscription deletion: ${cancellationError.message}`);
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
      
      // Mark event as processed
      await supabaseClient
        .from('stripe_webhook_events')
        .update({ processed_at: new Date().toISOString() })
        .eq('stripe_event_id', event.id);
      
      console.log(`Marked event ${event.id} as processed`);
      
      return new Response(JSON.stringify({ received: true, event_id: event.id }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });

    } catch (eventProcessingError) {
      console.error(`Error processing event ${event.type}: ${eventProcessingError.message}`);
      
      // Mark as failed but don't retry
      await supabaseClient
        .from('stripe_webhook_events')
        .update({ 
          processed_at: new Date().toISOString(),
          error_message: eventProcessingError.message
        })
        .eq('stripe_event_id', event.id);
      
      // Still return 200 to acknowledge receipt
      return new Response(JSON.stringify({ 
        received: true, 
        event_id: event.id, 
        processing_error: "Event acknowledged but processing failed" 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

  } catch (error) {
    console.error(`Critical webhook error: ${error.message}`);
    console.error(`Error stack: ${error.stack}`);
    return createErrorResponse(
      error,
      {
        functionName: 'stripe-webhook',
        operation: 'webhook_processing',
      },
      corsHeaders
    );
  }
});
