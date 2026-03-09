import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const CarfaxAlternativePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is SafeOrStolen a free Carfax alternative?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, for stolen vehicle detection specifically. Carfax charges $39.99 per report (or $99.99 for 6 reports) and focuses on full vehicle history. SafeOrStolen offers 2 free checks, then $0.99/check or $2.99/month unlimited, and focuses specifically on whether a vehicle is reported stolen. If your goal is theft verification, SafeOrStolen is significantly cheaper and more targeted." }
      },
      {
        "@type": "Question",
        "name": "What does Carfax have that SafeOrStolen doesn't?",
        "acceptedAnswer": { "@type": "Answer", "text": "Carfax provides detailed vehicle history: accident reports, service records, odometer readings, ownership history, and recall information. SafeOrStolen does NOT provide these. If you need full vehicle history, use Carfax. If you need to know if a vehicle is stolen, use SafeOrStolen. We recommend using both for high-value purchases." }
      },
      {
        "@type": "Question",
        "name": "What does SafeOrStolen have that Carfax doesn't?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen checks phones (IMEI), firearms, electronics, bikes, and all serial-numbered items — Carfax only checks vehicles. SafeOrStolen also has a mobile app, marketplace URL analysis, and searches law enforcement databases (FBI NCIC, state police) that Carfax doesn't access for stolen vehicle detection." }
      },
      {
        "@type": "Question",
        "name": "Should I use Carfax or SafeOrStolen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use both. SafeOrStolen for theft verification ($2.99/month unlimited), Carfax for full vehicle history ($39.99/report). For a $15,000+ vehicle purchase, spending $40 on Carfax AND $2.99 on SafeOrStolen is smart. SafeOrStolen catches stolen vehicles that Carfax might miss because we access different databases." }
      },
      {
        "@type": "Question",
        "name": "How much does Carfax cost vs SafeOrStolen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Carfax: $39.99 for 1 report, $59.99 for 3 reports, $99.99 for 6 reports. SafeOrStolen: 2 free checks, then $0.99/check or $2.99/month unlimited on all item types (not just vehicles). For someone checking multiple vehicles, SafeOrStolen is dramatically cheaper for theft verification." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free Carfax Alternative — Stolen Vehicle Check Without Paying $40 | SafeOrStolen"
        description="Looking for a free Carfax alternative? SafeOrStolen checks if vehicles are stolen for free. Search NICB, NCIC, DMV, and insurance databases. 2 free checks, then $0.99/check or $2.99/month unlimited — vs Carfax's $39.99/report."
        canonical="/carfax-alternative"
        structuredData={[faqSchema]}
      />
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Free Carfax Alternative — Stolen Vehicle Check
            </h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Carfax charges $39.99 per report. SafeOrStolen checks if a vehicle is stolen for free. We search NICB, FBI NCIC, all 50 state DMV records, and insurance databases. Different tools for different purposes — here's when to use each.
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
            <p className="text-muted-foreground text-sm mt-3">2 free VIN checks · No credit card · $2.99/month unlimited</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Carfax vs SafeOrStolen — Honest Comparison</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Let's be clear: Carfax and SafeOrStolen serve different purposes. Carfax provides comprehensive vehicle history reports. SafeOrStolen provides stolen property verification. Here's an honest side-by-side comparison:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-xl">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 text-foreground font-bold">Feature</th>
                    <th className="text-center p-3 text-foreground font-bold">Carfax</th>
                    <th className="text-center p-3 text-primary font-bold">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  {[
                    ['Stolen vehicle check', true, true],
                    ['FBI NCIC database', false, true],
                    ['All 50 state police databases', false, true],
                    ['Accident history', true, false],
                    ['Service records', true, false],
                    ['Odometer readings', true, false],
                    ['Ownership count', true, false],
                    ['Recall information', true, false],
                    ['Phone IMEI check', false, true],
                    ['Firearm serial check', false, true],
                    ['Electronics/laptop check', false, true],
                    ['Bicycle check', false, true],
                    ['Mobile app', false, true],
                    ['Marketplace URL analysis', false, true],
                    ['Price per report', '$39.99', '2 free, $2.99/mo unlimited'],
                  ].map(([feature, carfax, sos], i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 text-foreground">{feature as string}</td>
                      <td className="p-3 text-center">
                        {typeof carfax === 'boolean' ? (carfax ? <CheckCircle className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />) : <span>{carfax}</span>}
                      </td>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">When to Use Carfax</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Carfax is the right choice when you need comprehensive vehicle history for a specific car you're about to purchase. If you want to know about past accidents, how many owners it's had, whether it has outstanding recalls, or if the odometer has been rolled back, Carfax provides that data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For a single high-value vehicle purchase ($15,000+), the $39.99 Carfax report is worth the investment. SafeOrStolen does not replace Carfax for vehicle history — we complement it for theft detection.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">When to Use SafeOrStolen Instead</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SafeOrStolen is the better choice for stolen property verification specifically. If your primary concern is "Is this car stolen?" rather than "What's the full history?", SafeOrStolen provides a more thorough theft check at a fraction of the cost. We access FBI NCIC and state law enforcement databases that Carfax doesn't query for stolen vehicle detection.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SafeOrStolen is also the right choice if you're:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Checking multiple vehicles (unlimited at $1/month vs $39.99 per Carfax report)</li>
              <li>Checking non-vehicle items (phones, firearms, electronics, bikes)</li>
              <li>Screening marketplace listings before meeting sellers</li>
              <li>Operating a pawn shop or dealership that checks inventory regularly</li>
              <li>Doing a quick pre-screening before investing in a full Carfax report</li>
            </ul>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
              <p className="text-foreground font-bold mb-2">Our recommendation for car buyers:</p>
              <p className="text-muted-foreground">Use SafeOrStolen first (free) to check stolen status. If it's clean and you're serious about buying, then invest $39.99 in a Carfax report for full history. This two-step approach gives you maximum protection for minimum cost.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Pricing Comparison</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card/50 border border-border rounded-xl p-5">
                <h3 className="text-foreground font-bold mb-2">Carfax</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>1 report: $39.99</li>
                  <li>3 reports: $59.99 ($20/each)</li>
                  <li>6 reports: $99.99 ($16.67/each)</li>
                  <li>Vehicles only</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
                <h3 className="text-primary font-bold mb-2">SafeOrStolen</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>2 free checks (any item type)</li>
                  <li>$1/month unlimited checks</li>
                  <li>All items: vehicles, phones, guns, electronics</li>
                  <li>Mobile app included</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is SafeOrStolen a free Carfax alternative?</summary>
                <p className="text-muted-foreground mt-2">For stolen vehicle detection, yes. Carfax focuses on full vehicle history ($39.99/report). SafeOrStolen focuses on theft verification (2 free, then $1/month unlimited). Different tools for different purposes.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What does Carfax have that SafeOrStolen doesn't?</summary>
                <p className="text-muted-foreground mt-2">Accident reports, service records, odometer readings, ownership history, and recall information. If you need full vehicle history, use Carfax.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What does SafeOrStolen have that Carfax doesn't?</summary>
                <p className="text-muted-foreground mt-2">Phone IMEI checks, firearm verification, electronics/laptop checks, bike checks, marketplace URL analysis, a mobile app, and access to FBI NCIC and state police databases for stolen detection.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Should I use Carfax or SafeOrStolen?</summary>
                <p className="text-muted-foreground mt-2">Use both. SafeOrStolen first for theft check (free), then Carfax for full history ($39.99) if the vehicle is clean and you're serious about buying.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How much does Carfax cost vs SafeOrStolen?</summary>
                <p className="text-muted-foreground mt-2">Carfax: $39.99-$99.99. SafeOrStolen: 2 free, then $1/month unlimited for all item types. For someone checking multiple vehicles, SafeOrStolen is dramatically cheaper for theft verification.</p>
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
      </main>
      <Footer />
    </>
  );
};

export default CarfaxAlternativePage;
