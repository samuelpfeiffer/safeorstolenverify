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
        JSON.stringify({ success: false, error: 'AI service not configured' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { imageBase64, imageUrl, description } = await req.json();

    if (!imageBase64 && !imageUrl && !description) {
      return new Response(
        JSON.stringify({ success: false, error: 'Image or description required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('[AI Item Identification] Processing image/description');

    const messageContent: any[] = [];

    if (imageBase64 || imageUrl) {
      messageContent.push({
        type: 'text',
        text: description 
          ? `Identify this item. Additional context: ${description}`
          : 'Identify this item and extract any visible identifiers (serial numbers, IMEI, VIN).'
      });
      
      if (imageBase64) {
        messageContent.push({
          type: 'image',
          source: {
            type: 'base64',
            media_type: 'image/jpeg',
            data: imageBase64
          }
        });
      } else if (imageUrl) {
        messageContent.push({
          type: 'image',
          source: {
            type: 'url',
            url: imageUrl
          }
        });
      }
    } else {
      messageContent.push({
        type: 'text',
        text: `Based on this description, identify the item type and suggest verification steps: "${description}"`
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250514',
        max_tokens: 1000,
        system: `You are SafeOrStolen's item identification expert. Analyze images or descriptions to identify:
1. Item type (phone, laptop, vehicle, bicycle, firearm, jewelry, etc.)
2. Brand and model if visible
3. Any visible serial numbers, IMEI, or VIN
4. Estimated value range
5. Key identifying features

Respond with JSON only:
{
  "itemType": "category",
  "brand": "brand name or unknown",
  "model": "model name or unknown",
  "identifiers": {
    "serialNumber": "if visible",
    "imei": "if visible",
    "vin": "if visible"
  },
  "estimatedValue": "$X - $Y",
  "features": ["feature1", "feature2"],
  "confidence": 0-100,
  "verificationTips": ["tip1", "tip2"]
}`,
        messages: [
          {
            role: 'user',
            content: messageContent
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, error: 'Rate limit exceeded' }),
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
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
    } catch {
      result = { itemType: 'unknown', confidence: 0 };
    }

    console.log(`[AI Item Identification] Identified: ${result.itemType}, Confidence: ${result.confidence}%`);

    return new Response(
      JSON.stringify({
        success: true,
        identification: result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Item Identification] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
