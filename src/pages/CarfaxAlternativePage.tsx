import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const CarfaxAlternativePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is SafeOrStolen a free Carfax alternative?",
        "acceptedAnswer": { "@type": "Answer", "text": "For stolen-vehicle verification specifically, yes. SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited, and focuses on whether a vehicle is reported stolen. If your goal is theft verification rather than a full vehicle history report, SafeOrStolen is a low-cost option." }
      },
      {
        "@type": "Question",
        "name": "What does a vehicle history report typically include that SafeOrStolen doesn't?",
        "acceptedAnswer": { "@type": "Answer", "text": "Traditional vehicle history reports typically include accident reports, service records, odometer readings, ownership history, and recall information. SafeOrStolen does not provide these — we focus specifically on stolen-vehicle verification. If you need full vehicle history, use a dedicated history report service. We recommend using both for high-value purchases." }
      },
      {
        "@type": "Question",
        "name": "What does SafeOrStolen check that a typical vehicle history report doesn't?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen also checks phones (IMEI), firearms, electronics, bikes, and all serial-numbered items — not just vehicles. SafeOrStolen also offers an installable web app and marketplace URL analysis, and searches stolen-property registries and vehicle theft records focused on theft verification." }
      },
      {
        "@type": "Question",
        "name": "Should I use a vehicle history report or SafeOrStolen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use both for a high-value purchase. SafeOrStolen for theft verification ($10/month unlimited covers all item types), and a dedicated vehicle history report for full accident/ownership history. Different tools serve different purposes." }
      },
      {
        "@type": "Question",
        "name": "How much does SafeOrStolen cost?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited on all item types (not just vehicles)." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free Carfax Alternative — Stolen Vehicle Check | SafeOrStolen"
        description="Looking for a free Carfax alternative for theft verification? SafeOrStolen checks if a vehicle is reported stolen. 2 free checks, then $0.99/check or $10/month unlimited."
        canonical="/carfax-alternative"
        structuredData={[faqSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Free Carfax Alternative — Stolen Vehicle Check
            </h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for a lower-cost way to check if a vehicle is stolen before you buy? SafeOrStolen focuses specifically on stolen-vehicle verification. Here's what we offer and when a full vehicle history report makes sense too.
            </p>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Link to="/verify">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Check Vehicle Stolen Status — Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">2 free VIN checks · No credit card · $10/month unlimited</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What SafeOrStolen Offers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SafeOrStolen focuses on stolen-property verification rather than full vehicle history. Here's what's included with SafeOrStolen:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-xl">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 text-foreground font-bold">Feature</th>
                    <th className="text-center p-3 text-primary font-bold">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  {[
                    ['Stolen vehicle check', true],
                    ['Phone IMEI check', true],
                    ['Firearm serial check', true],
                    ['Electronics/laptop check', true],
                    ['Bicycle check', true],
                    ['Installable web app', true],
                    ['Marketplace URL analysis', true],
                    ['Price', '2 free, then $0.99/check or $10/mo unlimited'],
                  ].map(([feature, sos], i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 text-foreground">{feature as string}</td>
                      <td className="p-3 text-center">
                        {typeof sos === 'boolean' ? (sos ? <CheckCircle className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />) : <span>{sos}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">When a Full Vehicle History Report Makes Sense</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you want a full picture of a specific vehicle's past — accidents, service records, ownership changes, and recalls — a dedicated vehicle history report service is the right tool. SafeOrStolen does not replace that kind of report; we complement it for theft detection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For a single high-value vehicle purchase, pairing a full history report with a quick SafeOrStolen theft check gives you a more complete picture before you buy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">When to Use SafeOrStolen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SafeOrStolen is built for stolen-property verification specifically. If your primary concern is "Is this car stolen?" rather than "What's the full history?", SafeOrStolen is a fast, low-cost way to check.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SafeOrStolen is also a good fit if you're:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Checking multiple vehicles (unlimited at $10/month)</li>
              <li>Checking non-vehicle items (phones, firearms, electronics, bikes)</li>
              <li>Screening marketplace listings before meeting sellers</li>
              <li>Operating a pawn shop or dealership that checks inventory regularly</li>
              <li>Doing a quick pre-screening before investing in a full history report</li>
            </ul>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
              <p className="text-foreground font-bold mb-2">Our recommendation for car buyers:</p>
              <p className="text-muted-foreground">Use SafeOrStolen first (free) to check stolen status. If it's clean and you're serious about buying, consider a full vehicle history report for maintenance, accident, and ownership history. This two-step approach gives you broader protection.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">SafeOrStolen Pricing</h2>
            <div className="grid sm:grid-cols-1 gap-4">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 max-w-md">
                <h3 className="text-primary font-bold mb-2">SafeOrStolen</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>2 free checks (any item type)</li>
                  <li>$0.99/check or $10/month unlimited</li>
                  <li>All items: vehicles, phones, guns, electronics</li>
                  <li>Installable web app included</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is SafeOrStolen a free Carfax alternative?</summary>
                <p className="text-muted-foreground mt-2">For stolen-vehicle detection, yes. SafeOrStolen focuses on theft verification (2 free, then $10/month unlimited) rather than full vehicle history.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What does a vehicle history report include that SafeOrStolen doesn't?</summary>
                <p className="text-muted-foreground mt-2">Accident reports, service records, odometer readings, ownership history, and recall information. If you need full vehicle history, use a dedicated history report service.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What does SafeOrStolen check beyond vehicles?</summary>
                <p className="text-muted-foreground mt-2">Phone IMEI checks, firearm verification, electronics/laptop checks, bike checks, marketplace URL analysis, and an installable web app.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Should I use a vehicle history report or SafeOrStolen?</summary>
                <p className="text-muted-foreground mt-2">Use both. SafeOrStolen first for a theft check (free), then a full vehicle history report if the vehicle is clean and you're serious about buying.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How much does SafeOrStolen cost?</summary>
                <p className="text-muted-foreground mt-2">2 free checks, then $0.99/check or $10/month unlimited for all item types.</p>
              </details>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/vin-checker" className="text-primary hover:underline font-medium">Free VIN Check</Link>
              <Link to="/license-plate-lookup" className="text-primary hover:underline font-medium">License Plate Lookup</Link>
              <Link to="/compare" className="text-primary hover:underline font-medium">Full Comparison Chart</Link>
              <Link to="/imei-checker" className="text-primary hover:underline font-medium">IMEI Checker</Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default CarfaxAlternativePage;
