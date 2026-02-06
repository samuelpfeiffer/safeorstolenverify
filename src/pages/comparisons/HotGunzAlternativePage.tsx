import { Link, useLocation } from 'react-router-dom';
import { Shield, Check, X, ArrowRight, Smartphone, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const HotGunzAlternativePage = () => {
  const location = useLocation();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HotGunz Alternative",
      "description": "Better than HotGunz? SafeOrStolen searches HotGunz PLUS 100 additional databases for stolen firearms. Free mobile app included.",
      "url": "https://safeorstolen.com/hotgunz-alternative"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's better than HotGunz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafeOrStolen searches HotGunz data PLUS NCIC, ATF, state databases, and 100+ other sources. Plus we have a mobile app - HotGunz doesn't."
          }
        },
        {
          "@type": "Question",
          "name": "Does SafeOrStolen include HotGunz data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SafeOrStolen searches HotGunz's 32,000+ stolen gun records as part of our comprehensive 100+ database search."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="HotGunz Alternative - More Gun Databases | SafeOrStolen"
        description="Better than HotGunz? SafeOrStolen searches HotGunz PLUS 100 additional databases for stolen firearms. Free mobile app included."
        keywords="hotgunz alternative, hotgunz safeorstolen comparison, stolen gun database, gun serial lookup, firearm verification"
        canonical={location.pathname}
        structuredData={structuredData}
      />

      <TopNavigation />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              HotGunz Alternative
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SafeOrStolen searches <strong>HotGunz + 100 additional databases</strong> for the most comprehensive stolen gun verification. Plus a mobile app HotGunz doesn't have.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Search All Databases <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* What is HotGunz */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is HotGunz?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              HotGunz is a free public database of stolen firearms with over 32,000 user-reported entries. 
              Victims report their stolen guns directly, often before or in addition to police reports. 
              It's a valuable resource, but it's just ONE database.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="font-bold mb-2">SafeOrStolen includes HotGunz data</p>
              <p className="text-muted-foreground">
                When you search SafeOrStolen, we query HotGunz along with NCIC, ATF, state databases, 
                and 100+ other sources. You get HotGunz coverage PLUS comprehensive verification.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">HotGunz and SafeOrStolen Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">HotGunz</th>
                    <th className="p-4 text-center">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center">Free</td>
                    <td className="p-4 text-center">Free + Paid</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">HotGunz Database</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">FBI NCIC</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">ATF Database</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">State Databases (TheftAZ, etc.)</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Total Databases</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center text-primary font-bold">100+</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Mobile App</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Check Other Items (Phones, Cars)</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Report Stolen Items</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why More Databases Matter */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why 100+ Databases Matter</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A stolen gun might be reported to police (NCIC) but not HotGunz. Or it might be in TheftAZ 
              but not NCIC yet. Searching only one database leaves gaps.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">HotGunz Only</h3>
                <p className="text-muted-foreground text-sm">32,000 user-reported guns. Good start, but limited to voluntary reports.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-2 border-primary">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">SafeOrStolen</h3>
                <p className="text-muted-foreground text-sm">HotGunz + NCIC (7M+ records) + ATF + State DBs + Insurance = Maximum coverage</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Better Protection</h3>
                <p className="text-muted-foreground text-sm">More databases = higher chance of catching stolen firearms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Mobile App for Gun Shows</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  HotGunz doesn't have a mobile app. SafeOrStolen does. Check firearms on the spot at:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Gun shows</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Private sale meetups</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Pawn shops</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Estate sales</li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg text-center">
                <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="font-bold text-lg">The ONLY Stolen Gun Checker with a Mobile App</p>
                <Link to="/download" className="inline-block mt-4">
                  <Button variant="outline" size="sm">Download App</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Can I Still Use HotGunz?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Absolutely! HotGunz is a great community resource. Here's our recommendation:
            </p>
            <div className="bg-background p-6 rounded-lg">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">1</span>
                  <span><strong>Use SafeOrStolen first</strong> - We search HotGunz + 100 other databases in one search</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">2</span>
                  <span><strong>Report to HotGunz</strong> - If your gun is stolen, report to both HotGunz and police</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">3</span>
                  <span><strong>Maximum coverage</strong> - Your report appears in HotGunz AND SafeOrStolen's searches</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Search HotGunz + 100 More Databases</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get comprehensive stolen gun verification with one search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Check Gun Serial <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/firearms-check">
                <Button size="lg" variant="outline">
                  Learn More
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

export default HotGunzAlternativePage;
