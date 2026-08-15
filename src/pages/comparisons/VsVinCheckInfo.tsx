import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Smartphone, Car, ArrowRight, Zap, Globe, Download, Star, Bike } from 'lucide-react';

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
          "text": "VinCheck.info is a free VIN lookup service that provides vehicle history reports including stolen vehicle checks, title information, and specifications. It's known for offering free basic VIN decoding and NICB theft checks."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen better than VinCheck.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen checks vehicles AND phones, bikes, laptops, electronics, and firearms. VinCheck.info only checks vehicles. SafeOrStolen also has a mobile app for marketplace meetups."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check phone IMEI on VinCheck.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, VinCheck.info only checks vehicle VINs. For phone IMEI checks, you need SafeOrStolen which verifies both phones and vehicles in one platform."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Vehicle VIN Check', safeorstolen: true, competitor: true },
    { feature: 'Stolen Vehicle Lookup', safeorstolen: true, competitor: true },
    { feature: 'Phone IMEI Check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle Serial Check', safeorstolen: true, competitor: false },
    { feature: 'Laptop/Electronics', safeorstolen: true, competitor: false },
    { feature: 'Firearm Verification', safeorstolen: true, competitor: false },
    { feature: 'Mobile App', safeorstolen: true, competitor: false },
    { feature: 'Barcode Scanner', safeorstolen: true, competitor: false },
    { feature: 'License Plate Lookup', safeorstolen: true, competitor: true },
    { feature: 'Free Searches', safeorstolen: true, competitor: true },
    { feature: 'Marketplace URL Check', safeorstolen: true, competitor: false },
    { feature: 'Report Stolen Items', safeorstolen: true, competitor: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Best VinCheck.info Alternative 2026 | SafeOrStolen"
        description="Compare SafeOrStolen and VinCheck.info. Multi-category verification for cars, phones, bikes, and more. Free mobile app included."
        keywords="VinCheck.info alternative, free VIN check, stolen vehicle lookup, best VinCheck alternative, VIN checker comparison 2026"
        canonical="/vs-vincheck-info"
        structuredData={faqSchema}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Universal Platform & VIN Verification
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best VinCheck.info Alternative: SafeOrStolen
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 VinCheck.info only checks vehicles. SafeOrStolen verifies cars, phones, bikes, laptops, and firearms — with a mobile app for marketplace verification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/verify">
                Try Free Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/vin-checker">Check VIN</Link>
            </Button>
          </div>
        </section>

        {/* About VinCheck.info */}
        <section className="mb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What is VinCheck.info?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                VinCheck.info is a popular free VIN lookup service that provides vehicle history reports. It includes NICB stolen vehicle checks, title information, specifications, and market value estimates.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Key Limitation:</strong> VinCheck.info only checks vehicles. If you're buying a phone, laptop, bike, or any other item on Facebook Marketplace, you need a different tool — or you could use SafeOrStolen for everything.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Side-by-Side Comparison</h2>
          
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
          <h2 className="text-3xl font-bold text-center mb-8">Why SafeOrStolen Wins</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>All Item Types</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  One platform for everything. Check vehicles, phones, bikes, laptops, gaming consoles, cameras, and firearms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Download className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scan VINs and serial numbers at meetups with our free app. VinCheck.info is web-only.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Marketplace URL Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Paste any Facebook Marketplace or Craigslist listing URL and we'll extract and verify the VIN automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Phone Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check IMEI numbers for stolen phones — essential for marketplace purchases. VinCheck.info can't do this.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Bike className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Bicycle Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verify bike serial numbers against stolen databases. Bikes are a top stolen item on marketplaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Report Stolen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Report your stolen items to our database. Help warn future buyers and increase recovery chances.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Case */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Real-World Example</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Scenario:</strong> You're browsing Facebook Marketplace and find a great deal on a used car AND an iPhone. With VinCheck.info, you can only verify the car. The phone? You're on your own.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>With SafeOrStolen:</strong> Open our mobile app, scan the car's VIN barcode, then check the iPhone's IMEI — all in one place, in under 10 seconds each.
                </p>
                <div className="text-center mt-6">
                  <Button asChild size="lg">
                    <Link to="/verify">Try It Now — Free</Link>
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
                  VinCheck.info offers free basic VIN decoding and NICB theft checks. Detailed reports may require payment. SafeOrStolen also offers free verification searches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which is better for buying from Facebook Marketplace?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen is better for marketplace purchases because people sell all types of items — not just cars. You can verify phones, bikes, laptops, and vehicles all in one app.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Does SafeOrStolen use NICB data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen checks multiple databases including law enforcement signals, insurance records, and carrier blacklists for comprehensive coverage similar to NICB for vehicles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">The Universal Verification Platform</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cars, phones, bikes, laptops — verify everything in one place with SafeOrStolen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Start Free Verification</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get the App</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VsVinCheckInfo;
