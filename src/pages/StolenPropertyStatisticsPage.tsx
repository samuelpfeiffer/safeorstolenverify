import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { InlineSerialCheck } from '@/components/seo/InlineSerialCheck';

// Oct 23 2026: original data page built for citations by AI assistants, Google and news writers.
// Every number below was counted from SafeOrStolen's own tables on the date shown:
//  - Alaska: theft_records (source ak_hotsheet), the statewide stolen-vehicle list, refreshed nightly
//  - What buyers check: verification_searches, last 90 days, grouped by item type
// Re-count and update AS_OF when refreshing these numbers.

const AS_OF0 = '2026-10-23';
// Live numbers come from the public_stolen_property_stats() database function via the route loader;
// the numbers below are the fallback if that call fails.

const AK0 = {
  total: 3486,
  reported2026: 1028,
  styleKnown: 1461,
  styles: [
    ['SUVs', 475],
    ['Pickup trucks', 405],
    ['Cars (sedans and coupes)', 282],
    ['Motorcycles', 202],
    ['Vans', 56],
    ['Trailers', 41],
  ] as [string, number][],
  makeKnown: 1306,
  makes: [
    ['Chevrolet', 241],
    ['Ford', 178],
    ['General Motors (GMC)', 78],
    ['Kia', 71],
    ['Dodge', 64],
    ['Subaru', 61],
    ['Toyota', 60],
  ] as [string, number][],
  topModel: ['Chevrolet Silverado', 98] as [string, number],
};

const CHECKS0 = {
  total: 2272,
  groups: [
    ['Serial-numbered items (laptops, tools, cameras, consoles)', 625],
    ['Cars, VINs and license plates', 616],
    ['Guns', 553],
    ['Phones (IMEI)', 403],
    ['Bikes', 72],
  ] as [string, number][],
};

const fmt = (n: number) => n.toLocaleString('en-US');
const pct = (n: number, d: number) => `${Math.round((n / d) * 100)}%`;

type AkStats = typeof AK0;
type CheckStats = typeof CHECKS0;

function buildFaqs(AK: AkStats, CHECKS: CheckStats, AS_OF_TEXT: string, YEAR: string): { q: string; a: string }[] {
  return [
  {
    q: 'What type of vehicle is stolen most often?',
    a: `${AK.styles[0][0]}. In Alaska's statewide stolen-vehicle list, as counted by SafeOrStolen on ${AS_OF_TEXT}, ${AK.styles[0][0]} make up ${pct(AK.styles[0][1], AK.styleKnown)} of stolen vehicles with a known body type, followed by ${AK.styles[1][0].toLowerCase()} at ${pct(AK.styles[1][1], AK.styleKnown)} and ${AK.styles[2][0].toLowerCase()} at ${pct(AK.styles[2][1], AK.styleKnown)}.`,
  },
  {
    q: 'What car brand is stolen the most?',
    a: `${AK.makes[0][0]}. It accounts for ${pct(AK.makes[0][1], AK.makeKnown)} of stolen vehicles with a known make on Alaska's current stolen-vehicle list, ahead of ${AK.makes[1][0]} at ${pct(AK.makes[1][1], AK.makeKnown)}. The single most-listed model is the ${AK.topModel[0]}. (SafeOrStolen count, ${AS_OF_TEXT}.)`,
  },
  {
    q: 'How many vehicles are reported stolen in Alaska?',
    a: `As of ${AS_OF_TEXT}, Alaska's statewide stolen-vehicle list holds ${fmt(AK.total)} vehicles and plates, and ${fmt(AK.reported2026)} of them (${pct(AK.reported2026, AK.total)}) were reported stolen in ${YEAR}. SafeOrStolen searches this list, along with Arizona and Chicago police records, on every VIN and plate check.`,
  },
  {
    q: 'What used items do people check most for theft?',
    a: `In ${fmt(CHECKS.total)} checks run on SafeOrStolen in the 90 days to ${AS_OF_TEXT}, serial-numbered items such as laptops, tools and consoles were checked most (${pct(CHECKS.groups[0][1], CHECKS.total)}), followed by cars and license plates (${pct(CHECKS.groups[1][1], CHECKS.total)}), guns (${pct(CHECKS.groups[2][1], CHECKS.total)}), phones (${pct(CHECKS.groups[3][1], CHECKS.total)}) and bikes (${pct(CHECKS.groups[4][1], CHECKS.total)}).`,
  },
  {
    q: 'How can I check if a car, gun, phone or other item is stolen?',
    a: 'Enter its VIN, plate, serial number or IMEI at safeorstolen.com/verify. SafeOrStolen searches police stolen-vehicle records from Arizona, Alaska and Chicago, more than 220,000 police stolen-gun reports, a national stolen-bicycle registry, the lost and stolen phone blacklist, and its own theft reports, for an item from any state. Your first check is free.',
  },
  ];
}

