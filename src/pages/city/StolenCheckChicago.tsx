import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckChicago = () => {
  const faqs = [
    {
      question: "How do I check if a car in Chicago is stolen?",
      answer: "Use SafeOrStolen's free VIN checker. Chicago has over 20,000 vehicle thefts annually. Kia and Hyundai vehicles are especially targeted."
    },
    {
      question: "Where can I safely meet sellers in Chicago?",
      answer: "CPD offers safe exchange zones at district stations. Popular options include the 1st District (Central), 19th District (Town Hall), and 25th District (Grand Central)."
    },
    {
      question: "Is catalytic converter theft affecting Chicago?",
      answer: "Yes. Chicago is a hotspot for catalytic converter theft. If buying a used car, verify it hasn't been reported stolen and check for converter damage."
    },
    {
      question: "What neighborhoods have the highest theft rates?",
      answer: "Englewood, Austin, North Lawndale, and South Shore have higher theft rates. However, stolen items are sold throughout the city, so always verify regardless of location."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title="Chicago Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in Chicago. Free IMEI, VIN, and serial number verification for Chicago buyers. Verify before buying on Facebook Marketplace or Craigslist."
        keywords="chicago stolen item check, stolen car check chicago, verify stolen chicago, check IMEI chicago, VIN check chicago"
        canonical="/stolen-check-chicago"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Chicago, Illinois</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chicago Stolen Item Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Protect yourself from buying stolen goods in Chicago. Free verification for IMEI, VIN, and serial numbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">Check Item Now - Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/app"><Download className="mr-2 h-4 w-4" /> Get Mobile App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Chicago Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">20,000+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">Top 10</div>
                  <div className="text-sm text-muted-foreground">US City for Theft</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">Kia/Hyundai</div>
                  <div className="text-sm text-muted-foreground">Most Targeted</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Chicago</h2>
            <div className="space-y-4">
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
      </div>
    </>
  );
};

export default StolenCheckChicago;
