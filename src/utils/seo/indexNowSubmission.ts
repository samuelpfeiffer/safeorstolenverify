/**
 * IndexNow Submission Utility
 * Automatically notifies Google, Bing, and other search engines about new/updated URLs
 * https://www.indexnow.org/
 */

const BASE_URL = 'https://safeorstolen.com';
const INDEX_NOW_KEY = '4e8f3a2b1c9d0f6e5a7b8c1d2e3f4g5h'; // Public key for IndexNow

interface IndexNowResponse {
  success: boolean;
  message: string;
  engine?: string;
}

/**
 * Submit single URL to IndexNow (notifies all participating search engines)
 */
export async function submitUrlToIndexNow(url: string): Promise<IndexNowResponse> {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'safeorstolen.com',
        key: INDEX_NOW_KEY,
        keyLocation: `${BASE_URL}/indexnow-key.txt`,
        urlList: [fullUrl]
      })
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `Successfully notified search engines about ${fullUrl}`,
        engine: 'IndexNow (Google, Bing, Yandex, Naver)'
      };
    } else {
      return {
        success: false,
        message: `Failed to submit: ${response.status} ${response.statusText}`
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error submitting to IndexNow: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Submit multiple URLs to IndexNow (batch submission)
 * Maximum 10,000 URLs per request
 */
export async function submitBatchToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  const fullUrls = urls.map(url => 
    url.startsWith('http') ? url : `${BASE_URL}${url}`
  );
  
  // IndexNow supports up to 10,000 URLs per request
  if (fullUrls.length > 10000) {
    return {
      success: false,
      message: 'Too many URLs. Maximum 10,000 per batch.'
    };
  }
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'safeorstolen.com',
        key: INDEX_NOW_KEY,
        keyLocation: `${BASE_URL}/indexnow-key.txt`,
        urlList: fullUrls
      })
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `Successfully submitted ${fullUrls.length} URLs to search engines`,
        engine: 'IndexNow (Google, Bing, Yandex, Naver)'
      };
    } else {
      return {
        success: false,
        message: `Failed to submit batch: ${response.status} ${response.statusText}`
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error submitting batch: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Get all 158 sitemap URLs for IndexNow submission
 */
export function getAllSitemapUrls(): string[] {
  const states = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
    'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
    'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
    'wisconsin', 'wyoming'
  ];

  return [
    // Core pages (10)
    '/',
    '/verify',
    '/app',
    '/pricing',
    '/about',
    '/faq',
    '/how-it-works',
    '/testimonials',
    '/terms',
    '/privacy',
    
    // Main Item Checker Pages (15)
    '/imei-checker',
    '/vin-checker',
    '/serial-number-checker',
    '/check-phone',
    '/vin-checker',
    '/check-electronics',
    '/check-bike',
    '/check-ebike',
    '/check-laptop',
    '/check-boat',
    '/check-appliances',
    '/check-tools',
    '/check-jewelry',
    '/firearms-check',
    '/license-plate-lookup',
    
    // Business Pages (3)
    '/for-pawn-shops',
    '/for-dealers',
    '/for-businesses',
    
    // Comparison Pages (5)
    '/vs-checkmend',
    '/vs-imeiinfo',
    '/vs-swappa',
    '/vs-carfax',
    '/vs-autocheck',
    
    // Blog (1)
    '/blog',
    
    // 50 State License Plate Pages
    ...states.map(state => `/${state}-license-plate-lookup`),
    
    // 50 State VIN Pages
    ...states.map(state => `/${state}-vin-lookup`),
  ];
}

/**
 * Submit entire sitemap to IndexNow
 */
export async function submitFullSitemap(): Promise<IndexNowResponse> {
  const urls = getAllSitemapUrls();
  return submitBatchToIndexNow(urls);
}

/**
 * Submit high-priority pages immediately
 */
export async function submitHighPriorityPages(): Promise<IndexNowResponse> {
  const highPriorityUrls = [
    '/',
    '/verify',
    '/app',
    '/imei-checker',
    '/vin-checker',
    '/check-phone',
    '/vin-checker',
    '/pricing',
  ];
  
  return submitBatchToIndexNow(highPriorityUrls);
}

/**
 * Submit new/updated blog post
 */
export async function submitBlogPost(slug: string): Promise<IndexNowResponse> {
  return submitUrlToIndexNow(`/blog/${slug}`);
}

/**
 * Submit state-specific pages
 */
export async function submitStatePage(state: string, type: 'license-plate' | 'vin'): Promise<IndexNowResponse> {
  const url = type === 'license-plate' 
    ? `/${state}-license-plate-lookup`
    : `/${state}-vin-lookup`;
  
  return submitUrlToIndexNow(url);
}

/**
 * Auto-submit on page update (call from components)
 */
export function autoSubmitPageUpdate(path: string): void {
  // Don't submit in development
  if (import.meta.env.DEV) {
    console.log('[IndexNow] Skipping submission in dev mode:', path);
    return;
  }
  
  // Submit asynchronously without blocking
  submitUrlToIndexNow(path).then(result => {
    if (result.success) {
      console.log('[IndexNow]', result.message);
    } else {
      console.warn('[IndexNow]', result.message);
    }
  });
}
