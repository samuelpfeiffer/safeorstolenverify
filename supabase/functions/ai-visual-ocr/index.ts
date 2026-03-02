import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

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
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an OCR expert for SafeOrStolen. Extract identifiers from photos of VIN plates, IMEI stickers, serial number labels, phone settings screens, or any item with a visible identifier.

Your job: Find and extract the exact identifier text (IMEI, VIN, serial number, license plate).

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
      "location": "where in image (e.g., 'VIN plate on dashboard', 'sticker on back')"
    }
  ],
  "deviceInfo": "optional: device brand/model if visible",
  "tip": "helpful context about what was found"
}

If nothing found:
{
  "found": false,
  "identifiers": [],
  "tip": "Suggestion for better photo (e.g., 'Try photographing the VIN plate on the dashboard')"
}`
          },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Extract any IMEI, VIN, serial number, or license plate from this image.'
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`
                }
              }
            ]
          }
        ],
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errText = await response.text();
      console.error('[ai-visual-ocr] Gateway error:', response.status, errText);
      return new Response(
        JSON.stringify({ error: 'AI service temporarily unavailable' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    try {
      const cleaned = content.replace(/```json\n?|\n?```/g, '').trim();
      const result = JSON.parse(cleaned);
      console.log(`[ai-visual-ocr] Found ${result.identifiers?.length || 0} identifiers`);
      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch {
      console.error('[ai-visual-ocr] Failed to parse AI response:', content);
      return new Response(
        JSON.stringify({ found: false, identifiers: [], tip: 'Could not process image. Try a clearer photo.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('[ai-visual-ocr] Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'OCR failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
