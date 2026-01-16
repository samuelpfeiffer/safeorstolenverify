import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, ShoppingCart, AlertTriangle, Check, Phone, Car, Laptop, Bike, DollarSign, Scale } from 'lucide-react';

/**
 * For Consumers Page - Real page for /for-consumers URL
 * Landing page targeting individual buyers of secondhand goods
 */
const ForConsumersPage = () => {
  const useCases = [
    {
      icon: Phone,
      title: "Buying Used Phones",
      description: "Verify IMEI before buying from Facebook Marketplace, OfferUp, Craigslist, or local sellers",
      link: "/check-phone"
    },
    {
      icon: Car,
      title: "Buying Used Cars",
      description: "Check VIN against stolen vehicle databases before purchasing any vehicle",
      link: "/check-car"
    },
    {
      icon: Laptop,
      title: "Buying Electronics",
      description: "Verify laptops, gaming consoles, cameras aren't stolen before buying",
      link: "/check-electronics"
    },
    {
      icon: Bike,
      title: "Buying Bikes & E-Bikes",
      description: "Check serial numbers against bicycle theft registries",
      link: "/check-bike"
    }
  ];

  const risks = [
    "The item gets confiscated by police - you lose it and your money",
    "You could face criminal charges for possession of stolen property",
    "The original owner can remotely lock phones and laptops",
    "Carriers will blacklist stolen phones making them unusable",
    "You have zero legal recourse to get your money back",
    "Insurance won't cover stolen property claims"
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I protect myself when buying used items?",
        "acceptedAnswer": { "@type": "Answer", "text": "Always verify the IMEI, VIN, or serial number before purchasing. Use SafeOrStolen's free verification tool to check against stolen item databases. Meet in public places, never pay in cash before verification, and trust your instincts if something feels wrong." }
      },
      {
        "@type": "Question",
        "name": "What happens if I accidentally buy a stolen item?",
        "acceptedAnswer": { "@type": "Answer", "text": "If you unknowingly purchase stolen property, law enforcement can confiscate it and return it to the rightful owner. You lose both the item and your money with no legal recourse. In some cases, you could face criminal charges for receiving stolen property, even if you didn't know it was stolen." }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen free for consumers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! SafeOrStolen offers free verification checks for consumers. Simply enter the IMEI, VIN, or serial number and we'll check against our databases of reported stolen items. No registration required for basic checks." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="For Consumers - Protect Yourself When Buying Used Items | SafeOrStolen"
        description="Free verification for secondhand buyers. Check if phones, cars, electronics, and bikes are stolen before buying on Facebook Marketplace, OfferUp, Craigslist. Never buy stolen goods."
        keywords="buying used items safely, avoid stolen goods, secondhand buyer protection, verify before buying, stolen item checker for consumers"
        canonical="/for-consumers"
        structuredData={[faqSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">For Consumers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buy Secondhand with Confidence
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protect yourself when buying used phones, cars, electronics, and more. 
              Free verification against stolen item databases before you hand over cash.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify Item Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  Get Mobile App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What We Verify */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">What Can You Verify?</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Before buying anything secondhand, check it against our databases of reported stolen items.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardHeader>
                    <useCase.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <Button asChild variant="link" className="px-0">
                      <Link to={useCase.link}>Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Risks Section */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-3xl font-bold">Risks of Buying Stolen Items</h2>
            </div>
            
            <p className="text-center text-muted-foreground mb-8">
              Even if you buy in good faith, purchasing stolen property has serious consequences:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {risks.map((risk, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-destructive/20">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p>{risk}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How SafeOrStolen Protects You</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Get the Identifier</h3>
                  <p className="text-muted-foreground">Ask the seller for the IMEI number (phones), VIN (vehicles), or serial number (electronics) before meeting. If they refuse, that's a red flag.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Run the Verification</h3>
                  <p className="text-muted-foreground">Enter the number in SafeOrStolen's free verification tool. We check against GSMA, NCIC, carrier blacklists, and law enforcement databases.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Make an Informed Decision</h3>
                  <p className="text-muted-foreground">If the status is CLEAN, proceed with confidence. If there are any red flags, walk away from the deal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits for Consumers</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Protect Your Money</h3>
                <p className="text-muted-foreground">Average loss from buying stolen property: $500-$5,000. Verification costs: $0.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Stay Legal</h3>
                <p className="text-muted-foreground">Avoid potential criminal charges for possession of stolen property.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Peace of Mind</h3>
                <p className="text-muted-foreground">Buy with confidence knowing the item is legitimate and clean.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Buy Safely?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't take chances with your hard-earned money. Verify any item in 3 seconds.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/verify">
                <Shield className="w-5 h-5" />
                Start Free Verification
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForConsumersPage;
