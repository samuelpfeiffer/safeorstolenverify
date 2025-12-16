import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

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

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const host = 'safeorstolen.com';
    const keyLocation = `https://${host}/indexnow-key.txt`;
    // Key must match the content of /indexnow-key.txt file exactly
    const key = Deno.env.get('INDEXNOW_KEY') || 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';

    // Fetch current sitemap to detect new URLs
    let sitemapUrls: string[] = [];
    try {
      const sitemapResponse = await fetch(`https://${host}/sitemap.xml`);
      if (sitemapResponse.ok) {
        const sitemapText = await sitemapResponse.text();
        // Extract URLs from sitemap XML
        const urlMatches = sitemapText.matchAll(/<loc>(.*?)<\/loc>/g);
        sitemapUrls = Array.from(urlMatches).map(match => match[1]);
        console.log(`Found ${sitemapUrls.length} URLs in sitemap`);
      }
    } catch (error) {
      console.error('Error fetching sitemap:', error);
    }

    // Submit to IndexNow API (supported by Bing, Yandex, Seznam, Naver)
    const fullUrls = urls.map(url => `https://${host}${url}`);
    
    // Submit to Bing/Microsoft IndexNow
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: fullUrls
      })
    });
    const indexNowStatus = indexNowResponse.status;
    console.log('IndexNow (Bing) submission:', { urls, status: indexNowStatus });

    // Submit directly to Yandex IndexNow endpoint
    const yandexResponse = await fetch('https://yandex.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: fullUrls
      })
    });
    const yandexStatus = yandexResponse.status;
    console.log('IndexNow (Yandex) submission:', { urls, status: yandexStatus });

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

    // Log submission to database
    const { error: dbError } = await supabase
      .from('indexnow_submissions')
      .insert({
        urls: fullUrls,
        status: indexNowStatus === 200 ? 'success' : 'failed',
        response: {
          indexNowStatus,
          yandexStatus,
          googlePingStatus: sitemapPingResponse.status,
          bingPingStatus: bingSitemapResponse.status,
          sitemapUrlCount: sitemapUrls.length,
          submittedCount: fullUrls.length
        }
      });

    if (dbError) {
      console.error('Error logging to database:', dbError);
    }

    // Get recent submission history
    const { data: recentSubmissions } = await supabase
      .from('indexnow_submissions')
      .select('*')
      .order('submitted_at', { ascending: false })
      .limit(10);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Submitted ${urls.length} URLs to search engines`,
        details: {
          indexNowStatus,
          yandexStatus,
          googlePingStatus: sitemapPingResponse.status,
          bingPingStatus: bingSitemapResponse.status,
          sitemapDetection: {
            totalUrlsInSitemap: sitemapUrls.length,
            submittedUrls: fullUrls.length,
          }
        },
        history: recentSubmissions || []
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('IndexNow submission error:', error);
    
    // Try to log error to database
    try {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      await supabase
        .from('indexnow_submissions')
        .insert({
          urls: [],
          status: 'error',
          response: { error: error.message }
        });
    } catch (logError) {
      console.error('Error logging failure to database:', logError);
    }

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
