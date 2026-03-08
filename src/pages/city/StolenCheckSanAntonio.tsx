import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, AlertTriangle, CheckCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
const StolenCheckSanAntonio = () => {
  const faqs = [
    {
      question: "How common is vehicle theft in San Antonio?",
      answer: "San Antonio reports over 11,000 vehicle thefts annually, ranking it among Texas's highest for auto theft. Trucks and SUVs are particularly targeted due to their resale value."
    },
    {
      question: "Where can I safely meet sellers in San Antonio?",
      answer: "SAPD offers safe exchange zones at police substations throughout the city. The Public Safety Headquarters at 315 S Santa Rosa Ave is a popular option. Many H-E-B parking lots also have security cameras."
    },
    {
      question: "What items are commonly stolen in San Antonio?",
      answer: "Beyond vehicles, catalytic converters, power tools, bicycles, and electronics are frequently stolen. Always verify serial numbers before purchasing used items."
    },
    {
      question: "Is phone theft a problem in San Antonio?",
      answer: "Yes, especially during festivals like Fiesta. Always verify IMEI numbers before buying used phones to avoid purchasing stolen devices."
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
        title="San Antonio Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in San Antonio. Free IMEI, VIN, and serial number verification. San Antonio has 11,000+ vehicle thefts per year."
        keywords="san antonio stolen item check, stolen car check san antonio, verify stolen texas, SAPD stolen vehicle, VIN check san antonio"
        canonical="/stolen-check-san-antonio"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">San Antonio, Texas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">San Antonio Stolen Item Check</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              San Antonio has over 11,000 vehicle thefts annually. Protect yourself by verifying IMEI, VIN, and serial numbers before buying used items.
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
            <h2 className="text-2xl font-bold mb-6">San Antonio Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">11,000+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">Trucks/SUVs</div>
                  <div className="text-sm text-muted-foreground">Most Targeted</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">West Side</div>
                  <div className="text-sm text-muted-foreground">Highest Theft Area</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in San Antonio?</h3>
              <p>
                San Antonio's thriving secondhand market on Facebook Marketplace, OfferUp, and Craigslist makes it 
                easy to find great deals. However, the city's high theft rate means stolen goods frequently appear 
                for sale. Buying a stolen item can result in losing both the item and your money, plus potential 
                legal complications.
              </p>
              <p>
                SafeOrStolen provides instant verification against national databases. Our free check takes just 
                3 seconds and can save you thousands of dollars and legal headaches.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - San Antonio</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in San Antonio</h2>
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

export default StolenCheckSanAntonio;
