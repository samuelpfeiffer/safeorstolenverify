import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Oct 8 2026: audited by hand for "theftaz alternative". TheftAZ is the topic of this page
 * (the Arizona Attorney General's free stolen-vehicle search). Do not claim SafeOrStolen
 * uses it; describe SafeOrStolen's source as "Arizona law-enforcement stolen-vehicle records".
 * Do not add NICB, NCIC, insurance, "50 state", or native-app claims.
 */

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is TheftAZ?',
    a: "TheftAZ is the Arizona Attorney General's free stolen-vehicle search. It holds vehicles reported stolen to participating Arizona law enforcement agencies, is updated twice a day, and can be searched by license plate or VIN. It doesn't decode the VIN or keep a record of your search.",
  },
  {
    q: 'Is SafeOrStolen a replacement for TheftAZ?',
    a: "It covers the same ground and more. A SafeOrStolen check (safeorstolen.com/theftaz-alternative) searches Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates, plus SafeOrStolen's own theft reports and public web listings. VIN checks also decode the year, make and model and list open recalls, and every check is saved to your account with the date.",
  },
  {
    q: 'Can I still use TheftAZ directly?',
    a: "Yes. TheftAZ is free and you can search it any time. SafeOrStolen is useful when you also want the VIN decoded, open recalls listed, a search of online listings and owner theft reports, and a dated record of the check saved to your account.",
  },
  {
    q: 'Does a clean TheftAZ result mean the car was never stolen?',
    a: "No. TheftAZ covers thefts reported to participating Arizona agencies, so a car stolen in another state may not appear. Match the VIN on the dash and the driver's door sticker to the title, and compare the name on the title to the seller's photo ID before you pay.",
  },
  {
    q: 'How much does SafeOrStolen cost?',
    a: 'A free account includes 2 checks with no credit card. After that, a single check is $0.99, or $10 a month for unlimited checks, cancel anytime. An optional $1.99 verification certificate gives you a dated record showing you checked before the sale.',
  },
];

const ROWS: [string, boolean | string, boolean | string][] = [
  ['Arizona law-enforcement stolen-vehicle records', true, true],
  ['Search by VIN or Arizona plate', true, true],
  ['Theft reports filed by owners on SafeOrStolen', false, true],
  ['Public web listings and posts that mention the VIN', false, true],
  ['Year, make, and model decoded from the VIN', false, true],
  ['Open safety recalls for the vehicle', false, true],
  ['Check saved to your account with the date', false, true],
  ['Cost', 'Free', '2 free checks, then $0.99 or $10/mo'],
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
        title="TheftAZ Alternative: Arizona Stolen Car Check | SafeOrStolen"
        description="How TheftAZ compares with SafeOrStolen: Arizona law-enforcement stolen-vehicle records, plus a VIN decode, open recalls, web listings and a saved record."
        canonical="/theftaz-alternative"
        structuredData={[faqSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">A TheftAZ alternative that does the rest of the car check</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              TheftAZ is the Arizona Attorney General's free search of vehicles reported stolen to Arizona police.
              SafeOrStolen also searches Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates, and in
              the same search decodes the VIN, lists open recalls, and checks owner theft reports and online listings.
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
              TheftAZ is a free government search that answers one question: has this Arizona vehicle been reported
              stolen to police? SafeOrStolen answers that too, then covers more of what a used-car buyer should check
              before paying.
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
              Arizona police records only include thefts reported to participating Arizona agencies. A car stolen in
              another state and driven into Arizona may not be in them. So a clean result is a good sign, not a
              guarantee, whichever tool you use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Before you pay, match the VIN on the driver's door sticker to the one on the dashboard and the title, and
              compare the name on the title to the seller's photo ID. SafeOrStolen saves each check to your account with
              the date, and an optional $1.99 verification certificate gives you a dated record with its own link
              showing you checked before the sale.
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
