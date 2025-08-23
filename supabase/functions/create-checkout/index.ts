
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

    // Parse the request body
    const { priceId, serialNumber, itemType, redirectUrl, isSubscription, planName } = await req.json();

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists in Stripe
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Helper: resolve a valid Stripe Price ID
    const resolvePriceId = async (maybePriceId?: string, maybePlanName?: string): Promise<string> => {
      // Try direct retrieve first if an ID was sent
      if (maybePriceId) {
        try {
          const p = await stripe.prices.retrieve(maybePriceId);
          if (p && p.id) return p.id;
        } catch (_e) {
          // fall through to lookup by plan name
        }
      }
      if (maybePlanName) {
        const prices = await stripe.prices.list({ active: true, limit: 100, expand: ['data.product'] });
        const match = prices.data.find((p: any) => {
          const productName = (typeof p.product === 'object' && p.product && 'name' in p.product) ? (p.product as any).name : undefined;
          return productName && productName.toLowerCase() === maybePlanName.toLowerCase() && p.recurring?.interval === 'month';
        });
        if (match) return match.id;
      }
      throw new Error('Unable to resolve a valid Stripe price for the requested plan.');
    };

    let sessionConfig: any = {
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      success_url: `${redirectUrl}/verification-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${redirectUrl}?canceled=true`,
      metadata: {
        user_id: user.id,
        item_type: itemType || 'subscription',
        serial_number: serialNumber || 'subscription',
        plan_name: planName || undefined,
      },
    };

    if (isSubscription) {
      // Subscription mode
      const resolvedPrice = await resolvePriceId(priceId, planName);
      sessionConfig = {
        ...sessionConfig,
        mode: "subscription",
        line_items: [
          {
            price: resolvedPrice,
            quantity: 1,
          },
        ],
      };
    } else {
      // One-time payment mode for verification
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
