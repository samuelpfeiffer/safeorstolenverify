import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Car, AlertTriangle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
const StolenCheckSanDiego = () => {
  const faqs = [
    {
      question: "Why is vehicle theft higher in San Diego?",
      answer: "San Diego's proximity to the Mexican border makes it a prime location for vehicle trafficking. Stolen cars can be across the border within hours, making recovery difficult."
    },
    {
      question: "Where can I safely meet sellers in San Diego?",
      answer: "SDPD offers safe exchange zones at police stations including the Downtown Central Division and Northern Division. Many fire stations also welcome safe exchanges."
    },
    {
      question: "What vehicles are most targeted in San Diego?",
      answer: "Full-size trucks (especially F-150s and Silverados), Toyota Camrys, and Honda Civics are frequently stolen. Newer SUVs and crossovers are also targeted."
    },
    {
      question: "Is motorcycle theft common in San Diego?",
      answer: "Yes. San Diego's year-round riding weather makes motorcycles prime targets. Always verify VIN before purchasing any motorcycle in the San Diego area."
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
        title="San Diego Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in San Diego. Free IMEI, VIN, and serial number verification. San Diego's border proximity increases stolen vehicle trafficking risk."
        keywords="san diego stolen item check, stolen car check san diego, verify stolen san diego, SDPD stolen vehicle, VIN check san diego"
        canonical="/stolen-check-san-diego"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">San Diego, California</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">San Diego Stolen Item Check</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              San Diego's border proximity increases stolen vehicle trafficking. Always verify VIN, IMEI, and serial numbers before buying used items.
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
            <h2 className="text-2xl font-bold mb-6">San Diego Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">7,500+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <AlertTriangle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">Border</div>
                  <div className="text-sm text-muted-foreground">Trafficking Risk</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">Trucks</div>
                  <div className="text-sm text-muted-foreground">Most Targeted</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in San Diego?</h3>
              <p>
                San Diego's unique position along the U.S.-Mexico border creates additional risks for 
                secondhand buyers. Stolen vehicles can be transported across the border within hours, 
                making recovery nearly impossible. This also means that "cloned" VINs from legitimate 
                vehicles are sometimes used on stolen cars.
              </p>
              <p>
                SafeOrStolen checks against multiple databases including NICB, police reports, and 
                insurance claims to help identify potentially stolen items. Our free verification 
                takes just 3 seconds and could save you from purchasing a stolen vehicle or device.
              </p>
              <h3>SDPD Safe Exchange Zones</h3>
              <p>
                The San Diego Police Department offers safe exchange zones at police stations 
                throughout the city. Popular locations include the Downtown Central Division, 
                Northern Division in Scripps Ranch, and the Mid-City Division. Always verify 
                items with SafeOrStolen before completing any transaction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - San Diego</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in San Diego</h2>
            <p className="mb-6 opacity-90">Free verification takes just 3 seconds. Protect yourself today.</p>
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

export default StolenCheckSanDiego;
