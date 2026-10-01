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
    question: 'Does my state require pawnshops to report to police?',
    answer:
      'It depends on the state, and this page summarizes how each one licenses pawnbrokers and secondhand dealers. Most states license pawnshops at the state level, some leave it entirely to cities and counties, and several — including Illinois and Minnesota — pair licensing with detailed transaction reporting rules. Because requirements differ so much and enforcement varies locally, you should never assume an item you are buying was reported or checked. Confirm current rules with the regulator listed for your state, and verify the item yourself with SafeOrStolen, which checks an IMEI, VIN, serial number, license plate, or firearm serial and returns a result in about 3 seconds. You get 2 free checks, then $0.99 per check or $10/month unlimited. You can also install the free SafeOrStolen web app at safeorstolen.com/app and check items on your phone while you are standing at the counter.',
  },
  {
    question: 'How long do pawnshops have to hold items before reselling?',
    answer:
      'Holding periods are set state by state and only some states name one. Among the states that do, 30 days is the most common minimum (including Alabama, Florida, Nebraska, Nevada, North Carolina, Ohio, South Carolina, Texas, West Virginia, and Wisconsin), while Oregon and Utah name 60 days, Arizona, Indiana and New Mexico name 90 days, Michigan names 3 months, Connecticut names 4 months, and Virginia names 120 days. Holding periods exist partly so police have time to identify property reported stolen, but they are not a guarantee that any check happened. Verify the item independently at SafeOrStolen before you pay — 2 free checks, then $0.99 per check or $10/month unlimited, with results in about 3 seconds, on the web or through the free web app at safeorstolen.com/app.',
  },
  {
    question: 'Is it legal to buy something without checking if it is stolen?',
    answer:
      'This page is general information, not legal advice, and rules on receiving stolen property vary by state — check with your state regulator or a lawyer for your own situation. Practically, though, buying an item that turns out to be stolen usually means losing both the item and the money you paid, whether or not you knew. Running the identifier through SafeOrStolen before you pay takes about 3 seconds, gives you a dated record of the check, and costs nothing for your first 2 verifications ($0.99 per check or $10/month unlimited after that). The free installable web app at safeorstolen.com/app lets you do it from your phone at the point of sale.',
  },
  {
    question: 'Do secondhand dealers have to check whether items are stolen?',
    answer:
      'Licensing and recordkeeping obligations for secondhand dealers are set by state statute or by local ordinance, and in states such as Alaska, Idaho, Maine, Montana, North Dakota, South Dakota, and Wyoming there is no state pawnshop statute at all — the rules come from the city or county. Some jurisdictions require transaction reporting that lets police compare records against theft reports; others require far less. Because coverage is uneven, buyers and sellers should treat an independent verification as their own responsibility. SafeOrStolen checks phones, vehicles, license plates, serialized electronics, firearms, and bicycles in one place and returns a result in about 3 seconds.',
  },
];

const PUBLISHED = 'September 8, 2026';

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
        title="State-by-State Pawnshop & Secondhand Dealer Laws (All 50 States)"
        description="Pawnshop and secondhand dealer licensing by state: which agency licenses pawnbrokers, whether licensing is state or local, the governing statute, and named holding periods for all 50 states."
        canonical="/state-pawnshop-laws"
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
              State-by-State Pawnshop &amp; Secondhand Dealer Law Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Do pawnshops and secondhand dealers have to report to police, or check whether an item is
              stolen? In plain language: it depends entirely on where you are. Most states license
              pawnbrokers through a state financial or consumer agency, and many set a minimum holding
              period before a pawned item can be resold — time that can give police a window to identify
              property reported stolen. Other states leave the whole thing to cities and counties, and a
              few have no dedicated state statute at all.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              What that means for you as a buyer or seller: never assume the item in front of you was
              checked. Licensing does not automatically mean a theft check happened, holding periods are
              not searches, and rules differ from one county to the next. Whichever state you are in, an
              independent check is the only part of the process you control — and it takes seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/verify"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <Shield className="w-4 h-4" /> Verify an item now
              </Link>
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold hover:bg-muted/50 transition"
              >
                <Smartphone className="w-4 h-4" /> Get the app
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Checking at the counter? Install the free SafeOrStolen web app from{' '}
              <Link to="/app" className="text-primary underline underline-offset-4">safeorstolen.com/app</Link>{' '}
              and scan or type an identifier from your phone.
            </p>
          </div>
        </section>

        {/* How to read this */}
        <section className="px-4 py-10">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <MapPin className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">State vs local</h2>
              <p className="text-sm text-muted-foreground">Whether the license comes from a state agency, a city or county, or both.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Scale className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Governing statute</h2>
              <p className="text-sm text-muted-foreground">Listed where the source names a specific act or code section.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Clock className="w-5 h-5 text-primary mb-2" />
              <h2 className="font-semibold mb-1 text-base">Holding period</h2>
              <p className="text-sm text-muted-foreground">Shown only for states where the source names one. Blank does not mean none exists.</p>
            </div>
          </div>
        </section>

        {/* State cards */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pawnshop Licensing by State</h2>
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

        {/* Disclaimer + source */}
        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-5">
              <div className="flex items-center gap-2 mb-2 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> Disclaimer
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This page is general informational content, not legal advice. It is current as of its
                publish date, {PUBLISHED}, and licensing rules, statutes, and holding periods change.
                Blank fields mean the source did not name a value, not that no requirement exists.
                Confirm current requirements with your state's regulatory agency — the licensing
                authority named for each state above — or with a licensed attorney before relying on any
                of it.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="font-semibold mb-2 text-base">Source</h2>
              <p className="text-sm text-muted-foreground">
                State licensing summary adapted from{' '}
                
                  pawn-software.com — Pawn Licensing in the US
                
                .
              </p>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Check the item yourself — it takes 3 seconds</h2>
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
