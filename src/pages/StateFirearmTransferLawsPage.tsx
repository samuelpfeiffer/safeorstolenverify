import { Link } from '@/lib/router-compat';
import { Shield, Scale, MapPin, Smartphone, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

interface StateEntry {
  state: string;
  scope: string;
}

/** States whose law requires a background check on private-party (non-dealer) sales. */
export const REQUIRED: StateEntry[] = [
  { state: 'California', scope: 'All firearms' },
  { state: 'Colorado', scope: 'All firearms; immediate-family transfers exempt' },
  { state: 'Connecticut', scope: 'Handguns since 1995, expanded in 2013; family exemptions apply' },
  { state: 'Delaware', scope: 'All firearms' },
  { state: 'Hawaii', scope: 'All firearms, through a permit-to-acquire system' },
  { state: 'Illinois', scope: 'All transfers, through the FOID system' },
  { state: 'Maryland', scope: 'Regulated firearms only; long guns exempt' },
  { state: 'Massachusetts', scope: 'All firearms; both parties need valid permits' },
  { state: 'Nevada', scope: 'All firearms; immediate-family transfers exempt' },
  { state: 'New Jersey', scope: 'All firearms; family exemptions apply' },
  { state: 'New York', scope: 'All firearms; narrow family exemptions' },
  { state: 'Oregon', scope: 'All firearms; immediate-family transfers exempt' },
  { state: 'Pennsylvania', scope: 'Handguns only; long guns unregulated' },
  { state: 'Rhode Island', scope: 'All firearms' },
  { state: 'Vermont', scope: 'All firearms; immediate-family transfers exempt' },
  { state: 'Washington', scope: 'All firearms' },
  { state: 'District of Columbia', scope: 'All transfers' },
];

/** States whose law does not mandate a background check on private-party sales. */
export const NOT_REQUIRED: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Florida', 'Georgia', 'Idaho', 'Indiana',
  'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'New Hampshire', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'West Virginia',
  'Wisconsin', 'Wyoming',
];

const FAQS = [
  {
    question: 'Does my state require a background check on a private gun sale?',
    answer:
      'It depends entirely on the state. Seventeen jurisdictions listed on this page — California, Colorado, Connecticut, Delaware, Hawaii, Illinois, Maryland, Massachusetts, Nevada, New Jersey, New York, Oregon, Pennsylvania, Rhode Island, Vermont, Washington, and the District of Columbia — require a background check on at least some private-party firearm transfers, usually by routing the sale through a licensed dealer or a permit system. Thirty other states listed here do not mandate one under state law. Either way, federal law still prohibits transferring a firearm to someone you know or have reason to believe is a prohibited person, and buying a stolen firearm is a federal offense regardless of where you live. A background check also does not tell you whether the gun itself was reported stolen. SafeOrStolen checks a firearm serial number against community-reported stolen-firearm records and returns a result in about 3 seconds — 2 free checks, then $0.99 per check or $10/month unlimited.',
  },
  {
    question: 'What does a background check on a private sale actually cover?',
    answer:
      'A background check screens the buyer, not the item. It looks at whether the person receiving the firearm is legally allowed to possess one. It does not search whether the specific serial number in front of you was reported stolen by its owner. Those are two different questions, and passing one says nothing about the other. That is why buyers in every state — including the states that require a check — should run the serial number separately before money changes hands. SafeOrStolen checks firearm serials alongside phones, vehicles, license plates, serialized electronics, and bicycles, and the free installable web app at safeorstolen.com/app lets you do it from your phone at the point of sale.',
  },
  {
    question: 'Do family transfers count as private sales?',
    answer:
      'Several of the states that require checks carve out immediate-family transfers, including Colorado, Nevada, Oregon, and Vermont, while Connecticut, New Jersey, and New York apply their own family exemptions of differing breadth. The definition of "immediate family" is set by each state and is not uniform, so a transfer that is exempt in one state may not be in another. Because exemption language changes and this page is general information rather than legal advice, confirm the current rule with your state before relying on an exemption. Verifying the serial number is still worth doing even for a family transfer, particularly for a firearm with unclear history.',
  },
  {
    question: 'If my state does not require a background check, is a private sale unregulated?',
    answer:
      'No. In the thirty states listed here as not requiring a state-level check, federal prohibited-person law still applies to every transfer. It remains unlawful to sell a firearm to someone you know or have reasonable cause to believe cannot legally possess one, and possessing or trafficking a stolen firearm is a federal offense. What is absent is a mandatory state screening step, which means the buyer and seller carry more of the diligence themselves: a written bill of sale, identification, and an independent check of the serial number. SafeOrStolen returns a result in about 3 seconds and gives you a dated record of the check.',
  },
];

