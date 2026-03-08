import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

interface VerifyRequest {
  serialNumber: string;
  itemType: string;
  category: string;
  dbResults?: any[];
  metadata?: Record<string, any>;
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));
  const startTime = Date.now();

  try {
    const { serialNumber, itemType, category, dbResults, metadata } = await req.json() as VerifyRequest;

    if (!serialNumber) {
      return new Response(
        JSON.stringify({ success: false, error: 'Serial number is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Verify Item] Analyzing ${category} ${itemType}: ${serialNumber}`);

    const content = await callClaude({
      system: `You are SafeOrStolen's AI verification expert. You analyze items (electronics, vehicles, bikes, etc.) to assess theft risk.

Your job is to:
1. Analyze the identifier format and validity
2. Consider database lookup results  
3. Identify fraud indicators and red flags
4. Provide actionable recommendations
5. Generate a clear narrative summary

Be helpful but conservative - when in doubt, recommend additional verification.
Respond with valid JSON only.`,
      messages: [{
        role: 'user',
        content: `Analyze this item for potential theft risk:

Item Type: ${itemType}
Category: ${category}
Identifier: ${serialNumber}
Database Results: ${JSON.stringify(dbResults || [], null, 2)}
Additional Metadata: ${JSON.stringify(metadata || {}, null, 2)}

Respond with this JSON structure:
{
  "riskScore": <number 0-100>,
  "confidence": <number 0-100>,
  "fraudIndicators": [<array of red flags>],
  "recommendations": [<array of actionable recommendations>],
  "narrativeSummary": "<clear summary>",
  "additionalChecks": [<array of suggested verification steps>]
}`
      }],
      maxTokens: 1500,
    });

    let analysis = parseJsonResponse(content);

    if (!analysis) {
      analysis = getFallbackAnalysis({ category, itemType });
    } else {
      analysis = {
        riskScore: Math.min(100, Math.max(0, Number(analysis.riskScore) || 25)),
        confidence: Math.min(100, Math.max(0, Number(analysis.confidence) || 60)),
        fraudIndicators: Array.isArray(analysis.fraudIndicators) ? analysis.fraudIndicators : [],
        recommendations: Array.isArray(analysis.recommendations) ? analysis.recommendations : ['Verify seller identity', 'Request documentation'],
        narrativeSummary: analysis.narrativeSummary || `Analysis complete for this ${category}.`,
        additionalChecks: Array.isArray(analysis.additionalChecks) ? analysis.additionalChecks : ['Check item condition', 'Verify ownership']
      };
    }

    console.log(`[AI Verify Item] Complete in ${Date.now() - startTime}ms - Risk: ${analysis.riskScore}%`);

    return new Response(
      JSON.stringify({ success: true, analysis, responseTime: Date.now() - startTime }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Verify Item] Error:', error);
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error', fallback: getFallbackAnalysis({}) }),
      { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function getFallbackAnalysis(data: any) {
  return {
    riskScore: 25,
    confidence: 50,
    fraudIndicators: ['Unable to perform full AI analysis'],
    recommendations: ['Verify seller identity and reputation', 'Request proof of purchase documentation', 'Meet in a public, safe location', 'Check item condition thoroughly'],
    narrativeSummary: `Basic verification completed for this ${data.category || 'item'}. AI analysis was limited - please use standard precautions when purchasing.`,
    additionalChecks: ['Verify serial number with manufacturer', 'Check item against local police records', 'Research market pricing for comparison']
  };
}
