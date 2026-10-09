import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Smartphone, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { EmailCaptureHero } from '@/components/traffic/EmailCaptureHero';
import { SEOHead } from '@/components/seo/SEOHead';

interface StolenCheckLandingProps {
  itemType: string;
  title: string;
  description: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
}

/** Oct 8 2026: audited by hand. Removed mobile-app, "3 seconds", "legal protection" and "peace of mind" wording. */
export const StolenCheckLanding: React.FC<StolenCheckLandingProps> = ({
  itemType,
  title,
  description,
  keywords,
  faqs
}) => {
  const canonicalPath = `/check/${itemType.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Build FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
  
  return (
    <>
      <SEOHead
        title={`${title} | SafeOrStolen - Free Stolen Item Checker`}
        description={description}
        keywords={keywords.join(', ')}
        canonical={canonicalPath}
        schemaJson={faqSchema}
      />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Free {itemType} Verification</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="text-lg h-14 px-8">
                  <Link to="/verify">
                    <Search className="mr-2 h-5 w-5" />
                    Check a {itemType} (2 free checks)
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8">
                  <Link to="/app">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Install the free web app
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>2 free checks, no card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>Results in a few seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Every source listed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Check Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Check If Your {itemType} Is Stolen?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Avoid Legal Trouble</h3>
                    <p className="text-sm text-muted-foreground">
                      Knowingly buying stolen goods is a crime, and a price far below value can be used as evidence you should have known.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Keep Your Money</h3>
                    <p className="text-sm text-muted-foreground">
                      Police can take a stolen item back and return it to the owner, and you lose what you paid.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">A Dated Record</h3>
                    <p className="text-sm text-muted-foreground">
                      Each check is saved to your account with the date. A $1.99 verification certificate gives you a link showing you checked before the sale.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <EmailCaptureHero />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Risk Buying Stolen {itemType}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Check the {itemType.toLowerCase()} before you pay. Your first 2 checks are free and each takes a few seconds.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-10">
              <Link to="/verify">
                Check a {itemType} now
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