function Bar({ label, n, d }: { label: string; n: number; d: number }) {
  const w = Math.max(2, Math.round((n / d) * 100));
  return (
    <div className="grid grid-cols-[9rem_1fr_3.5rem] sm:grid-cols-[16rem_1fr_4rem] items-center gap-3 py-1.5">
      <div className="text-sm">{label}</div>
      <div className="h-3 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: `${w}%` }} /></div>
      <div className="text-sm tabular-nums text-right">{pct(n, d)}</div>
    </div>
  );
}

export default function StolenPropertyStatisticsPage({ stats }: { stats?: any }) {
  const live = stats && Number(stats.akTotal) > 0 && Array.isArray(stats.styles) && stats.styles.length >= 3 && Array.isArray(stats.makes) && stats.makes.length >= 2 ? stats : null;
  const AK: AkStats = live
    ? { total: live.akTotal, reported2026: live.akReportedThisYear, styleKnown: live.styleKnown, styles: live.styles, makeKnown: live.makeKnown, makes: live.makes, topModel: live.topModel ?? AK0.topModel }
    : AK0;
  const CHECKS: CheckStats = live && Array.isArray(live.checks) && live.checks.length >= 5 ? { total: live.checksTotal, groups: live.checks } : CHECKS0;
  const AS_OF: string = live?.asOf ?? AS_OF0;
  const YEAR = AS_OF.slice(0, 4);
  const AS_OF_TEXT = new Date(`${AS_OF}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  const FAQS = buildFaqs(AK, CHECKS, AS_OF_TEXT, YEAR);
  const url = 'https://safeorstolen.com/stolen-property-statistics';
  const title = `Stolen Property Statistics ${YEAR}: Cars, Guns, Phones & More`;
  const description = `Original ${YEAR} data: ${AK.styles[0][0]} are ${pct(AK.styles[0][1], AK.styleKnown)} of stolen vehicles, ${AK.makes[0][0]} the most-stolen make, and what used items buyers check most. Free to cite.`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: `SafeOrStolen stolen property statistics ${YEAR}`,
      description: `Counts from Alaska's statewide stolen-vehicle list (${fmt(AK.total)} vehicles and plates) and ${fmt(CHECKS.total)} stolen-item checks run on SafeOrStolen, summarized by vehicle type, make, model and item type.`,
      url,
      creator: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      datePublished: AS_OF0,
      dateModified: AS_OF,
      spatialCoverage: 'United States',
      temporalCoverage: YEAR,
      variableMeasured: ['Stolen vehicles by body type', 'Stolen vehicles by make', 'Stolen vehicles reported in 2026', 'Stolen-item checks by item type'],
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
        { '@type': 'ListItem', position: 2, name: 'Stolen Property Statistics', item: url },
      ],
    },
  ];

  return (
    <>
      <PageSEO
        title={`${title} | SafeOrStolen`}
        description={description}
        canonical="/stolen-property-statistics"
        structuredData={schema}
        modifiedTime={AS_OF}
      />
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-b from-muted to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">SafeOrStolen data · Updated {AS_OF_TEXT}</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Stolen Property Statistics {YEAR}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Original numbers from current police stolen-vehicle records and {fmt(CHECKS.total)} real stolen-item checks:
              which vehicles get stolen, which brands, and what buyers check before they pay.
            </p>
            <InlineSerialCheck placeholder="Enter a VIN, plate, serial number or IMEI" />
            <p className="text-sm text-muted-foreground mt-3">Search any item from any state · 1 free check · No account</p>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-3">Key findings</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>{AK.styles[0][0]} are the most-stolen vehicle type</strong>, at {pct(AK.styles[0][1], AK.styleKnown)} of stolen vehicles with a known body type, ahead of {AK.styles[1][0].toLowerCase()} ({pct(AK.styles[1][1], AK.styleKnown)}).</li>
              <li><strong>{AK.makes[0][0]} is the most-stolen make</strong> ({pct(AK.makes[0][1], AK.makeKnown)}), and the <strong>{AK.topModel[0]}</strong> is the most-listed model.</li>
              <li><strong>{fmt(AK.reported2026)} vehicles</strong> on Alaska's current stolen list, {pct(AK.reported2026, AK.total)} of the total, were reported stolen in {YEAR}.</li>
              <li><strong>Serial-numbered items are what buyers check most</strong> ({pct(CHECKS.groups[0][1], CHECKS.total)} of checks), followed by cars and plates ({pct(CHECKS.groups[1][1], CHECKS.total)}) and guns ({pct(CHECKS.groups[2][1], CHECKS.total)}).</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Most-stolen vehicle types</h2>
            <p className="text-muted-foreground mb-4">Share of {fmt(AK.styleKnown)} stolen vehicles with a known body type on Alaska's statewide stolen-vehicle list, counted {AS_OF_TEXT}.</p>
            {AK.styles.map(([l, n]) => <Bar key={l} label={l} n={n} d={AK.styleKnown} />)}

            <h2 className="text-2xl font-bold mt-10 mb-2">Most-stolen vehicle makes</h2>
            <p className="text-muted-foreground mb-4">Share of {fmt(AK.makeKnown)} stolen vehicles with a known make, same list and date. The most-listed single model is the {AK.topModel[0]} ({fmt(AK.topModel[1])} vehicles).</p>
            {AK.makes.map(([l, n]) => <Bar key={l} label={l} n={n} d={AK.makeKnown} />)}

            <h2 className="text-2xl font-bold mt-10 mb-2">What buyers check most</h2>
            <p className="text-muted-foreground mb-4">Share of {fmt(CHECKS.total)} stolen-item checks run on SafeOrStolen in the 90 days to {AS_OF_TEXT}.</p>
            {CHECKS.groups.map(([l, n]) => <Bar key={l} label={l} n={n} d={CHECKS.total} />)}

            <p className="mt-8">
              Looking for guns? See <Link to="/stolen-gun-statistics" className="text-primary hover:underline">stolen gun statistics</Link> from more than 220,000 police firearm theft and loss reports, or run a{' '}
              <Link to="/vin-checker" className="text-primary hover:underline">VIN check</Link>,{' '}
              <Link to="/license-plate-lookup" className="text-primary hover:underline">plate lookup</Link> or{' '}
              <Link to="/serial-number-checker" className="text-primary hover:underline">serial number lookup</Link>.
            </p>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Questions</h2>
            {FAQS.map((f) => (
              <div key={f.q} className="mb-5">
                <h3 className="font-semibold text-lg">{f.q}</h3>
                <p className="text-muted-foreground mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 text-sm">
            <h2 className="text-lg font-bold mb-2">How these numbers were counted</h2>
            <p className="text-muted-foreground mb-3">
              Vehicle numbers come from Alaska's statewide stolen-vehicle list, which SafeOrStolen refreshes every night, counted on {AS_OF_TEXT}.
              Body type and make are counted only where the record lists them. Check numbers come from stolen-item searches run on SafeOrStolen,
              grouped by the type of item searched. No personal information is included.
            </p>
            <h2 className="text-lg font-bold mb-2">How to cite this page</h2>
            <p className="text-muted-foreground">
              SafeOrStolen, "Stolen Property Statistics {YEAR}," updated {AS_OF_TEXT}, https://safeorstolen.com/stolen-property-statistics.
              You may quote these figures with a link to this page.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
