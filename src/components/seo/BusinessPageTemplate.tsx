import { Link, useLocation } from 'react-router-dom';
import { Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BusinessPageTemplateProps {
  title: string;
  metaDescription: string;
  h1: string;
  businessType: string;
  keywords: string[];
  content: {
    intro: string;
    painPoints: string[];
    benefits: { title: string; description: string; icon: string }[];
    features: string[];
    caseStudy: {
      business: string;
      problem: string;
      solution: string;
      results: string;
    };
    pricing: string;
    cta: string;
  };
}

export const BusinessPageTemplate = ({
  title,
  metaDescription,
  h1,
  businessType,
  keywords,
  content
}: BusinessPageTemplateProps) => {
  const location = useLocation();
  
  const iconMap: Record<string, any> = {
    shield: Shield,
    trending: TrendingUp,
    users: Users,
    check: CheckCircle
  };

  const fullUrl = `https://safeorstolen.com${location.pathname}`;

  const businessFaqs = [
    {
      question: `How does SafeOrStolen help ${businessType.toLowerCase()}?`,
      answer: `SafeOrStolen provides instant stolen item verification for ${businessType.toLowerCase()}. Check IMEI, VIN, and serial numbers against 100+ databases in 3 seconds. Reduce legal risk, ensure compliance, and protect your business from unknowingly handling stolen property.`
    },
    {
      question: `What does SafeOrStolen cost for ${businessType.toLowerCase()}?`,
      answer: `SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited. No hidden costs. Contact us for enterprise API access and compliance reporting for high-volume businesses.`
    },
    {
      question: `Is SafeOrStolen compliant with ${businessType.toLowerCase()} regulations?`,
      answer: `Yes. SafeOrStolen generates audit-trail certificates with timestamps for every verification. These documents serve as proof of due diligence for regulatory compliance, insurance purposes, and law enforcement cooperation.`
    },
    {
      question: `How quickly does SafeOrStolen return results?`,
      answer: `Results are returned in approximately 3 seconds. SafeOrStolen simultaneously queries 100+ databases including FBI NCIC, NICB, GSMA, carrier blacklists, and state law enforcement records.`
    }
  ];
  
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${businessType} Verification Service`,
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "serviceType": "Stolen Property Verification for Businesses",
      "areaServed": "US",
      "description": metaDescription,
      "dateModified": "2026-03-08",
      "offers": {
        "@type": "Offer",
        "description": content.pricing,
        "price": "10.00",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": businessFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "For Businesses", "item": "https://safeorstolen.com/for-businesses" },
        { "@type": "ListItem", "position": 3, "name": `For ${businessType}`, "item": fullUrl }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title={title}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={location.pathname}
        schemaJson={schema}
      />

      {/* Comprehensive noscript for crawlers */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
          <header>
            <nav><a href="/">SafeOrStolen</a> &gt; <a href="/for-businesses">For Businesses</a> &gt; For {businessType}</nav>
          </header>
          <main>
            <h1>{h1}</h1>
            <p>{content.intro}</p>
            
            <h2>Common Challenges for {businessType}</h2>
            <ul>
              {content.painPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            
            <h2>How SafeOrStolen Helps {businessType}</h2>
            {content.benefits.map((b, i) => (
              <div key={i}>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            ))}
            
            <h2>Key Features for {businessType}</h2>
            <ul>
              {content.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            
            <h2>Success Story: {content.caseStudy.business}</h2>
            <p><strong>Challenge:</strong> {content.caseStudy.problem}</p>
            <p><strong>Solution:</strong> {content.caseStudy.solution}</p>
            <p><strong>Results:</strong> {content.caseStudy.results}</p>
            
            <h2>Frequently Asked Questions</h2>
            {businessFaqs.map((faq, i) => (
              <div key={i}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
            
            <h2>Related Resources</h2>
            <ul>
              <li><a href="/pricing">Pricing - From $0.99/check</a></li>
              <li><a href="/for-businesses">All Business Solutions</a></li>
              <li><a href="/for-pawn-shops">For Pawn Shops</a></li>
              <li><a href="/for-dealers">For Used Car Dealers</a></li>
              <li><a href="/verify">Verify Any Item</a></li>
              <li><a href="/data-sources">Our Data Sources</a></li>
            </ul>
            
            <p>SafeOrStolen checks 100+ databases in 3 seconds. Protect your business from stolen goods. <a href="/pricing">View pricing</a> — $0.99/check or $10/month unlimited.</p>
          </main>
        </div>
      </noscript>

      <TopNavigation />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              {h1}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {content.intro}
            </p>
            <Link to="/pricing">
              <Button size="lg" className="gap-2">
                View Business Plans <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.painPoints.map((point, index) => (
                <div key={index} className="p-6 bg-background rounded-lg">
                  <p className="text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How SafeOrStolen Helps Your Business</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon] || Shield;
                return (
                  <div key={index} className="p-8 bg-card rounded-lg">
                    <IconComponent className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features for {businessType}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Story</h2>
            <div className="p-8 bg-card rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-semibold mb-4">{content.caseStudy.business}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Challenge:</h4>
                  <p className="text-muted-foreground">{content.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{content.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>Results:</h4>
                  <p className="text-muted-foreground">{content.caseStudy.results}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {businessFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-background px-6 rounded-lg">
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

        {/* Related Business Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Related Business Solutions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/for-pawn-shops" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">For Pawn Shops</h3>
                <p className="text-sm text-muted-foreground">Compliance verification for every intake</p>
              </Link>
              <Link to="/for-dealers" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">For Used Car Dealers</h3>
                <p className="text-sm text-muted-foreground">VIN verification for your inventory</p>
              </Link>
              <Link to="/for-businesses" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">All Business Solutions</h3>
                <p className="text-sm text-muted-foreground">Enterprise features & API access</p>
              </Link>
              <Link to="/data-sources" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Our Data Sources</h3>
                <p className="text-sm text-muted-foreground">100+ databases we check</p>
              </Link>
              <Link to="/verify" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Try It Free</h3>
                <p className="text-sm text-muted-foreground">2 free checks, no credit card</p>
              </Link>
              <Link to="/pricing" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Pricing</h3>
                <p className="text-sm text-muted-foreground">From $0.99/check or $10/mo unlimited</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-6">{content.pricing}</p>
            <p className="text-xl font-semibold mb-8">{content.cta}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/pricing">
                <Button size="lg" variant="default">
                  View Business Plans
                </Button>
              </Link>
              <Link to="/verify">
                <Button size="lg" variant="outline">
                  Try Free — 2 Checks
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};