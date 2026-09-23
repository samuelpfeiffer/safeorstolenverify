import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, Smartphone, Car, Bike, ArrowRight, Globe, Download, Zap, Star } from 'lucide-react';

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
          "text": "The CTIA Stolen Phone Checker (stolenphonechecker.org) is a service powered by carrier and manufacturer blacklists Device Check that allows consumers to verify if a mobile device has been reported lost or stolen. It's sponsored by US wireless carriers."
        }
      },
      {
        "@type": "Question",
        "name": "How does SafeOrStolen compare with CTIA Stolen Phone Checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen checks phones AND vehicles, bikes, laptops, electronics, and firearms. It also provides a mobile app for on-the-go verification and marketplace URL analysis."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check vehicles on CTIA Stolen Phone Checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, CTIA Stolen Phone Checker only verifies mobile phones. Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Phone IMEI Check', safeorstolen: true, competitor: true },
    { feature: 'Vehicle VIN Check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle Serial Check', safeorstolen: true, competitor: false },
    { feature: 'Laptop/Electronics', safeorstolen: true, competitor: false },
    { feature: 'Firearm Verification', safeorstolen: true, competitor: false },
    { feature: 'Mobile App', safeorstolen: true, competitor: false },
    { feature: 'Barcode/QR Scanner', safeorstolen: true, competitor: false },
    { feature: 'Marketplace URL Check', safeorstolen: true, competitor: false },
    { feature: 'Global Databases', safeorstolen: true, competitor: true },
    { feature: 'Free to Use', safeorstolen: true, competitor: true },
    { feature: 'Instant Results', safeorstolen: true, competitor: true },
    { feature: 'Report Stolen Items', safeorstolen: true, competitor: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Best CTIA Stolen Phone Checker Alternative 2026"
        description="Compare SafeOrStolen and CTIA Stolen Phone Checker. Multi-category verification, mobile app, and marketplace analysis. Free to try."
        keywords="CTIA stolen phone checker alternative, stolenphonechecker.org, carrier and manufacturer blacklists device check, stolen phone verification, IMEI check comparison"
        canonical="/vs-stolenphonechecker"
        structuredData={faqSchema}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Universal & Phone Verification
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best CTIA Stolen Phone Checker Alternative: SafeOrStolen
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 CTIA only checks phones. SafeOrStolen verifies phones, cars, bikes, laptops, firearms, and more — with a mobile app and marketplace URL analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/verify">
                Try Free Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Download App</Link>
            </Button>
          </div>
        </section>

        {/* About CTIA */}
        <section className="mb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What is CTIA Stolen Phone Checker?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The CTIA Stolen Phone Checker (stolenphonechecker.org) is a free service sponsored by US wireless carriers and powered by carrier and manufacturer blacklists Device Check. It allows consumers to verify if a mobile phone has been reported lost or stolen by checking its IMEI number.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Limitation:</strong> CTIA only checks mobile phones. It cannot verify vehicles, bicycles, laptops, gaming consoles, or other commonly stolen items.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
          
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
        </section>

        {/* Key Differences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why SafeOrStolen is the Better Choice</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">All-in-One Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Why use multiple tools when one does it all? SafeOrStolen verifies:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-primary" /> Phones (IMEI)
                  </li>
                  <li className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" /> Vehicles (VIN)
                  </li>
                  <li className="flex items-center gap-2">
                    <Bike className="h-4 w-4 text-primary" /> Bicycles (Serial)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Laptops, consoles, cameras, firearms...
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Download className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Mobile App for Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  CTIA is web-only. SafeOrStolen has a mobile app that lets you:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Scan barcodes and IMEI labels instantly
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Verify items at marketplace meetups
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Check listings before you leave home
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Get instant 3-second results
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Marketplace URL Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Paste any Facebook Marketplace, Craigslist, OfferUp, or eBay listing URL and we'll extract the serial number and check it automatically. CTIA doesn't offer this feature.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Report Stolen Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen allows you to report your stolen items to our database, increasing the chances of recovery and warning future buyers. CTIA only checks — it doesn't accept reports from consumers.
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
                  Yes, CTIA (stolenphonechecker.org) is a legitimate service backed by US wireless carriers and carrier and manufacturer blacklists. However, it only checks mobile phones and doesn't offer verification for other item types or a mobile app.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I check a car VIN on CTIA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, CTIA only checks mobile phone IMEI numbers. For vehicle VIN checks, you need SafeOrStolen or NICB VINCheck. Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which is better for Facebook Marketplace purchases?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen is better for marketplace purchases because it: (1) checks all item types, not just phones, (2) has a mobile app for on-the-spot verification at meetups, and (3) can analyze listing URLs to extract and verify serial numbers automatically.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">One Tool for All Your Verification Needs</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop using multiple tools. SafeOrStolen verifies phones, cars, bikes, and more — with a free mobile app.
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

export default VsStolenPhoneChecker;
