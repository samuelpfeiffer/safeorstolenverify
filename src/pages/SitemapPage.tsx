import React, { useEffect, useState } from 'react';
import { OptimizedContent } from '@/components/seo/OptimizedContent';
import { InternalLinking } from '@/components/navigation/InternalLinking';
import { Download, ExternalLink, Map, CheckCircle } from 'lucide-react';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  category: string;
}

export default function SitemapPage() {
  const [sitemapUrls, setSitemapUrls] = useState<SitemapUrl[]>([]);

  useEffect(() => {
    // Generate key sitemap URLs
    const urls: SitemapUrl[] = [
      { loc: '/', lastmod: '2025-01-20', changefreq: 'daily', priority: 1.0, category: 'Home' },
      { loc: '/imei-check', lastmod: '2025-01-20', changefreq: 'weekly', priority: 0.9, category: 'Verification' },
      { loc: '/vin-verification', lastmod: '2025-01-20', changefreq: 'weekly', priority: 0.9, category: 'Verification' },
      { loc: '/stolen-item-checker', lastmod: '2025-01-20', changefreq: 'weekly', priority: 0.9, category: 'Verification' },
      { loc: '/ultimate-guide-buying-safely', lastmod: '2025-01-20', changefreq: 'monthly', priority: 0.8, category: 'Guides' },
      { loc: '/how-it-works', lastmod: '2025-01-20', changefreq: 'monthly', priority: 0.8, category: 'Guides' },
      { loc: '/marketplace-integration', lastmod: '2025-01-20', changefreq: 'monthly', priority: 0.7, category: 'Business' },
      { loc: '/about', lastmod: '2025-01-20', changefreq: 'monthly', priority: 0.6, category: 'Company' },
    ];
    setSitemapUrls(urls);
  }, []);

  return (
    <>
      <OptimizedContent 
        pageType="about"
        customTitle="SafeOrStolen Sitemap - Complete Site Navigation"
        customDescription="Browse SafeOrStolen's sitemap including verification services, guides, and business solutions."
        keywords={['sitemap', 'site navigation', 'SafeOrStolen pages']}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SafeOrStolen Sitemap</h1>
            <p className="text-xl text-gray-600">Complete navigation to all verification services and resources</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">URL</th>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                {sitemapUrls.map((url) => (
                  <tr key={url.loc} className="border-t">
                    <td className="px-6 py-4">
                      <a href={url.loc} className="text-blue-600 hover:text-blue-800">
                        {url.loc === '/' ? 'Homepage' : url.loc}
                      </a>
                    </td>
                    <td className="px-6 py-4">{url.category}</td>
                    <td className="px-6 py-4">{url.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <InternalLinking currentPage="/sitemap" />
    </>
  );
}