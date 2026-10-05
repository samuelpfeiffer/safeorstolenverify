import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { InlineSerialCheck } from '@/components/seo/InlineSerialCheck';
import {
  GUN_NATIONAL, GUN_STATES, GUN_TOP_MAKES, GUN_TOP_MODELS, GUN_TOP_CALIBERS, GUN_BY_YEAR, GUN_STATS_AS_OF,
} from '@/data/gunTheftStats';

// Oct 5 2026: original data page. Every number comes from src/data/gunTheftStats.ts, which was
// counted from our own theft_records table. Unique, citable numbers are what search engines and
// AI assistants quote and link to.

const fmt = (n: number) => n.toLocaleString('en-US');
const pct = (n: number, d: number) => `${((n / d) * 100).toFixed(1)}%`;
const N = GUN_NATIONAL;

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is the most stolen gun?',
    a: `In SafeOrStolen's ${fmt(N.total)} police firearm theft and loss reports, the most commonly reported model is the ${GUN_TOP_MODELS[0][0]} (${fmt(GUN_TOP_MODELS[0][1])} reports), followed by the ${GUN_TOP_MODELS[1][0]} (${fmt(GUN_TOP_MODELS[1][1])}) and the ${GUN_TOP_MODELS[2][0]} (${fmt(GUN_TOP_MODELS[2][1])}). Popular guns are reported stolen most often largely because there are more of them in circulation.`,
  },
  {
    q: 'Which gun brand is stolen the most?',
    a: `${GUN_TOP_MAKES[0][0]} appears in ${fmt(GUN_TOP_MAKES[0][1])} reports (${pct(GUN_TOP_MAKES[0][1], N.total)} of all reports), followed by ${GUN_TOP_MAKES[1][0]} (${fmt(GUN_TOP_MAKES[1][1])}) and ${GUN_TOP_MAKES[2][0]} (${fmt(GUN_TOP_MAKES[2][1])}).`,
  },
  {
    q: 'What caliber of gun is stolen most often?',
    a: `9mm is the most common caliber in the reports, with ${fmt(GUN_TOP_CALIBERS[0][1])} guns, followed by .40 (${fmt(GUN_TOP_CALIBERS[1][1])}) and .45 (${fmt(GUN_TOP_CALIBERS[2][1])}). Not every report lists a caliber.`,
  },
  {
    q: 'Which state has the most stolen gun reports?',
    a: `In this data, ${GUN_STATES[0].name} has the most reports (${fmt(GUN_STATES[0].total)}), followed by ${GUN_STATES[1].name} (${fmt(GUN_STATES[1].total)}) and ${GUN_STATES[2].name} (${fmt(GUN_STATES[2].total)}). These counts reflect which police agencies' records are included, so they should not be read as a ranking of where guns are stolen most.`,
  },
  {
    q: 'Can I check if a specific gun is in these records?',
    a: 'Yes. Type the serial number into the search box on this page. Every gun check searches all of these reports at once, plus live Ohio law-enforcement records and SafeOrStolen\'s own theft reports. The first 2 checks are free.',
  },
  {
    q: 'Where does this data come from?',
    a: `These are reports of stolen and lost guns filed with police agencies in 33 states and Washington, DC, mostly dated 2010 to 2016. SafeOrStolen counted them on ${GUN_STATS_AS_OF}. The FBI's national stolen-gun file is not public, so no public dataset covers every stolen gun in the United States.`,
  },
];

function Bars({ rows, max, label }: { rows: [string | number, number][]; max: number; label: string }) {
  return (
    <div className="space-y-2" role="table" aria-label={label}>
      {rows.map(([name, n]) => (
        <div key={String(name)} className="grid grid-cols-[8.5rem_1fr_4.5rem] sm:grid-cols-[12rem_1fr_5rem] items-center gap-3 text-sm" role="row">
          <span className="truncate font-medium" role="cell">{name}</span>
          <span className="h-3 rounded-full bg-muted overflow-hidden" role="cell" aria-hidden="true">
            <span className="block h-full rounded-full bg-primary" style={{ width: `${Math.max(2, (n / max) * 100)}%` }} />
          </span>
          <span className="text-right tabular-nums text-muted-foreground" role="cell">{fmt(n)}</span>
        </div>
      ))}
    </div>
  );
}

