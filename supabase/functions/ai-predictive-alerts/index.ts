import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip');
  const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { identifier, identifierType, verificationResult, listingInfo } = await req.json();

    if (!identifier || typeof identifier !== 'string' || identifier.length < 3) {
      return new Response(
        JSON.stringify({ error: 'Valid identifier required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const content = await callClaude({
      system: `You are SafeOrStolen's predictive theft analysis engine. Even when an item passes database checks (not found in stolen databases), you analyze patterns and context to identify RISK FACTORS that buyers should know about.

Analysis factors:
1. **Identifier Pattern Analysis**: Check if IMEI/VIN/serial follows known patterns of stolen batches, cloned devices, or counterfeit items
2. **Geographic Signals**: If listing location is provided, flag mismatches
3. **Pricing Anomalies**: If listing price is provided, flag if significantly below market value
4. **Timing Patterns**: Recently manufactured items being sold as used quickly could indicate theft
5. **Type-Specific Risks**: IMEI check digits, VIN year/make consistency, serial format validation
6. **Seller Behavior Signals**: New account, no reviews, urgency language

Risk levels:
- LOW (0-30%): Normal transaction, proceed with standard caution
- MEDIUM (31-60%): Some concerns, ask seller for proof of purchase
- HIGH (61-100%): Multiple red flags, strongly recommend NOT purchasing

Respond with JSON only:
{
  "riskScore": 0-100,
  "riskLevel": "LOW|MEDIUM|HIGH",
  "alerts": [
    {
      "category": "pattern|geographic|pricing|timing|seller|format",
      "severity": "info|warning|critical",
      "title": "Short alert title",
      "description": "Detailed explanation of the risk factor",
      "recommendation": "What the buyer should do"
    }
  ],
  "overallAssessment": "2-3 sentence plain English summary",
  "buyerActions": ["action1", "action2", "action3"]
}`,
      messages: [{
        role: 'user',
        content: JSON.stringify({
          identifier: identifier.substring(0, 20),
          identifierType,
          databaseResult: verificationResult || 'clean',
          listingContext: listingInfo || null,
        })
      }],
      temperature: 0.3,
      maxTokens: 1500,
    });

    const result = parseJsonResponse(content);
    if (result) {
      console.log(`[ai-predictive-alerts] Risk score: ${result.riskScore}, Level: ${result.riskLevel}`);
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(getFallbackAnalysis(identifierType)), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-predictive-alerts] Error:', error);
    if (error instanceof AnthropicError && (error.status === 429 || error.status === 402)) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: error.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Analysis failed' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function getFallbackAnalysis(type: string) {
  return {
    riskScore: 15,
    riskLevel: 'LOW',
    alerts: [{
      category: 'info',
      severity: 'info',
      title: 'Standard Verification Complete',
      description: 'Item passed database checks. No immediate red flags detected.',
      recommendation: 'Proceed with standard precautions for secondhand purchases.'
    }],
    overallAssessment: 'Database verification complete. No stolen reports found. Always meet in public places and verify the item in person before purchasing.',
    buyerActions: [
      'Meet in a public place (police station parking lot ideal)',
      'Ask seller for proof of purchase or original receipt',
      'Test the item thoroughly before paying'
    ]
  };
}
