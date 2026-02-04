import { Link } from 'react-router-dom';
import { Shield, Search, MapPin, ArrowRight, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getStateUniqueContent, StateUniqueContent } from '@/config/stateUniqueContent';
import { SEOHead } from '@/components/seo/SEOHead';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StateVinPageProps {
  state: string;
  stateCode: string;
  title: string;
  metaDescription: string;
  topCities: string[];
  dmvLink: string;
  content: {
    intro: string;
    whyCheck: string;
    localLaws: string;
  };
  faqs: { question: string; answer: string }[];
  slug?: string;
}

export const StateVinPageTemplate = ({
  state,
  stateCode,
  title,
  metaDescription,
  topCities,
  dmvLink,
  content,
  faqs,
  slug
}: StateVinPageProps) => {
  // Error boundary for state VIN pages to prevent 5xx errors
  try {
    // Use slug if provided, otherwise extract from current URL
    const urlPath = slug || window.location.pathname.replace(/^\//, '');
    const canonicalUrl = `https://safeorstolen.com/${urlPath}`;
    
    // Get unique content for this state (using license plate slug format for compatibility)
    const licensePlateSlug = `${state.toLowerCase().replace(/\s+/g, '-')}-license-plate-lookup`;
    const uniqueContent: StateUniqueContent | undefined = getStateUniqueContent(licensePlateSlug);
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${state} VIN Check Service`,
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        },
        "serviceType": "Vehicle History Verification",
        "areaServed": {
          "@type": "State",
          "name": state
        },
        "description": metaDescription
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={title}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords={`${state} VIN check, ${stateCode} stolen car lookup, ${state} vehicle history, ${state} VIN verification, ${state} stolen vehicle database`}
        schemaJson={schema}
      />

      {/* Minimal SEO fallback - no duplicate H1 */}
      <noscript>
        <p>{title} - {content.intro}</p>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {state} VIN Lookup
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-8">
              {content.intro}
            </p>
            <div className="text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check {state} VIN Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Verify Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Verify {state} Vehicles?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg text-center">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Theft Risk</h3>
                <p className="text-muted-foreground">Vehicle theft is a concern in {state}. Verify before you buy.</p>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Legal Protection</h3>
                <p className="text-muted-foreground">Avoid legal issues from unknowingly purchasing stolen property.</p>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Major Cities</h3>
                <div className="text-muted-foreground space-y-1">
                  {topCities.slice(0, 3).map((city, i) => (
                    <div key={i}>{city}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Check Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check VINs in {state}?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.whyCheck}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Protect Your Investment</h3>
                <p className="text-muted-foreground">
                  Avoid buying stolen vehicles that can be repossessed at any time, leaving you with zero recourse.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-xl font-semibold mb-3">Legal Consequences</h3>
                <p className="text-muted-foreground">
                  In {state}, possessing stolen property can result in criminal charges, even if you didn't know it was stolen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Laws Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{state} Laws on Stolen Vehicles</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{content.localLaws}</p>
            <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
              <p className="font-semibold mb-2">Official {state} DMV Resources:</p>
              <a href={dmvLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {state} Department of Motor Vehicles
              </a>
            </div>
          </div>
        </section>

        {/* UNIQUE CONTENT: Vehicle Market & Theft Patterns - Only shown if unique content exists */}
        {uniqueContent && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{state} Vehicle Market & Theft Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {uniqueContent.vehicleMarketParagraph}
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Understanding {state} Vehicle Theft Patterns</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {uniqueContent.theftPatternsParagraph}
              </p>

              {/* Common Targets */}
              <div className="bg-card rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Commonly Targeted Vehicles in {state}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {uniqueContent.commonTargets.map((vehicle, idx) => (
                    <span key={idx} className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buying Tips */}
              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-4">{state} VIN Check Tips</h4>
                <ul className="space-y-3">
                  {uniqueContent.buyingTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verification Advice */}
              <div className="p-6 bg-card border-l-4 border-primary rounded-lg">
                <h4 className="font-semibold mb-2">Expert VIN Verification Advice</h4>
                <p className="text-muted-foreground">{uniqueContent.verificationAdvice}</p>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{state} VIN Check FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
              {/* UNIQUE STATE FAQs */}
              {uniqueContent?.uniqueFaqs.map((faq, idx) => (
                <AccordionItem key={`unique-${idx}`} value={`unique-item-${idx}`} className="bg-background px-6 rounded-lg">
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

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check Any {state} VIN</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Free VIN verification for {state} vehicles. Quick results from available databases.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Free {state} VIN Check <Search className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
  } catch (error) {
    console.error('StateVinPageTemplate error:', error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Page Temporarily Unavailable</h1>
          <p className="text-muted-foreground mb-4">
            We're experiencing technical difficulties loading this page. Please try again later.
          </p>
          <Link to="/verify">
            <Button variant="default">Return to Verification Page</Button>
          </Link>
        </div>
      </div>
    );
  }
};
