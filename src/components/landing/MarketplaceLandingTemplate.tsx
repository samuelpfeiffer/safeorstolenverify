import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Download, AlertTriangle, Smartphone, Car, Laptop, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

interface FAQ {
  question: string;
  answer: string;
}

interface RedFlag {
  title: string;
  description: string;
}

interface MarketplaceLandingProps {
  // SEO
  title: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  canonical: string;
  
  // Marketplace Info
  marketplaceName: string;
  marketplaceLogo?: string;
  
  // Hero
  heroSubtitle: string;
  
  // Problem Stats
  problemStats: {
    title: string;
    description: string;
  }[];
  
  // Red Flags
  redFlags: RedFlag[];
  
  // How It Works
  howItWorksSteps: string[];
  
  // FAQs
  faqs: FAQ[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

export const MarketplaceLandingTemplate = ({
  title,
  metaDescription,
  h1,
  keywords,
  canonical,
  marketplaceName,
  heroSubtitle,
  problemStats,
  redFlags,
  howItWorksSteps,
  faqs,
  ctaTitle,
  ctaDescription
}: MarketplaceLandingProps) => {
  
  const faqSchema = {
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
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": metaDescription,
    "url": `https://safeorstolen.com${canonical}`,
    "mainEntity": {
      "@type": "Service",
      "name": `${marketplaceName} Stolen Item Verification`,
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      }
    }
  };

  return (
    <>
      <PageSEO
        title={title}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={canonical}
        structuredData={[webPageSchema, faqSchema]}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{marketplaceName} Buyer Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{h1}</h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Item Now - Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/marketplace-url-checker">
                  <ExternalLink className="w-5 h-5" />
                  Paste Listing URL
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">The Hidden Danger of {marketplaceName}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every day, thousands of stolen items are listed on {marketplaceName}. 
                Without verification, you could unknowingly become a victim.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {problemStats.map((stat, index) => {
                const icons = [Smartphone, Car, Laptop];
                const Icon = icons[index % icons.length];
                return (
                  <Card key={index} className="border-destructive/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <Icon className="w-5 h-5" />
                        {stat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Verify {marketplaceName} Items
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <Download className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Verify Items at the Meetup Location
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download the SafeOrStolen app to verify items on-the-spot. Scan barcodes in 3 seconds, 
              works offline, and gives you instant peace of mind before handing over cash.
            </p>
            <Button asChild size="lg">
              <Link to="/app">Download Free App</Link>
            </Button>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Red Flags on {marketplaceName} Listings
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {redFlags.map((flag, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{flag.title}</h3>
                      <p className="text-sm text-muted-foreground">{flag.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify an Item Now - It's Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
