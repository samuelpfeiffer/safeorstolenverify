import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

/**
 * Stripe Reconciliation Function
 * 
 * Recovers paid purchases that were missed by webhook failures.
 * Call this via GET or POST to sync purchases with Stripe.
 */

// Tier configuration - must match stripe-webhook and create-checkout
const TIER_CONFIG: Record<string, { tier: string; limit: number | null }> = {
  'price_1SSVqkGxnZLw8J7O3GwCyKRn': { tier: 'pay_per_use', limit: 1 },
  'price_1SHEOxGxnZLw8J7O2zzfPVBK': { tier: 'starter', limit: 15 },
  'price_1SHEUQGxnZLw8J7OinyVqNMK': { tier: 'personal', limit: 50 },
  'price_1SHEiuGxnZLw8J7OszscBBk7': { tier: 'professional', limit: null },
  'price_1SHEnFGxnZLw8J7Oq1PM96Eo': { tier: 'enterprise', limit: null },
};

interface ReconcileResult {
  success: boolean;
  scanned: number;
  recovered: number;
  stillPending: number;
  alreadyCompleted: number;
  expired: number;
  errors: string[];
  details: Array<{
    purchaseId: string;
    sessionId: string;
    action: 'recovered' | 'expired' | 'pending' | 'skipped';
    email?: string;
    amount?: number;
    tier?: string;
  }>;
}

