import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';

export type CompareRow = { label: string; us: string; them: string };
export type CompareFaq = { q: string; a: string };
export type HonestCompare = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  themName: string;
  themUrl: string;
  rows: CompareRow[];
  useBoth: string;
  faqs: CompareFaq[];
};

const SOS_PRICE = '2 free checks with a free account, then $0.99 per check or $10/month unlimited.';

export const COMPARES: Record<string, HonestCompare> = {
  'safeorstolen-vs-nicb-vincheck': {
    slug: 'safeorstolen-vs-nicb-vincheck',
    title: 'SafeOrStolen vs NICB VINCheck | SafeOrStolen',
    description: 'NICB VINCheck is free for vehicles. SafeOrStolen also checks phones, guns, bikes and serials, with 2 free checks then $0.99.',
    h1: 'SafeOrStolen vs NICB VINCheck',
    intro: 'NICB VINCheck is a free vehicle lookup from the National Insurance Crime Bureau. It covers vehicles only. SafeOrStolen checks vehicles and also phones, guns, bikes, plates and other serial numbers, and charges after 2 free checks.',
    themName: 'NICB VINCheck',
    themUrl: 'https://www.nicb.org/vincheck',
    rows: [
      { label: 'Price', us: SOS_PRICE, them: 'Free to use.' },
      { label: 'Item types', us: 'Vehicles (VIN and Arizona plates), phones, guns, bikes, and other serial-numbered items.', them: 'Vehicles only (by VIN). No phones, guns or serial numbers.' },
      { label: 'What it searches', us: "SafeOrStolen's own stolen-item reports, Arizona law-enforcement stolen-vehicle records (TheftAZ), and NHTSA VIN decode and recalls for vehicles.", them: "NICB's records of unrecovered vehicle thefts and total-loss vehicles reported by participating insurers." },
      { label: 'Does SafeOrStolen query it?', us: 'No. We link to VINCheck so you can run it yourself.', them: '—' },
    ],
    useBoth: 'For a used car, run both: NICB VINCheck for its insurance-reported theft records, and SafeOrStolen for Arizona police records, our own reports, and recalls. If either shows a theft record, do not buy and contact local police.',
    faqs: [
      { q: 'Is NICB VINCheck free?', a: 'Yes. NICB VINCheck is free to use for vehicle VINs.' },
      { q: 'Does NICB VINCheck check phones or guns?', a: 'No. It covers vehicles only. It does not check phones, guns, bikes or other serial numbers.' },
      { q: 'What does SafeOrStolen cost?', a: SOS_PRICE },
      { q: 'What does it mean if nothing is found?', a: 'No record found means the item was not found in the sources searched. It does not mean the item is safe or not stolen.' },
    ],
  },
  'safeorstolen-vs-bikeindex': {
    slug: 'safeorstolen-vs-bikeindex',
    title: 'SafeOrStolen vs Bike Index | SafeOrStolen',
    description: 'Bike Index is a free bike registry and stolen-bike search. SafeOrStolen searches Bike Index too and also checks phones, cars, guns and serials.',
    h1: 'SafeOrStolen vs Bike Index',
    intro: 'Bike Index is a free bicycle registry where owners record serial numbers and mark bikes stolen. It covers bikes only. SafeOrStolen also checks bikes, including a search of the Bike Index stolen registry, and checks other item types.',
    themName: 'Bike Index',
    themUrl: 'https://bikeindex.org',
    rows: [
      { label: 'Price', us: SOS_PRICE, them: 'Free to search and free to register a bike.' },
      { label: 'Item types', us: 'Bikes, phones, vehicles, plates, guns, and other serial-numbered items.', them: 'Bicycles and e-bikes only.' },
      { label: 'What it searches', us: "For bikes: the Bike Index stolen registry plus SafeOrStolen's own stolen-item reports.", them: 'Bikes registered and reported stolen by their owners on Bike Index.' },
      { label: 'Register your own bike', us: 'You can list items you own in My items.', them: 'Yes. Bike Index registration is free, and stolen alerts reach its network.' },
    ],
    useBoth: 'If you only check bikes, Bike Index is free and is the place to register your own bike. If you check other items too, SafeOrStolen searches Bike Index for bikes and covers the rest. If your bike is stolen, report it on Bike Index and on SafeOrStolen.',
    faqs: [
      { q: 'Is Bike Index free?', a: 'Yes. Searching Bike Index and registering a bike are free.' },
      { q: 'Does SafeOrStolen search Bike Index?', a: 'Yes. A SafeOrStolen bike check searches the Bike Index stolen registry along with our own reports.' },
      { q: 'What else does SafeOrStolen check?', a: 'Phones, vehicles, license plates, guns, and other serial-numbered items.' },
      { q: 'What does SafeOrStolen cost?', a: SOS_PRICE },
      { q: 'What does it mean if nothing is found?', a: 'No record found means the bike was not found in the sources searched. It does not mean the bike is safe or not stolen.' },
    ],
  },
  'safeorstolen-vs-asking-police': {
    slug: 'safeorstolen-vs-asking-police',
    title: 'SafeOrStolen vs Asking the Police | SafeOrStolen',
    description: 'See what each checks, what it costs, and when to use both before you buy.',
    h1: 'SafeOrStolen vs asking the police',
    intro: 'We search public police records where they exist, plus our own stolen-item reports.',
    themName: 'Your local police',
    themUrl: '',
    rows: [
      { label: 'Price', us: SOS_PRICE, them: 'Free, when a department agrees to run a check.' },
      { label: 'What it searches', us: "A 2017 multi-state file of police gun theft and loss reports, live Ohio Attorney General stolen-gun records, Arizona law-enforcement stolen-vehicle records (TheftAZ), the Bike Index registry for bikes, and SafeOrStolen's own reports.", them: 'State or local records, depending on the department.' },
      { label: 'Availability', us: 'Online, any time. Results in seconds.', them: 'Depends on the department. Many will not run checks for private buyers.' },
    ],
    useBoth: 'Run a SafeOrStolen check first. It is fast and shows exactly what was searched. If you still have doubts, or the item is a gun or a car, ask your local police on their non-emergency line whether they will run it. If anything shows as stolen, do not buy, do not confront the seller, and contact police.',
    faqs: [
      { q: 'Will police check a serial number for me?', a: 'Some departments will, when their policy allows. Call the non-emergency line and ask.' },
      { q: 'Which police records does SafeOrStolen search?', a: 'A 2017 multi-state file of police gun theft and loss reports, live Ohio Attorney General stolen-gun records, and Arizona law-enforcement stolen-vehicle records, plus our own reports.' },
      { q: 'What does SafeOrStolen cost?', a: SOS_PRICE },
      { q: 'What does it mean if nothing is found?', a: 'No record found means the item was not found in the sources searched. It does not mean the item is safe or not stolen.' },
    ],
  },
};

