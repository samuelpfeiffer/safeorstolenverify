import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
const StolenCheckPhoenix = () => {
  const faqs = [
    {
      question: "How bad is vehicle theft in Phoenix?",
      answer: "Phoenix consistently ranks in the top 10 US cities for vehicle theft per capita with over 14,000 thefts annually. Always verify VIN before purchasing."
    },
    {
      question: "Where can I safely meet sellers in Phoenix?",
      answer: "Phoenix PD and surrounding cities offer safe exchange zones. The Phoenix Police HQ at 620 W Washington and various precincts offer monitored meetup locations."
    },
    {
      question: "Is motorcycle theft common in Phoenix?",
      answer: "Yes. Arizona's year-round riding weather makes it a hotspot for motorcycle theft. Always verify the VIN of any motorcycle purchase."
    },
    {
      question: "What about stolen items from Mexico?",
      answer: "Phoenix's proximity to the border means some stolen vehicles are trafficked. Always verify VIN to ensure the vehicle isn't stolen or cloned."
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
        title="Phoenix Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in Phoenix. Free IMEI, VIN, and serial number verification. Phoenix ranks top 10 for vehicle theft."
        keywords="phoenix stolen item check, stolen car check phoenix, verify stolen phoenix, VIN check phoenix arizona"
        canonical="/stolen-check-phoenix"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Phoenix, Arizona</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phoenix Stolen Item Check</h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Phoenix ranks top 10 in the US for vehicle theft per capita. Verify before buying.
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
            <h2 className="text-3xl font-bold text-center mb-12">Phoenix Verification FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Phoenix</h2>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckPhoenix;
