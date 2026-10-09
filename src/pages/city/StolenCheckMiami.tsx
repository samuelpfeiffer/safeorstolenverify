/**
 * Oct 8 2026: rewritten by hand for "miami stolen item check". Removed invented theft counts,
 * city rankings, unverified scam claims, named police safe-exchange locations, app-store and
 * offline claims, and "3 seconds".
 */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Phone, Car, Download, Bike } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const StolenCheckMiami = () => {
  const faqs = [
    {
      question: "How do I check if a used car in Miami is stolen?",
      answer: "Get the 17-character VIN from the dashboard and the driver's door sticker and make sure they match. Enter it at SafeOrStolen (safeorstolen.com/stolen-check-miami) to decode the year, make and model, see open recalls, and search SafeOrStolen theft reports and public web listings. Then compare the Florida title with the seller's ID before you pay."
    },
    {
      question: "Where should I meet a seller in Miami?",
      answer: "Many South Florida police departments set aside parking spaces or lobbies as safe exchange spots. Call your local department's non-emergency line to ask where theirs is. Meet in daylight, bring someone with you, and check the item's number before any money changes hands."
    },
    {
      question: "How do I check a used phone before buying it in Miami?",
      answer: "Ask the seller to dial *#06# and send you the IMEI. Check it on SafeOrStolen to see the make and model and any theft reports or web listings. At the meetup, make sure the IMEI on the phone matches, and watch the seller sign out of their Apple ID or Google account and reset the phone."
    },
    {
      question: "Can I use SafeOrStolen at Miami flea markets?",
      answer: "Yes. Install the free SafeOrStolen web app from your phone's browser at safeorstolen.com/app. At the stall, scan the barcode on the box or type the serial number. Checks need a data connection, and your first 2 checks are free."
    },
    {
      question: "Does SafeOrStolen search Florida police records?",
      answer: "No. SafeOrStolen searches its own theft reports, filed by owners on the site, and public web listings on every check, plus a national stolen-bicycle registry for bikes and police firearm theft and loss reports from 33 states and DC for guns. It does not search FDLE, FCIC or Florida DMV records."
    },
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Miami Stolen Item Check",
    "description": "Stolen item checks by IMEI, VIN, plate or serial number for buyers in Miami",
    "areaServed": {
      "@type": "City",
      "name": "Miami",
      "containedInPlace": { "@type": "State", "name": "Florida" }
    },
    "provider": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  return (
    <>
      <PageSEO
        title="Miami Stolen Item Check - Check Before You Buy | SafeOrStolen"
        description="Buying used in Miami? Check a phone's IMEI, a car's VIN or a serial number for theft reports and web listings before you meet the seller. 2 free checks."
        keywords="miami stolen item check, miami stolen car check, verify stolen miami, check IMEI miami, VIN check miami fl, stolen phone miami florida"
        canonical="/stolen-check-miami"
        structuredData={[faqSchema, localBusinessSchema]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Miami, Florida</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Miami Stolen Item Check
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Buying a phone, car, bike or tools from Facebook Marketplace, OfferUp, Craigslist or a flea market in
              Miami? Get the IMEI, VIN or serial number from the seller and check it before you meet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Check an item (2 free checks)
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="w-5 h-5" />
                  Install the free web app
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What to check for each item</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Car className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">Cars and trucks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Match the VIN on the dash, the door sticker and the Florida title. A VIN check decodes the model and
                    lists open recalls. After a hurricane, look for silt under the carpet and rust on seat bolts too.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">Phones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check the IMEI from *#06#. Watch the seller remove their Apple ID or Google account and reset the
                    phone in front of you. A carrier blacklist check is available as a paid add-on.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Bike className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">Bikes and tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bike serials are usually under the bottom bracket and are also checked against a national
                    stolen-bicycle registry. On tools, look for a serial plate and for engraved names that were ground off.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Warning signs at a Miami meetup</h2>
            <ul className="space-y-3 text-muted-foreground max-w-3xl mx-auto">
              <li>• The price is far below what the same item usually sells for</li>
              <li>• The seller won't share the serial number, IMEI or VIN before meeting</li>
              <li>• A car's title is in someone else's name, or the seller only has a registration</li>
              <li>• The phone is still signed in to someone else's account, or the seller says it "just needs a reset"</li>
              <li>• The seller wants to meet somewhere other than their home or a police safe exchange spot</li>
              <li>• Several of the same item are listed at once by one profile</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Miami stolen item FAQs</h2>
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

        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Buying in Miami? Check first</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check the number before you meet the seller. It takes a few seconds, and your first 2 checks are free.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/verify">
                <Shield className="w-5 h-5" />
                Check an item
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckMiami;
