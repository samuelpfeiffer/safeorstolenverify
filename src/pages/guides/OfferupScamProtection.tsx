import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Search, Smartphone, ArrowRight, DollarSign, Clock, MessageSquare } from 'lucide-react';

const OfferupScamProtection = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Avoid OfferUp Scams",
    "description": "Complete guide to protecting yourself from scams and stolen items on OfferUp.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check seller verification",
        "text": "Look for OfferUp's TruYou verification badge and check the seller's ratings and review history."
      },
      {
        "@type": "HowToStep",
        "name": "Verify the item before meeting",
        "text": "Ask for the IMEI, VIN, or serial number and verify it with SafeOrStolen before agreeing to meet."
      },
      {
        "@type": "HowToStep",
        "name": "Use OfferUp's secure payment",
        "text": "When possible, use OfferUp's built-in payment and shipping for buyer protection."
      },
      {
        "@type": "HowToStep",
        "name": "Meet at a safe location",
        "text": "Use OfferUp's 'Community MeetUp Spots' or police station safe zones."
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="OfferUp Scam Protection Guide - Avoid Stolen Items | SafeOrStolen"
        description="Learn how to avoid scams on OfferUp. Verify phones, electronics, and vehicles before meeting. Free IMEI and serial number verification."
        keywords="OfferUp scam protection, OfferUp stolen items, OfferUp IMEI check, verify OfferUp sellers, OfferUp safety tips"
        structuredData={structuredData}
      />
      <TopNavigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              OfferUp Safety Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Avoid Scams on OfferUp
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              OfferUp is convenient, but scammers love it too. Learn how to spot stolen items and protect yourself with free verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Search className="w-5 h-5" />
                  Verify an Item Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Smartphone className="w-5 h-5" />
                  Get the Mobile App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              🚩 OfferUp Scam Red Flags
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-xl border border-destructive/20">
                <DollarSign className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">Price Too Good to Be True</h3>
                <p className="text-muted-foreground">iPhone 15 Pro for $200? Brand new laptop for $100? Stolen goods are often priced low to sell fast.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-destructive/20">
                <Clock className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">Urgent "Must Sell Today"</h3>
                <p className="text-muted-foreground">Scammers create urgency to prevent you from doing due diligence. Legitimate sellers can wait.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-destructive/20">
                <MessageSquare className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">Won't Provide Serial Number</h3>
                <p className="text-muted-foreground">If a seller refuses to share the IMEI or serial, they're hiding something. Walk away.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-destructive/20">
                <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">Wants Payment Outside App</h3>
                <p className="text-muted-foreground">Never pay via Zelle, Venmo, or wire transfer. Use OfferUp's built-in payment or cash at meetup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Protection Steps */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              How to Protect Yourself on OfferUp
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-card rounded-xl border">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Check Seller Verification</h3>
                  <p className="text-muted-foreground">Look for OfferUp's TruYou badge. Check ratings, reviews, and how long they've been on the platform. New accounts with no history are risky.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-xl border">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get the Serial Number First</h3>
                  <p className="text-muted-foreground">Before agreeing to meet, ask: "Can you send me the IMEI/VIN/serial number so I can verify it?" This is normal and legitimate sellers will comply.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-primary/10 rounded-xl border-2 border-primary">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">★</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verify with SafeOrStolen</h3>
                  <p className="text-muted-foreground mb-4">Enter the identifier into SafeOrStolen—takes 3 seconds, first 2 checks are free. We search 100+ databases including police stolen property records.</p>
                  <Button asChild className="gap-2">
                    <Link to="/verify">
                      <Search className="w-4 h-4" />
                      Verify Now - Free
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-xl border">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Use Community MeetUp Spots</h3>
                  <p className="text-muted-foreground">OfferUp partners with police stations for safe meetup locations. Use them! Or any well-lit public place during daytime.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-xl border">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Re-Verify at Meetup</h3>
                  <p className="text-muted-foreground">Bring SafeOrStolen's mobile app. Before paying, confirm the serial number on the actual item matches what was provided, and run one more check.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              The Numbers Don't Lie
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">$500</div>
                <p className="text-muted-foreground">Average loss when buying stolen phones</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">3 sec</div>
                <p className="text-muted-foreground">Time to verify with SafeOrStolen</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Databases we check</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary/10">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Buying on OfferUp? Verify First.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't become another scam statistic. Free verification in 3 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  Verify an Item Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Smartphone className="w-5 h-5" />
                  Get the Mobile App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/guides/ebay-buyer-protection" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
                <h3 className="font-semibold mb-2">eBay Protection</h3>
                <p className="text-sm text-muted-foreground">Verify eBay purchases</p>
              </Link>
              <Link to="/guides/verify-craigslist-items" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
                <h3 className="font-semibold mb-2">Craigslist Safety</h3>
                <p className="text-sm text-muted-foreground">Verify Craigslist items</p>
              </Link>
              <Link to="/blog/facebook-marketplace-scams" className="p-4 bg-card rounded-lg border hover:border-primary transition-colors">
                <h3 className="font-semibold mb-2">FB Marketplace Scams</h3>
                <p className="text-sm text-muted-foreground">Avoid Facebook scams</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default OfferupScamProtection;
