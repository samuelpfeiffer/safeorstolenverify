/**
 * Oct 7 2026: rewritten by hand for "state firearm transfer laws" / "private gun sale background
 * check by state" (no Search Console rows for this page). REQUIRED and NOT_REQUIRED are imported by
 * GunStateLookupPage and are unchanged, as is every state's status; only the surrounding copy was
 * rewritten. Removed "community-reported stolen-firearm records" and "about 3 seconds"; added the
 * federal out-of-state rule and names the four states the lists don't cover.
 */
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

const UNLISTED = ['Michigan', 'Minnesota', 'New Mexico', 'Virginia'];

const FAQS = [
  {
    question: 'Do I need a background check to sell a gun privately?',
    answer: `It depends on your state. ${REQUIRED.length} jurisdictions on this page, including California, Colorado, Illinois, New York, Pennsylvania (handguns), Washington and the District of Columbia, require a background check on at least some private sales, usually by doing the transfer through a licensed dealer or a permit system. The ${NOT_REQUIRED.length} other states listed here have no state requirement. Federal law still bars selling to anyone you know or have reason to believe can't legally have a gun.`,
  },
  {
    question: 'Can I sell a gun to someone who lives in another state?',
    answer:
      "Not directly. Under federal law, a private seller can't transfer a gun straight to a resident of another state. The sale has to go through a licensed dealer in the buyer's home state, who runs the background check and follows that state's rules. Limited exceptions exist, such as guns passed down by will, so ask a dealer before you assume one applies.",
  },
  {
    question: 'Does a background check tell you if a gun is stolen?',
    answer:
      "No. A background check screens the buyer, to see whether they can legally have a gun. It doesn't search whether that serial number was reported stolen. Check the serial separately on SafeOrStolen (safeorstolen.com/state-firearm-transfer-laws), which searches 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio records and owner reports. Since August 2025, dealers can also voluntarily check the FBI's stolen-gun file.",
  },
  {
    question: 'Do family transfers need a background check?',
    answer:
      'Several states that require checks exempt transfers between immediate family members, including Colorado, Nevada, Oregon and Vermont, while Connecticut, New Jersey and New York have their own narrower family exemptions. Each state defines "immediate family" its own way, so a transfer exempt in one state may not be in another. Confirm the current rule with your state before you rely on it.',
  },
  {
    question: "If my state doesn't require a check, what should I do at a private sale?",
    answer:
      "Federal law still applies to every sale. Ask to see the buyer's ID and confirm they live in your state. Write a bill of sale with the date, price, make, model, serial number and both names, and each keep a copy. If you're the buyer, check the serial before you pay. Many sellers choose to use a dealer anyway for the record it creates.",
  },
  {
    question: 'Which states are not on this page?',
    answer: `${UNLISTED.join(', ').replace(/, ([^,]*)$/, ' and $1')} are not listed here because we did not have confirmed current information for them when the page was published. Their absence does not mean any particular rule applies. Check with that state's police or attorney general, or ask a licensed dealer, before a private sale there.`,
  },
];

