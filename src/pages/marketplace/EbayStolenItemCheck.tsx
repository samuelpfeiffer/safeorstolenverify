import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Download, CreditCard, Package } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

/** Oct 8 2026 audit: removed "instant"/"3-second" claims, "Download App" (it's a free web app),
 * unsupported "most stolen"/"highest rates" rankings and the "bid knowing it's legitimate" promise. */
const EbayStolenItemCheck = () => {
  const faqs = [
    {
      question: "How do I check if an eBay item is stolen before bidding?",
      answer: "Use \"Contact seller\" on the listing to ask for the IMEI, VIN or serial number, and a photo of it on the item. Enter it on SafeOrStolen (safeorstolen.com/ebay-stolen-item-check) before you bid. In a few seconds you see whether it appears in SafeOrStolen theft reports or public web results."
    },
    {
      question: "Does eBay Buyer Protection cover stolen items?",
      answer: "eBay's Money Back Guarantee is built around items that don't arrive or aren't as described. It doesn't name stolen goods specifically, so if police later take an item back for its owner, getting a refund can be hard. Check eBay's current policy, and check the serial before you bid."
    },
    {
      question: "Can I return a stolen item bought on eBay?",
      answer: "You should report it to eBay and local police immediately. The item may be confiscated as evidence. Getting a refund depends on the seller's cooperation and eBay's resolution process."
    },
    {
      question: "Are stolen items common on eBay?",
      answer: "Most eBay listings are legitimate, but stolen goods do get sold there, often phones, laptops, cameras, tools and jewelry. Warning signs include a new seller account, a price well below other listings, stock photos instead of the real item, and a seller who won't share the serial."
    },
    {
      question: "What if the eBay seller won't provide a serial number?",
      answer: "Skip the listing. An honest seller can read a serial number off the item in a minute, and on a phone or laptop there's no good reason to hide it. If the serial in a listing photo is blurred or cropped out, treat that the same way."
    },
    {
      question: "How do I verify an eBay item after it arrives?",
      answer: "Film the unboxing, then find the serial or IMEI on the item and make sure it matches what the seller gave you. Run it on SafeOrStolen. If it doesn't match or comes back \"reported stolen\", open a request in eBay's Resolution Center and keep all your photos and messages."
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
        description="Check if an eBay item is stolen before you bid: get the IMEI, VIN or serial from the seller and search it against SafeOrStolen theft reports. 2 free checks."
        keywords="eBay safety, eBay stolen check, verify eBay items, eBay buyer protection"
        canonical="/ebay-stolen-item-check"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
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
                  Install the Free Web App
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
                    A stolen item can work fine when it arrives. A phone can be blacklisted later, 
                    or police can trace the item to you weeks after the sale, when the 
                    return window has long closed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* eBay Safety Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Understanding eBay Buyer Protection and Stolen Items
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground space-y-4">
              <p>
                eBay's Money Back Guarantee protects you when an item doesn't arrive or isn't as described. Many buyers assume it also covers buying stolen property. It's not that simple, and knowing where the gaps are helps you avoid losing the money.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">How Stolen Items Appear on eBay</h3>
              <p>
                Stolen goods reach eBay in a few common ways: shoplifted merchandise listed as "new in box", personal property taken from homes and cars listed as "used", and items sold through hacked accounts that still show good feedback. Watch phones, laptops, cameras, game consoles, jewelry and power tools most closely, since they're easy to resell.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Why eBay's Protection May Not Cover Stolen Goods</h3>
              <p>
                eBay's Money Back Guarantee focuses on items that are "not as described" or never arrive. A stolen item usually arrives exactly as described; it just belongs to someone else. If police take it from you later, proving you're owed a refund is difficult, and by then the return window set on the listing has often passed.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">The Delayed Discovery Problem</h3>
              <p>
                The hardest part is that problems show up late. A stolen phone can work for weeks before its carrier blacklists the IMEI. A laptop can run fine until police trace it. By then the return period is over and you're dealing with the seller, or the police, on your own.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">High-Risk eBay Categories</h3>
              <p>
                Phones are the item to be most careful with, especially unlocked phones from sellers with little feedback; always get the IMEI. For laptops, ask for a photo of the serial on the bottom label and in the system settings. Cameras and lenses have serials on the body and mount. Watches and jewelry often have no serial, so ask for receipts and papers. Power tools and bikes have serials too, so ask for them before you bid.
              </p>
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
                  Enter the number and read the result in a few seconds
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Then Decide</h3>
                <p className="text-sm text-muted-foreground">
                  No report found is a good sign, not a guarantee; check the seller's feedback too
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
              Items that are easy to resell and worth checking every time
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Cell Phones & Smartphones", 
                  risk: "Very High",
                  desc: "Phones are small, valuable and easy to resell, and a blacklisted IMEI can stop one working after the sale",
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
                      <span className={`text-xs px-2 py-1 rounded-[0.25rem] ${
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
                { step: 3, title: "Check It", desc: "Run the number on SafeOrStolen before you leave feedback or the return window closes" },
                { step: 4, title: "Compare to Listing", desc: "Make sure the serial number matches what the seller gave you" },
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
              A check takes a few seconds, and your first 2 are free.
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
