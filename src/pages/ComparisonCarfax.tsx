import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Zap, Shield, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonCarfax = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs Carfax - Mobile App & Universal Verification Comparison",
    "description": "SafeOrStolen verifies ALL items (phones, cars, bikes, firearms). Carfax only checks vehicles. Compare stolen item verification services.",
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
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Verification Types",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IMEI Phone Verification" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VIN Vehicle Verification" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Firearms Serial Verification" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bicycle Serial Verification" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electronics Serial Verification" } }
            ]
          }
        },
        {
          "@type": "Service",
          "name": "Carfax Vehicle History Service",
          "description": "Vehicle history reports only - no phones, firearms, bikes, or other items",
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
        title="SafeOrStolen vs Carfax: Carfax for Everything - Phones, Cars, Bikes, Firearms | Cheaper Alternative"
        description="SafeOrStolen is Carfax for EVERYTHING (phones, vehicles, bikes, firearms, electronics). Carfax only checks vehicles. Cheaper ($0-2 vs $39.99), faster (3 seconds vs minutes), mobile app with barcode scanning. Best Carfax alternative 2025."
        keywords="Carfax alternative, cheaper than Carfax, Carfax for phones, Carfax for firearms, Carfax for bikes, SafeOrStolen vs Carfax, better than Carfax, free Carfax alternative, universal verification, Carfax for everything"
        canonical="/vs-carfax"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>SafeOrStolen vs Carfax: Carfax for Everything - Universal Verification</h1>
          <p>
            SafeOrStolen is Carfax for EVERYTHING, not just vehicles. While Carfax only checks vehicle history ($39.99 per report, vehicles only),
            SafeOrStolen verifies ALL secondhand items in 3 seconds: phones (IMEI), vehicles (VIN), bicycles, firearms, electronics, appliances, tools,
            jewelry, and more. Download the SafeOrStolen mobile app at safeorstolen.com/app with barcode scanning for instant verification.
            Cheaper ($0-2 vs Carfax $39.99), faster (3 seconds vs minutes), and covers ALL items. The universal Carfax alternative.
          </p>
          <h2>Why SafeOrStolen is Better Than Carfax</h2>
          <ul>
            <li><strong>SafeOrStolen verifies EVERYTHING</strong> - Carfax only vehicles</li>
            <li><strong>SafeOrStolen is cheaper</strong> - $0-2 vs Carfax $39.99 per report</li>
            <li><strong>SafeOrStolen is faster</strong> - 3 seconds vs Carfax minutes</li>
            <li><strong>SafeOrStolen has mobile app</strong> - iOS/Android with barcode scanning</li>
            <li><strong>SafeOrStolen FREE trial</strong> - 2 free searches vs Carfax paid only</li>
          </ul>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Carfax for Everything - Buy and Sell
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs Carfax
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Carfax only checks vehicles. SafeOrStolen checks EVERYTHING - phones, vehicles, bikes, firearms, electronics, appliances.
                Cheaper, faster, and a mobile app with barcode scanning. The universal Carfax alternative.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Shield className="w-5 h-5 mr-2" />
                  Verify Any Item Now (Carfax Alternative)
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
                  <p className="text-sm text-muted-foreground">Carfax for Everything - Universal Verification</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Verifies ALL Items</strong> - Phones, vehicles, bikes, firearms, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Mobile App</strong> - iOS & Android with barcode scanning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>3-Second Verification</strong> - Instant results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Cheaper</strong> - $0-2 per check (2 free searches)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Works Offline</strong> - No internet required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Barcode Scanner</strong> - IMEI/Serial/VIN scanning</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/verify">Verify Any Item Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <X className="w-8 h-8 text-red-600" />
                    Carfax
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Vehicles only - no other items</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vehicles Only</strong> - No phones, bikes, firearms, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>No Mobile App</strong> - Web browser only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Slow Reports</strong> - Minutes to generate report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Expensive</strong> - $39.99 per vehicle report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Requires Internet</strong> - Online only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>No Barcode Scanner</strong> - Manual VIN entry</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" size="lg" disabled>
                    Carfax - Vehicles Only
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Feature Comparison Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Detailed Feature Comparison</CardTitle>
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
                        <td className="py-3 px-4 font-medium">Vehicle (VIN) Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Phone (IMEI) Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Firearms Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Bicycle Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Electronics Verification</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Mobile App</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Barcode Scanning</td>
                        <td className="text-center py-3 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="text-center py-3 px-4"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Verification Speed</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">3 seconds</td>
                        <td className="text-center py-3 px-4 text-red-600">Minutes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Price Per Check</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">$0-2</td>
                        <td className="text-center py-3 px-4 text-red-600">$39.99</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Free Trial</td>
                        <td className="text-center py-3 px-4 text-green-600 font-bold">2 free</td>
                        <td className="text-center py-3 px-4 text-red-600">None</td>
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
                  Carfax vs Free VIN Alternatives: Complete 2025 Guide →
                </Link>
                <p className="text-sm text-muted-foreground mt-2">
                  Learn about all your options for vehicle verification - comparing costs, features, and databases.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6 text-center">
                <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Choose Carfax for Everything</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  SafeOrStolen verifies ALL items (phones, vehicles, bikes, firearms, electronics) in 3 seconds with a mobile app.
                  Cheaper than Carfax ($0-2 vs $39.99), faster, and covers EVERYTHING. The universal Carfax alternative.
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

export default ComparisonCarfax;