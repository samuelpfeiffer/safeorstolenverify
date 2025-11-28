/**
 * Trigger IndexNow API to notify search engines of sitemap update
 * Run after updating sitemap or making significant site changes
 */
import { submitToIndexNow, pingSitemaps } from '@/utils/indexnow';

async function triggerReindexing() {
  console.log('🚀 Starting IndexNow revalidation...');
  
  // Priority URLs to immediately notify search engines about
  const priorityUrls = [
    'https://safeorstolen.com/',
    'https://safeorstolen.com/verify',
    'https://safeorstolen.com/app',
    'https://safeorstolen.com/pricing',
    'https://safeorstolen.com/imei-checker',
    'https://safeorstolen.com/vin-checker',
    'https://safeorstolen.com/check-phone',
    'https://safeorstolen.com/check-car',
    'https://safeorstolen.com/sitemap.xml'
  ];
  
  try {
    // Ping sitemap
    console.log('📋 Pinging sitemap...');
    await pingSitemaps();
    
    // Submit priority URLs
    console.log('🎯 Submitting priority URLs...');
    const result = await submitToIndexNow(priorityUrls);
    
    if (result.success) {
      console.log('✅ IndexNow revalidation successful!');
      console.log('🔍 Search engines notified of updates');
    } else {
      console.error('❌ IndexNow revalidation failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Error during revalidation:', error);
  }
}

// Execute
triggerReindexing();
