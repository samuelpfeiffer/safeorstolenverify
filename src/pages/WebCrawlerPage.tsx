import { PageSEO } from '@/components/seo/PageSEO';
import { CrawlForm } from '@/components/crawler/CrawlForm';
import { Shield } from 'lucide-react';

export default function WebCrawlerPage() {
  return (
    <>
      <PageSEO
        title="Web Crawler - Extract Content from Websites | SafeOrStolen"
        description="Use our advanced web crawler to extract and analyze content from websites. Powered by Firecrawl API for reliable data extraction."
        keywords="web crawler, web scraping, content extraction, Firecrawl, website analysis"
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced Web Crawling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Website Content Crawler
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Extract and analyze content from any website with our powerful crawling tool. Perfect for research, data collection, and content analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Crawler Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CrawlForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Crawler Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Multi-Page Crawling</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically discover and crawl multiple pages from a website
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Content Extraction</h3>
                <p className="text-sm text-muted-foreground">
                  Extract clean content in Markdown or HTML format
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Smart Filtering</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on main content while filtering out navigation and ads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
