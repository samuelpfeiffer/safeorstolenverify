import { Link, useLocation } from 'react-router-dom';
import { Shield, Check, X, ArrowRight, Smartphone, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const NICBAlternativePage = () => {
  const location = useLocation();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "NICB VINCheck Alternative",
      "description": "NICB VINCheck alternative without the 5 searches per day limit. SafeOrStolen offers unlimited VIN checks plus 100+ additional databases.",
      "url": "https://safeorstolen.com/nicb-alternative"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's better than NICB VINCheck?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafeOrStolen offers everything NICB has plus no daily limits, a mobile app, 100+ additional databases, and the ability to check items beyond vehicles."
          }
        },
        {
          "@type": "Question",
          "name": "Why does NICB have a 5 per day limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NICB limits searches to prevent commercial use of their free service. SafeOrStolen offers unlimited searches for professionals."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="NICB VINCheck Alternative - No Daily Limits | SafeOrStolen"
        description="Looking for NICB VINCheck alternative without the 5 searches per day limit? SafeOrStolen offers unlimited VIN checks plus 100+ additional databases."
        keywords="nicb alternative, nicb vincheck alternative, vin check no limit, unlimited vin check, nicb replacement"
        canonical={location.pathname}
        structuredData={structuredData}
      />

      <TopNavigation />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              NICB VINCheck Alternative
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tired of NICB's <strong>5 searches per day limit</strong>? SafeOrStolen offers unlimited VIN checks plus 100+ additional databases.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Unlimited VIN Checks <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Problem with NICB */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Look for a NICB Alternative?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-destructive">❌ NICB Limitations:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Only 5 VIN checks per day</li>
                  <li>• No mobile app</li>
                  <li>• Only checks NICB database</li>
                  <li>• Vehicles only (no phones, bikes, etc.)</li>
                  <li>• Clunky, outdated interface</li>
                  <li>• Can't check license plates</li>
                </ul>
              </div>
              <div className="p-6 bg-background rounded-lg border-2 border-primary">
                <h3 className="font-bold text-lg mb-3 text-primary">✓ SafeOrStolen Advantage:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No daily limits (unlimited with paid plan)</li>
                  <li>• Mobile app with barcode scanning</li>
                  <li>• NICB + 100 additional databases</li>
                  <li>• Cars, phones, bikes, guns, electronics</li>
                  <li>• Modern, fast interface</li>
                  <li>• License plate lookup included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">NICB and SafeOrStolen Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">NICB VINCheck</th>
                    <th className="p-4 text-center">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Daily Search Limit</td>
                    <td className="p-4 text-center text-destructive font-bold">5 per day</td>
                    <td className="p-4 text-center text-primary font-bold">Unlimited*</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Mobile App</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Databases Searched</td>
                    <td className="p-4 text-center">1 (NICB only)</td>
                    <td className="p-4 text-center text-primary font-bold">100+</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Vehicles</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Phones/Electronics</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Firearms</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">License Plate Lookup</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Bicycles</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center">Free (limited)</td>
                    <td className="p-4 text-center">Free + Paid Plans</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              *$0.99/check or $2.99/month unlimited
            </p>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why SafeOrStolen is Better</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No Daily Limits</h3>
                <p className="text-muted-foreground">Check as many VINs as you need. Perfect for dealers, pawn shops, and high-volume buyers.</p>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Mobile App</h3>
                <p className="text-muted-foreground">The ONLY stolen item checker with a mobile app. Scan barcodes, check on the go.</p>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">100+ Databases</h3>
                <p className="text-muted-foreground">We search NICB data PLUS 100 additional sources. More coverage = better protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs This */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who Needs Unlimited VIN Checks?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Car Dealers</h3>
                  <p className="text-sm text-muted-foreground">Check every vehicle on your lot without limits</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Pawn Shops</h3>
                  <p className="text-sm text-muted-foreground">Verify vehicles before accepting them</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Auto Auctions</h3>
                  <p className="text-sm text-muted-foreground">Bulk VIN verification for auction inventory</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Active Buyers</h3>
                  <p className="text-sm text-muted-foreground">Check multiple vehicles while car shopping</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Switch to Unlimited VIN Checks</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop hitting NICB's daily limit. Get unlimited access to 100+ databases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Start Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  See Unlimited Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default NICBAlternativePage;
