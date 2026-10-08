/**
 * Oct 7 2026: rewritten by hand for "pawn shop laws by state" / "pawn shop holding period by state".
 * The STATES data is unchanged; only the copy around it was rewritten. Removed: "takes about 3 seconds",
 * a bare external domain in the source note, and the duplicate app CTAs.
 */
import { Link } from '@/lib/router-compat';
import { Shield, Scale, Clock, MapPin, Smartphone, AlertTriangle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

interface StateEntry {
  state: string;
  level: string;
  authority: string;
  statute?: string;
  holding?: string;
  note?: string;
}

const STATES: StateEntry[] = [
  { state: 'Alabama', level: 'State + local', authority: 'Alabama Banking Department', statute: 'Pawnshop Act', holding: '30 days minimum' },
  { state: 'Alaska', level: 'Local only', authority: 'City/borough authorities (e.g. Anchorage)', note: 'No state statute; requirements vary by city.' },
  { state: 'Arizona', level: 'State', authority: 'Department of Financial Institutions', statute: 'ARS Title 44, Chapter 13', holding: '90 days' },
  { state: 'Arkansas', level: 'State', authority: 'State Board of Collection Agencies', holding: '30 days' },
  { state: 'California', level: 'State + local', authority: 'State statute plus local permits (e.g. Los Angeles Municipal Code)', statute: 'Civil Code §1800–1812' },
  { state: 'Colorado', level: 'State + local', authority: 'Division of Banking' },
  { state: 'Connecticut', level: 'State', authority: 'Department of Consumer Protection', holding: '4 months' },
  { state: 'Delaware', level: 'Minimal / none', authority: 'General business licensing; some local rules', note: 'No dedicated state pawnshop statute.' },
  { state: 'Florida', level: 'State', authority: 'Office of Financial Regulation', holding: '30 days', note: 'Unique requirement: numbered preprinted pawn tickets from approved vendors.' },
  { state: 'Georgia', level: 'State + local', authority: 'State plus county/city registration', statute: 'OCGA Title 44, Chapter 12' },
  { state: 'Hawaii', level: 'State + local', authority: 'Department of Commerce and Consumer Affairs', statute: 'HRS Chapter 445' },
  { state: 'Idaho', level: 'Local only', authority: 'Local authorities', note: 'No state statute; secondhand-dealer provisions may apply.' },
  { state: 'Illinois', level: 'State + local', authority: 'Department of Financial and Professional Regulation', statute: 'Pawnbroker Regulation Act', note: 'Extensive reporting requirements.' },
  { state: 'Indiana', level: 'State', authority: 'Department of Financial Institutions', holding: '90 days (4-month redemption)' },
  { state: 'Iowa', level: 'State', authority: 'Banking Division', note: 'Examination and statutory compliance required.' },
  { state: 'Kansas', level: 'State + local', authority: 'Office of the State Bank Commissioner — Consumer Credit Commissioner, plus city licenses' },
  { state: 'Kentucky', level: 'State + local', authority: 'Department of Financial Institutions plus local business licenses' },
  { state: 'Louisiana', level: 'State + local', authority: 'Office of Financial Institutions, plus parish/municipal licenses', statute: 'Pawnshop Act (RS 37:1781 et seq.)' },
  { state: 'Maine', level: 'Local only', authority: 'Local authorities', note: 'No comprehensive state statute.' },
  { state: 'Maryland', level: 'State + local', authority: 'Commissioner of Financial Regulation', note: 'Baltimore City and counties add local licenses.' },
  { state: 'Massachusetts', level: 'Local (under state statute)', authority: 'Municipal licensing authorities', statute: 'MGL Chapter 140, §§70–89' },
  { state: 'Michigan', level: 'State', authority: 'Department of Insurance and Financial Services', holding: '3 months minimum' },
  { state: 'Minnesota', level: 'State + local', authority: 'Department of Commerce', statute: 'Minnesota Statutes Chapter 325J', note: 'Extensive consumer protection provisions.' },
  { state: 'Mississippi', level: 'State + local', authority: 'Department of Banking and Consumer Finance plus municipal licenses' },
  { state: 'Missouri', level: 'State + local', authority: 'Division of Finance', statute: 'RSMo Chapter 367' },
  { state: 'Montana', level: 'Local only', authority: 'Local authorities', note: 'No state statute.' },
  { state: 'Nebraska', level: 'State', authority: 'Department of Banking and Finance', holding: '30 days minimum' },
  { state: 'Nevada', level: 'State', authority: 'Department of Business and Industry', holding: '30 days' },
  { state: 'New Hampshire', level: 'Local', authority: 'Municipal licensing', statute: 'RSA 398 (some pawnbroker provisions)' },
  { state: 'New Jersey', level: 'State + local', authority: 'Division of Consumer Affairs', statute: 'NJSA 45:22-1 et seq.' },
  { state: 'New Mexico', level: 'State', authority: 'Financial Institutions Division', holding: '90 days' },
  { state: 'New York', level: 'Local (under state statute)', authority: 'NYC requires a Department of Consumer and Worker Protection license', statute: 'General Business Law Article 5' },
  { state: 'North Carolina', level: 'State', authority: 'Commissioner of Banks', holding: '30 days minimum' },
  { state: 'North Dakota', level: 'Local only', authority: 'Local authorities', note: 'No state statute.' },
  { state: 'Ohio', level: 'State', authority: 'Division of Financial Institutions', holding: '30 days minimum', note: 'Extensive regulations.' },
  { state: 'Oklahoma', level: 'State + local', authority: 'Department of Consumer Credit, plus city licenses', statute: 'Pawnshop Act' },
  { state: 'Oregon', level: 'State', authority: 'Division of Financial Regulation', holding: '60 days minimum' },
  { state: 'Pennsylvania', level: 'Local', authority: 'Municipal licensing; Philadelphia and Pittsburgh require local licenses', statute: '63 P.S. §281-1 et seq. (limited state regulation)' },
  { state: 'Rhode Island', level: 'State + local', authority: 'Department of Business Regulation plus city/town licenses' },
  { state: 'South Carolina', level: 'State', authority: 'Department of Consumer Affairs', holding: '30 days' },
  { state: 'South Dakota', level: 'Local only', authority: 'Local authorities', note: 'No state statute.' },
  { state: 'Tennessee', level: 'State + local', authority: 'Department of Financial Institutions plus city licenses' },
  { state: 'Texas', level: 'State + local', authority: 'Office of Consumer Credit Commissioner', statute: 'Finance Code Title 5, Subtitle B', holding: '30 days minimum' },
  { state: 'Utah', level: 'State', authority: 'Department of Financial Institutions', holding: '60 days' },
  { state: 'Vermont', level: 'Local', authority: 'Municipal licensing', statute: '9 VSA §41 (some provisions)' },
  { state: 'Virginia', level: 'State', authority: 'Department of Professional and Occupational Regulation', holding: '120 days' },
  { state: 'Washington', level: 'State + local', authority: 'Department of Licensing', statute: 'RCW Chapter 19.60' },
  { state: 'West Virginia', level: 'State', authority: 'Division of Financial Institutions', holding: '30 days minimum' },
  { state: 'Wisconsin', level: 'State', authority: 'Department of Financial Institutions', holding: '30 days minimum' },
  { state: 'Wyoming', level: 'Local only', authority: 'Local authorities', note: 'No state statute.' },
];

const FAQS = [
  {
    question: 'What are the pawn shop laws in my state?',
    answer:
      'Most states license pawnbrokers through a state banking, financial or consumer agency, some pair state licensing with city or county permits, and a few, including Alaska, Idaho, Maine, Montana, North Dakota, South Dakota and Wyoming, have no state pawnshop statute, so cities and counties set the rules. SafeOrStolen (safeorstolen.com/state-pawnshop-laws) lists the licensing agency, statute and holding period for each state.',
  },
  {
    question: 'How long do pawn shops have to hold items before selling them?',
    answer:
      'Only some states name a holding period. Among those that do, 30 days is the most common minimum (Alabama, Arkansas, Florida, Nebraska, Nevada, North Carolina, Ohio, South Carolina, Texas, West Virginia and Wisconsin). Oregon and Utah name 60 days; Arizona, Indiana and New Mexico 90 days; Michigan 3 months; Connecticut 4 months; and Virginia 120 days. A blank state on this page may still have a local rule.',
  },
  {
    question: 'Do pawn shops have to report to police?',
    answer:
      "In many places, yes, but the rule usually comes from the state pawn statute or a city or county ordinance, so it differs from one town to the next. Where reporting applies, the shop sends police the seller's ID details and each item's description and serial number, and police compare those records with stolen reports. Your state's licensing agency, listed above, can tell you what applies.",
  },
  {
    question: 'Do pawn shops check if items are stolen?',
    answer:
      "Mostly through police reporting and the holding period, not by searching a stolen database themselves. Pawn shops can't search NCIC; police do that with the records the shop reports. The full answer, including how guns are handled, is in our guide at safeorstolen.com/blog/pawn-shop-stolen-item-verification.",
  },
  {
    question: 'Is it illegal to buy something that turns out to be stolen?',
    answer:
      "Laws on receiving stolen property vary by state and usually turn on what the buyer knew or should have known. Either way, a stolen item is normally returned to its owner, so the buyer loses the item and the money. Checking the serial number before you pay, and keeping a dated record that you did, is the part you control. This is general information, not legal advice.",
  },
];

const PUBLISHED = 'September 8, 2026';
const UPDATED = 'October 7, 2026';

/** Holding periods as listed in STATES, for the summary table. */
const HOLDING_ROWS = STATES.filter((s) => s.holding).map((s) => [s.state, s.holding as string, s.authority]);

export default function StatePawnshopLawsPage() {
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
        title="Pawn Shop Laws by State: Licensing & Holding Periods | SafeOrStolen"
        description="Pawn shop laws by state for all 50 states: which agency licenses pawnbrokers, state or local licensing, the governing statute, and each holding period a state names."
        keywords="pawn shop laws by state, pawnshop laws by state, pawn shop holding period by state, how long do pawn shops hold items, pawnbroker license by state, secondhand dealer laws by state"
        canonical="/state-pawnshop-laws"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background text-foreground pt-20">
        {/* Hero */}
        <section className="px-4 py-14 border-b border-border/60">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <Scale className="w-4 h-4" /> State law guide
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-5">
              Pawn Shop Laws by State: Licensing and Holding Periods
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Pawn shop rules are set state by state, and often city by city. Most states license pawnbrokers through a
              state financial or consumer agency, and many set a minimum holding period before a pawned item can be sold,
              most often 30 days. A handful of states, including Alaska, Idaho, Maine and Wyoming, have no state pawnshop
              statute and leave the rules to cities and counties. Below is the licensing agency, statute and holding period for every state.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              If you're buying, a license and a holding period don't mean anyone checked the item you're looking at. Ask for
              the serial number and check it yourself before you pay.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/verify"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <Shield className="w-4 h-4" /> Check a serial number
              </Link>
              <Link
                to="/for-pawn-shops"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition"
              >
                <Smartphone className="w-4 h-4" /> For pawn shop owners
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Updated {UPDATED}</p>
          </div>
        </section>

        {/* How to read this */}
        <section className="px-4 py-10">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <MapPin className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Licensing level</h2>
              <p className="text-sm text-muted-foreground">Whether a state agency, a city or county, or both issue the license.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Scale className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Governing statute</h2>
              <p className="text-sm text-muted-foreground">Shown where the source names a specific act or code section.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Clock className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Holding period</h2>
              <p className="text-sm text-muted-foreground">Shown only where the source names one. A blank doesn't mean there is no rule.</p>
            </div>
          </div>
        </section>

        {/* Holding period summary */}
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pawn shop holding periods by state</h2>
            <p className="text-muted-foreground mb-4">
              These are the states where our source names a holding period. Other states may set one in regulation or leave
              it to local ordinances.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">State</th><th className="px-4 py-3 font-semibold">Holding period</th><th className="px-4 py-3 font-semibold">Licensing authority</th></tr>
                </thead>
                <tbody>
                  {HOLDING_ROWS.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* State cards */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pawnshop licensing in all 50 states</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {STATES.map((s) => (
                <article
                  key={s.state}
                  id={s.state.toLowerCase().replace(/\s+/g, '-')}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <h3 className="text-lg font-bold mb-2">{s.state}</h3>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Licensing level</dt>
                      <dd className="font-medium">{s.level}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Licensing authority</dt>
                      <dd className="font-medium">{s.authority}</dd>
                    </div>
                    {s.statute && (
                      <div>
                        <dt className="text-muted-foreground">Governing statute</dt>
                        <dd className="font-medium">{s.statute}</dd>
                      </div>
                    )}
                    {s.holding && (
                      <div>
                        <dt className="text-muted-foreground">Holding period</dt>
                        <dd className="font-medium text-primary">{s.holding}</dd>
                      </div>
                    )}
                    {s.note && <p className="text-muted-foreground pt-1">{s.note}</p>}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-12 border-t border-border/60 pt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions</h2>
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

        {/* Disclaimer + source */}
        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-5">
              <div className="flex items-center gap-2 mb-2 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Not legal advice
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a general summary, current as of {PUBLISHED}. Statutes, licensing rules and holding periods change,
                and cities and counties often add their own. A blank field means the source didn't name a value, not that no
                rule exists. Before relying on any of it, confirm with the licensing authority named for your state or with
                a licensed attorney.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="font-semibold mb-2 text-base">Source</h2>
              <p className="text-sm text-muted-foreground">
                The state licensing summary is adapted from "Pawn Licensing in the US", a guide published by a pawn
                software company, and has not been checked against each state's current code.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Check the item yourself before you pay</h2>
              <p className="text-sm text-muted-foreground mb-4">
                SafeOrStolen searches its theft reports and public web results for any serial number, IMEI or VIN, plus
                police gun theft reports for guns. 2 free checks, then $0.99 per check or $10 a month unlimited. Pawn
                shops can run up to 100 numbers at once with the bulk check.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/verify" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition">
                  Check a serial number
                </Link>
                <Link to="/bulk-check" className="rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition">
                  Bulk check for shops
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
