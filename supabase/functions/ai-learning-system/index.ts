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

    console.log('[LEARNING-SYSTEM] Analyzing what strategies are working...');

    // Get completed AI decisions with results
    const { data: completedDecisions } = await supabase
      .from('ai_decisions')
      .select('*')
      .in('status', ['completed', 'monitoring'])
      .not('result_metrics', 'is', null)
      .order('created_at', { ascending: false })
      .limit(50);

    // Get active experiments
    const { data: experiments } = await supabase
      .from('revenue_experiments')
      .select('*')
      .eq('status', 'running')
      .gte('started_at', new Date(Date.now() - 14 * 86400000).toISOString());

    // Get historical metrics for trend analysis
    const { data: historicalMetrics } = await supabase
      .from('business_metrics')
      .select('*')
      .order('date', { ascending: false })
      .limit(90);

    const learningPrompt = `You are the AI Learning System for SafeOrStolen.com. Analyze past decisions and experiments to learn what works.

DATA TO ANALYZE:
- Completed AI decisions: ${completedDecisions?.length || 0}
- Active experiments: ${experiments?.length || 0}
- Historical data points: ${historicalMetrics?.length || 0} days

SAMPLE DECISIONS (Last 5):
${JSON.stringify(completedDecisions?.slice(0, 5) || [], null, 2)}

ACTIVE EXPERIMENTS:
${JSON.stringify(experiments || [], null, 2)}

YOUR TASK: Identify patterns and generate learnings that will improve future decisions.

Provide analysis as JSON:
{
  "key_learnings": [
    {
      "learning": "What we learned",
      "evidence": "Data that supports this",
      "confidence": 0.85,
      "recommendation": "How to apply this learning"
    }
  ],
  "successful_strategies": [
    {
      "strategy": "What worked",
      "impact": "Measured result",
      "repeat_recommendation": true
    }
  ],
  "failed_strategies": [
    {
      "strategy": "What didn't work",
      "reason": "Why it failed",
      "avoid_in_future": true
    }
  ],
  "experiment_conclusions": [
    {
      "experiment_name": "Experiment",
      "winner": "variant_a or variant_b",
      "conclusion": "What we learned",
      "should_implement": true
    }
  ]
}`;

    console.log('[LEARNING-SYSTEM] Analyzing patterns with AI...');

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
            content: 'You are an AI learning system that identifies patterns, learns from data, and makes increasingly better decisions over time.' 
          },
          { role: 'user', content: learningPrompt }
        ],
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const analysisText = aiData.choices[0].message.content;

    let analysis;
    try {
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      analysis = JSON.parse(jsonMatch ? jsonMatch[0] : analysisText);
    } catch (e) {
      console.error('[LEARNING-SYSTEM] Failed to parse AI analysis:', e);
      throw new Error('Failed to parse learning analysis');
    }

    // Store learnings in database
    const learningsToStore = [];

    for (const learning of analysis.key_learnings || []) {
      learningsToStore.push({
        strategy_type: 'general',
        strategy_name: learning.learning,
        hypothesis: learning.evidence,
        conclusion: learning.recommendation,
        confidence_level: learning.confidence,
        status: 'completed',
        test_ended_at: new Date().toISOString(),
      });
    }

    for (const success of analysis.successful_strategies || []) {
      learningsToStore.push({
        strategy_type: 'success',
        strategy_name: success.strategy,
        hypothesis: 'This strategy should work',
        conclusion: success.impact,
        recommendation: success.repeat_recommendation ? 'Repeat this strategy' : 'Monitor results',
        status: 'adopted',
        test_ended_at: new Date().toISOString(),
      });
    }

    if (learningsToStore.length > 0) {
      await supabase
        .from('ai_learning_data')
        .insert(learningsToStore);
    }

    // Update experiment conclusions
    for (const expConclusion of analysis.experiment_conclusions || []) {
      const exp = experiments?.find(e => 
        e.experiment_name.toLowerCase().includes(expConclusion.experiment_name.toLowerCase())
      );
      
      if (exp) {
        await supabase
          .from('revenue_experiments')
          .update({
            winner: expConclusion.winner,
            status: 'completed',
            ended_at: new Date().toISOString(),
          })
          .eq('id', exp.id);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      analysis,
      learnings_stored: learningsToStore.length,
      experiments_concluded: analysis.experiment_conclusions?.length || 0,
      message: 'Learning analysis complete - AI is getting smarter'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[LEARNING-SYSTEM] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
