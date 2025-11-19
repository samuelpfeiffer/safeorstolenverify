import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitorComparisonSchema } from '@/components/seo/CompetitorComparisonSchema';
import { Card } from '@/components/ui/card';
import { Check, X, Car, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VSNICBPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs NICB VINCheck: Which is Better for Stolen Vehicle Verification?"
        description="Compare SafeOrStolen and NICB VINCheck for stolen vehicle verification. Discover which service offers better coverage, more features, and better value for checking stolen cars."
        canonical="https://safeorstolen.com/vs-nicb"
        image="https://safeorstolen.com/og-vs-nicb.png"
        keywords="SafeOrStolen vs NICB, NICB VINCheck alternative, free VIN check, stolen car check, vehicle history report, VIN verification"
      />
      <CompetitorComparisonSchema competitor="nicb" />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              SafeOrStolen vs NICB VINCheck: Complete 2025 Comparison
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NICB's free VINCheck is great for stolen vehicles, but how does it compare to SafeOrStolen's comprehensive verification platform? Here's everything you need to know.
            </p>
          </div>

          {/* Quick Summary */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
            <div className="space-y-3">
              <p className="text-lg">
                <strong>NICB VINCheck:</strong> Free, US-only, vehicle-specific stolen/salvage check. Limited to 5 searches per day per IP.
              </p>
              <p className="text-lg">
                <strong>SafeOrStolen:</strong> Paid service covering vehicles PLUS phones, electronics, bikes, and more. Global coverage with 50M+ records.
              </p>
              <p className="text-primary font-semibold">
                ✅ For US vehicles only: Use NICB (it's free!)<br/>
                ✅ For everything else: SafeOrStolen wins
              </p>
            </div>
          </Card>

          {/* Core Differences */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <Car className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">What They Cover</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">NICB VINCheck</p>
                  <p className="text-sm text-muted-foreground">Vehicles only (cars, trucks, motorcycles). US insurance database only.</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">SafeOrStolen</p>
                  <p className="text-sm text-muted-foreground">Vehicles, phones, electronics, bikes, tools, jewelry - everything with a serial number</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (broader coverage)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <DollarSign className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Pricing</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">NICB VINCheck</p>
                  <p className="text-sm text-muted-foreground">100% free. Limited to 5 checks per day per IP address.</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">SafeOrStolen</p>
                  <p className="text-sm text-muted-foreground">2 free searches, then $0.50/check. Unlimited business plans available.</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: NICB (free for vehicles only)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Best For</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">NICB VINCheck</p>
                  <p className="text-sm text-muted-foreground">Individual buyers checking 1-5 US vehicles per day</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">SafeOrStolen</p>
                  <p className="text-sm text-muted-foreground">Businesses, resellers, pawn shops, or anyone checking non-vehicle items</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Depends on your needs
                </p>
              </div>
            </Card>
          </div>

          {/* Detailed Feature Comparison */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Feature-by-Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Feature</th>
                    <th className="text-center py-3 px-2">NICB</th>
                    <th className="text-center py-3 px-2">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-2">Vehicle Stolen Check</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Phone/IMEI Check</td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Electronics Check</td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Salvage Title History</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Daily Check Limit</td>
                    <td className="text-center py-3 px-2">5 per IP</td>
                    <td className="text-center py-3 px-2">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Mobile App</td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Barcode Scanner</td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">API Access</td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Police Database Access</td>
                    <td className="text-center py-3 px-2">Insurance only</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">International Coverage</td>
                    <td className="text-center py-3 px-2">US only</td>
                    <td className="text-center py-3 px-2">Global</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Cost</td>
                    <td className="text-center py-3 px-2">Free</td>
                    <td className="text-center py-3 px-2">$0.50+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* What NICB Does Well */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">What NICB VINCheck Does Well</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>NICB (National Insurance Crime Bureau) provides a valuable free service for vehicle checks:</p>
              <ul className="space-y-2 ml-6">
                <li>✓ <strong>Completely free</strong> for basic stolen/salvage checks</li>
                <li>✓ <strong>Official insurance database</strong> - highly accurate for US vehicles</li>
                <li>✓ <strong>No account required</strong> - quick anonymous searches</li>
                <li>✓ <strong>Covers salvage title</strong> history in addition to theft</li>
                <li>✓ <strong>Trusted source</strong> - used by law enforcement</li>
              </ul>
              <p className="pt-4 border-t">
                <strong className="text-primary">Bottom line:</strong> If you're buying a used vehicle in the US and only need a basic stolen/salvage check, NICB VINCheck is perfect and free.
              </p>
            </div>
          </Card>

          {/* When SafeOrStolen is Better */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">When SafeOrStolen is the Better Choice</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>SafeOrStolen becomes the clear winner when you need:</p>
              <ul className="space-y-2 ml-6">
                <li>✓ <strong>Non-vehicle verification</strong> - phones, electronics, bikes, tools, jewelry</li>
                <li>✓ <strong>Multiple daily checks</strong> - not limited to 5 per day</li>
                <li>✓ <strong>Business operations</strong> - pawn shops, resellers, repair shops</li>
                <li>✓ <strong>Mobile convenience</strong> - scan barcodes on-the-go</li>
                <li>✓ <strong>API integration</strong> - automate verification in your platform</li>
                <li>✓ <strong>International coverage</strong> - vehicles outside the US</li>
                <li>✓ <strong>Police database access</strong> - beyond just insurance records</li>
              </ul>
            </div>
          </Card>

          {/* Use Both Strategy */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <h2 className="text-2xl font-bold mb-4">💡 Pro Tip: Use Both Services</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                For maximum protection when buying a used vehicle, we recommend:
              </p>
              <ol className="space-y-2 ml-6 list-decimal">
                <li><strong>Start with NICB VINCheck</strong> (free) to check stolen/salvage status</li>
                <li><strong>Then use SafeOrStolen</strong> for additional verification and any non-vehicle items in the deal</li>
                <li><strong>Get a full vehicle history report</strong> from Carfax/AutoCheck for complete peace of mind</li>
              </ol>
              <p className="pt-4 border-t">
                This layered approach gives you the best protection at the lowest cost.
              </p>
            </div>
          </Card>

          {/* Final Recommendation */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Recommendation</h2>
            <div className="space-y-4">
              <p className="text-center text-lg">
                <strong>For US vehicle checks only:</strong> Use NICB VINCheck (it's free and excellent)
              </p>
              <p className="text-center text-lg">
                <strong>For everything else:</strong> SafeOrStolen is your best option
              </p>
              <p className="text-center text-muted-foreground">
                Checking phones, electronics, or running a business? Need more than 5 checks per day? Want mobile convenience? SafeOrStolen delivers features NICB simply doesn't offer.
              </p>
            </div>
            <div className="flex justify-center mt-6">
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
