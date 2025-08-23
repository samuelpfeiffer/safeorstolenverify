
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
    console.log("[CHECK-SUBSCRIPTION] Function started");
    
    // Get the Stripe secret key from environment
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      console.error("[CHECK-SUBSCRIPTION] ERROR - Missing STRIPE_SECRET_KEY");
      return new Response(
        JSON.stringify({ error: "Stripe configuration missing" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate that we have a secret key (starts with sk_)
    if (!stripeSecretKey.startsWith('sk_')) {
      console.error("[CHECK-SUBSCRIPTION] ERROR - Invalid Stripe key format, must start with sk_");
      return new Response(
        JSON.stringify({ error: "Invalid Stripe key configuration" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[CHECK-SUBSCRIPTION] Stripe key verified");

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

    // Initialize Stripe with the secret key
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
