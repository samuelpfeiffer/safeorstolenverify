import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

// Marketplace URL patterns
const MARKETPLACE_PATTERNS = {
  ebay: {
    patterns: [/ebay\.com\/itm\//, /ebay\.[a-z]+\/itm\//],
    name: 'eBay',
  },
  facebook: {
    patterns: [/facebook\.com\/marketplace/, /fb\.com\/marketplace/],
    name: 'Facebook Marketplace',
  },
  craigslist: {
    patterns: [/craigslist\.org/, /\.craigslist\./],
    name: 'Craigslist',
  },
  offerup: {
    patterns: [/offerup\.com\/item/],
    name: 'OfferUp',
  },
  mercari: {
    patterns: [/mercari\.com\/us\/item/, /mercari\.com\/item/],
    name: 'Mercari',
  },
  poshmark: {
    patterns: [/poshmark\.com\/listing/],
    name: 'Poshmark',
  }
};

function detectMarketplace(url: string): { platform: string; name: string } | null {
  const lowercaseUrl = url.toLowerCase();
  for (const [platform, config] of Object.entries(MARKETPLACE_PATTERNS)) {
    for (const pattern of config.patterns) {
      if (pattern.test(lowercaseUrl)) {
        return { platform, name: config.name };
      }
    }
  }
  return null;
}

function isValidUrl(url: string): boolean {
  try { new URL(url); return true; } catch { return false; }
}

// SSRF prevention
const BLOCKED_PATTERNS = [
  /^https?:\/\/localhost/i, /^https?:\/\/127\./, /^https?:\/\/192\.168\./,
  /^https?:\/\/10\./, /^https?:\/\/172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^https?:\/\/\[::1\]/, /^https?:\/\/0\.0\.0\.0/, /^file:/i, /^ftp:/i, /^data:/i,
];

function isBlockedUrl(url: string): boolean {
  return BLOCKED_PATTERNS.some(p => p.test(url));
}

// ============= JINA READER API (Primary) =============
async function scrapeWithJina(url: string, apiKey?: string): Promise<{ markdown: string; title?: string; description?: string } | null> {
  try {
    const jinaUrl = `https://r.jina.ai/${url}`;
    const headers: Record<string, string> = {
      'Accept': 'application/json',
    };
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    console.log('[Marketplace Analyzer] Trying Jina Reader API...');
    const response = await fetch(jinaUrl, { headers });

    if (!response.ok) {
      console.warn(`[Marketplace Analyzer] Jina returned ${response.status}`);
      await response.text(); // consume body
      return null;
    }

    const data = await response.json();
    const content = data.data?.content || data.content || '';
    const title = data.data?.title || data.title || '';
    const description = data.data?.description || data.description || '';

    if (content.length < 50) {
      console.warn('[Marketplace Analyzer] Jina returned insufficient content');
      return null;
    }

    console.log(`[Marketplace Analyzer] Jina success: ${content.length} chars`);
    return { markdown: content, title, description };
  } catch (err) {
    console.warn('[Marketplace Analyzer] Jina error:', err.message);
    return null;
  }
}

// ============= FIRECRAWL API (Fallback) =============
async function scrapeWithFirecrawl(url: string, apiKey: string): Promise<{ markdown: string; title?: string; description?: string } | null> {
  try {
    console.log('[Marketplace Analyzer] Falling back to Firecrawl...');
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        formats: ['markdown'],
        onlyMainContent: true,
        waitFor: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Marketplace Analyzer] Firecrawl error:', response.status, errorData);
      return null;
    }

    const scrapeData = await response.json();
    const markdown = scrapeData.data?.markdown || scrapeData.markdown || '';
    const metadata = scrapeData.data?.metadata || scrapeData.metadata || {};

    console.log(`[Marketplace Analyzer] Firecrawl success: ${markdown.length} chars`);
    return { markdown, title: metadata.title, description: metadata.description };
  } catch (err) {
    console.error('[Marketplace Analyzer] Firecrawl error:', err.message);
    return null;
  }
}

