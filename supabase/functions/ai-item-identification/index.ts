import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      throw new Error('Image data is required');
    }

    console.log('Analyzing image with GPT-4 Vision...');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert at identifying items from images for theft verification purposes. 
            Analyze the image and provide:
            1. Item type (phone, laptop, vehicle, bicycle, etc.)
            2. Brand (if visible)
            3. Model (if identifiable)
            4. Visible serial numbers or identifiers
            5. Condition assessment
            6. Key distinguishing features
            
            Respond in JSON format with these fields: itemType, brand, model, serialNumbers, condition, features, confidence.`
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`
                }
              },
              {
                type: 'text',
                text: 'Please identify this item and extract any visible serial numbers or identifying information.'
              }
            ]
          }
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    console.log('AI identification result:', content);

    // Try to parse JSON response, fallback to text
    let identification;
    try {
      identification = JSON.parse(content);
    } catch {
      identification = {
        itemType: 'unknown',
        analysis: content,
        confidence: 'low'
      };
    }

    return new Response(JSON.stringify({ identification }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-item-identification:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
