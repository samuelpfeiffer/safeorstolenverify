/**
 * Centralized SEO Configuration
 * Single source of truth for SEO defaults across SafeOrStolen
 */

export const SEO_CONFIG = {
  siteName: 'SafeOrStolen',
  siteUrl: 'https://safeorstolen.com',
  defaultTitle: 'Is This Phone Stolen? Check iPhones, Cars & Items Before Buying | SafeOrStolen',
  titleTemplate: '%s | SafeOrStolen',
  defaultDescription: 'Check if phones, cars, bikes are stolen before buying. Free instant verification - just enter the serial number. Used on Facebook Marketplace, eBay, Craigslist. Protect yourself.',
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
  
  // Keywords - Natural language (how real customers search)
  primaryKeywords: [
    'is this phone stolen',
    'how to check if phone is stolen',
    'check if car is stolen',
    'is my phone stolen',
    'how to tell if iPhone is stolen',
    'check serial number before buying',
    'facebook marketplace stolen phone check',
    'buying used iPhone what to check',
  ] as const,
  
  // Social & External Profiles
  social: {
    twitter: 'https://twitter.com/safeorstolen',
    facebook: 'https://facebook.com/safeorstolen',
    linkedin: 'https://linkedin.com/company/safeorstolen',
    youtube: 'https://www.youtube.com/@safeorstolen',
    crunchbase: 'https://www.crunchbase.com/organization/safe-or-stolen',
    trustpilot: 'https://www.trustpilot.com/review/safeorstolen.com',
    prlog: 'https://biz.prlog.org/SafeOrStolen/',
  },
} as const;

export type SEOConfigType = typeof SEO_CONFIG;