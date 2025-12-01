import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface IndexNowRequest {
  urls: string[];
  keyLocation?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls, keyLocation } = await req.json() as IndexNowRequest;

    if (!urls || urls.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No URLs provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Submitting ${urls.length} URLs to IndexNow...`);

    // IndexNow API endpoint (Bing's endpoint works for all IndexNow search engines)
    const indexNowUrl = 'https://api.indexnow.org/indexnow';
    
    // Static key for SafeOrStolen (you'll need to create /indexnow-{key}.txt file)
    const apiKey = '8f9a7b6c5d4e3f2a1b0c9d8e7f6a5b4c';
    const host = 'safeorstolen.com';
    const keyLoc = keyLocation || `https://${host}/indexnow-${apiKey}.txt`;

    // Batch submit URLs (IndexNow accepts up to 10,000 URLs per request)
    const batchSize = 10000;
    const results = [];

    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      
      const payload = {
        host,
        key: apiKey,
        keyLocation: keyLoc,
        urlList: batch
      };

      console.log(`Submitting batch ${Math.floor(i / batchSize) + 1} with ${batch.length} URLs...`);

      const response = await fetch(indexNowUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const status = response.status;
      let responseText = '';
      
      try {
        responseText = await response.text();
      } catch (e) {
        console.log('No response body');
      }

      console.log(`IndexNow response: ${status} - ${responseText || 'Success (no content)'}`);

      results.push({
        batch: Math.floor(i / batchSize) + 1,
        status,
        message: status === 200 ? 'Success' : status === 202 ? 'Accepted' : `Error ${status}`,
        urls: batch.length
      });

      // Rate limit: wait 1 second between batches
      if (i + batchSize < urls.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log(`✅ IndexNow submission complete. Total URLs: ${urls.length}`);

    return new Response(
      JSON.stringify({
        success: true,
        submitted: urls.length,
        batches: results,
        searchEngines: ['Bing', 'Yandex', 'Seznam.cz', 'Naver', 'and more'],
        note: 'URLs submitted to IndexNow network. Indexing typically occurs within minutes to hours.'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('IndexNow submission error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Failed to submit URLs to IndexNow'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
