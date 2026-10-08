/**
 * Oct 8 2026: copy rewritten by hand for "carfax alternative". Removed false claims: iOS/Android app,
 * works offline, 3-second results, "$0-2 per check", Carfax's price, "Carfax for everything", all-caps
 * selling copy. The page now says plainly what each service covers and when Carfax is the better tool.
 */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Zap, Shield } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const ComparisonCarfax = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Carfax Alternative for Stolen Checks: SafeOrStolen vs Carfax",
    "description": "Carfax sells vehicle history reports. SafeOrStolen checks whether a car, phone, bike, gun or other serial-numbered item has been reported stolen. Here's what each one covers.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen stolen item check",
          "url": "https://safeorstolen.com",
          "description": "Checks a VIN, IMEI or serial number against SafeOrStolen theft reports and public web results, with extra sources for guns, bikes and Arizona vehicles. Free installable web app at safeorstolen.com/app.",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Check types",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Phone IMEI check" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle VIN check" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Firearm serial number check" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bicycle serial number check" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electronics serial number check" } }
            ]
          }
        },
        {
          "@type": "Service",
          "name": "Carfax vehicle history report",
          "description": "Vehicle history reports for cars and trucks.",
          "provider": {
            "@type": "Organization",
            "name": "Carfax"
          }
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="Carfax Alternative for Stolen Checks | SafeOrStolen"
        description="Carfax sells vehicle history reports. SafeOrStolen checks if a car, phone, bike or gun is reported stolen, with 2 free checks. See what each one covers."
        keywords="Carfax alternative, cheaper than Carfax, free Carfax alternative, Carfax for phones, Carfax for bikes, stolen car check, VIN stolen check"
        canonical="/vs-carfax"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Carfax Alternative for Stolen Checks: SafeOrStolen vs Carfax</h1>
          <p>
            Carfax sells vehicle history reports: accidents, title brands, service records and past owners. SafeOrStolen answers a
            narrower question for more kinds of items: has this VIN, IMEI or serial number been reported stolen? It searches
            SafeOrStolen's own theft reports and public web results, and for Arizona vehicles also Arizona law-enforcement
            stolen-vehicle records. You get 2 free checks with a free account, then $0.99 a check or $10 a month for unlimited checks.
            On your phone, use the free installable web app at safeorstolen.com/app.
          </p>
          <h2>How SafeOrStolen compares with Carfax</h2>
          <ul>
            <li><strong>Items covered:</strong> SafeOrStolen checks cars, phones, bikes, guns and electronics. Carfax covers vehicles.</li>
            <li><strong>What it tells you:</strong> SafeOrStolen looks for theft reports. Carfax reports vehicle history such as accidents and title brands.</li>
            <li><strong>Price:</strong> SafeOrStolen has 2 free checks, then $0.99 a check or $10 a month.</li>
            <li><strong>On your phone:</strong> SafeOrStolen is a free installable web app at safeorstolen.com/app, with a barcode scanner in the browser.</li>
          </ul>
        </div>
      </noscript>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Stolen checks for cars and everything else
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Carfax Alternative for Stolen Checks: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Carfax tells you a car's history. SafeOrStolen tells you whether a car, phone, bike, gun or other
                serial-numbered item has been reported stolen, in a few seconds, with every source listed. Your first 2 checks are free.
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
                  <p className="text-sm text-muted-foreground">Stolen checks for many item types</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Many item types</strong> - Cars (VIN), phones (IMEI), bikes, guns, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Free web app</strong> - Install it from safeorstolen.com/app on iPhone or Android</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Answer in a few seconds</strong> - Every source searched is listed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>2 free checks</strong> - Then $0.99 a check or $10 a month unlimited</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>VIN decode and recalls</strong> - Year, make, model and open safety recalls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Barcode scanner</strong> - Scan an IMEI, serial or VIN label in your browser</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/verify">Run a free check</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="w-8 h-8 text-muted-foreground" />
                    Carfax
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Vehicle history reports</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vehicle history</strong> - Accidents, title brands, service records, past owners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vehicles only</strong> - No phones, bikes, guns or electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Paid reports</strong> - No free reports for private buyers</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">
                    <strong>Use Carfax when</strong> you want a car's accident and title history. Use SafeOrStolen
                    when you want to know if it, or any other item you're buying, has been reported stolen.
                    For a used car, doing both is reasonable.
                  </p>
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
                        <th className="text-center py-3 px-4">Carfax</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Vehicle (VIN) check</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Accident and title-brand history</td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Phone (IMEI) check</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Gun serial check</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Bike serial check</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Electronics serial check</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Free installable web app</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4 text-muted-foreground">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Price</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">$0.99 a check or $10/month</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">Paid reports</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Free checks</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">2 free</td>
                        <td className="text-center py-3 px-4 text-muted-foreground">None</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Related Article */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Related Guide</h3>
                <Link
                  to="/blog/carfax-vs-free-vin-alternatives"
                  className="text-primary hover:underline font-medium flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Carfax vs free VIN alternatives →
                </Link>
                <p className="text-sm text-muted-foreground mt-2">
                  What a paid history report adds over a free VIN check, and when it's worth paying for.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6 text-center">
                <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Check before you pay</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Enter a VIN, IMEI or serial number and SafeOrStolen tells you in a few seconds whether it's been reported stolen,
                  with every source listed. Your first 2 checks are free, then $0.99 a check or $10 a month.
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

export default ComparisonCarfax;
