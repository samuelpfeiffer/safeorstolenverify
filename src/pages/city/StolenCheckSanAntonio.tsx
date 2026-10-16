import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

/** Oct 8 2026 audit: copy rewritten by hand. Removed the invented "11,000+ vehicle thefts" figure
 * and theft-statistics cards, unsupported "most targeted"/"highest theft area" claims, "instant",
 * "3 seconds", "national databases" and "Download App" (it's a free installable web app). */
const StolenCheckSanAntonio = () => {
  const faqs = [
    {
      question: "How do I check if something is stolen in San Antonio?",
      answer: "Get the number off the item: the IMEI on a phone (dial *#06#), the VIN on a car, or the serial on a bike, tool or laptop. Enter it on SafeOrStolen (safeorstolen.com/stolen-check-san-antonio). In a few seconds it searches SafeOrStolen theft reports and public web results, and lists every source searched."
    },
    {
      question: "Where can I safely meet sellers in San Antonio?",
      answer: "Pick a busy, well-lit place with cameras, such as the parking lot of a police substation or a large grocery store during the day. Call the San Antonio Police Department non-emergency line to ask whether your nearest substation welcomes buyers and sellers. A seller who refuses any public spot is a warning sign."
    },
    {
      question: "What should I check before buying a used truck in San Antonio?",
      answer: "Match the VIN on the dashboard, the driver's door sticker and the title, and check the seller's ID against the name on the title. Look for a damaged ignition or steering column and keys that don't look original. Run the VIN on SafeOrStolen to decode the truck and check theft reports before you pay."
    },
    {
      question: "Is it safe to buy a used phone in San Antonio?",
      answer: "It can be, if you check first. Have the seller dial *#06# so you can read the IMEI yourself, run it on SafeOrStolen, and make sure the phone is signed out of the seller's Apple or Google account before you pay. Phones bought after big events and festivals deserve an extra look."
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
        title="San Antonio Stolen Item Check - Verify Before Buying | SafeOrStolen"
        description="Check if a used phone, car, bike or tool is stolen before you buy in San Antonio. Search the IMEI, VIN or serial against SafeOrStolen theft reports. 2 free checks."
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
              Buying used off Marketplace, OfferUp or Craigslist in San Antonio? Enter the IMEI, VIN or serial number and SafeOrStolen searches its theft reports and public web results in a few seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify"><Shield className="w-5 h-5" />Verify Item - Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app"><Download className="w-5 h-5" />Install the Free Web App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h2>Why Check Before Buying in San Antonio?</h2>
              <p>
                Most secondhand deals in San Antonio happen between strangers in a parking lot, paid in cash. If the
                item turns out to be stolen, police can return it to its owner and you lose what you paid. Trucks,
                phones, power tools and bikes are the items to be most careful with, because they're easy to resell.
              </p>
              <p>
                Ask for the IMEI, VIN or serial before you drive out, and run it on SafeOrStolen. When you meet,
                read the number off the item yourself and make sure it matches. A scraped-off serial, a title in
                someone else's name, or a seller who wants to rush is a reason to walk away.
              </p>
              <p>
                SafeOrStolen does not search SAPD files, NCIC or Texas DMV records. If you think you've found a
                stolen item, call the San Antonio Police Department non-emergency line.
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
            <h2 className="text-3xl font-bold mb-4">Check Before You Buy in San Antonio</h2>
            <p className="mb-6 opacity-90">A check takes a few seconds. Your first 2 are free with a free account.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckSanAntonio;
