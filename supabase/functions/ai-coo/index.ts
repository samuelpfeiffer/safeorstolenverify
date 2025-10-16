import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('[AI-COO] Starting operations optimization cycle with OpenAI...');

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

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-mini-2025-08-07',
        messages: [
          {
            role: 'system',
            content: 'You are the COO AI focused on operational excellence, efficiency, and quality. Make practical operational decisions.'
          },
          { role: 'user', content: cooPrompt }
        ],
        response_format: { type: "json_object" },
        max_completion_tokens: 2000
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = JSON.parse(data.choices[0].message.content);

    // Store operational decisions with proper type validation
    const decisionsToStore = analysis.decisions?.map((d: any) => {
      const impactScore = typeof d.metrics?.efficiency_gain === 'number'
        ? d.metrics.efficiency_gain
        : parseFloat(d.metrics?.efficiency_gain) || 0;
      
      return {
        executive_role: 'COO',
        decision_type: 'operational',
        decision_data: d,
        reasoning: d.reasoning || 'Operational decision',
        confidence: 0.89,
        priority: d.priority || 'medium',
        status: 'pending',
        impact_score: isNaN(impactScore) ? 0 : impactScore
      };
    });

    if (decisionsToStore?.length > 0) {
      const { error: insertError } = await supabase.from('ai_executive_decisions').insert(decisionsToStore);
      if (insertError) {
        console.error('[AI-COO] Error storing decisions:', insertError);
      }
    }

    // Update COO executive status
    const { data: currentExec } = await supabase
      .from('ai_executives')
      .select('decisions_count')
      .eq('role', 'COO')
      .single();
    
    await supabase
      .from('ai_executives')
      .update({
        last_decision_at: new Date().toISOString(),
        decisions_count: (currentExec?.decisions_count || 0) + (decisionsToStore?.length || 0),
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
