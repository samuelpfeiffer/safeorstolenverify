import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckPhiladelphia = () => {
  // Oct 7 2026: fixed by hand. Removed theft counts and percentages we can't source, specific
  // safe-exchange district claims, "national databases", "3 seconds" and "Download App".
  const faqs = [
    {
      question: "How do I check if a car in Philadelphia is stolen?",
      answer: "Enter the VIN or the Pennsylvania plate at SafeOrStolen (safeorstolen.com/stolen-check-philadelphia). In a few seconds it searches SafeOrStolen theft reports and public web results, and a VIN check also decodes the car and lists open recalls. It doesn't search Philadelphia police records, so on a car you're serious about, also call the PPD non-emergency line with the VIN."
    },
    {
      question: "Where can I safely meet sellers in Philly?",
      answer: "Meet in a busy, well-lit public place in daylight, ideally with cameras around. Some buyers meet outside a police district headquarters; call your district first to ask whether that's welcome. Bring someone with you, and don't hand over cash until you've matched the serial, IMEI or VIN on the item to the number you checked."
    },
    {
      question: "Is the Kia Boys trend affecting Philadelphia?",
      answer: "Yes. Philadelphia saw a rise in thefts of older Kia and Hyundai models with a key ignition after the theft method spread on social media. If you're buying one, look for a cracked steering column cover or a damaged ignition, ask whether the anti-theft software update was installed, and run the VIN."
    },
    {
      question: "What other items are commonly stolen in Philly?",
      answer: "Besides cars, catalytic converters, e-bikes, phones, laptops, ATVs and dirt bikes get stolen and resold in Philadelphia. For a phone, check the IMEI; for a bike or laptop, the serial; for an ATV or dirt bike, the VIN. A price far below market and a seller with no receipt are the usual warning signs."
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
        description="Philadelphia stolen item check: run a VIN, plate, IMEI or serial in a few seconds before you buy on Marketplace, OfferUp or Craigslist. 2 free checks."
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
              Buying a used car, bike or phone in Philly? Check the VIN, IMEI or serial before you meet the seller. Your first 2 checks are free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify"><Shield className="w-5 h-5" />Verify Item - Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app"><Download className="w-5 h-5" />Get the Free Web App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h2>Why Check Before Buying in Philadelphia?</h2>
              <p>
                Philadelphia saw a surge in car thefts tied to the "Kia Boys" trend, which targets older Kia and Hyundai
                models that use a key ignition and lack an engine immobilizer. Those cars, along with e-bikes, phones and
                catalytic converters, turn up for sale on Facebook Marketplace, OfferUp and Craigslist.
              </p>
              <p>
                A SafeOrStolen check searches SafeOrStolen theft reports and public web results for the VIN, plate, IMEI or
                serial, and the result comes back in a few seconds with every source listed. Bike checks also search a
                national stolen-bicycle registry. It doesn't search PPD, PennDOT or NCIC records.
              </p>
              <h3>At the meetup</h3>
              <p>
                Meet somewhere busy and public, in daylight. Read the number off the item yourself and make sure it matches
                what you checked. On a Kia or Hyundai, look at the steering column and ignition before anything else.
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

export default StolenCheckPhiladelphia;
