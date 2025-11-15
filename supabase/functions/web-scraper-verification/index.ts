import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import FirecrawlApp from 'npm:@mendable/firecrawl-js@^4.5.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerificationRequest {
  identifier: string;
  itemType?: string;
}

// Known stolen item databases and registries to search
const STOLEN_DATABASES = [
  'https://www.stolenlostfound.com',
  'https://www.immobilise.com',
  'https://bikeindex.org/bikes',
  'https://www.nsb.org.uk', // National Search Bureau
  'https://www.stolen911.com',
  'https://www.imei.info',
  'https://www.imeipro.info',
];

// Search engines for broader stolen item checks
const SEARCH_ENGINES = [
  (q: string) => `https://www.google.com/search?q=${q}+stolen+report`,
  (q: string) => `https://www.google.com/search?q=${q}+theft+police`,
  (q: string) => `https://www.google.com/search?q=${q}+stolen+lost`,
];

// Marketplace sites to check for flagged listings
const MARKETPLACE_SOURCES = [
  (q: string) => `https://www.ebay.com/sch/i.html?_nkw=${q}+stolen`,
  (q: string) => `https://www.facebook.com/marketplace/search/?query=${q}+stolen`,
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const FIRECRAWL_API_KEY = Deno.env.get('FIRECRAWL_API_KEY');
    if (!FIRECRAWL_API_KEY) {
      console.error('FIRECRAWL_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'API key not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { identifier, itemType }: VerificationRequest = await req.json();

    if (!identifier) {
      return new Response(
        JSON.stringify({ success: false, error: 'Identifier is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Starting web scraper verification for:', identifier);
    const firecrawl = new FirecrawlApp({ apiKey: FIRECRAWL_API_KEY });

    const searchResults = [];
    let foundStolen = false;
    const sources = [];
    let totalSearched = 0;

    // Search stolen item databases
    console.log('Searching stolen item databases...');
    for (const database of STOLEN_DATABASES) {
      totalSearched++;
      try {
        console.log(`Searching ${database} for ${identifier}`);
        
        // Construct search URL based on database
        const searchUrl = `${database}/search?q=${encodeURIComponent(identifier)}`;
        
        // Scrape the search results page
        const scrapeResponse = await firecrawl.v1.scrapeUrl(searchUrl, {
          formats: ['markdown', 'html'],
          onlyMainContent: true,
          timeout: 10000,
        });

        if (scrapeResponse.success && scrapeResponse.data) {
          const content = scrapeResponse.data.markdown || scrapeResponse.data.html || '';
          
          // Check if the identifier appears in the content
          const normalizedContent = content.toLowerCase();
          const normalizedIdentifier = identifier.toLowerCase();
          
          if (normalizedContent.includes(normalizedIdentifier)) {
            // Look for keywords that indicate stolen status
            const stolenKeywords = [
              'stolen',
              'reported stolen',
              'theft',
              'missing',
              'lost',
              'police report',
              'crime reference',
            ];
            
            const hasStolenIndicator = stolenKeywords.some(keyword => 
              normalizedContent.includes(keyword)
            );
            
            if (hasStolenIndicator) {
              foundStolen = true;
              sources.push({
                database: database,
                url: searchUrl,
                snippet: content.substring(0, 200),
                confidence: 'high',
              });
              
              console.log(`Found potential match on ${database}`);
            }
          }
        }
      } catch (error) {
        console.error(`Error searching ${database}:`, error);
        // Continue with other databases even if one fails
      }
    }

    // Search via Google for stolen reports
    console.log('Searching Google for stolen reports...');
    for (const searchFn of SEARCH_ENGINES) {
      totalSearched++;
      try {
        const searchUrl = searchFn(encodeURIComponent(identifier));
        
        const scrapeResponse = await firecrawl.v1.scrapeUrl(searchUrl, {
          formats: ['markdown'],
          onlyMainContent: true,
          timeout: 8000,
        });

        if (scrapeResponse.success && scrapeResponse.data) {
          const content = scrapeResponse.data.markdown || '';
          const normalizedContent = content.toLowerCase();
          const normalizedIdentifier = identifier.toLowerCase();
          
          if (normalizedContent.includes(normalizedIdentifier)) {
            const stolenIndicators = [
              'stolen',
              'reported stolen',
              'theft report',
              'police report',
              'lost and found',
              'crime report',
              'stolen property',
            ];
            
            const matches = stolenIndicators.filter(keyword => 
              normalizedContent.includes(keyword)
            );
            
            if (matches.length >= 2) {
              foundStolen = true;
              sources.push({
                database: 'Google Search',
                url: searchUrl,
                snippet: content.substring(0, 150),
                confidence: matches.length >= 3 ? 'high' : 'medium',
                matchedKeywords: matches,
              });
            }
          }
        }
      } catch (error) {
        console.error('Error searching Google:', error);
      }
    }

    // Check marketplace sites for flagged listings
    console.log('Checking marketplace sites...');
    for (const marketplaceFn of MARKETPLACE_SOURCES) {
      totalSearched++;
      try {
        const searchUrl = marketplaceFn(encodeURIComponent(identifier));
        
        const scrapeResponse = await firecrawl.v1.scrapeUrl(searchUrl, {
          formats: ['markdown'],
          onlyMainContent: true,
          timeout: 8000,
        });

        if (scrapeResponse.success && scrapeResponse.data) {
          const content = scrapeResponse.data.markdown || '';
          const normalizedContent = content.toLowerCase();
          
          if (normalizedContent.includes(identifier.toLowerCase())) {
            if (normalizedContent.includes('stolen') || 
                normalizedContent.includes('flagged') ||
                normalizedContent.includes('reported')) {
              foundStolen = true;
              sources.push({
                database: 'Marketplace Alert',
                url: searchUrl,
                snippet: content.substring(0, 150),
                confidence: 'medium',
              });
            }
          }
        }
      } catch (error) {
        console.error('Error checking marketplace:', error);
      }
    }

    const result = {
      success: true,
      identifier,
      itemType,
      status: foundStolen ? 'stolen' : 'safe',
      confidence: foundStolen ? (sources.length > 2 ? 90 : 75) : 40,
      sources: sources,
      databasesSearched: totalSearched,
      timestamp: new Date().toISOString(),
      message: foundStolen 
        ? `Item found in ${sources.length} stolen item source(s). High risk - verify with seller and authorities.`
        : `No stolen records found across ${totalSearched} sources. This does not guarantee the item is safe - always verify in person.`,
    };

    console.log('Web scraper verification result:', result);

    return new Response(
      JSON.stringify(result),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in web-scraper-verification:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
