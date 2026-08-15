import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonIMEIInfo = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen: Best IMEI.info Alternative - Mobile App Comparison",
    "description": "SafeOrStolen has a mobile app. IMEI.info does not. Compare IMEI checkers.",
    "specialty": "comparison",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen IMEI Verification",
          "url": "https://safeorstolen.com",
          "description": "IMEI checker with mobile app (iOS/Android), barcode scanning, offline mode, comprehensive database",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Mobile App Features",
            "itemListElement": [
            ]
          }
        },
        {
          "@type": "Service",
          "name": "IMEI.info",
          "description": "IMEI checker",
          "provider": {
            "@type": "Organization",
            "name": "IMEI.info"
          }
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="Best IMEI.info Alternative | SafeOrStolen App"
        description="SafeOrStolen offers iOS/Android app with barcode scanning. Compare IMEI checkers."
        keywords="IMEI.info alternative, IMEI.info app, best IMEI.info alternative, better than IMEI.info, IMEI checker app, IMEI checker comparison"
        canonical="/vs-imeiinfo"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Best IMEI.info Alternative: SafeOrStolen Has the Mobile App</h1>
          <p> Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. 
            Download the SafeOrStolen IMEI checker app at safeorstolen.com/app for instant barcode scanning, offline IMEI verification, 
            and 3-second stolen checks. IMEI.info is web-only, basic interface, limited data, phones only. SafeOrStolen app is FREE to 
            download with comprehensive IMEI checking plus VIN, firearms, and all other items.
          </p>
        </div>
      </noscript>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Compare IMEI.info and SafeOrStolen
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Best IMEI.info Alternative: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"> Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.
              </p>
              <Button size="lg" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Download SafeOrStolen IMEI Checker App
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
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Mobile App with Barcode Scanner</strong> - Scan IMEI instantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Comprehensive IMEI Database</strong> - Global coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>All Item Types</strong> - Phones, cars, guns, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Works Offline</strong> - No internet needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>FREE 2 Searches</strong> - Try before you buy</span>
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
                    IMEI.info
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" /><span>Single-category coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Basic Interface</strong> - Limited user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Phones Only</strong> - No VIN, firearms, or other items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Requires Internet</strong> - Cannot work offline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Limited Data</strong> - Basic verification only</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" size="lg" disabled>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Choose the Better IMEI.info Alternative</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Install from your mobile browser with barcode scanning, 
                  offline mode, and verification for all item types.
                </p>
                <Button size="lg" asChild>
                  <Link to="/app">
                    <Download className="w-5 h-5 mr-2" />
                    Download SafeOrStolen IMEI Checker App
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

export default ComparisonIMEIInfo;
