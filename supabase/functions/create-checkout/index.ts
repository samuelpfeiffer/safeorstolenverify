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
    console.log(`[CREATE-CHECKOUT] Request started - Method: ${req.method}`);
    
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get the authorization header from the request
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.log(`[CREATE-CHECKOUT] ERROR: No authorization header`);
      return new Response(
        JSON.stringify({ 
          error: "No authorization header",
          details: "Please ensure you are logged in and try again"
        }),
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
      console.log(`[CREATE-CHECKOUT] ERROR: Invalid token`, userError);
      return new Response(
        JSON.stringify({ 
          error: "Invalid token",
          details: "Please sign in again and try again"
        }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[CREATE-CHECKOUT] User authenticated: ${user.email}`);

    // Parse the request body
    const { priceId, serialNumber, itemType, redirectUrl, isSubscription, planName } = await req.json();
    console.log(`[CREATE-CHECKOUT] Request data:`, { priceId, planName, isSubscription });

    // SECURITY FIX: Validate credit pack purchases
    const VALID_CREDIT_PACKS: Record<string, { credits: number; minPrice: number }> = {
      'creditPack5': { credits: 5, minPrice: 400 },
      'creditPack10': { credits: 10, minPrice: 800 },
      'creditPack25': { credits: 25, minPrice: 1800 }
    };

    // Validate credit pack type
    if (!isSubscription && planName?.toLowerCase().includes('credit')) {
      const packKey = Object.keys(VALID_CREDIT_PACKS).find(key => 
        planName.toLowerCase().includes(key.toLowerCase().replace('creditpack', 'credit pack'))
      );
      
      if (!packKey && !planName.toLowerCase().includes('subscription')) {
        console.log(`[CREATE-CHECKOUT] ERROR: Invalid credit pack type: ${planName}`);
        throw new Error(`Invalid credit pack type: ${planName}. Valid options: 5, 10, or 25 credits`);
      }
      
      if (packKey) {
        console.log(`[CREATE-CHECKOUT] Validated credit pack: ${packKey} (${VALID_CREDIT_PACKS[packKey].credits} credits)`);
      }
    }

    // Enhanced Stripe secret key validation with test/live mode support
    const getStripeKey = () => {
      console.log(`[CREATE-CHECKOUT] Starting Stripe key validation...`);
      const key = Deno.env.get("STRIPE_SECRET_KEY")?.trim();
      console.log(`[CREATE-CHECKOUT] Key found: ${key ? 'YES' : 'NO'}`);
      
      if (!key) {
        console.log(`[CREATE-CHECKOUT] ERROR: No STRIPE_SECRET_KEY found in Supabase secrets`);
        return null;
      }
      
      const isLiveKey = key.startsWith("sk_live_");
      const isTestKey = key.startsWith("sk_test_");
      
      console.log(`[CREATE-CHECKOUT] Key type: ${isLiveKey ? 'LIVE' : isTestKey ? 'TEST' : 'UNKNOWN'}`);
      
      if (!isLiveKey && !isTestKey) {
        console.log(`[CREATE-CHECKOUT] ERROR: Key is neither live nor test format`);
        return null;
      }
      
      console.log(`[CREATE-CHECKOUT] SUCCESS: Valid Stripe key found (${isLiveKey ? 'live' : 'test'} mode)`);
      return key;
    };
    
    const stripeKey = getStripeKey();
    
    if (!stripeKey) {
      const errorMsg = "❌ STRIPE CONFIGURATION ERROR: Please configure a valid Stripe secret key:\n1. Go to your Stripe Dashboard\n2. Copy your secret key (starts with sk_live_ or sk_test_)\n3. Add it to Supabase secrets as 'STRIPE_SECRET_KEY'\n4. Try again";
      console.log(`[CREATE-CHECKOUT] ${errorMsg}`);
      return new Response(
        JSON.stringify({ 
          error: "Stripe configuration error", 
          details: "Invalid or missing Stripe secret key",
          action: "Please configure your Stripe secret key in Supabase secrets"
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists in Stripe
    console.log(`[CREATE-CHECKOUT] Looking for existing customer: ${user.email}`);
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log(`[CREATE-CHECKOUT] Found existing customer: ${customerId}`);
    } else {
      console.log(`[CREATE-CHECKOUT] No existing customer found, will create one during checkout`);
    }

    // Enhanced Price ID resolution that works with any Stripe account
    const resolvePriceId = async (maybePriceId?: string, maybePlanName?: string): Promise<string> => {
      console.log(`[CREATE-CHECKOUT] Resolving price for:`, { priceId: maybePriceId, planName: maybePlanName });
      
      // Try direct retrieve first if an ID was sent
      if (maybePriceId) {
        try {
          console.log(`[CREATE-CHECKOUT] Attempting to retrieve price: ${maybePriceId}`);
          const p = await stripe.prices.retrieve(maybePriceId);
          if (p && p.id && p.active) {
            console.log(`[CREATE-CHECKOUT] Successfully found price: ${p.id}`);
            return p.id;
          } else {
            console.log(`[CREATE-CHECKOUT] Price found but not active: ${p.id}, active: ${p.active}`);
          }
        } catch (e) {
          console.log(`[CREATE-CHECKOUT] Failed to retrieve price ${maybePriceId}:`, e);
          // Fall through to plan name resolution
        }
      }
      
      // Get all active prices and try to match by product name
      console.log(`[CREATE-CHECKOUT] Fetching all active prices for matching...`);
      const prices = await stripe.prices.list({ active: true, limit: 100, expand: ['data.product'] });
      console.log(`[CREATE-CHECKOUT] Found ${prices.data.length} active prices`);
      
      // Log all available products for debugging
      const availableProducts = prices.data.map(p => {
        const productName = (typeof p.product === 'object' && p.product && 'name' in p.product) 
          ? (p.product as any).name 
          : 'Unknown';
        return { priceId: p.id, productName, type: p.type, interval: p.recurring?.interval };
      });
      console.log(`[CREATE-CHECKOUT] Available products:`, availableProducts);
      
      // Map plan names to flexible search terms - includes actual Stripe product names
      const planNameMap: Record<string, string[]> = {
        'personal plan': ['personal plan', 'personal', 'individual', 'smart buyer', 'basic'],
        'professional plan': ['professional plan', 'professional', 'pro', 'savvy shopper', 'premium'],
        'enterprise plan': ['enterprise plan', 'enterprise', 'business pro', 'business'],
        'single verification': ['single verification', 'pay per use', 'pay per check', 'pay per lookup', 'single', 'one-time'],
        'smart buyer': ['smart buyer', 'basic plan', 'basic', 'starter', 'individual', 'personal plan'],
        'savvy shopper': ['savvy shopper', 'premium plan', 'premium', 'pro', 'popular', 'professional plan'],  
        'business pro': ['business pro', 'enterprise plan', 'enterprise', 'business'],
        'entry level': ['entry level', 'entry', 'individual', 'starter'],
        'pay per check': ['pay per check', 'pay per lookup', 'single', 'one-time', 'per check', 'lookup', 'single verification'],
        'pay per lookup': ['pay per lookup', 'pay per check', 'single', 'one-time', 'per check', 'lookup', 'single verification'],
        'personal use': ['personal use', 'personal', 'instantly check', 'personal plan'],
        'professional': ['professional', 'stolen item lookup', 'pro', 'professional plan'],
        'report': ['certified stolen', 'report', 'single report', 'verification', 'single verification']
      };
      
      let searchTerms: string[] = [];
      if (maybePlanName) {
        const normalizedName = maybePlanName.toLowerCase();
        console.log(`[CREATE-CHECKOUT] Attempting to match planName: "${normalizedName}"`);
        console.log(`[CREATE-CHECKOUT] Normalized plan name: ${normalizedName}`);
        
        // Find matching search terms
        for (const [key, terms] of Object.entries(planNameMap)) {
          if (terms.some(term => normalizedName.includes(term) || term.includes(normalizedName))) {
            searchTerms = terms;
            console.log(`[CREATE-CHECKOUT] Found matching terms for "${normalizedName}":`, searchTerms);
            break;
          }
        }
        
        if (searchTerms.length === 0) {
          searchTerms = [normalizedName];
          console.log(`[CREATE-CHECKOUT] Using direct plan name as search term: ${normalizedName}`);
        }
      }
      
      if (searchTerms.length > 0) {
        const match = prices.data.find((p: any) => {
          const productName = (typeof p.product === 'object' && p.product && 'name' in p.product) 
            ? (p.product as any).name 
            : undefined;
          if (!productName) return false;
          
          const nameMatch = searchTerms.some(term => 
            productName.toLowerCase().includes(term.toLowerCase()) ||
            term.toLowerCase().includes(productName.toLowerCase())
          );
          
          // For subscriptions, prefer monthly recurring prices
          const typeMatch = isSubscription ? 
            (p.recurring?.interval === 'month' || p.type === 'recurring') :
            (p.type === 'one_time');
            
          console.log(`[CREATE-CHECKOUT] Checking product "${productName}":`, { nameMatch, typeMatch, type: p.type, interval: p.recurring?.interval });
          
          return nameMatch && typeMatch;
        });
        
        if (match) {
          console.log(`[CREATE-CHECKOUT] Successfully matched price: ${match.id} for product: ${(match.product as any)?.name}`);
          return match.id;
        }
      }
      
      console.log(`[CREATE-CHECKOUT] ERROR: No matching price found. Available products:`, availableProducts);
      throw new Error(`❌ STRIPE PRODUCT ERROR: Unable to find matching Stripe product for "${maybePlanName || maybePriceId}"\n\nAvailable products in your Stripe account:\n${availableProducts.map(p => `• ${p.productName} (${p.priceId})`).join('\n')}\n\nPlease ensure you have the correct products set up in your Stripe dashboard.`);
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
      console.log(`[CREATE-CHECKOUT] Setting up subscription checkout...`);
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
        subscription_data: {
          trial_period_days: 7,
        },
      };
      
      console.log(`[CREATE-CHECKOUT] Subscription config ready with 7-day trial`);
    } else {
      // One-time payment mode for verification
      console.log(`[CREATE-CHECKOUT] Setting up one-time payment...`);
      
      // Only create verification record if serial number is provided
      let verificationId: string | undefined;
      if (serialNumber && serialNumber.trim()) {
        console.log(`[CREATE-CHECKOUT] Creating verification record for serial: ${serialNumber}`);
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
          console.log(`[CREATE-CHECKOUT] ERROR creating verification record:`, verificationData.error);
          throw verificationData.error;
        }
        verificationId = verificationData.data.id;
        console.log(`[CREATE-CHECKOUT] Verification record created: ${verificationId}`);
      } else {
        console.log(`[CREATE-CHECKOUT] No serial number provided - skipping verification record creation`);
      }

      const resolvedPrice = await resolvePriceId(priceId, planName);

      sessionConfig = {
        ...sessionConfig,
        mode: "payment",
        line_items: [
          {
            price: resolvedPrice,
            quantity: 1,
          },
        ],
        success_url: verificationId 
          ? `${redirectUrl}/verification-success?session_id={CHECKOUT_SESSION_ID}&verification_id=${verificationId}`
          : `${redirectUrl}/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
        metadata: {
          ...sessionConfig.metadata,
          verification_id: verificationId || undefined,
        },
      };

      // Create purchase record for one-time payments
      await supabaseClient.from("purchases").insert({
        user_id: user.id,
        stripe_session_id: "pending", // Will be updated after session creation
        amount: 0, // Will be updated by webhook
        currency: "usd",
        verification_id: verificationId || null,
      });
      
      console.log(`[CREATE-CHECKOUT] One-time payment config ready`);
    }

    // Create Checkout Session
    console.log(`[CREATE-CHECKOUT] Creating Stripe checkout session...`);
    const session = await stripe.checkout.sessions.create(sessionConfig);
    console.log(`[CREATE-CHECKOUT] Checkout session created: ${session.id}`);

    // Update purchase record with session ID for one-time payments
    if (!isSubscription) {
      await supabaseClient
        .from("purchases")
        .update({ stripe_session_id: session.id })
        .eq("user_id", user.id)
        .eq("stripe_session_id", "pending");
      console.log(`[CREATE-CHECKOUT] Updated purchase record with session ID`);
    }

    console.log(`[CREATE-CHECKOUT] SUCCESS: Returning checkout URL`);
    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log(`[CREATE-CHECKOUT] ERROR:`, message);
    return createErrorResponse(
      error,
      {
        functionName: 'create-checkout',
        operation: 'checkout_creation',
      },
      corsHeaders
    );
  }
});