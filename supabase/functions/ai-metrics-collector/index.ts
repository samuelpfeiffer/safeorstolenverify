import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('[METRICS-COLLECTOR] Collecting business metrics...');

    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    // REVENUE METRICS
    // Get total revenue from Stripe (via verification_items)
    const { data: verifications } = await supabase
      .from('verification_items')
      .select('amount_paid, created_at')
      .gte('created_at', `${today}T00:00:00Z`)
      .lt('created_at', `${today}T23:59:59Z`);

    const revenue_total = verifications?.reduce((sum, v) => sum + (v.amount_paid || 0), 0) || 0;
    const paid_verifications = verifications?.filter(v => v.amount_paid > 0).length || 0;

    // USER METRICS
    const { count: new_users } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', `${today}T00:00:00Z`);

    const { count: active_users } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('updated_at', `${today}T00:00:00Z`);

    // VERIFICATION METRICS
    const { count: total_verifications } = await supabase
      .from('verification_items')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', `${today}T00:00:00Z`);

    const { count: free_verifications } = await supabase
      .from('verification_items')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', `${today}T00:00:00Z`)
      .or('amount_paid.is.null,amount_paid.eq.0');

    // Calculate conversion rate
    const conversion_rate = new_users > 0 ? (paid_verifications / new_users) * 100 : 0;

    // SEO METRICS
    const { count: indexed_pages } = await supabase
      .from('ai_generated_content')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published');

    // SYSTEM HEALTH
    const { data: healthChecks } = await supabase
      .from('system_health_log')
      .select('*')
      .gte('created_at', `${today}T00:00:00Z`)
      .lt('created_at', `${today}T23:59:59Z`);

    const avg_response_time = healthChecks?.length > 0
      ? healthChecks.reduce((sum, h) => sum + (h.response_time || 0), 0) / healthChecks.length
      : 0;

    const error_rate = healthChecks?.length > 0
      ? (healthChecks.filter(h => h.status !== 'healthy').length / healthChecks.length) * 100
      : 0;

    // INSERT OR UPDATE TODAY'S METRICS
    const metrics = {
      date: today,
      revenue_total,
      revenue_one_time: revenue_total,
      average_order_value: paid_verifications > 0 ? revenue_total / paid_verifications : 0,
      new_users: new_users || 0,
      active_users: active_users || 0,
      conversion_rate,
      total_verifications: total_verifications || 0,
      free_verifications: free_verifications || 0,
      paid_verifications,
      indexed_pages: indexed_pages || 0,
      api_response_time: Math.round(avg_response_time),
      error_rate,
      updated_at: new Date().toISOString(),
    };

    const { data: savedMetrics, error: metricsError } = await supabase
      .from('business_metrics')
      .upsert(metrics, { onConflict: 'date' })
      .select()
      .single();

    if (metricsError) {
      console.error('[METRICS-COLLECTOR] Error saving metrics:', metricsError);
      throw metricsError;
    }

    console.log('[METRICS-COLLECTOR] Metrics collected successfully');

    // Get yesterday's metrics for comparison
    const { data: yesterdayMetrics } = await supabase
      .from('business_metrics')
      .select('*')
      .eq('date', yesterday)
      .single();

    const comparison = yesterdayMetrics ? {
      revenue_change: ((metrics.revenue_total - yesterdayMetrics.revenue_total) / (yesterdayMetrics.revenue_total || 1)) * 100,
      user_growth: ((metrics.new_users - yesterdayMetrics.new_users) / (yesterdayMetrics.new_users || 1)) * 100,
      conversion_change: metrics.conversion_rate - yesterdayMetrics.conversion_rate,
    } : null;

    return new Response(JSON.stringify({
      success: true,
      metrics: savedMetrics,
      comparison,
      message: 'Business metrics collected successfully'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[METRICS-COLLECTOR] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
