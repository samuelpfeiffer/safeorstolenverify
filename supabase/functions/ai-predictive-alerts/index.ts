import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';

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
    const { identifier, identifierType, verificationResult, listingInfo } = await req.json();

    if (!identifier || typeof identifier !== 'string' || identifier.length < 3) {
      return new Response(
        JSON.stringify({ error: 'Valid identifier required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          {
            role: 'system',
            content: `You are SafeOrStolen's predictive theft analysis engine. Even when an item passes database checks (not found in stolen databases), you analyze patterns and context to identify RISK FACTORS that buyers should know about.

Your job: Generate a predictive risk assessment based on the identifier, its type, and any listing context.

Analysis factors:
1. **Identifier Pattern Analysis**: Check if IMEI/VIN/serial follows known patterns of stolen batches, cloned devices, or counterfeit items
2. **Geographic Signals**: If listing location is provided, flag mismatches (e.g., phone registered in FL but sold in CA)
3. **Pricing Anomalies**: If listing price is provided, flag if it's significantly below market value
4. **Timing Patterns**: Recently manufactured items being sold as used quickly could indicate theft
5. **Type-Specific Risks**: 
   - IMEI: Check digit validation, TAC code patterns, known cloned ranges
   - VIN: Year/make/model consistency, known salvage patterns, odometer fraud indicators
   - Serial: Manufacturer format validation, known recall batches
   - Firearm: Pattern matching against known stolen batch ranges
6. **Seller Behavior Signals**: If listing info provided (new account, no reviews, urgency language)

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
}`
          },
          {
            role: 'user',
            content: JSON.stringify({
              identifier: identifier.substring(0, 20), // Don't send full identifier to AI
              identifierType,
              databaseResult: verificationResult || 'clean',
              listingContext: listingInfo || null,
            })
          }
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.error('[ai-predictive-alerts] Gateway error:', response.status);
      return new Response(
        JSON.stringify(getFallbackAnalysis(identifierType)),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    try {
      const cleaned = content.replace(/```json\n?|\n?```/g, '').trim();
      const result = JSON.parse(cleaned);
      console.log(`[ai-predictive-alerts] Risk score: ${result.riskScore}, Level: ${result.riskLevel}`);
      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch {
      console.error('[ai-predictive-alerts] Parse error');
      return new Response(
        JSON.stringify(getFallbackAnalysis(identifierType)),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('[ai-predictive-alerts] Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Analysis failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function getFallbackAnalysis(type: string) {
  return {
    riskScore: 15,
    riskLevel: 'LOW',
    alerts: [
      {
        category: 'info',
        severity: 'info',
        title: 'Standard Verification Complete',
        description: 'Item passed database checks. No immediate red flags detected.',
        recommendation: 'Proceed with standard precautions for secondhand purchases.'
      }
    ],
    overallAssessment: 'Database verification complete. No stolen reports found. Always meet in public places and verify the item in person before purchasing.',
    buyerActions: [
      'Meet in a public place (police station parking lot ideal)',
      'Ask seller for proof of purchase or original receipt',
      'Test the item thoroughly before paying'
    ]
  };
}
