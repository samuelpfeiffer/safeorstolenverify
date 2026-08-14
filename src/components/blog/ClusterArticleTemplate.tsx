import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  CLUSTER_ARTICLES,
  PILLARS,
  PillarKey,
  getSiblings,
} from '@/config/clusterArticles';

export interface ClusterFAQ {
  question: string;
  answer: string;
}

export interface ClusterArticleTemplateProps {
  slug: string;               // must match an entry in CLUSTER_ARTICLES
  metaDescription: string;    // 150–160 chars
  keywords?: string;
  lastReviewed: string;       // human date, e.g. "February 8, 2026"
  intro: ReactNode;           // 1–2 lead paragraphs
  body: ReactNode;            // main article body (prose)
  faqs: ClusterFAQ[];         // 3–6 FAQs — powers FAQPage schema
}

/**
 * ClusterArticleTemplate
 * Standard layout for every topical-authority cluster article.
 * - Single H1 from the registry
 * - Author byline + Last reviewed
 * - Pillar CTA banner after the intro
 * - Body (prose)
 * - FAQ accordion (mirrored into FAQPage schema)
 * - "Related guides" footer: parent pillar + up to 2 siblings (auto)
 * - Breadcrumbs + Article + FAQPage + BreadcrumbList schema
 */
export const ClusterArticleTemplate = ({
  slug,
  metaDescription,
  keywords,
  lastReviewed,
  intro,
  body,
  faqs,
}: ClusterArticleTemplateProps) => {
  const meta = CLUSTER_ARTICLES.find((c) => c.slug === slug);
  if (!meta) {
    // Fail loud in dev so a typo is caught immediately.
    throw new Error(`ClusterArticleTemplate: unknown slug "${slug}"`);
  }

  const pillar = PILLARS[meta.pillar as PillarKey];
  const siblings = getSiblings(slug, 2);
  const url = `https://safeorstolen.com/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: metaDescription,
    datePublished: meta.published,
    dateModified: meta.published,
    author: {
      '@type': 'Person',
      name: 'Samuel Pfeiffer',
      url: 'https://safeorstolen.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: {
        '@type': 'ImageObject',
        url: 'https://safeorstolen.com/sos-logo.png',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
      { '@type': 'ListItem', position: 2, name: pillar.name, item: `https://safeorstolen.com${pillar.path}` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: url },
    ],
  };

  return (
    <>
      <SEOHead
        title={meta.title}
        description={metaDescription}
        keywords={keywords}
        canonical={`/blog/${slug}`}
        ogType="article"
        publishedTime={meta.published}
        modifiedTime={meta.published}
        author="Samuel Pfeiffer"
        schemaJson={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 md:py-14 max-w-3xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-sos-orange">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link to={pillar.path} className="hover:text-sos-orange">{pillar.name}</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground truncate max-w-[200px]">{meta.title}</li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {meta.title}
          </h1>

          {/* Byline */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span>By <Link to="/about" className="text-foreground hover:text-sos-orange font-medium">Samuel Pfeiffer</Link></span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              Last reviewed {lastReviewed}
            </span>
          </div>

          {/* Intro */}
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 space-y-4">
            {intro}
          </div>

          {/* Pillar CTA banner */}
          <Link to={pillar.path} className="block group mb-10">
            <Card className="p-5 bg-sos-orange/10 border-sos-orange/30 hover:border-sos-orange transition-colors">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-sos-orange flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold mb-1">{pillar.ctaLine}</p>
                  <p className="text-sm text-sos-orange inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Open the {pillar.name.toLowerCase()} tool <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Body */}
          <article className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-sos-orange">
            {body}
          </article>

          {/* FAQs */}
          {faqs.length > 0 && (
            <section className="mt-14" aria-label="Frequently asked questions">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Frequently asked questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-foreground font-semibold">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* Related guides: parent pillar + siblings */}
          <section className="mt-14" aria-label="Related guides">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link to={pillar.path} className="group">
                <Card className="p-5 h-full bg-card/60 border-border hover:border-sos-orange transition-colors">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-sos-orange mb-2">
                    {pillar.name} — pillar guide
                  </h3>
                  <p className="text-sm text-muted-foreground">{pillar.ctaLine}</p>
                </Card>
              </Link>
              {siblings.map((s) => (
                <Link key={s.slug} to={`/blog/${s.slug}`} className="group">
                  <Card className="p-5 h-full bg-card/60 border-border hover:border-sos-orange transition-colors">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-sos-orange mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.blurb}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ClusterArticleTemplate;
