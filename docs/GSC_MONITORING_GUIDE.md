# Google Search Console Monitoring & Fast-Track Indexing

## Overview

This guide covers the GSC monitoring dashboard and IndexNow API integration for accelerating indexing.

## Features Implemented

### 1. GSC Monitoring Dashboard (`/admin/gsc-status`)

**Access**: Visit `https://safeorstolen.com/admin/gsc-status`

**Features**:
- Priority URL checklist with submission tracking
- Progress tracking (submitted vs remaining URLs)
- Direct links to GSC URL Inspection tool
- Daily workflow instructions
- Day-by-day submission schedule

**Daily Workflow**:
1. Submit 2-3 URLs per day using GSC URL Inspection
2. Check off submitted URLs in dashboard
3. Monitor indexing progress in GSC Coverage Report
4. Track clicks and impressions in Performance Report

### 2. IndexNow API Integration

**What is IndexNow?**
IndexNow is a protocol supported by Bing, Yandex, and other search engines for instant URL submission.

**How to Use**:
```typescript
import { submitToIndexNow, submitUrlToIndexNow } from '@/utils/indexnow';

// Submit multiple URLs
await submitToIndexNow(['/verify', '/app', '/pricing']);

// Submit single URL
await submitUrlToIndexNow('/california-vin-lookup');
```

**Edge Function**: `supabase/functions/indexnow-submit/index.ts`
- Submits URLs to IndexNow API
- Pings Google sitemap
- Pings Bing sitemap
- Public endpoint (no JWT required)

### 3. Required Setup

**Add IndexNow Secret**:
1. Generate a random 32-character key
2. Add to Supabase secrets: `INDEXNOW_KEY=your_random_key`
3. Key file already created at: `public/indexnow-key.txt`

**Verify Key**:
- Visit: `https://safeorstolen.com/indexnow-key.txt`
- Should return: your 32-character key

## Priority URL Schedule

### Day 1 - Critical URLs (Submit Immediately)
- `/` (Homepage)
- `/verify` (Main verification page)
- `/imei-checker` (IMEI landing page)
- `/vin-checker` (VIN landing page)
- `/app` (Mobile app download)

### Days 2-7 - High Priority URLs
- Day 2: `/serial-number-checker`, `/how-it-works`
- Day 3: `/check-phone`, `/check-car`, `/pricing`
- Day 4: `/california-vin-lookup`, `/texas-vin-lookup`
- Day 5: `/florida-vin-lookup`, `/new-york-vin-lookup`
- Day 6: `/check-bike`, `/faq`
- Day 7: `/about`

### Weeks 2-4 - Medium Priority
- State VIN pages (remaining 46 states)
- Blog articles
- Business pages
- Comparison pages

## How to Submit URLs to GSC

### Method 1: Manual URL Inspection (Recommended for Top 10)
1. Open GSC: https://search.google.com/search-console
2. Select property: `sc-domain:safeorstolen.com`
3. Click "URL Inspection" in left sidebar
4. Enter full URL: `https://safeorstolen.com/verify`
5. Click "Test Live URL"
6. Click "Request Indexing"
7. Wait for confirmation
8. Mark as submitted in dashboard

**Limit**: 10 URLs per day

### Method 2: IndexNow API (Automated)
```typescript
// From admin dashboard
handleIndexNowSubmit(['/verify', '/app', '/pricing']);

// Or programmatically
import { submitToIndexNow } from '@/utils/indexnow';
await submitToIndexNow(['/new-page', '/updated-page']);
```

**Benefits**:
- No daily limit
- Instant notification to Bing/Yandex
- Automatic sitemap ping

### Method 3: Sitemap Re-submission
1. Open GSC → Sitemaps
2. Click "Remove" on existing sitemap
3. Add sitemap URL: `https://safeorstolen.com/sitemap.xml`
4. Click "Submit"

**When to use**: After bulk content updates

## Monitoring & Verification

### Check Indexing Status

**In GSC**:
1. Go to "Pages" → "Indexing" report
2. Check "Indexed" count (should increase weekly)
3. Review "Not indexed" reasons
4. Fix any "Server error 5xx" or "Soft 404" immediately

**Expected Timeline**:
- Week 1: 10-15 pages indexed
- Week 2: 20-30 pages indexed
- Week 3: 40-50 pages indexed
- Month 1: 60+ pages indexed

### Track Performance

**In GSC**:
1. Go to "Performance" → "Search results"
2. Compare "Last 28 days" vs "Previous period"
3. Monitor:
   - Total clicks (should increase 10-20% weekly)
   - Total impressions (should increase 20-30% weekly)
   - Average CTR (target: 3-5%)
   - Average position (target: top 20)

### Success Metrics

**Week 1**:
- ✅ 10 priority URLs indexed
- ✅ 50+ impressions per day
- ✅ 5+ clicks per day

**Month 1**:
- ✅ 60+ pages indexed
- ✅ 500+ impressions per day
- ✅ 50+ clicks per day
- ✅ 1,000+ monthly visitors

**Month 3**:
- ✅ 80+ pages indexed
- ✅ 2,000+ impressions per day
- ✅ 200+ clicks per day
- ✅ 15,000+ monthly visitors

## Troubleshooting

### Issue: URLs Not Indexing
**Solution**:
1. Check GSC "Coverage" report for specific error
2. Fix errors (soft 404, server 5xx, duplicate canonical)
3. Re-submit via URL Inspection
4. Wait 7-14 days for re-crawl

### Issue: IndexNow Submission Failed
**Solution**:
1. Check edge function logs: `/admin/autonomous-ai` → Edge Functions
2. Verify `INDEXNOW_KEY` secret exists
3. Test endpoint: `curl -X POST https://[project].supabase.co/functions/v1/indexnow-submit -d '{"urls":["/test"]}'`

### Issue: Soft 404 Errors
**Solution**:
1. Add more content (minimum 300 words)
2. Add internal links to page
3. Ensure proper H1 tag and meta description
4. Re-submit to GSC

### Issue: Server 5xx Errors
**Solution**:
1. Check error logs in Supabase
2. Verify RLS policies on database tables
3. Add error handling to components
4. Test page in incognito mode

## Best Practices

1. **Submit 2-3 URLs daily** - Don't exceed GSC's 10/day limit
2. **Mark submissions in dashboard** - Track progress systematically
3. **Monitor weekly** - Check GSC every Monday for new issues
4. **Fix errors immediately** - Address 5xx and soft 404s within 24 hours
5. **Update sitemap** - Re-submit after major content changes
6. **Use IndexNow for new pages** - Instant notification to search engines
7. **Internal linking** - Link to new pages from existing high-authority pages
8. **Content quality** - Ensure 1000+ words, unique value, proper formatting

## Related Documentation

- [GSC Submission Checklist](./GSC_SUBMISSION_CHECKLIST.md)
- [Indexing Issues Fixed](../INDEXING_ISSUES_FIXED.md)
- [SEO Indexing](./SEO_INDEXING.md)
- [Visibility Assurance](./VISIBILITY_ASSURANCE.md)

## Support

If indexing issues persist after 30 days:
1. Review [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/overview)
2. Check [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Contact support@safeorstolen.com with GSC screenshots
