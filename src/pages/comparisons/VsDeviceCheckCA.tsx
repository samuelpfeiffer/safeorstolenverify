import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Smartphone, Car, Bike, Laptop, ArrowRight, Zap, Globe, Star, Home } from 'lucide-react';

const VsDeviceCheckCA = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DeviceCheck.ca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DeviceCheck.ca is a Canadian service that provides access to the national database of mobile devices reported lost or stolen in Canada. It primarily focuses on IMEI checking for phones and tablets."
        }
      },
      {
        "@type": "Question",
        "name": "How is SafeOrStolen better than DeviceCheck.ca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen offers global coverage (not just Canada), checks multiple item types (phones, vehicles, bikes, electronics, firearms), provides a mobile app for instant verification, and includes more databases for comprehensive results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use SafeOrStolen to check Canadian devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen provides global IMEI checking that includes Canadian carrier databases, plus additional international databases that DeviceCheck.ca may not cover."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Phone/IMEI Check', safeorstolen: true, competitor: true },
    { feature: 'Vehicle VIN Check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle Serial Check', safeorstolen: true, competitor: false },
    { feature: 'Laptop/Electronics Check', safeorstolen: true, competitor: false },
    { feature: 'Firearm Serial Check', safeorstolen: true, competitor: false },
    { feature: 'Mobile App', safeorstolen: true, competitor: false },
    { feature: 'Barcode Scanner', safeorstolen: true, competitor: false },
    { feature: 'Free Searches', safeorstolen: true, competitor: false },
    { feature: 'Global Coverage', safeorstolen: true, competitor: false },
    { feature: 'Marketplace URL Analysis', safeorstolen: true, competitor: false },
    { feature: 'Real-time Verification', safeorstolen: true, competitor: true },
    { feature: 'Instant Results', safeorstolen: true, competitor: true },
  ];

  return (
    <>
      <PageSEO
        title="Best DeviceCheck.ca Alternative 2026 | SafeOrStolen"
        description="Compare SafeOrStolen and DeviceCheck Canada. Global coverage and multi-category verification with a mobile app. Free alternative."
        keywords="DeviceCheck.ca alternative, Canadian IMEI check, stolen phone check Canada, best DeviceCheck alternative, IMEI checker comparison"
        canonical="/vs-devicecheck-ca"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Global Verification & Canada Coverage
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best DeviceCheck.ca Alternative: SafeOrStolen
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 DeviceCheck.ca only checks Canadian phones. SafeOrStolen verifies phones, cars, bikes, laptops, firearms, and more — with global coverage and a free mobile app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/verify">
                Try Free Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get Mobile App</Link>
            </Button>
          </div>
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
                    <th className="text-center p-4 font-semibold">DeviceCheck.ca</th>
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

        {/* Why Choose SafeOrStolen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose SafeOrStolen Over DeviceCheck.ca?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check devices from any country, not just Canada. Our databases cover North America, Europe, Asia, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>All Item Types</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verify phones, vehicles (VIN), bicycles, laptops, gaming consoles, cameras, firearms, and more — one platform for everything.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scan barcodes and verify items instantly at meetups.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Free Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start with 2 free verification searches. DeviceCheck.ca requires business registration for access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Car className="h-8 w-8 text-primary mb-2" />
                <CardTitle>VIN Checking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verify if vehicles are stolen before buying. DeviceCheck.ca doesn't offer vehicle verification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Bike className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Bicycle Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check bike serial numbers against stolen databases. Essential for marketplace purchases.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is DeviceCheck.ca?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  DeviceCheck.ca is a Canadian service that provides access to the national database of mobile devices reported lost or stolen in Canada. It primarily serves businesses and law enforcement, with limited public access.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How is SafeOrStolen better than DeviceCheck.ca?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen offers global coverage (not just Canada), checks multiple item types (phones, vehicles, bikes, electronics, firearms), provides a free mobile app for instant verification at meetups, and includes more databases for comprehensive results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use SafeOrStolen to check Canadian devices?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! SafeOrStolen provides global IMEI checking that includes Canadian carrier databases, plus additional international databases that DeviceCheck.ca may not cover. You get more comprehensive protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is SafeOrStolen free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen offers 2 free verification searches to get started. For unlimited access, affordable subscription plans are available for individuals and businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Verify Any Item, Anywhere?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get comprehensive stolen item verification with global coverage — phones, cars, bikes, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Start Free Verification</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default VsDeviceCheckCA;
