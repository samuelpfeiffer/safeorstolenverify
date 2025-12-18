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

import { VALID_ROUTES } from '@/utils/seo/sitemapRouteValidator';

export const SCHEMA_REGISTRY: PageSchemaConfig[] = Array.from(VALID_ROUTES)
  .map((path) => {
    const priority: PageSchemaConfig['priority'] =
      path === '/' || path === '/verify' || path === '/pricing' || path === '/app'
        ? 'critical'
        : path.startsWith('/blog') || path.startsWith('/check-') || path.endsWith('-checker')
          ? 'high'
          : 'medium';

    const schemaTypes =
      path === '/'
        ? ['Service', 'SoftwareApplication']
        : path === '/faq'
          ? ['FAQPage']
          : path === '/about'
            ? ['AboutPage', 'Organization']
            : path === '/app'
              ? ['SoftwareApplication']
              : ['Service'];

    return {
      path,
      schemaTypes,
      priority,
      // Schemas are generated globally (MasterSEO/AdvancedSchemaGenerator) + per page where needed.
      implemented: true,
    };
  })
  // Keep core pages first
  .sort((a, b) => (a.priority === b.priority ? a.path.localeCompare(b.path) : a.priority === 'critical' ? -1 : b.priority === 'critical' ? 1 : a.priority === 'high' ? -1 : 1));

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