import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonSwappa = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs Swappa - Mobile App Comparison",
    "description": "SafeOrStolen has a mobile app. Swappa does not. Compare verification services.",
    "specialty": "comparison",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen Verification Service",
          "url": "https://safeorstolen.com",
          "description": "Dedicated verification service with mobile app (iOS/Android), all item types, offline mode, 3-second verification",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Mobile App Features",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "MobileApplication", "name": "SafeOrStolen App", "operatingSystem": "iOS, Android" } }
            ]
          }
        },
        {
          "@type": "Service",
          "name": "Swappa",
          "description": "Marketplace with basic verification (no mobile app)",
          "provider": {
            "@type": "Organization",
            "name": "Swappa"
          }
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Swappa: Swappa Has NO Mobile App | Download SafeOrStolen App"
        description="Swappa has NO mobile app. SafeOrStolen has a full iOS/Android app with comprehensive verification. Better than Swappa. Download SafeOrStolen app free. Swappa alternative with mobile app. Best verification app 2025."
        keywords="Swappa alternative, Swappa app, Swappa has no app, SafeOrStolen vs Swappa, better than Swappa, Swappa mobile app, verification app, download safeorstolen app, Swappa IMEI check alternative"
        canonical="/vs-swappa"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <p><strong>SafeOrStolen vs Swappa</strong> - Swappa has no mobile app. SafeOrStolen offers the only verification app.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Swappa Has NO Mobile App
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs Swappa
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Swappa doesn't have a mobile app. SafeOrStolen is the dedicated verification service with a full mobile app 
                for instant stolen item checks on all devices.
              </p>
              <Button size="lg" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Download SafeOrStolen Verification App
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Smartphone className="w-8 h-8 text-green-600" />
                    SafeOrStolen
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Dedicated verification with mobile app</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Dedicated Mobile App</strong> - Built for verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>All Item Types</strong> - Phones, cars, guns, bikes, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Works Offline</strong> - Verify anywhere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>3-Second Verification</strong> - Instant results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>FREE 2 Searches</strong> - Try it free</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/app">Download App</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <X className="w-8 h-8 text-red-600" />
                    Swappa
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Marketplace, not verification-focused</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>NO Mobile App</strong> - Web only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Phones Only</strong> - Limited item coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Requires Internet</strong> - No offline mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Marketplace Focus</strong> - Not dedicated verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>No Barcode Scanner</strong> - Manual entry only</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" size="lg" disabled>
                    Swappa Has No App
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Choose the Better Swappa Alternative</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  SafeOrStolen is dedicated verification with a mobile app. Swappa is a marketplace without an app. 
                  Download SafeOrStolen free for comprehensive verification on all devices.
                </p>
                <Button size="lg" asChild>
                  <Link to="/app">
                    <Download className="w-5 h-5 mr-2" />
                    Download SafeOrStolen App
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

export default ComparisonSwappa;
