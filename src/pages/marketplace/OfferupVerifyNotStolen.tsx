import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Download, Smartphone, Clock } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const OfferupVerifyNotStolen = () => {
  const faqs = [
    {
      question: "How do I check if an OfferUp item is stolen?",
      answer: "Ask the seller for the item's IMEI (phones), VIN (vehicles), or serial number (electronics). Enter it into SafeOrStolen's free verification tool to check against stolen property databases."
    },
    {
      question: "Does OfferUp verify items aren't stolen?",
      answer: "No. OfferUp does not verify whether items are stolen. Their TruYou verification only confirms seller identity, not item legitimacy. You must verify items yourself using SafeOrStolen."
    },
    {
      question: "What happens if I buy stolen goods on OfferUp?",
      answer: "If police recover the item, it will be confiscated and returned to the original owner. You'll lose both the item and your money. You may also face criminal charges for receiving stolen property."
    },
    {
      question: "Is OfferUp safer than Craigslist?",
      answer: "OfferUp's TruYou verification and in-app messaging provide some accountability, but stolen items are still common. Always verify items with SafeOrStolen regardless of the platform."
    },
    {
      question: "Can I use SafeOrStolen at an OfferUp meetup?",
      answer: "Yes! Download the SafeOrStolen app to verify items on-the-spot. Scan the barcode or enter the identifier to get instant results before paying."
    },
    {
      question: "What items should I verify on OfferUp?",
      answer: "Verify all high-value items: phones (IMEI), vehicles (VIN), laptops, tablets, gaming consoles, bikes, power tools, and any electronics with serial numbers."
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
        title="OfferUp Verify Item Not Stolen - Free Check"
        description="Check if OfferUp items are stolen before buying. Free IMEI, VIN, and serial number verification. Protect yourself from stolen goods on OfferUp marketplace."
        keywords="offerup stolen item check, verify offerup item, offerup safety"
        canonical="/offerup-verify-not-stolen"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-green-500/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">OfferUp Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OfferUp Stolen Item Check - Verify Before You Buy or Sell
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              OfferUp doesn't verify if items are stolen. Protect yourself with SafeOrStolen's 
              free verification tool before meeting any seller.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Shield className="w-5 h-5" />
                  Verify OfferUp Item Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app">
                  <Download className="w-5 h-5" />
                  Download App for Meetups
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TruYou Warning */}
        <section className="py-16 px-4 bg-amber-500/5">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle className="w-6 h-6" />
                  TruYou Doesn't Verify Items - Only Sellers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Many buyers mistakenly believe OfferUp's TruYou badge means items are verified safe. 
                  <strong className="text-foreground"> This is incorrect.</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">TruYou only verifies the seller's identity (phone, email, Facebook)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">TruYou does NOT check if items are stolen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">A verified seller can still unknowingly (or knowingly) sell stolen goods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm"><strong>Solution:</strong> Use SafeOrStolen to verify the actual item before purchase</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Verification Process */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Verify OfferUp Items
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">For Phones</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ask seller to dial *#06# to display IMEI. Message them through OfferUp to get it before meeting.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/imei-checker">Check IMEI</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">VIN</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">For Vehicles</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    VIN is on dashboard (driver's side) and door jamb. Ask for VIN before scheduling test drive.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/vin-checker">Check VIN</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">S/N</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">For Electronics</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Serial numbers are on the back, bottom, or in settings. Ask seller for photos of serial number.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/verify">Check Serial</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mobile App CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Verify at OfferUp Meetups in 3 Seconds
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download the SafeOrStolen app to scan barcodes and verify items instantly at meetup locations. 
              Works offline - no cell service needed.
            </p>
            <Button asChild size="lg">
              <Link to="/app">Download Free App</Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              OfferUp Verification FAQs
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
              Don't Trust TruYou - Verify the Item
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Free verification takes 3 seconds. Losing money on stolen goods takes a lifetime to forget.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default OfferupVerifyNotStolen;
