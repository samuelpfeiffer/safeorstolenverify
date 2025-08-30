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

    // Robust Stripe secret key resolution
    const getStripeKey = () => {
      console.log("[CREATE-CHECKOUT] Starting Stripe key resolution");
      
      // First, try the standard STRIPE_SECRET_KEY
      const standardKey = Deno.env.get("STRIPE_SECRET_KEY");
      if (standardKey && standardKey.startsWith("sk_")) {
        console.log("[CREATE-CHECKOUT] Found valid secret key", { 
          source: "STRIPE_SECRET_KEY", 
          prefix: standardKey.substring(0, 7),
          keyType: standardKey.startsWith("sk_live_") ? "live" : "test"
        });
        return standardKey;
      }
      
      console.log("[CREATE-CHECKOUT] Standard STRIPE_SECRET_KEY not found or invalid, scanning all environment variables");
      
      // Get all environment variables and look for Stripe-related ones
      const allEnvVars = Deno.env.toObject();
      const stripeEnvNames = Object.keys(allEnvVars).filter(key => 
        key.toLowerCase().includes('stripe')
      );
      
      console.log("[CREATE-CHECKOUT] Available Stripe environment variables", { names: stripeEnvNames });
      
      // Look for any variable with a valid secret key value
      for (const envName of stripeEnvNames) {
        const value = allEnvVars[envName];
        if (value && value.startsWith("sk_")) {
          console.log("[CREATE-CHECKOUT] Found valid Stripe secret key", { 
            source: envName, 
            prefix: value.substring(0, 7),
            keyType: value.startsWith("sk_live_") ? "live" : "test"
          });
          return value;
        }
        
        if (value) {
          const prefix = value.substring(0, 3);
          console.log("[CREATE-CHECKOUT] Found Stripe key but invalid type", { 
            source: envName, 
            prefix: prefix,
            expected: "sk_",
            note: prefix === "pk_" ? "This is a publishable key (not usable for server-side)" : 
                  prefix === "rk_" ? "This is a restricted key (not usable for server-side)" : "Unknown key type"
          });
        }
      }
      
      console.log("[CREATE-CHECKOUT] No valid Stripe secret key found");
      return null;
    };

    const stripeKey = getStripeKey();
    console.log("[CREATE-CHECKOUT] Stripe key available:", stripeKey ? "Yes" : "No");
    
    if (!stripeKey) {
      const errorMsg = "No valid Stripe secret key found. Please ensure you have a secret key (starting with sk_) configured in your Supabase secrets.";
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

    // Helper: resolve a valid Stripe Price ID
    const resolvePriceId = async (maybePriceId?: string, maybePlanName?: string): Promise<string> => {
      console.log(`Resolving price ID: ${maybePriceId}, Plan name: ${maybePlanName}`);
      
      // Try direct retrieve first if an ID was sent
      if (maybePriceId) {
        try {
          const p = await stripe.prices.retrieve(maybePriceId);
          if (p && p.id) {
            console.log(`Direct price ID lookup successful: ${p.id}`);
            return p.id;
          }
        } catch (_e) {
          console.log(`Price ID ${maybePriceId} not found, trying to match by name...`);
        }
      }
      
      // Map common plan names to search for in Stripe
      const planNameMap: Record<string, string[]> = {
        'basic': ['basic plan', 'basic', 'starter'],
        'premium': ['premium plan', 'premium', 'pro'],
        'enterprise': ['enterprise plan', 'enterprise', 'business'],
        'report': ['certified stolen/legitimate report', 'report', 'single report']
      };
      
      // Determine search terms based on price or plan name
      let searchTerms: string[] = [];
      if (maybePlanName) {
        const normalizedName = maybePlanName.toLowerCase();
        searchTerms = planNameMap[normalizedName] || [normalizedName];
      } else if (maybePriceId) {
        // Try to infer plan type from existing price IDs
        if (maybePriceId.includes('basic') || maybePriceId === 'price_1Rz7rm2eGaMDLFHojH9Vch1Y') {
          searchTerms = planNameMap.basic;
        } else if (maybePriceId.includes('premium') || maybePriceId === 'price_1Rz7xu2eGaMDLFHoqGT0Pyjk') {
          searchTerms = planNameMap.premium;
        } else if (maybePriceId.includes('enterprise') || maybePriceId === 'price_1Rz80X2eGaMDLFHozeZyChte') {
          searchTerms = planNameMap.enterprise;
        } else if (maybePriceId.includes('report') || maybePriceId === 'price_1Rz83i2eGaMDLFHonAmu86lS') {
          searchTerms = planNameMap.report;
        }
      }
      
      if (searchTerms.length > 0) {
        console.log(`Searching for prices matching: ${searchTerms.join(', ')}`);
        const prices = await stripe.prices.list({ active: true, limit: 100, expand: ['data.product'] });
        const match = prices.data.find((p: any) => {
          const productName = (typeof p.product === 'object' && p.product && 'name' in p.product) ? (p.product as any).name : undefined;
          if (!productName) return false;
          
          return searchTerms.some(term => 
            productName.toLowerCase().includes(term) &&
            (p.recurring?.interval === 'month' || p.recurring?.interval === 'day')
          );
        });
        if (match) {
          console.log(`Found matching price: ${match.id} for plan: ${searchTerms[0]}`);
          return match.id;
        }
      }
      
      throw new Error(`Unable to resolve a valid Stripe price. Please ensure you have products named: "Basic Plan", "Premium Plan", "Enterprise Plan", or "Certified Stolen/Legitimate Report" in your Stripe dashboard.`);
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