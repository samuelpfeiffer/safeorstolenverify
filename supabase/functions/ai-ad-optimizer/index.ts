import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { adType, targetAudience, currentCopy, performanceData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('AI Ad Optimizer running for ad type:', adType);

    // Use AI to optimize ad copy and strategy
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a direct response copywriting expert specializing in conversion optimization.
            Create high-converting ad copy that triggers urgency, fear of loss, and immediate action.
            Focus on: stolen goods protection, legal risk, financial loss prevention, peace of mind.`
          },
          {
            role: 'user',
            content: `Ad Type: ${adType}
            Target Audience: ${targetAudience}
            Current Copy: ${currentCopy}
            Performance Data: ${JSON.stringify(performanceData || {})}
            
            Generate 5 variations of high-converting ad copy:
            1. Urgency-focused (fear of missing out)
            2. Risk-focused (legal consequences)
            3. Value-focused (save money)
            4. Social proof-focused (trust signals)
            5. Benefit-focused (peace of mind)
            
            For each variation provide:
            - Headline (10 words max)
            - Body copy (50 words max)
            - CTA button text (3 words max)
            - Estimated conversion rate improvement
            
            Return as JSON array.`
          }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('AI API Error:', error);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const optimizedAds = data.choices[0].message.content;

    // Parse AI response
    let adVariations;
    try {
      adVariations = JSON.parse(optimizedAds);
    } catch {
      adVariations = [{
        headline: 'Generated content parsing error',
        body: optimizedAds,
        cta: 'Verify Now',
        estimatedImprovement: '0%'
      }];
    }

    console.log('Ad optimization completed');

    return new Response(JSON.stringify({ 
      success: true,
      adVariations,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-ad-optimizer:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
