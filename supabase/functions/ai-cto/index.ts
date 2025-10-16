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

    console.log('[AI-CTO] Starting technical optimization cycle with OpenAI...');

    // Get technical metrics and system data
    const { data: auditLogs } = await supabase
      .from('audit_logs')
      .select('action, new_values')
      .or('action.like.%ERROR%,action.like.%FAILED%')
      .order('created_at', { ascending: false })
      .limit(50);

    const { data: apiUsage } = await supabase
      .from('api_usage_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    const { data: verifications } = await supabase
      .from('verification_searches')
      .select('*')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    const ctoPrompt = `You are the CTO AI of SafeOrStolen.com. Make technical decisions to optimize performance, security, and reliability:

TECHNICAL DATA:
- Recent Errors: ${auditLogs?.length || 0} errors in recent period
- API Usage: ${apiUsage?.length || 0} API calls
- Daily Verifications: ${verifications?.length || 0}
- Error Log Sample: ${JSON.stringify(auditLogs?.slice(0, 5), null, 2)}

YOUR RESPONSIBILITIES:
1. System performance optimization
2. Security hardening
3. Scalability improvements
4. Technical debt management
5. Infrastructure decisions
6. API and integration optimization

DECISION AREAS:
- Performance bottlenecks
- Security vulnerabilities
- Code optimization
- Database optimization
- API efficiency
- Error handling improvements
- Infrastructure scaling

Make 3-5 technical decisions with specific implementation actions.

Return as JSON:
{
  "decisions": [
    {
      "decision": "specific technical decision",
      "reasoning": "technical justification",
      "expectedImpact": "performance/security impact",
      "priority": "critical/high/medium",
      "actions": ["technical action 1", "action 2"],
      "category": "performance/security/scalability",
      "metrics": {"improvement_estimate": 0, "risk_level": "low/medium/high"}
    }
  ],
  "systemHealth": {
    "errorRate": ${((auditLogs?.length || 0) / 100 * 100).toFixed(2)},
    "apiPerformance": "good/degraded/poor",
    "recommendations": ["rec 1", "rec 2"]
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
            content: 'You are the CTO AI responsible for technical excellence, security, and system performance. Make pragmatic technical decisions.'
          },
          { role: 'user', content: ctoPrompt }
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

    // Store technical decisions with proper type validation
    const decisionsToStore = analysis.decisions?.map((d: any) => {
      const impactScore = typeof d.metrics?.improvement_estimate === 'number'
        ? d.metrics.improvement_estimate
        : parseFloat(d.metrics?.improvement_estimate) || 0;
      
      return {
        executive_role: 'CTO',
        decision_type: 'technical',
        decision_data: d,
        reasoning: d.reasoning || 'Technical decision',
        confidence: 0.92,
        priority: d.priority || 'medium',
        status: 'pending',
        impact_score: isNaN(impactScore) ? 0 : impactScore
      };
    });

    if (decisionsToStore?.length > 0) {
      const { error: insertError } = await supabase.from('ai_executive_decisions').insert(decisionsToStore);
      if (insertError) {
        console.error('[AI-CTO] Error storing decisions:', insertError);
      }
    }

    // Update CTO executive status
    const { data: currentExec } = await supabase
      .from('ai_executives')
      .select('decisions_count')
      .eq('role', 'CTO')
      .single();
    
    await supabase
      .from('ai_executives')
      .update({
        last_decision_at: new Date().toISOString(),
        decisions_count: (currentExec?.decisions_count || 0) + (decisionsToStore?.length || 0),
        updated_at: new Date().toISOString()
      })
      .eq('role', 'CTO');

    console.log('[AI-CTO] Technical decisions made:', decisionsToStore?.length || 0);

    return new Response(JSON.stringify({
      success: true,
      decisions: analysis.decisions,
      systemHealth: analysis.systemHealth,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[AI-CTO] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
