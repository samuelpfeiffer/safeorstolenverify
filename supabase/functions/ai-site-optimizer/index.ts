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
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { action, pageData } = await req.json();
    
    console.log('[AI-OPTIMIZER] Processing:', action);

    let systemPrompt = `You are an expert web optimization AI for SafeOrStolen.com, a platform that verifies if items are stolen. 
    Analyze the provided data and give specific, actionable recommendations to improve:
    - SEO and search visibility
    - User experience and conversion rates
    - Performance and load times
    - Content quality and engagement
    - Security and trust signals
    
    Be concise and prioritize high-impact changes.`;

    let userPrompt = '';
    
    switch (action) {
      case 'analyze-page':
        userPrompt = `Analyze this page data and provide optimization recommendations:
        ${JSON.stringify(pageData, null, 2)}
        
        Focus on:
        1. SEO improvements (meta tags, keywords, structure)
        2. UX improvements (layout, navigation, CTAs)
        3. Performance issues
        4. Content quality`;
        break;
        
      case 'generate-seo':
        userPrompt = `Generate optimized SEO elements for this page:
        ${JSON.stringify(pageData, null, 2)}
        
        Provide:
        1. Meta title (under 60 chars)
        2. Meta description (under 160 chars)
        3. 5-7 relevant keywords
        4. H1 heading
        5. Internal linking suggestions`;
        break;
        
      case 'improve-content':
        userPrompt = `Improve this content for better engagement and conversions:
        ${JSON.stringify(pageData, null, 2)}
        
        Suggest:
        1. Better headlines
        2. More compelling copy
        3. Trust-building elements
        4. Clear CTAs`;
        break;
        
      case 'fix-performance':
        userPrompt = `Identify performance optimization opportunities:
        ${JSON.stringify(pageData, null, 2)}
        
        Check for:
        1. Large images or assets
        2. Render-blocking resources
        3. Inefficient components
        4. Bundle size issues`;
        break;
        
      default:
        userPrompt = `Provide general optimization recommendations for SafeOrStolen.com`;
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('[AI-OPTIMIZER] API Error:', error);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    // Store the analysis
    const { error: dbError } = await supabase
      .from('ai_analysis_sessions')
      .insert({
        analysis_type: action,
        query: userPrompt,
        result: analysis,
        status: 'completed',
        priority: 'high',
        confidence: 0.85
      });

    if (dbError) {
      console.error('[AI-OPTIMIZER] DB Error:', dbError);
    }

    console.log('[AI-OPTIMIZER] Analysis completed');

    return new Response(
      JSON.stringify({ 
        success: true, 
        analysis,
        action
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('[AI-OPTIMIZER] Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});