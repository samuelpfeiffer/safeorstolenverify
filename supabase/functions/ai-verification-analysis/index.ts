import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Rate limit: 10 requests/min per IP
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip');
  const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { identifier, itemType, verificationResult, sources } = await req.json();

    const systemPrompt = `You are SafeOrStolen's AI Risk Analyst — the most advanced stolen-item verification AI in the world. You analyze verification results and provide expert risk assessments.

Your job: Take raw verification data and produce a clear, actionable risk analysis that helps buyers make safe purchasing decisions.

ALWAYS include:
1. A risk verdict: "SAFE TO BUY", "PROCEED WITH CAUTION", or "DO NOT BUY"
2. A confidence percentage (0-100%)
3. A plain-English explanation of what the results mean
4. Specific red flags or green flags found
5. Concrete next steps the buyer should take
6. A fraud risk score (0-100)

Be conversational but authoritative. Reference specific databases checked. Mention SafeOrStolen's 100+ database coverage as a trust signal.

Format your response as JSON with this exact structure:
{
  "verdict": "SAFE TO BUY" | "PROCEED WITH CAUTION" | "DO NOT BUY",
  "confidenceScore": number,
  "fraudRiskScore": number,
  "summary": "2-3 sentence plain English summary",
  "explanation": "Detailed paragraph explaining results",
  "greenFlags": ["array of positive indicators"],
  "redFlags": ["array of concerning indicators"],
  "nextSteps": ["array of recommended actions"],
  "buyingAdvice": "Specific advice for this purchase scenario",
  "databasesAnalyzed": number,
  "riskFactors": [{"factor": "name", "severity": "low|medium|high", "detail": "explanation"}]
}`;

    const userPrompt = `Analyze this verification result:

**Identifier:** ${identifier}
**Item Type:** ${itemType}
**Verification Status:** ${verificationResult?.status || 'unknown'}
**Sources Checked:** ${JSON.stringify(sources || [])}
**Raw Result Data:** ${JSON.stringify(verificationResult || {})}

Provide your expert risk analysis.`;

    const content = await callClaude({
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
      temperature: 0.3,
      maxTokens: 2048,
    });

    let analysis = parseJsonResponse(content);

    if (!analysis) {
      analysis = {
        verdict: "PROCEED WITH CAUTION",
        confidenceScore: 60,
        fraudRiskScore: 30,
        summary: content.slice(0, 200),
        explanation: content,
        greenFlags: [],
        redFlags: ["AI analysis returned unstructured response"],
        nextSteps: ["Verify with manufacturer", "Ask for proof of purchase"],
        buyingAdvice: "Exercise standard caution when purchasing.",
        databasesAnalyzed: sources?.length || 5,
        riskFactors: [],
      };
    }

    return new Response(JSON.stringify({ success: true, analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('AI verification analysis error:', error);
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Analysis failed',
    }), {
      status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
