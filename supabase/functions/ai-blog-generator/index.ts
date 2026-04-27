import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    if (!ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ success: false, error: 'AI service not configured' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { topic, keywords, targetLength, tone, includeSchema } = await req.json();

    if (!topic) {
      return new Response(
        JSON.stringify({ success: false, error: 'Topic is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Blog Generator] Generating: "${topic}"`);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 4096,
        system: `You are SafeOrStolen's content writer, expert in stolen goods verification, consumer protection, and marketplace safety. 

Write SEO-optimized blog posts that:
1. Help buyers avoid stolen goods
2. Educate about IMEI, VIN, and serial number verification
3. Promote SafeOrStolen as "Carfax for Everything - Buy and Sell"
4. Include actionable tips and real-world scenarios
5. Never use the word "product" - use "item", "service", or "plan" instead

Respond with JSON:
{
  "title": "SEO-optimized title",
  "metaDescription": "150-160 character meta description",
  "metaKeywords": ["keyword1", "keyword2"],
  "excerpt": "2-3 sentence excerpt",
  "content": "Full HTML blog content with proper headings (h2, h3)",
  "readingTime": minutes,
  "suggestedSlug": "url-friendly-slug",
  "schema": { Article schema object if requested }
}`,
        messages: [
          {
            role: 'user',
            content: `Write a blog post about: "${topic}"
${keywords ? `Target keywords: ${keywords.join(', ')}` : ''}
${targetLength ? `Target length: ${targetLength} words` : 'Target length: 1500 words'}
${tone ? `Tone: ${tone}` : 'Tone: Professional but approachable'}
${includeSchema ? 'Include Article schema markup' : ''}`
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
      result = {
        title: topic,
        content: content,
        metaDescription: `Learn about ${topic} with SafeOrStolen`,
        readingTime: Math.ceil(content.split(' ').length / 200)
      };
    }

    console.log(`[AI Blog Generator] Generated: "${result.title}", ${result.readingTime} min read`);

    return new Response(
      JSON.stringify({
        success: true,
        blog: result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Blog Generator] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: (error instanceof Error ? error.message : String(error)) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
