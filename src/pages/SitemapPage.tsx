import { useEffect } from 'react';
import { generateSitemapEntries, generateSitemapXML } from '@/utils/seo/sitemap';

const SitemapPage = () => {
  useEffect(() => {
    // Generate sitemap XML
    const entries = generateSitemapEntries();
    const xml = generateSitemapXML(entries);
    
    // Set content type and serve XML
    const response = new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
    
    // For development, log the sitemap
    console.log('Generated sitemap with', entries.length, 'entries');
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">XML Sitemap Generator</h1>
        <p className="text-muted-foreground mb-4">
          This page generates and serves the XML sitemap for search engines.
          Visit <code>/sitemap.xml</code> to view the actual sitemap.
        </p>
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Sitemap Information</h2>
          <ul className="space-y-2 text-sm">
            <li>• Homepage and core service pages</li>
            <li>• All blog posts with metadata</li>
            <li>• Company information pages</li>
            <li>• Legal and support pages</li>
            <li>• Partnership pages</li>
            <li>• Item-specific verification pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;