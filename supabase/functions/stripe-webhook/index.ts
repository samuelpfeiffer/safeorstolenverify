
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@13.10.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  try {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
      apiVersion: "2023-10-16",
    });

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      console.error("No signature provided");
      return new Response(JSON.stringify({ error: "No signature" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get the raw body as text
    const body = await req.text();
    let event;

    try {
      // Use the async method to validate the webhook signature
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? ""
      );
    } catch (err) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), { 
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }, 
      });
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    console.log(`Processing Stripe event: ${event.type}`);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log(`Processing checkout completion for session ${session.id}`);
        
        // Update purchase status
        await supabaseClient
          .from("purchases")
          .update({ 
            status: "completed",
            stripe_customer_id: session.customer,
            updated_at: new Date().toISOString()
          })
          .eq("stripe_session_id", session.id);
        
        // Get the verification ID from the session metadata
        const verificationId = session.metadata?.verification_id;
        
        if (verificationId) {
          console.log(`Processing verification result for ID: ${verificationId}`);
          
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
          const { error } = await supabaseClient
            .from("verification_searches")
            .update({ 
              result: mockResult 
            })
            .eq("id", verificationId);
            
          if (error) {
            console.error(`Error updating verification: ${error.message}`);
          } else {
            console.log(`Successfully updated verification result for ID: ${verificationId}`);
          }
        }
        break;
      }
      
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object;
        console.log(`Processing subscription ${event.type} for subscription ${subscription.id}`);
        
        // Get customer details
        const customer = await stripe.customers.retrieve(subscription.customer);
        if (customer.deleted) {
          console.error("Customer was deleted");
          break;
        }
        
        // Determine subscription tier from price
        const priceId = subscription.items.data[0].price.id;
        let subscriptionTier = "Basic";
        
        if (priceId === "price_1RcbMzQ3BLYiWM70t3G8oMq4") {
          subscriptionTier = "Premium";
        }
        
        // Update subscriber record
        await supabaseClient
          .from("subscribers")
          .upsert({
            email: customer.email,
            stripe_customer_id: customer.id,
            subscribed: subscription.status === "active",
            subscription_tier: subscriptionTier,
            subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          }, { onConflict: 'email' });
        
        console.log(`Updated subscriber record for ${customer.email}`);
        break;
      }
      
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        console.log(`Processing subscription deletion for subscription ${subscription.id}`);
        
        // Get customer details
        const customer = await stripe.customers.retrieve(subscription.customer);
        if (customer.deleted) {
          console.error("Customer was deleted");
          break;
        }
        
        // Update subscriber record to reflect cancellation
        await supabaseClient
          .from("subscribers")
          .update({
            subscribed: false,
            subscription_tier: null,
            subscription_end: null,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customer.id);
        
        console.log(`Updated subscriber record for cancelled subscription: ${customer.email}`);
        break;
      }
      
      // Handle additional Stripe events as needed
      case "payment_intent.succeeded": {
        console.log("Payment intent succeeded");
        break;
      }
      
      case "payment_intent.payment_failed": {
        console.log("Payment failed");
        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(`Unhandled error in webhook handler: ${error.message}`);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
