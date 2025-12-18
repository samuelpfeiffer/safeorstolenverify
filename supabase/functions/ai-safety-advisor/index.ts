import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalysisRequest {
  identifier: string;
  itemType: string;
  requestType?: string;
  additionalContext?: string;
}

interface AnalysisResponse {
  success: boolean;
  analysis: {
    risk_level: 'low' | 'medium' | 'high' | 'critical';
    confidence: number;
    reasoning: string[];
    recommendation: string;
    summary: string;
    red_flags: string[];
    verification_tips: string[];
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const startTime = Date.now();

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      console.error('[AI Safety Advisor] LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({
          success: false,
          analysis: {
            risk_level: 'medium',
            confidence: 0,
            reasoning: ['AI analysis service not configured'],
            recommendation: 'Manual verification required',
            summary: 'Unable to perform AI analysis',
            red_flags: [],
            verification_tips: ['Contact local law enforcement', 'Request proof of purchase']
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { identifier, itemType, additionalContext } = await req.json() as AnalysisRequest;

    if (!identifier) {
      return new Response(
        JSON.stringify({ success: false, error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Safety Advisor] Analyzing ${itemType}: ${identifier}`);

    const systemPrompt = `You are SafeOrStolen's AI Safety Advisor, an expert in identifying potentially stolen goods. 
Your job is to analyze identifiers (serial numbers, IMEI, VIN, etc.) and provide risk assessment.

You should:
1. Analyze the identifier format for validity
2. Identify any red flags based on the identifier pattern
3. Provide practical verification recommendations
4. Give a risk level assessment (low/medium/high/critical)

Be helpful but conservative - when in doubt, recommend additional verification.
Always respond with valid JSON matching the expected format.`;

    const userPrompt = `Analyze this ${itemType || 'item'} identifier for potential theft risk:

Identifier: ${identifier}
${additionalContext ? `Additional context: ${additionalContext}` : ''}

Provide your analysis in this JSON format:
{
  "risk_level": "low" | "medium" | "high" | "critical",
  "confidence": 0-100,
  "reasoning": ["reason1", "reason2"],
  "recommendation": "Your recommendation",
  "summary": "Brief summary",
  "red_flags": ["flag1", "flag2"] or [],
  "verification_tips": ["tip1", "tip2"]
}`;

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
        console.error('[AI Safety Advisor] Rate limit exceeded');
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Rate limit exceeded',
            analysis: getFallbackAnalysis()
          }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        console.error('[AI Safety Advisor] Payment required');
        return new Response(
          JSON.stringify({
            success: false,
            error: 'AI service quota exceeded',
            analysis: getFallbackAnalysis()
          }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      const errorText = await response.text();
      console.error(`[AI Safety Advisor] API error: ${response.status} - ${errorText}`);
      
      return new Response(
        JSON.stringify({
          success: true,
          analysis: getFallbackAnalysis(),
          responseTime: Date.now() - startTime
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response content from AI');
    }

    // Extract JSON from response
    let jsonContent = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonContent = jsonMatch[1].trim();
    }

    let analysis;
    try {
      analysis = JSON.parse(jsonContent);
    } catch (parseError) {
      console.error('[AI Safety Advisor] Failed to parse AI response:', content);
      return new Response(
        JSON.stringify({
          success: true,
          analysis: getFallbackAnalysis(),
          responseTime: Date.now() - startTime
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate and normalize the analysis
    const normalizedAnalysis = {
      risk_level: ['low', 'medium', 'high', 'critical'].includes(analysis.risk_level) 
        ? analysis.risk_level 
        : 'medium',
      confidence: Math.min(100, Math.max(0, Number(analysis.confidence) || 60)),
      reasoning: Array.isArray(analysis.reasoning) ? analysis.reasoning : [analysis.reasoning || 'Analysis complete'],
      recommendation: analysis.recommendation || 'Proceed with standard verification',
      summary: analysis.summary || `${itemType} analysis complete`,
      red_flags: Array.isArray(analysis.red_flags) ? analysis.red_flags : [],
      verification_tips: Array.isArray(analysis.verification_tips) ? analysis.verification_tips : [
        'Verify seller identity',
        'Request documentation',
        'Check item condition carefully'
      ]
    };

    console.log(`[AI Safety Advisor] Complete in ${Date.now() - startTime}ms - Risk: ${normalizedAnalysis.risk_level}`);

    return new Response(
      JSON.stringify({
        success: true,
        analysis: normalizedAnalysis,
        responseTime: Date.now() - startTime
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Safety Advisor] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        analysis: getFallbackAnalysis(),
        responseTime: Date.now() - startTime
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function getFallbackAnalysis() {
  return {
    risk_level: 'medium' as const,
    confidence: 50,
    reasoning: ['AI analysis temporarily unavailable', 'Fallback assessment provided'],
    recommendation: 'Proceed with caution. Verify item history independently.',
    summary: 'Unable to complete full AI analysis. Manual verification recommended.',
    red_flags: [],
    verification_tips: [
      'Request proof of purchase from seller',
      'Check item condition matches description',
      'Verify seller identity and history',
      'Consider using escrow service for high-value items'
    ]
  };
}
