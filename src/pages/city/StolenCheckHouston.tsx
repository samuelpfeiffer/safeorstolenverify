import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Car, Wrench, Phone } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckHouston = () => {
  const faqs = [
    {
      question: "How do I check if a car in Houston is stolen?",
      answer: "Use SafeOrStolen's free VIN checker. Houston is one of the top 10 US cities for vehicle theft with over 35,000 annually. Full-size trucks are especially targeted."
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
      <PageSEO
        title="Houston Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in Houston. Free IMEI, VIN, and serial number verification. Houston has 35,000+ vehicle thefts annually."
        keywords="houston stolen item check, stolen car check houston, verify stolen houston, VIN check houston, HPD stolen vehicle"
        canonical="/stolen-check-houston"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Houston, Texas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Houston Stolen Item Check</h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Houston ranks in the top 10 US cities for vehicle theft with over 35,000 thefts annually. Verify used items before buying.
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
            <h2 className="text-2xl font-bold mb-6">Houston Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">35,000+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Wrench className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">High</div>
                  <div className="text-sm text-muted-foreground">Tool Theft Rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">F-150</div>
                  <div className="text-sm text-muted-foreground">Most Stolen Vehicle</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in Houston?</h3>
              <p>
                Houston's sprawling metro area and thriving economy create one of the largest secondhand 
                markets in Texas. Unfortunately, this also means stolen goods frequently appear for sale 
                on Facebook Marketplace, OfferUp, and Craigslist.
              </p>
              <p>
                The city's massive construction industry makes power tools especially vulnerable. 
                Catalytic converter theft has also surged, making it crucial to verify any used 
                vehicle purchase. SafeOrStolen's free verification takes just 3 seconds and checks 
                against national databases.
              </p>
              <h3>HPD Safe Exchange Zones</h3>
              <p>
                The Houston Police Department offers safe exchange zones at police substations 
                throughout the city. Popular locations include the Central Station downtown, 
                Clear Lake Station, and Memorial Station. Even at safe zones, always verify 
                items before completing the transaction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Houston</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Houston</h2>
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

export default StolenCheckHouston;
