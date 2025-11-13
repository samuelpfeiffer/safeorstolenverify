/**
 * SEO Utilities - Public API
 * Centralized exports for all SEO-related utilities
 */

// Canonical URL utilities
export {
  getCanonicalUrl,
  normalizeCanonicalUrl,
  isValidCanonicalUrl,
  normalizeUrl,
  getSitemapPriority,
  getChangeFrequency
} from './canonicalUtils';

// Schema validation
export {
  validateProductSchema,
  validateServiceSchema,
  validateArticleSchema,
  validateCanonicalUrl,
  validateSchema,
  logSchemaValidation
} from './schemaValidation';

export type { SchemaValidationResult } from './schemaValidation';

// Social media optimization
export {
  generateOpenGraphTags,
  generateTwitterCardTags,
  getOptimalSocialImageDimensions,
  validateSocialImage,
  generateFacebookTags,
  generateLinkedInTags,
  generateAllSocialTags
} from './socialMediaOptimizer';

// Sitemap generation
export {
  generateSitemap,
  generateXMLSitemap
} from './sitemapGenerator';

export type { SitemapEntry } from './sitemapGenerator';

// Structured data
export {
  createOrganizationSchema,
  createWebsiteSchema,
  createServiceSchema,
  createLocalBusinessSchema,
  createFAQSchema,
  createBreadcrumbSchema,
  createArticleSchema
} from './structuredData';
