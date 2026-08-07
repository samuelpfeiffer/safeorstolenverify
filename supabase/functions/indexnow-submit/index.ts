import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { requireAdmin } from '../_shared/require-admin.ts';

const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
const HOST = 'safeorstolen.com';
const KEY_LOCATION = `https://${HOST}/indexnow-key.txt`;

interface SubmissionResult {
  engine: string;
  status: number;
  success: boolean;
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Admin-only: block non-admin callers before any privileged work
  const denied = await requireAdmin(req, corsHeaders);
  if (denied) return denied;

  try {
    const { urls, submitToGoogle = true, submitToBing = true, submitToYandex = true } = await req.json();
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      throw new Error('URLs array is required');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Build full URLs
    const fullUrls = urls.map((url: string) => 
      url.startsWith('http') ? url : `https://${HOST}${url.startsWith('/') ? url : '/' + url}`
    );

    console.log(`[IndexNow] Submitting ${fullUrls.length} URLs...`);

    const results: SubmissionResult[] = [];

    // Submit to IndexNow API (Bing, Yandex, Seznam, Naver)
    if (submitToBing) {
      try {
        const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            host: HOST,
            key: INDEXNOW_KEY,
            keyLocation: KEY_LOCATION,
            urlList: fullUrls
          })
        });
        results.push({ 
          engine: 'IndexNow (Bing)', 
          status: indexNowResponse.status,
          success: indexNowResponse.status >= 200 && indexNowResponse.status < 300
        });
        console.log(`[IndexNow] Bing submission: ${indexNowResponse.status}`);
      } catch (error) {
        console.error('[IndexNow] Bing error:', error);
        results.push({ engine: 'IndexNow (Bing)', status: 500, success: false });
      }
    }

    // Submit directly to Yandex
    if (submitToYandex) {
      try {
        const yandexResponse = await fetch('https://yandex.com/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            host: HOST,
            key: INDEXNOW_KEY,
            keyLocation: KEY_LOCATION,
            urlList: fullUrls
          })
        });
        results.push({ 
          engine: 'Yandex', 
          status: yandexResponse.status,
          success: yandexResponse.status >= 200 && yandexResponse.status < 300
        });
        console.log(`[IndexNow] Yandex submission: ${yandexResponse.status}`);
      } catch (error) {
        console.error('[IndexNow] Yandex error:', error);
        results.push({ engine: 'Yandex', status: 500, success: false });
      }
    }

    // Submit to Seznam (Czech search engine using IndexNow)
    try {
      const seznamResponse = await fetch('https://search.seznam.cz/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: KEY_LOCATION,
          urlList: fullUrls
        })
      });
      results.push({ 
        engine: 'Seznam', 
        status: seznamResponse.status,
        success: seznamResponse.status >= 200 && seznamResponse.status < 300
      });
    } catch (error) {
      console.error('[IndexNow] Seznam error:', error);
    }

    // Ping Google Sitemap
    if (submitToGoogle) {
      try {
        const googleResponse = await fetch(
          `https://www.google.com/ping?sitemap=https://${HOST}/sitemap.xml`,
          { method: 'GET' }
        );
        results.push({ 
          engine: 'Google Sitemap Ping', 
          status: googleResponse.status,
          success: googleResponse.status >= 200 && googleResponse.status < 300
        });
        console.log(`[IndexNow] Google ping: ${googleResponse.status}`);
      } catch (error) {
        console.error('[IndexNow] Google error:', error);
        results.push({ engine: 'Google Sitemap Ping', status: 500, success: false });
      }
    }

    // Ping Bing Sitemap
    try {
      const bingPingResponse = await fetch(
        `https://www.bing.com/ping?sitemap=https://${HOST}/sitemap.xml`,
        { method: 'GET' }
      );
      results.push({ 
        engine: 'Bing Sitemap Ping', 
        status: bingPingResponse.status,
        success: bingPingResponse.status >= 200 && bingPingResponse.status < 300
      });
    } catch (error) {
      console.error('[IndexNow] Bing sitemap error:', error);
    }

    // Log submission to database
    try {
      const { error: dbError } = await supabase
        .from('indexnow_submissions')
        .insert({
          urls: fullUrls,
          status: results.every(r => r.success) ? 'success' : results.some(r => r.success) ? 'partial' : 'failed',
          response: {
            results,
            submittedCount: fullUrls.length,
            timestamp: new Date().toISOString()
          }
        });

      if (dbError) {
        console.error('[IndexNow] Database error:', dbError);
      }
    } catch (dbError) {
      console.error('[IndexNow] Database insert error:', dbError);
    }

    // Get recent submission history
    let recentSubmissions: any[] = [];
    try {
      const { data } = await supabase
        .from('indexnow_submissions')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(10);
      recentSubmissions = data || [];
    } catch (error) {
      console.error('[IndexNow] Failed to fetch history:', error);
    }

    const successCount = results.filter(r => r.success).length;
    console.log(`[IndexNow] Complete - ${successCount}/${results.length} engines succeeded`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Submitted ${fullUrls.length} URLs to ${results.length} search engines`,
        urlsSubmitted: fullUrls.length,
        results,
        successRate: `${successCount}/${results.length}`,
        history: recentSubmissions
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[IndexNow] Error:', error);

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
          response: { error: error instanceof Error ? error.message : 'Unknown error' }
        });
    } catch (logError) {
      console.error('[IndexNow] Failed to log error:', logError);
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
