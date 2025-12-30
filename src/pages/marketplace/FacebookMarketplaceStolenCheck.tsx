import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Smartphone, Car, Laptop, Clock, Download, MapPin, Users, XCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const FacebookMarketplaceStolenCheck = () => {
  const faqs = [
    {
      question: "How do I check if something on Facebook Marketplace is stolen?",
      answer: "Ask the seller for the serial number (or IMEI for phones, VIN for cars). Enter it into SafeOrStolen's free checker - you'll know in 2 seconds if it's stolen. Do this BEFORE you meet the seller."
    },
    {
      question: "What if the Facebook Marketplace seller won't give me the serial number?",
      answer: "That's a huge red flag! Legitimate sellers have nothing to hide. If they refuse, make excuses, or pressure you to buy without checking - walk away. They're almost certainly selling stolen goods."
    },
    {
      question: "Is it illegal to buy stolen items even if I didn't know?",
      answer: "Yes. In all 50 states, receiving stolen property is a crime - even if you had no idea it was stolen. You can face criminal charges, and police will confiscate the item with no refund."
    },
    {
      question: "How common are stolen items on Facebook Marketplace?",
      answer: "More common than you think. Studies show 1 in 5 secondhand electronics may have a questionable history. Facebook's ease of use and lack of verification makes it a hotspot for stolen goods."
    },
    {
      question: "What happens if I already bought something stolen on Facebook?",
      answer: "Contact local police immediately - you're a victim too. Keep all messages from the seller as evidence. Unfortunately, you likely won't get your money back, which is why checking BEFORE buying is so important."
    },
    {
      question: "Can I check if an iPhone is stolen on Facebook Marketplace?",
      answer: "Yes! Ask the seller to send you the IMEI (they can find it by dialing *#06# on the phone). Enter the IMEI in SafeOrStolen's checker. We'll tell you if it's blacklisted or reported stolen."
    },
    {
      question: "What about checking cars on Facebook Marketplace?",
      answer: "Absolutely. Ask for the VIN (17 characters, visible on the dashboard through the windshield). We check against stolen vehicle databases, NICB records, and insurance claims."
    },
    {
      question: "How do I report a stolen item I found on Facebook Marketplace?",
      answer: "Don't confront the seller. Report the listing to Facebook through their 'Report' feature. You can also file a report with local police if you have evidence (like a stolen serial number result)."
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
        title="Is This Facebook Marketplace Item Stolen? Check Before Buying | SafeOrStolen"
        description="Buying on Facebook Marketplace? Check if phones, cars, bikes are stolen before meeting the seller. Free 2-second verification. Don't become a victim of stolen goods."
        keywords="facebook marketplace stolen, is this stolen facebook marketplace, check before buying facebook marketplace, facebook marketplace scam, how to check if phone is stolen facebook"
        canonical="/facebook-marketplace-stolen-check"
        structuredData={[webPageSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Facebook Marketplace Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Is This Facebook Marketplace Item Stolen? Check Before You Buy
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              That "great deal" on Facebook Marketplace could cost you everything. Before you meet the seller 
              and hand over cash, take 2 seconds to check if it's stolen. <strong>Free</strong> and <strong>instant</strong>.
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
                  Download Mobile App
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
                Every day, thousands of stolen items are listed on Facebook Marketplace. 
                Without verification, you could unknowingly become a victim.
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
                    iPhones and Samsung devices are the most commonly stolen items sold on Facebook Marketplace. 
                    A stolen phone can be blacklisted, making it unusable on any carrier.
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
                    police recover them. You'll lose the vehicle AND your money.
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
                <h3 className="font-semibold mb-2">Get Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Within 3 seconds, know if the item is reported stolen or safe
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Buy with Confidence</h3>
                <p className="text-sm text-muted-foreground">
                  Complete your purchase knowing the item is legitimate
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
              Download the SafeOrStolen app to verify items on-the-spot. Scan barcodes in 3 seconds, 
              works offline, and gives you instant peace of mind before handing over cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/app">Download Free App</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available on iOS, Android, and as a Progressive Web App
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
                { title: "Price Too Good to Be True", desc: "Stolen items are often priced 40-60% below market value for quick sales" },
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
              Protect yourself with a free verification check before your next Facebook Marketplace purchase.
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
