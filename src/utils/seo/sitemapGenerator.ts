/**
 * Sitemap Generator (Runtime)
 *
 * This module is used by admin tooling and internal utilities.
 * It MUST ONLY output real routes that exist in AppRoutes.
 */

import { generateStaticSitemapEntries, generateSitemapXML, generateRobotsTxt as generateRobotsTxtFromStatic } from './sitemap';

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

/**
 * Generate sitemap XML for all indexable routes.
 */
export const generateSitemap = async (): Promise<string> => {
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapEntry[] = generateStaticSitemapEntries().map((e) => ({
    url: e.url,
    lastmod: e.lastmod || today,
    changefreq: e.changefreq || 'weekly',
    priority: typeof e.priority === 'number' ? e.priority : 0.5,
  }));

  return generateSitemapXML(
    entries.map((e) => ({
      url: e.url,
      lastmod: e.lastmod,
      changefreq: e.changefreq as any,
      priority: e.priority,
    }))
  );
};

/**
 * Generate XML sitemap string
 */
export const generateXMLSitemap = (entries: SitemapEntry[]): string => {
  return generateSitemapXML(
    entries.map((e) => ({
      url: e.url,
      lastmod: e.lastmod,
      changefreq: e.changefreq as any,
      priority: e.priority,
    }))
  );
};

/**
 * Generate robots.txt content with sitemap reference
 */
export const generateRobotsTxt = (): string => {
  return generateRobotsTxtFromStatic();
};
