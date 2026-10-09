/** Oct 8 2026: copy fixed by hand. Removed the vehicle-theft count, "most stolen" rankings, unverified substation and Apple Store claims, "Download App" and "3 seconds". */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Laptop, Phone, Car } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckSanJose = () => {
  const faqs = [
    {
      question: "What electronics are most commonly stolen in San Jose?",
      answer: "Laptops, phones and tablets left in parked cars are frequent targets of car break-ins around San Jose, and they tend to show up for resale online. If you're buying a used MacBook, iPhone, iPad or gaming laptop, ask for the serial number or IMEI first and check it on SafeOrStolen (safeorstolen.com/stolen-check-san-jose)."
    },
    {
      question: "Where can I safely meet sellers in San Jose?",
      answer: "Meet in a busy, well-lit public place during the day. Many police departments, including in the San Jose area, have a designated parking spot or lobby for online sales; call the SJPD non-emergency line to ask where the nearest one is. A seller who refuses to meet somewhere public is a warning sign."
    },
    {
      question: "Is vehicle theft common in San Jose?",
      answer: "Vehicle theft and catalytic converter theft both happen in San Jose, as in most big California cities. Before buying a used car, check the plate and VIN on SafeOrStolen, match the VIN on the dashboard, door jamb and title, and look underneath for a missing or replaced converter."
    },
    {
      question: "How do I verify a used laptop before buying?",
      answer: "Check the serial number on SafeOrStolen, which searches its theft reports and public web results. On a MacBook, open System Settings and make sure the seller has signed out of their Apple ID and turned off Find My, then watch them erase it. A laptop still locked to someone else's account is a reason to walk away."
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
        description="San Jose stolen item check: look up a laptop serial number, phone IMEI or car VIN for theft reports before you buy. 2 free checks, results in a few seconds."
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
              Buying a used laptop, phone or car in San Jose? Check its serial number, IMEI or VIN for theft reports before you pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify"><Shield className="w-5 h-5" />Verify Item - Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app"><Download className="w-5 h-5" />Get the free web app</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">What to check in San Jose</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Laptop className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary">Laptops</div>
                  <div className="text-sm text-muted-foreground">Check the serial number and Find My</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary">Cars</div>
                  <div className="text-sm text-muted-foreground">Check the plate and the VIN</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary">Phones</div>
                  <div className="text-sm text-muted-foreground">Check the IMEI (dial *#06#)</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Verify Before Buying in San Jose?</h3>
              <p>
                Car break-ins for laptops, phones and tablets are a familiar problem around San Jose,
                and stolen devices often end up for sale on Facebook Marketplace, OfferUp and Craigslist.
                A price well below similar listings and a seller in a hurry are the usual signs.
              </p>
              <p>
                SafeOrStolen helps you verify if a device has been reported stolen before you buy. 
                For Apple devices, also make sure the seller has signed out of their Apple ID so Activation Lock is off.
                A check takes a few seconds, and your first 2 are free.
              </p>
              <h3>Where to meet</h3>
              <p>
                Meet somewhere public, busy and well lit, during the day. Ask the San Jose Police Department's
                non-emergency line whether there's a designated spot for online sales near you. Bring a charger
                so you can power the device on and check it before you pay.
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
            <p className="mb-6 opacity-90">A check takes a few seconds, and your first 2 are free.</p>
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
