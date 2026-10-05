import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { InlineSerialCheck } from '@/components/seo/InlineSerialCheck';
import { GUN_NATIONAL, GUN_STATES, GUN_STATS_AS_OF, type GunStateStats } from '@/data/gunTheftStats';
import { REQUIRED, NOT_REQUIRED } from '@/pages/StateFirearmTransferLawsPage';

// Oct 5 2026: one page per state we hold police gun theft reports for (34). Each page is built
// from that state's real counts, its most reported brands and models, and its private-sale rule,
// so no two pages say the same thing. Answers "gun serial number lookup <state>" searches.

const fmt = (n: number) => n.toLocaleString('en-US');

function privateSaleRule(name: string): string {
  const req = REQUIRED.find((r) => r.state === name);
  if (req) {
    return `${name} requires a background check on private-party gun sales (${req.scope.charAt(0).toLowerCase()}${req.scope.slice(1)}). Check the serial number before you meet anyway: a background check screens the buyer, not the gun.`;
  }
  if (NOT_REQUIRED.includes(name)) {
    return `${name} law does not require a background check on private sales between residents, so checking the serial number may be the only check that happens before a private sale. Federal law still requires a sale to someone who lives in another state to go through a licensed dealer.`;
  }
  return `Private-sale rules in ${name} have changed in recent years. Confirm the current rule before a private sale, and check the serial number before you meet either way: a background check screens the buyer, not the gun.`;
}

