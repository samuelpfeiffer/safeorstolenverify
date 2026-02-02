import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Download, MapPin, Clock } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const CraigslistSafetyVerification = () => {
  const faqs = [
    {
      question: "How can I tell if a Craigslist item is stolen?",
      answer: "Use SafeOrStolen to verify the IMEI, VIN, or serial number before meeting the seller. Our database cross-references police reports and stolen property registries nationwide."
    },
    {
      question: "Is Craigslist safe for buying used items?",
      answer: "Craigslist can be safe with proper precautions: always verify items using SafeOrStolen, meet in public places (many police stations offer 'safe exchange zones'), and trust your instincts if something feels wrong."
    },
    {
      question: "What should I check before buying a car on Craigslist?",
      answer: "Always run a VIN check through SafeOrStolen to verify the vehicle isn't stolen. Also verify the VIN matches the title, check for signs of VIN tampering, and consider getting a pre-purchase inspection."
    },
    {
      question: "Can I get in trouble for buying stolen items on Craigslist?",
      answer: "Yes. Receiving stolen property is a crime in all 50 states. Even if you didn't know the item was stolen, you can face criminal charges, and the item will be confiscated."
    },
    {
      question: "How do I verify a phone isn't stolen before buying on Craigslist?",
      answer: "Ask the seller for the IMEI number (dial *#06# on any phone). Enter the IMEI into SafeOrStolen's free checker to verify it isn't blacklisted or reported stolen."
    },
    {
      question: "What's the safest way to buy on Craigslist?",
      answer: "1) Verify the item with SafeOrStolen before meeting, 2) Meet at a police station safe exchange zone, 3) Bring someone with you, 4) Pay only after physically inspecting and verifying the item."
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
        description="Check if Craigslist items are stolen before meeting seller. Free IMEI and VIN verification for phones, cars, electronics."
        keywords="craigslist safety, craigslist scam check, verify craigslist item"
        canonical="/craigslist-safety-verification"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
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
              Don't become a victim of stolen goods. Verify any item's IMEI, VIN, or serial number 
              before meeting a Craigslist seller. Free, instant results.
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
                  Get Mobile App
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
                    Unlike Facebook or eBay, Craigslist doesn't require identity verification. 
                    Sellers can post anonymously, making it easy for thieves to sell stolen goods.
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
                    Craigslist offers no buyer protection. Once you pay cash for a stolen item, 
                    you have no recourse. The item will be confiscated, and your money is gone.
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
                    Craigslist's cash-based transactions and local meetups make it a prime target 
                    for selling stolen electronics, vehicles, and tools quickly.
                  </p>
                </CardContent>
              </Card>
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
                    Use the SafeOrStolen app to re-verify the item at the meetup before paying
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
              Craigslist Items You Should ALWAYS Verify
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
              Verify before you buy. It only takes 3 seconds and could save you thousands.
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
