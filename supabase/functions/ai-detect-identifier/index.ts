import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { input } = await req.json();

    if (!input || typeof input !== 'string' || input.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: 'Input too short' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── Step 1: Fast regex-based detection (no AI cost) ──
    const cleaned = input.trim().replace(/[\s\-]/g, '');

    // IMEI: exactly 15 digits
    if (/^\d{15}$/.test(cleaned)) {
      return respond({ type: 'imei', confidence: 99, explanation: '15-digit number matches IMEI format', extractedValue: cleaned });
    }

    // VIN: exactly 17 alphanumeric, no I/O/Q
    if (/^[A-HJ-NPR-Z0-9]{17}$/i.test(cleaned)) {
      return respond({ type: 'vin', confidence: 99, explanation: '17-character alphanumeric (no I/O/Q) matches VIN format', extractedValue: cleaned.toUpperCase() });
    }

    // License plate: 2-8 alphanumeric (after stripping spaces/dashes)
    if (/^[A-Z0-9]{2,8}$/i.test(cleaned) && cleaned.length <= 8) {
      // Could be plate or short serial – need AI to disambiguate
      // But if it looks like common US plate formats
      if (/^[0-9]{1}[A-Z]{3}[0-9]{3}$/i.test(cleaned) || // 1ABC234
          /^[A-Z]{3}[0-9]{4}$/i.test(cleaned) ||           // ABC1234
          /^[A-Z]{2,3}[0-9]{2,4}$/i.test(cleaned) ||       // AB1234
          /^[0-9]{2,4}[A-Z]{2,3}$/i.test(cleaned)) {       // 1234AB
        return respond({ type: 'plate', confidence: 92, explanation: 'Matches common US license plate format', extractedValue: cleaned.toUpperCase() });
      }
    }

    // IMEI with extra digit (16 digits) – some phones show check digit
    if (/^\d{14,16}$/.test(cleaned) && cleaned.length >= 14) {
      return respond({ type: 'imei', confidence: 90, explanation: `${cleaned.length}-digit number likely IMEI`, extractedValue: cleaned.substring(0, 15) });
    }

    // ── Step 2: AI detection for ambiguous inputs ──
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      // Fallback: return serial as default
      return respond({ type: 'serial', confidence: 50, explanation: 'Could not determine type – defaulting to serial number', extractedValue: cleaned });
    }

    const systemPrompt = `You identify what type of item identifier the user entered. Respond ONLY with valid JSON, no markdown.

Types:
- imei: 15-digit number for mobile phones (may have spaces/dashes)
- vin: 17 alphanumeric characters for vehicles (no I, O, Q)
- plate: US license plate (2-8 alphanumeric chars)
- serial: Electronics/appliance serial number (various formats)
- firearm: Firearm serial number (various formats, often contains manufacturer prefixes)
- bike: Bicycle serial number (typically stamped under bottom bracket, 6-12 chars)

JSON format:
{"type":"imei|vin|plate|serial|firearm|bike","confidence":0-100,"explanation":"brief reason","extractedValue":"cleaned identifier"}

If uncertain, use "serial" with low confidence.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-lite',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Identify this: "${input}"` }
        ],
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      console.error('AI gateway error:', response.status);
      // Fallback
      return respond({ type: 'serial', confidence: 40, explanation: 'AI unavailable – defaulting to serial number', extractedValue: cleaned });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    try {
      const cleanedContent = content.replace(/```json\n?|\n?```/g, '').trim();
      const parsed = JSON.parse(cleanedContent);

      // Validate result
      const validTypes = ['imei', 'vin', 'plate', 'serial', 'firearm', 'bike'];
      if (!validTypes.includes(parsed.type)) {
        parsed.type = 'serial';
        parsed.confidence = Math.min(parsed.confidence || 50, 50);
      }

      return respond({
        type: parsed.type,
        confidence: Math.min(Math.max(parsed.confidence || 50, 0), 100),
        explanation: parsed.explanation || 'AI-detected identifier type',
        extractedValue: parsed.extractedValue || cleaned,
      });
    } catch {
      return respond({ type: 'serial', confidence: 40, explanation: 'Could not parse AI response – defaulting to serial number', extractedValue: cleaned });
    }
  } catch (error) {
    console.error('[ai-detect-identifier] Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Detection failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function respond(result: { type: string; confidence: number; explanation: string; extractedValue: string }) {
  return new Response(
    JSON.stringify(result),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}
