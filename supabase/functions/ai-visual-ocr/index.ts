import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip');
  const rl = checkRateLimit(clientIp, { maxRequests: 5, windowMs: 60_000 });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64 || typeof imageBase64 !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Base64 image data required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (imageBase64.length > 14_000_000) {
      return new Response(
        JSON.stringify({ error: 'Image too large. Maximum 10MB.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    if (!ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Claude supports vision natively via the messages API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250514',
        max_tokens: 1500,
        temperature: 0.1,
        system: `You are an OCR expert for SafeOrStolen. Extract identifiers from photos of VIN plates, IMEI stickers, serial number labels, phone settings screens, or any item with a visible identifier.

Rules:
1. Extract the EXACT text — do not guess or fabricate characters
2. Clean up formatting (remove spaces, dashes) for the extractedValue
3. Identify the type: imei, vin, plate, serial, firearm, bike
4. If multiple identifiers are visible, return all of them
5. If no identifier is visible, say so clearly

Respond with JSON only, no markdown:
{
  "found": true,
  "identifiers": [
    {
      "type": "imei|vin|plate|serial|firearm|bike",
      "rawText": "exact text as seen in image",
      "extractedValue": "cleaned value (no spaces/dashes)",
      "confidence": 0-100,
      "location": "where in image"
    }
  ],
  "deviceInfo": "optional: device brand/model if visible",
  "tip": "helpful context about what was found"
}

If nothing found:
{
  "found": false,
  "identifiers": [],
  "tip": "Suggestion for better photo"
}`,
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: 'Extract any IMEI, VIN, serial number, or license plate from this image.' },
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageBase64,
              }
            }
          ]
        }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[ai-visual-ocr] API error:', response.status, errText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ error: 'AI service temporarily unavailable' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '';

    const result = parseJsonResponse(content);
    if (result) {
      console.log(`[ai-visual-ocr] Found ${result.identifiers?.length || 0} identifiers`);
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({ found: false, identifiers: [], tip: 'Could not process image. Try a clearer photo.' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[ai-visual-ocr] Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'OCR failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
