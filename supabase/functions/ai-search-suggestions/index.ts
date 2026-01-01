import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    if (!ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ suggestions: [], error: 'AI service not configured' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { query, itemType } = await req.json();

    if (!query || query.length < 2) {
      return new Response(
        JSON.stringify({ suggestions: [] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Search Suggestions] Query: "${query}", Type: ${itemType || 'auto'}`);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250514',
        max_tokens: 500,
        system: `You are SafeOrStolen's search assistant. Analyze user input and provide:
1. Detected identifier type (IMEI, VIN, serial number, etc.)
2. Format validation feedback
3. Smart suggestions to complete or correct the input
4. Common formats for the detected type

Respond with JSON only:
{
  "detectedType": "IMEI" | "VIN" | "serial" | "unknown",
  "isValid": boolean,
  "formatFeedback": "string",
  "suggestions": ["suggestion1", "suggestion2"],
  "expectedFormat": "description of expected format"
}`,
        messages: [
          {
            role: 'user',
            content: `Analyze this identifier input: "${query}"${itemType ? ` (expected type: ${itemType})` : ''}`
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ suggestions: [], error: 'Rate limit exceeded, please try again later' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '{}';

    let result;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { suggestions: [] };
    } catch {
      result = { suggestions: [], detectedType: 'unknown' };
    }

    console.log(`[AI Search Suggestions] Detected: ${result.detectedType}, Valid: ${result.isValid}`);

    return new Response(
      JSON.stringify({
        success: true,
        ...result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Search Suggestions] Error:', error);
    return new Response(
      JSON.stringify({ suggestions: [], error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
