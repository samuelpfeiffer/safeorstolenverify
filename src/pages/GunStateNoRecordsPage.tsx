import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { InlineSerialCheck } from '@/components/seo/InlineSerialCheck';
import { GUN_NATIONAL, GUN_STATES, type GunNoRecordState } from '@/data/gunTheftStats';
import { REQUIRED, NOT_REQUIRED } from '@/pages/StateFirearmTransferLawsPage';
import { GUN_STATE_LAWS } from '@/data/gunStateLaws';

// Nov 24 2026 (owner request): gun serial number lookup pages for the 16 states SafeOrStolen holds
// NO police reports from. Honest by design: the page says there are no reports from this state yet,
// never shows a count for it, and explains what a check here does search. Private-sale rule comes
// from the same verified table as the other state pages (StateFirearmTransferLawsPage).

const fmt = (n: number) => n.toLocaleString('en-US');

function privateSaleRule(name: string): string {
  const req = REQUIRED.find((r) => r.state === name);
  if (req) {
    return `${name} requires a background check on private-party gun sales (${req.scope.charAt(0).toLowerCase()}${req.scope.slice(1)}). Check the serial number before you meet anyway: a background check screens the buyer, not the gun.`;
  }
  if (NOT_REQUIRED.includes(name)) {
    return `${name} law does not require a background check on private sales between residents, so checking the serial number may be the only check that happens before a private sale. Federal law still requires a sale to someone who lives in another state to go through a licensed dealer.`;
  }
  return `Private-sale rules in ${name} can change. Confirm the current rule before a private sale, and check the serial number before you meet either way: a background check screens the buyer, not the gun.`;
}

export default function GunStateNoRecordsPage({ state: s }: { state: GunNoRecordState }) {
  const path = `/gun-serial-number-lookup/${s.slug}`;
  const url = `https://safeorstolen.com${path}`;
  const law = GUN_STATE_LAWS[s.slug];
  const jurisdictions = GUN_STATES.length - 1; // 33 states + DC are listed as GUN_STATES (34 entries)

  const quickAnswer = `Enter the gun's serial number at SafeOrStolen (safeorstolen.com${path}). SafeOrStolen does not hold police reports from ${s.name} yet, but every check still searches ${fmt(GUN_NATIONAL.total)} police reports of stolen and lost guns from 33 states and Washington, DC, live Ohio law-enforcement records and SafeOrStolen's own theft reports, and flags altered serial numbers. A gun reported stolen in another state can still turn up for sale in ${s.name}. The first check is free.`;

  const faqs: { q: string; a: string }[] = [
    { q: `How do I check if a gun is stolen in ${s.name}?`, a: quickAnswer },
    {
      q: `Does SafeOrStolen have ${s.name} police reports?`,
      a: `Not yet. SafeOrStolen's police gun reports come from 33 states and Washington, DC, and ${s.name} is not one of them. A check from ${s.name} still searches all of those reports, live Ohio records and SafeOrStolen's own theft reports. To confirm whether a gun was reported stolen in ${s.name}, ask local police to run the serial number.`,
    },
    {
      q: `Can police in ${s.name} check if a gun is stolen?`,
      a: `Yes. Police can run a serial number through NCIC, the FBI's National Crime Information Center, which private citizens can't search. Call your local police department or sheriff on the non-emergency line and ask whether they will check a serial number before a private purchase.`,
    },
    {
      q: `Is there a free gun serial number lookup in ${s.name}?`,
      a: `Yes. SafeOrStolen lets anyone in ${s.name} check a gun serial number online, and the first check is free. After that it is $4.99 for one check or $10 a month for unlimited checks.`,
    },
    { q: `Do I need a background check to buy a gun privately in ${s.name}?`, a: privateSaleRule(s.name) },
    {
      q: 'What should I do if a gun comes back with no report found?',
      a: `A no report found result means nothing matched in the records searched, which do not yet include ${s.name} police reports. Ask local police to run the serial, ask the seller for a receipt or transfer paperwork, and use a licensed dealer (FFL) for the transfer when you can.`,
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
        { '@type': 'ListItem', position: 3, name: `Gun Serial Number Lookup in ${s.name}`, item: url },
      ],
    },
  ];

  return (
    <>
      <PageSEO
        title={`Gun Serial Number Lookup ${s.name} (${s.code}): Free Stolen Gun Check`}
        description={`Check a gun serial number before you buy in ${s.name} (${s.code}). Searches ${fmt(GUN_NATIONAL.total)} police reports of stolen guns from 33 states and DC plus live Ohio records. ${s.name} reports not yet included. First check free.`}
        canonical={path}
        structuredData={schema}
        modifiedTime={law ? "2026-11-27" : "2026-11-24"}
      />
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-b from-muted to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">{s.name} · Stolen gun check</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Gun Serial Number Lookup {s.name} ({s.code})</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Check a gun's serial number before you buy it in {s.name}. One search covers {fmt(GUN_NATIONAL.total)} police
              reports of stolen and lost guns from 33 states and DC, live Ohio records and SafeOrStolen's own theft reports.
            </p>
            <InlineSerialCheck type="firearm" placeholder="Enter the gun's serial number" />
            <p className="text-sm text-muted-foreground mt-3">1 free check · No credit card · Private: the seller is never told</p>
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
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What a check from {s.name} searches</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>{fmt(GUN_NATIONAL.total)} police reports of stolen and lost guns from {jurisdictions} states and Washington, DC</li>
                <li>Live Ohio law-enforcement stolen-gun records</li>
                <li>SafeOrStolen's own theft reports, from owners in every state</li>
                <li>A check for altered, obliterated or missing serial numbers</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                SafeOrStolen does not hold police reports from {s.name} yet. A clean result means no match in the records
                above, not that the gun was never reported stolen in {s.name}. See{' '}
                <Link to="/stolen-gun-database" className="text-primary underline">which states are covered</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Buying a used gun privately in {s.name}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{privateSaleRule(s.name)}</p>
                <p>
                  Before you pay: ask for a photo of the serial number before you meet, check it here, then make sure the
                  serial on the frame or receiver matches and hasn't been scratched, ground or altered. Possessing a gun
                  with an obliterated serial number is a federal crime, whoever removed it.
                </p>
                <p>
                  For the strongest check in {s.name}, also ask local police or the sheriff to run the serial number. They can
                  search NCIC, which private buyers can't.
                </p>
                <p>
                  If the serial number comes back as stolen, don't buy the gun and don't confront the seller. Leave, and
                  give the serial number and the seller's details to local police on their non-emergency line.
                </p>
              </div>
            </section>

            {law && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{s.name} gun laws a buyer should know</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    {law.rules.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                  <h3 className="text-lg font-semibold text-foreground pt-2">Reporting a lost or stolen gun in {s.name}</h3>
                  <p>{law.reportStolen} You can also report it on SafeOrStolen so anyone who checks the serial number before buying sees it.</p>
                  <h3 className="text-lg font-semibold text-foreground pt-2">Who handles stolen guns in {s.name}</h3>
                  <p>{law.agency}</p>
                  {law.pawn && (
                    <>
                      <h3 className="text-lg font-semibold text-foreground pt-2">Pawn shops and serial numbers in {s.name}</h3>
                      <p>{law.pawn}</p>
                    </>
                  )}
                  {law.extra && <p>{law.extra}</p>}
                  <p className="text-sm">Laws change. This is a plain summary, not legal advice; confirm the current rule with the state or a licensed dealer before a sale.</p>
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{s.name} gun serial number questions</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center">
              <Link to="/firearms-check" className="inline-flex items-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
                Check a gun serial number
              </Link>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
