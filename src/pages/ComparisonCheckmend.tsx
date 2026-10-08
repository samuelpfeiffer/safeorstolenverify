import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Check, X, Smartphone, HelpCircle, Download } from 'lucide-react';
import { Link } from '@/lib/router-compat';

const ComparisonCheckmend = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs CheckMEND",
    "description": "How SafeOrStolen compares with CheckMEND: what each check covers, what SafeOrStolen searches, what it costs, and what to ask any stolen-item checker.",
    "specialty": "comparison",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com",
          "description": "Stolen-item checks for phones (IMEI), vehicles (VIN), license plates, guns, bikes and serial-numbered items. Free installable web app at safeorstolen.com/app.",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        },
        {
          "@type": "Service",
          "name": "CheckMEND",
          "description": "Device history check service",
          "provider": {
            "@type": "Organization",
            "name": "CheckMEND"
          }
        }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMEND: CheckMEND Alternative | SafeOrStolen"
        description="Comparing CheckMEND and SafeOrStolen: what each covers, what SafeOrStolen searches, its prices ($0.99 a check, 2 free) and its free web app."
        keywords="CheckMEND alternative, CheckMEND app, compare CheckMEND, CheckMEND mobile app, item checker app, SafeOrStolen app download, CheckMEND review"
        canonical="/vs-checkmend"
        structuredData={comparisonSchema}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>SafeOrStolen vs CheckMEND</h1>
          <p>CheckMEND is a device history check best known for phones and other electronics. SafeOrStolen checks phones by IMEI, vehicles by VIN, license plates, guns, bikes and any serial-numbered item. Every SafeOrStolen check searches its own theft reports and public web results, with extra records for guns, bikes and Arizona vehicles. It runs as a free installable web app at safeorstolen.com/app (not an App Store or Google Play app) and needs a data connection. You get 2 free checks with a free account, then $0.99 a check or $10 a month unlimited.</p>
        </div>
      </noscript>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Compare CheckMEND and SafeOrStolen
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SafeOrStolen vs CheckMEND
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                CheckMEND is a device history check best known for phones and electronics. SafeOrStolen checks phones too, plus vehicles, plates, guns, bikes and anything with a serial number, from one search box. Here's what SafeOrStolen does and doesn't search, so you can pick the right tool.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">
                  Try 2 Free Checks
                </Link>
              </Button>
            </div>

            {/* Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Smartphone className="w-8 h-8 text-primary" />
                    SafeOrStolen
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Phones, vehicles, plates, guns, bikes and serial-numbered items</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Free web app</strong> - add it to your home screen from safeorstolen.com/app; no app store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Camera scanner</strong> - scan an IMEI, serial or VIN barcode instead of typing it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Results in a few seconds</strong> - with every source listed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>2 free checks</strong> - with a free account, no credit card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Paid carrier blacklist check</strong> - for phones, up to 20 a month on the monthly plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span><strong>Needs a data connection</strong> - there's no offline check</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <Link to="/app">Open the Web App</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <HelpCircle className="w-8 h-8 text-muted-foreground" />
                    CheckMEND
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Device history checks, mainly phones and electronics</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    CheckMEND is a separate company, and its prices, coverage and sources can change. Before you pay for any checker, look on its own site for:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>What item types it covers</li>
                    <li>Which records it actually searches</li>
                    <li>The price per check and any subscription</li>
                    <li>Whether you get a dated record you can keep</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* What SafeOrStolen searches */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">What a SafeOrStolen Check Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Item</th>
                        <th className="text-left py-3 px-4">What's searched</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Every check</td>
                        <td className="py-3 px-4">SafeOrStolen's own theft reports and public web results</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Phones (IMEI)</td>
                        <td className="py-3 px-4">Make and model from the IMEI; optional paid carrier blacklist check</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Vehicles (VIN)</td>
                        <td className="py-3 px-4">Year, make, model and open recalls; Arizona VINs also against Arizona law-enforcement stolen-vehicle records</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Guns</td>
                        <td className="py-3 px-4">Police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Bikes</td>
                        <td className="py-3 px-4">A national stolen-bicycle registry</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Not searched</td>
                        <td className="py-3 px-4">NCIC, DMV records, Apple or Google account status, pawn and insurer databases</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Price</td>
                        <td className="py-3 px-4">2 free checks, then $0.99 a check or $10 a month unlimited; optional $1.99 verification certificate</td>
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
                <h2 className="text-3xl font-bold mb-4">Pick the Checker That Fits What You're Buying</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you buy more than phones, one account that checks phones, cars, plates, guns, bikes and serial numbers saves you juggling several services. Add SafeOrStolen to your home screen from safeorstolen.com/app and use your 2 free checks.
                </p>
                <Button size="lg" asChild>
                  <Link to="/app">
                    <Download className="w-5 h-5 mr-2" />
                    Open the Free Web App
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

export default ComparisonCheckmend;
