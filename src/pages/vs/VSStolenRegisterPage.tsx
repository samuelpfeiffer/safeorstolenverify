import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Check, X, Globe, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VSStolenRegisterPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs The Stolen Register: 2025 Comparison"
        description="Compare SafeOrStolen and The Stolen Register for stolen item verification. Find out which service offers better coverage, features, and value for checking stolen phones, bikes, and electronics."
        canonical="https://safeorstolen.com/vs-stolenregister"
        image="https://safeorstolen.com/og-vs-stolenregister.png"
        keywords="SafeOrStolen vs Stolen Register, stolen register alternative, bike theft check, stolen phone register, stolen item database"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              SafeOrStolen vs The Stolen Register: Complete Comparison
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Both services help verify stolen items, but which one offers better coverage, more features, and better value? Here's everything you need to know.
            </p>
          </div>

          {/* Quick Summary */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">At a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">The Stolen Register</h3>
                <p className="text-sm text-muted-foreground">
                  UK-based community reporting platform. Users report stolen items, others can search. Limited to user-submitted data only.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">SafeOrStolen</h3>
                <p className="text-sm text-muted-foreground">
                  Global verification service with law enforcement database access, 50M+ records, insurance blacklists, and professional-grade verification.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Differences */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <Globe className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Coverage</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-1">SafeOrStolen</p>
                  <p className="text-xs text-muted-foreground">50M+ records, police databases, global insurance companies, real law enforcement integration</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold text-sm mb-1">Stolen Register</p>
                  <p className="text-xs text-muted-foreground">User-reported only, no official databases, UK-focused, limited verification</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (official data vs user reports)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Accuracy</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-1">SafeOrStolen</p>
                  <p className="text-xs text-muted-foreground">Verified police reports, insurance claims, official crime databases</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold text-sm mb-1">Stolen Register</p>
                  <p className="text-xs text-muted-foreground">Unverified user reports, potential false positives, no official validation</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (verified official data)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Speed</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-1">SafeOrStolen</p>
                  <p className="text-xs text-muted-foreground">Instant automated checks, real-time database queries, API access</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold text-sm mb-1">Stolen Register</p>
                  <p className="text-xs text-muted-foreground">Manual search through user listings, browsing required</p>
                </div>
                <p className="text-xs text-primary font-medium pt-3 border-t">
                  Winner: SafeOrStolen (automated vs manual)
                </p>
              </div>
            </Card>
          </div>

          {/* Detailed Comparison */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Feature</th>
                    <th className="text-center py-3 px-2">SafeOrStolen</th>
                    <th className="text-center py-3 px-2">Stolen Register</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-2">Police Database Access</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Insurance Blacklists</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Verified Reports</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Global Coverage</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2">UK only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Mobile App</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Barcode Scanning</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">API Integration</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Real-time Alerts</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2">Free Community Reports</td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-3 px-2"><Check className="inline text-green-500" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">SafeOrStolen</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ 2 free verified searches</li>
                  <li>• $0.50 per official database check</li>
                  <li>• $9.99/month (100 checks)</li>
                  <li>• Access to 50M+ verified records</li>
                  <li>• Police + insurance databases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">The Stolen Register</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Free to search user reports</li>
                  <li>• Free to report stolen items</li>
                  <li>• Limited to user-submitted data</li>
                  <li>• No official database access</li>
                  <li>• No verification</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* The Problem with Community-Only Platforms */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-4">Why Community-Only Isn't Enough</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>The Stolen Register relies entirely on victims reporting their stolen items.</strong> This creates several problems:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Most theft victims don't know about the platform</li>
                <li>• No verification means potential false reports</li>
                <li>• Missing official police reports and insurance claims</li>
                <li>• Limited coverage outside the UK</li>
                <li>• No integration with law enforcement databases</li>
              </ul>
              <p className="pt-4 border-t">
                <strong className="text-primary">SafeOrStolen solves this</strong> by aggregating data from official sources that catch 95% of stolen items, regardless of whether victims report them on community platforms.
              </p>
            </div>
          </Card>

          {/* Use Cases */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">When to Use Each Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Use SafeOrStolen for:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Buying used items (phones, bikes, electronics)</li>
                  <li>✓ Official verification with legal standing</li>
                  <li>✓ Business/commercial resale operations</li>
                  <li>✓ Comprehensive global coverage</li>
                  <li>✓ Insurance and police-verified data</li>
                  <li>✓ Instant automated checks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Use Stolen Register for:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Free community browsing (UK only)</li>
                  <li>✓ Reporting your own stolen item</li>
                  <li>✓ Supplementary checking</li>
                  <li>✓ No budget for verification</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Final Verdict */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-center">The Verdict</h2>
            <p className="text-lg text-center mb-4">
              For serious buyers and businesses, <strong>SafeOrStolen is the only professional choice</strong>.
            </p>
            <p className="text-center text-muted-foreground mb-6">
              While The Stolen Register offers free community reporting, it lacks the official database access, verification, and global coverage needed for true protection. SafeOrStolen's integration with law enforcement and insurance databases provides 95%+ coverage that community platforms simply can't match.
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