const PUBLISHED = 'September 10, 2026';
const UPDATED = 'October 7, 2026';

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
        title="State Firearm Transfer Laws: Private Gun Sale Background Checks | SafeOrStolen"
        description="Which states require a background check on a private gun sale and which don't, with each state's scope and family exemptions, plus the federal rules for all."
        keywords="state firearm transfer laws, private gun sale laws by state, background check private gun sale by state, universal background check states, do i need a background check to sell a gun privately, private firearm transfer"
        canonical="/state-firearm-transfer-laws"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 border-b border-border/60">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-primary mb-4">
              <Scale className="w-4 h-4" /> Gun sale laws
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-5">State Firearm Transfer Laws: Private Sale Background Checks</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Whether a private gun sale needs a background check depends on the state. {REQUIRED.length} jurisdictions on
              this page require one for at least some private sales, usually by running the transfer through a licensed
              dealer or a permit system. The {NOT_REQUIRED.length} other states listed don't. In every state, federal law
              bars selling to someone you know or have reason to believe is prohibited, and a sale to a resident of another
              state has to go through a dealer.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              One thing no background check does: tell you whether the gun was reported stolen. It screens the buyer, not
              the serial number. Check the serial yourself before money changes hands.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/firearms-check"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <Shield className="w-4 h-4" /> Check a gun serial number
              </Link>
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition"
              >
                <Smartphone className="w-4 h-4" /> Add the free web app
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Updated {UPDATED}. State list published {PUBLISHED}.</p>
          </div>
        </section>

        <section className="px-4 py-10">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <MapPin className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Private sales only</h2>
              <p className="text-sm text-muted-foreground">This page is about sales between two people. When you buy from a licensed dealer, the dealer always runs a background check.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Scale className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Scope differs</h2>
              <p className="text-sm text-muted-foreground">Some states cover every gun, some only handguns, and several exempt transfers between close family.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Shield className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Federal rules everywhere</h2>
              <p className="text-sm text-muted-foreground">No sales to prohibited people, no direct sales across state lines, and no guns with altered serials, under 18 U.S.C. § 922(k).</p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              States that require a background check on private sales
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              In these {REQUIRED.length} jurisdictions, at least some private sales need a background check. Read the scope
              on each: some cover only handguns, and family exemptions differ.
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
                      <dt className="text-muted-foreground">Background check on private sales</dt>
                      <dd className="font-medium text-primary">Required</dd>
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

        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-muted-foreground" />
              States with no private-sale background check requirement
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              State law in these {NOT_REQUIRED.length} states doesn't require a background check on a sale between two
              residents. Federal law still applies to every sale, and the buyer and seller carry the checking themselves:
              ID, proof of residence, a bill of sale and a serial check.
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

        <section className="px-4 pb-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">A private sale checklist for any state</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Find out whether your state requires a dealer or permit for this sale, using the lists above.</li>
              <li>Buyer and seller show each other photo ID. Confirm the buyer lives in your state.</li>
              <li>Read the serial off the frame or receiver and check it on SafeOrStolen. Walk away from a scratched or ground serial.</li>
              <li>Write a bill of sale: date, price, make, model, caliber, serial and both names. Each keeps a copy.</li>
              <li>When in doubt, do the transfer at a licensed dealer, who runs the background check and keeps a record.</li>
            </ol>
          </div>
        </section>

        <section className="px-4 pb-12 border-t border-border/60 pt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions about private gun sales</h2>
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

        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-5">
              <div className="flex items-center gap-2 mb-2 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Not legal advice
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This page is general information, not legal advice. The state lists reflect the law as of {PUBLISHED}, and
                transfer laws, exemptions and permit systems change. {UNLISTED.join(', ').replace(/, ([^,]*)$/, ' and $1')}{' '}
                aren't listed because we did not have confirmed current information for them; that doesn't mean any
                particular rule applies there. Check current requirements with your state, a licensed dealer or a lawyer
                before you complete a sale.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="font-semibold mb-2 text-base">Related guides</h2>
              <p className="text-sm text-muted-foreground">
                <Link to="/how-to-check-if-gun-is-stolen" className="text-primary underline underline-offset-4">How to check if a gun is stolen</Link>
                {' · '}
                <Link to="/blog/gun-show-serial-number-check" className="text-primary underline underline-offset-4">Checking a gun at a gun show</Link>
                {' · '}
                <Link to="/state-pawnshop-laws" className="text-primary underline underline-offset-4">State pawnshop and secondhand dealer laws</Link>
                {' · '}
                <Link to="/firearms-check" className="text-primary underline underline-offset-4">Gun serial number lookup</Link>
              </p>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Check the serial before you pay</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Searches 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio records and
                owner reports, and flags altered serials. 2 free checks, then $3.99 a check or $14.99 a month unlimited.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/firearms-check" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition">
                  Check a serial free
                </Link>
                <Link to="/app" className="rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition">
                  Add the web app
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
