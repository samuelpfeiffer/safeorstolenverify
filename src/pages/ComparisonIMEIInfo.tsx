import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, Download } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const ComparisonIMEIInfo = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IMEI.info Alternative: SafeOrStolen",
    "description": "How SafeOrStolen and IMEI.info differ for checking a used phone, and what SafeOrStolen's free web app does.",
    "specialty": "comparison",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen IMEI Check",
          "url": "https://safeorstolen.com",
          "description": "Stolen phone check by IMEI that searches SafeOrStolen theft reports and public web results and shows the phone's make and model. Also checks VINs and serial numbers. Free installable web app at safeorstolen.com/app.",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        },
        {
          "@type": "Service",
          "name": "IMEI.info",
          "description": "IMEI lookup for phone device details",
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
        title="IMEI.info Alternative | SafeOrStolen Web App"
        description="An IMEI.info alternative that checks theft reports, not just specs. SafeOrStolen checks phones, VINs and serials, with a free web app at safeorstolen.com/app."
        keywords="IMEI.info alternative, IMEI.info app, best IMEI.info alternative, IMEI checker app, IMEI checker comparison"
        canonical="/vs-imeiinfo"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>IMEI.info Alternative: SafeOrStolen</h1>
          <p>
            IMEI.info looks up a phone's details. SafeOrStolen checks whether the phone has been reported stolen: it
            searches SafeOrStolen theft reports and public web results and shows the make and model from the IMEI.
            The same account checks VINs, license plates, gun serials, bikes and tools. You get 2 free checks, then
            $0.99 a check or $10 a month. There's no App Store or Google Play app; install the free web app from your
            phone's browser at safeorstolen.com/app.
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
                IMEI.info Alternative: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                IMEI.info tells you what a phone is. SafeOrStolen tells you whether someone has reported it stolen, and it
                checks cars, plates, guns, bikes and tools from the same account.
              </p>
              <Button size="lg" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Get the Free SafeOrStolen Web App
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
                      <span><strong>Barcode scanner</strong> - scan the IMEI off the box or SIM tray label instead of typing it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Theft check</strong> - searches SafeOrStolen theft reports and public web results, with every source listed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>More than phones</strong> - VINs, plates, gun serials, bikes, tools, electronics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Blacklist check</strong> - paid add-on; monthly members get up to 20 a month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>2 free checks</strong> - then $0.99 a check or $10 a month</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/app">Install the Web App</Link>
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
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Phones only</strong> - no VIN, plate, gun or bike checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Device details</strong> - built around looking up what the phone is</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Install SafeOrStolen on Your Phone</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Open safeorstolen.com/app in your phone's browser and add it to your home screen. It's free, there's
                  nothing to download from an app store, and it needs an internet connection to run a check.
                </p>
                <Button size="lg" asChild>
                  <Link to="/app">
                    <Download className="w-5 h-5 mr-2" />
                    Get the Free Web App
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
