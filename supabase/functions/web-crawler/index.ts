import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import FirecrawlApp from 'npm:@mendable/firecrawl-js@^4.5.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrawlRequest {
  url: string;
  options?: {
    limit?: number;
    scrapeOptions?: {
      formats?: ('markdown' | 'html' | 'rawHtml')[];
      includeTags?: string[];
      excludeTags?: string[];
      onlyMainContent?: boolean;
    };
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
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

    const { url, options }: CrawlRequest = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Initializing Firecrawl with URL:', url);
    const firecrawl = new FirecrawlApp({ apiKey: FIRECRAWL_API_KEY });

    console.log('Starting crawl with options:', options);
    const crawlResponse = await firecrawl.v1.crawlUrl(url, {
      limit: options?.limit || 10,
      scrapeOptions: options?.scrapeOptions || {
        formats: ['markdown', 'html'],
      },
    });

    console.log('Crawl response received:', crawlResponse.success);

    if (!crawlResponse.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: (crawlResponse as any).error || 'Failed to crawl website',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: crawlResponse,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in web-crawler function:', error);
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
