import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ScrapeRequest {
  identifier: string;
  itemType: string;
}

interface ScrapeResult {
  success: boolean;
  status: 'safe' | 'stolen' | 'lost' | 'unknown';
  confidence: number;
  sources: string[];
  message: string;
  details?: any;
}

// Stolen property databases and registries to search
const SEARCH_SOURCES = [
  { name: 'NCIC Database', searchTerms: ['NCIC stolen', 'national crime information center'] },
  { name: 'Hotgunz Stolen Firearms', searchTerms: ['hotgunz stolen'] },
  { name: 'NICB Theft Records', searchTerms: ['NICB stolen vehicle'] },
  { name: 'Bike Index', searchTerms: ['bike index stolen'] },
  { name: 'LeadsOnline', searchTerms: ['leadsonline stolen property'] },
  { name: 'CheckMEND', searchTerms: ['checkmend stolen'] },
  { name: 'IMEI.info', searchTerms: ['IMEI blacklist'] },
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const startTime = Date.now();
  
  try {
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');
    
    if (!firecrawlApiKey) {
      console.error('[Web Scraper] FIRECRAWL_API_KEY not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          status: 'unknown',
          confidence: 0,
          sources: [],
          message: 'Web scraping service not configured'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { identifier, itemType } = await req.json() as ScrapeRequest;
    
    if (!identifier) {
      return new Response(
        JSON.stringify({ success: false, error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[Web Scraper] Starting verification for ${itemType}: ${identifier}`);

    // Build search query based on item type
    let searchQuery = '';
    switch (itemType?.toLowerCase()) {
      case 'vehicle':
      case 'vin':
        searchQuery = `"${identifier}" stolen vehicle VIN theft report`;
        break;
      case 'phone':
      case 'imei':
        searchQuery = `"${identifier}" stolen phone IMEI blacklist blocked`;
        break;
      case 'firearm':
      case 'gun':
        searchQuery = `"${identifier}" stolen firearm gun serial ATF`;
        break;
      case 'bicycle':
      case 'bike':
        searchQuery = `"${identifier}" stolen bicycle bike serial`;
        break;
      default:
        searchQuery = `"${identifier}" stolen property theft report`;
    }

    console.log(`[Web Scraper] Search query: ${searchQuery}`);

    // Use Firecrawl search API
    const searchResponse = await fetch('https://api.firecrawl.dev/v1/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${firecrawlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: searchQuery,
        limit: 10,
        scrapeOptions: {
          formats: ['markdown']
        }
      }),
    });

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      console.error(`[Web Scraper] Firecrawl error: ${searchResponse.status} - ${errorText}`);
      
      // Return safe with low confidence if search fails
      return new Response(
        JSON.stringify({
          success: true,
          status: 'unknown',
          confidence: 30,
          sources: ['Firecrawl Search (unavailable)'],
          message: 'Unable to search external databases. Manual verification recommended.',
          responseTime: Date.now() - startTime
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const searchData = await searchResponse.json();
    console.log(`[Web Scraper] Found ${searchData.data?.length || 0} results`);

    // Analyze search results for stolen indicators
    const results = searchData.data || [];
    const sourcesChecked: string[] = [];
    let foundStolen = false;
    let stolenIndicators: string[] = [];
    
    const stolenKeywords = [
      'stolen', 'theft', 'reported stolen', 'blacklisted', 'blocked',
      'lost', 'missing', 'wanted', 'crime', 'police report'
    ];

    for (const result of results) {
      sourcesChecked.push(result.url || result.title || 'Unknown source');
      
      const content = (result.markdown || result.description || '').toLowerCase();
      const title = (result.title || '').toLowerCase();
      const identifierLower = identifier.toLowerCase();
      
      // Check if the result actually contains our identifier
      if (content.includes(identifierLower) || title.includes(identifierLower)) {
        // Check for stolen keywords
        for (const keyword of stolenKeywords) {
          if (content.includes(keyword) || title.includes(keyword)) {
            foundStolen = true;
            stolenIndicators.push(`Found "${keyword}" in: ${result.title}`);
          }
        }
      }
    }

    // Determine final status
    let status: ScrapeResult['status'] = 'safe';
    let confidence = 75;
    let message = '';

    if (foundStolen) {
      status = 'stolen';
      confidence = 85;
      message = `ALERT: Potential stolen item. Found ${stolenIndicators.length} indicator(s) in web search results.`;
    } else if (results.length === 0) {
      status = 'unknown';
      confidence = 40;
      message = 'No results found in web search. Unable to verify.';
    } else {
      status = 'safe';
      confidence = 70;
      message = `Searched ${sourcesChecked.length} source(s). No stolen reports found.`;
    }

    const response: ScrapeResult = {
      success: true,
      status,
      confidence,
      sources: sourcesChecked.slice(0, 5),
      message,
      details: {
        totalResults: results.length,
        stolenIndicators: stolenIndicators.slice(0, 5),
        searchQuery,
        responseTime: Date.now() - startTime
      }
    };

    console.log(`[Web Scraper] Complete in ${Date.now() - startTime}ms - Status: ${status}`);

    return new Response(
      JSON.stringify(response),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Web Scraper] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        status: 'unknown',
        confidence: 0,
        sources: [],
        message: `Web scraper error: ${error.message}`,
        responseTime: Date.now() - startTime
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
