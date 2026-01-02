import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Clock, DollarSign, Car, Search, CheckCircle2, AlertTriangle } from 'lucide-react';

const FreeCarfaxAlternativePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is SafeOrStolen really a free Carfax alternative?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen offers free VIN checks for theft verification. While Carfax costs $39.99 per report, we provide free stolen vehicle checks against NICB, law enforcement, and insurance databases. We focus on theft status rather than full vehicle history."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Carfax not free anymore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Carfax charges $39.99 per report because they provide comprehensive vehicle history including accident records, service history, and ownership changes. SafeOrStolen offers a free alternative focused specifically on theft verification."
        }
      },
      {
        "@type": "Question",
        "name": "What does SafeOrStolen check that Carfax doesn't?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen specializes in real-time theft verification from law enforcement databases, police stolen vehicle reports, and insurance theft claims. We also check phones (IMEI), bikes, firearms, electronics - not just vehicles."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free Carfax Alternative - VIN Check Without Paying $39.99 | SafeOrStolen"
        description="Free alternative to Carfax. Check if car is stolen, salvage title, theft records. No $39.99 fee. Instant VIN lookup from NICB, law enforcement, 100+ databases."
        keywords="free carfax alternative, similar to carfax but free, is carfax not free anymore, car fax alternative, free vin check, carfax alternative free, vin lookup free"
        canonical="/free-carfax-alternative"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
                Save $39.99 - Free Theft Check
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Free Carfax Alternative - VIN Check Without Paying
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Carfax charges <strong className="text-foreground">$39.99</strong> per vehicle history report. 
                SafeOrStolen offers <strong className="text-green-600 dark:text-green-400">free stolen vehicle verification</strong> from 
                NICB, law enforcement databases, and insurance records. Check if a car is stolen before you pay for full history.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button asChild size="lg">
                  <Link to="/verify">
                    <Shield className="mr-2 h-5 w-5" />
                    Free VIN Check
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/vin-checker">
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  2 Free Checks
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  3 Second Results
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  NICB Database
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">SafeOrStolen vs Carfax Comparison</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* SafeOrStolen */}
                <Card className="border-green-500/50 bg-green-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">SafeOrStolen</h3>
                        <p className="text-2xl font-bold text-green-600">FREE</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Stolen vehicle verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">NICB theft database check</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Law enforcement records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Insurance theft claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Salvage title check</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">3-second instant results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Works for phones, bikes, guns too</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Carfax */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Car className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Carfax</h3>
                        <p className="text-2xl font-bold text-muted-foreground">$39.99</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Full vehicle history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Accident records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Service history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Ownership history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Odometer readings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Vehicles only (no phones/bikes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Requires payment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">When to Use Each Service</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Use SafeOrStolen First (FREE)</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Quick stolen check before test drive
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Verify car isn't salvage/rebuilt
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Check multiple cars while shopping
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Initial screening before paying $40
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-muted">
                      <DollarSign className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Use Carfax After ($39.99)</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      Serious about specific car
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      Want full maintenance history
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      Need detailed accident reports
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      Final due diligence on finalist
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Smart Buyer Strategy: Use Both</h3>
                    <p className="text-muted-foreground">
                      <strong>Step 1:</strong> Free SafeOrStolen check - eliminate stolen vehicles ($0)<br />
                      <strong>Step 2:</strong> If clean, get Carfax on your top choice ($39.99)<br />
                      <strong>Result:</strong> Complete protection - theft check + full history
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What Our Free VIN Check Includes</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              SafeOrStolen searches 100+ databases in 3 seconds to verify if a vehicle has been reported stolen, salvaged, or has title issues.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "NICB VINCheck", desc: "FBI-partnered national stolen vehicle database" },
                { title: "Law Enforcement", desc: "Police stolen vehicle reports from all 50 states" },
                { title: "Insurance Claims", desc: "Total loss and theft claim records" },
                { title: "Salvage Titles", desc: "Rebuilt, salvage, and junk title history" },
                { title: "DMV Records", desc: "State registration and title information" },
                { title: "VIN Cloning Check", desc: "Verify VIN matches vehicle specifications" }
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is SafeOrStolen really a free Carfax alternative?",
                  a: "Yes, SafeOrStolen offers free VIN checks for theft verification. While Carfax costs $39.99 per report, we provide free stolen vehicle checks against NICB, law enforcement, and insurance databases. We focus on theft status rather than full vehicle history."
                },
                {
                  q: "Why is Carfax not free anymore?",
                  a: "Carfax charges $39.99 per report because they provide comprehensive vehicle history including accident records, service history, and ownership changes. SafeOrStolen offers a free alternative focused specifically on theft verification - the most critical check before buying."
                },
                {
                  q: "What does Carfax have that SafeOrStolen doesn't?",
                  a: "Carfax provides detailed service records, minor accident reports, ownership history with dates, and odometer readings. SafeOrStolen focuses on the most critical check: verifying the vehicle isn't stolen. For complete due diligence, use SafeOrStolen first (free), then Carfax on your finalist."
                },
                {
                  q: "Can I check multiple cars for free?",
                  a: "Yes, SafeOrStolen offers 2 free VIN checks. This lets you screen multiple vehicles before deciding which one deserves a full $39.99 Carfax report. Most buyers check 3-5 cars before buying - our free tier saves you $80-$160."
                }
              ].map((faq, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Check If Car Is Stolen - Free</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Don't pay $39.99 until you know the car isn't stolen. Free instant verification from NICB and law enforcement databases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Search className="mr-2 h-5 w-5" />
                  Free VIN Check
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/vin-checker">
                  VIN Checker Details
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
              <Link to="/license-plate-lookup" className="text-primary hover:underline">License Plate Lookup</Link>
              <Link to="/vs-carfax" className="text-primary hover:underline">SafeOrStolen vs Carfax</Link>
              <Link to="/check-car" className="text-primary hover:underline">Check Car Stolen</Link>
              <Link to="/blog/carfax-vs-free-vin-alternatives" className="text-primary hover:underline">Carfax vs Alternatives Guide</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeCarfaxAlternativePage;
