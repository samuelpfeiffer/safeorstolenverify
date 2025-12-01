/**
 * Submit all 158 URLs to IndexNow for instant discovery
 * Run: npx tsx src/scripts/submitAllToIndexNow.ts
 */

import { submitBatchToIndexNow, getAllSitemapUrls } from '../utils/seo/indexNowSubmission';

async function submitAll() {
  console.log('🚀 Starting IndexNow submission for all 158 URLs...\n');
  
  const allUrls = getAllSitemapUrls();
  console.log(`📊 Total URLs to submit: ${allUrls.length}\n`);
  
  // IndexNow supports up to 10,000 URLs per batch, so we can submit all at once
  const result = await submitBatchToIndexNow(allUrls);
  
  if (result.success) {
    console.log('✅', result.message);
    console.log(`🔍 Search engines notified: ${result.engine}\n`);
    console.log('⏱️  Expected indexing timeline:');
    console.log('   - Bing: 1-3 days');
    console.log('   - Google: 1-2 weeks');
    console.log('   - Yandex: 3-7 days\n');
  } else {
    console.error('❌', result.message);
    process.exit(1);
  }
}

// Run
submitAll().catch(console.error);
