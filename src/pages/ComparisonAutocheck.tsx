import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Shield } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const ComparisonAutocheck = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen: Best Autocheck Alternative - Universal Verification",
    "description": "SafeOrStolen verifies ALL items (phones, cars, bikes, firearms). Autocheck only checks vehicles. Compare verification services.",
    "specialty": "comparison",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen Verification Service",
          "url": "https://safeorstolen.com",
          "description": "Universal stolen item verification with mobile app - phones, vehicles, bikes, firearms, electronics, all items",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        },
        {
          "@type": "Service",
          "name": "Autocheck Vehicle History Service",
          "description": "Vehicle history reports only - no phones, firearms, bikes, or other items",
          "provider": {
            "@type": "Organization",
            "name": "Autocheck"
          }
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="Best Autocheck Alternative 2026 | SafeOrStolen"
        description="SafeOrStolen verifies EVERYTHING (phones, vehicles, bikes, firearms). Autocheck only checks vehicles. Free mobile app with 2 free searches."
        keywords="Autocheck alternative, cheaper than Autocheck, Autocheck for phones, Autocheck for firearms, best Autocheck alternative, free Autocheck alternative, universal verification"
        canonical="/vs-autocheck"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Best Autocheck Alternative: SafeOrStolen Universal Verification</h1>
          <p>
            SafeOrStolen verifies ALL items, not just vehicles like Autocheck. While Autocheck only checks vehicle history ($24.99 per report),
            SafeOrStolen verifies phones (IMEI), vehicles (VIN), bicycles, firearms, electronics in 3 seconds. Starting at $0 while Autocheck charges $24.99.
            Mobile app with barcode scanning. The universal Autocheck alternative.
          </p>
        </div>
      </noscript>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Autocheck for Everything
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Best Autocheck Alternative: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Autocheck only checks vehicles. SafeOrStolen checks EVERYTHING - phones, vehicles, bikes, firearms, electronics.
                Cheaper, faster, mobile app with barcode scanning. The universal Autocheck alternative.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Shield className="w-5 h-5 mr-2" />
                  Verify Any Item Now (Autocheck Alternative)
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
                  <p className="text-sm text-muted-foreground">Universal Verification</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>ALL Items</strong> - Phones, vehicles, bikes, firearms, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Mobile App</strong> - iOS & Android with barcode scanning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>3 Seconds</strong> - Instant verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>$0-2</strong> - 2 free searches included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Works Offline</strong> - No internet required</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/verify">Verify Any Item</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <X className="w-8 h-8 text-red-600" />
                    Autocheck
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Vehicles only</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vehicles Only</strong> - No phones, bikes, firearms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" /><span>Single-category coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Minutes</strong> - Slow report generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>$24.99</strong> - Per vehicle report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Online Only</strong> - Requires internet</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" size="lg" disabled>
                    Autocheck - Vehicles Only
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Feature Comparison Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Feature</th>
                        <th className="text-center py-3 px-4">SafeOrStolen</th>
                        <th className="text-center py-3 px-4">Autocheck</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Vehicle Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Phone Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Firearms Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Mobile App</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Verification Speed</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">3 seconds</td>
                        <td className="text-center py-3 px-4 text-red-600">Minutes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Price</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">$0-2</td>
                        <td className="text-center py-3 px-4 text-red-600">$24.99</td>
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
                <h2 className="text-3xl font-bold mb-4">Choose the Better Autocheck Alternative</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  SafeOrStolen verifies ALL items in 3 seconds with a mobile app. Cheaper, faster, and covers more item categories than Autocheck.
                </p>
                <Button size="lg" asChild>
                  <Link to="/verify">
                    <Shield className="w-5 h-5 mr-2" />
                    Verify Any Item FREE
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