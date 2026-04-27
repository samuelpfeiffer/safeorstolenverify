import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface ContentRequest {
  type: 'report' | 'description' | 'advice';
  itemData: {
    category?: string;
    itemType?: string;
    serialNumber?: string;
    brand?: string;
    model?: string;
  };
  verificationResult?: any;
  userContext?: any;
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const startTime = Date.now();

  try {
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    
    if (!ANTHROPIC_API_KEY) {
      console.error('[AI Content Generator] ANTHROPIC_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { type, itemData, verificationResult, userContext } = await req.json() as ContentRequest;

    console.log(`[AI Content Generator] Generating ${type} content for ${itemData.category || 'item'}`);

    const systemPrompt = `You are SafeOrStolen's content writer. Generate clear, professional content for verification reports and buyer guidance.

Your content should be:
- Clear and easy to understand
- Actionable with specific recommendations
- Professional but accessible
- Focused on safety and verification

Respond with valid JSON only.`;

    let userPrompt = '';
    
    if (type === 'report') {
      userPrompt = `Generate a comprehensive verification report for this item:

Item: ${itemData.itemType || itemData.category || 'Unknown'}
${itemData.brand ? `Brand: ${itemData.brand}` : ''}
${itemData.model ? `Model: ${itemData.model}` : ''}
${itemData.serialNumber ? `Serial/ID: ${itemData.serialNumber}` : ''}

Verification Result: ${JSON.stringify(verificationResult || {}, null, 2)}

Generate JSON with:
{
  "productDescription": "<detailed item description>",
  "riskAssessment": "<comprehensive risk analysis>",
  "buyerAdvice": "<specific advice for the buyer>",
  "marketAnalysis": "<market context and pricing insights>"
}`;
    } else if (type === 'description') {
      userPrompt = `Generate a detailed description for this item:

Item: ${itemData.itemType || itemData.category || 'Unknown'}
${itemData.brand ? `Brand: ${itemData.brand}` : ''}
${itemData.model ? `Model: ${itemData.model}` : ''}

Generate JSON with:
{
  "productDescription": "<detailed, accurate item description>",
  "keyFeatures": ["<feature 1>", "<feature 2>", ...],
  "commonIssues": ["<issue 1>", "<issue 2>", ...]
}`;
    } else {
      userPrompt = `Generate buyer advice for purchasing this type of item:

Category: ${itemData.category || 'General'}
Item Type: ${itemData.itemType || 'Not specified'}

Generate JSON with:
{
  "buyerAdvice": "<comprehensive buying advice>",
  "safetyTips": ["<tip 1>", "<tip 2>", ...],
  "redFlags": ["<warning sign 1>", "<warning sign 2>", ...],
  "verificationSteps": ["<step 1>", "<step 2>", ...]
}`;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 2048,
        system: systemPrompt,
        messages: [
          { role: 'user', content: userPrompt }
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
      
      const errorText = await response.text();
      console.error(`[AI Content Generator] API error: ${response.status} - ${errorText}`);
      return new Response(
        JSON.stringify({ success: false, error: 'Content generation failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.content?.[0]?.text;

    if (!content) {
      throw new Error('No response content from AI');
    }

    let jsonContent = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonContent = jsonMatch[1].trim();
    }

    let generatedContent;
    try {
      const cleanMatch = jsonContent.match(/\{[\s\S]*\}/);
      generatedContent = cleanMatch ? JSON.parse(cleanMatch[0]) : JSON.parse(jsonContent);
    } catch (parseError) {
      console.error('[AI Content Generator] Failed to parse response:', content);
      generatedContent = { 
        productDescription: content,
        riskAssessment: 'Unable to generate structured content',
        buyerAdvice: 'Please verify item through standard channels',
        marketAnalysis: 'Market analysis unavailable'
      };
    }

    console.log(`[AI Content Generator] Complete in ${Date.now() - startTime}ms`);

    return new Response(
      JSON.stringify({
        success: true,
        content: generatedContent,
        responseTime: Date.now() - startTime
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Content Generator] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: (error instanceof Error ? error.message : String(error)) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
