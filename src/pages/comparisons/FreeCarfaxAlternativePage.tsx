import { Link, useLocation } from '@/lib/router-compat';
import { Shield, Check, X, ArrowRight, Clock, Award, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const FreeCarfaxAlternativePage = () => {
  const location = useLocation();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Free Carfax Alternative",
      "description": "Free Carfax alternative for stolen vehicle checks. SafeOrStolen verifies theft status free while Carfax charges $44.99.",
      "url": "https://safeorstolen.com/carfax-alternative-free"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a free alternative to Carfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SafeOrStolen offers free stolen vehicle checks. While Carfax ($44.99) focuses on accident history, SafeOrStolen focuses on theft verification - a critical check Carfax doesn't fully cover."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between SafeOrStolen and Carfax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carfax shows accident/service history. SafeOrStolen verifies if a vehicle is stolen. They serve different purposes - use SafeOrStolen (free) for theft check, Carfax (paid) for complete history."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="Free Carfax Alternative - Stolen Vehicle Check | SafeOrStolen"
        description="Free Carfax alternative for stolen vehicle checks. SafeOrStolen verifies theft status against NICB and 100+ databases. No payment required."
        keywords="carfax alternative, free carfax, carfax alternative free, free vin check, stolen car check free"
        canonical={location.pathname}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              Free Carfax Alternative
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for a free Carfax alternative? SafeOrStolen offers <strong>free stolen vehicle verification</strong> while Carfax charges $44.99 per report.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Check Vehicle Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Important Distinction */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Understanding the Difference</h2>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
              <p className="text-lg mb-4">
                <strong>Important:</strong> SafeOrStolen and Carfax serve different purposes:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-bold text-lg mb-2">🔒 SafeOrStolen (FREE)</h3>
                  <p className="text-muted-foreground">Verifies if a vehicle is <strong>stolen</strong>. Checks NICB, police databases, insurance claims. Essential before any purchase.</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-bold text-lg mb-2">📋 Carfax ($44.99)</h3>
                  <p className="text-muted-foreground">Shows vehicle <strong>history</strong>: accidents, service records, ownership, odometer. Useful for understanding condition.</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                <strong>Best practice:</strong> Use SafeOrStolen (free) to verify the vehicle isn't stolen FIRST, then consider Carfax for full history if the theft check is clean.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">SafeOrStolen</th>
                    <th className="p-4 text-center">Carfax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center font-bold text-primary">FREE</td>
                    <td className="p-4 text-center">$44.99</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Stolen Vehicle Check</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">NICB Database</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Accident History</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Service Records</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Mobile App</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">License Plate Lookup</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Check Other Items (Phones, etc.)</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">When to Use Each Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-xl mb-4">Use SafeOrStolen When:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> You want to verify the car isn't stolen (FREE)</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Buying from Facebook Marketplace or Craigslist</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Meeting a private seller</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Quick check before seeing the vehicle</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Checking multiple vehicles (free searches)</li>
                </ul>
              </div>
              <div className="p-6 bg-background rounded-lg border-l-4 border-muted">
                <h3 className="font-bold text-xl mb-4">Consider Carfax When:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You need full accident history ($44.99)</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You want service/maintenance records</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> Checking ownership history</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> Verifying odometer accuracy</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-muted-foreground flex-shrink-0" /> You've narrowed down to one car</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Theft Check First */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Stolen Check Should Come First</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Before spending $44.99 on Carfax, verify the vehicle isn't stolen with SafeOrStolen (free). Here's why:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Save Money</h3>
                  <p className="text-sm text-muted-foreground">Don't pay $44.99 for a Carfax on a stolen car</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Save Time</h3>
                  <p className="text-sm text-muted-foreground">3-second check before investing more time</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Legal Protection</h3>
                  <p className="text-sm text-muted-foreground">Buying stolen property has serious consequences</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg flex gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Peace of Mind</h3>
                  <p className="text-sm text-muted-foreground">Know the car is legal before proceeding</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start With a Free Stolen Check</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Verify the vehicle isn't stolen before spending money on Carfax.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Free Stolen Check <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/vin-checker">
                <Button size="lg" variant="outline" className="gap-2">
                  VIN Checker
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeCarfaxAlternativePage;
