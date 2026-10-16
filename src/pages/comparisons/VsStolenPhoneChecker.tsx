import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, Smartphone, Car, Bike, ArrowRight, Globe, Download, FileText, Star } from 'lucide-react';

const VsStolenPhoneChecker = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CTIA Stolen Phone Checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Stolen Phone Checker is a free lookup run by CTIA, the US wireless industry association. You enter a phone's IMEI and it tells you whether participating carriers have reported that phone lost or stolen. It only covers phones."
        }
      },
      {
        "@type": "Question",
        "name": "How does SafeOrStolen compare with CTIA Stolen Phone Checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CTIA's checker is free and only checks phones against carrier reports. SafeOrStolen (safeorstolen.com) shows a phone's make and model from the IMEI, searches its own theft reports and public web results, and offers a paid blacklist check. It also checks vehicles, plates, bikes, guns, laptops and tools, and saves every check to your account with the date."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check vehicles on CTIA Stolen Phone Checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. CTIA's checker only takes phone IMEIs. SafeOrStolen checks VINs too: it decodes the year, make and model, lists open safety recalls, and searches theft reports and public web results, plus Arizona law-enforcement records for Arizona VINs."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Phone IMEI check', safeorstolen: true, competitor: true },
    { feature: 'Free lost/stolen carrier check', safeorstolen: false, competitor: true },
    { feature: 'Vehicle VIN check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle serial check', safeorstolen: true, competitor: false },
    { feature: 'Laptop and electronics serials', safeorstolen: true, competitor: false },
    { feature: 'Firearm serial check', safeorstolen: true, competitor: false },
    { feature: 'Installable web app with camera scanner', safeorstolen: true, competitor: false },
    { feature: 'Marketplace listing URL check', safeorstolen: true, competitor: false },
    { feature: 'Report your own stolen item', safeorstolen: true, competitor: false },
    { feature: 'Saved, dated check history', safeorstolen: true, competitor: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="CTIA Stolen Phone Checker Alternative: SafeOrStolen Compared"
        description="CTIA's Stolen Phone Checker vs SafeOrStolen: what each one checks, what's free, and when to use both before buying a used phone, car, bike or laptop."
        keywords="CTIA stolen phone checker alternative, stolen phone checker, carrier blacklist check, stolen phone verification, IMEI check comparison"
        canonical="/vs-stolenphonechecker"
        structuredData={faqSchema}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Phone and Item Checks Compared
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CTIA Stolen Phone Checker Alternative: SafeOrStolen
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            CTIA's checker is a free carrier lookup for phones only. SafeOrStolen checks phones, cars, plates, bikes, laptops, firearms and tools from one account, in a free web app you can use at the meetup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/verify">
                Try a Free Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Install the Web App</Link>
            </Button>
          </div>
        </section>

        {/* About CTIA */}
        <section className="mb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What is CTIA Stolen Phone Checker?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Stolen Phone Checker is a free lookup run by CTIA, the US wireless industry association. You type in a phone's IMEI and it tells you whether participating carriers have reported that phone lost or stolen.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Limitation:</strong> it only checks phones. It can't look up a car, a bike, a laptop, a game console or anything else with a serial number.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Feature comparison</h2>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">SafeOrStolen</th>
                    <th className="text-center p-4 font-semibold">CTIA Checker</th>
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
          <p className="text-sm text-muted-foreground text-center mt-4">
            SafeOrStolen's lost and stolen blacklist check is paid. Monthly members ($10 a month) get up to 20 a month. Use CTIA's free checker too.
          </p>
        </section>

        {/* Key Differences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Where SafeOrStolen helps</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">More than phones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  One account checks:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-primary" /> Phones (IMEI)
                  </li>
                  <li className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" /> Vehicles (VIN) and plates
                  </li>
                  <li className="flex items-center gap-2">
                    <Bike className="h-4 w-4 text-primary" /> Bicycles (frame serial)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Laptops, consoles, tools and firearms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Download className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">A web app for meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Install it from safeorstolen.com/app (no app store needed) and:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Scan a barcode or IMEI label with your camera
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Check the phone in front of you at the meetup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Check a listing before you leave home
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> See the result in a few seconds
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Marketplace listing check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Paste a Facebook Marketplace, Craigslist, OfferUp or eBay listing link. SafeOrStolen pulls out any serial or IMEI it can find in the listing and checks it. CTIA's checker doesn't do this.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Report a stolen item</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If something of yours is stolen, you can report it on SafeOrStolen so anyone who checks that number sees it. CTIA's checker is lookup-only; to blacklist a stolen phone, call your carrier.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is CTIA Stolen Phone Checker legitimate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes. It's run by CTIA, the US wireless industry association, and uses lost and stolen reports from participating carriers. It's free. It only checks phones, so use a different tool for cars, bikes, laptops or anything else.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I check a car VIN on CTIA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, it only takes phone IMEIs. SafeOrStolen checks VINs: it decodes the year, make and model, lists open safety recalls, and searches theft reports and public web results. NICB's free VINCheck is another separate option for vehicles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which is better for Facebook Marketplace purchases?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use both for a phone: CTIA's free carrier lookup, and SafeOrStolen for its theft reports, public web results and saved record of your check. For anything that isn't a phone, CTIA can't help, and SafeOrStolen can check the serial, VIN or listing link.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Check more than phones</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with 2 free checks on a free account. After that it's $0.99 a check or $10 a month for unlimited checks.
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

export default VsStolenPhoneChecker;
