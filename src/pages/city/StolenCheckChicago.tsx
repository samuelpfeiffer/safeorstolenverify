import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

/** Oct 8 2026 audit: copy rewritten by hand. Removed the invented "20,000+ thefts" and "Top 10"
 * statistics, neighborhood theft-rate claims, unconfirmed district-station names, and
 * "Get Mobile App" (it's a free installable web app). */
const StolenCheckChicago = () => {
  const faqs = [
    {
      question: "How do I check if a car in Chicago is stolen?",
      answer: "Ask the seller for the 17-character VIN and enter it on SafeOrStolen (safeorstolen.com/stolen-check-chicago). In a few seconds it decodes the year, make and model, lists open recalls, and searches SafeOrStolen theft reports and public web results. Then match the VIN on the dash, door sticker and title before you pay."
    },
    {
      question: "Where can I safely meet sellers in Chicago?",
      answer: "Meet in daylight somewhere busy with cameras, such as the lobby or parking lot of a Chicago Police district station. Call the non-emergency line, 311, to ask about your nearest station. A seller who won't meet anywhere public, or keeps changing the spot, is a warning sign."
    },
    {
      question: "What should I check on a used Kia or Hyundai in Chicago?",
      answer: "Many older Kia and Hyundai models without push-button start were easy to steal, so look at the steering column for cracked plastic, a punched ignition or a screwdriver-turned lock. Ask whether the free anti-theft software update was installed, and run the VIN on SafeOrStolen before you buy."
    },
    {
      question: "How do I check a used phone or bike in Chicago?",
      answer: "For a phone, have the seller dial *#06# and run the IMEI on SafeOrStolen. For a bike, turn it over and read the serial under the bottom bracket; bike checks also search a national stolen-bicycle registry. Do it before you hand over cash, and walk away from a scratched-off serial."
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
        title="Chicago Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if a used car, phone or bike is stolen before you buy in Chicago. Search the VIN, IMEI or serial against SafeOrStolen theft reports in a few seconds."
        keywords="chicago stolen item check, stolen car check chicago, verify stolen chicago, check IMEI chicago, VIN check chicago"
        canonical="/stolen-check-chicago"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Chicago, Illinois</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chicago Stolen Item Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Buying used on Facebook Marketplace or Craigslist in Chicago? Enter the VIN, IMEI or serial number and SafeOrStolen searches its theft reports and public web results in a few seconds. 2 checks free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">Check Item Now - Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/app"><Download className="mr-2 h-4 w-4" /> Install the Free Web App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Before You Pay in Chicago</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="font-bold text-primary mb-1">Get the number first</div>
                  <div className="text-sm text-muted-foreground">Ask for the VIN, IMEI or serial in the chat, and check it before you travel.</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="font-bold text-primary mb-1">Match it in person</div>
                  <div className="text-sm text-muted-foreground">Read the number off the item yourself. It should match what the seller sent.</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="font-bold text-primary mb-1">Check the paperwork</div>
                  <div className="text-sm text-muted-foreground">For a car, the name on the title should match the seller's ID.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Chicago</h2>
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
      </div>
    </>
  );
};

export default StolenCheckChicago;
