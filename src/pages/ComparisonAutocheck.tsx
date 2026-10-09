/** Oct 8 2026: audited by hand. Removed iOS/Android app, offline, barcode, "3 seconds", invented AutoCheck price and speed claims. */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Shield, Car } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const ComparisonAutocheck = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs AutoCheck: theft check or history report",
    "description": "AutoCheck sells vehicle history reports. SafeOrStolen checks vehicles, phones, guns, bikes and serial-numbered items for theft reports. Here's which one answers your question.",
    "specialty": "comparison",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com",
          "description": "Stolen-item check for vehicles (VIN and plate), phones (IMEI), guns, bikes and serial numbers, with a free installable web app",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        },
        {
          "@type": "Service",
          "name": "AutoCheck",
          "description": "Vehicle history reports",
          "provider": {
            "@type": "Organization",
            "name": "AutoCheck"
          }
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="AutoCheck Alternative: Stolen Check for Cars and More | SafeOrStolen"
        description="AutoCheck sells vehicle history reports. SafeOrStolen checks a VIN or plate for theft reports, decodes it, lists recalls, and also checks phones, guns and bikes."
        keywords="Autocheck alternative, free Autocheck alternative, Autocheck stolen check, stolen VIN check, SafeOrStolen vs Autocheck"
        canonical="/vs-autocheck"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>SafeOrStolen vs AutoCheck</h1>
          <p>
            AutoCheck sells vehicle history reports. SafeOrStolen is a stolen-item check: a VIN check decodes the year, make and model, lists open safety recalls, and searches SafeOrStolen's theft reports and public web results, plus Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates. It also checks phones, guns, bikes and serial numbers. 2 free checks, then $0.99 a check or $10 a month unlimited.
          </p>
        </div>
      </noscript>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs AutoCheck: which one do you need?
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                AutoCheck sells vehicle history reports. SafeOrStolen answers a narrower question, "has this been reported stolen?", and it works on phones, guns, bikes and serial-numbered gear as well as cars. Many car buyers use both.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Shield className="w-5 h-5 mr-2" />
                  Run a free check
                </Link>
              </Button>
            </div>

            {/* Side-by-Side Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Smartphone className="w-8 h-8 text-green-600" />
                    SafeOrStolen
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Stolen-item check</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Many item types</strong>: vehicles, plates, phones, guns, bikes, tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>VIN check</strong>: year, make and model, open recalls, theft reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Arizona records</strong>: Arizona VINs and plates searched against Arizona law-enforcement stolen-vehicle records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Free web app</strong>: add safeorstolen.com/app to your home screen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>2 free checks</strong>, then $0.99 a check or $10 a month unlimited</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/verify">Run a check</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Car className="w-8 h-8 text-muted-foreground" />
                    AutoCheck
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Vehicle history reports</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vehicle history</strong>: the kind of report you read for title, accident and ownership history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vehicles only</strong>: not for phones, guns or bikes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Pricing</strong>: see AutoCheck's own site for current report prices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Feature Comparison Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">What each one covers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Feature</th>
                        <th className="text-center py-3 px-4">SafeOrStolen</th>
                        <th className="text-center py-3 px-4">AutoCheck</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Vehicle checks by VIN</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Full vehicle history report</td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Phone (IMEI) checks</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Firearm serial checks</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Bike checks</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Price</td>
                        <td className="text-center py-3 px-4">2 free, then $0.99 or $10/month</td>
                        <td className="text-center py-3 px-4">See AutoCheck</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6 text-center">
                <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Check for theft reports first</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Type a VIN, plate, IMEI or serial number and see the result in a few seconds, with every source listed. If you're buying a car, pair it with a history report and a look at the title.
                </p>
                <Button size="lg" asChild>
                  <Link to="/verify">
                    <Shield className="w-5 h-5 mr-2" />
                    Run a free check
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonAutocheck;
