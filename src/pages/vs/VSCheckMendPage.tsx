import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitorComparisonSchema } from '@/components/seo/CompetitorComparisonSchema';
import { Card } from '@/components/ui/card';
import { Check, X, AlertCircle, DollarSign, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { createComparisonPageSchema } from '@/utils/seo/comparisonPageSchema';

export default function VSCheckMendPage() {
  const navigate = useNavigate();

  const comparisonData = [
    { feature: 'Single Check Price', ours: '$0.50', theirs: '£4.99 (~$6.30)' },
    { feature: 'Free Searches', ours: true, theirs: false },
    { feature: 'Global Coverage', ours: true, theirs: 'UK-focused' },
    { feature: 'Mobile App', ours: true, theirs: false },
    { feature: 'API Access', ours: true, theirs: 'Limited' },
    { feature: 'Response Time', ours: 'Instant', theirs: '24-48 hours' }
  ];

  const structuredData = createComparisonPageSchema('SafeOrStolen', 'CheckMEND', comparisonData);

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMEND: Complete Comparison 2025"
        description="Detailed comparison of SafeOrStolen vs CheckMEND for stolen item verification. Compare pricing, coverage, speed, and features to choose the best solution for checking IMEI, serial numbers, and VINs."
        canonical="/vs-checkmend"
        image="https://safeorstolen.com/og-vs-checkmend.png"
        keywords="SafeOrStolen vs CheckMEND, CheckMEND alternative, IMEI check comparison, stolen item verification comparison, CheckMEND pricing, free IMEI check"
        structuredData={structuredData}
      />
      <CompetitorComparisonSchema competitor="checkmend" />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              SafeOrStolen vs CheckMEND: Complete 2025 Comparison
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare the leading stolen item verification services. Find out which platform offers better value, coverage, and features for checking phones, electronics, and vehicles.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2">Feature</th>
                    <th className="text-center py-4 px-2">SafeOrStolen</th>
                    <th className="text-center py-4 px-2">CheckMEND</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Single Check Price</td>
                    <td className="text-center py-4 px-2">$0.50</td>
                    <td className="text-center py-4 px-2">£4.99 (~$6.30)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Free Searches</td>
                    <td className="text-center py-4 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-4 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Global Coverage</td>
                    <td className="text-center py-4 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-4 px-2">UK-focused</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Mobile App</td>
                    <td className="text-center py-4 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-4 px-2"><X className="inline text-red-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">API Access</td>
                    <td className="text-center py-4 px-2"><Check className="inline text-green-500" /></td>
                    <td className="text-center py-4 px-2">Limited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Response Time</td>
                    <td className="text-center py-4 px-2">Instant</td>
                    <td className="text-center py-4 px-2">24-48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Detailed Comparison Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pricing */}
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Pricing Comparison</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">SafeOrStolen</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Single check: $0.50</li>
                    <li>• Personal plan: $9.99/month (100 checks)</li>
                    <li>• Business plan: $99/month (unlimited)</li>
                    <li>• 2 free trial searches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CheckMEND</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Single check: £4.99 (~$6.30)</li>
                    <li>• 5 checks: £19.99 (~$25.20)</li>
                    <li>• Business pricing: Contact sales</li>
                    <li>• No free trial</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-primary">
                    💰 SafeOrStolen is 92% cheaper per search
                  </p>
                </div>
              </div>
            </Card>

            {/* Speed */}
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Speed & Convenience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">SafeOrStolen</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Instant results (under 3 seconds)</li>
                    <li>• Real-time database access</li>
                    <li>• Mobile app with barcode scanning</li>
                    <li>• API for instant integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CheckMEND</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 24-48 hour response time</li>
                    <li>• Manual verification process</li>
                    <li>• Web-based only</li>
                    <li>• Email notification system</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-primary">
                    ⚡ SafeOrStolen delivers results 1,440x faster
                  </p>
                </div>
              </div>
            </Card>

            {/* Coverage */}
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Global Coverage</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">SafeOrStolen</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 50M+ global records</li>
                    <li>• US, UK, EU, Asia, Australia</li>
                    <li>• Multiple law enforcement databases</li>
                    <li>• International insurance claims</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CheckMEND</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Primarily UK-based</li>
                    <li>• Limited international coverage</li>
                    <li>• UK police databases</li>
                    <li>• UK insurance records</li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-primary">
                    🌍 SafeOrStolen covers 6x more regions
                  </p>
                </div>
              </div>
            </Card>

            {/* Features */}
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Key Features</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">SafeOrStolen Advantages</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>AI-powered risk analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>Real-time alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>Marketplace integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>Mobile barcode scanning</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CheckMEND Advantages</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>Established UK reputation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>Deep UK insurance integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Winner Section */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-center">The Verdict</h2>
            <div className="space-y-4 text-center">
              <p className="text-lg">
                <strong>For most users worldwide:</strong> SafeOrStolen offers better value, faster results, and global coverage at a fraction of the cost.
              </p>
              <p className="text-muted-foreground">
                <strong>Choose CheckMEND if:</strong> You're UK-based and specifically need deep UK insurance database integration, and response time isn't critical.
              </p>
              <p className="text-muted-foreground">
                <strong>Choose SafeOrStolen if:</strong> You want instant results, global coverage, mobile convenience, or better pricing (which covers 95% of users).
              </p>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate('/verify')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Try SafeOrStolen Free (2 Searches)
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Start with 2 free searches • No credit card required • Instant results
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