export default function GunTheftStatisticsPage() {
  const title = `Stolen Gun Statistics: ${fmt(N.total)} Police Reports by State, Brand & Model`;
  const description = `Stolen gun statistics from ${fmt(N.total)} police firearm theft and loss reports in 33 states and DC: the most stolen guns, brands, calibers and states. Check any gun's serial number free.`;
  const url = 'https://safeorstolen.com/stolen-gun-statistics';

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: 'SafeOrStolen police firearm theft and loss reports',
      description: `${fmt(N.total)} reports of stolen and lost firearms filed with police agencies in 33 U.S. states and the District of Columbia, summarized by state, make, model, caliber and year.`,
      url,
      creator: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      dateModified: GUN_STATS_AS_OF,
      spatialCoverage: 'United States',
      temporalCoverage: '2006/2017',
      variableMeasured: ['Reports by state', 'Reports by make', 'Reports by model', 'Reports by caliber', 'Reports by year'],
      isAccessibleForFree: true,
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
        { '@type': 'ListItem', position: 2, name: 'Gun Serial Number Lookup', item: 'https://safeorstolen.com/firearms-check' },
        { '@type': 'ListItem', position: 3, name: 'Stolen Gun Statistics', item: url },
      ],
    },
  ];

  const yearMax = Math.max(...GUN_BY_YEAR.map(([, n]) => n));

  return (
    <>
      <PageSEO
        title={`${title} | SafeOrStolen`}
        description={description}
        canonical="/stolen-gun-statistics"
        structuredData={schema}
        modifiedTime={GUN_STATS_AS_OF}
      />
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-b from-muted to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">SafeOrStolen data</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Stolen Gun Statistics</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              What {fmt(N.total)} police reports of stolen and lost guns, from 33 states and Washington, DC,
              say about which guns are stolen. Check any gun against all of them in seconds.
            </p>
            <InlineSerialCheck type="firearm" placeholder="Enter a gun's serial number" />
            <p className="text-sm text-muted-foreground mt-3">2 free checks · No credit card · Data counted {GUN_STATS_AS_OF}</p>
          </div>
        </section>

        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              [fmt(N.total), 'police reports'],
              [fmt(N.stolen), 'reported stolen'],
              [fmt(N.lost), 'reported lost'],
              [fmt(N.recovered), 'marked recovered'],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-border bg-card p-5 text-center">
                <div className="text-2xl md:text-3xl font-black tabular-nums">{v}</div>
                <div className="text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Key findings</p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>The <strong className="text-foreground">{GUN_TOP_MODELS[0][0]}</strong> is the most reported stolen or lost gun model, with {fmt(GUN_TOP_MODELS[0][1])} reports. Six of the eight most reported models are Glocks.</li>
              <li><strong className="text-foreground">{GUN_TOP_MAKES[0][0]}</strong> is the most reported brand ({pct(GUN_TOP_MAKES[0][1], N.total)} of reports), ahead of {GUN_TOP_MAKES[1][0]} ({pct(GUN_TOP_MAKES[1][1], N.total)}) and {GUN_TOP_MAKES[2][0]} ({pct(GUN_TOP_MAKES[2][1], N.total)}).</li>
              <li><strong className="text-foreground">Handguns dominate.</strong> The only long guns in the top 20 models are the Remington 870 and Mossberg 500 shotguns.</li>
              <li><strong className="text-foreground">9mm</strong> is the most common caliber, in {fmt(GUN_TOP_CALIBERS[0][1])} reports.</li>
              <li>Only {pct(N.recovered, N.total)} of reports are marked recovered, so most guns in these records were still outstanding when last reported.</li>
            </ul>
          </div>
        </section>

        <article className="px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-14">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Most stolen gun models</h2>
              <p className="text-muted-foreground mb-6">Reports by make and model, where the report lists both.</p>
              <Bars rows={GUN_TOP_MODELS} max={GUN_TOP_MODELS[0][1]} label="Most stolen gun models" />
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Most stolen gun brands</h2>
              <p className="text-muted-foreground mb-6">Reports by manufacturer.</p>
              <Bars rows={GUN_TOP_MAKES} max={GUN_TOP_MAKES[0][1]} label="Most stolen gun brands" />
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Most stolen calibers</h2>
              <p className="text-muted-foreground mb-6">Reports by caliber, where the report lists one.</p>
              <Bars rows={GUN_TOP_CALIBERS} max={GUN_TOP_CALIBERS[0][1]} label="Most stolen calibers" />
            </section>

            <section id="states">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Stolen gun reports by state</h2>
              <p className="text-muted-foreground mb-6">
                Counts depend on which police agencies' records are included, so compare states with care.
                Open a state for its most reported brands and models, and to check a gun.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="px-4 py-3 font-semibold">State</th>
                      <th className="px-4 py-3 font-semibold text-right">Reports</th>
                      <th className="px-4 py-3 font-semibold text-right hidden sm:table-cell">Stolen</th>
                      <th className="px-4 py-3 font-semibold text-right hidden sm:table-cell">Lost</th>
                      <th className="px-4 py-3 font-semibold text-right hidden sm:table-cell">Recovered</th>
                      <th className="px-4 py-3 font-semibold hidden md:table-cell">Most reported brand</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GUN_STATES.map((s) => (
                      <tr key={s.slug} className="border-t border-border">
                        <td className="px-4 py-2">
                          <Link to={`/gun-serial-number-lookup/${s.slug}`} className="text-primary hover:underline font-medium">{s.name}</Link>
                        </td>
                        <td className="px-4 py-2 text-right tabular-nums">{fmt(s.total)}</td>
                        <td className="px-4 py-2 text-right tabular-nums text-muted-foreground hidden sm:table-cell">{fmt(s.stolen)}</td>
                        <td className="px-4 py-2 text-right tabular-nums text-muted-foreground hidden sm:table-cell">{fmt(s.lost)}</td>
                        <td className="px-4 py-2 text-right tabular-nums text-muted-foreground hidden sm:table-cell">{fmt(s.recovered)}</td>
                        <td className="px-4 py-2 text-muted-foreground hidden md:table-cell">{s.topMakes[0]?.[0] ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Reports by year</h2>
              <p className="text-muted-foreground mb-6">
                Most reports are dated 2010 to 2016. The rise and fall across years reflects which agencies'
                records are included, not a national trend in gun theft.
              </p>
              <Bars rows={GUN_BY_YEAR} max={yearMax} label="Stolen gun reports by year" />
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About this data</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These are reports of stolen and lost firearms filed with police agencies in 33 states and
                  Washington, DC. Each record has a serial number and, where the police report lists them,
                  the make, model, caliber, state and year. Records marked recovered are kept, and a check
                  shows a gun as outstanding only when its latest report is still stolen or lost.
                </p>
                <p>
                  The data is not complete. Many stolen guns are never reported, not every agency's records
                  are included, and the FBI's national stolen-gun file is open only to law enforcement. A
                  serial number that isn't in these records may still be stolen.
                </p>
                <p>
                  SafeOrStolen counted these figures on {GUN_STATS_AS_OF}. Serial numbers are never published;
                  the only way to look one up is to check it.
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-card p-5 text-sm">
                <p className="font-semibold mb-1">How to cite this data</p>
                <p className="text-muted-foreground">
                  SafeOrStolen, "Stolen Gun Statistics," analysis of {fmt(N.total)} police firearm theft and loss
                  reports, safeorstolen.com/stolen-gun-statistics, {GUN_STATS_AS_OF}.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                {FAQS.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-bold mb-2">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/50 p-6">
              <h2 className="text-xl font-bold mb-3">Buying a used gun?</h2>
              <p className="text-muted-foreground mb-4">
                Check the serial number before you pay. It searches every report on this page, plus live Ohio
                records and SafeOrStolen's own theft reports.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link to="/firearms-check" className="text-primary hover:underline">Free gun serial number lookup</Link>
                <Link to="/how-to-check-if-gun-is-stolen" className="text-primary hover:underline">How to check if a gun is stolen</Link>
                <Link to="/state-firearm-transfer-laws" className="text-primary hover:underline">Private-sale background check laws by state</Link>
                <Link to="/what-to-do-if-your-gun-is-stolen" className="text-primary hover:underline">What to do if your gun is stolen</Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
