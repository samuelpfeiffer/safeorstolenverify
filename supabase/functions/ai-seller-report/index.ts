import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { identifier, identifierType, verificationResult, itemDescription, sellerName } = await req.json();

    if (!identifier || !identifierType) {
      return new Response(
        JSON.stringify({ error: 'Identifier and type required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const masked = identifier.length > 8
      ? identifier.substring(0, 4) + '***' + identifier.substring(identifier.length - 4)
      : identifier.substring(0, 2) + '***';

    const content = await callClaude({
      system: `You are SafeOrStolen's professional report writer. Generate compelling, trustworthy verification reports that sellers can share with buyers.

The report should:
1. Sound professional and authoritative (like a legal document)
2. Clearly state the item was verified as NOT STOLEN
3. List the databases checked (FBI NCIC, GSMA, NICB, carrier blacklists, etc.)
4. Include the verification date and confidence level
5. Build buyer confidence
6. Include a call to action for the buyer to verify independently

Respond with JSON:
{
  "reportTitle": "Professional report headline",
  "summary": "2-3 sentence executive summary",
  "verificationDetails": {
    "status": "VERIFIED SAFE",
    "databasesChecked": ["list of databases"],
    "confidenceLevel": "percentage",
    "verificationDate": "current date"
  },
  "fullReport": "Full professionally written report (300-500 words, use markdown formatting)",
  "listingSnippet": "Short text seller can copy-paste into marketplace listing (2-3 sentences)",
  "buyerMessage": "Short message seller can send directly to interested buyers"
}`,
      messages: [{
        role: 'user',
        content: JSON.stringify({
          identifierType,
          maskedIdentifier: masked,
          result: verificationResult || 'clean',
          itemDescription: itemDescription || 'Not provided',
          sellerName: sellerName || 'Anonymous Seller',
          date: new Date().toISOString().split('T')[0],
        })
      }],
      temperature: 0.5,
      maxTokens: 2000,
    });

    const result = parseJsonResponse(content);
    if (result) {
      return new Response(JSON.stringify({ success: true, report: result }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Failed to generate report' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-seller-report] Error:', error);
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Report generation failed' }), {
      status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
