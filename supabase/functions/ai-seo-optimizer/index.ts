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

    const { url, title, description, content, keywords, competitors } = await req.json();

    console.log(`[AI SEO Optimizer] Analyzing: ${url || 'content'}`);

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
            content: `You are SafeOrStolen's SEO expert. Analyze pages and provide optimization recommendations.

Focus on:
1. Title optimization (under 60 chars, keyword placement)
2. Meta description (150-160 chars, compelling CTA)
3. Heading structure (H1, H2, H3 hierarchy)
4. Keyword density and placement
5. Internal linking opportunities
6. Schema markup suggestions
7. Mobile optimization tips
8. Page speed considerations

SafeOrStolen is "Carfax for Everything - Buy and Sell" - a verification service for secondhand items.

Respond with JSON:
{
  "score": 0-100,
  "issues": [
    { "severity": "critical" | "warning" | "info", "issue": "description", "fix": "how to fix" }
  ],
  "suggestions": {
    "title": "optimized title",
    "metaDescription": "optimized description",
    "keywords": ["primary", "secondary"],
    "headings": ["suggested H2s"],
    "internalLinks": ["suggested links"],
    "schemaTypes": ["recommended schemas"]
  },
  "competitorInsights": "analysis vs competitors if provided",
  "priorityActions": ["action1", "action2", "action3"]
}`
          },
          {
            role: 'user',
            content: `Analyze and optimize this page:
URL: ${url || 'N/A'}
Current Title: ${title || 'N/A'}
Current Description: ${description || 'N/A'}
${content ? `Content Preview: ${content.substring(0, 2000)}...` : ''}
${keywords ? `Target Keywords: ${keywords.join(', ')}` : ''}
${competitors ? `Competitors: ${competitors.join(', ')}` : ''}`
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
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
    const responseContent = data.choices?.[0]?.message?.content || '{}';

    let result;
    try {
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { score: 50, issues: [], suggestions: {} };
    } catch {
      result = { score: 50, issues: [], suggestions: {}, priorityActions: [] };
    }

    console.log(`[AI SEO Optimizer] Score: ${result.score}, Issues: ${result.issues?.length || 0}`);

    return new Response(
      JSON.stringify({
        success: true,
        analysis: result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI SEO Optimizer] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
