import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerifyRequest {
  serialNumber: string;
  itemType: string;
  category: string;
  dbResults?: any[];
  metadata?: Record<string, any>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const startTime = Date.now();

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      console.error('[AI Verify Item] LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'AI service not configured',
          fallback: getFallbackAnalysis({})
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { serialNumber, itemType, category, dbResults, metadata } = await req.json() as VerifyRequest;

    if (!serialNumber) {
      return new Response(
        JSON.stringify({ success: false, error: 'Serial number is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Verify Item] Analyzing ${category} ${itemType}: ${serialNumber}`);

    const systemPrompt = `You are SafeOrStolen's AI verification expert. You analyze items (electronics, vehicles, bikes, etc.) to assess theft risk.

Your job is to:
1. Analyze the identifier format and validity
2. Consider database lookup results  
3. Identify fraud indicators and red flags
4. Provide actionable recommendations
5. Generate a clear narrative summary

Be helpful but conservative - when in doubt, recommend additional verification.
Respond with valid JSON only.`;

    const userPrompt = `Analyze this item for potential theft risk:

Item Type: ${itemType}
Category: ${category}
Identifier: ${serialNumber}
Database Results: ${JSON.stringify(dbResults || [], null, 2)}
Additional Metadata: ${JSON.stringify(metadata || {}, null, 2)}

Analyze and respond with this exact JSON structure:
{
  "riskScore": <number 0-100, where 100 = definitely stolen>,
  "confidence": <number 0-100>,
  "fraudIndicators": [<array of specific red flags found>],
  "recommendations": [<array of actionable recommendations>],
  "narrativeSummary": "<clear summary for the user>",
  "additionalChecks": [<array of suggested verification steps>]
}

Consider:
- Database match status (stolen/lost/clear)
- Serial number format validity
- Category-specific theft patterns
- Seller/location red flags if provided`;

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
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error('[AI Verify Item] Rate limit exceeded');
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Rate limit exceeded, please try again later',
            fallback: getFallbackAnalysis({ category, itemType })
          }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        console.error('[AI Verify Item] Payment required');
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'AI service quota exceeded',
            fallback: getFallbackAnalysis({ category, itemType })
          }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      const errorText = await response.text();
      console.error(`[AI Verify Item] API error: ${response.status} - ${errorText}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'AI analysis failed',
          fallback: getFallbackAnalysis({ category, itemType })
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response content from AI');
    }

    // Extract JSON from response (handle markdown code blocks)
    let jsonContent = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonContent = jsonMatch[1].trim();
    }

    let analysis;
    try {
      analysis = JSON.parse(jsonContent);
    } catch (parseError) {
      console.error('[AI Verify Item] Failed to parse AI response:', content);
      return new Response(
        JSON.stringify({ 
          success: true, 
          analysis: getFallbackAnalysis({ category, itemType }),
          responseTime: Date.now() - startTime,
          note: 'Fallback analysis due to parsing error'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Normalize and validate the analysis
    const normalizedAnalysis = {
      riskScore: Math.min(100, Math.max(0, Number(analysis.riskScore) || 25)),
      confidence: Math.min(100, Math.max(0, Number(analysis.confidence) || 60)),
      fraudIndicators: Array.isArray(analysis.fraudIndicators) ? analysis.fraudIndicators : [],
      recommendations: Array.isArray(analysis.recommendations) ? analysis.recommendations : ['Verify seller identity', 'Request documentation'],
      narrativeSummary: analysis.narrativeSummary || `Analysis complete for this ${category}.`,
      additionalChecks: Array.isArray(analysis.additionalChecks) ? analysis.additionalChecks : ['Check item condition', 'Verify ownership']
    };

    console.log(`[AI Verify Item] Complete in ${Date.now() - startTime}ms - Risk: ${normalizedAnalysis.riskScore}%`);

    return new Response(
      JSON.stringify({
        success: true,
        analysis: normalizedAnalysis,
        responseTime: Date.now() - startTime
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Verify Item] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        fallback: getFallbackAnalysis({})
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function getFallbackAnalysis(data: any) {
  return {
    riskScore: 25,
    confidence: 50,
    fraudIndicators: ['Unable to perform full AI analysis'],
    recommendations: [
      'Verify seller identity and reputation',
      'Request proof of purchase documentation',
      'Meet in a public, safe location',
      'Check item condition thoroughly'
    ],
    narrativeSummary: `Basic verification completed for this ${data.category || 'item'}. AI analysis was limited - please use standard precautions when purchasing.`,
    additionalChecks: [
      'Verify serial number with manufacturer',
      'Check item against local police records',
      'Research market pricing for comparison'
    ]
  };
}
