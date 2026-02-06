import { Link, useLocation } from 'react-router-dom';
import { Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';

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
  
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${businessType} Verification Service`,
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Stolen Property Verification for Businesses",
      "areaServed": "US",
      "description": metaDescription,
      "dateModified": "2026-02-06",
      "offers": {
        "@type": "Offer",
        "description": content.pricing
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": `For ${businessType}`, "item": fullUrl }
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
                  <h4 className="font-semibold text-emerald-500 mb-2">Results:</h4>
                  <p className="text-muted-foreground">{content.caseStudy.results}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-6">{content.pricing}</p>
            <p className="text-xl font-semibold mb-8">{content.cta}</p>
            <div className="flex gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="default">
                  View Business Plans
                </Button>
              </Link>
              <Link to="/verify">
                <Button size="lg" variant="outline">
                  Try Free Check
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
