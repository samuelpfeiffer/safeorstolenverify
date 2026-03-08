import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
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
        } else {
          await jinaResp.text();
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

    const aiContent = await callClaude({
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
      temperature: 0.2,
      maxTokens: 3000,
    });

    let analysis = parseJsonResponse(aiContent);

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
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Analysis failed',
    }), {
      status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
