/**
 * Central Schema Registry - Tracks all pages that should have structured data
 * Target: 50+ valid schemas across the site
 */

export interface PageSchemaConfig {
  path: string;
  schemaTypes: string[];
  priority: 'critical' | 'high' | 'medium';
  implemented: boolean;
}

export const SCHEMA_REGISTRY: PageSchemaConfig[] = [
  // Core Pages (Critical - 10 schemas minimum)
  { path: '/', schemaTypes: ['Service', 'SoftwareApplication'], priority: 'critical', implemented: true }, // Organization+WebSite in MasterSEO
  { path: '/verify', schemaTypes: ['Service', 'SoftwareApplication', 'HowTo'], priority: 'critical', implemented: true },
  { path: '/pricing', schemaTypes: ['Service', 'Offer'], priority: 'critical', implemented: true }, // 6 schemas
  { path: '/about', schemaTypes: ['AboutPage', 'Organization'], priority: 'critical', implemented: true },
  { path: '/how-it-works', schemaTypes: ['HowTo', 'Service'], priority: 'critical', implemented: false },
  { path: '/faq', schemaTypes: ['FAQPage'], priority: 'critical', implemented: true },
  { path: '/contact', schemaTypes: ['ContactPage', 'ContactPoint'], priority: 'critical', implemented: false },
  { path: '/app', schemaTypes: ['SoftwareApplication'], priority: 'critical', implemented: true },
  { path: '/terms', schemaTypes: ['WebPage'], priority: 'critical', implemented: true },
  { path: '/privacy', schemaTypes: ['WebPage'], priority: 'critical', implemented: false },

  // Item-Specific Verification Pages (High - 10 schemas)
  { path: '/check-phone', schemaTypes: ['Service', 'HowTo'], priority: 'high', implemented: false },
  { path: '/check-car', schemaTypes: ['Service', 'HowTo'], priority: 'high', implemented: false },
  { path: '/check-electronics', schemaTypes: ['Service'], priority: 'high', implemented: false },
  { path: '/check-bike', schemaTypes: ['Service'], priority: 'high', implemented: false },
  { path: '/firearms-check', schemaTypes: ['Service'], priority: 'high', implemented: false },
  { path: '/serial-number-checker', schemaTypes: ['Service', 'SoftwareApplication'], priority: 'high', implemented: false },
  { path: '/license-plate-lookup', schemaTypes: ['Service'], priority: 'high', implemented: false },
  { path: '/stolen-item-lookup', schemaTypes: ['Service'], priority: 'high', implemented: false },
  { path: '/stolen-goods-checker', schemaTypes: ['Service'], priority: 'high', implemented: false },
  { path: '/item-categories', schemaTypes: ['CollectionPage'], priority: 'high', implemented: false },

  // Educational/Guide Pages (High - 10 schemas)
  { path: '/guides/how-to-check-stolen-items', schemaTypes: ['HowTo', 'Article'], priority: 'high', implemented: false },
  { path: '/guides/imei-blacklist-explained', schemaTypes: ['Article'], priority: 'high', implemented: false },
  { path: '/ultimate-guide', schemaTypes: ['Article', 'HowTo'], priority: 'high', implemented: false },
  { path: '/buyer-guide', schemaTypes: ['Article'], priority: 'high', implemented: false },
  { path: '/seller-guide', schemaTypes: ['Article'], priority: 'high', implemented: false },
  { path: '/avoid-stolen-goods', schemaTypes: ['Article'], priority: 'high', implemented: false },
  { path: '/data-sources', schemaTypes: ['WebPage'], priority: 'high', implemented: false },
  { path: '/trust-verification', schemaTypes: ['WebPage'], priority: 'high', implemented: false },
  { path: '/accuracy', schemaTypes: ['WebPage'], priority: 'high', implemented: false },
  { path: '/transparency', schemaTypes: ['WebPage'], priority: 'high', implemented: false },

  // Blog Posts (Medium - 10 schemas)
  { path: '/blog', schemaTypes: ['Blog', 'CollectionPage'], priority: 'medium', implemented: false },
  { path: '/blog/complete-imei-guide-protect-yourself', schemaTypes: ['Article', 'BlogPosting'], priority: 'medium', implemented: true },
  { path: '/blog/vin-verification-complete-guide-used-cars', schemaTypes: ['Article', 'BlogPosting'], priority: 'medium', implemented: true },
  { path: '/blog/ultimate-marketplace-buyers-guide', schemaTypes: ['Article', 'BlogPosting'], priority: 'medium', implemented: true },
  { path: '/blog/verification-methodology', schemaTypes: ['Article'], priority: 'medium', implemented: true },
  { path: '/blog/data-source-credibility', schemaTypes: ['Article'], priority: 'medium', implemented: false },
  { path: '/blog/real-user-stories', schemaTypes: ['Article', 'Review'], priority: 'medium', implemented: false },
  { path: '/blog/enterprise-security', schemaTypes: ['Article'], priority: 'medium', implemented: false },
  { path: '/blog/mobile-app-features', schemaTypes: ['Article'], priority: 'medium', implemented: false },
  { path: '/blog/2024-theft-trends-report', schemaTypes: ['Article', 'Report'], priority: 'medium', implemented: false },

  // Business Pages (Medium - 10 schemas)
  { path: '/for-brands', schemaTypes: ['Service', 'Offer'], priority: 'medium', implemented: false },
  { path: '/auction-houses', schemaTypes: ['Service'], priority: 'medium', implemented: false },
  { path: '/pawn-shops', schemaTypes: ['Service'], priority: 'medium', implemented: false },
  { path: '/integrations', schemaTypes: ['SoftwareApplication'], priority: 'medium', implemented: false },
  { path: '/marketplace-integration', schemaTypes: ['Service'], priority: 'medium', implemented: false },
  { path: '/api-docs', schemaTypes: ['TechArticle'], priority: 'medium', implemented: false },
  { path: '/partnerships', schemaTypes: ['WebPage'], priority: 'medium', implemented: false },
  { path: '/case-studies', schemaTypes: ['CollectionPage'], priority: 'medium', implemented: false },
  { path: '/press-release', schemaTypes: ['NewsArticle'], priority: 'medium', implemented: false },
  { path: '/roadmap', schemaTypes: ['WebPage'], priority: 'medium', implemented: false },
];

