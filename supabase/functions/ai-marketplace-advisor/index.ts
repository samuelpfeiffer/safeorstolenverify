import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    const { listingUrl, listingData, scrapedContent } = await req.json();

    if (!listingUrl && !listingData) {
      return new Response(JSON.stringify({ error: 'Listing URL or data required' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // If we have a URL but no scraped content, try Jina Reader
    let content = scrapedContent || '';
    if (listingUrl && !content) {
      try {
        const JINA_API_KEY = Deno.env.get('Jina_API_KEY');
        const jinaHeaders: Record<string, string> = { Accept: 'application/json' };
        if (JINA_API_KEY) jinaHeaders['Authorization'] = `Bearer ${JINA_API_KEY}`;
        
        const jinaResp = await fetch(`https://r.jina.ai/${listingUrl}`, { headers: jinaHeaders });
        if (jinaResp.ok) {
          const jinaData = await jinaResp.json();
          content = jinaData.data?.content || jinaData.content || '';
        }
      } catch (e) {
        console.log('Jina scrape failed, proceeding with URL only:', e);
      }
    }

    const systemPrompt = `You are SafeOrStolen's Marketplace Fraud Advisor — an expert at detecting scam listings on Facebook Marketplace, Craigslist, OfferUp, Mercari, and eBay.

Analyze the listing and produce a comprehensive fraud assessment.

SCAM INDICATORS TO CHECK:
- Price too good to be true (50%+ below market value)
- Stock photos or stolen images
- Vague descriptions with no specifics
- Seller refuses to meet in person
- New account with no history
- Pressure tactics ("must sell today")
- Requests unusual payment methods (Zelle, gift cards, crypto)
- Grammar/spelling errors suggesting foreign scam operations
- Location mismatches
- Missing serial numbers or identifiers
- "Just DM me" without public negotiation

Return JSON with this exact structure:
{
  "overallRiskScore": number (0-100, higher = more dangerous),
  "riskLevel": "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
  "verdict": "LIKELY SAFE" | "USE CAUTION" | "LIKELY SCAM" | "DEFINITE SCAM",
  "summary": "2-3 sentence verdict",
  "priceAnalysis": {
    "listedPrice": "extracted or estimated price",
    "estimatedMarketValue": "estimated fair price",
    "priceDifferencePercent": number,
    "verdict": "Fair" | "Below Market" | "Suspiciously Low" | "Too Good to Be True"
  },
  "redFlags": [{"flag": "description", "severity": "low|medium|high|critical", "detail": "explanation"}],
  "greenFlags": ["positive indicators"],
  "sellerAnalysis": "assessment of seller trustworthiness",
  "photoAnalysis": "assessment of listing photos",
  "descriptionAnalysis": "assessment of listing description quality",
  "recommendedActions": ["what buyer should do next"],
  "identifiersFound": ["any IMEI, VIN, serial numbers found in listing"],
  "safeOrStolenRecommendation": "specific SafeOrStolen verification recommendation"
}`;

    const userPrompt = `Analyze this marketplace listing for fraud risk:

**Listing URL:** ${listingUrl || 'Not provided'}
**Listing Content:**
${content || JSON.stringify(listingData || 'No content available')}

Provide your expert fraud analysis.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.2,
        max_tokens: 3000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again shortly.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted.' }), {
          status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const t = await response.text();
      console.error('AI gateway error:', response.status, t);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const aiContent = aiData.choices?.[0]?.message?.content || '';

    let analysis;
    try {
      const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
      analysis = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch {
      analysis = null;
    }

    if (!analysis) {
      analysis = {
        overallRiskScore: 50,
        riskLevel: "MEDIUM",
        verdict: "USE CAUTION",
        summary: aiContent.slice(0, 300),
        redFlags: [],
        greenFlags: [],
        recommendedActions: ["Verify item identifiers with SafeOrStolen before purchasing"],
        identifiersFound: [],
        safeOrStolenRecommendation: "Run a verification check on any identifiers before buying.",
      };
    }

    return new Response(JSON.stringify({ success: true, analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('AI marketplace advisor error:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Analysis failed',
    }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
