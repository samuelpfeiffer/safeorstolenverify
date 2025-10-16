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
    const { 
      pageUrl, 
      content, 
      targetKeywords,
      currentRankings = {} 
    } = await req.json();

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!openAIApiKey || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing required environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log(`Starting AI content optimization for: ${pageUrl}`);

    // AI-powered content analysis using GPT-5
    const optimizationResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: `You are an AI SEO content optimization expert for SafeOrStolen.com. Analyze content and provide specific recommendations to achieve #1 search rankings for stolen goods verification keywords.`
          },
          {
            role: 'user',
            content: `Analyze this page content for SEO optimization:
            
            URL: ${pageUrl}
            Target Keywords: ${targetKeywords.join(', ')}
            Current Rankings: ${JSON.stringify(currentRankings)}
            
            Content: "${content.substring(0, 3000)}..."
            
            Provide detailed optimization recommendations:
            1. Content quality score (1-100)
            2. Keyword optimization opportunities
            3. Semantic keyword suggestions
            4. Content structure improvements
            5. Meta tag recommendations
            6. Internal linking opportunities
            7. User experience improvements
            8. E-A-T (Expertise, Authority, Trust) enhancements
            
            Be specific and actionable. Focus on stolen goods verification, IMEI checking, and marketplace safety topics.`
          }
        ],
        max_completion_tokens: 2000
      }),
    });

    const optimizationData = await optimizationResponse.json();
    
    if (!optimizationData.choices?.[0]?.message?.content) {
      throw new Error('Invalid AI response structure');
    }

    const optimizationAnalysis = optimizationData.choices[0].message.content;

    // Extract content score using AI
    const scoreResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-nano-2025-08-07',
        messages: [
          {
            role: 'system',
            content: 'Extract the content quality score from the SEO analysis. Return only a number between 1-100.'
          },
          {
            role: 'user',
            content: optimizationAnalysis
          }
        ],
        max_completion_tokens: 10
      }),
    });

    const scoreData = await scoreResponse.json();
    const contentScore = parseInt(scoreData.choices[0].message.content.match(/\d+/)?.[0] || '75');

    // Generate specific optimization suggestions
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
            content: 'Create specific, actionable SEO optimization suggestions based on the content analysis.'
          },
          {
            role: 'user',
            content: `Based on this content analysis: "${optimizationAnalysis}"
            
            Create 5-8 specific optimization suggestions. Each should be:
            - Title: Clear action item
            - Description: Detailed explanation
            - Implementation: Step-by-step instructions
            - Impact: Expected ranking improvement
            - Priority: high/medium/low
            
            Format as structured suggestions for easy implementation.`
          }
        ],
        max_completion_tokens: 1500
      }),
    });

    const suggestionsData = await suggestionsResponse.json();
    const optimizationSuggestions = suggestionsData.choices[0].message.content.split('\n').filter(line => line.trim());

    // Store content performance data
    const { error: insertError } = await supabase
      .from('content_performance')
      .upsert({
        page_url: pageUrl,
        target_keywords: targetKeywords,
        current_rankings: currentRankings,
        ai_content_score: contentScore,
        optimization_suggestions: optimizationSuggestions,
        last_analyzed_at: new Date().toISOString()
      });

    if (insertError) {
      console.error('Error storing content performance:', insertError);
    }

    // Store individual optimization suggestions
    for (const suggestion of optimizationSuggestions.slice(0, 8)) {
      if (suggestion.length > 50) {
        await supabase
          .from('ai_seo_suggestions')
          .insert({
            suggestion_type: 'content',
            title: suggestion.substring(0, 100),
            description: suggestion,
            implementation_notes: `Page: ${pageUrl}`,
            ai_confidence_score: 0.9,
            expected_impact: contentScore > 80 ? 'medium' : 'high',
            priority: contentScore < 70 ? 'high' : 'medium'
          });
      }
    }

    console.log('AI content optimization completed successfully');

    return new Response(JSON.stringify({
      success: true,
      content_score: contentScore,
      optimization_analysis: optimizationAnalysis,
      suggestions_count: optimizationSuggestions.length,
      page_analyzed: pageUrl,
      target_keywords: targetKeywords
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI content optimization:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      details: 'AI content optimization failed'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});