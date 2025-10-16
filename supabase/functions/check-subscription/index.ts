import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    console.log(`[CHECK-SUBSCRIPTION] Request started - Method: ${req.method}`);
    
    // Enhanced Stripe secret key validation with test/live mode support
    const getStripeKey = () => {
      console.log(`[CHECK-SUBSCRIPTION] Starting Stripe key validation...`);
      const key = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
      console.log(`[CHECK-SUBSCRIPTION] Key found: ${key ? 'YES' : 'NO'}`);
      
      if (!key) {
        console.log(`[CHECK-SUBSCRIPTION] ERROR: No STRIPE_SECRET_KEY found in Supabase secrets`);
        return null;
      }
      
      const isLiveKey = key.startsWith("sk_live_");
      const isTestKey = key.startsWith("sk_test_");
      
      console.log(`[CHECK-SUBSCRIPTION] Key type: ${isLiveKey ? 'LIVE' : isTestKey ? 'TEST' : 'UNKNOWN'}`);
      
      if (!isLiveKey && !isTestKey) {
        console.log(`[CHECK-SUBSCRIPTION] ERROR: Key is neither live nor test format`);
        return null;
      }
      
      console.log(`[CHECK-SUBSCRIPTION] SUCCESS: Valid Stripe key found (${isLiveKey ? 'live' : 'test'} mode)`);
      return key;
    };
    
    const stripeSecretKey = getStripeKey();
    
    if (!stripeSecretKey) {
      console.log(`[CHECK-SUBSCRIPTION] Returning error response for missing Stripe key`);
      return new Response(
        JSON.stringify({ 
          error: "Stripe configuration error", 
          details: "Invalid or missing Stripe secret key",
          subscribed: false,
          subscription_tier: null,
          subscription_end: null,
          action: "Please configure your Stripe secret key in Supabase secrets"
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.log(`[CHECK-SUBSCRIPTION] ERROR: No authorization header`);
      return new Response(
        JSON.stringify({ 
          error: "No authorization header",
          details: "Please ensure you are logged in and try again"
        }),
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
      console.log(`[CHECK-SUBSCRIPTION] ERROR: Invalid token`, userError);
      return new Response(
        JSON.stringify({ 
          error: "Invalid token",
          details: "Please sign in again and try again"
        }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[CHECK-SUBSCRIPTION] User authenticated: ${user.email}`);

    // Initialize Stripe with the secret key
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
        limit: 10, // Get more subscriptions in case there are multiple
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

      // Determine subscription tier from price and product information
      const priceId = subscription.items.data[0].price.id;
      const price = subscription.items.data[0].price;
      console.log(`[CHECK-SUBSCRIPTION] Subscription price ID: ${priceId}`);
      
      let subscriptionTier = "Personal Use - Instantly Check if an Item is Stolen"; // Default fallback
      
      // Fetch the product details to get the name
      try {
        const productId = typeof price.product === 'string' ? price.product : (price.product as any)?.id;
        if (productId) {
          const product = await stripe.products.retrieve(productId);
          console.log(`[CHECK-SUBSCRIPTION] Product details:`, { id: product.id, name: product.name });
          
          // Use product name to determine tier, with flexible matching
          const productName = product.name.toLowerCase();
          if (productName.includes('personal use') || productName.includes('instantly check')) {
            subscriptionTier = "Personal Use - Instantly Check if an Item is Stolen";
          } else if (productName.includes('professional') || productName.includes('stolen item lookup')) {
            subscriptionTier = "Professional - Stolen Item Lookup";
          } else if (productName.includes('pay per lookup') || productName.includes('pay per check')) {
            subscriptionTier = "Pay Per Lookup";
          } else {
            // Use the actual product name if no match found
            subscriptionTier = product.name;
          }
        }
      } catch (productError) {
        console.log(`[CHECK-SUBSCRIPTION] Could not fetch product details:`, productError);
        // Fallback to price-based mapping if product fetch fails
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
          details: stripeError.message || "Unknown Stripe error",
          subscribed: false,
          subscription_tier: null,
          subscription_end: null,
          action: "Please check your Stripe account configuration"
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error: any) {
    console.log(`[CHECK-SUBSCRIPTION] Unexpected error:`, error);
    return createErrorResponse(
      error,
      {
        functionName: 'check-subscription',
        operation: 'subscription_check',
      },
      corsHeaders
    );
  }
});