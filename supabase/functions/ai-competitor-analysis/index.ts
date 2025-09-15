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
      competitorUrl, 
      keywords, 
      analysisType = 'content_gap' 
    } = await req.json();

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!openAIApiKey || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing required environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log(`Starting AI competitor analysis for: ${competitorUrl}`);

    // AI-powered competitor analysis using GPT-5
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
            content: `You are an AI SEO expert specializing in competitive analysis for SafeOrStolen.com, a stolen goods verification platform. Analyze competitor strategies and provide actionable insights for outranking them in search results.`
          },
          {
            role: 'user',
            content: `Analyze competitor: ${competitorUrl} for keywords: ${keywords.join(', ')}. 
            
            Provide a comprehensive competitive analysis including:
            1. Content gaps we can exploit
            2. Keyword opportunities they're missing
            3. Technical SEO weaknesses
            4. Content quality assessment
            5. Backlink opportunities
            6. Specific ranking strategies to outperform them
            
            Focus on actionable insights for stolen goods verification, IMEI checking, and marketplace safety topics.`
          }
        ],
        max_completion_tokens: 2000
      }),
    });

    const analysisData = await analysisResponse.json();
    
    if (!analysisData.choices?.[0]?.message?.content) {
      throw new Error('Invalid AI response structure');
    }

    const aiInsights = analysisData.choices[0].message.content;

    // Store analysis results
    const { error: insertError } = await supabase
      .from('competitor_analysis')
      .insert({
        competitor_domain: competitorUrl,
        keyword: keywords.join(', '),
        ai_insights: aiInsights,
        last_analyzed_at: new Date().toISOString()
      });

    if (insertError) {
      console.error('Error storing competitor analysis:', insertError);
    }

    // Generate SEO improvement suggestions
    const suggestionsResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: `You are an AI SEO strategist. Based on the competitor analysis, create specific, actionable SEO suggestions for SafeOrStolen.com to outrank competitors.`
          },
          {
            role: 'user',
            content: `Based on this competitor analysis: "${aiInsights}"
            
            Create 5-10 specific, high-impact SEO suggestions for SafeOrStolen.com. Each suggestion should include:
            - Title (action-oriented)
            - Description (detailed explanation)
            - Implementation notes (technical steps)
            - Expected impact (high/medium/low)
            - Priority (high/medium/low)
            
            Focus on suggestions that will help us rank #1 for stolen goods verification keywords.`
          }
        ],
        max_completion_tokens: 1500
      }),
    });

    const suggestionsData = await suggestionsResponse.json();
    const suggestions = suggestionsData.choices[0].message.content;

    // Parse and store AI suggestions
    const suggestionLines = suggestions.split('\n').filter(line => line.trim());
    
    for (const suggestion of suggestionLines.slice(0, 10)) { // Limit to 10 suggestions
      if (suggestion.length > 50) { // Only meaningful suggestions
        await supabase
          .from('ai_seo_suggestions')
          .insert({
            suggestion_type: 'competitive_analysis',
            title: suggestion.substring(0, 100),
            description: suggestion,
            ai_confidence_score: 0.85,
            expected_impact: 'high',
            priority: 'high'
          });
      }
    }

    console.log('AI competitor analysis completed successfully');

    return new Response(JSON.stringify({
      success: true,
      analysis: aiInsights,
      suggestions_count: suggestionLines.length,
      competitor_analyzed: competitorUrl,
      keywords_analyzed: keywords
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI competitor analysis:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      details: 'AI competitor analysis failed'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});