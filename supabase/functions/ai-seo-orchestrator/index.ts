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

    console.log('[AI-SEO-ORCHESTRATOR] Starting autonomous SEO operations...');

    const results: any = {
      timestamp: new Date().toISOString(),
      operations: [],
    };

    // 1. Content Generation (runs daily)
    console.log('[AI-SEO-ORCHESTRATOR] Step 1: Content generation...');
    try {
      const contentResponse = await fetch(`${supabaseUrl}/functions/v1/ai-seo-content-generator`, {
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

    // 2. Backlink Finding (runs daily)
    console.log('[AI-SEO-ORCHESTRATOR] Step 2: Backlink discovery...');
    try {
      const backlinkResponse = await fetch(`${supabaseUrl}/functions/v1/ai-seo-backlink-finder`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const backlinkResult = await backlinkResponse.json();
      results.operations.push({ step: 'backlink_discovery', success: true, data: backlinkResult });
    } catch (error) {
      results.operations.push({ step: 'backlink_discovery', success: false, error: error.message });
    }

    // 3. Rank Tracking (runs daily)
    console.log('[AI-SEO-ORCHESTRATOR] Step 3: Rank tracking...');
    try {
      const rankResponse = await fetch(`${supabaseUrl}/functions/v1/ai-seo-rank-tracker`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const rankResult = await rankResponse.json();
      results.operations.push({ step: 'rank_tracking', success: true, data: rankResult });
    } catch (error) {
      results.operations.push({ step: 'rank_tracking', success: false, error: error.message });
    }

    // 4. Competitor Monitoring (runs daily)
    console.log('[AI-SEO-ORCHESTRATOR] Step 4: Competitor monitoring...');
    try {
      const competitorResponse = await fetch(`${supabaseUrl}/functions/v1/ai-seo-competitor-monitor`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const competitorResult = await competitorResponse.json();
      results.operations.push({ step: 'competitor_monitoring', success: true, data: competitorResult });
    } catch (error) {
      results.operations.push({ step: 'competitor_monitoring', success: false, error: error.message });
    }

    // 5. Technical SEO (runs daily)
    console.log('[AI-SEO-ORCHESTRATOR] Step 5: Technical SEO audit...');
    try {
      const technicalResponse = await fetch(`${supabaseUrl}/functions/v1/ai-seo-technical-bot`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
      });
      const technicalResult = await technicalResponse.json();
      results.operations.push({ step: 'technical_seo', success: true, data: technicalResult });
    } catch (error) {
      results.operations.push({ step: 'technical_seo', success: false, error: error.message });
    }

    const successCount = results.operations.filter((op: any) => op.success).length;
    const totalOps = results.operations.length;

    console.log(`[AI-SEO-ORCHESTRATOR] Completed ${successCount}/${totalOps} operations successfully`);

    return new Response(JSON.stringify({
      success: successCount === totalOps,
      summary: {
        total_operations: totalOps,
        successful: successCount,
        failed: totalOps - successCount,
      },
      results,
      message: `Autonomous AI SEO cycle complete: ${successCount}/${totalOps} successful`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI-SEO-ORCHESTRATOR] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
