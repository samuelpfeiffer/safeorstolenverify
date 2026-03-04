import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7"
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts'

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { fingerprint } = await req.json()

    if (!fingerprint) {
      return new Response(
        JSON.stringify({ error: 'fingerprint required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Extract user_id from JWT if present — never trust client-supplied user_id
    let user_id: string | null = null
    const authHeader = req.headers.get('authorization')
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      const { createClient: createAuthClient } = await import("https://esm.sh/@supabase/supabase-js@2.39.7")
      const authClient = createAuthClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_ANON_KEY')!
      )
      const { data: { user } } = await authClient.auth.getUser(token)
      user_id = user?.id ?? null
    }

    // Check for active subscription (by user_id OR fingerprint)
    let sub = null;

    if (user_id) {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('status', 'active')
        .eq('user_id', user_id)
        .single()
      sub = data;
    }

    if (!sub) {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('status', 'active')
        .eq('fingerprint', fingerprint)
        .single()
      sub = data;
    }

    if (sub) {
      // Has subscription — check plan limits
      if (sub.plan === 'single') {
        if (sub.checks_used_this_month >= 1) {
          return new Response(
            JSON.stringify({ allowed: false, reason: 'single_used', plan: 'single' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }
      } else if (sub.plan === 'basic' && sub.checks_used_this_month >= 50) {
        return new Response(
          JSON.stringify({ allowed: false, reason: 'monthly_limit', plan: 'basic', limit: 50 }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      // Pro/Business = unlimited (no block)

      // Increment usage
      await supabase
        .from('subscriptions')
        .update({
          checks_used_this_month: (sub.checks_used_this_month || 0) + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', sub.id)

      return new Response(
        JSON.stringify({
          allowed: true,
          plan: sub.plan,
          checks_remaining: sub.plan === 'basic'
            ? 50 - (sub.checks_used_this_month + 1)
            : null
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Also check profiles table for legacy subscribers
    if (user_id) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier, subscription_end, verifications_used_this_month')
        .eq('id', user_id)
        .single()

      if (profile?.subscription_tier) {
        const paidTiers = ['unlimited', 'starter', 'personal', 'professional', 'enterprise', 'pay_per_use'];
        const hasPaidTier = paidTiers.includes(profile.subscription_tier);
        const isActive = hasPaidTier && (!profile.subscription_end || new Date(profile.subscription_end) > new Date());

        if (isActive) {
          // Legacy subscriber — allow
          return new Response(
            JSON.stringify({ allowed: true, plan: profile.subscription_tier, checks_remaining: null }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }
      }
    }

    // No subscription — check free tier usage
    const FREE_LIMIT = 2

    const { data: usage, error: usageError } = await supabase
      .from('usage_tracking')
      .select('*')
      .eq('fingerprint', fingerprint)
      .single()

    if (usageError && usageError.code === 'PGRST116') {
      // First time user — insert and allow
      await supabase.from('usage_tracking').insert({
        fingerprint,
        user_id: user_id || null,
        check_count: 1,
        last_check_at: new Date().toISOString()
      })

      return new Response(
        JSON.stringify({ allowed: true, checks_remaining: FREE_LIMIT - 1, plan: 'free' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (usage && usage.check_count >= FREE_LIMIT) {
      // BLOCKED — trigger upgrade modal
      return new Response(
        JSON.stringify({
          allowed: false,
          reason: 'free_limit',
          checks_used: usage.check_count,
          checks_limit: FREE_LIMIT
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Allow and increment
    const newCount = (usage?.check_count || 0) + 1
    await supabase
      .from('usage_tracking')
      .update({
        check_count: newCount,
        last_check_at: new Date().toISOString(),
        user_id: user_id || usage?.user_id || null
      })
      .eq('fingerprint', fingerprint)

    return new Response(
      JSON.stringify({
        allowed: true,
        checks_remaining: FREE_LIMIT - newCount,
        plan: 'free'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('check-gate error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
