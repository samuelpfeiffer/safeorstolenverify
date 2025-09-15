import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      keywords = [],
      timeframe = '30days',
      analysisDepth = 'comprehensive'
    } = await req.json();

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!openAIApiKey || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing required environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Starting AI-powered SEO ranking analysis');

    // Get current SEO performance data
    const { data: performanceData } = await supabase
      .from('seo_performance')
      .select('*')
      .order('date', { ascending: false })
      .limit(30);

    const { data: keywordData } = await supabase
      .from('seo_keywords')
      .select('*')
      .order('last_checked_at', { ascending: false });

    const { data: contentData } = await supabase
      .from('content_performance')
      .select('*')
      .order('last_analyzed_at', { ascending: false });

    // AI-powered ranking analysis
    const analysisResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-2025-08-07',
        messages: [
          {
            role: 'system',
            content: `You are an AI SEO strategist analyzing ranking performance for SafeOrStolen.com. Provide data-driven insights and strategic recommendations to achieve #1 rankings for stolen goods verification keywords.`
          },
          {
            role: 'user',
            content: `Analyze current SEO performance data and provide strategic insights:

Performance Data: ${JSON.stringify(performanceData?.slice(0, 10) || [])}
Keyword Data: ${JSON.stringify(keywordData?.slice(0, 20) || [])}
Content Performance: ${JSON.stringify(contentData?.slice(0, 10) || [])}

Target Keywords: ${keywords.join(', ')}

Provide comprehensive analysis:
1. Current ranking performance assessment
2. Keyword opportunity identification
3. Content performance insights
4. Competitive positioning analysis
5. Technical SEO recommendations
6. Link building opportunities
7. Content strategy recommendations
8. Priority action items for next 30 days

Focus on strategies to dominate search results for stolen goods verification, IMEI checking, and marketplace safety.`
          }
        ],
        max_completion_tokens: 3000
      }),
    });

    const analysisData = await analysisResponse.json();
    
    if (!analysisData.choices?.[0]?.message?.content) {
      throw new Error('Invalid AI response structure');
    }

    const rankingAnalysis = analysisData.choices[0].message.content;

    // Generate strategic recommendations
    const strategyResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-2025-08-07',
        messages: [
          {
            role: 'system',
            content: 'Create specific, high-impact SEO strategies based on the ranking analysis to achieve #1 search positions.'
          },
          {
            role: 'user',
            content: `Based on this ranking analysis: "${rankingAnalysis}"

Create 10-15 strategic SEO recommendations:
- Each strategy should be specific and actionable
- Include expected impact on rankings
- Provide implementation timeline
- Assign priority level (critical/high/medium)
- Focus on stolen goods verification market dominance

Format as structured action items for immediate implementation.`
          }
        ],
        max_completion_tokens: 2000
      }),
    });

    const strategyData = await strategyResponse.json();
    const strategicRecommendations = strategyData.choices[0].message.content.split('\n').filter(line => line.trim());

    // Calculate AI optimization score
    const avgContentScore = contentData?.reduce((sum, item) => sum + (item.ai_content_score || 0), 0) / (contentData?.length || 1);
    const keywordCoverage = keywordData?.filter(k => k.current_rank <= 10)?.length || 0;
    const totalKeywords = keywordData?.length || 1;
    
    const aiOptimizationScore = Math.round(
      (avgContentScore * 0.4) + 
      ((keywordCoverage / totalKeywords) * 100 * 0.6)
    );

    // Store strategic recommendations as high-priority suggestions
    for (const recommendation of strategicRecommendations.slice(0, 15)) {
      if (recommendation.length > 50) {
        await supabase
          .from('ai_seo_suggestions')
          .insert({
            suggestion_type: 'strategic',
            title: recommendation.substring(0, 100),
            description: recommendation,
            implementation_notes: 'Strategic ranking improvement initiative',
            ai_confidence_score: 0.95,
            expected_impact: 'high',
            priority: recommendation.toLowerCase().includes('critical') ? 'high' : 'medium'
          });
      }
    }

    // Update performance tracking
    const today = new Date().toISOString().split('T')[0];
    await supabase
      .from('seo_performance')
      .upsert({
        date: today,
        ai_optimization_score: aiOptimizationScore,
        total_keywords_tracking: totalKeywords,
        keyword_rankings_improved: keywordData?.filter(k => k.current_rank < k.target_rank)?.length || 0
      });

    console.log('AI ranking analysis completed successfully');

    return new Response(JSON.stringify({
      success: true,
      ranking_analysis: rankingAnalysis,
      ai_optimization_score: aiOptimizationScore,
      strategic_recommendations: strategicRecommendations.length,
      performance_summary: {
        avg_content_score: Math.round(avgContentScore),
        keywords_in_top_10: keywordCoverage,
        total_keywords_tracked: totalKeywords
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI ranking analysis:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      details: 'AI ranking analysis failed'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});