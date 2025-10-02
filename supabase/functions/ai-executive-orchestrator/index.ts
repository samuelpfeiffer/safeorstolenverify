import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('[ORCHESTRATOR] Starting AI Executive Team coordination...');

    // Execute all AI executives in parallel
    const executiveRoles = ['CEO', 'COO', 'CFO', 'CMO', 'CTO'];
    const results = await Promise.allSettled(
      executiveRoles.map(role =>
        fetch(`${supabaseUrl}/functions/v1/ai-${role.toLowerCase()}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
          },
        }).then(r => r.json())
      )
    );

    // Collect all decisions
    const allDecisions: any[] = [];
    const executiveResults: any = {};

    results.forEach((result, idx) => {
      const role = executiveRoles[idx];
      if (result.status === 'fulfilled') {
        executiveResults[role] = result.value;
        if (result.value.decisions) {
          allDecisions.push(...result.value.decisions.map((d: any) => ({ ...d, role })));
        }
      } else {
        console.error(`[ORCHESTRATOR] ${role} failed:`, result.reason);
        executiveResults[role] = { error: result.reason };
      }
    });

    // Prioritize decisions across all executives
    const prioritizedDecisions = allDecisions.sort((a, b) => {
      const priorityOrder: any = { 'critical': 0, 'high': 1, 'medium': 2, 'low': 3 };
      return (priorityOrder[a.priority] || 99) - (priorityOrder[b.priority] || 99);
    });

    // Auto-execute low-risk, high-priority decisions
    const autoExecutable = prioritizedDecisions.filter(d =>
      d.priority === 'critical' || d.priority === 'high'
    );

    console.log(`[ORCHESTRATOR] Total decisions: ${allDecisions.length}, Auto-executable: ${autoExecutable.length}`);

    // Store coordination summary
    await supabase.from('business_metrics').insert({
      metric_type: 'executive_coordination',
      metric_value: allDecisions.length,
      metric_data: {
        decisions_by_role: executiveResults,
        prioritized_actions: autoExecutable.slice(0, 10),
        timestamp: new Date().toISOString()
      }
    });

    return new Response(JSON.stringify({
      success: true,
      summary: {
        totalDecisions: allDecisions.length,
        criticalDecisions: allDecisions.filter((d: any) => d.priority === 'critical').length,
        autoExecutable: autoExecutable.length,
        executivesRun: executiveRoles.length
      },
      results: executiveResults,
      prioritizedActions: prioritizedDecisions.slice(0, 20),
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[ORCHESTRATOR] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
