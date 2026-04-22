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

    const { url, title, description, content, keywords, competitors, pageType } = await req.json();

    console.log(`[AI SEO Optimizer] Analyzing: ${url || 'content'}`);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 4000,
        system: `You are SafeOrStolen's expert SEO consultant with deep knowledge of Google's ranking algorithms, Core Web Vitals, E-E-A-T principles, and semantic SEO.

SafeOrStolen is "Carfax for Everything - Buy and Sell" - a stolen item verification service that checks IMEI, VIN, and serial numbers against 50+ databases including NCIC, NICB, Hotgunz, BikeIndex, carrier blacklists.

Your analysis must be comprehensive and actionable:

1. **Title Optimization** (50-60 chars ideal)
   - Primary keyword at the start
   - Brand name at end if space permits
   - Power words for CTR

2. **Meta Description** (150-155 chars ideal)
   - Include primary keyword naturally
   - Clear value proposition
   - Strong CTA or benefit statement

3. **Heading Structure**
   - Single H1 with primary keyword
   - H2s for major sections with secondary keywords
   - H3s for subsections with long-tail variations

4. **Content Analysis**
   - Keyword density (1-2% ideal)
   - Semantic keyword coverage
   - Content depth and comprehensiveness
   - Readability score

5. **Technical SEO**
   - Schema markup recommendations
   - Internal linking opportunities
   - Image alt text suggestions
   - Mobile optimization

6. **E-E-A-T Signals**
   - Expertise indicators
   - Authority signals
   - Trustworthiness elements

7. **Featured Snippet Optimization**
   - Question-answer format opportunities
   - List/table formatting
   - Definition boxes

Respond with JSON only:
{
  "score": 0-100,
  "grade": "A+" | "A" | "B" | "C" | "D" | "F",
  "issues": [
    { "severity": "critical" | "warning" | "info", "category": "string", "issue": "description", "fix": "how to fix", "impact": "high|medium|low" }
  ],
  "optimizedMeta": {
    "title": "optimized title (50-60 chars)",
    "description": "optimized description (150-155 chars)",
    "h1": "optimized H1",
    "socialTitle": "optimized for social (55-70 chars)",
    "socialDescription": "optimized for social sharing"
  },
  "keywords": {
    "primary": "main keyword",
    "secondary": ["keyword1", "keyword2"],
    "longTail": ["phrase1", "phrase2", "phrase3"],
    "semantic": ["related term 1", "related term 2"]
  },
  "contentSuggestions": {
    "headings": ["suggested H2s with keywords"],
    "sections": ["new sections to add"],
    "faqs": [{"question": "FAQ question", "answer": "brief answer"}],
    "wordCountRecommendation": 2000
  },
  "technicalSEO": {
    "schemaTypes": ["recommended schema types"],
    "internalLinks": [{"anchor": "text", "targetPage": "/path"}],
    "imageAltTags": ["suggestions for image descriptions"]
  },
  "featuredSnippetStrategy": {
    "targetQuery": "question to target",
    "format": "paragraph|list|table",
    "content": "optimized content for snippet"
  },
  "competitorInsights": "analysis if competitors provided",
  "priorityActions": [
    {"action": "description", "impact": "high|medium|low", "effort": "low|medium|high"}
  ],
  "estimatedImpact": "Description of expected ranking improvement"
}`,
        messages: [
          {
            role: 'user',
            content: `Perform a comprehensive SEO analysis and optimization:

URL: ${url || 'Not provided'}
Page Type: ${pageType || 'landing page'}
Current Title: ${title || 'Not provided'}
Current Description: ${description || 'Not provided'}
${content ? `Content Preview:\n${content.substring(0, 4000)}` : 'No content provided'}
${keywords ? `Target Keywords: ${Array.isArray(keywords) ? keywords.join(', ') : keywords}` : ''}
${competitors ? `Competitor URLs to analyze: ${Array.isArray(competitors) ? competitors.join(', ') : competitors}` : ''}

Provide a detailed SEO analysis with specific, actionable recommendations.`
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, error: 'Rate limit exceeded, please try again later' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('[AI SEO Optimizer] API error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const responseContent = data.content?.[0]?.text || '{}';

    let result;
    try {
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { 
        score: 50, 
        grade: 'C',
        issues: [], 
        optimizedMeta: {},
        keywords: {},
        priorityActions: [] 
      };
    } catch (parseError) {
      console.error('[AI SEO Optimizer] JSON parse error:', parseError);
      result = { 
        score: 50, 
        grade: 'C',
        issues: [], 
        optimizedMeta: {},
        keywords: {},
        priorityActions: [],
        rawResponse: responseContent.substring(0, 500)
      };
    }

    console.log(`[AI SEO Optimizer] Score: ${result.score}, Grade: ${result.grade}, Issues: ${result.issues?.length || 0}`);

    return new Response(
      JSON.stringify({
        success: true,
        analysis: result,
        analyzedUrl: url,
        timestamp: new Date().toISOString()
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI SEO Optimizer] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
