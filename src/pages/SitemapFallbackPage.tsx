import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { SITEMAP_URLS } from '@/config/sitemap-urls';
import NotFound from '@/pages/NotFound';

// Fallback page that turns any sitemap-listed URL into real, indexable content
const SitemapFallbackPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname || '/';

  const sitemapEntry = SITEMAP_URLS.find((url) => url.path === pathname);

  if (!sitemapEntry) {
    // Not a known sitemap URL – show a real 404
    return <NotFound />;
  }

  // Derive a human-friendly title from the path (last segment, hyphens => spaces)
  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1] || '';
  const readableSegment = lastSegment
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const titleBase = readableSegment || 'Stolen Item Verification';
  const fullTitle = `${titleBase} | SafeOrStolen Stolen Item Checker`;

  const description = `Use SafeOrStolen to check serial numbers, IMEI, and VINs to see if an item is lost, stolen, or safe to handle. This page covers: ${
    readableSegment || 'stolen item verification'
  }.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: titleBase,
    url: `https://safeorstolen.com${pathname}`,
    description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'SafeOrStolen',
      url: 'https://safeorstolen.com',
    },
  };

  return (
    <>
      <PageSEO
        title={fullTitle}
        description={description}
        canonical={pathname}
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-background">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">SafeOrStolen stolen-item checker</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {titleBase || 'Stolen Item Verification'}
            </h1>
          </header>

          <article className="prose prose-invert max-w-none">
            <p>
              This page is part of the SafeOrStolen verification network. Enter a VIN, IMEI, or serial
              number in our main checker to see if an item is reported lost, stolen, or safe to handle.
            </p>
            <p>
              SafeOrStolen connects multiple data sources and intelligence checks to help buyers, sellers,
              and businesses avoid financial loss and legal trouble when dealing with second-hand items.
            </p>
            <p>
              To run a check now, go to our main
              {' '}
              <a href="/verify" className="text-primary underline">
                stolen item verification tool
              </a>
              .
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default SitemapFallbackPage;