export function compareHead(slug: string) {
  const c = COMPARES[slug];
  const url = `https://safeorstolen.com/compare/${slug}`;
  return {
    meta: [
      { title: c.title },
      { name: 'description', content: c.description },
      { property: 'og:title', content: c.title },
      { property: 'og:description', content: c.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }),
    }],
  };
}

export function HonestComparePage({ slug }: { slug: string }) {
  const c = COMPARES[slug];
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <PageSEO title={c.title} description={c.description} canonical={`/compare/${slug}`} />
      <article className="container mx-auto max-w-4xl px-4 space-y-10">
        <header className="space-y-4">
          <Link to="/compare" className="text-sm text-primary hover:underline">← All comparisons</Link>
          <h1 className="text-4xl md:text-5xl font-bold">{c.h1}</h1>
          <p className="text-lg text-muted-foreground">{c.intro}</p>
        </header>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr>
                <th className="p-3 text-left"></th>
                <th className="p-3 text-left">SafeOrStolen</th>
                <th className="p-3 text-left">
                  {c.themUrl ? <a href={c.themUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{c.themName}</a> : c.themName}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r.label} className="border-t border-border align-top">
                  <th className="p-3 text-left font-semibold">{r.label}</th>
                  <td className="p-3 text-muted-foreground">{r.us}</td>
                  <td className="p-3 text-muted-foreground">{r.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">When to use each</h2>
          <p className="text-muted-foreground">{c.useBoth}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Questions</h2>
          {c.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </section>

        <p className="text-xs text-muted-foreground">
          SafeOrStolen results are not a guarantee. "Not found" means not found in the sources searched, not safe.
        </p>
        <Link to="/verify" className="inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90">Check an item</Link>
      </article>
    </main>
  );
}
