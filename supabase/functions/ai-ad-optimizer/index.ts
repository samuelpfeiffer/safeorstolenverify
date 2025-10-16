import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { adType, targetAudience, currentCopy, performanceData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('AI Ad Optimizer running for ad type:', adType);

    const prompt = `You are an expert digital advertising strategist specialized in creating high-converting ad copy. 
    Optimize the following ${adType} ad for ${targetAudience}:
    
    Current ad copy:
    ${currentCopy}
    
    Performance data:
    ${JSON.stringify(performanceData)}
    
    Provide 3 variations of optimized ad copy. Each variation should be distinct and designed to appeal to different segments within the target audience.
    
    Format your response as a JSON object with a single key "variations" that contains an array of the 3 optimized ad copy variations.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are an expert digital advertising strategist.' },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      return createErrorResponse('AI optimization failed', 500, corsHeaders);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      return createErrorResponse('No response from AI', 500, corsHeaders);
    }

    return new Response(JSON.stringify({ variations: JSON.parse(content).variations }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-ad-optimizer:', error);
    return createErrorResponse(error instanceof Error ? error.message : 'Unknown error', 500, corsHeaders);
  }
});
