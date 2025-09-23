import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT, PATCH, DELETE",
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CUSTOMER-PORTAL] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Enhanced Stripe secret key validation with test/live mode support
    const getStripeKey = () => {
      logStep("Starting Stripe key validation...");
      const key = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
      logStep(`Key found: ${key ? 'YES' : 'NO'}`);
      
      if (!key) {
        logStep("ERROR: No STRIPE_SECRET_KEY found in Supabase secrets");
        return null;
      }
      
      const isLiveKey = key.startsWith("sk_live_");
      const isTestKey = key.startsWith("sk_test_");
      
      logStep(`Key type: ${isLiveKey ? 'LIVE' : isTestKey ? 'TEST' : 'UNKNOWN'}`);
      
      if (!isLiveKey && !isTestKey) {
        logStep("ERROR: Key is neither live nor test format");
        return null;
      }
      
      logStep(`SUCCESS: Valid Stripe key found (${isLiveKey ? 'live' : 'test'} mode)`);
      return key;
    };
    
    const stripeKey = getStripeKey();
    
    if (!stripeKey) {
      const errorMsg = "❌ STRIPE CONFIGURATION ERROR: Please configure a valid Stripe secret key";
      logStep(errorMsg);
      return new Response(
        JSON.stringify({ 
          error: "Stripe configuration error", 
          details: "Invalid or missing Stripe secret key",
          action: "Please configure your Stripe secret key in Supabase secrets"
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    logStep("Stripe key verified");
    
    // Initialize Supabase client with the service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      logStep("ERROR: No authorization header provided");
      return new Response(
        JSON.stringify({ 
          error: "No authorization header provided",
          details: "Please ensure you are logged in and try again"
        }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) {
      logStep("ERROR: Authentication error", { error: userError.message });
      return new Response(
        JSON.stringify({ 
          error: "Authentication error",
          details: userError.message,
          action: "Please sign in again and try again"
        }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const user = userData.user;
    if (!user?.email) {
      logStep("ERROR: User not authenticated or email not available");
      return new Response(
        JSON.stringify({ 
          error: "User not authenticated or email not available",
          details: "Please ensure you are logged in and try again"
        }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    logStep("User authenticated", { userId: user.id, email: user.email });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    logStep("Looking for Stripe customer", { email: user.email });
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    
    if (customers.data.length === 0) {
      logStep("No Stripe customer found - creating one");
      // Create a customer if none exists
      const newCustomer = await stripe.customers.create({
        email: user.email,
        name: user.user_metadata?.full_name || user.email.split('@')[0],
        metadata: {
          user_id: user.id,
        },
      });
      logStep("Created new Stripe customer", { customerId: newCustomer.id });
      
      // Return a message indicating they need a subscription first
      return new Response(
        JSON.stringify({ 
          error: "No subscription found",
          details: "You need to have an active subscription to access the customer portal",
          action: "Please subscribe to a plan first, then you can manage your subscription"
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const customerId = customers.data[0].id;
    logStep("Found Stripe customer", { customerId });
    
    // Check if customer has any subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
    });
    
    if (subscriptions.data.length === 0) {
      logStep("No subscriptions found for customer");
      return new Response(
        JSON.stringify({ 
          error: "No subscription found",
          details: "You need to have a subscription to access the customer portal",
          action: "Please subscribe to a plan first, then you can manage your subscription"
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const origin = req.headers.get("origin") || req.headers.get("referer")?.split('/').slice(0, 3).join('/') || "https://lxrdzbknktwlubbmlsqe.supabase.co";
    logStep("Creating customer portal session", { customerId, returnUrl: `${origin}/subscriptions` });
    
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/subscriptions`,
    });
    logStep("Customer portal session created", { sessionId: portalSession.id, url: portalSession.url });

    return new Response(JSON.stringify({ url: portalSession.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in customer-portal", { message: errorMessage });
    return new Response(JSON.stringify({ 
      error: "Customer portal error",
      details: errorMessage,
      action: "Please check your Stripe configuration and try again"
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});