import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';

const StolenCheckHouston = () => {
  const faqs = [
    {
      question: "How do I check if a car in Houston is stolen?",
      answer: "Use SafeOrStolen's free VIN checker. Houston is one of the top 10 US cities for vehicle theft with over 35,000 annually."
    },
    {
      question: "Where are Houston's safe exchange zones?",
      answer: "HPD offers safe exchange locations at many police substations. Popular options include the Central Station downtown and substations in Clear Lake and Memorial."
    },
    {
      question: "What vehicles are most stolen in Houston?",
      answer: "Full-size pickup trucks (F-150, Silverado, Ram), Kia/Hyundai sedans, and Nissan Altimas are the most stolen vehicles in Houston."
    },
    {
      question: "Is tool theft common in Houston?",
      answer: "Yes. Houston's construction industry makes it a target for power tool theft. Always verify serial numbers when buying tools from individuals."
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
        <title>Houston Stolen Item Check - Verify Before Buying | SafeOrStolen</title>
        <meta name="description" content="Check if items are stolen in Houston. Free IMEI, VIN, and serial number verification. Houston has 35,000+ vehicle thefts annually." />
        <meta name="keywords" content="houston stolen item check, stolen car check houston, verify stolen houston, VIN check houston" />
        <link rel="canonical" href="https://safeorstolen.com/stolen-check-houston" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Houston, Texas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Houston Stolen Item Check</h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Houston ranks in the top 10 US cities for vehicle theft. Verify used items before buying.
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
            <h2 className="text-3xl font-bold text-center mb-12">Houston Verification FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Houston</h2>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckHouston;
