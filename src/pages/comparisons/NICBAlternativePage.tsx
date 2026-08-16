import { Link, useLocation } from 'react-router-dom';
import { Shield, Check, X, ArrowRight, Smartphone, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const NICBAlternativePage = () => {
  const location = useLocation();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "NICB VINCheck Alternative",
      "description": "Comparing VIN check tools? SafeOrStolen offers 2 free VIN checks, then $0.99/check or $10/month unlimited, across six item categories.",
      "url": "https://safeorstolen.com/nicb-alternative"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does SafeOrStolen check beyond vehicles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafeOrStolen verifies phones, vehicles, license plates, electronics, firearms, and bicycles in one platform, with results in about 3 seconds."
          }
        },
        {
          "@type": "Question",
          "name": "How much does SafeOrStolen cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafeOrStolen includes 2 free checks, then $0.99 per check or $10/month for unlimited checks."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="VIN Check Options Compared | SafeOrStolen"
        description="Comparing VIN check options? SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited, for vehicles and five other item categories."
        keywords="nicb alternative, nicb vincheck alternative, vin check no limit, unlimited vin check, nicb replacement"
        canonical={location.pathname}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              VIN Check Options Compared
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Many tools focus on a single category. SafeOrStolen verifies <strong>vehicles, phones, license plates, electronics, firearms, and bicycles</strong> in one place, with 2 free checks to start.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Unlimited VIN Checks <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* What SafeOrStolen Offers */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What SafeOrStolen Offers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-bold text-lg mb-3">Many tools focus on one category</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Most stolen-item tools cover a single item type</li>
                  <li>• Some are limited to a set number of searches per day</li>
                  <li>• License plate lookup isn't always included</li>
                </ul>
              </div>
              <div className="p-6 bg-background rounded-lg border-2 border-primary">
                <h3 className="font-bold text-lg mb-3 text-primary">✓ SafeOrStolen:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2 free checks, then $0.99/check or $10/month unlimited</li>
                  <li>• Installable web app with barcode scanning</li>
                  <li>• Six item categories in one platform</li>
                  <li>• Cars, phones, bikes, guns, electronics</li>
                  <li>• Results in about 3 seconds</li>
                  <li>• License plate lookup included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">SafeOrStolen Feature Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Free Checks</td>
                    <td className="p-4 text-center text-primary font-bold">2 free, then $0.99/check or $10/mo unlimited</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Installable Web App</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Vehicles</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Phones/Electronics</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Firearms</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">License Plate Lookup</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Bicycles</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Results Speed</td>
                    <td className="p-4 text-center">~3 seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose SafeOrStolen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Unlimited Plan Available</h3>
                <p className="text-muted-foreground">2 free checks, then $0.99/check or $10/month unlimited. Built for dealers, pawn shops, and high-volume buyers.</p>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Installable Web App</h3>
                <p className="text-muted-foreground">SafeOrStolen covers phones, vehicles, license plates, electronics, firearms, and bicycles in one place. Scan barcodes, check on the go.</p>
              </div>
              <div className="p-6 bg-background rounded-lg text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Our Verification Databases</h3>
                <p className="text-muted-foreground">We check our verification databases across stolen-property registries, carrier blacklists, and vehicle theft records for broader coverage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs This */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who Needs Frequent VIN Checks?</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Unlimited VIN Checks</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with 2 free checks, then unlock unlimited checks across our verification databases.
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
    </>
  );
};

export default NICBAlternativePage;
