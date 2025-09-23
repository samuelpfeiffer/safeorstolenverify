
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@15.8.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Enhanced Stripe secret key validation with detailed logging
    const getStripeKey = () => {
      console.log(`[CHECK-SUBSCRIPTION] Starting Stripe key validation...`);
      const key = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
      console.log(`[CHECK-SUBSCRIPTION] Key found: ${key ? 'YES' : 'NO'}`);
      console.log(`[CHECK-SUBSCRIPTION] Key prefix: ${key ? key.substring(0,8) + '...' : 'MISSING'}`);
      console.log(`[CHECK-SUBSCRIPTION] Is live key: ${key?.startsWith("sk_live_") ? 'YES' : 'NO'}`);
      
      if (!key) {
        console.log(`[CHECK-SUBSCRIPTION] ERROR: No STRIPE_SECRET_KEY found in Supabase secrets`);
        return null;
      }
      
      if (!key.startsWith("sk_live_")) {
        console.log(`[CHECK-SUBSCRIPTION] ERROR: Key does not start with sk_live_`);
        return null;
      }
      
      console.log(`[CHECK-SUBSCRIPTION] SUCCESS: Valid live Stripe key found`);
      return key;
    };
    
    const stripeSecretKey = getStripeKey();
    
    if (!stripeSecretKey) {
      console.log(`[CHECK-SUBSCRIPTION] Returning error response for missing Stripe key`);
      return new Response(
        JSON.stringify({ 
          error: "Stripe configuration error", 
          details: "Live secret key required for subscription checking",
          subscribed: false,
          subscription_tier: null,
          subscription_end: null
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "No authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get the JWT from the authorization header
    const jwt = authHeader.replace("Bearer ", "");

    // Verify the JWT and get the user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser(jwt);

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Stripe with the live secret key
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    try {
      console.log(`[CHECK-SUBSCRIPTION] Searching for customer with email: ${user.email}`);
      const customers = await stripe.customers.list({
        email: user.email,
        limit: 1,
      });

      if (customers.data.length === 0) {
        console.log(`[CHECK-SUBSCRIPTION] No customer found for email: ${user.email}`);
        return new Response(
          JSON.stringify({
            subscribed: false,
            subscription_tier: null,
            subscription_end: null,
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const customer = customers.data[0];
      console.log(`[CHECK-SUBSCRIPTION] Found customer: ${customer.id}`);

      // Get active subscriptions for this customer
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: "active",
        limit: 1,
      });

      if (subscriptions.data.length === 0) {
        console.log(`[CHECK-SUBSCRIPTION] No active subscriptions found for customer: ${customer.id}`);
        return new Response(
          JSON.stringify({
            subscribed: false,
            subscription_tier: null,
            subscription_end: null,
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const subscription = subscriptions.data[0];
      console.log(`[CHECK-SUBSCRIPTION] Found active subscription: ${subscription.id}`);

      // Determine subscription tier from price ID
      const priceId = subscription.items.data[0].price.id;
      console.log(`[CHECK-SUBSCRIPTION] Subscription price ID: ${priceId}`);
      
      let subscriptionTier = "Smart Buyer"; // Default fallback
      
      // Map actual live Stripe Price IDs to subscription tiers
      switch (priceId) {
        case "price_1S0uGQGxnZLw8J7OOgm02vdB":
          subscriptionTier = "Smart Buyer";
          break;
        case "price_1S0uGiGxnZLw8J7OQEwssbK7":
          subscriptionTier = "Savvy Shopper";
          break;
        case "price_1S0uJsGxnZLw8J7OfU7XKMhV":
          subscriptionTier = "Business Pro";
          break;
        case "price_1S9CrOGxnZLw8J7OAWHGY2P9":
          subscriptionTier = "Entry Level";
          break;
        case "price_1S9CuPGxnZLw8J7OyBKr6134":
          subscriptionTier = "Pay Per Check";
          break;
        // Fallback for any other price IDs
        default:
          console.log(`[CHECK-SUBSCRIPTION] Unknown price ID: ${priceId}, using default tier`);
          subscriptionTier = "Smart Buyer";
      }

      const result = {
        subscribed: true,
        subscription_tier: subscriptionTier,
        subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
      };
      
      console.log(`[CHECK-SUBSCRIPTION] Returning subscription data:`, result);
      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (stripeError: any) {
      console.log(`[CHECK-SUBSCRIPTION] Stripe API error:`, stripeError);
      return new Response(
        JSON.stringify({ 
          error: "Subscription check failed", 
          details: stripeError.message,
          subscribed: false,
          subscription_tier: null,
          subscription_end: null
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error: any) {
    console.log(`[CHECK-SUBSCRIPTION] Unexpected error:`, error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error", 
        details: error.message,
        subscribed: false,
        subscription_tier: null,
        subscription_end: null
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
