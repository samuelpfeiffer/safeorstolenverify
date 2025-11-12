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

    console.log('[REVENUE-OPTIMIZER] Analyzing revenue optimization opportunities...');

    // Get last 30 days of metrics
    const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0];
    
    const { data: recentMetrics } = await supabase
      .from('business_metrics')
      .select('*')
      .gte('date', thirtyDaysAgo)
      .order('date', { ascending: true });

    // Get current pricing from verification items
    const { data: recentPurchases } = await supabase
      .from('verification_items')
      .select('amount_paid, identifier_type')
      .not('amount_paid', 'is', null)
      .gte('created_at', new Date(Date.now() - 7 * 86400000).toISOString())
      .limit(100);

    // Calculate current conversion metrics
    const totalRevenue = recentMetrics?.reduce((sum, m) => sum + (m.revenue_total || 0), 0) || 0;
    const avgDailyRevenue = totalRevenue / 30;
    const avgConversionRate = recentMetrics?.reduce((sum, m) => sum + (m.conversion_rate || 0), 0) / (recentMetrics?.length || 1);

    const analysisPrompt = `You are the CFO of SafeOrStolen.com. Analyze revenue data and recommend optimization strategies.

CURRENT REVENUE DATA:
- 30-day total revenue: $${totalRevenue.toFixed(2)}
- Average daily revenue: $${avgDailyRevenue.toFixed(2)}
- Average conversion rate: ${avgConversionRate.toFixed(2)}%
- Recent purchases: ${recentPurchases?.length || 0}
- Current single verification price: $2.99

PRICING OPTIONS TO CONSIDER:
1. Dynamic pricing based on item type (phones vs cars vs electronics)
2. Volume discounts (bulk verification packages)
3. Surge pricing during high-demand periods
4. Freemium upsells to premium features
5. Subscription tier optimization

Provide revenue optimization recommendations as JSON:
{
  "primary_recommendation": {
    "strategy": "Strategy name",
    "description": "What to do",
    "expected_revenue_increase": 25,
    "implementation_priority": "high",
    "reasoning": "Why this will work",
    "test_duration_days": 14
  },
  "quick_wins": [
    {
      "action": "Quick action to take",
      "expected_impact": "Revenue impact",
      "effort": "low"
    }
  ],
  "a_b_test_suggestions": [
    {
      "test_name": "Test name",
      "variant_a": "Control",
      "variant_b": "Test variant",
      "success_metric": "What to measure"
    }
  ]
}`;

    console.log('[REVENUE-OPTIMIZER] Consulting AI for optimization strategies...');

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: 'You are a CFO specialized in SaaS pricing optimization and revenue growth. Focus on data-driven strategies with measurable outcomes.' 
          },
          { role: 'user', content: analysisPrompt }
        ],
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const recommendationsText = aiData.choices[0].message.content;

    let recommendations;
    try {
      const jsonMatch = recommendationsText.match(/\{[\s\S]*\}/);
      recommendations = JSON.parse(jsonMatch ? jsonMatch[0] : recommendationsText);
    } catch (e) {
      console.error('[REVENUE-OPTIMIZER] Failed to parse AI recommendations:', e);
      throw new Error('Failed to parse revenue optimization recommendations');
    }

    // Log CFO decision
    const { data: cfoDecision } = await supabase
      .from('ai_decisions')
      .insert({
        decision_type: 'pricing',
        role: 'cfo',
        decision_title: recommendations.primary_recommendation.strategy,
        decision_description: recommendations.primary_recommendation.description,
        reasoning: recommendations.primary_recommendation.reasoning,
        expected_outcome: `${recommendations.primary_recommendation.expected_revenue_increase}% revenue increase`,
        confidence_score: 0.85,
        priority: recommendations.primary_recommendation.implementation_priority === 'high' ? 9 : 7,
        data_analyzed: { recentMetrics, totalRevenue, avgConversionRate },
        status: 'pending',
      })
      .select()
      .single();

    // Create A/B test experiments
    if (recommendations.a_b_test_suggestions) {
      for (const test of recommendations.a_b_test_suggestions) {
        await supabase
          .from('revenue_experiments')
          .insert({
            experiment_name: test.test_name,
            experiment_type: 'pricing',
            description: test.success_metric,
            variant_a: { name: 'Control', value: test.variant_a },
            variant_b: { name: 'Test', value: test.variant_b },
            traffic_split: 50,
            status: 'running',
          });
      }
    }

    return new Response(JSON.stringify({
      success: true,
      recommendations,
      cfo_decision: cfoDecision,
      experiments_created: recommendations.a_b_test_suggestions?.length || 0,
      message: 'Revenue optimization analysis complete'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[REVENUE-OPTIMIZER] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
