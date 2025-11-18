import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitorComparisonSchema } from '@/components/seo/CompetitorComparisonSchema';
import { Car, CheckCircle, XCircle, DollarSign, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VSCarfaxPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Carfax: Detailed Comparison 2025"
        description="Comprehensive comparison of SafeOrStolen and Carfax. Discover which service offers better value, coverage, and features for vehicle history reports and stolen vehicle checks."
        keywords="safeorstolen vs carfax, carfax alternative, free carfax, vehicle history comparison, vin check comparison, stolen car check"
        canonical="/vs-carfax"
      />
      <CompetitorComparisonSchema competitor="checkmend" />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SafeOrStolen vs Carfax: Which Is Better?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Honest comparison of features, coverage, pricing, and value. Discover which service best fits your vehicle verification needs.
            </p>
          </header>

          {/* Quick Comparison Table */}
          <Card className="p-6 mb-12 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3">Feature</th>
                  <th className="text-center p-3">SafeOrStolen</th>
                  <th className="text-center p-3">Carfax</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Stolen Vehicle Check', sos: true, carfax: true },
                  { feature: 'Free Searches', sos: '2 free', carfax: 'None' },
                  { feature: 'Mobile App', sos: true, carfax: true },
                  { feature: 'Cost per Report', sos: 'FREE', carfax: '$39.99' },
                  { feature: 'Multi-Item Support', sos: true, carfax: false },
                  { feature: 'Phones, Electronics', sos: true, carfax: false },
                  { feature: 'Service History', sos: false, carfax: true },
                  { feature: 'Accident Reports', sos: 'Major only', carfax: 'Detailed' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="p-3">{row.feature}</td>
                    <td className="text-center p-3">
                      {typeof row.sos === 'boolean' ? (
                        row.sos ? (
                          <CheckCircle className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold">{row.sos}</span>
                      )}
                    </td>
                    <td className="text-center p-3">
                      {typeof row.carfax === 'boolean' ? (
                        row.carfax ? (
                          <CheckCircle className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold">{row.carfax}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">SafeOrStolen</h2>
              <p className="text-muted-foreground mb-6">
                Global stolen item verification platform with free searches and mobile apps. Perfect for buyers who want comprehensive protection across multiple item types.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>2 free verification searches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Checks vehicles, phones, electronics, tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Mobile app (iOS & Android)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Real-time database updates</span>
                </div>
              </div>
              <Button className="w-full" onClick={() => navigate('/verify')}>
                Try SafeOrStolen Free
              </Button>
            </Card>

            <Card className="p-6">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Carfax</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive vehicle history reports with detailed service records and accident history. Best for expensive vehicles where detailed maintenance records matter.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Detailed service history</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Comprehensive accident reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Odometer history tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                  <span>$39.99 per report (no free option)</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Visit Carfax
              </Button>
            </Card>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When to Choose SafeOrStolen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Verifying stolen status before purchase</li>
                  <li>✓ Checking multiple items (phones, tools, bikes)</li>
                  <li>✓ Budget-conscious buyers</li>
                  <li>✓ Marketplace purchases (Facebook, OfferUp)</li>
                  <li>✓ Quick mobile verification</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Key Advantages:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 100% free for basic checks</li>
                  <li>• Works for all item types</li>
                  <li>• Faster real-time updates</li>
                  <li>• Mobile-first experience</li>
                  <li>• No credit card required</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When to Choose Carfax</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Perfect For:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Expensive vehicles ($15,000+)</li>
                  <li>✓ Verifying service history</li>
                  <li>✓ Detailed accident information</li>
                  <li>✓ Checking odometer accuracy</li>
                  <li>✓ Dealer negotiations</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Key Advantages:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Most comprehensive service records</li>
                  <li>• Detailed accident descriptions</li>
                  <li>• Historical odometer readings</li>
                  <li>• Previous owner count</li>
                  <li>• Industry standard for dealers</li>
                </ul>
              </Card>
            </div>
          </section>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-center">
            <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Best of Both Worlds</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start with SafeOrStolen's free verification to check stolen status. If buying an expensive vehicle, then invest in Carfax for detailed service history. This strategy saves money while ensuring comprehensive verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                Start Free Verification
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/blog/carfax-vs-free-vin-alternatives')}>
                Read Full Comparison
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
