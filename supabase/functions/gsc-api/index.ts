import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action');
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get GSC configuration from secrets
    const GSC_CLIENT_ID = Deno.env.get('GSC_CLIENT_ID');
    const GSC_CLIENT_SECRET = Deno.env.get('GSC_CLIENT_SECRET');
    const GSC_REDIRECT_URI = Deno.env.get('GSC_REDIRECT_URI');
    const GSC_PROPERTY_URL = Deno.env.get('GSC_PROPERTY_URL') || 'sc-domain:safeorstolen.com';

    // Check if GSC secrets are configured
    if (!GSC_CLIENT_ID || !GSC_CLIENT_SECRET) {
      return new Response(
        JSON.stringify({
          error: 'GSC API credentials not configured',
          message: 'Please add GSC_CLIENT_ID and GSC_CLIENT_SECRET secrets',
          needsSetup: true
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 503 }
      );
    }

    switch (action) {
      case 'oauth-start': {
        // Generate OAuth URL
        const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
        authUrl.searchParams.set('client_id', GSC_CLIENT_ID);
        authUrl.searchParams.set('redirect_uri', GSC_REDIRECT_URI!);
        authUrl.searchParams.set('response_type', 'code');
        authUrl.searchParams.set('scope', 'https://www.googleapis.com/auth/webmasters.readonly');
        authUrl.searchParams.set('access_type', 'offline');
        authUrl.searchParams.set('prompt', 'consent');
        
        return new Response(
          JSON.stringify({ authUrl: authUrl.toString() }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'oauth-callback': {
        const code = url.searchParams.get('code');
        if (!code) {
          throw new Error('No authorization code provided');
        }

        // Exchange code for tokens
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            code,
            client_id: GSC_CLIENT_ID,
            client_secret: GSC_CLIENT_SECRET,
            redirect_uri: GSC_REDIRECT_URI!,
            grant_type: 'authorization_code',
          }),
        });

        const tokens = await tokenResponse.json();
        
        if (!tokenResponse.ok) {
          throw new Error(`Token exchange failed: ${JSON.stringify(tokens)}`);
        }

        // Get user ID
        const { data: { user } } = await supabaseClient.auth.getUser();
        if (!user) {
          throw new Error('User not authenticated');
        }

        // Store tokens
        const expiresAt = new Date(Date.now() + tokens.expires_in * 1000);
        await supabaseClient.from('gsc_oauth_tokens').upsert({
          user_id: user.id,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expires_at: expiresAt.toISOString(),
          scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
          updated_at: new Date().toISOString(),
        });

        return new Response(
          JSON.stringify({ success: true, message: 'GSC connected successfully' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'url-inspection': {
        const { inspectionUrl } = await req.json();
        
        // Get access token
        const accessToken = await getAccessToken(supabaseClient);
        
        // Call URL Inspection API
        const response = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inspectionUrl,
            siteUrl: GSC_PROPERTY_URL,
            languageCode: 'en-US',
          }),
        });

        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(`URL Inspection failed: ${JSON.stringify(result)}`);
        }

        // Store result
        const indexStatus = result.inspectionResult?.indexStatusResult;
        if (indexStatus) {
          await supabaseClient.from('gsc_url_status').upsert({
            url: inspectionUrl,
            verdict: indexStatus.verdict,
            indexing_state: indexStatus.indexingState,
            coverage_state: indexStatus.coverageState,
            robots_txt_state: indexStatus.robotsTxtState,
            page_fetch_state: indexStatus.pageFetchState,
            last_crawl_time: indexStatus.lastCrawlTime,
            google_canonical: indexStatus.googleCanonical,
            user_canonical: indexStatus.userCanonical,
            crawled_as: indexStatus.crawledAs,
            checked_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        }

        return new Response(
          JSON.stringify(result),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'search-analytics': {
        const { startDate, endDate, dimensions } = await req.json();
        
        const accessToken = await getAccessToken(supabaseClient);
        
        const response = await fetch(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY_URL)}/searchAnalytics/query`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              startDate,
              endDate,
              dimensions: dimensions || ['query', 'page'],
              rowLimit: 1000,
            }),
          }
        );

        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(`Search Analytics failed: ${JSON.stringify(result)}`);
        }

        // Cache result
        await supabaseClient.from('gsc_performance_cache').insert({
          data_type: 'search_analytics',
          query_params: { startDate, endDate, dimensions },
          data: result,
          expires_at: new Date(Date.now() + 3600000).toISOString(), // 1 hour cache
        });

        return new Response(
          JSON.stringify(result),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'sitemaps-list': {
        const accessToken = await getAccessToken(supabaseClient);
        
        const response = await fetch(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY_URL)}/sitemaps`,
          {
            headers: { 'Authorization': `Bearer ${accessToken}` },
          }
        );

        const result = await response.json();
        
        return new Response(
          JSON.stringify(result),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'disconnect': {
        const { data: { user } } = await supabaseClient.auth.getUser();
        if (user) {
          await supabaseClient
            .from('gsc_oauth_tokens')
            .delete()
            .eq('user_id', user.id);
        }
        
        return new Response(
          JSON.stringify({ success: true, message: 'GSC disconnected' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      default:
        throw new Error(`Unknown action: ${action}`);
    }

  } catch (error) {
    console.error('GSC API error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});

async function getAccessToken(supabaseClient: any): Promise<string> {
  const { data: { user } } = await supabaseClient.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data: tokenData, error } = await supabaseClient
    .from('gsc_oauth_tokens')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error || !tokenData) {
    throw new Error('No GSC credentials found. Please connect your Google account.');
  }

  // Check if token is expired
  const expiresAt = new Date(tokenData.expires_at);
  if (expiresAt < new Date()) {
    // Refresh token
    const GSC_CLIENT_ID = Deno.env.get('GSC_CLIENT_ID')!;
    const GSC_CLIENT_SECRET = Deno.env.get('GSC_CLIENT_SECRET')!;

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: GSC_CLIENT_ID,
        client_secret: GSC_CLIENT_SECRET,
        refresh_token: tokenData.refresh_token,
        grant_type: 'refresh_token',
      }),
    });

    const newTokens = await response.json();
    
    if (!response.ok) {
      throw new Error(`Token refresh failed: ${JSON.stringify(newTokens)}`);
    }

    // Update stored tokens
    const newExpiresAt = new Date(Date.now() + newTokens.expires_in * 1000);
    await supabaseClient
      .from('gsc_oauth_tokens')
      .update({
        access_token: newTokens.access_token,
        expires_at: newExpiresAt.toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user.id);

    return newTokens.access_token;
  }

  return tokenData.access_token;
}