import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

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

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Mask identifier for privacy (show first 4 and last 4)
    const masked = identifier.length > 8
      ? identifier.substring(0, 4) + '***' + identifier.substring(identifier.length - 4)
      : identifier.substring(0, 2) + '***';

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
            content: `You are SafeOrStolen's professional report writer. Generate compelling, trustworthy verification reports that sellers can share with buyers.

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
}`
          },
          {
            role: 'user',
            content: JSON.stringify({
              identifierType,
              maskedIdentifier: masked,
              result: verificationResult || 'clean',
              itemDescription: itemDescription || 'Not provided',
              sellerName: sellerName || 'Anonymous Seller',
              date: new Date().toISOString().split('T')[0],
            })
          }
        ],
        temperature: 0.5,
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
      console.error('[ai-seller-report] Gateway error:', response.status);
      throw new Error('AI service error');
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    try {
      const cleaned = content.replace(/```json\n?|\n?```/g, '').trim();
      const result = JSON.parse(cleaned);
      return new Response(
        JSON.stringify({ success: true, report: result }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch {
      return new Response(
        JSON.stringify({ error: 'Failed to generate report' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('[ai-seller-report] Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Report generation failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
