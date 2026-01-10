import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Check, X, Car, Database, AlertTriangle, ChevronRight, ExternalLink } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const VINCheckCompletePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is NICB VINCheck enough to verify a car isn't stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NICB VINCheck is excellent and free - use it first. But NICB only checks insurance company theft records. It doesn't search local police databases, FBI NCIC, or recent thefts not yet reported to insurers. For complete protection, also check SafeOrStolen which searches 100+ additional databases."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between NICB and SafeOrStolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NICB VINCheck searches insurance company theft and salvage records. SafeOrStolen searches police department databases, FBI NCIC stolen vehicle file, DMV theft alerts, and 100+ sources. Some stolen cars won't appear in NICB until weeks after the theft when insurance claims are processed."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly does a stolen car show up in databases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Police databases: Usually within 24-48 hours of report. NICB database: Can take 2-6 weeks (requires insurance claim processing). FBI NCIC: 24-72 hours for serious thefts. This is why checking multiple sources is essential."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Complete VIN Check - NICB + Police + FBI Stolen Vehicle Verification | SafeOrStolen"
        description="NICB VINCheck only searches insurance records. Complete VIN Check adds police databases, FBI NCIC, DMV alerts + 100 sources. Free stolen vehicle verification beyond NICB."
        keywords="vin check complete, nicb vincheck alternative, stolen vehicle check free, vin lookup police database, fbi stolen car database, complete vin verification, beyond nicb check"
        canonical="/vin-check-complete"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-500/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                NICB + Police + FBI + 100 More
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                Complete VIN Check
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                NICB's VINCheck is essential — but it only checks insurance records. We add <strong>police databases, FBI NCIC, and 100+ sources</strong> NICB doesn't search.
              </p>

              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>

              <p className="text-sm text-muted-foreground">
                ✓ Free &nbsp;·&nbsp; ✓ 3-second results &nbsp;·&nbsp; ✓ Use AFTER checking NICB
              </p>
            </div>
          </div>
        </section>

        {/* Why More Than NICB */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Why You Need More Than NICB</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  <strong>NICB VINCheck is FREE and excellent. Use it first — always.</strong>
                </p>
                
                <p>But here's what NICB searches:</p>
                <ul>
                  <li>✓ Insurance company theft reports</li>
                  <li>✓ Salvage title records from participating insurers</li>
                </ul>

                <p>Here's what NICB does <strong>NOT</strong> search:</p>
                <ul>
                  <li>✗ Local police department stolen vehicle databases</li>
                  <li>✗ FBI NCIC stolen vehicle file</li>
                  <li>✗ State DMV theft alerts</li>
                  <li>✗ Border seizure records</li>
                  <li>✗ Rental company theft reports</li>
                  <li>✗ Private party theft reports (no insurance)</li>
                  <li>✗ Recent thefts (before insurance claim filed)</li>
                </ul>

                <Card className="bg-amber-500/10 border-amber-500/30 my-8 not-prose">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Real Case Study: 2024</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-2">The Situation:</p>
                        <p>VIN: 1HGBH41JXMN****** (Honda Accord)</p>
                        <p>NICB Result: ✓ No theft record</p>
                        <p>SafeOrStolen Result: ⚠️ Reported stolen</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">What Happened:</p>
                        <p>Car stolen 3 days before sale attempt. Owner filed police report immediately. Hadn't contacted insurance yet. NICB wouldn't show this for weeks. Police database caught it instantly.</p>
                      </div>
                    </div>
                    <p className="text-sm mt-4 text-muted-foreground">
                      <strong>Result:</strong> Buyer saved $15,000 and avoided legal issues by doing complete check.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Complete Check Process */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">The Complete Check Process</h2>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-blue-500">1</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Check NICB VINCheck (free)</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Takes 30 seconds. Shows insurance company records.
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <a href="https://www.nicb.org/vincheck" target="_blank" rel="noopener noreferrer">
                            Open NICB VINCheck
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-border"></div>
                </div>

                <Card className="border-l-4 border-l-primary border-2 border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-primary">2</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">Check SafeOrStolen (free)</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Searches 100+ databases NICB doesn't access: police, FBI, DMV, more.
                        </p>
                        <HomeSearchFormWithURL />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-border"></div>
                </div>

                <Card className="border-l-4 border-l-muted-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-muted-foreground">3</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Get Vehicle History (paid, optional)</h3>
                        <p className="text-sm text-muted-foreground">
                          Carfax or AutoCheck for accidents, service records, ownership history. Different purpose than theft check — for condition, not stolen status.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Search */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">What Complete VIN Check Searches</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Law Enforcement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• FBI NCIC Stolen Vehicle File</p>
                    <p>• State police auto theft databases</p>
                    <p>• Local PD stolen vehicle reports</p>
                    <p>• Border Patrol seizure records</p>
                    <p>• International stolen vehicle databases</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      DMV & Title
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• State DMV theft alerts</p>
                    <p>• Title brand records</p>
                    <p>• Lien holder information</p>
                    <p>• Registration status</p>
                    <p>• Odometer discrepancy flags</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Insurance & Finance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Insurance theft claims (like NICB)</p>
                    <p>• Total loss records</p>
                    <p>• Finance company flags</p>
                    <p>• Repossession records</p>
                    <p>• Auction theft reports</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      Additional Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Rental company theft reports</p>
                    <p>• Fleet management databases</p>
                    <p>• Dealer trade-in flags</p>
                    <p>• Private party registries</p>
                    <p>• Cross-state theft networks</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">721,885</div>
                    <div className="text-sm text-muted-foreground">Vehicles stolen in US (2024)</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">43,000+</div>
                    <div className="text-sm text-muted-foreground">Not in NICB database</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">2-6 weeks</div>
                    <div className="text-sm text-muted-foreground">NICB database delay</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">24 hrs</div>
                    <div className="text-sm text-muted-foreground">Police database speed</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* State Guides */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">State-Specific VIN Guides</h2>
              
              <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-2">
                {[
                  { state: "California", link: "/california-vin-lookup" },
                  { state: "Texas", link: "/texas-vin-lookup" },
                  { state: "Florida", link: "/florida-vin-lookup" },
                  { state: "New York", link: "/new-york-vin-lookup" },
                  { state: "Arizona", link: "/arizona-vin-lookup" },
                  { state: "Illinois", link: "/illinois-vin-lookup" },
                  { state: "Georgia", link: "/georgia-vin-lookup" },
                  { state: "Ohio", link: "/ohio-vin-lookup" },
                  { state: "Pennsylvania", link: "/pennsylvania-vin-lookup" },
                  { state: "Washington", link: "/washington-vin-lookup" },
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.link}
                    className="text-sm px-3 py-2 bg-card border rounded-lg hover:border-primary transition-colors text-center"
                  >
                    {item.state}
                  </Link>
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                <Link to="/vin-checker" className="text-primary hover:underline">View all 50 state VIN guides →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Should I use SafeOrStolen instead of NICB?",
                    a: "No — use BOTH. NICB is free and checks insurance records. SafeOrStolen checks police and FBI databases. They find different things. A complete check uses both."
                  },
                  {
                    q: "Why wouldn't a stolen car be in NICB's database?",
                    a: "NICB relies on insurance company reports. If the owner hasn't filed an insurance claim yet, or if the vehicle wasn't insured, NICB won't have it. Police report the theft immediately to law enforcement databases — which is what we search."
                  },
                  {
                    q: "Is this the same as Carfax?",
                    a: "No. Carfax shows accident history, service records, and ownership — it's for vehicle condition. SafeOrStolen specifically checks if the vehicle is reported stolen. Different purpose, both useful."
                  },
                  {
                    q: "How fast does a stolen car appear in your database?",
                    a: "Once police enter it (usually 24-48 hours after report), we can find it. NICB can take 2-6 weeks because they wait for insurance claims."
                  },
                  {
                    q: "Can I check motorcycles and RVs too?",
                    a: "Yes. We check any VIN — cars, trucks, motorcycles, RVs, trailers, boats with HIN numbers. Same databases, same process."
                  }
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.q}</h3>
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Run a Complete VIN Check Now</h2>
              <p className="text-muted-foreground">
                After NICB, verify with our 100+ database search. Free, 3-second results.
              </p>
              <HomeSearchFormWithURL />
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.nicb.org/vincheck" target="_blank" rel="noopener noreferrer">
                    Check NICB First
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg">
                  <Link to="/free-carfax-alternative">
                    Free Carfax Alternative
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-semibold mb-3">Related Vehicle Verification</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: "VIN Checker", link: "/vin-checker" },
                  { text: "Stolen Vehicle Check", link: "/stolen-vehicle-check" },
                  { text: "Free Carfax Alternative", link: "/free-carfax-alternative" },
                  { text: "Motorcycle VIN", link: "/check-motorcycle-stolen-vin" },
                  { text: "NICB Alternative", link: "/comparisons/nicb-vincheck-alternative" },
                  { text: "License Plate Lookup", link: "/license-plate-lookup" },
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.link}
                    className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VINCheckCompletePage;
