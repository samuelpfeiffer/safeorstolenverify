import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Laptop, Phone, Car } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckSanJose = () => {
  const faqs = [
    {
      question: "What electronics are most commonly stolen in San Jose?",
      answer: "MacBooks, iPhones, iPads, and gaming laptops are the most frequently stolen electronics in Silicon Valley. Car break-ins targeting tech workers are common, so always verify serial numbers."
    },
    {
      question: "Where can I safely meet sellers in San Jose?",
      answer: "SJPD offers safe exchange zones at police substations. The Downtown Division and Evergreen Division are popular choices. Apple Store lobbies are also recommended for electronics."
    },
    {
      question: "Is vehicle theft common in San Jose?",
      answer: "Yes. San Jose sees over 6,000 vehicle thefts annually. Catalytic converter theft is also rampant, particularly targeting Toyota Prius and Honda vehicles."
    },
    {
      question: "How do I verify a used laptop before buying?",
      answer: "Use SafeOrStolen to check the serial number. For MacBooks, also verify the Find My status is disabled and the device isn't Activation Locked."
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
        title="San Jose Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if items are stolen in San Jose. Free IMEI, VIN, and serial number verification. Silicon Valley sees high electronics and laptop theft rates."
        keywords="san jose stolen item check, stolen laptop san jose, verify stolen silicon valley, serial number check san jose, SJPD stolen"
        canonical="/stolen-check-san-jose"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">San Jose, California</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">San Jose Stolen Item Check</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Silicon Valley's tech hub sees high rates of electronics theft. Verify laptops, phones, and devices before buying.
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
            <h2 className="text-2xl font-bold mb-6">Silicon Valley Theft Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Laptop className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">High</div>
                  <div className="text-sm text-muted-foreground">Electronics Theft</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">6,000+</div>
                  <div className="text-sm text-muted-foreground">Vehicle Thefts/Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">MacBooks</div>
                  <div className="text-sm text-muted-foreground">Most Targeted</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in San Jose?</h3>
              <p>
                Silicon Valley's concentration of tech workers makes San Jose a prime target for 
                electronics theft. Car break-ins targeting laptops, phones, and tablets are extremely 
                common, especially in downtown parking lots and near tech company offices. These 
                stolen devices often end up for sale on Facebook Marketplace, OfferUp, and Craigslist.
              </p>
              <p>
                SafeOrStolen helps you verify if a device has been reported stolen before you buy. 
                For Apple devices, we recommend also checking the Find My status and Activation Lock. 
                Our free verification takes just 3 seconds.
              </p>
              <h3>SJPD Safe Exchange Zones</h3>
              <p>
                The San Jose Police Department offers safe exchange zones at substations throughout 
                the city. For electronics purchases, consider meeting at the Apple Store lobby 
                (Valley Fair or Santana Row) during business hours, as staff can help verify 
                device legitimacy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - San Jose</h2>
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
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in San Jose</h2>
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

export default StolenCheckSanJose;