serve(async (req) => {
  console.log(`[RECONCILE] Request started: ${req.method}`);
  
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    // Validate environment
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!stripeKey || !supabaseUrl || !supabaseServiceKey) {
      console.error("[RECONCILE] Missing environment variables");
      return new Response(JSON.stringify({ 
        error: "Server configuration error",
        missing: [
          !stripeKey && "STRIPE_SECRET_KEY",
          !supabaseUrl && "SUPABASE_URL", 
          !supabaseServiceKey && "SUPABASE_SERVICE_ROLE_KEY"
        ].filter(Boolean)
      }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get body options (optional)
    let daysBack = 7;
    let dryRun = false;
    
    if (req.method === 'POST') {
      try {
        const body = await req.json();
        daysBack = body.daysBack || 7;
        dryRun = body.dryRun === true;
      } catch {
        // Use defaults
      }
    }

    console.log(`[RECONCILE] Processing last ${daysBack} days, dryRun=${dryRun}`);

    // Calculate date threshold
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - daysBack);

    // Get all pending and expired purchases
    const { data: purchases, error: fetchError } = await supabase
      .from('purchases')
      .select('*')
      .in('status', ['pending', 'expired'])
      .gte('created_at', dateThreshold.toISOString())
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error("[RECONCILE] Failed to fetch purchases:", fetchError);
      throw new Error(`Database error: ${fetchError.message}`);
    }

    console.log(`[RECONCILE] Found ${purchases?.length || 0} pending/expired purchases to check`);

    const result: ReconcileResult = {
      success: true,
      scanned: purchases?.length || 0,
      recovered: 0,
      stillPending: 0,
      alreadyCompleted: 0,
      expired: 0,
      errors: [],
      details: []
    };

    // Process each purchase
    for (const purchase of purchases || []) {
      const sessionId = purchase.stripe_session_id;
      
      // Skip invalid session IDs
      if (!sessionId || sessionId === 'pending' || !sessionId.startsWith('cs_')) {
        console.log(`[RECONCILE] Skipping invalid session: ${sessionId}`);
        result.details.push({
          purchaseId: purchase.id,
          sessionId: sessionId || 'none',
          action: 'skipped'
        });
        continue;
      }

      try {
        // Retrieve session from Stripe with expansions
        console.log(`[RECONCILE] Checking Stripe session: ${sessionId}`);
        
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ['line_items', 'payment_intent', 'subscription']
        });

        const customerEmail = session.customer_details?.email;
        const isPaid = session.payment_status === 'paid' || 
                       (session.status === 'complete' && session.payment_intent);

        if (isPaid) {
          // RECOVERY: This payment succeeded but we missed the webhook!
          console.log(`[RECONCILE] FOUND PAID SESSION: ${sessionId} - ${customerEmail}`);
          
          // Get price ID for tier determination
          const lineItem = session.line_items?.data?.[0];
          const priceId = lineItem?.price?.id;
          const tierInfo = priceId ? TIER_CONFIG[priceId] : { tier: 'pay_per_use', limit: 1 };
          
          if (!dryRun) {
            // Update purchase to completed
            const { error: updateError } = await supabase
              .from('purchases')
              .update({
                status: 'completed',
                stripe_customer_id: session.customer as string,
                amount: session.amount_total || purchase.amount,
                updated_at: new Date().toISOString()
              })
              .eq('id', purchase.id);

            if (updateError) {
              console.error(`[RECONCILE] Failed to update purchase ${purchase.id}:`, updateError);
              result.errors.push(`Purchase ${purchase.id}: ${updateError.message}`);
            }

            // Update user profile
            const userId = session.metadata?.user_id || purchase.user_id;
            if (userId) {
              const { error: profileError } = await supabase
                .from('profiles')
                .update({
                  stripe_customer_id: session.customer as string,
                  subscription_tier: tierInfo.tier,
                  monthly_verification_limit: tierInfo.limit,
                  verifications_used_this_month: tierInfo.tier === 'pay_per_use' ? 0 : undefined,
                  is_trial_expired: true,
                  billing_cycle_start_date: new Date().toISOString(),
                  updated_at: new Date().toISOString()
                })
                .eq('id', userId);

              if (profileError) {
                console.error(`[RECONCILE] Failed to update profile ${userId}:`, profileError);
                result.errors.push(`Profile ${userId}: ${profileError.message}`);
              } else {
                console.log(`[RECONCILE] Updated profile ${userId} with tier ${tierInfo.tier}`);
              }
            }

            // Log the recovery
            await supabase.from('audit_logs').insert({
              action: 'PAYMENT_RECOVERED',
              table_name: 'purchases',
              record_id: purchase.id,
              new_values: {
                session_id: sessionId,
                customer_email: customerEmail,
                amount: session.amount_total,
                tier: tierInfo.tier,
                recovered_at: new Date().toISOString()
              }
            });
          }

          result.recovered++;
          result.details.push({
            purchaseId: purchase.id,
            sessionId,
            action: 'recovered',
            email: customerEmail || undefined,
            amount: session.amount_total || 0,
            tier: tierInfo.tier
          });

        } else if (session.status === 'expired') {
          // Session expired without payment
          if (!dryRun && purchase.status !== 'expired') {
            await supabase
              .from('purchases')
              .update({ 
                status: 'expired',
                updated_at: new Date().toISOString()
              })
              .eq('id', purchase.id);
          }
          
          result.expired++;
          result.details.push({
            purchaseId: purchase.id,
            sessionId,
            action: 'expired',
            email: customerEmail || undefined
          });

        } else {
          // Still pending in Stripe
          result.stillPending++;
          result.details.push({
            purchaseId: purchase.id,
            sessionId,
            action: 'pending',
            email: customerEmail || undefined
          });
        }

      } catch (stripeError: any) {
        // Handle Stripe API errors gracefully
        const errorMessage = stripeError.message || String(stripeError);
        console.error(`[RECONCILE] Stripe error for ${sessionId}:`, errorMessage);
        
        // If session not found, it's probably very old - mark as expired
        if (errorMessage.includes('No such checkout.session')) {
          if (!dryRun) {
            await supabase
              .from('purchases')
              .update({ 
                status: 'expired',
                updated_at: new Date().toISOString()
              })
              .eq('id', purchase.id);
          }
          result.expired++;
          result.details.push({
            purchaseId: purchase.id,
            sessionId,
            action: 'expired'
          });
        } else {
          result.errors.push(`Session ${sessionId}: ${errorMessage}`);
        }
      }
    }

    // Summary log
    console.log(`[RECONCILE] Complete! Recovered: ${result.recovered}, Expired: ${result.expired}, Pending: ${result.stillPending}`);

    return new Response(JSON.stringify({
      ...result,
      dryRun,
      daysBack,
      timestamp: new Date().toISOString(),
      message: dryRun 
        ? `DRY RUN: Would recover ${result.recovered} payments`
        : `Recovered ${result.recovered} payments, expired ${result.expired}`
    }, null, 2), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error(`[RECONCILE] Critical error:`, error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
