import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const StolenCheckPhiladelphia = () => {
  const faqs = [
    {
      question: "How do I check if a car in Philadelphia is stolen?",
      answer: "Use SafeOrStolen's free VIN checker. Philly sees over 9,000 vehicle thefts annually, with Kia and Hyundai models being primary targets."
    },
    {
      question: "Where can I safely meet sellers in Philly?",
      answer: "Philadelphia Police offer safe exchange zones at district headquarters. The 6th District in Center City and 35th District in Northeast are popular options."
    },
    {
      question: "Is the Kia Boys trend affecting Philadelphia?",
      answer: "Yes. Philadelphia has seen a significant increase in Kia and Hyundai thefts due to the viral TikTok theft method. Always verify VIN when buying these makes."
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
        title="Philadelphia Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in Philadelphia. Free IMEI, VIN, and serial number verification for Philly buyers."
        keywords="philadelphia stolen item check, stolen car check philly, verify stolen philadelphia, VIN check philadelphia"
        canonical="/stolen-check-philadelphia"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Philadelphia, Pennsylvania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Philadelphia Stolen Item Check</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              9,000+ vehicles stolen in Philly annually. Verify before buying used items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify"><Shield className="w-5 h-5" />Verify Item - Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app"><Download className="w-5 h-5" />Download App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Philadelphia Verification FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Philly</h2>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckPhiladelphia;
