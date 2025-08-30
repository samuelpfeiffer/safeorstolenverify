
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
    console.log("[CHECK-SUBSCRIPTION] Function started v2", { ts: Date.now() });
    
    // Robust Stripe secret key resolution
    const getStripeKey = () => {
      console.log("[CHECK-SUBSCRIPTION] Starting Stripe key resolution");
      
      // First, try the standard STRIPE_SECRET_KEY
      const standardKey = Deno.env.get("STRIPE_SECRET_KEY");
      if (standardKey && standardKey.startsWith("sk_")) {
        console.log("[CHECK-SUBSCRIPTION] Found valid secret key", { 
          source: "STRIPE_SECRET_KEY", 
          prefix: standardKey.substring(0, 7),
          keyType: standardKey.startsWith("sk_live_") ? "live" : "test"
        });
        return standardKey;
      }
      
      console.log("[CHECK-SUBSCRIPTION] Standard STRIPE_SECRET_KEY not found or invalid, scanning all environment variables");
      
      // Get all environment variables and look for Stripe-related ones
      const allEnvVars = Deno.env.toObject();
      const stripeEnvNames = Object.keys(allEnvVars).filter(key => 
        key.toLowerCase().includes('stripe')
      );
      
      console.log("[CHECK-SUBSCRIPTION] Available Stripe environment variables", { names: stripeEnvNames });
      
      // Look for any variable with a valid secret key value
      for (const envName of stripeEnvNames) {
        const value = allEnvVars[envName];
        if (value && value.startsWith("sk_")) {
          console.log("[CHECK-SUBSCRIPTION] Found valid Stripe secret key", { 
            source: envName, 
            prefix: value.substring(0, 7),
            keyType: value.startsWith("sk_live_") ? "live" : "test"
          });
          return value;
        }
        
        if (value) {
          const prefix = value.substring(0, 3);
          console.log("[CHECK-SUBSCRIPTION] Found Stripe key but invalid type", { 
            source: envName, 
            prefix: prefix,
            expected: "sk_",
            note: prefix === "pk_" ? "This is a publishable key (not usable for server-side)" : 
                  prefix === "rk_" ? "This is a restricted key (not usable for server-side)" : "Unknown key type"
          });
        }
      }
      
      console.log("[CHECK-SUBSCRIPTION] No valid Stripe secret key found");
      return null;
    };
    
    const stripeSecretKey = getStripeKey();
    if (!stripeSecretKey) {
      console.error("[CHECK-SUBSCRIPTION] ERROR - Stripe secret key not found in environment");
      return new Response(
        JSON.stringify({ error: "Stripe configuration missing" }),
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
