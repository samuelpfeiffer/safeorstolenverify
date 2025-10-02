import "https://deno.land/x/xhr@0.1.0/mod.ts";
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
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('[AI-COO] Starting operations optimization cycle...');

    // Get operational data
    const { data: verifications } = await supabase
      .from('verification_searches')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    const { data: apiUsage } = await supabase
      .from('api_usage_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    const { data: rateLimits } = await supabase
      .from('rate_limits')
      .select('*')
      .order('window_start', { ascending: false })
      .limit(50);

    const { data: auditLogs } = await supabase
      .from('audit_logs')
      .select('count')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    // Calculate operational metrics
    const verificationsLast24h = verifications?.filter(v => 
      new Date(v.created_at) > new Date(Date.now() - 24 * 60 * 60 * 1000)
    ).length || 0;

    const avgResponseTime = 450; // Mock data - would need actual metrics
    const systemUptime = 99.8; // Mock data

    const cooPrompt = `You are the COO AI of SafeOrStolen.com. Make operational decisions to optimize efficiency, quality, and customer satisfaction:

OPERATIONAL DATA:
- Verifications (24h): ${verificationsLast24h}
- Total Recent Verifications: ${verifications?.length || 0}
- API Usage: ${apiUsage?.length || 0} calls
- Rate Limit Events: ${rateLimits?.length || 0}
- System Activity (24h): ${auditLogs?.[0]?.count || 0} events
- Avg Response Time: ${avgResponseTime}ms
- System Uptime: ${systemUptime}%

YOUR RESPONSIBILITIES:
1. Process optimization
2. Quality assurance
3. Operational efficiency
4. Customer experience
5. Resource allocation
6. Service delivery

DECISION AREAS:
- Verification process improvements
- API efficiency optimization
- Rate limiting strategies
- Customer support optimization
- Quality control measures
- Operational workflows

Make 3-5 operational decisions with measurable efficiency impacts.

Return as JSON:
{
  "decisions": [
    {
      "decision": "specific operational decision",
      "reasoning": "operational justification",
      "expectedImpact": "efficiency/quality impact",
      "priority": "critical/high/medium",
      "actions": ["action 1", "action 2"],
      "metrics": {
        "efficiency_gain": 0,
        "quality_improvement": 0,
        "cost_savings": 0
      }
    }
  ],
  "operationalHealth": {
    "verificationVolume": ${verificationsLast24h},
    "avgResponseTime": ${avgResponseTime},
    "uptime": ${systemUptime},
    "recommendations": ["ops rec 1", "rec 2"]
  }
}`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are the COO AI focused on operational excellence, efficiency, and quality. Make practical operational decisions.'
          },
          { role: 'user', content: cooPrompt }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = JSON.parse(data.choices[0].message.content);

    // Store operational decisions
    const decisionsToStore = analysis.decisions?.map((d: any) => ({
      executive_role: 'COO',
      decision_type: 'operational',
      decision_data: d,
      reasoning: d.reasoning,
      confidence: 0.89,
      priority: d.priority,
      status: 'pending',
      impact_score: d.metrics?.efficiency_gain || 0
    }));

    if (decisionsToStore?.length > 0) {
      await supabase.from('ai_executive_decisions').insert(decisionsToStore);
    }

    // Update COO executive status
    await supabase
      .from('ai_executives')
      .update({
        last_decision_at: new Date().toISOString(),
        decisions_count: supabase.raw('decisions_count + ' + (decisionsToStore?.length || 0)),
        updated_at: new Date().toISOString()
      })
      .eq('role', 'COO');

    console.log('[AI-COO] Operational decisions made:', decisionsToStore?.length || 0);

    return new Response(JSON.stringify({
      success: true,
      decisions: analysis.decisions,
      operationalHealth: analysis.operationalHealth,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[AI-COO] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
