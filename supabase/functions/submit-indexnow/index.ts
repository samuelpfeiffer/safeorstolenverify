import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// IndexNow key - stored in Supabase secrets
const INDEXNOW_KEY = Deno.env.get('INDEXNOW_KEY') || 'safeorstolen-indexnow-key';
const SITE_URL = 'https://safeorstolen.com';

// Priority URLs for indexing - focus on high-value pages
const PRIORITY_URLS = [
  // Core pages
  '/',
  '/verify',
  '/pricing',
  '/about',
  '/faq',
  '/how-it-works',
  '/app',
  '/features',
  '/resource-center',
  '/check',
  '/contact',
  '/testimonials',
  
  // Guides
  '/guides/ebay-buyer-protection',
  
  // High-value item pages
  '/imei-checker',
  '/vin-checker',
  '/serial-number-checker',
  '/check-phone',
  '/check-car',
  '/check-laptop',
  '/check-bike',
  '/check-electronics',
  '/firearms-check',
  '/license-plate-lookup',
  
  // Blog posts
  '/blog',
  '/blog/ps5-stolen-check-guide',
  '/blog/how-to-check-if-phone-stolen',
  '/blog/complete-vin-guide',
  '/blog/how-to-check-if-iphone-stolen',
  '/blog/facebook-marketplace-scams',
  '/blog/complete-imei-guide-protect-yourself',
  
  // Comparison pages
  '/compare',
  '/vs-checkmend',
  '/vs-carfax',
  '/vs-imeiinfo',
  
  // Marketplace pages
  '/facebook-marketplace-stolen-check',
  '/craigslist-safety-verification',
  '/offerup-verify-not-stolen',
  '/ebay-stolen-item-check',
  
  // Top state pages
  '/california-vin-lookup',
  '/texas-vin-lookup',
  '/florida-vin-lookup',
  '/new-york-vin-lookup',
  '/california-license-plate-lookup',
  '/texas-license-plate-lookup',
  
  // Business pages
  '/for-pawn-shops',
  '/for-dealers',
  '/for-marketplaces',
  '/for-businesses',
];

async function submitToIndexNow(urls: string[]): Promise<{ success: boolean; submitted: number; errors: string[] }> {
  const errors: string[] = [];
  
  // IndexNow supports batch submission
  const fullUrls = urls.map(url => `${SITE_URL}${url}`);
  
  // Submit to Bing IndexNow (also covers Yandex via their partnership)
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'safeorstolen.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      errors.push(`IndexNow API error: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    errors.push(`IndexNow submission failed: ${error.message}`);
  }

  // Also submit to Bing directly
  try {
    const bingResponse = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'safeorstolen.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls,
      }),
    });

    if (!bingResponse.ok) {
      const errorText = await bingResponse.text();
      console.log(`Bing IndexNow response: ${bingResponse.status} - ${errorText}`);
    }
  } catch (error) {
    console.log(`Bing submission note: ${error.message}`);
  }

  // Submit to Yandex
  try {
    const yandexResponse = await fetch('https://yandex.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'safeorstolen.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: fullUrls,
      }),
    });

    if (!yandexResponse.ok) {
      console.log(`Yandex IndexNow response: ${yandexResponse.status}`);
    }
  } catch (error) {
    console.log(`Yandex submission note: ${error.message}`);
  }

  return {
    success: errors.length === 0,
    submitted: fullUrls.length,
    errors,
  };
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls, submitAll } = await req.json().catch(() => ({ urls: null, submitAll: false }));
    
    let urlsToSubmit: string[];
    
    if (submitAll) {
      urlsToSubmit = PRIORITY_URLS;
    } else if (urls && Array.isArray(urls)) {
      urlsToSubmit = urls;
    } else {
      // Default: submit all priority URLs
      urlsToSubmit = PRIORITY_URLS;
    }

    console.log(`Submitting ${urlsToSubmit.length} URLs to IndexNow...`);
    
    const result = await submitToIndexNow(urlsToSubmit);
    
    console.log(`IndexNow submission complete: ${result.submitted} URLs, ${result.errors.length} errors`);

    return new Response(JSON.stringify({
      success: result.success,
      message: result.success 
        ? `Successfully submitted ${result.submitted} URLs to IndexNow` 
        : `Submitted with ${result.errors.length} errors`,
      submitted: result.submitted,
      urls: urlsToSubmit,
      errors: result.errors,
      timestamp: new Date().toISOString(),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('IndexNow submission error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString(),
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
