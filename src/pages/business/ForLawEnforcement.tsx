import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "stolen property lookup for police" / "recovered property serial
 * number check". Removed: CAD/RMS integration, "CJIS-compliant options", a secure API, a law
 * enforcement liaison, special department pricing and pilot programs, victim notification and
 * owner matching services, "evidence documentation for court", "24/7", "instant" field checks,
 * and the shared template, whose fixed copy offered a free trial and a support@ address that
 * isn't ours.
 */

const UPDATED = 'October 7, 2026';

const COVERAGE: string[][] = [
  ['SafeOrStolen theft reports', 'Reports owners file on the site. A report can include a police report number, city, state and date stolen.'],
  ['Public web results', 'Listings and posts that mention the number, such as an owner\'s stolen post or a for-sale listing'],
  ['Police firearm theft and loss reports', '242,839 reports from 33 states and Washington, DC, filed through 2017; the years covered vary by state'],
  ['Ohio law-enforcement records', 'Live stolen-gun records, searched on gun checks'],
  ['National stolen-bicycle registry', 'Searched on bike checks'],
  ['Arizona law-enforcement stolen-vehicle records', 'Searched for Arizona VINs and plates, updated twice a day'],
];

const FAQS = [
  {
    question: 'Can police use SafeOrStolen to look up stolen property?',
    answer:
      'Yes, as a public search alongside your own systems, not instead of them. SafeOrStolen (safeorstolen.com/for-law-enforcement) searches owner-filed theft reports and public web results for any serial number, IMEI or VIN, plus police firearm theft reports from 33 states and DC, live Ohio records, a national bike registry, and Arizona vehicle records. It does not search NCIC.',
  },
  {
    question: 'Does SafeOrStolen have access to NCIC?',
    answer:
      "No. SafeOrStolen is a private website and has no access to NCIC, state criminal justice systems, ATF eTrace, pawn reporting systems or DMV records. Its value to an investigator is different: thefts that owners reported on SafeOrStolen, sometimes with a police report number, and public posts or listings that mention the same serial number.",
  },
  {
    question: 'How do I check a batch of recovered items?',
    answer:
      'Create an account, open /bulk-check, and paste up to 100 serial numbers, IMEIs or VINs, one per line, with an optional type and note such as a property tag number. When it finishes, download the CSV: each row has the result, the sources searched and the time of the check. Each item uses one check on the account.',
  },
  {
    question: 'Can SafeOrStolen tell me who owns a recovered item?',
    answer:
      "Not through a search. Results show that a report exists and where it came from; plate checks never show owner names. If a SafeOrStolen report matches property you've recovered, email safeorstolenmail@gmail.com from your department address with the item details and your case number, and we'll reply.",
  },
  {
    question: 'Is there special pricing for police departments?',
    answer:
      'There is no department plan. Every account gets 2 free checks with no credit card, then $3.99 per check or $14.99 a month for unlimited checks, which covers the bulk check. If your agency has a purchasing requirement, email safeorstolenmail@gmail.com.',
  },
  {
    question: 'Can a SafeOrStolen result be used as evidence?',
    answer:
      'A result is a dated record of what a public search returned. It is not an official record, does not confirm ownership, and has no chain of custody. Use it as a lead, then confirm a match through your own records and the reporting agency before you act on it.',
  },
];

const ForLawEnforcement = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Stolen property lookup for law enforcement',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-law-enforcement',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'A public search of owner-filed theft reports, web mentions and selected police records for serial numbers, IMEIs and VINs.',
      dateModified: '2026-10-07',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ];

  return (
    <>
      <PageSEO
        title="Stolen Property Lookup for Police: Serial, IMEI & VIN | SafeOrStolen"
        description="What SafeOrStolen can and can't search for officers checking recovered property: owner theft reports, web mentions, police gun theft records, bulk checks, and no NCIC."
        keywords="stolen property lookup for police, recovered property serial number check, police serial number lookup, law enforcement stolen property search, recovered property owner lookup"
        canonical="/for-law-enforcement"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Law enforcement', url: '/for-law-enforcement' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For officers, detectives and property rooms</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Stolen Property Lookup for Law Enforcement</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SafeOrStolen is a public stolen-item search, not a police system. It can turn up thefts that owners reported
              on the site, sometimes with a police report number, and public posts or listings that mention a serial
              number. Gun serials also go against police firearm theft reports from 33 states and DC. It does not search
              NCIC, so treat a result as a lead to confirm.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/verify">Check a number</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/bulk-check">Check a list</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What a search covers</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Source</th><th className="px-4 py-3 font-semibold">Detail</th></tr>
                </thead>
                <tbody>
                  {COVERAGE.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              Not searched: NCIC, ATF eTrace, state criminal justice systems, pawn reporting systems, DMV or MVD records,
              carrier records other than a paid phone blacklist check, Apple and Google account status, manufacturer and
              insurer databases. Gun checks also flag serials that look altered or obliterated.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Where it helps an investigation</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Recovered property with a serial number but no matching report in your own records: a SafeOrStolen report or an owner's public post may point to the theft.</li>
              <li>Items listed for sale online: a web result can show the same serial in an earlier listing or a stolen post.</li>
              <li>A property room clearing a batch: the bulk check runs up to 100 numbers and gives you a CSV with the time of each check.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Victims can file a theft report on SafeOrStolen at <Link to="/report-stolen" className="text-primary underline">/report-stolen</Link>,
              so later checks of the same number can find it. Point them there after they've made the police report.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from officers</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.question} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-semibold mb-2">{f.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Contact</h2>
            <p className="text-muted-foreground mb-6">
              SafeOrStolen, Seattle, WA. For a matching report or an agency question, email safeorstolenmail@gmail.com from
              your department address.
            </p>
            <Button size="lg" asChild><a href="mailto:safeorstolenmail@gmail.com">Email us</a></Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForLawEnforcement;
