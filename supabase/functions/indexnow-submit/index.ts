import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls } = await req.json();
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      throw new Error('URLs array is required');
    }

    const host = 'safeorstolen.com';
    const keyLocation = `https://${host}/indexnow-key.txt`;
    const key = Deno.env.get('INDEXNOW_KEY') || 'generate-random-key-and-store-in-secrets';

    // Submit to IndexNow API (supported by Bing, Yandex)
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: urls.map(url => `https://${host}${url}`)
      })
    });

    // Ping Google sitemap
    const sitemapPingResponse = await fetch(
      `https://www.google.com/ping?sitemap=https://${host}/sitemap.xml`,
      { method: 'GET' }
    );

    // Ping Bing sitemap
    const bingSitemapResponse = await fetch(
      `https://www.bing.com/ping?sitemap=https://${host}/sitemap.xml`,
      { method: 'GET' }
    );

    console.log('IndexNow submission:', {
      urls,
      indexNowStatus: indexNowResponse.status,
      googlePingStatus: sitemapPingResponse.status,
      bingPingStatus: bingSitemapResponse.status
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: `Submitted ${urls.length} URLs to search engines`,
        indexNowStatus: indexNowResponse.status,
        googlePingStatus: sitemapPingResponse.status,
        bingPingStatus: bingSitemapResponse.status
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('IndexNow submission error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