// ============= AI IDENTIFIER EXTRACTION =============
async function extractIdentifiersWithAI(text: string, apiKey: string): Promise<{
  identifiers: Array<{ value: string; type: string; confidence: number }>;
  itemDetails: { title?: string; price?: string; description?: string; seller?: string };
  riskFactors: string[];
}> {
  const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemini-2.5-flash',
      messages: [
        {
          role: 'system',
          content: `You are SafeOrStolen's marketplace listing analyzer. Extract item identifiers and analyze listings for theft risk.

Extract from listing content:
1. Serial numbers, IMEIs (15 digits), VINs (17 chars), or other unique identifiers
2. Item details (title, price, description, seller info)
3. Red flags that might indicate stolen goods:
   - Price significantly below market value
   - Vague description, avoiding details
   - New account or seller with no history mentioned
   - Meeting in unusual locations
   - Rush to sell
   - No original packaging/receipts
   - Refusing to provide serial number
   - Stock photos instead of actual item photos

Respond ONLY with valid JSON:
{
  "identifiers": [{"value": "352789103456789", "type": "IMEI", "confidence": 0.95}],
  "itemDetails": {"title": "iPhone 14 Pro Max", "price": "$500", "description": "Like new condition...", "seller": "john_doe"},
  "riskFactors": ["Price is 40% below market value"]
}`
        },
        { role: 'user', content: `Analyze this marketplace listing:\n\n${text.slice(0, 8000)}` }
      ],
      temperature: 0.1,
      max_tokens: 1500,
    }),
  });

  if (!response.ok) {
    console.error('AI extraction failed:', response.status);
    return { identifiers: [], itemDetails: {}, riskFactors: [] };
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '{}';

  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) return JSON.parse(jsonMatch[0]);
  } catch (e) {
    console.error('Failed to parse AI response:', e);
  }

  return { identifiers: [], itemDetails: {}, riskFactors: [] };
}

// ============= MAIN HANDLER =============
serve(async (req) => {
  const corsResponse = handleCorsPreFlight(req);
  if (corsResponse) return corsResponse;

  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' };

  try {
    const { url } = await req.json();

    // Input validation
    if (!url || typeof url !== 'string') {
      return new Response(JSON.stringify({ success: false, error: 'URL is required' }), { status: 400, headers: jsonHeaders });
    }
    if (url.length > 2048) {
      return new Response(JSON.stringify({ success: false, error: 'URL too long' }), { status: 400, headers: jsonHeaders });
    }
    if (!isValidUrl(url)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid URL format' }), { status: 400, headers: jsonHeaders });
    }
    if (isBlockedUrl(url)) {
      return new Response(JSON.stringify({ success: false, error: 'Private/internal URLs not allowed' }), { status: 400, headers: jsonHeaders });
    }
    try {
      const parsedUrl = new URL(url);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        return new Response(JSON.stringify({ success: false, error: 'Only HTTP/HTTPS allowed' }), { status: 400, headers: jsonHeaders });
      }
    } catch {
      return new Response(JSON.stringify({ success: false, error: 'Invalid URL' }), { status: 400, headers: jsonHeaders });
    }

    // Detect marketplace
    const marketplace = detectMarketplace(url);
    if (!marketplace) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Unsupported marketplace. We support: eBay, Facebook Marketplace, Craigslist, OfferUp, Mercari, and Poshmark.'
      }), { status: 400, headers: jsonHeaders });
    }

    console.log(`[Marketplace Analyzer] Analyzing ${marketplace.name} listing`);

    // === SCRAPING: Jina (primary) → Firecrawl (fallback) ===
    const jinaApiKey = Deno.env.get('Jina_API_KEY');
    let scrapeResult = await scrapeWithJina(url, jinaApiKey);

    if (!scrapeResult) {
      const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY') || Deno.env.get('FIRECRAWL_API_KEY_1');
      if (firecrawlApiKey) {
        scrapeResult = await scrapeWithFirecrawl(url, firecrawlApiKey);
      }
    }

    if (!scrapeResult || !scrapeResult.markdown) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to scrape listing. The page may be protected or unavailable.'
      }), { status: 502, headers: jsonHeaders });
    }

    // === AI ANALYSIS ===
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!lovableApiKey) {
      return new Response(JSON.stringify({
        success: true,
        marketplace,
        url,
        itemDetails: { sourceTitle: scrapeResult.title, sourceDescription: scrapeResult.description },
        identifiers: [],
        riskFactors: [],
        aiAnalyzed: false
      }), { headers: jsonHeaders });
    }

    const analysis = await extractIdentifiersWithAI(scrapeResult.markdown, lovableApiKey);
    console.log(`[Marketplace Analyzer] Found ${analysis.identifiers.length} identifiers, ${analysis.riskFactors.length} risk factors`);

    return new Response(JSON.stringify({
      success: true,
      marketplace,
      url,
      itemDetails: {
        ...analysis.itemDetails,
        sourceTitle: scrapeResult.title,
        sourceDescription: scrapeResult.description,
      },
      identifiers: analysis.identifiers,
      riskFactors: analysis.riskFactors,
      aiAnalyzed: true
    }), { headers: jsonHeaders });

  } catch (error) {
    console.error('[Marketplace Analyzer] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to analyze listing' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
