import { supabase } from '@/integrations/supabase/client';

/**
 * Submit URLs to IndexNow API for instant search engine notification
 * Supported by Bing, Yandex, and other search engines
 */
export async function submitToIndexNow(urls: string[]) {
  try {
    const { data, error } = await supabase.functions.invoke('indexnow-submit', {
      body: { urls }
    });
    
    if (error) throw error;
    
    console.log('IndexNow submission successful:', data);
    return { success: true, data };
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return { success: false, error };
  }
}

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrlToIndexNow(url: string) {
  return submitToIndexNow([url]);
}

/**
 * Ping Google and Bing sitemaps
 */
export async function pingSitemaps() {
  const host = 'safeorstolen.com';
  
  try {
    // This is done server-side in the IndexNow edge function
    // Client-side we just trigger it with an empty array
    return submitToIndexNow(['/sitemap.xml']);
  } catch (error) {
    console.error('Sitemap ping failed:', error);
    return { success: false, error };
  }
}
