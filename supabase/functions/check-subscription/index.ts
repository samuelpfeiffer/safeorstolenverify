
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
    // Live Mode Stripe secret key validation
    const getStripeKey = () => {
      const key = Deno.env.get("STRIPE_SECRET_KEY");
      if (key && key.startsWith("sk_live_")) {
        return key;
      }
      return null;
    };
    const stripeSecretKey = getStripeKey();
    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ error: "Stripe live key configuration missing" }),
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
      const customers = await stripe.customers.list({
        email: user.email,
        limit: 1,
      });

      if (customers.data.length === 0) {
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

      // Get active subscriptions for this customer
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        status: "active",
        limit: 1,
      });

      if (subscriptions.data.length === 0) {
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

      // Determine subscription tier from price ID
      const priceId = subscription.items.data[0].price.id;
      let subscriptionTier = "Basic"; // Default fallback
      
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
        // Fallback for any other price IDs
        default:
          subscriptionTier = "Smart Buyer";
      }

      return new Response(
        JSON.stringify({
          subscribed: true,
          subscription_tier: subscriptionTier,
          subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (stripeError: any) {
      return new Response(
        JSON.stringify({ error: "Subscription check failed" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
