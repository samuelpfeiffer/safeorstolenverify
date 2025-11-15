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

    // Search across multiple stolen item databases
    for (const database of STOLEN_DATABASES) {
      try {
        console.log(`Searching ${database} for ${identifier}`);
        
        // Construct search URL based on database
        const searchUrl = `${database}/search?q=${encodeURIComponent(identifier)}`;
        
        // Scrape the search results page
        const scrapeResponse = await firecrawl.scrapeUrl(searchUrl, {
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

    const result = {
      success: true,
      identifier,
      itemType,
      status: foundStolen ? 'stolen' : 'safe',
      confidence: foundStolen ? 'medium' : 'low',
      sources: sources,
      searchedDatabases: STOLEN_DATABASES.length,
      timestamp: new Date().toISOString(),
      message: foundStolen 
        ? 'Item found on stolen item registries. Proceed with caution.'
        : 'No stolen records found in web search. This does not guarantee the item is safe.',
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
