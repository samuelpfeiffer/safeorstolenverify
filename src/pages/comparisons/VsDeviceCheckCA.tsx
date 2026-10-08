/**
 * Oct 8 2026: copy rewritten by hand for "devicecheck.ca alternative". Removed false claims: "global
 * coverage", "our databases cover North America, Europe, Asia", "mobile app", "more databases",
 * "instant", and the unverified claim that DeviceCheck.ca needs business registration.
 */
import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, Smartphone, Car, Bike, ArrowRight, Zap, Star } from 'lucide-react';

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
          "text": "DeviceCheck.ca is a Canadian lookup for phones and tablets that have been reported lost or stolen to Canadian wireless carriers. You enter the IMEI and it tells you whether the device is on that Canadian blacklist. It covers mobile devices only."
        }
      },
      {
        "@type": "Question",
        "name": "How does SafeOrStolen compare with DeviceCheck.ca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DeviceCheck.ca checks phones against the Canadian lost and stolen list. SafeOrStolen (safeorstolen.com/vs-devicecheck-ca) checks phones, cars, bikes, guns and electronics against SafeOrStolen's own theft reports and public web results, and shows a phone's make and model from its IMEI. A paid carrier blacklist check is also available. For a phone bought in Canada, use both."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use SafeOrStolen to check Canadian devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Enter the IMEI and SafeOrStolen shows the phone's make and model and searches its theft reports and public web results, such as listings that mention that IMEI. For the Canadian carrier blacklist itself, search the IMEI on DeviceCheck.ca too."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get 2 free checks with a free SafeOrStolen account, no credit card. After that, a single check is $0.99 or you can pay $10 a month for unlimited checks, which includes up to 20 phone blacklist checks a month. You can cancel the monthly plan anytime."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Phone IMEI check', safeorstolen: true, competitor: true },
    { feature: 'Canadian carrier lost/stolen list', safeorstolen: false, competitor: true },
    { feature: 'Vehicle VIN check', safeorstolen: true, competitor: false },
    { feature: 'Bike serial check', safeorstolen: true, competitor: false },
    { feature: 'Laptop and electronics serial check', safeorstolen: true, competitor: false },
    { feature: 'Gun serial check', safeorstolen: true, competitor: false },
    { feature: 'Barcode scanner in the browser', safeorstolen: true, competitor: false },
    { feature: 'Free installable web app', safeorstolen: true, competitor: false },
    { feature: 'Checks saved to your account with the date', safeorstolen: true, competitor: false },
  ];

  return (
    <>
      <PageSEO
        title="DeviceCheck.ca Alternative: SafeOrStolen Compared"
        description="DeviceCheck.ca checks phones against Canada's lost and stolen list. SafeOrStolen also checks cars, bikes, guns and electronics. See what each one covers."
        keywords="DeviceCheck.ca alternative, Canadian IMEI check, stolen phone check Canada, DeviceCheck alternative, IMEI checker comparison"
        canonical="/vs-devicecheck-ca"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Phone checks in Canada, and everything else
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            DeviceCheck.ca Alternative: SafeOrStolen
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            DeviceCheck.ca tells you if a phone is on the Canadian lost and stolen list. SafeOrStolen checks phones, cars, bikes,
            laptops and guns against its own theft reports and public web results, and runs on your phone as a free web app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/verify">
                Run a free check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get the free web app</Link>
            </Button>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What each one covers</h2>

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
          <h2 className="text-3xl font-bold text-center mb-8">When SafeOrStolen helps</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>More than phones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check phones, vehicles (VIN), bikes, laptops, game consoles, cameras and guns from one account.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Free web app</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Install it from safeorstolen.com/app and scan an IMEI or serial barcode at the meetup. You get an answer in a few seconds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>2 free checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sign up free, no credit card. After that, $0.99 a check or $10 a month for unlimited checks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Car className="h-8 w-8 text-primary mb-2" />
                <CardTitle>VIN checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decode a car's year, make and model, see open safety recalls, and search for theft reports. DeviceCheck.ca doesn't cover vehicles.
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
                  A bike check also searches a national stolen-bicycle registry, which helps before you buy one off a marketplace listing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faqSchema.mainEntity.map((faq) => (
              <Card key={faq.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Check it before you pay</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enter an IMEI, VIN or serial number and see in a few seconds whether it's been reported stolen, with every source listed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Run a free check</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default VsDeviceCheckCA;
