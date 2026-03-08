import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, AlertTriangle, Phone, Car, Download, Train } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
const StolenCheckNewYorkCity = () => {
  const faqs = [
    {
      question: "How do I check if a used phone in NYC is stolen?",
      answer: "Ask for the IMEI number and verify it with SafeOrStolen before meeting the seller. NYC has high rates of phone theft, especially in subway stations and tourist areas."
    },
    {
      question: "Where are safe places to meet sellers in New York City?",
      answer: "NYPD precincts offer safe exchange programs. Also consider bank lobbies, coffee shops with security cameras, or Apple Store lobbies during business hours."
    },
    {
      question: "Is vehicle theft common in NYC?",
      answer: "Yes. NYC sees over 10,000 vehicle thefts annually. Kia and Hyundai models are particularly targeted due to a TikTok-inspired theft method. Always verify VIN before buying."
    },
    {
      question: "Can I use SafeOrStolen on the subway?",
      answer: "Yes! The SafeOrStolen app works offline. Download it before meeting a seller and verify items even without cell service in subway stations."
    },
    {
      question: "What items are most commonly stolen in NYC?",
      answer: "iPhones, MacBooks, e-bikes, designer bags, and Kia/Hyundai vehicles are the most commonly stolen items sold on NYC marketplaces."
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
      <TopNavigation />
      <PageSEO
        title="New York City Stolen Item Check - Verify Before Buying in NYC | SafeOrStolen"
        description="Check if items are stolen in New York City. Free IMEI, VIN, and serial number verification for NYC buyers. Verify before buying on Facebook Marketplace or Craigslist."
        keywords="nyc stolen item check, new york stolen car check, verify stolen nyc, check IMEI new york, VIN check NYC, stolen phone new york"
        canonical="/stolen-check-new-york-city"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">New York City, New York</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New York City Stolen Item Check
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              NYC's massive marketplace means more opportunities for stolen goods. Verify phones, 
              vehicles, electronics, and more before buying anywhere in the five boroughs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Item in NYC - Free
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

        {/* NYC Statistics */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              NYC Theft Statistics
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Car className="w-10 h-10 text-destructive mx-auto mb-3" />
                  <div className="text-2xl font-bold text-destructive mb-1">10,000+</div>
                  <p className="text-sm text-muted-foreground">Vehicle thefts annually</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-10 h-10 text-destructive mx-auto mb-3" />
                  <div className="text-2xl font-bold text-destructive mb-1">25,000+</div>
                  <p className="text-sm text-muted-foreground">Phone thefts annually</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Train className="w-10 h-10 text-destructive mx-auto mb-3" />
                  <div className="text-2xl font-bold text-destructive mb-1">#1</div>
                  <p className="text-sm text-muted-foreground">Subway theft hotspot</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <AlertTriangle className="w-10 h-10 text-destructive mx-auto mb-3" />
                  <div className="text-2xl font-bold text-destructive mb-1">↑ 40%</div>
                  <p className="text-sm text-muted-foreground">E-bike theft increase</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Borough Breakdown */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Theft Hotspots by Borough
            </h2>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { borough: "Manhattan", areas: "Times Square, Penn Station, SoHo" },
                { borough: "Brooklyn", areas: "Williamsburg, Downtown, Bushwick" },
                { borough: "Queens", areas: "Jamaica, Flushing, Astoria" },
                { borough: "Bronx", areas: "Fordham, Hunts Point, Mott Haven" },
                { borough: "Staten Island", areas: "St. George Ferry Terminal" }
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-bold mb-2">{item.borough}</h3>
                    <p className="text-xs text-muted-foreground">{item.areas}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              NYC Verification FAQs
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i}>
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

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Verify Before You Buy in NYC
            </h2>
            <p className="text-lg opacity-90 mb-8">
              From Harlem to Staten Island, protect yourself with free verification.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StolenCheckNewYorkCity;
