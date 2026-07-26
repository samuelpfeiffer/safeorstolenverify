import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { callClaude, parseJsonResponse } from '../_shared/anthropic.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';

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

    if (/^\d{15}$/.test(cleaned)) {
      return respond({ type: 'imei', confidence: 99, explanation: '15-digit number matches IMEI format', extractedValue: cleaned });
    }
    if (/^[A-HJ-NPR-Z0-9]{17}$/i.test(cleaned)) {
      return respond({ type: 'vin', confidence: 99, explanation: '17-character alphanumeric (no I/O/Q) matches VIN format', extractedValue: cleaned.toUpperCase() });
    }
    if (/^[A-Z0-9]{2,8}$/i.test(cleaned) && cleaned.length <= 8) {
      if (/^[0-9]{1}[A-Z]{3}[0-9]{3}$/i.test(cleaned) ||
          /^[A-Z]{3}[0-9]{4}$/i.test(cleaned) ||
          /^[A-Z]{2,3}[0-9]{2,4}$/i.test(cleaned) ||
          /^[0-9]{2,4}[A-Z]{2,3}$/i.test(cleaned)) {
        return respond({ type: 'plate', confidence: 92, explanation: 'Matches common US license plate format', extractedValue: cleaned.toUpperCase() });
      }
    }
    if (/^\d{14,16}$/.test(cleaned) && cleaned.length >= 14) {
      return respond({ type: 'imei', confidence: 90, explanation: `${cleaned.length}-digit number likely IMEI`, extractedValue: cleaned.substring(0, 15) });
    }

    // ── Step 2: AI detection for ambiguous inputs (rate-limited to prevent paid-API abuse) ──
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('cf-connecting-ip') || 'unknown';
    const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
    if (!rl.allowed) {
      return respond({ type: 'serial', confidence: 30, explanation: 'Rate limit reached — defaulting to serial', extractedValue: cleaned });
    }
    try {
      const content = await callClaude({
        system: `You identify what type of item identifier the user entered. Respond ONLY with valid JSON, no markdown.

Types:
- imei: 15-digit number for mobile phones
- vin: 17 alphanumeric characters for vehicles (no I, O, Q)
- plate: US license plate (2-8 alphanumeric chars)
- serial: Electronics/appliance serial number
- firearm: Firearm serial number
- bike: Bicycle serial number

JSON format:
{"type":"imei|vin|plate|serial|firearm|bike","confidence":0-100,"explanation":"brief reason","extractedValue":"cleaned identifier"}

If uncertain, use "serial" with low confidence.`,
        messages: [{ role: 'user', content: `Identify this: "${input}"` }],
        temperature: 0.1,
        maxTokens: 300,
      });

      const parsed = parseJsonResponse(content);
      if (parsed) {
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
      }
    } catch {
      // AI unavailable, fall through
    }

    return respond({ type: 'serial', confidence: 40, explanation: 'Could not determine type – defaulting to serial number', extractedValue: cleaned });
  } catch (error) {
    console.error('[ai-detect-identifier] Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Detection failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function respond(result: { type: string; confidence: number; explanation: string; extractedValue: string }) {
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' }
  });
}
