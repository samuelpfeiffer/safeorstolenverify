import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { InlineSerialCheck } from '@/components/seo/InlineSerialCheck';
import { GUN_NATIONAL, GUN_STATES } from '@/data/gunTheftStats';
import { GUN_BRANDS, GUN_BRAND_STATS_AS_OF, type GunBrandStats } from '@/data/gunBrandStats';

// Nov 26 2026 (owner: "we should be out ranking... more to offer means more content").
// One page per gun brand ("glock serial number lookup", "ruger serial number lookup"...), built on
// SafeOrStolen's own police-report counts for that brand. Only facts we can show: report counts,
// most-reported models and states. No claims about any manufacturer's own services.

const fmt = (n: number) => n.toLocaleString('en-US');
const stateFor = (code: string) => GUN_STATES.find((s) => s.code === code) ?? null;
const modelLabel = (brand: string, model: string) => (model.toLowerCase().startsWith(brand.toLowerCase()) ? model : `${brand} ${model}`);

export default function GunBrandLookupPage({ brand: b }: { brand: GunBrandStats }) {
  const path = `/${b.slug}-serial-number-lookup`;
  const url = `https://safeorstolen.com${path}`;
  const topModel = b.topModels[0] ? modelLabel(b.name, b.topModels[0][0]) : null;
  const topState = b.topStates[0] ? stateFor(b.topStates[0][0]) : null;

  const quickAnswer = `Enter the ${b.name} serial number at SafeOrStolen (safeorstolen.com${path}). It checks the serial against ${fmt(GUN_NATIONAL.total)} police reports of stolen and lost guns from 33 states and Washington, DC, including ${fmt(b.total)} reports of ${b.name} guns, plus live Ohio records and SafeOrStolen's own theft reports. The first check is free, and every result lists the sources searched.`;

  const faqs: { q: string; a: string }[] = [
    { q: `How do I check if a ${b.name} is stolen?`, a: quickAnswer },
    {
      q: `Is there a free ${b.name} serial number lookup?`,
      a: `Yes. Your first check on SafeOrStolen is free, with no account or credit card. After that it is $4.99 for one check or $10 a month for unlimited checks.`,
    },
    {
      q: `How many ${b.name} guns have been reported stolen or lost?`,
      a: `SafeOrStolen holds ${fmt(b.total)} police reports of stolen and lost ${b.name} guns from ${b.stateCount} states and DC, reported between ${b.firstYear} and ${b.lastYear}.${topModel ? ` The most reported model is the ${topModel} (${fmt(b.topModels[0][1])} reports).` : ''}`,
    },
    {
      q: `Can I find out when my ${b.name} was made from the serial number?`,
      a: `Contact ${b.name}: gun makers can usually tell you the production date and model from the serial number. That tells you when it was made, not whether it was stolen, so also check the serial on SafeOrStolen.`,
    },
    {
      q: `Can I look up who owns a ${b.name} by serial number?`,
      a: `No. The United States has no public gun registry, and owner records are not public. A serial check tells you whether that gun was reported stolen or lost in the records searched, not who owns it.`,
    },
    {
      q: `What if the ${b.name} serial number has been scratched off or altered?`,
      a: `Don't buy it. Possessing a gun with an altered or obliterated serial number is a federal crime under 18 U.S.C. 922(k), even if you didn't alter it. Leave and tell local police on their non-emergency line.`,
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
        { '@type': 'ListItem', position: 2, name: 'Gun Serial Number Lookup', item: 'https://safeorstolen.com/firearms-check' },
        { '@type': 'ListItem', position: 3, name: `${b.name} Serial Number Lookup`, item: url },
      ],
    },
  ];

  const others = GUN_BRANDS.filter((o) => o.slug !== b.slug);

  return (
    <>
      <PageSEO
        title={`${b.name} Serial Number Lookup: Check if a ${b.name} Is Stolen (Free)`}
        description={`Free ${b.name} serial number lookup. Check a used ${b.name} against ${fmt(GUN_NATIONAL.total)} police reports of stolen and lost guns, including ${fmt(b.total)} ${b.name} reports. First check free.`}
        canonical={path}
        structuredData={schema}
        modifiedTime={GUN_BRAND_STATS_AS_OF}
      />
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-b from-muted to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">{b.name} · Stolen gun check</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{b.name} Serial Number Lookup</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Check a {b.name} serial number before you buy. One search covers {fmt(GUN_NATIONAL.total)} police reports of
              stolen and lost guns, including {fmt(b.total)} {b.name} reports, plus live Ohio records.
            </p>
            <InlineSerialCheck type="firearm" placeholder={`Enter the ${b.name} serial number`} />
            <p className="text-sm text-muted-foreground mt-3">1 free check · No credit card · Private: the seller is never told</p>
          </div>
        </section>

        <section className="px-4 pb-10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Quick answer</p>
            <h2 className="text-xl md:text-2xl font-bold mb-3">How do I check if a {b.name} is stolen?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{quickAnswer}</p>
          </div>
        </section>

        <article className="px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{b.name} guns in SafeOrStolen's police reports</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SafeOrStolen holds {fmt(b.total)} police reports of stolen and lost {b.name} guns from {b.stateCount} states
                and DC, reported between {b.firstYear} and {b.lastYear}.
                {topModel && <> The most reported {b.name} is the {topModel}.</>}
                {topState && <> {topState.name} has the most {b.name} reports.</>}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Most reported {b.name} models</h3>
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead><tr className="bg-muted/50 text-left"><th className="p-2">Model</th><th className="p-2 text-right">Reports</th></tr></thead>
                    <tbody>
                      {b.topModels.map(([m, n]) => (
                        <tr key={m} className="border-t border-border"><td className="p-2">{modelLabel(b.name, m)}</td><td className="p-2 text-right">{fmt(n)}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">States with the most {b.name} reports</h3>
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead><tr className="bg-muted/50 text-left"><th className="p-2">State</th><th className="p-2 text-right">Reports</th></tr></thead>
                    <tbody>
                      {b.topStates.map(([code, n]) => {
                        const s = stateFor(code);
                        return (
                          <tr key={code} className="border-t border-border">
                            <td className="p-2">
                              {s ? <Link to={`/gun-serial-number-lookup/${s.slug}`} className="text-primary underline">{s.name}</Link> : code}
                            </td>
                            <td className="p-2 text-right">{fmt(n)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Counts as of {GUN_BRAND_STATS_AS_OF}. Full data: <Link to="/stolen-gun-statistics" className="underline">stolen gun statistics</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Where to find the serial number on a {b.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every gun made or imported for sale in the United States since 1968 must carry a serial number on its frame or
                receiver, the part the law treats as the firearm. On many pistols it is also stamped on the slide or barrel; on
                rifles and shotguns, look at the receiver. Use the number on the frame or receiver for your check, and make sure
                any other serial on the gun matches it. If the serial looks ground, scratched, re-stamped or covered, don't buy
                the gun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Before you buy a used {b.name}</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>Ask the seller for the serial number before you meet, and check it here</li>
                <li>At the meetup, read the serial on the frame yourself and confirm it matches</li>
                <li>Be wary of a price far below what the same {b.name} model sells for used</li>
                <li>For the strongest check, buy through a licensed dealer (FFL), or ask local police to run the serial in NCIC</li>
                <li>Follow your state's private-sale rules: <Link to="/state-firearm-transfer-laws" className="text-primary underline">state firearm transfer laws</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{b.name} serial number questions</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Serial number lookup for other gun brands</h2>
              <p className="text-muted-foreground leading-relaxed">
                {others.map((o, i) => (
                  <span key={o.slug}>
                    <Link to={`/${o.slug}-serial-number-lookup`} className="text-primary underline">{o.name}</Link>
                    {i < others.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
              <p className="text-muted-foreground mt-3">
                Any brand: <Link to="/firearms-check" className="text-primary underline">gun serial number lookup</Link> ·{' '}
                <Link to="/how-to-check-if-a-gun-is-stolen" className="text-primary underline">how to check if a gun is stolen</Link> ·{' '}
                <Link to="/stolen-gun-database" className="text-primary underline">stolen gun database by state</Link>
              </p>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
