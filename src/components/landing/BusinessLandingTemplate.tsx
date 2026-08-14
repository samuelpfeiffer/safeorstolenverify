import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Building2, TrendingUp, Users, Zap, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

interface FAQ {
  question: string;
  answer: string;
}

interface Feature {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  stat?: string;
}

interface BusinessLandingProps {
  // SEO
  title: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  canonical: string;
  
  // Business Info
  businessType: string;
  industryName: string;
  
  // Hero
  heroSubtitle: string;
  heroBadge?: string;
  
  // Problem/Challenge Section
  challenges: {
    title: string;
    description: string;
  }[];
  
  // Solution/Features
  features: Feature[];
  
  // Benefits with ROI
  benefits: Benefit[];
  
  // Integration Info
  integrationInfo?: {
    title: string;
    description: string;
    features: string[];
  };
  
  // Pricing Tiers (optional)
  pricingNote?: string;
  
  // FAQs
  faqs: FAQ[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

export const BusinessLandingTemplate = ({
  title,
  metaDescription,
  h1,
  keywords,
  canonical,
  businessType,
  industryName,
  heroSubtitle,
  heroBadge,
  challenges,
  features,
  benefits,
  integrationInfo,
  pricingNote,
  faqs,
  ctaTitle,
  ctaDescription
}: BusinessLandingProps) => {
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `SafeOrStolen for ${industryName}`,
    "description": metaDescription,
    "url": `https://safeorstolen.com${canonical}`,
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "serviceType": `${businessType} Verification Solutions`,
    "areaServed": "Worldwide"
  };

  const faqSchema = faqs.length > 0 ? {
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

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={canonical}
        structuredData={faqSchema ? [organizationSchema, faqSchema] : [organizationSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            {heroBadge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{heroBadge}</span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{h1}</h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/pricing">
                  View Business Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/verify">
                  Try Free Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Challenges Facing {industryName}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              The secondhand market is growing, but so are the risks. Here's what {businessType.toLowerCase()}s face daily.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              SafeOrStolen for {industryName}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Purpose-built verification tools for your business needs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const icons = [Shield, Zap, CheckCircle, Users, TrendingUp, Building2];
                const Icon = icons[index % icons.length];
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="w-10 h-10 text-primary mb-2" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits/ROI Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Business Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  {benefit.stat && (
                    <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        {integrationInfo && (
          <section className="py-16 px-4 bg-primary/5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">{integrationInfo.title}</h2>
              <p className="text-center text-muted-foreground mb-8">{integrationInfo.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {integrationInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Note */}
        {pricingNote && (
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">{pricingNote}</p>
              <Button asChild size="lg">
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-lg opacity-90 mb-8">{ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/pricing">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="mailto:support@safeorstolen.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
