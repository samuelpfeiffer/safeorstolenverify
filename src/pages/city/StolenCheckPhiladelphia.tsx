import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Car, AlertTriangle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const StolenCheckPhiladelphia = () => {
  const faqs = [
    {
      question: "How do I check if a car in Philadelphia is stolen?",
      answer: "Use SafeOrStolen's free VIN checker. Philly sees over 9,000 vehicle thefts annually, with Kia and Hyundai models being primary targets due to the 'Kia Boys' trend."
    },
    {
      question: "Where can I safely meet sellers in Philly?",
      answer: "Philadelphia Police offer safe exchange zones at district headquarters. The 6th District in Center City and 35th District in Northeast are popular options."
    },
    {
      question: "Is the Kia Boys trend affecting Philadelphia?",
      answer: "Yes. Philadelphia has seen a significant increase in Kia and Hyundai thefts due to the viral TikTok theft method. Always verify VIN when buying these makes."
    },
    {
      question: "What other items are commonly stolen in Philly?",
      answer: "Besides vehicles, catalytic converters, e-bikes, and electronics are frequently stolen. ATVs and dirt bikes are also commonly theft items in Philadelphia."
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
        description="Check if items are stolen in Philadelphia. Free IMEI, VIN, and serial number verification. Philly has 9,000+ vehicle thefts annually."
        keywords="philadelphia stolen item check, stolen car check philly, verify stolen philadelphia, VIN check philadelphia, Kia theft philly"
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
              Philadelphia sees 9,000+ vehicle thefts annually. Verify before buying used items on Facebook Marketplace, OfferUp, or Craigslist.
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

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Philadelphia Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">9,000+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <AlertTriangle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">Kia/Hyundai</div>
                  <div className="text-sm text-muted-foreground">Most Targeted</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">↑ 80%</div>
                  <div className="text-sm text-muted-foreground">Theft Increase</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in Philadelphia?</h3>
              <p>
                Philadelphia has experienced a dramatic surge in vehicle theft, largely driven by 
                the "Kia Boys" trend that went viral on TikTok. This has made Kia and Hyundai 
                vehicles from 2011-2021 especially vulnerable, as they lack engine immobilizers.
              </p>
              <p>
                The city's active secondhand market means stolen goods frequently appear for sale. 
                SafeOrStolen's free verification helps you avoid purchasing stolen vehicles or 
                devices. Our check takes just 3 seconds and searches against national databases.
              </p>
              <h3>PPD Safe Exchange Zones</h3>
              <p>
                The Philadelphia Police Department offers safe exchange zones at district 
                headquarters throughout the city. The 6th District in Center City and 35th 
                District in Northeast Philly are popular options. Always verify items with 
                SafeOrStolen before completing any transaction, even at safe zones.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Philadelphia</h2>
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

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Philly</h2>
            <p className="mb-6 opacity-90">Free verification takes just 3 seconds. Protect yourself today.</p>
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
