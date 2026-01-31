/**
 * Centralized SEO Configuration
 * Single source of truth for SEO defaults across SafeOrStolen
 */

export const SEO_CONFIG = {
  siteName: 'SafeOrStolen',
  siteUrl: 'https://safeorstolen.com',
  defaultTitle: 'SafeOrStolen - Carfax for Everything - Buy and Sell',
  titleTemplate: '%s | SafeOrStolen',
  defaultDescription: '3-second verification for all secondhand items. Check serial numbers, IMEI, VIN, license plates, firearms. Mobile app with barcode scanning. Free trial.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@safeorstolen',
  facebookAppId: '',
  
  // GSC Configuration
  gscPropertyUrl: 'sc-domain:safeorstolen.com',
  gscSitemapUrl: 'https://safeorstolen.com/sitemap.xml',
  
  // Core pages for monitoring (must be real, indexable routes)
  priorityUrls: [
    '/',
    '/verify',
    '/pricing',
    '/about',
    '/how-it-works',
    '/faq',
    '/app',
    '/download',
    '/blog',
    '/testimonials',
  ] as const,
  
  // Keywords
  primaryKeywords: [
    'stolen item checker',
    'verify serial number',
    'IMEI checker',
    'VIN checker',
    'license plate lookup',
    'firearms verification',
    'secondhand verification',
    'mobile app',
  ] as const,
  
  // Social & External Profiles
  social: {
    twitter: 'https://twitter.com/safeorstolen',
    facebook: 'https://facebook.com/safeorstolen',
    linkedin: 'https://linkedin.com/company/safeorstolen',
    youtube: 'https://www.youtube.com/@safeorstolenoffically',
    youtubeHandle: '@safeorstolenoffically',
    crunchbase: 'https://www.crunchbase.com/organization/safe-or-stolen',
    trustpilot: 'https://www.trustpilot.com/review/safeorstolen.com',
    prlog: 'https://biz.prlog.org/SafeOrStolen/',
  },
} as const;

export type SEOConfigType = typeof SEO_CONFIG;