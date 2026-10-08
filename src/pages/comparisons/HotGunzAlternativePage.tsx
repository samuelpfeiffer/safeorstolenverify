import { Link, useLocation } from '@/lib/router-compat';
import { Shield, Check, X, ArrowRight, Smartphone, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const HotGunzAlternativePage = () => {
  const location = useLocation();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HotGunz Alternative",
      "description": "SafeOrStolen checks a gun serial against police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and its own theft reports, and also checks phones, vehicles, plates and bikes.",
      "url": "https://safeorstolen.com/hotgunz-alternative"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a good alternative to HotGunz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafeOrStolen (safeorstolen.com) checks a gun serial against 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017), live Ohio law-enforcement records, its own owner theft reports and public web results. It also flags serials that look altered or obliterated, and it checks phones, vehicles, plates and bikes too."
          }
        },
        {
          "@type": "Question",
          "name": "Is SafeOrStolen the same as HotGunz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. HotGunz is a separate, community-reported stolen gun registry. SafeOrStolen is an independent service with its own sources: police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, theft reports filed by owners on SafeOrStolen, and public web results."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="HotGunz Alternative - Stolen Gun Serial Check | SafeOrStolen"
        description="Looking for a HotGunz alternative? SafeOrStolen checks a gun serial against police theft reports from 33 states and DC plus live Ohio records."
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
              SafeOrStolen checks a gun serial against <strong>police firearm theft and loss reports from 33 states and Washington, DC</strong>, live Ohio law-enforcement records, theft reports filed by owners on our site and public web results. You get an answer in a few seconds, with every source listed.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Check a Gun Serial <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* What is HotGunz */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is HotGunz?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              HotGunz is a community-reported registry of stolen firearms. Owners can list a stolen gun
              themselves, often alongside a police report. It covers guns only.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="font-bold mb-2">What a SafeOrStolen gun check searches</p>
              <p className="text-muted-foreground">
                A firearm check on SafeOrStolen searches 242,839 police firearm theft and loss reports
                from 33 states and Washington, DC (filed through 2017; the years covered vary by state),
                live Ohio law-enforcement records, our own theft reports and public web results. It also
                flags serials that look altered or obliterated. Federal systems (NCIC, ATF eTrace) are
                restricted to law enforcement and are not checked by us or by any other consumer service.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">HotGunz vs SafeOrStolen</h2>
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
                    <td className="p-4 text-center">2 free checks, then $0.99 a check or $10 a month</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">Police theft and loss reports (33 states and DC) plus live Ohio records</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Flags serials that look altered or obliterated</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4">NCIC / ATF eTrace (law enforcement only)</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Other item types (phones, vehicles, plates, serials, bikes)</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Free installable web app</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Owners can report stolen items</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why More Sources Matter */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why One Registry Is Never Enough</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A stolen gun might be reported to police but never listed on a public registry.
              Public sources only contain what victims and departments chose to share, so a
              clean result narrows the risk. It does not clear the firearm.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Community registries</h3>
                <p className="text-muted-foreground text-sm">Sites like HotGunz hold what owners chose to post. Useful, but limited to voluntary reports.</p>
              </div>
              <div className="p-6 bg-background rounded-lg border-2 border-primary">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">SafeOrStolen</h3>
                <p className="text-muted-foreground text-sm">Police theft and loss reports from 33 states and DC, live Ohio records, owner theft reports and a check for altered serials.</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Finish the check</h3>
                <p className="text-muted-foreground text-sm">For the most certainty, ask local police to run the serial through NCIC before you buy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Web App */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Check a Gun Serial at the Sale</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SafeOrStolen is a free installable web app at safeorstolen.com/app. There's nothing to download from an app store, and it needs a data connection to run a check. Use it on the spot at:
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
              Yes. They're separate services, and checking more than one source is sensible. Here's what we suggest:
            </p>
            <div className="bg-background p-6 rounded-lg">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">1</span>
                  <span><strong>Run the serial on SafeOrStolen</strong> - one search covers police theft and loss reports, live Ohio records, owner reports and public web results</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">2</span>
                  <span><strong>Search other registries too</strong> - a community registry may hold a report we don't have</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">3</span>
                  <span><strong>If your gun is stolen</strong> - file a police report first, then report it on SafeOrStolen so buyers who check the serial see it</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check a Gun Serial Before You Buy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Two free checks with a free account. No credit card.
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
