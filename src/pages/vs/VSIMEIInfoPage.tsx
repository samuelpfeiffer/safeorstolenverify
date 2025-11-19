import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitorComparisonSchema } from '@/components/seo/CompetitorComparisonSchema';
import { Card } from '@/components/ui/card';
import { Check, X, Shield, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VSIMEIInfoPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs IMEI.info: Which IMEI Checker is Better?"
        description="Compare SafeOrStolen and IMEI.info for phone IMEI verification. Discover which service offers better accuracy, more features, and better value for checking stolen phones and carrier locks."
        canonical="https://safeorstolen.com/vs-imeiinfo"
        image="https://safeorstolen.com/og-vs-imeiinfo.png"
        keywords="SafeOrStolen vs IMEI.info, IMEI checker comparison, free IMEI check, phone verification, stolen phone check, carrier unlock check"
      />
      <CompetitorComparisonSchema competitor="imeiinfo" />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              SafeOrStolen vs IMEI.info: Complete 2025 Comparison
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Both check IMEI numbers, but which service offers better stolen phone detection, more accurate data, and better value? Here's everything you need to know.
            </p>
          </div>

          {/* Quick Verdict */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Quick Verdict</h2>
            <p className="text-lg mb-4">
              <strong>IMEI.info</strong> focuses on carrier unlock status and basic phone specs.
            </p>
            <p className="text-lg mb-4">
              <strong>SafeOrStolen</strong> specializes in stolen device verification with law enforcement database access.
            </p>
            <p className="text-primary font-semibold">
              ✅ For stolen phone checks: SafeOrStolen wins<br/>
              ✅ For unlock status only: IMEI.info works
            </p>
          </Card>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Stolen Device Detection</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">SafeOrStolen</p>
                  <p className="text-sm text-muted-foreground">50M+ stolen device records, global police databases, insurance blacklists</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">IMEI.info</p>
                  <p className="text-sm text-muted-foreground">Basic blacklist check, limited stolen device data</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (10x more data sources)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <Database className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Data Accuracy</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">SafeOrStolen</p>
                  <p className="text-sm text-muted-foreground">Real-time law enforcement integration, daily updates</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">IMEI.info</p>
                  <p className="text-sm text-muted-foreground">Carrier-reported data, periodic updates</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (real-time vs periodic)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Speed & Features</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">SafeOrStolen</p>
                  <p className="text-sm text-muted-foreground">Instant results, mobile app, barcode scanner, API access</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">IMEI.info</p>
                  <p className="text-sm text-muted-foreground">Instant results, web-based, basic phone info</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (more features)
                </p>
              </div>
            </Card>
          </div>

          {/* Detailed Feature Comparison */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">What Each Service Checks</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Check Type</th>
                    <th className="text-center py-3 px-2">SafeOrStolen</th>
                    <th className="text-center py-3 px-2">IMEI.info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-2">Stolen/Lost Status</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2">Limited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Police Database</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Insurance Blacklist</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Carrier Lock Status</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Phone Specifications</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Warranty Status</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">FMI/iCloud Lock (iPhone)</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2">Partial</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Blacklist Networks</td>
                    <td className="text-center py-3 px-2">All major</td>
                    <td className="text-center py-3 px-2">Major only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Pricing Comparison */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">SafeOrStolen</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ 2 free searches (14-day trial)</li>
                  <li>• Single check: $0.50</li>
                  <li>• Personal: $9.99/mo (100 checks)</li>
                  <li>• Business: $99/mo (unlimited)</li>
                  <li>• Includes stolen device verification</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">IMEI.info</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Free basic check (limited info)</li>
                  <li>• Premium report: $2.99-$9.99</li>
                  <li>• Carrier unlock only</li>
                  <li>• No subscription plans</li>
                  <li>• Limited stolen device data</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm font-medium text-primary">
                💡 Pro Tip: Use SafeOrStolen for stolen checks, IMEI.info as a secondary source for unlock info
              </p>
            </div>
          </Card>

          {/* Use Cases */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">When to Use Each Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Choose SafeOrStolen if:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Buying a used phone from Craigslist, FB Marketplace, eBay</li>
                  <li>✓ Need to verify it's not stolen</li>
                  <li>✓ Want law enforcement database access</li>
                  <li>✓ Checking multiple devices regularly</li>
                  <li>✓ Running a resale business</li>
                  <li>✓ Need a mobile app for on-the-go checks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Choose IMEI.info if:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Only need carrier unlock status</li>
                  <li>✓ Want free basic phone specs</li>
                  <li>✓ Don't need stolen verification</li>
                  <li>✓ One-time check only</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Final Recommendation */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Recommendation</h2>
            <p className="text-lg text-center mb-4">
              For comprehensive protection against stolen phones, <strong>SafeOrStolen is the clear winner</strong>.
            </p>
            <p className="text-center text-muted-foreground mb-6">
              With 50M+ stolen device records, real-time police database access, and insurance blacklist integration, SafeOrStolen provides protection that IMEI.info simply can't match.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/verify')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Try SafeOrStolen Free (2 Searches)
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
