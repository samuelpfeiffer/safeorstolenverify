import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';

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
      <Helmet>
        <title>Chicago Stolen Item Check - Verify Before Buying | SafeOrStolen</title>
        <meta name="description" content="Check if items are stolen in Chicago. Free IMEI, VIN, and serial number verification for Chicago buyers. Verify before buying on Facebook Marketplace or Craigslist." />
        <meta name="keywords" content="chicago stolen item check, stolen car check chicago, verify stolen chicago, check IMEI chicago, VIN check chicago" />
        <link rel="canonical" href="https://safeorstolen.com/stolen-check-chicago" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Chicago, Illinois</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chicago Stolen Item Check
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Chicago sees over 20,000 vehicle thefts annually. Verify any used item before buying 
              on Facebook Marketplace, OfferUp, or Craigslist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Item in Chicago - Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="w-5 h-5" />
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Chicago Verification FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader><CardTitle className="text-lg">{faq.question}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{faq.answer}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Chicago</h2>
            <p className="text-lg opacity-90 mb-8">Free verification takes just 3 seconds.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckChicago;
