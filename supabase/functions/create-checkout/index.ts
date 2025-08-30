import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@13.10.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Creating Stripe checkout session... v2", { ts: Date.now() });
    
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get the authorization header from the request
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "No authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

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

    console.log(`User authenticated: ${user.email}`);

    // Parse the request body
    const { priceId, serialNumber, itemType, redirectUrl, isSubscription, planName } = await req.json();

    // Live Mode Stripe secret key validation
    const getStripeKey = () => {
      console.log("[CREATE-CHECKOUT] Starting live mode Stripe key resolution");
      
      const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
      if (!stripeKey) {
        console.error("[CREATE-CHECKOUT] STRIPE_SECRET_KEY not found in environment");
        return null;
      }
      
      if (!stripeKey.startsWith("sk_live_")) {
        console.error("[CREATE-CHECKOUT] STRIPE_SECRET_KEY must be a live key (sk_live_) for production mode", { 
          prefix: stripeKey.substring(0, 7),
          note: "Test keys (sk_test_) are not allowed in live mode"
        });
        return null;
      }
      
      console.log("[CREATE-CHECKOUT] Valid live Stripe secret key found", { 
        source: "STRIPE_SECRET_KEY", 
        prefix: "sk_live_",
        keyType: "live"
      });
      return stripeKey;
    };

    const stripeKey = getStripeKey();
    console.log("[CREATE-CHECKOUT] Stripe key available:", stripeKey ? "Yes (Live Mode)" : "No");
    
    if (!stripeKey) {
      const errorMsg = "Live mode requires a valid Stripe live secret key (sk_live_). Please configure STRIPE_SECRET_KEY in your Supabase secrets with your live key from the Stripe dashboard.";
      console.error("[CREATE-CHECKOUT] ERROR:", errorMsg);
      throw new Error(errorMsg);
    }
    
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists in Stripe
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log(`Found existing Stripe customer: ${customerId}`);
    } else {
      console.log("No existing Stripe customer found, will create new one");
    }

    // Helper: resolve a valid Stripe Price ID for live mode
    const resolvePriceId = async (maybePriceId?: string, maybePlanName?: string): Promise<string> => {
      console.log(`[CREATE-CHECKOUT] Resolving price ID for live mode: ${maybePriceId}, Plan name: ${maybePlanName}`);
      
      // Try direct retrieve first if an ID was sent
      if (maybePriceId) {
        try {
          const p = await stripe.prices.retrieve(maybePriceId);
          if (p && p.id && p.active) {
            console.log(`[CREATE-CHECKOUT] Direct price ID lookup successful: ${p.id}`);
            return p.id;
          }
        } catch (e) {
          console.log(`[CREATE-CHECKOUT] Price ID ${maybePriceId} not found or inactive, trying plan name...`);
        }
      }
      
      // Map plan names to search terms for live Stripe products
      const planNameMap: Record<string, string[]> = {
        'basic': ['basic plan', 'basic', 'starter'],
        'premium': ['premium plan', 'premium', 'pro'],
        'enterprise': ['enterprise plan', 'enterprise', 'business'],
        'report': ['certified stolen/legitimate report', 'report', 'single report']
      };
      
      let searchTerms: string[] = [];
      if (maybePlanName) {
        const normalizedName = maybePlanName.toLowerCase();
        const planKey = Object.keys(planNameMap).find(key => normalizedName.includes(key));
        searchTerms = planKey ? planNameMap[planKey] : [normalizedName];
      }
      
      if (searchTerms.length > 0) {
        console.log(`[CREATE-CHECKOUT] Searching live Stripe for prices matching: ${searchTerms.join(', ')}`);
        const prices = await stripe.prices.list({ active: true, limit: 100, expand: ['data.product'] });
        const match = prices.data.find((p: any) => {
          const productName = (typeof p.product === 'object' && p.product && 'name' in p.product) ? (p.product as any).name : undefined;
          if (!productName) return false;
          
          return searchTerms.some(term => 
            productName.toLowerCase().includes(term) &&
            (p.recurring?.interval === 'month' || p.type === 'one_time')
          );
        });
        if (match) {
          console.log(`[CREATE-CHECKOUT] Found matching live price: ${match.id} for plan: ${searchTerms[0]}`);
          return match.id;
        }
      }
      
      throw new Error(`Unable to resolve a valid live Stripe price. Please ensure you have active products in your live Stripe dashboard named: "Basic Plan", "Premium Plan", "Enterprise Plan", or "Certified Stolen/Legitimate Report".`);
    };

    let sessionConfig: any = {
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      success_url: `${redirectUrl}/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${redirectUrl}/subscription-cancel`,
      metadata: {
        user_id: user.id,
        item_type: itemType || 'subscription',
        serial_number: serialNumber || 'subscription',
        plan_name: planName || undefined,
      },
    };

    if (isSubscription) {
      // Subscription mode with 7-day free trial
      const resolvedPrice = await resolvePriceId(priceId, planName);
      console.log(`Creating subscription checkout with 7-day trial for price: ${resolvedPrice}`);
      
      sessionConfig = {
        ...sessionConfig,
        mode: "subscription",
        line_items: [
          {
            price: resolvedPrice,
            quantity: 1,
          },
        ],
        subscription_data: {
          trial_period_days: 7,
        },
      };
    } else {
      // One-time payment mode for verification
      console.log("Creating one-time payment session");
      
      const verificationData = await supabaseClient
        .from("verification_searches")
        .insert({
          user_id: user.id,
          serial_number: serialNumber,
          item_type: itemType,
        })
        .select()
        .single();

      if (verificationData.error) {
        throw verificationData.error;
      }

      sessionConfig = {
        ...sessionConfig,
        mode: "payment",
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${redirectUrl}/verification-success?session_id={CHECKOUT_SESSION_ID}&verification_id=${verificationData.data.id}`,
        metadata: {
          ...sessionConfig.metadata,
          verification_id: verificationData.data.id,
        },
      };

      // Create purchase record for one-time payments
      await supabaseClient.from("purchases").insert({
        user_id: user.id,
        stripe_session_id: "pending", // Will be updated after session creation
        amount: 0, // Will be updated by webhook
        currency: "usd",
        verification_id: verificationData.data.id,
      });
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create(sessionConfig);
    console.log(`Checkout session created: ${session.id}`);

    // Update purchase record with session ID for one-time payments
    if (!isSubscription && serialNumber) {
      await supabaseClient
        .from("purchases")
        .update({ stripe_session_id: session.id })
        .eq("user_id", user.id)
        .eq("stripe_session_id", "pending");
    }

    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});