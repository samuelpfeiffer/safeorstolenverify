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
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
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

    const messages: any[] = [
      {
        role: 'system',
        content: `You are SafeOrStolen's item identification expert. Analyze images or descriptions to identify:
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
}`
      }
    ];

    if (imageBase64 || imageUrl) {
      messages.push({
        role: 'user',
        content: [
          {
            type: 'text',
            text: description 
              ? `Identify this item. Additional context: ${description}`
              : 'Identify this item and extract any visible identifiers (serial numbers, IMEI, VIN).'
          },
          {
            type: 'image_url',
            image_url: {
              url: imageBase64 ? `data:image/jpeg;base64,${imageBase64}` : imageUrl
            }
          }
        ]
      });
    } else {
      messages.push({
        role: 'user',
        content: `Based on this description, identify the item type and suggest verification steps: "${description}"`
      });
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        temperature: 0.3,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, error: 'Rate limit exceeded' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ success: false, error: 'AI service temporarily unavailable' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '{}';

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
