import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try{
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('[AI-CMO] Starting marketing optimization cycle with OpenAI...');

    // Get marketing and SEO data
    const { data: keywords } = await supabase
      .from('seo_keywords')
      .select('*')
      .order('search_volume', { ascending: false })
      .limit(50);

    const { data: seoPerf } = await supabase
      .from('seo_performance')
      .select('*')
      .order('date', { ascending: false })
      .limit(30);

    const { data: contentPerf } = await supabase
      .from('content_performance')
      .select('*')
      .order('organic_traffic', { ascending: false })
      .limit(20);

    const { data: subscribers } = await supabase
      .from('newsletter_subscribers')
      .select('count');

    const cmoPrompt = `You are the CMO AI of SafeOrStolen.com. Make marketing decisions to maximize growth:

MARKETING DATA:
- Top Keywords: ${JSON.stringify(keywords?.slice(0, 10), null, 2)}
- SEO Performance: ${JSON.stringify(seoPerf?.[0], null, 2)}
- Content Performance: ${JSON.stringify(contentPerf?.slice(0, 5), null, 2)}
- Newsletter Subscribers: ${subscribers?.[0]?.count || 0}

YOUR RESPONSIBILITIES:
1. Optimize SEO and content strategy
2. Drive organic traffic growth
3. Improve conversion rates
4. Build brand awareness
5. User acquisition campaigns
6. Content marketing strategy

DECISION AREAS:
- SEO optimization priorities
- Content creation strategy
- Social media campaigns
- Email marketing tactics
- Paid advertising opportunities
- Conversion rate optimization

Make 3-5 marketing decisions with concrete actions that can be executed immediately.

Return as JSON:
{
  "decisions": [
    {
      "decision": "specific marketing decision",
      "reasoning": "data-driven justification",
      "expectedImpact": "traffic/conversion impact",
      "priority": "critical/high/medium",
      "actions": ["executable action 1", "action 2"],
      "channels": ["SEO", "Social", "Email"],
      "metrics": {"traffic_increase": 0, "conversion_lift": 0}
    }
  ],
  "campaigns": [
    {
      "name": "campaign name",
      "objective": "specific goal",
      "tactics": ["tactic 1", "tactic 2"]
    }
  ]
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
            content: 'You are the CMO AI focused on growth, SEO domination, and user acquisition. Make aggressive, data-driven marketing decisions.'
          },
          { role: 'user', content: cmoPrompt }
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

    // Store marketing decisions with proper type validation
    const decisionsToStore = analysis.decisions?.map((d: any) => {
      const impactScore = typeof d.metrics?.traffic_increase === 'number'
        ? d.metrics.traffic_increase
        : parseFloat(d.metrics?.traffic_increase) || 0;
      
      return {
        executive_role: 'CMO',
        decision_type: 'marketing',
        decision_data: d,
        reasoning: d.reasoning || 'Marketing decision',
        confidence: 0.88,
        priority: d.priority || 'medium',
        status: 'pending',
        impact_score: isNaN(impactScore) ? 0 : impactScore
      };
    });

    if (decisionsToStore?.length > 0) {
      const { error: insertError } = await supabase.from('ai_executive_decisions').insert(decisionsToStore);
      if (insertError) {
        console.error('[AI-CMO] Error storing decisions:', insertError);
      }
    }

    // Update CMO executive status
    const { data: currentExec } = await supabase
      .from('ai_executives')
      .select('decisions_count')
      .eq('role', 'CMO')
      .single();
    
    await supabase
      .from('ai_executives')
      .update({
        last_decision_at: new Date().toISOString(),
        decisions_count: (currentExec?.decisions_count || 0) + (decisionsToStore?.length || 0),
        updated_at: new Date().toISOString()
      })
      .eq('role', 'CMO');

    console.log('[AI-CMO] Marketing decisions made:', decisionsToStore?.length || 0);

    return new Response(JSON.stringify({
      success: true,
      decisions: analysis.decisions,
      campaigns: analysis.campaigns,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[AI-CMO] Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
