# SEO Indexing & URL Configuration

## Overview
This document outlines all URLs configured for search engine indexing on SafeOrStolen.com.

## Sitemap Configuration

### Location
All sitemap URLs are configured in: `src/config/sitemap-urls.ts`

### Usage

```typescript
import { 
  SITEMAP_URLS, 
  generateAbsoluteURLs, 
  getURLsByPriority,
  generateSitemapXML 
} from '@/config/sitemap-urls';

// Get all URLs
const allUrls = SITEMAP_URLS;

// Get high-priority URLs only
const highPriorityUrls = getURLsByPriority(0.8);

// Generate absolute URLs
const absoluteUrls = generateAbsoluteURLs();

// Generate sitemap XML
const xml = generateSitemapXML();
```

## URL Categories

### Core Verification Pages (Priority: 0.9)
- `/stolen-item-checker` - Main stolen item verification
- `/imei-check` - IMEI/phone verification
- `/vin-verification` - Vehicle VIN verification
- `/serial-number-checker` - Serial number lookup
- `/check` - Generic check page

### Item-Specific Verification (Priority: 0.8)
- `/check-phone` - Phone verification
- `/check-car` - Vehicle verification
- `/check-electronics` - Electronics verification
- `/check-bike` - Bicycle verification
- `/firearms-check` - Firearms verification

### Educational Content (Priority: 0.7-0.8)
- `/guides/how-to-check-stolen-items`
- `/guides/imei-blacklist-explained`
- `/ultimate-guide`
- `/buyer-guide`
- `/seller-guide`
- `/how-to-check-if-laptop-stolen`
- `/buy-used-electronics-safely`

### Blog Content (Priority: 0.7-0.8)
- `/blog` - Main blog page
- `/blog/data-source-credibility`
- `/blog/verification-methodology`
- `/blog/complete-verification-guide`
- `/blog/enterprise-security`
- `/blog/2024-theft-trends-report`

### Company Information (Priority: 0.7-0.8)
- `/about` - Company overview
- `/how-it-works` - Service explanation
- `/our-story` - Company history
- `/our-team` - Team information
- `/case-studies` - Success stories

### Trust & Transparency (Priority: 0.7)
- `/trust-verification` - Trust signals
- `/data-sources` - Data source information
- `/transparency` - Transparency report
- `/accuracy` - Accuracy metrics
- `/service-limitations` - Service scope

### Pricing & Plans (Priority: 0.8)
- `/pricing` - Pricing plans
- `/subscriptions` - Subscription options

### Comparison Pages (Priority: 0.7)
- `/vs-checkmend` - Competitor comparison
- `/vs/checkmend`
- `/comparison/checkmend`

### Legal Pages (Priority: 0.5)
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/disclaimer` - Legal disclaimer
- `/cookies` - Cookie policy
- `/refunds` - Refund policy

## Robots.txt Configuration

### Location
`public/robots.txt`

### Allowed URLs
All public-facing pages are allowed for crawling, including:
- Core verification pages
- Guides and educational content
- Blog posts
- Company information
- Legal pages

### Disallowed URLs
Private and authenticated areas are blocked:
- `/auth` - Authentication pages
- `/dashboard` - User dashboard
- `/admin/` - Admin panel
- `/profile/` - User profiles
- `/search-history/` - Private search history

## Change Frequencies

- **Daily**: Homepage, verification tools, blog index
- **Weekly**: Service pages, specific verification tools
- **Monthly**: Guides, company info, comparison pages
- **Yearly**: Legal pages

## Priority Levels

- **1.0**: Homepage only
- **0.9**: Core verification tools
- **0.8**: Main service pages, guides
- **0.7**: Secondary pages, blog posts
- **0.6**: Community, utility pages
- **0.5**: Legal, policy pages

## Sitemap Submission

### Google Search Console
1. Submit: `https://safeorstolen.com/sitemap.xml`
2. Submit: `https://safeorstolen.com/feed.xml`

### Bing Webmaster Tools
1. Submit: `https://safeorstolen.com/sitemap.xml`
2. Submit: `https://safeorstolen.com/feed.xml`

## Adding New URLs

When adding a new page:

1. Add route in `src/core/routing/AppRoutes.tsx`
2. Add URL to `src/config/sitemap-urls.ts`:
   ```typescript
   { 
     path: '/new-page', 
     priority: 0.7, 
     changefreq: 'weekly' 
   }
   ```
3. Update navigation if needed
4. Regenerate sitemap

## SEO Best Practices

### For All Pages
1. Include canonical URL
2. Add meta description (155-160 chars)
3. Use H1 tag with main keyword
4. Optimize images with alt text
5. Add structured data (JSON-LD)
6. Implement breadcrumbs

### For High-Priority Pages
1. Update content regularly
2. Build internal links
3. Monitor Core Web Vitals
4. Optimize for featured snippets
5. Add FAQ schema when applicable

## Monitoring

### Key Metrics to Track
- Index coverage (Google Search Console)
- Crawl stats and errors
- Page rankings for target keywords
- Click-through rates
- Core Web Vitals scores

### Tools
- Google Search Console
- Bing Webmaster Tools
- Google Analytics
- Lighthouse CI

## Related Documentation
- [Backend Integration](./BACKEND_INTEGRATION.md)
- [Architecture Overview](./ARCHITECTURE.md)
- SEO components in `src/components/seo/`
- Analytics in `src/utils/seo/analyticsOptimizer.ts`
