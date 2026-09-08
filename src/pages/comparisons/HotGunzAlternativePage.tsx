import { Link, useLocation } from '@/lib/router-compat';
import { Shield, Check, X, ArrowRight, Smartphone, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const HotGunzAlternativePage = () => {
  const location = useLocation();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HotGunz Alternative",
 "description": "SafeOrStolen integrates the HotGunz stolen-firearms registry alongside verification for phones, vehicles, license plates, electronics, and bicycles in one installable web app.",
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
            "text": "SafeOrStolen integrates the HotGunz national stolen-firearms registry and adds serial number integrity analysis, five other item categories (phones, vehicles, plates, serial numbers, bicycles), and AI-powered listing analysis."
          }
        },
        {
          "@type": "Question",
          "name": "Does SafeOrStolen include HotGunz data?",
          "acceptedAnswer": {
            "@type": "Answer",
 "text": "Yes, SafeOrStolen integrates HotGunz's stolen-firearms registry as part of our verification databases."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="HotGunz Alternative - Firearm Verification | SafeOrStolen"
 description="SafeOrStolen integrates the HotGunz stolen-firearms registry alongside verification for phones, vehicles, license plates, electronics, and bicycles in one installable web app."
        keywords="hotgunz alternative, hotgunz safeorstolen comparison, stolen gun database, gun serial lookup, firearm verification"
        canonical={location.pathname}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              HotGunz Alternative
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 SafeOrStolen integrates the <strong>HotGunz stolen-firearms registry</strong> along with verification for phones, vehicles, license plates, electronics, and bicycles — all in one installable web app.
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
              HotGunz is a community-reported registry of stolen firearms. Victims can report their stolen
              guns directly, often before or in addition to police reports. It's a valuable resource focused
              on one item category.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="font-bold mb-2">SafeOrStolen includes HotGunz data</p>
              <p className="text-muted-foreground">
                When you search a firearm serial on SafeOrStolen, we query the HotGunz national
                stolen-firearms registry and analyze the serial for signs of alteration or obliteration.
                Federal systems (federal law-enforcement systems, ATF eTrace) are restricted to law enforcement and are not
                checked by us or by any other consumer service.
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
                    <td className="p-4">Serial integrity analysis (altered/obliterated)</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Federal law-enforcement systems / ATF eTrace (law enforcement only)</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Other item types (phones, vehicles, plates, serials, bikes)</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Installable Web App</td>
                    <td className="p-4 text-center">—</td>
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
            <h2 className="text-3xl font-bold mb-6">Why One Registry Is Never Enough</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A stolen gun might be reported to police but never submitted to a public registry.
              Public sources only contain what victims and departments choose to share, so a
              clean result narrows the risk — it does not clear the firearm.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">HotGunz registry</h3>
                <p className="text-muted-foreground text-sm">A community-reported firearms registry. A valuable public source, limited to voluntary reports.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-2 border-primary">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">SafeOrStolen</h3>
                <p className="text-muted-foreground text-sm">The HotGunz registry plus serial integrity analysis, six item categories, and an installable web app.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Finish the check</h3>
                <p className="text-muted-foreground text-sm">For certainty, ask local police to run the serial through federal law-enforcement systems before you buy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Verify Firearms On the Go</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SafeOrStolen works as an installable web app — no app store download required. Check firearms on the spot at:
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
                <p className="font-bold text-lg">Check Firearm Serials From Your Phone</p>
                <Link to="/download" className="inline-block mt-4">
                  <Button variant="outline" size="sm">Open Web App</Button>
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
                  <span><strong>Use SafeOrStolen first</strong> - We integrate the HotGunz registry along with our other verification databases in one search</span>
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
            <h2 className="text-3xl font-bold mb-4">Search the HotGunz Registry and More</h2>
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
    </>
  );
};

export default HotGunzAlternativePage;
