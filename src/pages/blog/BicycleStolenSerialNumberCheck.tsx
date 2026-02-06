import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bike, Shield, AlertTriangle, CheckCircle, Download, Search } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const BicycleStolenSerialNumberCheck = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check If a Bike Is Stolen - Serial Number Lookup Guide",
    "description": "Learn how to check if a bicycle is stolen using serial numbers. Complete guide to bike verification including e-bikes and motorcycles.",
    "datePublished": "2025-01-15",
    "dateModified": "2026-02-06",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const faqs = [
    {
      question: "How do I check if a bike is stolen by serial number?",
      answer: "Enter the bike's serial number into SafeOrStolen to check against stolen property databases. Serial numbers are usually located under the bottom bracket or on the head tube."
    },
    {
      question: "Where do I find a bicycle serial number?",
      answer: "Most bike serial numbers are stamped under the bottom bracket (where pedal cranks meet). Other locations include the head tube, rear dropout, or seat tube. Check multiple locations."
    },
    {
      question: "What databases track stolen bikes?",
      answer: "Major databases include BikeIndex (largest with 1M+ bikes), 529 Garage, Project 529, and police department databases. SafeOrStolen checks multiple sources."
    },
    {
      question: "Can I verify an e-bike serial number?",
      answer: "Yes. E-bikes have serial numbers on the frame plus motor/battery serial numbers. For complete verification, check both the frame and motor serial numbers."
    },
    {
      question: "How common is bike theft?",
      answer: "Over 2 million bicycles are stolen annually in the US. Only 5% are recovered, making verification before purchase essential."
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
        title="How to Check If a Bike Is Stolen - Serial Number Lookup | SafeOrStolen"
        description="Check if a bicycle is stolen by serial number. Free verification for bikes, e-bikes, and motorcycles. Find where to locate serial numbers and verify before buying."
        keywords="check if bike is stolen, bike serial number lookup, stolen bicycle check, e-bike verification, bicycle serial number"
        canonical="/blog/bicycle-stolen-serial-number-check"
        structuredData={[articleSchema, faqSchema]}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Bicycle Verification</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Check If a Bike Is Stolen
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Complete guide to bicycle serial number verification. Learn where to find serial 
              numbers and how to check if a bike is stolen before buying.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: February 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          {/* Stats */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-destructive mb-2">2M+</div>
                  <p className="text-sm text-muted-foreground">Bikes stolen annually in US</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-destructive mb-2">5%</div>
                  <p className="text-sm text-muted-foreground">Recovery rate for stolen bikes</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-destructive mb-2">$500+</div>
                  <p className="text-sm text-muted-foreground">Average value of stolen bikes</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Where to Find Serial Number */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" />
              Where to Find a Bike Serial Number
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Most Common Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Bottom Bracket</strong> - Most common location, under where the pedal cranks meet the frame
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Head Tube</strong> - Front of the frame where handlebars connect
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Seat Tube</strong> - Below the seat post
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Less Common Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Rear Dropout</strong> - Where the rear wheel attaches
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Down Tube</strong> - Tube running from handlebars to pedals
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Chain Stay</strong> - Tubes running to rear wheel
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Bike className="w-5 h-5 text-primary" />
                  For E-Bikes
                </h3>
                <p className="text-sm text-muted-foreground">
                  E-bikes have both a frame serial number AND motor/battery serial numbers. 
                  For complete verification, check the motor serial (usually on motor housing) 
                  and battery serial in addition to the frame serial.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Verification Process */}
          <section className="mb-12 bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              How to Verify a Bike Serial Number
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Find Serial Number</h3>
                <p className="text-sm text-muted-foreground">Locate and record the full serial number</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Enter in SafeOrStolen</h3>
                <p className="text-sm text-muted-foreground">Type or scan the serial number</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Get Results</h3>
                <p className="text-sm text-muted-foreground">Instant verification against databases</p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/check-bike">Verify Bike Serial Number Free</Link>
              </Button>
            </div>
          </section>

          {/* Red Flags */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Red Flags When Buying a Used Bike
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Serial number removed or filed off",
                "Price way below market value",
                "Seller doesn't know basic info about bike",
                "Mismatched or spray-painted components",
                "Seller is in a hurry to complete sale",
                "No original receipt or documentation",
                "Meeting in unusual location",
                "Cash only, no paper trail"
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
            <h2 className="text-2xl font-bold mb-6">Bike Verification FAQs</h2>
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
            <Bike className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Verify Before You Ride
            </h2>
            <p className="opacity-90 mb-6">
              Don't risk buying a stolen bike. Free verification takes seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/check-bike">Verify Bike Now</Link>
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
      <RelatedPagesSection currentPage="/blog/bicycle-stolen-serial-number-check" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
};

export default BicycleStolenSerialNumberCheck;
