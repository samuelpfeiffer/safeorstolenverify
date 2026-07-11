import { ReactNode, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { ArrowRight, ShieldCheck } from 'lucide-react';

// Lazy-load the search form so the LCP (H1 + intro) paints fast on mobile.
const UnifiedSearchForm = lazy(() =>
  import('@/components/search/UnifiedSearchForm').then((m) => ({ default: m.UnifiedSearchForm }))
);

export interface RelatedGuide {
  title: string;
  href: string;
  blurb: string;
}

export interface PillarPageTemplateProps {
  route: string;                 // e.g. "/check-phone"
  title: string;                 // <title> tag
  description: string;           // meta description
  keywords?: string;
  h1: string;
  intro: ReactNode;              // 1-2 lead paragraphs above the tool
  toolLabel?: string;            // small label above the search form
  sections: ReactNode;           // full body copy below the tool
  relatedGuides: RelatedGuide[]; // cluster article cards
  pillarName: string;            // breadcrumb label (e.g. "Check Phone")
  extraSchema?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * PillarPageTemplate — Reusable layout for the 4 topical-authority pillar pages
 * (/check-phone, /check-bike, /check-gun, /check-vin).
 *
 * Structure (mobile-first):
 *   1. Breadcrumbs
 *   2. Single H1 with the exact target phrase
 *   3. Short intro (LCP content)
 *   4. Verification tool embedded (lazy-loaded)
 *   5. Sections: how to find identifier, what we check, honest limits, callouts
 *   6. Related guides card grid
 */
export const PillarPageTemplate = ({
  route,
  title,
  description,
  keywords,
  h1,
  intro,
  toolLabel = 'Run a free check',
  sections,
  relatedGuides,
  pillarName,
  extraSchema,
}: PillarPageTemplateProps) => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
      { '@type': 'ListItem', position: 2, name: pillarName, item: `https://safeorstolen.com${route}` },
    ],
  };

  const schemas = extraSchema
    ? [breadcrumbSchema, ...(Array.isArray(extraSchema) ? extraSchema : [extraSchema])]
    : [breadcrumbSchema];

  return (
    <>
      <TopNavigation />
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonical={route}
        schemaJson={schemas}
      />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 md:py-14 max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-sos-orange transition-colors">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{pillarName}</li>
            </ol>
          </nav>

          {/* Single H1 */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            {h1}
          </h1>

          {/* Intro (LCP text) */}
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 space-y-4">
            {intro}
          </div>

          {/* Verification tool — lazy-loaded */}
          <section aria-label="Verification tool" className="mb-14">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wide text-sos-orange">
              <ShieldCheck className="h-4 w-4" />
              {toolLabel}
            </div>
            <Suspense
              fallback={
                <div className="h-40 rounded-lg border border-border bg-card/40 animate-pulse" />
              }
            >
              <UnifiedSearchForm variant="default" />
            </Suspense>
          </section>

          {/* Body sections */}
          <article className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-sos-orange">
            {sections}
          </article>

          {/* Related guides */}
          {relatedGuides.length > 0 && (
            <section aria-label="Related guides" className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Related guides
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedGuides.map((g) => (
                  <Link key={g.href} to={g.href} className="group">
                    <Card className="p-5 h-full bg-card/60 border-border hover:border-sos-orange transition-colors">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-sos-orange mb-2 flex items-start gap-2">
                        <span>{g.title}</span>
                        <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{g.blurb}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PillarPageTemplate;