function Bars({ rows, label }: { rows: [string, number][]; label: string }) {
  const max = rows[0]?.[1] ?? 1;
  return (
    <div className="space-y-2" role="table" aria-label={label}>
      {rows.map(([name, n]) => (
        <div key={name} className="grid grid-cols-[9rem_1fr_4rem] sm:grid-cols-[13rem_1fr_4.5rem] items-center gap-3 text-sm" role="row">
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

export default function GunStateLookupPage({ stats: s }: { stats: GunStateStats }) {
  const path = `/gun-serial-number-lookup/${s.slug}`;
  const url = `https://safeorstolen.com${path}`;
  const yearsText = s.years ? `, dated ${s.years}` : '';
  const share = ((s.total / GUN_NATIONAL.total) * 100).toFixed(1);
  const topMake = s.topMakes[0];
  const topModel = s.topModels[0];
  const ohio = s.code === 'OH';

  const quickAnswer = `Enter the gun's serial number at SafeOrStolen (safeorstolen.com/gun-serial-number-lookup/${s.slug}). SafeOrStolen searches ${fmt(s.total)} police reports of stolen and lost guns from ${s.name}${yearsText}, ${fmt(GUN_NATIONAL.total - s.total)} reports from 33 other jurisdictions, live Ohio law-enforcement records and SafeOrStolen's own theft reports. You get a result in a few seconds, and the first 2 checks are free.`;

  const faqs: { q: string; a: string }[] = [
    { q: `How do I check if a gun is stolen in ${s.name}?`, a: quickAnswer },
    {
      q: `How many stolen gun reports does SafeOrStolen have for ${s.name}?`,
      a: `${fmt(s.total)} police reports${yearsText}: ${fmt(s.stolen)} reported stolen, ${fmt(s.lost)} reported lost and ${fmt(s.recovered)} marked recovered. That is ${share}% of the ${fmt(GUN_NATIONAL.total)} reports SafeOrStolen holds, and ranks ${s.name} ${s.rank} of the 34 jurisdictions covered.`,
    },
    ...(topMake ? [{
      q: `What guns are reported stolen most in ${s.name}?`,
      a: topModel
        ? `In ${s.name}'s reports, the most reported brand is ${topMake[0]} (${fmt(topMake[1])} reports) and the most reported model is the ${topModel[0]} (${fmt(topModel[1])}).`
        : `In ${s.name}'s reports, the most reported brand is ${topMake[0]} (${fmt(topMake[1])} reports).`,
    }] : []),
    { q: `Do I need a background check to buy a gun privately in ${s.name}?`, a: privateSaleRule(s.name) },
    {
      q: 'Is a gun that isn\'t in these records definitely not stolen?',
      a: 'No. Many stolen guns are never reported, and these are historical police records. A no-match result on SafeOrStolen means nothing was found in the records searched. Ask for the receipt or transfer paperwork, and use a licensed dealer for the transfer when you can.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: `${s.name} police firearm theft and loss reports`,
      description: `${fmt(s.total)} reports of stolen and lost firearms filed with police in ${s.name}, summarized by brand and model.`,
      url,
      creator: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      dateModified: GUN_STATS_AS_OF,
      spatialCoverage: s.name,
      isAccessibleForFree: true,
    },
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
        { '@type': 'ListItem', position: 2, name: 'Stolen Gun Statistics', item: 'https://safeorstolen.com/stolen-gun-statistics' },
        { '@type': 'ListItem', position: 3, name: `Gun Serial Number Lookup in ${s.name}`, item: url },
      ],
    },
  ];

  return (
    <>
      <PageSEO
        title={`Gun Serial Number Lookup ${s.name} — Free Stolen Gun Check | SafeOrStolen`}
        description={`Free gun serial number lookup for ${s.name}. Search ${fmt(s.total)} ${s.name} police reports of stolen and lost guns, plus ${fmt(GUN_NATIONAL.total - s.total)} more from 33 other jurisdictions, before you buy.`}
        canonical={path}
        structuredData={schema}
        modifiedTime={GUN_STATS_AS_OF}
      />
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-b from-muted to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">{s.name} · Stolen gun check</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Gun Serial Number Lookup in {s.name}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Check a gun's serial number free before you buy it in {s.name}. One search covers {fmt(s.total)} {s.name} police
              reports of stolen and lost guns and {fmt(GUN_NATIONAL.total - s.total)} more from 33 other jurisdictions.
            </p>
            <InlineSerialCheck type="firearm" placeholder="Enter the gun's serial number" />
            <p className="text-sm text-muted-foreground mt-3">2 free checks · No credit card · Private: the seller is never told</p>
          </div>
        </section>

        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              [fmt(s.total), `${s.name} police reports`],
              [fmt(s.stolen), 'reported stolen'],
              [fmt(s.lost), 'reported lost'],
              [`${s.rank} of 34`, 'by number of reports'],
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
            <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Quick answer</p>
            <h2 className="text-xl md:text-2xl font-bold mb-3">How do I check if a gun is stolen in {s.name}?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{quickAnswer}</p>
          </div>
        </section>

        <article className="px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {s.topMakes.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Most reported stolen gun brands in {s.name}</h2>
                <p className="text-muted-foreground mb-6">From {s.name} police reports that list the manufacturer.</p>
                <Bars rows={s.topMakes} label={`Most reported stolen gun brands in ${s.name}`} />
              </section>
            )}

            {s.topModels.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Most reported stolen gun models in {s.name}</h2>
                <p className="text-muted-foreground mb-6">From reports that list both the make and the model.</p>
                <Bars rows={s.topModels} label={`Most reported stolen gun models in ${s.name}`} />
              </section>
            )}

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Buying a used gun privately in {s.name}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{privateSaleRule(s.name)}</p>
                {ohio && (
                  <p>
                    Every gun check also searches Ohio law-enforcement stolen-gun records live, so recent Ohio reports are
                    covered as well as the historical reports counted on this page.
                  </p>
                )}
                <p>
                  Before you pay: ask for a photo of the serial number before you meet, check it here, then make sure the
                  serial on the frame or receiver matches and hasn't been scratched, ground or altered. Possessing a gun
                  with an obliterated serial number is a federal crime, whoever removed it.
                </p>
                <p>
                  If the serial number comes back as stolen, don't buy the gun and don't confront the seller. Leave, and
                  give the serial number and the seller's details to local police on their non-emergency line.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About the {s.name} records</h2>
              <p className="text-muted-foreground leading-relaxed">
                These are reports of stolen and lost guns filed with police in {s.name}{yearsText}. They are
                historical and not complete: many stolen guns are never reported, and not every agency's records are
                included. Of the {fmt(s.total)} reports, {fmt(s.recovered)} are marked recovered. A check shows a gun as
                outstanding only when its latest report is still stolen or lost. SafeOrStolen never publishes serial
                numbers; the only way to look one up is to check it. <Link to="/stolen-gun-statistics" className="text-primary hover:underline">See the national stolen gun statistics</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-bold mb-2">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/50 p-6">
              <h2 className="text-xl font-bold mb-4">Gun serial number lookup in other states</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {GUN_STATES.filter((o) => o.slug !== s.slug).map((o) => (
                  <Link key={o.slug} to={`/gun-serial-number-lookup/${o.slug}`} className="text-primary hover:underline">{o.name}</Link>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <Link to="/firearms-check" className="text-primary hover:underline">Free gun serial number lookup (all states)</Link>
                <Link to="/how-to-check-if-gun-is-stolen" className="text-primary hover:underline">How to check if a gun is stolen</Link>
                <Link to="/state-firearm-transfer-laws" className="text-primary hover:underline">Private-sale laws by state</Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
