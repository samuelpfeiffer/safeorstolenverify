import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * TheftAZ "alternative" page — rewritten Sept 28 2026 to list only real capabilities.
 * SafeOrStolen SEARCHES TheftAZ (Arizona AG, law enforcement stolen-vehicle records)
 * on every VIN and Arizona plate check. TheftAZ is a government source, not a competitor.
 * Do not add NICB, NCIC, insurance, "50 state", or native-app claims.
 */

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is TheftAZ?',
    a: "TheftAZ (theftaz.azag.gov) is the Arizona Attorney General's stolen-vehicle search. It holds records from participating Arizona law enforcement agencies, is updated twice a day, and can be searched by license plate or VIN.",
  },
  {
    q: 'Is SafeOrStolen a replacement for TheftAZ?',
    a: "No, it builds on it. Every VIN and Arizona plate check on SafeOrStolen searches TheftAZ for you, then adds a VIN check-digit test, the U.S. government VIN decode, safety recalls, and a guided buyer's check you can save as a record.",
  },
  {
    q: 'Can I still use TheftAZ directly?',
    a: "Yes. TheftAZ is free at theftaz.azag.gov. Use it directly any time. SafeOrStolen is useful when you want the extra vehicle checks and a saved record of everything you checked.",
  },
  {
    q: 'Does a clean TheftAZ result mean the car was never stolen?',
    a: "No. TheftAZ covers thefts reported to participating Arizona agencies. A car stolen in another state may not appear. Run the free NICB VINCheck for a nationwide theft and salvage check and compare the title to the seller's ID before you pay.",
  },
  {
    q: 'How much does SafeOrStolen cost?',
    a: 'A free account includes 2 checks. After that, checks are $3.99 each, or $14.99 per month for unlimited checks.',
  },
];

const ROWS: [string, boolean | string, boolean | string][] = [
  ['Arizona police stolen-vehicle records', true, true],
  ['Search by VIN or Arizona plate', true, true],
  ['VIN check-digit test (catches typos and altered VINs)', false, true],
  ['Year, make, and model from the U.S. government VIN decoder', false, true],
  ['Safety recalls for the model', false, true],
  ["Guided Buyer's Check (NICB, door-sticker VIN, title vs. seller ID)", false, true],
  ['Saved Proof of Clean Purchase record', false, true],
  ['Stolen bike search (BikeIndex registry)', false, true],
  ['Cost', 'Free', '2 free checks, then $3.99 or $14.99/mo'],
];

const TheftAZAlternativePage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const cell = (v: boolean | string) =>
    typeof v === 'boolean' ? (
      v ? (
        <CheckCircle className="h-5 w-5 text-primary mx-auto" aria-label="Yes" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground/40 mx-auto" aria-label="No" />
      )
    ) : (
      v
    );

  return (
    <>
      <PageSEO
        title="TheftAZ Plus More: Arizona Stolen Car Check | SafeOrStolen"
        description="SafeOrStolen searches TheftAZ, Arizona's police stolen-vehicle records, on every VIN and plate check, then adds a VIN decode, recalls, and a guided buyer's check."
        canonical="/theftaz-alternative"
        structuredData={[faqSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">TheftAZ, plus the rest of the car check</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              SafeOrStolen searches TheftAZ, the Arizona Attorney General's database of stolen vehicles reported by Arizona
              law enforcement, on every VIN and Arizona plate check. Then it adds the checks TheftAZ doesn't do, in the
              same search.
            </p>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Link to="/verify">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Check a VIN or Arizona plate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">2 free checks with a free account</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What TheftAZ does, and what SafeOrStolen adds</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TheftAZ is a free government search, and SafeOrStolen uses it directly. The difference is everything else a
              used-car buyer needs to check before paying.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-xl">
                <thead>
                  <tr className="bg-muted/50">
                    <th scope="col" className="text-left p-3 text-foreground font-bold">What you get</th>
                    <th scope="col" className="text-center p-3 text-foreground font-bold">TheftAZ</th>
                    <th scope="col" className="text-center p-3 text-primary font-bold">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {ROWS.map(([feature, taz, sos]) => (
                    <tr key={feature} className="border-t border-border">
                      <td className="p-3 text-foreground">{feature}</td>
                      <td className="p-3 text-center">{cell(taz)}</td>
                      <td className="p-3 text-center">{cell(sos)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why one database isn't enough</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TheftAZ includes thefts reported to participating Arizona agencies. A car stolen in another state and driven
              into Arizona may not be in it yet. So a clean TheftAZ result is a good sign, not a guarantee.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That's why SafeOrStolen's Buyer's Check sends you to the free nationwide NICB VINCheck, has you match the VIN
              on the driver's door sticker to the dashboard, and has you compare the name on the title to the seller's
              photo ID. If every step checks out, you can save a Proof of Clean Purchase showing what was checked and when.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="bg-card/50 border border-border rounded-xl p-4">
                  <summary className="font-semibold text-foreground cursor-pointer">{f.q}</summary>
                  <p className="text-muted-foreground mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">More Arizona and vehicle checks</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/theftaz" className="text-primary hover:underline font-medium">TheftAZ search</Link>
              <Link to="/arizona-license-plate-lookup" className="text-primary hover:underline font-medium">Arizona license plate lookup</Link>
              <Link to="/vin-checker" className="text-primary hover:underline font-medium">VIN check</Link>
              <Link to="/how-to-check-if-car-stolen" className="text-primary hover:underline font-medium">How to check if a car is stolen</Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default TheftAZAlternativePage;
