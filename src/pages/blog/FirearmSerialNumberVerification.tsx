import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Scale, CheckCircle, Download } from 'lucide-react';

const FirearmSerialNumberVerification = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check If a Gun Is Stolen - Firearm Serial Number Verification",
    "description": "Complete guide to verifying firearms aren't stolen before purchase. Learn how to check gun serial numbers and protect yourself legally.",
    "datePublished": "2025-01-15",
    "dateModified": "2025-12-03",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const faqs = [
    {
      question: "How do I check if a gun is stolen by serial number?",
      answer: "Use SafeOrStolen's firearm verification tool to check the serial number against stolen property databases. This helps identify firearms reported stolen to law enforcement."
    },
    {
      question: "Is it illegal to buy a stolen firearm?",
      answer: "Yes. Knowingly or unknowingly possessing a stolen firearm is a federal crime punishable by up to 10 years in prison. You'll also lose the firearm and any money paid."
    },
    {
      question: "What should I do if I discover I bought a stolen gun?",
      answer: "Contact local law enforcement immediately. Do not attempt to sell or dispose of the firearm. Cooperating with police is the best way to protect yourself legally."
    },
    {
      question: "Can I check a gun serial number before a private sale?",
      answer: "Yes. Before any private firearm purchase, ask for the serial number and verify it with SafeOrStolen. If the seller refuses to provide the serial number, walk away."
    },
    {
      question: "Do gun shows sell stolen firearms?",
      answer: "While most gun show vendors are legitimate, stolen firearms do occasionally appear at gun shows. Always verify serial numbers regardless of where you're buying."
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
      <Helmet>
        <title>How to Check If a Gun Is Stolen - Firearm Serial Number Verification | SafeOrStolen</title>
        <meta name="description" content="Learn how to verify firearms aren't stolen before buying. Check gun serial numbers against stolen property databases. Protect yourself from federal crimes." />
        <meta name="keywords" content="check if gun is stolen, firearm serial number lookup, stolen gun check, verify gun not stolen, gun serial number verification" />
        <link rel="canonical" href="https://safeorstolen.com/blog/firearm-serial-number-verification" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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
              Complete guide to firearm serial number verification. Protect yourself from federal 
              crimes by verifying any firearm before purchase.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: December 3, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

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
                  Possessing a stolen firearm is a <strong>federal crime</strong> under 18 U.S.C. § 922(j), 
                  punishable by up to 10 years in prison. This applies even if you didn't know the 
                  firearm was stolen.
                </p>
                <p className="text-muted-foreground">
                  Always verify firearms before purchase to protect yourself legally.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Why Verification Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              Why Firearm Verification Is Critical
            </h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">300,000+ Firearms Stolen Annually</h3>
                    <p className="text-sm text-muted-foreground">
                      According to the DOJ, over 300,000 firearms are stolen each year in the US. 
                      Many end up resold through private sales and gun shows.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Federal Crime - Up to 10 Years</h3>
                    <p className="text-sm text-muted-foreground">
                      Possessing a stolen firearm, even unknowingly, violates federal law. 
                      Convictions result in prison time, loss of gun rights, and felony record.
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
                      When police recover a stolen firearm, you lose both the gun and your money. 
                      There's no legal recourse to recover your purchase price.
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
                    <li>• Include make and model if possible</li>
                    <li>• Check before agreeing to purchase</li>
                    <li>• Save verification results for your records</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <p className="text-muted-foreground mb-4">
                Ready to verify a firearm serial number?
              </p>
              <Button asChild>
                <Link to="/firearms-check">Verify Firearm Now - Free</Link>
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
              Protect Yourself - Verify Before You Buy
            </h2>
            <p className="opacity-90 mb-6">
              A 3-second verification could save you from 10 years in federal prison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/firearms-check">Verify Firearm Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/app">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default FirearmSerialNumberVerification;
