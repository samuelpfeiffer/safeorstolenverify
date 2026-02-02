import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Marketplace URL patterns
const MARKETPLACE_PATTERNS = {
  ebay: {
    patterns: [/ebay\.com\/itm\//, /ebay\.[a-z]+\/itm\//],
    name: 'eBay',
    extractors: {
      title: /class="x-item-title__mainTitle"[^>]*>([^<]+)</,
      price: /class="x-price-primary"[^>]*>([^<]+)</,
      seller: /class="ux-seller-section__item--seller"[^>]*>([^<]+)</,
    }
  },
  facebook: {
    patterns: [/facebook\.com\/marketplace/, /fb\.com\/marketplace/],
    name: 'Facebook Marketplace',
    extractors: {}
  },
  craigslist: {
    patterns: [/craigslist\.org/, /\.craigslist\./],
    name: 'Craigslist',
    extractors: {}
  },
  offerup: {
    patterns: [/offerup\.com\/item/],
    name: 'OfferUp',
    extractors: {}
  },
  mercari: {
    patterns: [/mercari\.com\/us\/item/, /mercari\.com\/item/],
    name: 'Mercari',
    extractors: {}
  },
  poshmark: {
    patterns: [/poshmark\.com\/listing/],
    name: 'Poshmark',
    extractors: {}
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
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Extract serial numbers, IMEIs, VINs from text using AI
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
  "identifiers": [
    {"value": "352789103456789", "type": "IMEI", "confidence": 0.95}
  ],
  "itemDetails": {
    "title": "iPhone 14 Pro Max",
    "price": "$500",
    "description": "Like new condition...",
    "seller": "john_doe"
  },
  "riskFactors": [
    "Price is 40% below market value",
    "Seller has no visible history"
  ]
}`
        },
        {
          role: 'user',
          content: `Analyze this marketplace listing:\n\n${text.slice(0, 8000)}`
        }
      ],
      temperature: 0.1,
      max_tokens: 1500,
    }),
  });

  if (!response.ok) {
    console.error('AI extraction failed:', response.status);
    return {
      identifiers: [],
      itemDetails: {},
      riskFactors: []
    };
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '{}';
  
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.error('Failed to parse AI response:', e);
  }
  
  return {
    identifiers: [],
    itemDetails: {},
    riskFactors: []
  };
}

// Security: Blocked URL patterns (SSRF prevention)
const BLOCKED_PATTERNS = [
  /^https?:\/\/localhost/i,
  /^https?:\/\/127\./,
  /^https?:\/\/192\.168\./,
  /^https?:\/\/10\./,
  /^https?:\/\/172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^https?:\/\/\[::1\]/,
  /^https?:\/\/0\.0\.0\.0/,
  /^file:/i,
  /^ftp:/i,
  /^data:/i,
];

function isBlockedUrl(url: string): boolean {
  return BLOCKED_PATTERNS.some(pattern => pattern.test(url));
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    
    // ============= INPUT VALIDATION =============
    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    if (typeof url !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'URL must be a string' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // URL length limit
    if (url.length > 2048) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL too long. Maximum 2048 characters.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate URL format
    if (!isValidUrl(url)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid URL format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // SSRF Prevention: Block internal/private IPs
    if (isBlockedUrl(url)) {
      console.warn(`[Marketplace Analyzer] Blocked SSRF attempt: ${url.substring(0, 50)}`);
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid URL. Private/internal URLs are not allowed.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Validate protocol
    try {
      const parsedUrl = new URL(url);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        return new Response(
          JSON.stringify({ success: false, error: 'Only HTTP and HTTPS URLs are allowed' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid URL format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Detect marketplace
    const marketplace = detectMarketplace(url);
    if (!marketplace) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Unsupported marketplace. We support: eBay, Facebook Marketplace, Craigslist, OfferUp, Mercari, and Poshmark.' 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Log only domain, not full URL for security
    const parsedUrl = new URL(url);
    console.log(`[Marketplace Analyzer] Scraping ${marketplace.name} listing from: ${parsedUrl.hostname}`);

    // Get Firecrawl API key - check both possible env var names
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY') || Deno.env.get('FIRECRAWL_API_KEY_1');
    if (!firecrawlApiKey) {
      console.error('Firecrawl API key not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Scraping service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Scrape the marketplace listing with Firecrawl
    const scrapeResponse = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${firecrawlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        formats: ['markdown', 'html'],
        onlyMainContent: true,
        waitFor: 2000, // Wait for dynamic content
      }),
    });

    if (!scrapeResponse.ok) {
      const errorData = await scrapeResponse.json().catch(() => ({}));
      console.error('Firecrawl error:', scrapeResponse.status, errorData);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Failed to scrape listing. The page may be protected or unavailable.`
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const scrapeData = await scrapeResponse.json();
    const markdown = scrapeData.data?.markdown || scrapeData.markdown || '';
    const metadata = scrapeData.data?.metadata || scrapeData.metadata || {};

    console.log(`[Marketplace Analyzer] Scraped ${markdown.length} characters`);

    // Get Lovable API key for AI analysis
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!lovableApiKey) {
      // Return basic scrape result without AI analysis
      return new Response(
        JSON.stringify({
          success: true,
          marketplace: marketplace,
          url: url,
          content: markdown.slice(0, 2000),
          metadata: {
            title: metadata.title,
            description: metadata.description,
          },
          identifiers: [],
          riskFactors: [],
          aiAnalyzed: false
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Use AI to extract identifiers and analyze for risks
    const analysis = await extractIdentifiersWithAI(markdown, lovableApiKey);

    console.log(`[Marketplace Analyzer] Found ${analysis.identifiers.length} identifiers, ${analysis.riskFactors.length} risk factors`);

    return new Response(
      JSON.stringify({
        success: true,
        marketplace: marketplace,
        url: url,
        itemDetails: {
          ...analysis.itemDetails,
          sourceTitle: metadata.title,
          sourceDescription: metadata.description,
        },
        identifiers: analysis.identifiers,
        riskFactors: analysis.riskFactors,
        aiAnalyzed: true
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Marketplace Analyzer] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to analyze listing' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
