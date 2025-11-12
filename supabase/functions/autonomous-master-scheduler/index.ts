import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    console.log('[MASTER-SCHEDULER] Starting autonomous business operations...');

    const results: any = {
      timestamp: new Date().toISOString(),
      operations: [],
    };

    // 1. Collect Metrics (runs every hour)
    console.log('[MASTER-SCHEDULER] Step 1: Collecting metrics...');
    try {
      const metricsResponse = await fetch(`${supabaseUrl}/functions/v1/ai-metrics-collector`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const metricsResult = await metricsResponse.json();
      results.operations.push({ step: 'metrics_collection', success: true, data: metricsResult });
    } catch (error) {
      results.operations.push({ step: 'metrics_collection', success: false, error: error.message });
    }

    // 2. Generate Content (runs every 6 hours)
    console.log('[MASTER-SCHEDULER] Step 2: Generating content...');
    try {
      const contentResponse = await fetch(`${supabaseUrl}/functions/v1/autonomous-content-generator`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const contentResult = await contentResponse.json();
      results.operations.push({ step: 'content_generation', success: true, data: contentResult });
    } catch (error) {
      results.operations.push({ step: 'content_generation', success: false, error: error.message });
    }

    // 3. Fix Content Issues
    console.log('[MASTER-SCHEDULER] Step 3: Auto-fixing content issues...');
    try {
      const fixResponse = await fetch(`${supabaseUrl}/functions/v1/auto-fix-content-issues`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const fixResult = await fixResponse.json();
      results.operations.push({ step: 'content_fixes', success: true, data: fixResult });
    } catch (error) {
      results.operations.push({ step: 'content_fixes', success: false, error: error.message });
    }

    // 4. Executive Decision Making (runs every 12 hours)
    console.log('[MASTER-SCHEDULER] Step 4: AI Executive Team analysis...');
    try {
      const executiveResponse = await fetch(`${supabaseUrl}/functions/v1/ai-executive-system`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const executiveResult = await executiveResponse.json();
      results.operations.push({ step: 'executive_decisions', success: true, data: executiveResult });
    } catch (error) {
      results.operations.push({ step: 'executive_decisions', success: false, error: error.message });
    }

    // 5. Revenue Optimization (runs daily)
    console.log('[MASTER-SCHEDULER] Step 5: Revenue optimization...');
    try {
      const revenueResponse = await fetch(`${supabaseUrl}/functions/v1/ai-revenue-optimizer`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const revenueResult = await revenueResponse.json();
      results.operations.push({ step: 'revenue_optimization', success: true, data: revenueResult });
    } catch (error) {
      results.operations.push({ step: 'revenue_optimization', success: false, error: error.message });
    }

    // 6. Learning System (runs weekly)
    console.log('[MASTER-SCHEDULER] Step 6: AI learning analysis...');
    try {
      const learningResponse = await fetch(`${supabaseUrl}/functions/v1/ai-learning-system`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const learningResult = await learningResponse.json();
      results.operations.push({ step: 'learning_analysis', success: true, data: learningResult });
    } catch (error) {
      results.operations.push({ step: 'learning_analysis', success: false, error: error.message });
    }

    const successCount = results.operations.filter((op: any) => op.success).length;
    const totalOps = results.operations.length;

    console.log(`[MASTER-SCHEDULER] Completed ${successCount}/${totalOps} operations successfully`);

    return new Response(JSON.stringify({
      success: successCount === totalOps,
      summary: {
        total_operations: totalOps,
        successful: successCount,
        failed: totalOps - successCount,
      },
      results,
      message: `Autonomous business operations cycle complete: ${successCount}/${totalOps} successful`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[MASTER-SCHEDULER] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
