
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@13.10.0";

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
    console.log("[CHECK-SUBSCRIPTION] Function started v3 - Live Mode", { ts: Date.now() });
    
    // Live Mode Stripe secret key validation
    const getStripeKey = () => {
      console.log("[CHECK-SUBSCRIPTION] Starting live mode Stripe key resolution");
      
      const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
      if (!stripeKey) {
        console.error("[CHECK-SUBSCRIPTION] STRIPE_SECRET_KEY not found in environment");
        return null;
      }
      
      if (!stripeKey.startsWith("sk_live_")) {
        console.error("[CHECK-SUBSCRIPTION] STRIPE_SECRET_KEY must be a live key (sk_live_) for production mode", { 
          prefix: stripeKey.substring(0, 7),
          note: "Test keys (sk_test_) are not allowed in live mode"
        });
        return null;
      }
      
      console.log("[CHECK-SUBSCRIPTION] Valid live Stripe secret key found", { 
        source: "STRIPE_SECRET_KEY", 
        prefix: "sk_live_",
        keyType: "live"
      });
      return stripeKey;
    };
    
    const stripeSecretKey = getStripeKey();
    if (!stripeSecretKey) {
      console.error("[CHECK-SUBSCRIPTION] ERROR - Live mode requires a valid Stripe live secret key (sk_live_)");
      return new Response(
        JSON.stringify({ error: "Stripe live key configuration missing" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[CHECK-SUBSCRIPTION] Stripe key verified for live mode");

    // Get the authorization header from the request
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error("[CHECK-SUBSCRIPTION] ERROR - No authorization header");
      return new Response(
        JSON.stringify({ error: "No authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[CHECK-SUBSCRIPTION] Authorization header found");

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    console.log("[CHECK-SUBSCRIPTION] Authenticating user with token");

    // Get the JWT from the authorization header
    const jwt = authHeader.replace("Bearer ", "");

    // Verify the JWT and get the user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser(jwt);

    if (userError || !user) {
      console.error("[CHECK-SUBSCRIPTION] ERROR - Invalid token:", userError);
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[CHECK-SUBSCRIPTION] User authenticated", { userId: user.id, email: user.email });

    // Initialize Stripe with the live secret key
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    try {
      // Check if user has an active subscription by looking up customer by email
      const customers = await stripe.customers.list({
        email: user.email,
        limit: 1,
      });

      console.log("[CHECK-SUBSCRIPTION] Customer lookup completed");

      if (customers.data.length === 0) {
        console.log("[CHECK-SUBSCRIPTION] No customer found, user not subscribed");
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
      console.log("[CHECK-SUBSCRIPTION] Customer found:", customer.id);

      // Get active subscriptions for this customer
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: "active",
        limit: 1,
      });

      console.log("[CHECK-SUBSCRIPTION] Subscription lookup completed");

      if (subscriptions.data.length === 0) {
        console.log("[CHECK-SUBSCRIPTION] No active subscriptions found");
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
      console.log("[CHECK-SUBSCRIPTION] Active subscription found:", subscription.id);

      // Determine subscription tier from price ID
      const priceId = subscription.items.data[0].price.id;
      let subscriptionTier = "Basic"; // Default fallback
      
      // Map actual Stripe Price IDs to subscription tiers
      switch (priceId) {
        case "price_1Rz7rm2eGaMDLFHojH9Vch1Y":
          subscriptionTier = "Basic";
          break;
        case "price_1Rz7xu2eGaMDLFHoqGT0Pyjk":
          subscriptionTier = "Premium";
          break;
        case "price_1Rz80X2eGaMDLFHozeZyChte":
          subscriptionTier = "Enterprise";
          break;
        case "price_1Rz83i2eGaMDLFHonAmu86lS":
          subscriptionTier = "Report";
          break;
        default:
          console.log("[CHECK-SUBSCRIPTION] Unknown price ID:", priceId);
          subscriptionTier = "Basic";
      }

      console.log("[CHECK-SUBSCRIPTION] Subscription tier determined:", subscriptionTier);

      return new Response(
        JSON.stringify({
          subscribed: true,
          subscription_tier: subscriptionTier,
          subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (stripeError: any) {
      console.error("[CHECK-SUBSCRIPTION] ERROR in Stripe operations:", stripeError);
      return new Response(
        JSON.stringify({ error: "Subscription check failed" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error: any) {
    console.error("[CHECK-SUBSCRIPTION] ERROR in check-subscription:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
