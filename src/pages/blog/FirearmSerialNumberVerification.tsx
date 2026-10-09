import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Scale, CheckCircle, Download } from 'lucide-react';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const FirearmSerialNumberVerification = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check If a Gun Is Stolen - Firearm Serial Number Verification",
    "description": "How to check a gun serial number before you buy: where to find it, what a SafeOrStolen firearm check searches, and the red flags in a private sale.",
    "datePublished": "2025-01-15",
    "dateModified": "2026-10-07",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const faqs = [
    {
      question: "How do I check if a gun is stolen by serial number?",
      answer: "Enter the serial number at SafeOrStolen (safeorstolen.com/firearms-check). It searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; years vary by state), live Ohio law-enforcement records, SafeOrStolen's own theft reports and public web results, and flags serials that look altered. It does not search NCIC or ATF eTrace."
    },
    {
      question: "Is it illegal to buy a stolen firearm?",
      answer: "Under 18 U.S.C. § 922(j) it is a federal crime to receive or possess a stolen firearm when you know or have reasonable cause to believe it was stolen. Even if you didn't know, police can take the gun back for its owner and you usually lose what you paid. Possessing a gun with an obliterated serial is a separate federal crime under § 922(k)."
    },
    {
      question: "What should I do if I discover I bought a stolen gun?",
      answer: "Stop using it and contact your local police non-emergency line. Don't sell it, trade it or get rid of it. Keep the listing, messages, receipt and any SafeOrStolen check you ran, and consider talking to a lawyer in your state before you give a statement."
    },
    {
      question: "Can I check a gun serial number before a private sale?",
      answer: "Yes. Ask for the serial number before you meet and run it on SafeOrStolen. At the meetup, make sure the serial on the frame or receiver matches what the seller sent and isn't scratched or ground down. If the seller won't share the serial, walk away. Follow your state's rules on private transfers."
    },
    {
      question: "Do gun shows sell stolen firearms?",
      answer: "Stolen guns can turn up anywhere guns are resold, including private sales at gun shows. Licensed dealers run a background check on the buyer, not a theft check on the gun, so check the serial yourself no matter where you buy."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title="How to Check If a Gun Is Stolen by Serial Number | SafeOrStolen"
        description="How to check if a gun is stolen before you buy: find the serial, check it against police theft and loss reports from 33 states and DC, and spot private-sale red flags."
        keywords="check if gun is stolen, firearm serial number lookup, stolen gun check, verify gun not stolen, gun serial number verification"
        canonical="/blog/firearm-serial-number-verification"
        structuredData={[articleSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Firearms Verification</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Check If a Gun Is Stolen
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Find the serial on the frame or receiver, run it through SafeOrStolen against police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio records, and walk away from any gun whose serial looks altered.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: October 2026</span>
            </div>
          </header>
          <BlogHeroImage src={blogImages.firearm} alt="Firearm serial number close-up with forensic lighting - gun stolen verification guide" />

          {/* Warning Section */}
          <section className="mb-12">
            <Card className="border-destructive bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  Important Legal Warning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Receiving or possessing a stolen firearm when you know or have reasonable cause to believe it was stolen is a <strong>federal crime</strong> under 18 U.S.C. § 922(j). Possessing a gun with an obliterated or altered serial is a federal crime under § 922(k).
                </p>
                <p className="text-muted-foreground">
                  Checking the serial and keeping a dated record of that check shows you tried to buy honestly. This is general information, not legal advice.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Why Verification Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              Why check the serial before you buy
            </h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Stolen guns get resold</h3>
                    <p className="text-sm text-muted-foreground">
                      Stolen firearms often change hands through private sales, where nobody checks the serial unless the buyer does.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Federal and state law</h3>
                    <p className="text-sm text-muted-foreground">
                      Federal law covers knowingly possessing a stolen gun and any gun with an obliterated serial. Many states add their own rules for private sales.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">No Compensation</h3>
                    <p className="text-sm text-muted-foreground">
                      When police recover a stolen firearm, it goes back to the owner and you usually lose what you paid. Getting money back from a private seller is often impossible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Verify */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              How to Verify a Firearm Serial Number
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. Locate the Serial Number</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Handguns: Usually on the frame, near trigger guard</li>
                    <li>• Rifles: Typically on the receiver</li>
                    <li>• Shotguns: On the receiver or barrel</li>
                    <li>• Check multiple locations if unclear</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Verify with SafeOrStolen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Enter the full serial number</li>
                    <li>• Read the result: "reported stolen", "possible match", or "no report found in the records searched"</li>
                    <li>• Check before agreeing to purchase</li>
                    <li>• Each check is saved to your account with the date</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <p className="text-muted-foreground mb-4">
                Ready to verify a firearm serial number?
              </p>
              <Button asChild>
                <Link to="/firearms-check">Check a serial (2 free checks)</Link>
              </Button>
            </div>
          </section>

          {/* Red Flags */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Red Flags When Buying Firearms
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Seller refuses to provide serial number",
                "Price significantly below market value",
                "Serial number appears altered or damaged",
                "Seller insists on cash-only, no records",
                "Won't allow inspection of the firearm",
                "Rushing the transaction",
                "Meeting in unusual locations",
                "No original documentation or bill of sale"
              ].map((flag, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center gap-3 py-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-sm">{flag}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Firearm Verification FAQs
            </h2>

            <div className="space-y-4">
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
          </section>

          {/* CTA */}
          <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Check the serial before you buy
            </h2>
            <p className="opacity-90 mb-6">
              It takes a few seconds and your first 2 checks are free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/firearms-check">Verify Firearm Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/app">
                  <Download className="w-4 h-4 mr-2" />
                  Get the free web app
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </div>
      <RelatedPagesSection currentPage="/blog/firearm-serial-number-verification" currentCategory="blog" maxLinks={5} />
    </>
  );
};

export default FirearmSerialNumberVerification;
