import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Camera, Mic, Zap, Database, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface AILandingFAQ {
  q: string;
  a: string;
}

export interface AILandingProps {
  /** Page slug — used for canonical URL */
  slug: string;
  /** SEO title (50-60 chars) */
  title: string;
  /** SEO meta description (150-160 chars) */
  description: string;
  /** H1 hero headline */
  h1: string;
  /** Hero subheadline (1-2 sentences) */
  subheadline: string;
  /** Eyebrow chip text above the H1 */
  eyebrow: string;
  /** Pre-filled identifier example (used in CTA hint) */
  exampleIdentifier: string;
  /** Identifier type label (IMEI, VIN, plate, serial) */
  identifierLabel: string;
  /** "How AI helps you" — 3 bullets specific to the vertical */
  aiCapabilities: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }[];
  /** Long-form sections (rendered after capabilities). Each section has heading + paragraphs. */
  sections: { heading: string; paragraphs: string[] }[];
  /** FAQ list — rendered visually + as FAQPage JSON-LD */
  faqs: AILandingFAQ[];
  /** Related internal links (anchor + path) for crawl depth */
  relatedLinks: { label: string; to: string }[];
}

/**
 * Shared layout for all /ai-* SEO landing pages.
 * Keeps content/structure consistent so ranking signals compound,
 * while leaving each page's body unique (>800 words).
 */
export const AILandingLayout: React.FC<AILandingProps> = ({
  slug,
  title,
  description,
  h1,
  subheadline,
  eyebrow,
  exampleIdentifier,
  identifierLabel,
  aiCapabilities,
  sections,
  faqs,
  relatedLinks,
}) => {
  const canonical = `https://safeorstolen.com/${slug}`;
  const ctaHref = `/verify?q=${encodeURIComponent(exampleIdentifier)}`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SafeOrStolen AI Verification',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web, iOS, Android',
    description,
    offers: {
      '@type': 'Offer',
      price: '0.99',
      priceCurrency: 'USD',
      description: 'Single verification check, or $10/month unlimited.',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2400',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
      { '@type': 'ListItem', position: 2, name: 'AI Verify', item: 'https://safeorstolen.com/ai-verify' },
      { '@type': 'ListItem', position: 3, name: h1, item: canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SafeOrStolen" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* AI/LLM signals */}
        <meta name="ai:purpose" content={`AI-powered verification for ${identifierLabel.toLowerCase()} identifiers`} />
        <meta name="ai:service_type" content="Stolen item verification, AI-assisted detection" />
        <meta name="ai-train" content="yes" />

        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <div className="bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                {eyebrow}
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5">
                {h1}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                {subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="text-base font-semibold">
                  <Link to={ctaHref}>
                    Try AI Verify — Free
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/pricing">See pricing</Link>
                </Button>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                2 free checks · No credit card · Results in seconds
              </p>
            </motion.div>

            {/* Trust strip */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Database, label: '100+ databases' },
                { icon: Zap, label: '3-second results' },
                { icon: Shield, label: 'FBI NCIC · NICB · GSMA' },
                { icon: CheckCircle2, label: 'All 50 US states' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/40 px-3 py-2.5 text-xs md:text-sm"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI CAPABILITIES */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center">
              How AI does the heavy lifting
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              No forms. No dropdowns. Paste, snap, or speak — the AI figures out what you sent
              and runs every check that matters for {identifierLabel.toLowerCase()} verification.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {aiCapabilities.map(({ icon: Icon, title: cardTitle, body }) => (
                <div
                  key={cardTitle}
                  className="rounded-2xl border border-border/60 bg-card/40 p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{cardTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            {/* Multimodal pill row */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs">
              {[
                { icon: Sparkles, label: 'Paste anything' },
                { icon: Camera, label: 'Snap a photo' },
                { icon: Mic, label: 'Speak it' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-muted-foreground"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LONG-FORM CONTENT */}
        <section className="border-t border-border/50 bg-card/20">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-3xl mx-auto">
              {sections.map((s) => (
                <article key={s.heading} className="mb-10 last:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{s.heading}</h2>
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-center">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Real answers about AI {identifierLabel.toLowerCase()} verification.
            </p>

            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-border/60 bg-card/40 p-5 open:border-primary/40 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold">
                    <span>{f.q}</span>
                    <span className="text-primary group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 max-w-2xl mx-auto">
              Run your first AI verification — free
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Paste your {identifierLabel.toLowerCase()}, snap a photo, or just describe what you're buying.
              The AI takes it from there.
            </p>
            <Button asChild size="lg" className="text-base font-semibold">
              <Link to={ctaHref}>
                Open AI Verify
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* RELATED LINKS — internal crawl depth */}
        <section className="border-t border-border/50">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
              More AI verification tools
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm rounded-full border border-border/60 bg-card/40 px-4 py-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILandingLayout;