/**
 * Get schema statistics
 */
export function getSchemaStats() {
  const total = SCHEMA_REGISTRY.length;
  const implemented = SCHEMA_REGISTRY.filter(p => p.implemented).length;
  const critical = SCHEMA_REGISTRY.filter(p => p.priority === 'critical' && p.implemented).length;
  const criticalTotal = SCHEMA_REGISTRY.filter(p => p.priority === 'critical').length;
  const high = SCHEMA_REGISTRY.filter(p => p.priority === 'high' && p.implemented).length;
  const highTotal = SCHEMA_REGISTRY.filter(p => p.priority === 'high').length;
  
  return {
    total,
    implemented,
    missing: total - implemented,
    percentage: Math.round((implemented / total) * 100),
    byPriority: {
      critical: { implemented: critical, total: criticalTotal },
      high: { implemented: high, total: highTotal },
      medium: { implemented: implemented - critical - high, total: total - criticalTotal - highTotal },
    }
  };
}

/**
 * Get pages missing schemas
 */
export function getMissingSchemas(priority?: 'critical' | 'high' | 'medium') {
  let pages = SCHEMA_REGISTRY.filter(p => !p.implemented);
  if (priority) {
    pages = pages.filter(p => p.priority === priority);
  }
  return pages;
}

/**
 * Get all schema types used across site
 */
export function getAllSchemaTypes() {
  const types = new Set<string>();
  SCHEMA_REGISTRY.forEach(page => {
    page.schemaTypes.forEach(type => types.add(type));
  });
  return Array.from(types).sort();
}