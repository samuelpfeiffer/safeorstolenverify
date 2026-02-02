import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Download, CreditCard, Package } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const EbayStolenItemCheck = () => {
  const faqs = [
    {
      question: "How do I check if an eBay item is stolen before bidding?",
      answer: "Ask the seller for the IMEI, VIN, or serial number through eBay messages. Verify it with SafeOrStolen before placing your bid. Most legitimate sellers will provide this information."
    },
    {
      question: "Does eBay Buyer Protection cover stolen items?",
      answer: "No. eBay's Money Back Guarantee does not specifically cover stolen items. If police confiscate a stolen item you purchased, you may struggle to get a refund through eBay's standard process."
    },
    {
      question: "Can I return a stolen item bought on eBay?",
      answer: "You should report it to eBay and local police immediately. The item may be confiscated as evidence. Getting a refund depends on the seller's cooperation and eBay's resolution process."
    },
    {
      question: "Are stolen items common on eBay?",
      answer: "While eBay has fraud prevention measures, stolen items still appear, especially in categories like phones, laptops, cameras, and jewelry. Professional thieves use sophisticated methods to avoid detection."
    },
    {
      question: "What if the eBay seller won't provide a serial number?",
      answer: "A seller refusing to provide an identifier is a major red flag. Consider it a warning sign and look for another listing. Legitimate sellers have nothing to hide."
    },
    {
      question: "How do I verify an eBay item after it arrives?",
      answer: "Check the serial number, IMEI, or VIN immediately upon delivery. Use SafeOrStolen to verify before removing any packaging. Report any discrepancies to eBay immediately."
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
        title="eBay Stolen Check - Verify Items Before Bidding Free"
        description="Check if eBay items are stolen before bidding. Verify IMEI, VIN, serial numbers free. Protect yourself from stolen goods."
        keywords="eBay safety, eBay stolen check, verify eBay items, eBay buyer protection"
        canonical="/ebay-stolen-item-check"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">eBay Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              eBay Stolen Item Check - Verify Before Bidding
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Don't bid blind. Verify any eBay item's IMEI, VIN, or serial number before placing 
              your bid. eBay Buyer Protection may not cover stolen goods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify eBay Item Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="w-5 h-5" />
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* eBay Protection Gaps */}
        <section className="py-16 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Gaps in eBay Buyer Protection
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <CreditCard className="w-5 h-5" />
                    Payment Doesn't Equal Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Even when paying through eBay, their Money Back Guarantee has limitations. 
                    If you unknowingly buy stolen goods and police confiscate them, you may not 
                    qualify for a standard refund.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Package className="w-5 h-5" />
                    Items Arrive Then Get Seized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A stolen item might work perfectly when it arrives. Weeks or months later, 
                    it could be flagged in a database and seized by authorities. By then, the 
                    eBay return window has closed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Verify Before Bidding */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Verify eBay Items Before Bidding
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Find the Listing</h3>
                <p className="text-sm text-muted-foreground">
                  Locate the item you want to bid on
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Message Seller</h3>
                <p className="text-sm text-muted-foreground">
                  Ask for IMEI, VIN, or serial number through eBay messages
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Verify with SafeOrStolen</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the identifier and get instant results
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Bid Confidently</h3>
                <p className="text-sm text-muted-foreground">
                  If clear, place your bid knowing the item is legitimate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High-Risk Categories */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              High-Risk eBay Categories
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              These categories have the highest rates of stolen items on eBay
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Cell Phones & Smartphones", 
                  risk: "Very High",
                  desc: "iPhones and Samsung devices are the most commonly stolen items sold on eBay",
                  check: "Always verify IMEI"
                },
                { 
                  title: "Laptops & Computers", 
                  risk: "High",
                  desc: "MacBooks and gaming laptops are frequently stolen from homes and businesses",
                  check: "Check serial number"
                },
                { 
                  title: "Cameras & Photography", 
                  risk: "High",
                  desc: "DSLRs and professional equipment have high resale value for thieves",
                  check: "Verify serial number"
                },
                { 
                  title: "Jewelry & Watches", 
                  risk: "High",
                  desc: "Luxury watches and jewelry are easy to steal and hard to trace",
                  check: "Check serial/authenticity"
                },
                { 
                  title: "Power Tools", 
                  risk: "Medium-High",
                  desc: "Construction site thefts fuel a steady supply of stolen tools",
                  check: "Verify serial number"
                },
                { 
                  title: "Musical Instruments", 
                  risk: "Medium",
                  desc: "Guitars, keyboards, and professional equipment are theft targets",
                  check: "Check serial number"
                }
              ].map((category, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <span className={`text-xs px-2 py-1 rounded ${
                        category.risk === 'Very High' ? 'bg-red-100 text-red-700' :
                        category.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {category.risk} Risk
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{category.desc}</p>
                    <p className="text-xs font-medium text-primary">{category.check}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* After Purchase Verification */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              What to Do When Your eBay Item Arrives
            </h2>

            <div className="space-y-4">
              {[
                { step: 1, title: "Document Everything", desc: "Take photos/video of the package and unboxing before opening" },
                { step: 2, title: "Find the Identifier", desc: "Locate IMEI, VIN, or serial number on the item or in settings" },
                { step: 3, title: "Verify Immediately", desc: "Use SafeOrStolen to check before removing any packaging or tags" },
                { step: 4, title: "Compare to Listing", desc: "Ensure the serial number matches what the seller provided" },
                { step: 5, title: "Report Any Issues", desc: "If there's a discrepancy or the item is flagged, contact eBay and keep all evidence" }
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
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
              eBay Stolen Item FAQs
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
              Verify Before You Bid
            </h2>
            <p className="text-lg opacity-90 mb-8">
              A 3-second verification could save you from losing hundreds or thousands on stolen goods.
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

export default EbayStolenItemCheck;
