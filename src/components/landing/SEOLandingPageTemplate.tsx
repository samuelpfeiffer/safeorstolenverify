import { Link, useLocation } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, Download, AlertTriangle, Users, Star, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

interface FAQ {
  question: string;
  answer: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface SEOLandingPageProps {
  // SEO Meta
  title: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  canonical: string;
  
  // Content
  itemType: string;
  identifierType: 'IMEI' | 'VIN' | 'Serial Number' | 'License Plate' | 'Mixed';
  
  // Hero Section
  heroSubtitle: string;
  heroBadge?: string;
  
  // Stats Section (optional)
  stats?: Stat[];
  
  // What Is Section
  whatIsTitle: string;
  whatIsContent: string;
  
  // How It Works
  howItWorksSteps: string[];
  howItWorksDescription?: string;
  
  // Why Verify Section
  whyVerifyTitle: string;
  whyVerifyContent: string;
  whyVerifyBenefits: string[];
  
  // Use Cases (optional)
  useCases?: UseCase[];
  
  // Social Proof
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  
  // FAQs
  faqs: FAQ[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  
  // Related Links (optional)
  relatedLinks?: { title: string; href: string }[];
}

export const SEOLandingPageTemplate = ({
  title,
  metaDescription,
  h1,
  keywords,
  canonical,
  itemType,
  identifierType,
  heroSubtitle,
  heroBadge,
  stats,
  whatIsTitle,
  whatIsContent,
  howItWorksSteps,
  howItWorksDescription,
  whyVerifyTitle,
  whyVerifyContent,
  whyVerifyBenefits,
  useCases,
  testimonial,
  faqs,
  ctaTitle,
  ctaDescription,
  relatedLinks
}: SEOLandingPageProps) => {
  const location = useLocation();
  
  // Structured Data
  const fullUrl = `https://safeorstolen.com${canonical}`;
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${itemType} Stolen Verification Service`,
    "url": fullUrl,
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/sos-logo.png"
    },
    "serviceType": `${itemType} Theft Verification`,
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "description": metaDescription,
    "dateModified": "2026-03-02",
    "offers": {
      "@type": "Offer",
      "price": "2.99",
      "priceCurrency": "USD",
      "description": "$2.99/month unlimited verifications"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Check if ${itemType} is Stolen`,
    "description": `Step by step guide to verify if a ${itemType.toLowerCase()} has been reported stolen`,
    "dateModified": "2026-03-02",
    "step": howItWorksSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `Step ${index + 1}`,
      "text": step
    })),
    "totalTime": "PT30S"
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
      { "@type": "ListItem", "position": 2, "name": `${itemType} Verification`, "item": fullUrl }
    ]
  };

  const structuredData = [serviceSchema, howToSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      <TopNavigation />
      <PageSEO
        title={title}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={canonical}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {heroBadge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{heroBadge}</span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                {h1}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/verify">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    Check {itemType} Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/app">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Download className="w-4 h-4" /> Download Mobile App
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold text-center">Law Enforcement Backed</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold text-center">3-Second Results</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold text-center">50M+ Database</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold text-center">From $0.99/check</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <section className="py-12 px-4 bg-primary/5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Credibility Bar */}
        <SitewideCredibilityBar />

        {/* What Is Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{whatIsTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {whatIsContent}
            </p>
            <DataPartnerBadges variant="compact" />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">How to Check if {itemType} is Stolen</h2>
            <p className="text-center text-muted-foreground mb-8">Verify any {itemType.toLowerCase()} in under 30 seconds</p>
            
            <div className="space-y-6">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-lg border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {howItWorksDescription && (
              <p className="mt-8 text-lg text-muted-foreground">{howItWorksDescription}</p>
            )}
          </div>
        </section>

        {/* Why Verify Section */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-3xl font-bold">{whyVerifyTitle}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{whyVerifyContent}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {whyVerifyBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg border">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        {useCases && useCases.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Common Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        {testimonial && (
          <section className="py-16 px-4 bg-card/50">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg border">
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

        {/* Authority Signals */}
        <AuthoritySignals variant="banner" className="mb-0" />

        {/* Related Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Related Verification Tools</h3>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link, index) => (
                  <Link key={index} to={link.href}>
                    <Button variant="outline" size="sm">{link.title}</Button>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Verify Now — $1/mo Unlimited <Search className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Download className="w-4 h-4" /> Get the App
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
