import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * Scheduled function to process abandoned checkouts
 * Runs hourly via Supabase scheduler or manual trigger
 * Identifies expired checkout sessions and sends recovery emails
 */
const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    console.log("[PROCESS-ABANDONED] Starting abandoned checkout recovery...");

    // Find checkout sessions from last 24 hours that are expired
    const { data: pendingSessions, error: sessionsError } = await supabase
      .from('checkout_sessions')
      .select('*, profiles!inner(email)')
      .eq('status', 'pending')
      .lt('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString()) // Older than 1 hour
      .gt('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()); // Within 24 hours

    if (sessionsError) {
      console.error("[PROCESS-ABANDONED] Error fetching sessions:", sessionsError);
      throw sessionsError;
    }

    console.log(`[PROCESS-ABANDONED] Found ${pendingSessions?.length || 0} abandoned sessions`);

    // Check which ones are actually expired in Stripe
    const results = {
      processed: 0,
      emailsSent: 0,
      errors: 0,
      skipped: 0
    };

    for (const session of pendingSessions || []) {
      try {
        // Check if email was already sent for this session
        const { data: existingLog } = await supabase
          .from('audit_logs')
          .select('id')
          .eq('action', 'ABANDONED_CHECKOUT_EMAIL_SENT')
          .eq('new_values->>stripe_session_id', session.stripe_session_id)
          .single();

        if (existingLog) {
          console.log(`[PROCESS-ABANDONED] Skipping ${session.stripe_session_id} - email already sent`);
          results.skipped++;
          continue;
        }

        // Verify session is actually expired in Stripe
        const stripeSession = await stripe.checkout.sessions.retrieve(session.stripe_session_id);
        
        if (stripeSession.status === 'expired') {
          // Send recovery email
          const userEmail = session.profiles?.email;
          if (userEmail) {
            const emailResponse = await supabase.functions.invoke('send-abandoned-checkout-email', {
              body: {
                email: userEmail,
                userId: session.user_id,
                planName: session.plan_name,
                discountCode: 'COMEBACK20'
              }
            });

            if (emailResponse.error) {
              console.error(`[PROCESS-ABANDONED] Error sending email to ${userEmail}:`, emailResponse.error);
              results.errors++;
            } else {
              console.log(`[PROCESS-ABANDONED] Recovery email sent to ${userEmail}`);
              results.emailsSent++;

              // Log the sent email
              await supabase.from('audit_logs').insert({
                action: 'ABANDONED_CHECKOUT_EMAIL_SENT',
                table_name: 'checkout_sessions',
                user_id: session.user_id,
                new_values: {
                  stripe_session_id: session.stripe_session_id,
                  email: userEmail,
                  plan_name: session.plan_name,
                  sent_at: new Date().toISOString()
                }
              });
            }
          }

          // Update session status
          await supabase
            .from('checkout_sessions')
            .update({ status: 'expired' })
            .eq('id', session.id);
        }

        results.processed++;

      } catch (err: any) {
        console.error(`[PROCESS-ABANDONED] Error processing session ${session.id}:`, err.message);
        results.errors++;
      }
    }

    console.log("[PROCESS-ABANDONED] Complete:", results);

    return new Response(
      JSON.stringify({ success: true, results }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("[PROCESS-ABANDONED] Fatal error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
