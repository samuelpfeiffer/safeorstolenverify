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
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('[AI-EXECUTIVE] Starting autonomous executive analysis...');

    // 1. COLLECT ALL BUSINESS DATA
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    // Get today's metrics
    const { data: todayMetrics } = await supabase
      .from('business_metrics')
      .select('*')
      .eq('date', today)
      .single();

    // Get yesterday's metrics for comparison
    const { data: yesterdayMetrics } = await supabase
      .from('business_metrics')
      .select('*')
      .eq('date', yesterday)
      .single();

    // Get recent AI-generated content performance
    const { data: contentPerformance } = await supabase
      .from('ai_generated_content')
      .select('*, content_performance(*)')
      .eq('status', 'published')
      .limit(20);

    // Get active marketing campaigns
    const { data: campaigns } = await supabase
      .from('marketing_campaigns')
      .select('*')
      .eq('status', 'active');

    // Get recent user behavior
    const { data: userBehavior } = await supabase
      .from('user_behavior_analytics')
      .select('*')
      .gte('created_at', new Date(Date.now() - 7 * 86400000).toISOString())
      .order('created_at', { ascending: false });

    // Get system health
    const { data: systemHealth } = await supabase
      .from('system_health_log')
      .select('*')
      .gte('created_at', new Date(Date.now() - 3600000).toISOString())
      .order('created_at', { ascending: false });

    // 2. AI STRATEGIC ANALYSIS
    const analysisPrompt = `You are the AI Executive Team (CEO, COO, CMO, CFO) for SafeOrStolen.com, a stolen goods verification platform.

CURRENT BUSINESS DATA:
Today's Metrics: ${JSON.stringify(todayMetrics || {}, null, 2)}
Yesterday's Metrics: ${JSON.stringify(yesterdayMetrics || {}, null, 2)}
Content Performance: ${contentPerformance?.length || 0} published articles
Active Marketing Campaigns: ${campaigns?.length || 0}
Recent User Behavior Events: ${userBehavior?.length || 0} events in last 7 days
System Health Issues: ${systemHealth?.filter(h => h.status !== 'healthy').length || 0}

YOUR MISSION: Analyze the business holistically and make strategic decisions to:
1. Increase revenue
2. Improve user acquisition and retention
3. Optimize operations
4. Dominate the market

Provide strategic decisions in the following format (JSON):
{
  "ceo_decision": {
    "title": "Strategic decision title",
    "description": "What to do",
    "reasoning": "Why this matters now",
    "expected_outcome": "Expected result",
    "confidence_score": 0.85,
    "priority": 9
  },
  "coo_decision": {
    "title": "Operations optimization",
    "description": "What to improve",
    "reasoning": "Why this will improve efficiency",
    "expected_outcome": "Expected result",
    "confidence_score": 0.80,
    "priority": 7
  },
  "cmo_decision": {
    "title": "Marketing strategy",
    "description": "Marketing action to take",
    "reasoning": "Why this will increase conversions",
    "expected_outcome": "Expected result",
    "confidence_score": 0.88,
    "priority": 8
  },
  "cfo_decision": {
    "title": "Revenue optimization",
    "description": "Pricing or monetization change",
    "reasoning": "Financial impact analysis",
    "expected_outcome": "Expected revenue impact",
    "confidence_score": 0.82,
    "priority": 9
  }
}

Focus on:
- Data-driven decisions based on actual metrics
- Quick wins vs long-term strategy
- Revenue optimization opportunities
- User experience improvements that drive conversions
- Competitive advantages
- Risk mitigation`;

    console.log('[AI-EXECUTIVE] Consulting AI for strategic decisions...');

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: [
          { 
            role: 'system', 
            content: 'You are a strategic AI executive team with expertise in SaaS, marketplaces, and consumer protection. Make bold, data-driven decisions that maximize business value.' 
          },
          { role: 'user', content: analysisPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const decisionsText = aiData.choices[0].message.content;

    // Parse AI decisions
    let decisions;
    try {
      const jsonMatch = decisionsText.match(/\{[\s\S]*\}/);
      decisions = JSON.parse(jsonMatch ? jsonMatch[0] : decisionsText);
    } catch (e) {
      console.error('[AI-EXECUTIVE] Failed to parse AI decisions:', e);
      throw new Error('Failed to parse AI strategic decisions');
    }

    console.log('[AI-EXECUTIVE] AI decisions received:', decisions);

    // 3. RECORD DECISIONS IN DATABASE
    const decisionsToInsert = [];

    if (decisions.ceo_decision) {
      decisionsToInsert.push({
        decision_type: 'strategic',
        role: 'ceo',
        decision_title: decisions.ceo_decision.title,
        decision_description: decisions.ceo_decision.description,
        reasoning: decisions.ceo_decision.reasoning,
        expected_outcome: decisions.ceo_decision.expected_outcome,
        confidence_score: decisions.ceo_decision.confidence_score,
        priority: decisions.ceo_decision.priority,
        data_analyzed: { todayMetrics, yesterdayMetrics },
        status: 'pending',
      });
    }

    if (decisions.coo_decision) {
      decisionsToInsert.push({
        decision_type: 'operations',
        role: 'coo',
        decision_title: decisions.coo_decision.title,
        decision_description: decisions.coo_decision.description,
        reasoning: decisions.coo_decision.reasoning,
        expected_outcome: decisions.coo_decision.expected_outcome,
        confidence_score: decisions.coo_decision.confidence_score,
        priority: decisions.coo_decision.priority,
        data_analyzed: { systemHealth, userBehavior: userBehavior?.length },
        status: 'pending',
      });
    }

    if (decisions.cmo_decision) {
      decisionsToInsert.push({
        decision_type: 'marketing',
        role: 'cmo',
        decision_title: decisions.cmo_decision.title,
        decision_description: decisions.cmo_decision.description,
        reasoning: decisions.cmo_decision.reasoning,
        expected_outcome: decisions.cmo_decision.expected_outcome,
        confidence_score: decisions.cmo_decision.confidence_score,
        priority: decisions.cmo_decision.priority,
        data_analyzed: { campaigns, contentPerformance: contentPerformance?.length },
        status: 'pending',
      });
    }

    if (decisions.cfo_decision) {
      decisionsToInsert.push({
        decision_type: 'pricing',
        role: 'cfo',
        decision_title: decisions.cfo_decision.title,
        decision_description: decisions.cfo_decision.description,
        reasoning: decisions.cfo_decision.reasoning,
        expected_outcome: decisions.cfo_decision.expected_outcome,
        confidence_score: decisions.cfo_decision.confidence_score,
        priority: decisions.cfo_decision.priority,
        data_analyzed: { 
          revenue: todayMetrics?.revenue_total,
          conversions: todayMetrics?.conversion_rate 
        },
        status: 'pending',
      });
    }

    const { data: savedDecisions, error: saveError } = await supabase
      .from('ai_decisions')
      .insert(decisionsToInsert)
      .select();

    if (saveError) {
      console.error('[AI-EXECUTIVE] Error saving decisions:', saveError);
      throw saveError;
    }

    console.log('[AI-EXECUTIVE] Strategic decisions saved:', savedDecisions.length);

    // 4. AUTO-IMPLEMENT HIGH-CONFIDENCE DECISIONS
    for (const decision of savedDecisions) {
      if (decision.confidence_score >= 0.85 && decision.priority >= 8) {
        console.log(`[AI-EXECUTIVE] Auto-implementing high-confidence decision: ${decision.decision_title}`);
        
        // Mark as implementing
        await supabase
          .from('ai_decisions')
          .update({ 
            status: 'implementing',
            implementation_date: new Date().toISOString()
          })
          .eq('id', decision.id);

        // TODO: Actual implementation logic would go here
        // For now, we log it for human review
      }
    }

    return new Response(JSON.stringify({
      success: true,
      decisions: savedDecisions,
      summary: {
        total_decisions: savedDecisions.length,
        high_priority: savedDecisions.filter(d => d.priority >= 8).length,
        auto_implementing: savedDecisions.filter(d => d.confidence_score >= 0.85 && d.priority >= 8).length,
      },
      message: 'AI Executive Team has made strategic decisions'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI-EXECUTIVE] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
