import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Shield, AlertTriangle, CheckCircle, XCircle, 
  DollarSign, Clock, FileText, Phone, MessageSquare
} from 'lucide-react';

const EbayBuyerProtectionGuide = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "eBay Buyer Protection Guide - How to Stay Safe and Get Refunds",
      "description": "Complete guide to eBay's Money Back Guarantee. Learn how to protect yourself from scams, what's covered, and how to file claims for stolen or fake items.",
      "author": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/og-image.jpg"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does eBay Buyer Protection cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "eBay's Money Back Guarantee covers items that don't arrive, arrive damaged, or don't match the listing description. This includes items that are counterfeit, broken, or significantly different from what was advertised."
          }
        },
        {
          "@type": "Question",
          "name": "How long do I have to file an eBay claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You have 30 days from the estimated delivery date to open a case for an item not received, or 30 days from actual delivery for items not as described."
          }
        },
        {
          "@type": "Question",
          "name": "Does eBay protect against stolen items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "eBay's policy prohibits selling stolen goods, and if an item is proven stolen, eBay will typically side with the buyer. However, proving an item is stolen can be difficult without verification tools like SafeOrStolen."
          }
        }
      ]
    }
  ];

  const protectionCoverage = [
    { icon: CheckCircle, text: "Item not received", covered: true },
    { icon: CheckCircle, text: "Item damaged in shipping", covered: true },
    { icon: CheckCircle, text: "Item doesn't match description", covered: true },
    { icon: CheckCircle, text: "Counterfeit or fake items", covered: true },
    { icon: CheckCircle, text: "Wrong item delivered", covered: true },
    { icon: XCircle, text: "Buyer's remorse", covered: false },
    { icon: XCircle, text: "Items bought locally (pickup)", covered: false },
    { icon: XCircle, text: "Real estate or vehicles", covered: false }
  ];

  const claimSteps = [
    {
      step: 1,
      title: "Contact the Seller First",
      description: "eBay requires you to contact the seller and give them 3 business days to respond before opening a case."
    },
    {
      step: 2,
      title: "Open a Case",
      description: "If unresolved, go to your Purchase History, find the item, and select 'I didn't receive it' or 'Return this item'."
    },
    {
      step: 3,
      title: "Escalate to eBay",
      description: "If the seller doesn't resolve within 3 days, ask eBay to step in. They'll review the case and make a decision."
    },
    {
      step: 4,
      title: "Get Your Refund",
      description: "If eBay rules in your favor, you'll receive a full refund including original shipping costs."
    }
  ];

  const preventionTips = [
    {
      icon: Shield,
      title: "Verify Before You Buy",
      description: "Use SafeOrStolen to check IMEI, VIN, or serial numbers before purchasing electronics, phones, or vehicles on eBay."
    },
    {
      icon: FileText,
      title: "Read the Full Description",
      description: "Check for red flags like 'as-is', 'for parts', or vague descriptions. Screenshot the listing before purchasing."
    },
    {
      icon: MessageSquare,
      title: "Ask Questions",
      description: "Message the seller to ask for serial numbers, additional photos, or proof of purchase before bidding."
    },
    {
      icon: Clock,
      title: "Check Seller History",
      description: "Look for sellers with high feedback scores (99%+) and a history of selling similar items."
    }
  ];

  return (
    <>
      <PageSEO
        title="eBay Buyer Protection Guide - Stay Safe & Get Refunds | SafeOrStolen"
        description="Complete guide to eBay's Money Back Guarantee. Learn what's covered, how to file claims, and how to verify items aren't stolen before buying on eBay."
        keywords="ebay buyer protection, ebay money back guarantee, ebay scam protection, ebay refund, ebay claim, how to file ebay dispute, ebay stolen item"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Buyer's Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                eBay Buyer Protection Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about eBay's Money Back Guarantee, how to file claims, 
                and how to protect yourself from buying stolen goods on eBay.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/ebay-stolen-item-check">Check eBay Item</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Verify Serial Number</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Covered Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                What Does eBay Buyer Protection Cover?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                eBay's Money Back Guarantee protects most purchases made on the platform. 
                Here's what's covered and what's not:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {protectionCoverage.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      item.covered ? 'bg-green-50 dark:bg-green-950/20' : 'bg-red-50 dark:bg-red-950/20'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.covered ? 'text-green-600' : 'text-red-600'}`} />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to File a Claim */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                How to File an eBay Claim
              </h2>
              <div className="space-y-6">
                {claimSteps.map((step, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How to Avoid Problems in the First Place
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Prevention is better than filing claims. Here's how to protect yourself before you buy:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {preventionTips.map((tip, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <tip.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stolen Items Warning */}
        <section className="py-16 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Warning: Stolen Items on eBay
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    While eBay prohibits selling stolen goods, they still appear on the platform. 
                    If you unknowingly buy a stolen item, you could:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>Have the item confiscated by police with no refund</li>
                    <li>Face legal questions about how you acquired it</li>
                    <li>Lose your money if the seller disappears</li>
                    <li>Have a phone blacklisted and unusable</li>
                  </ul>
                  <p className="text-muted-foreground mb-6">
                    <strong>The solution:</strong> Always verify high-value items before purchasing. 
                    Ask the seller for the serial number and run it through SafeOrStolen.
                  </p>
                  <Button asChild>
                    <Link to="/verify">Verify an Item Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How long do I have to file an eBay claim?
                    </h3>
                    <p className="text-muted-foreground">
                      You have 30 days from the estimated delivery date to open a case for an item not received, 
                      or 30 days from actual delivery for items not as described.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What if I bought a stolen phone on eBay?
                    </h3>
                    <p className="text-muted-foreground">
                      File a claim immediately stating the item was "not as described" (stolen goods are never accurately described). 
                      Report to eBay and provide any evidence. Consider also filing a police report.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Does eBay refund me if the seller account is suspended?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, eBay's Money Back Guarantee still applies even if the seller's account is suspended. 
                      eBay will cover the refund from their own funds if necessary.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Yourself Before You Buy</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Don't wait until you have a problem. Verify items before purchasing on eBay or any marketplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/ebay-stolen-item-check">eBay Verification Tool</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/resource-center">More Guides</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EbayBuyerProtectionGuide;
