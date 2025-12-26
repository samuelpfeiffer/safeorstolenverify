import { Link, useLocation } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';

interface ItemLandingPageProps {
  title: string;
  metaDescription: string;
  h1: string;
  itemType: string;
  keywords: string[];
  content: {
    intro: string;
    whatIs: string;
    howItWorks: string;
    whyCheck: string;
    benefits: string[];
    process: string[];
    faqs: { question: string; answer: string }[];
  };
}

export const ItemLandingPageTemplate = ({
  title,
  metaDescription,
  h1,
  itemType,
  keywords,
  content
}: ItemLandingPageProps) => {
  const location = useLocation();
  
  // Generate breadcrumb name from pathname
  const breadcrumbName = location.pathname
    .replace(/^\//, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // BreadcrumbList schema for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumbName,
        "item": `https://safeorstolen.com${location.pathname}`
      }
    ]
  };

  // Service and HowTo schemas in @graph
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${itemType} Verification Service`,
        "url": `https://safeorstolen.com${location.pathname}`,
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com"
        },
        "serviceType": `${itemType} Theft Verification`,
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "description": metaDescription
      },
      {
        "@type": "HowTo",
        "name": `How to Check if ${itemType} is Stolen`,
        "step": content.process.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step
        }))
      }
    ]
  };

  // FAQPage must be SEPARATE root-level schema (not nested in @graph)
  const faqSchema = content.faqs && content.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Combine schemas for PageSEO - include breadcrumb schema
  const structuredData = faqSchema 
    ? [breadcrumbSchema, serviceSchema, faqSchema] 
    : [breadcrumbSchema, serviceSchema];

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={location.pathname}
        structuredData={structuredData}
      />

      {/* Minimal noscript fallback - no H1 to avoid duplicate with visible H1 */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>{h1}</strong></p>
          <p>{content.intro}</p>
          <p>Visit safeorstolen.com/verify to check any {itemType.toLowerCase()}.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[{ name: breadcrumbName, href: location.pathname }]} />
        </div>

        {/* Hero Section */}
        <section className="pb-16 pt-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              <p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80"
                dangerouslySetInnerHTML={{ __html: content.intro }}
              />
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check {itemType} Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Secure</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Accurate</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Trusted</span>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Signals: Author & Freshness */}
        <aside className="py-4 px-4 border-y border-border/50 bg-muted/20">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Written by</span>
              <Link to="/about" className="font-medium text-foreground hover:text-primary">SafeOrStolen Research Team</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Last updated: December 2025</span>
              <Link to="/how-it-works" className="text-primary hover:underline">How we verify</Link>
            </div>
          </div>
        </aside>

        {/* Credibility Bar */}
        <SitewideCredibilityBar />

        {/* What Is Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is {itemType} Verification?</h2>
            <p 
              className="text-lg text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80 mb-8"
              dangerouslySetInnerHTML={{ __html: content.whatIs }}
            />
            <DataPartnerBadges variant="compact" />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              {content.process.map((step, index) => (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-muted-foreground">{content.howItWorks}</p>
          </div>
        </section>

        {/* Why Check Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check Before Buying?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{content.whyCheck}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Authority Signals Before CTA */}
        <AuthoritySignals variant="banner" className="mb-0" />

        {/* Internal Linking Section - Critical for SEO */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {itemType !== 'Phone' && (
                <Link to="/check-phone" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h3 className="font-semibold mb-1">Check Phone</h3>
                  <p className="text-sm text-muted-foreground">IMEI verification for iPhone & Android</p>
                </Link>
              )}
              {itemType !== 'Car' && (
                <Link to="/check-car" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h3 className="font-semibold mb-1">Check Car</h3>
                  <p className="text-sm text-muted-foreground">VIN lookup for vehicles</p>
                </Link>
              )}
              {itemType !== 'Bike' && (
                <Link to="/check-bike" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h3 className="font-semibold mb-1">Check Bike</h3>
                  <p className="text-sm text-muted-foreground">Serial number check for bicycles</p>
                </Link>
              )}
              {itemType !== 'Laptop' && (
                <Link to="/check-laptop" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h3 className="font-semibold mb-1">Check Laptop</h3>
                  <p className="text-sm text-muted-foreground">MacBook & PC serial verification</p>
                </Link>
              )}
              {itemType !== 'Electronics' && (
                <Link to="/check-electronics" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <h3 className="font-semibold mb-1">Check Electronics</h3>
                  <p className="text-sm text-muted-foreground">Cameras, consoles & equipment</p>
                </Link>
              )}
              <Link to="/verify" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Universal Checker</h3>
                <p className="text-sm text-muted-foreground">Check any item type</p>
              </Link>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Popular Marketplace Safety Guides</h3>
            <nav className="flex flex-wrap gap-3 text-sm" aria-label="Related marketplace guides">
              <Link to="/facebook-marketplace-stolen-check" className="text-primary underline hover:text-primary/80">Facebook Marketplace</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/ebay-stolen-item-checker" className="text-primary underline hover:text-primary/80">eBay</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/craigslist-safety-verification" className="text-primary underline hover:text-primary/80">Craigslist</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/offerup-verify-not-stolen" className="text-primary underline hover:text-primary/80">OfferUp</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/for-pawn-shops" className="text-primary underline hover:text-primary/80">Pawn Shop Verification</Link>
            </nav>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify Your {itemType}?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get instant verification results in 3 seconds. Protect yourself from stolen goods.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Free Check <Search className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
