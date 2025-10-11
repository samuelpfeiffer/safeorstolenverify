import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch user's subscription details
    const { data: profile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('subscription_tier, monthly_verification_limit, verifications_used_this_month, trial_end_date, stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (profileError || !profile) {
      return new Response(
        JSON.stringify({ error: 'Profile not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tier = profile.subscription_tier || 'free';
    const limit = profile.monthly_verification_limit || 2;
    const used = profile.verifications_used_this_month || 0;

    // FREE TIER - Trial users
    if (tier === 'free') {
      const trialExpired = new Date() > new Date(profile.trial_end_date);
      
      if (trialExpired) {
        return new Response(
          JSON.stringify({ 
            allowed: false, 
            reason: 'trial_expired',
            message: 'Your 14-day trial has ended. Please upgrade to continue.',
            upgradeRequired: true 
          }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (used >= 2) {
        return new Response(
          JSON.stringify({ 
            allowed: false, 
            reason: 'trial_checks_exhausted',
            message: `You've used all ${limit} free checks. Upgrade for unlimited access.`,
            upgradeRequired: true,
            checksUsed: used,
            checksLimit: 2
          }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Allow check and increment counter
      await supabaseClient
        .from('profiles')
        .update({ verifications_used_this_month: used + 1 })
        .eq('id', user.id);

      return new Response(
        JSON.stringify({ 
          allowed: true, 
          billedAs: 'trial',
          remaining: 2 - used - 1,
          message: `${2 - used - 1} free checks remaining`
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // PAY-PER-USE - Charge $0.50 immediately
    if (tier === 'payPerUse') {
      const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
        apiVersion: '2023-10-16',
      });

      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: 50, // $0.50 in cents
          currency: 'usd',
          customer: profile.stripe_customer_id,
          metadata: {
            user_id: user.id,
            verification_type: 'pay_per_use',
            timestamp: new Date().toISOString()
          }
        });

        return new Response(
          JSON.stringify({ 
            allowed: false,
            paymentRequired: true,
            clientSecret: paymentIntent.client_secret,
            amount: 0.50,
            message: 'Payment of $0.50 required to proceed'
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (stripeError) {
        console.error('Stripe payment intent creation failed:', stripeError);
        return new Response(
          JSON.stringify({ error: 'Payment processing failed' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // MONTHLY SUBSCRIPTIONS (starter, personal)
    if (['starter', 'personal'].includes(tier)) {
      if (used < limit) {
        // Within quota - allow and increment
        await supabaseClient
          .from('profiles')
          .update({ verifications_used_this_month: used + 1 })
          .eq('id', user.id);

        return new Response(
          JSON.stringify({ 
            allowed: true, 
            billedAs: 'included',
            remaining: limit - used - 1,
            message: `${limit - used - 1} checks remaining this month`
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        // Over quota - charge overage rate
        const overageRate = tier === 'starter' ? 0.50 : 0.40;
        const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
          apiVersion: '2023-10-16',
        });

        try {
          const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(overageRate * 100),
            currency: 'usd',
            customer: profile.stripe_customer_id,
            off_session: true,
            confirm: true,
            metadata: {
              type: 'overage',
              user_id: user.id,
              overage_rate: overageRate,
              tier: tier
            }
          });

          if (paymentIntent.status === 'succeeded') {
            // Allow verification and increment counter
            await supabaseClient
              .from('profiles')
              .update({ verifications_used_this_month: used + 1 })
              .eq('id', user.id);

            return new Response(
              JSON.stringify({ 
                allowed: true, 
                billedAs: 'overage',
                charged: overageRate,
                message: `Overage charge of $${overageRate} applied. ${used + 1} total checks this month.`
              }),
              { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          } else {
            return new Response(
              JSON.stringify({ 
                allowed: false,
                reason: 'payment_failed',
                message: 'Overage payment failed. Please update your payment method.',
                upgradeRequired: true
              }),
              { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
        } catch (stripeError) {
          console.error('Overage charge failed:', stripeError);
          return new Response(
            JSON.stringify({ 
              allowed: false,
              reason: 'payment_failed',
              message: 'Unable to process overage charge. Please update your payment method.'
            }),
            { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
    }

    // UNLIMITED TIERS (professional, enterprise)
    if (['professional', 'enterprise'].includes(tier)) {
      // Increment for analytics only
      await supabaseClient
        .from('profiles')
        .update({ verifications_used_this_month: used + 1 })
        .eq('id', user.id);

      return new Response(
        JSON.stringify({ 
          allowed: true, 
          billedAs: 'included',
          remaining: 'unlimited',
          message: 'Unlimited verifications'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Unknown tier - deny by default
    return new Response(
      JSON.stringify({ 
        allowed: false, 
        reason: 'invalid_tier',
        message: 'Invalid subscription tier. Please contact support.'
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Verification consumption error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
