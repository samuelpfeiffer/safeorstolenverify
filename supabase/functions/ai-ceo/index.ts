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

    console.log('[AI-CEO] Starting executive decision cycle with OpenAI...');

    // Get current business metrics and performance data
    const { data: metrics } = await supabase
      .from('business_metrics')
      .select('*')
      .order('recorded_at', { ascending: false })
      .limit(100);

    const { data: seoPerf } = await supabase
      .from('seo_performance')
      .select('*')
      .order('date', { ascending: false })
      .limit(30);

    const { data: purchases } = await supabase
      .from('purchases')
      .select('status, amount, created_at')
      .order('created_at', { ascending: false })
      .limit(100);

    // Calculate revenue and conversion metrics
    const totalRevenue = purchases?.reduce((acc, p) => acc + (p.status === 'completed' ? p.amount : 0), 0) || 0;
    const conversionRate = purchases?.length ? (purchases.filter(p => p.status === 'completed').length / purchases.length) * 100 : 0;

    const ceoPrompt = `You are the CEO AI of SafeOrStolen.com. Make strategic business decisions based on this data:

BUSINESS METRICS:
- Total Revenue (last 100 transactions): $${(totalRevenue / 100).toFixed(2)}
- Conversion Rate: ${conversionRate.toFixed(2)}%
- Recent SEO Performance: ${JSON.stringify(seoPerf?.[0], null, 2)}
- Business Metrics: ${JSON.stringify(metrics?.slice(0, 10), null, 2)}

YOUR RESPONSIBILITIES:
1. Set strategic goals and priorities
2. Make high-level business decisions
3. Allocate resources across departments
4. Identify growth opportunities
5. Manage business risks
6. Set company direction

DECISION AREAS:
- Market expansion opportunities
- Pricing strategy adjustments
- Investment priorities
- Partnership opportunities
- Risk mitigation strategies
- Revenue optimization

Analyze the data and make 3-5 strategic decisions with:
1. Clear decision statement
2. Strong business reasoning
3. Expected impact on revenue/growth
4. Priority level (critical/high/medium)
5. Specific actions to execute

Return as JSON:
{
  "decisions": [
    {
      "decision": "specific decision",
      "reasoning": "why this matters",
      "expectedImpact": "quantified impact estimate",
      "priority": "critical/high/medium",
      "actions": ["action 1", "action 2"],
      "metrics": {"revenue_impact": 0, "growth_potential": 0}
    }
  ],
  "kpis": {
    "current_revenue": ${totalRevenue / 100},
    "conversion_rate": ${conversionRate},
    "priority_focus": "main focus area"
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
            content: 'You are the CEO AI making strategic business decisions. Be decisive, data-driven, and focused on growth and profitability.'
          },
          { role: 'user', content: ceoPrompt }
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

    // Store decisions in database with proper type validation
    const decisionsToStore = analysis.decisions?.map((d: any) => {
      const impactScore = typeof d.metrics?.revenue_impact === 'number' 
        ? d.metrics.revenue_impact 
        : parseFloat(d.metrics?.revenue_impact) || 0;
      
      return {
        executive_role: 'CEO',
        decision_type: 'strategic',
        decision_data: d,
        reasoning: d.reasoning || 'Strategic decision',
        confidence: 0.9,
        priority: d.priority || 'medium',
        status: 'pending',
        impact_score: isNaN(impactScore) ? 0 : impactScore
      };
    });

    if (decisionsToStore?.length > 0) {
      const { error: insertError } = await supabase.from('ai_executive_decisions').insert(decisionsToStore);
      if (insertError) {
        console.error('[AI-CEO] Error storing decisions:', insertError);
      }
    }

    // Update CEO executive status
    const { data: currentExec } = await supabase
      .from('ai_executives')
      .select('decisions_count')
      .eq('role', 'CEO')
      .single();
    
    await supabase
      .from('ai_executives')
      .update({
        last_decision_at: new Date().toISOString(),
        decisions_count: (currentExec?.decisions_count || 0) + (decisionsToStore?.length || 0),
        updated_at: new Date().toISOString()
      })
      .eq('role', 'CEO');

    // Store business metrics
    await supabase.from('business_metrics').insert({
      metric_type: 'ceo_analysis',
      metric_value: totalRevenue / 100,
      metric_data: analysis.kpis
    });

    console.log('[AI-CEO] Decisions made:', decisionsToStore?.length || 0);

    return new Response(JSON.stringify({
      success: true,
      decisions: analysis.decisions,
      kpis: analysis.kpis,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[AI-CEO] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
