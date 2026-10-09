import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, Smartphone, ArrowRight, Zap, Globe, Download, Star, Bike } from 'lucide-react';

const VsVinCheckInfo = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is VinCheck.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VinCheck.info is a free VIN lookup website. You enter a 17-character VIN and it decodes the vehicle's specifications and shows the history information it has, with more detailed reports available for a fee. It only looks up vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "How does SafeOrStolen compare with VinCheck.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VinCheck.info focuses on vehicle history. SafeOrStolen (safeorstolen.com) checks VINs and also phones, plates, bikes, laptops, tools and firearms. For a VIN it decodes the year, make and model, lists open safety recalls, and searches its theft reports and public web results, plus Arizona law-enforcement stolen-vehicle records for Arizona VINs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check phone IMEI on VinCheck.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, VinCheck.info only looks up vehicle VINs. SafeOrStolen checks phone IMEIs: it shows the make and model, searches its theft reports and public web results, and offers a paid lost and stolen blacklist check."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Vehicle VIN lookup', safeorstolen: true, competitor: true },
    { feature: 'Open safety recalls for a VIN', safeorstolen: true, competitor: false },
    { feature: 'Phone IMEI check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle serial check', safeorstolen: true, competitor: false },
    { feature: 'Laptop and electronics serials', safeorstolen: true, competitor: false },
    { feature: 'Firearm serial check', safeorstolen: true, competitor: false },
    { feature: 'Installable web app with camera scanner', safeorstolen: true, competitor: false },
    { feature: 'Marketplace listing URL check', safeorstolen: true, competitor: false },
    { feature: 'Report your own stolen item', safeorstolen: true, competitor: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="VinCheck.info Alternative: SafeOrStolen Compared | SafeOrStolen"
        description="VinCheck.info vs SafeOrStolen: what each VIN check covers, what's free, and how to check a car, phone, bike or laptop from a marketplace listing before you buy."
        keywords="VinCheck.info alternative, free VIN check, stolen vehicle lookup, VinCheck alternative, VIN checker comparison"
        canonical="/vs-vincheck-info"
        structuredData={faqSchema}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            VIN Checks Compared
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            VinCheck.info Alternative: SafeOrStolen
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            VinCheck.info looks up vehicles. SafeOrStolen checks cars, plates, phones, bikes, laptops and firearms from one account, in a free web app you can use at the meetup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/verify">
                Try a Free Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/vin-checker">Check a VIN</Link>
            </Button>
          </div>
        </section>

        {/* About VinCheck.info */}
        <section className="mb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What is VinCheck.info?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                VinCheck.info is a free VIN lookup website. It decodes a VIN into the vehicle's specifications and shows the history information it has, with more detailed reports for a fee.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Limitation:</strong> it only looks up vehicles. If you're also buying a phone, laptop or bike on Facebook Marketplace, you need another tool.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Side-by-side comparison</h2>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">SafeOrStolen</th>
                    <th className="text-center p-4 font-semibold">VinCheck.info</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.safeorstolen ? (
                          <Check className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.competitor ? (
                          <Check className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Where SafeOrStolen helps</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>More than cars</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  One account checks vehicles, plates, phones, bikes, laptops, game consoles, tools and firearms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Download className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Web app for meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Install it free from safeorstolen.com/app (no app store needed) and scan a VIN or serial label with your camera.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Marketplace listing check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Paste a Facebook Marketplace or Craigslist listing link. SafeOrStolen pulls out a VIN if the listing shows one and checks it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Phone checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check a phone's IMEI for the model, theft reports and public web results, with a paid blacklist check if you want the carrier status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Bike className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Bike checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bike serials are searched against a national stolen-bicycle registry as well as SafeOrStolen theft reports.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Report a theft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Report your own stolen item so anyone who checks that number on SafeOrStolen sees it.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Case */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Example</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Scenario:</strong> you find a used car and an iPhone on Facebook Marketplace. A VIN-only site covers the car but not the phone.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>With SafeOrStolen:</strong> open the web app, scan the VIN from the windshield or door sticker, then type in the iPhone's IMEI from *#06#. Each result comes back in a few seconds and is saved to your account.
                </p>
                <div className="text-center mt-6">
                  <Button asChild size="lg">
                    <Link to="/verify">Try a Free Check</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is VinCheck.info really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Its basic VIN lookup is free; fuller reports cost extra. SafeOrStolen gives you 2 free checks with a free account, then $0.99 a check or $10 a month for unlimited checks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which is better for buying from Facebook Marketplace?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you only buy cars, a VIN site may be all you need. If you also buy phones, bikes or laptops, SafeOrStolen checks all of them from one account and keeps a dated record of each check.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Does SafeOrStolen use NICB data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No. A SafeOrStolen VIN check decodes the vehicle, lists open recalls, and searches its own theft reports and public web results, plus Arizona law-enforcement stolen-vehicle records for Arizona VINs. NICB's free VINCheck is a separate tool you can also run.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Check cars and everything else</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cars, phones, bikes, laptops: check them all from one SafeOrStolen account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Start a Free Check</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get the Web App</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VsVinCheckInfo;
