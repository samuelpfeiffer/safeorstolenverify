import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing required environment variables');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    console.log('[HEALTH-MONITOR] Starting system health check...');

    const healthChecks = {
      timestamp: new Date().toISOString(),
      checks: []
    };

    // Check database connectivity
    try {
      const { error } = await supabase.from('profiles').select('count').single();
      healthChecks.checks.push({
        component: 'database',
        status: error ? 'degraded' : 'healthy',
        message: error ? error.message : 'Database connection OK'
      });
    } catch (dbError) {
      healthChecks.checks.push({
        component: 'database',
        status: 'unhealthy',
        message: 'Database connection failed'
      });
    }

    // Check for rate limit issues
    const { data: rateLimits, error: rlError } = await supabase
      .from('rate_limits')
      .select('*')
      .gte('window_start', new Date(Date.now() - 3600000).toISOString());

    const highRateLimitUsers = rateLimits?.filter(rl => rl.count > 50).length || 0;
    
    healthChecks.checks.push({
      component: 'rate_limits',
      status: highRateLimitUsers > 10 ? 'warning' : 'healthy',
      message: `${highRateLimitUsers} users approaching rate limits`
    });

    // Check for failed purchases
    const { data: failedPurchases } = await supabase
      .from('purchases')
      .select('count')
      .eq('status', 'failed')
      .gte('created_at', new Date(Date.now() - 86400000).toISOString());

    healthChecks.checks.push({
      component: 'payments',
      status: (failedPurchases?.[0]?.count || 0) > 10 ? 'warning' : 'healthy',
      message: `${failedPurchases?.[0]?.count || 0} failed payments in last 24h`
    });

    // Check API key health
    const { data: apiKeys } = await supabase
      .from('external_api_keys')
      .select('*')
      .eq('is_active', true);

    const expiringSoon = apiKeys?.filter(key => 
      key.expires_at && new Date(key.expires_at) < new Date(Date.now() + 7 * 86400000)
    ).length || 0;

    healthChecks.checks.push({
      component: 'api_keys',
      status: expiringSoon > 0 ? 'warning' : 'healthy',
      message: `${expiringSoon} API keys expiring within 7 days`
    });

    // Check for subscription issues
    const { data: subscribers } = await supabase
      .from('subscribers')
      .select('count')
      .eq('subscribed', true);

    healthChecks.checks.push({
      component: 'subscriptions',
      status: 'healthy',
      message: `${subscribers?.[0]?.count || 0} active subscribers`
    });

    // Overall system status
    const unhealthyCount = healthChecks.checks.filter(c => c.status === 'unhealthy').length;
    const warningCount = healthChecks.checks.filter(c => c.status === 'warning').length;
    
    const overallStatus = unhealthyCount > 0 ? 'unhealthy' : 
                         warningCount > 2 ? 'degraded' : 'healthy';

    // Log health check
    await supabase.from('audit_logs').insert({
      action: 'SYSTEM_HEALTH_CHECK',
      table_name: 'system',
      new_values: {
        status: overallStatus,
        checks: healthChecks.checks,
        unhealthyCount,
        warningCount
      }
    });

    console.log('[HEALTH-MONITOR] Health check completed:', overallStatus);

    return new Response(JSON.stringify({
      success: true,
      overallStatus,
      checks: healthChecks.checks,
      summary: {
        total: healthChecks.checks.length,
        healthy: healthChecks.checks.filter(c => c.status === 'healthy').length,
        warning: warningCount,
        unhealthy: unhealthyCount
      },
      timestamp: healthChecks.timestamp
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[HEALTH-MONITOR] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
