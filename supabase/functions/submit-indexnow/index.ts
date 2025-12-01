/**
 * Edge Function: Submit URLs to IndexNow
 * Instantly notifies Google, Bing, Yandex about new/updated pages
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const BASE_URL = 'https://safeorstolen.com';
const INDEX_NOW_KEY = '4e8f3a2b1c9d0f6e5a7b8c1d2e3f4g5h';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ error: 'urls array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Convert to full URLs
    const fullUrls = urls.map(url => 
      url.startsWith('http') ? url : `${BASE_URL}${url}`
    );

    console.log(`📤 Submitting ${fullUrls.length} URLs to IndexNow...`);

    // Submit to IndexNow
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'safeorstolen.com',
        key: INDEX_NOW_KEY,
        keyLocation: `${BASE_URL}/indexnow-key.txt`,
        urlList: fullUrls
      })
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ Successfully submitted ${fullUrls.length} URLs`);
      return new Response(
        JSON.stringify({
          success: true,
          message: `Successfully submitted ${fullUrls.length} URLs to search engines`,
          engine: 'IndexNow (Google, Bing, Yandex, Naver)',
          urlCount: fullUrls.length
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      const errorText = await response.text();
      console.error(`❌ IndexNow error: ${response.status} ${errorText}`);
      return new Response(
        JSON.stringify({
          success: false,
          message: `Failed to submit: ${response.status} ${response.statusText}`,
          error: errorText
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('❌ Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
