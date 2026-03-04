import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import Stripe from "https://esm.sh/stripe@16.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

// BULLETPROOF: Always use production URLs
const PRODUCTION_BASE_URL = 'https://safeorstolen.com';

// SIMPLIFIED PRICING MODEL — March 2026
// Single plan: $1/month unlimited
const STRIPE_PRICES = {
  // The ONE price — $1/month unlimited
  unlimited: 'price_1T77b7GxnZLw8J7OYB4jBGRB',       // $1.00/month

  // Legacy prices kept for existing subscribers
  singleVerification: 'price_1SSVqkGxnZLw8J7O3GwCyKRn', // $2.99 (legacy)
  starter: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',         // $4.99/month (legacy)
  personal: 'price_1SHEUQGxnZLw8J7OinyVqNMK',        // $9.99/month (legacy)
  professional: 'price_1SHEiuGxnZLw8J7OszscBBk7',    // $29.99/month (legacy)
  enterprise: 'price_1SHEnFGxnZLw8J7Oq1PM96Eo',      // $99/month (legacy)
} as const;

// Map any incoming plan name to our known price IDs
const resolvePriceId = (priceId?: string, planName?: string, isSubscription?: boolean): string => {
  // If direct price ID provided and it's in our list, use it
  if (priceId && Object.values(STRIPE_PRICES).includes(priceId as any)) {
    return priceId;
  }

  // Default: single verification for one-time, unlimited for subscription
  if (!planName) {
    return isSubscription ? STRIPE_PRICES.unlimited : STRIPE_PRICES.singleVerification;
  }

  const name = planName.toLowerCase();

  // One-time payment keywords
  if (name.includes('single') || name.includes('pay per') || name.includes('one-time') || name.includes('verification')) {
    return STRIPE_PRICES.singleVerification;
  }

  // Unlimited plan - the main subscription offering
  if (name.includes('unlimited')) {
    return STRIPE_PRICES.unlimited;
  }

  // Legacy subscription tier matching
  if (name.includes('enterprise') || name.includes('business pro')) {
    return STRIPE_PRICES.enterprise;
  }
  if (name.includes('professional') || name.includes('pro') || name.includes('savvy')) {
    return STRIPE_PRICES.professional;
  }
  if (name.includes('personal') || name.includes('smart buyer') || name.includes('individual')) {
    return STRIPE_PRICES.personal;
  }
  if (name.includes('starter') || name.includes('basic') || name.includes('entry')) {
    return STRIPE_PRICES.unlimited; // Map starter to unlimited
  }

  // Fallback to unlimited for subscriptions
  return isSubscription ? STRIPE_PRICES.unlimited : STRIPE_PRICES.singleVerification;
};

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    console.log(`[CREATE-CHECKOUT] Request started`);
    
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Auth check
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.log(`[CREATE-CHECKOUT] No auth header`);
      return new Response(
        JSON.stringify({ error: "Please sign in to continue", code: "NO_AUTH" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const jwt = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(jwt);

    if (userError || !user) {
      console.log(`[CREATE-CHECKOUT] Invalid token`);
      return new Response(
        JSON.stringify({ error: "Please sign in again", code: "INVALID_TOKEN" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[CREATE-CHECKOUT] User: ${user.email}`);

    // Parse request
    const body = await req.json();
    const { priceId, serialNumber, itemType, isSubscription, planName } = body;
    
    console.log(`[CREATE-CHECKOUT] Request:`, { priceId, planName, isSubscription });

    // Get Stripe key
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
    if (!stripeKey || (!stripeKey.startsWith("sk_live_") && !stripeKey.startsWith("sk_test_") && !stripeKey.startsWith("rk_live_") && !stripeKey.startsWith("rk_test_"))) {
      console.log(`[CREATE-CHECKOUT] Invalid Stripe key`);
      return new Response(
        JSON.stringify({ error: "Payment system configuration error", code: "STRIPE_CONFIG" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Get or create customer
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    const customerId = customers.data.length > 0 ? customers.data[0].id : undefined;
    console.log(`[CREATE-CHECKOUT] Customer: ${customerId || 'will create'}`);

    // RESOLVE PRICE ID - Simple, deterministic
    const resolvedPriceId = resolvePriceId(priceId, planName, isSubscription);
    console.log(`[CREATE-CHECKOUT] Resolved price: ${resolvedPriceId}`);

    // Verify price exists in Stripe
    try {
      const price = await stripe.prices.retrieve(resolvedPriceId);
      if (!price.active) {
        throw new Error(`Price ${resolvedPriceId} is not active`);
      }
      console.log(`[CREATE-CHECKOUT] Price verified: ${price.id}`);
    } catch (e) {
      console.log(`[CREATE-CHECKOUT] Price verification failed:`, e);
      return new Response(
        JSON.stringify({ error: "Invalid pricing configuration", code: "INVALID_PRICE" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create verification record for one-time payments
    let verificationId: string | undefined;
    if (!isSubscription && serialNumber?.trim()) {
      const { data: verification, error } = await supabaseClient
        .from("verification_searches")
        .insert({
          user_id: user.id,
          serial_number: serialNumber.trim(),
          item_type: itemType || 'unknown',
        })
        .select()
        .single();

      if (!error && verification) {
        verificationId = verification.id;
        console.log(`[CREATE-CHECKOUT] Verification created: ${verificationId}`);
      }
    }

    // Build checkout session
    const successUrl = verificationId 
      ? `${PRODUCTION_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&verification_id=${verificationId}`
      : `${PRODUCTION_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`;
    
    const cancelUrl = `${PRODUCTION_BASE_URL}/verify?checkout=cancelled`;

    const sessionConfig: any = {
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: isSubscription ? "subscription" : "payment",
      line_items: [{ price: resolvedPriceId, quantity: 1 }],
      metadata: {
        user_id: user.id,
        item_type: itemType || 'unknown',
        serial_number: serialNumber || '',
        verification_id: verificationId || '',
        plan_name: planName || 'Unlimited Plan',
      },
    };

    // Add trial for subscriptions (7 days)
    if (isSubscription) {
      sessionConfig.subscription_data = { trial_period_days: 7 };
    }

    // Create purchase record
    const { data: purchaseRecord, error: purchaseError } = await supabaseClient
      .from("purchases")
      .insert({
        user_id: user.id,
        stripe_session_id: "creating",
        amount: 0,
        currency: "usd",
        verification_id: verificationId || null,
        status: 'pending',
      })
      .select('id')
      .single();
    
    if (purchaseError) {
      console.log(`[CREATE-CHECKOUT] Purchase record error:`, purchaseError);
    }
    
    const purchaseId = purchaseRecord?.id;
    console.log(`[CREATE-CHECKOUT] Purchase created with ID: ${purchaseId}`);

    // Create Stripe session
    const session = await stripe.checkout.sessions.create(sessionConfig);
    console.log(`[CREATE-CHECKOUT] Session created: ${session.id}`);

    // Update purchase with session ID
    if (purchaseId) {
      await supabaseClient
        .from("purchases")
        .update({ stripe_session_id: session.id })
        .eq("id", purchaseId);
    } else {
      await supabaseClient
        .from("purchases")
        .update({ stripe_session_id: session.id })
        .eq("user_id", user.id)
        .eq("stripe_session_id", "creating");
    }

    return new Response(
      JSON.stringify({ url: session.url, sessionId: session.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log(`[CREATE-CHECKOUT] Error:`, message);
    return createErrorResponse(
      error,
      { functionName: 'create-checkout', operation: 'checkout_creation' },
      corsHeaders
    );
  }
});