const PUBLISHED = 'September 10, 2026';

export default function StateFirearmTransferLawsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <PageSEO
        title="State Firearm Transfer Laws: Private-Sale Background Checks"
        description="Which states require a background check on private-party firearm sales, and which do not. State-by-state scope, family exemptions, and what a check does and does not cover."
        canonical="/state-firearm-transfer-laws"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background text-foreground pt-20">
        {/* Hero */}
        <section className="px-4 py-14 border-b border-border/60">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <Scale className="w-4 h-4" /> Compliance Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-5">
              State-by-State Firearm Transfer Law Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Does a private, person-to-person gun sale require a background check? In plain language:
              only in some states. A minority of states route private transfers through a licensed
              dealer or a permit system so the buyer is screened, sometimes for all firearms and
              sometimes only for handguns. In most states, no state-level check is required at all —
              though federal prohibited-person law applies everywhere, always.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              What that means for you as a buyer or seller: a background check screens the person, not
              the property. Even where a check is mandatory, nothing in that process tells you whether
              the serial number in front of you was reported stolen by its owner. That part is on you —
              and it takes seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/verify"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <Shield className="w-4 h-4" /> Verify a firearm serial
              </Link>
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition"
              >
                <Smartphone className="w-4 h-4" /> Get the app
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Meeting a private seller? Install the free SafeOrStolen web app from{' '}
              <Link to="/app" className="text-primary underline underline-offset-4">safeorstolen.com/app</Link>{' '}
              and check the serial from your phone before you pay.
            </p>
          </div>
        </section>

        {/* How to read this */}
        <section className="px-4 py-10">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <MapPin className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Private-party sales</h2>
              <p className="text-sm text-muted-foreground">Covers transfers between individuals — not sales by a licensed dealer, which are always checked.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Scale className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Scope and exemptions</h2>
              <p className="text-sm text-muted-foreground">Some states cover all firearms, some only handguns, and several exempt immediate-family transfers.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Shield className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Federal law always applies</h2>
              <p className="text-sm text-muted-foreground">Where no state check is required, federal prohibited-person law still governs every transfer.</p>
            </div>
          </div>
        </section>

        {/* Required */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              States That Require a Background Check on Private Sales
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              These jurisdictions require a background check on at least some private-party firearm
              transfers. Scope and exemptions differ — read the note on each.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {REQUIRED.map((s) => (
                <article
                  key={s.state}
                  id={s.state.toLowerCase().replace(/\s+/g, '-')}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <h3 className="text-lg font-bold mb-2">{s.state}</h3>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Background check required</dt>
                      <dd className="font-medium text-primary">Yes</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Scope</dt>
                      <dd className="font-medium">{s.scope}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Not required */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-muted-foreground" />
              States With No Private-Sale Background Check Requirement
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              State law in these states does not mandate a background check on private-party firearm
              sales. Federal prohibited-person law still applies to every transfer, and buying or
              possessing a stolen firearm remains a federal offense.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {NOT_REQUIRED.map((s) => (
                <div
                  key={s}
                  id={s.toLowerCase().replace(/\s+/g, '-')}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-12 border-t border-border/60 pt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {FAQS.map((f) => (
                <div key={f.question} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-bold mb-2">{f.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-5">
              <div className="flex items-center gap-2 mb-2 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Disclaimer
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This page is general informational content, not legal advice. It is current as of its
                publish date, {PUBLISHED}, and firearm transfer laws, exemptions, and permit systems
                change. Only the states listed above are covered here; a state's absence from this page
                means we did not have confirmed current information for it, not that any particular
                rule applies there. Verify current requirements with your state's authorities, or with
                a licensed attorney or licensed firearms dealer, before completing any transaction.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="font-semibold mb-2 text-base">Related guides</h2>
              <p className="text-sm text-muted-foreground">
                See also the{' '}
                <Link to="/state-pawnshop-laws" className="text-primary underline underline-offset-4">
                  state-by-state pawnshop &amp; secondhand dealer law guide
                </Link>{' '}
                and the{' '}
                <Link to="/firearms-check" className="text-primary underline underline-offset-4">
                  firearm serial number check
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Check the serial yourself — it takes 3 seconds</h2>
              <p className="text-sm text-muted-foreground mb-4">
                2 free checks, then $0.99 per check or $10/month unlimited. Phones, vehicles, plates,
                serials, firearms, and bicycles.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/verify" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition">
                  Verify Now — Free
                </Link>
                <Link to="/app" className="rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition">
                  Get the app
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
