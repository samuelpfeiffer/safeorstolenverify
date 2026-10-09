import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Smartphone, Car, Laptop, Clock, Download, MapPin, Users } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

/** Oct 8 2026: audited by hand for "facebook marketplace stolen check". Removed app-store, offline, "3 seconds" and invented statistic claims. */
const FacebookMarketplaceStolenCheck = () => {
  const faqs = [
    {
      question: "How do I check if an item on Facebook Marketplace is stolen?",
      answer: "Ask the seller for the IMEI (phones), VIN (vehicles) or serial number (electronics, tools, bikes, guns), then enter it at SafeOrStolen (safeorstolen.com/facebook-marketplace-stolen-check). In a few seconds it searches SafeOrStolen theft reports and public web listings for that number, plus extra records for guns, bikes and Arizona vehicles. Do it before you drive to meet the seller."
    },
    {
      question: "Can I verify items before meeting a Facebook Marketplace seller?",
      answer: "Yes. Ask for the number in Messenger and check it before you go. At the meetup, make sure the number on the item matches the one you checked. The free SafeOrStolen web app at safeorstolen.com/app installs from your phone's browser and can scan a barcode with your camera; it needs a data connection to run a check."
    },
    {
      question: "What types of items can I verify on Facebook Marketplace?",
      answer: "SafeOrStolen checks phones by IMEI, cars, trucks and motorcycles by VIN or license plate, and laptops, tablets, cameras, consoles, power tools, bikes and guns by serial number. Anything with a unique number on it can be checked; items without one, like most jewelry, can't."
    },
    {
      question: "Is it illegal to buy stolen items on Facebook Marketplace?",
      answer: "Knowingly buying stolen property is a crime in every state, and in many states a price far below value can be used as evidence you should have known. Even if you're never charged, police can take the item back and return it to the owner, and you lose what you paid."
    },
    {
      question: "How can I tell if a Facebook Marketplace seller is selling stolen goods?",
      answer: "Watch for a price far below what the item usually sells for, a seller who won't share the serial number, a brand-new or empty profile, pressure to meet right now, and several of the same item listed at once. None of these proves theft, but together they're a reason to check the number and walk away if anything doesn't match."
    },
    {
      question: "What should I do if I discover an item is stolen?",
      answer: "Don't buy it and don't confront the seller. Screenshot the listing and your messages, report the listing to Facebook, and call your local police non-emergency line with the number you checked. If you already bought it, contact police and keep your payment records."
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Facebook Marketplace Stolen Item Check - Free Verification",
    "description": "Check if items on Facebook Marketplace are stolen before buying. Free IMEI, VIN, and serial number verification to protect yourself from stolen goods.",
    "url": "https://safeorstolen.com/facebook-marketplace-stolen-check",
    "mainEntity": {
      "@type": "Service",
      "name": "Facebook Marketplace Stolen Item Verification",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      }
    }
  };

  return (
    <>
      <PageSEO
        title="Facebook Marketplace Stolen Item Check - Free Verification | SafeOrStolen"
        description="Check if a Facebook Marketplace item is stolen before you buy. Enter the IMEI, VIN or serial number and see theft reports and web listings in a few seconds."
        keywords="facebook marketplace stolen, check stolen before buying facebook, verify facebook marketplace item, facebook marketplace scam check, stolen item checker facebook"
        canonical="/facebook-marketplace-stolen-check"
        structuredData={[webPageSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Facebook Marketplace Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Check if Items Are Stolen on Facebook Marketplace
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Before you meet the seller, ask for the IMEI, VIN or serial number and check it. SafeOrStolen searches its
              own theft reports and public web listings for that number in a few seconds. Your first 2 checks are free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Item Now - Free
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

        {/* Problem Section */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">The Hidden Danger of Facebook Marketplace</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stolen phones, bikes, tools and cars get listed on Facebook Marketplace because it's fast, free and
                local. If you buy one, police can take it back and you lose your money.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Smartphone className="w-5 h-5" />
                    Stolen Phones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stolen iPhones and Samsung phones show up on Marketplace often. A phone reported stolen can be
                    blacklisted by carriers, and an iPhone still tied to someone else's Apple ID can't be set up.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Car className="w-5 h-5" />
                    Stolen Vehicles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cars, motorcycles, and boats with cloned or altered VINs appear legitimate until 
                    police recover them. You'll lose the vehicle and your money.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Laptop className="w-5 h-5" />
                    Stolen Electronics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Laptops, tablets, gaming consoles, and cameras are frequently stolen and resold. 
                    Serial numbers can reveal if the item was reported stolen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Verify Facebook Marketplace Items
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Ask for Details</h3>
                <p className="text-sm text-muted-foreground">
                  Request the IMEI, VIN, or serial number from the seller before meeting
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Enter the Number</h3>
                <p className="text-sm text-muted-foreground">
                  Use SafeOrStolen's free verification tool to check the identifier
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Read the Result</h3>
                <p className="text-sm text-muted-foreground">
                  In a few seconds: reported stolen, possible match, or no report found, with every source listed
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Match It at the Meetup</h3>
                <p className="text-sm text-muted-foreground">
                  Make sure the number on the item is the one you checked before you pay
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <Download className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Verify Items at the Meetup Location
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Install the free SafeOrStolen web app from your phone's browser. At the meetup, scan the barcode on the
              box or label with your camera and check the number before you hand over cash. Checks need a data connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/app">Install the free web app</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Installs from Safari or Chrome at safeorstolen.com/app. Not in the App Store or Google Play.
            </p>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Red Flags on Facebook Marketplace Listings
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Price Too Good to Be True", desc: "Stolen items are often priced well below what the same item sells for, to move them fast" },
                { title: "Seller Won't Provide Serial Number", desc: "Legitimate sellers have nothing to hide and will share identifiers" },
                { title: "New Account with No History", desc: "Thieves create fresh accounts to avoid being traced" },
                { title: "Rushing the Sale", desc: "Pressure to meet immediately or 'another buyer waiting' is suspicious" },
                { title: "Won't Meet in Public", desc: "Insisting on private locations may indicate stolen goods" },
                { title: "Cash Only, No Records", desc: "Avoiding any paper trail is a common thief tactic" },
                { title: "Missing Original Packaging", desc: "No box, receipt, or accessories could indicate theft" },
                { title: "Factory Reset Already Done", desc: "Pre-wiped devices may be hiding activation locks" }
              ].map((flag, i) => (
                <Card key={i}>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{flag.title}</h3>
                      <p className="text-sm text-muted-foreground">{flag.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
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

        {/* Final CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Risk Buying Stolen Goods
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Check the number before your next Facebook Marketplace purchase. Your first 2 checks are free.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify an Item Now - It's Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FacebookMarketplaceStolenCheck;
