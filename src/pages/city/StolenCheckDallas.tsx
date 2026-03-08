import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, AlertTriangle, CheckCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
const StolenCheckDallas = () => {
  const faqs = [
    {
      question: "How bad is vehicle theft in Dallas-Fort Worth?",
      answer: "Dallas-Fort Worth is consistently one of the top 5 metros in the US for vehicle theft with over 30,000 thefts annually across the metroplex. Kia and Hyundai vehicles are especially targeted."
    },
    {
      question: "Where can I safely meet sellers in Dallas?",
      answer: "Dallas PD offers safe exchange zones at police stations. The Jack Evans Police Headquarters and various substations have designated areas. Many fire stations also welcome safe exchanges."
    },
    {
      question: "What items are commonly stolen in Dallas?",
      answer: "Vehicles, catalytic converters, construction equipment, and electronics top the list. The thriving resale market makes verification essential for any used purchase."
    },
    {
      question: "Is the Kia/Hyundai theft trend affecting Dallas?",
      answer: "Yes, significantly. Dallas has seen a surge in Kia and Hyundai thefts due to the 'Kia Boys' trend. Always verify VIN on any 2011-2021 Kia or Hyundai before purchasing."
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
        title="Dallas Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in Dallas-Fort Worth. Free IMEI, VIN, and serial number verification. DFW has 30,000+ vehicle thefts annually."
        keywords="dallas stolen item check, stolen car check dallas, verify stolen dallas, VIN check dallas texas, DFW stolen vehicle"
        canonical="/stolen-check-dallas"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Dallas, Texas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dallas Stolen Item Check</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Dallas-Fort Worth is a top 5 US metro for vehicle theft with 30,000+ thefts annually. Verify before you buy.
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
            <h2 className="text-2xl font-bold mb-6">Dallas-Fort Worth Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">30,000+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">Top 5</div>
                  <div className="text-sm text-muted-foreground">US Metro for Theft</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">Kia/Hyundai</div>
                  <div className="text-sm text-muted-foreground">Most Targeted</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in Dallas?</h3>
              <p>
                The Dallas-Fort Worth metroplex has one of the highest vehicle theft rates in the nation. 
                With a massive secondhand market across Facebook Marketplace, OfferUp, and Craigslist, 
                stolen goods frequently end up for sale to unsuspecting buyers.
              </p>
              <p>
                The "Kia Boys" trend has made older Kia and Hyundai vehicles especially vulnerable. 
                If you're buying any used vehicle in DFW, a quick VIN check can save you from 
                purchasing a stolen car and facing legal consequences.
              </p>
              <p>
                SafeOrStolen's free verification takes just 3 seconds and checks against national 
                databases including NICB, police reports, and insurance claims.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Dallas</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Dallas</h2>
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

export default StolenCheckDallas;
