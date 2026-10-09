/** Oct 7 2026: copy fixed by hand for "craigslist scam check". Removed "police reports and registries nationwide", "instant"/"3 seconds", "mobile app" and overclaims. */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Download, MapPin, Clock } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const CraigslistSafetyVerification = () => {
  const faqs = [
    {
      question: "How can I tell if a Craigslist item is stolen?",
      answer: "Ask the seller for the IMEI, VIN or serial number and enter it at SafeOrStolen (safeorstolen.com/craigslist-safety-verification) before you meet. Every check searches SafeOrStolen theft reports and public web results; gun checks add police theft reports from 33 states and DC, and bike checks add a national stolen-bicycle registry. A seller who won't share the number is a warning sign."
    },
    {
      question: "Is Craigslist safe for buying used items?",
      answer: "It can be, if you do the checking yourself, since Craigslist has no buyer protection. Get the serial, IMEI or VIN and check it before meeting, meet in a public place (many police stations have a safe exchange spot), inspect the item before paying, and walk away if the price or story doesn't add up."
    },
    {
      question: "What should I check before buying a car on Craigslist?",
      answer: "Run the VIN through SafeOrStolen to decode it, see open recalls and search theft reports. At the car, make sure the VIN on the dash, the driver's door jamb and the title all match, the name on the title matches the seller's ID, and the VIN plate shows no scratches or loose rivets. Get a pre-purchase inspection on anything expensive."
    },
    {
      question: "Can I get in trouble for buying stolen items on Craigslist?",
      answer: "Yes. Receiving stolen property is a crime in every state. Prosecution usually turns on whether you knew or should have known, and a very low price or a seller with no paperwork can count against you. Even if you aren't charged, police can take the item back for its owner and you lose what you paid."
    },
    {
      question: "How do I verify a phone isn't stolen before buying on Craigslist?",
      answer: "Ask the seller for the IMEI (they can dial *#06#). Enter it at SafeOrStolen to see the make and model and any theft report or web mention; a lost/stolen carrier blacklist check is a paid add-on. At the meetup, have the seller sign out of their Apple ID or Google account and erase the phone in front of you."
    },
    {
      question: "What's the safest way to buy on Craigslist?",
      answer: "Check the serial, IMEI or VIN before you agree to meet. Meet at a police station safe exchange spot or a busy public place, in daylight, and bring someone. Make sure the number on the item matches what you checked, and pay only after you've inspected it."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <PageSEO
        title="Craigslist Scam Check - Verify Items Before Meetup"
        description="Check if a Craigslist item is stolen before you meet the seller: run the IMEI, VIN or serial in a few seconds. Safe meetup steps and warning signs. 2 free checks."
        keywords="craigslist safety, craigslist scam check, verify craigslist item"
        canonical="/craigslist-safety-verification"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Craigslist Safety</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Craigslist Safety Check - Verify Items Before Meeting Sellers
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get the IMEI, VIN or serial number from the seller and check it before you drive out. 
              The result comes back in a few seconds, and your first 2 checks are free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Craigslist Item Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="w-5 h-5" />
                  Get the Free Web App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Craigslist Needs Extra Caution */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Craigslist Requires Extra Caution
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Anonymous Sellers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Craigslist sellers don't need a profile, and replies go through relay email. 
                    You often know nothing about who you're meeting.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    No Purchase Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Craigslist offers no buyer protection. If you pay cash for a stolen item and 
                    police take it back, there's no one to refund you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    High-Value Target
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cash and quick local meetups make Craigslist an easy place to unload stolen 
                    electronics, tools and bikes fast.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Craigslist safety content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              The Complete Guide to Craigslist Safety
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground space-y-4">
              <p>
                Craigslist is still where a lot of people buy used cars, tools, electronics and furniture from strangers. The deals can be good. The risks are real, and on Craigslist they're all on you.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Why Craigslist is a Target for Stolen Goods</h3>
              <p>
                Craigslist doesn't need a profile to post. Replies run through relay email, and cash leaves no record. That same simplicity makes it easy for someone to post an item the day it was stolen and be gone with the cash by evening.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Understanding Your Legal Risk</h3>
              <p>
                Many Craigslist buyers don't realize the legal jeopardy they face when purchasing stolen items. In every state, receiving stolen property is a crime. Prosecution usually depends on whether you knew or should have known the item was stolen, and a price far below market, an odd meeting place or a seller with no paperwork can all count against you. Even if you aren't charged, police can take the item back for its owner, and you're out the money.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">High-Risk Categories on Craigslist</h3>
              <p>
                Phones and tablets, laptops (MacBooks especially), power tools taken from job sites and trucks, and bikes are easy to steal and quick to resell, so be most careful with those. Cars and motorcycles show up too; check the VIN on the dash and door jamb against the title. Craigslist doesn't allow gun listings, so a gun offered through it is a red flag on its own.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Why Verification Matters More on Craigslist</h3>
              <p>
                Craigslist has no dispute process and no refunds, so once you hand over cash there's nothing to fall back on. That's why the checking has to happen before you pay. With SafeOrStolen you can run the IMEI, VIN or serial before you meet and get a dated record of the check in your account. A clean result means no report turned up in the records searched, so still inspect the item and the paperwork.
              </p>
            </div>
          </div>
        </section>

        {/* Safe Meetup Guide */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Craigslist Safe Meetup Guide
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Follow these steps to protect yourself when buying from Craigslist sellers
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Verify First</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the IMEI/VIN/serial number and verify with SafeOrStolen before agreeing to meet
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Public Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet at a police station safe exchange zone, bank lobby, or busy public area
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Daylight Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Only meet during daylight hours and bring a friend or family member with you
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">4. Verify On-Site</h3>
                  <p className="text-sm text-muted-foreground">
                    Read the number off the item and run it again in the SafeOrStolen web app before paying
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Items to Always Verify */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Craigslist Items Worth Checking Every Time
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Phones & Tablets", items: ["iPhones", "Samsung Galaxy", "iPads", "Android tablets"], check: "IMEI" },
                { title: "Vehicles", items: ["Cars & Trucks", "Motorcycles", "RVs & Campers", "Boats"], check: "VIN" },
                { title: "Electronics", items: ["Laptops", "Gaming consoles", "TVs", "Cameras"], check: "Serial" },
                { title: "Tools & Equipment", items: ["Power tools", "Construction equipment", "Generators", "Lawn equipment"], check: "Serial" },
                { title: "Bikes", items: ["Road bikes", "Mountain bikes", "E-bikes", "Motorcycle"], check: "Serial/VIN" },
                { title: "Firearms", items: ["Handguns", "Rifles", "Shotguns", "All firearms"], check: "Serial" }
              ].map((category, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 mb-4">
                      {category.items.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs font-medium text-primary">Check: {category.check}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Craigslist Safety FAQs
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i}>
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

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Safe on Craigslist
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Check the number before you pay. It takes a few seconds, and your first 2 checks are free.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify an Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CraigslistSafetyVerification;
