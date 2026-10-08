import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "claims verification" (19 impressions, position 55) and
 * "claims verification services", narrowed to what SafeOrStolen can actually do for a theft claim:
 * search the claimed serial numbers. Removed: "30% fewer fraudulent claims", "75% faster", "5x
 * recovery rate", "billions annually", a REST API with enterprise SLA, SOAP/XML, claims-system
 * plugins, recovery matching against an insurer's claim database, "24/7", pilot programs, and the
 * shared template, whose fixed copy offered a free trial and a support@ address that isn't ours.
 */

const UPDATED = 'October 7, 2026';

const READS: string[][] = [
  ['A SafeOrStolen theft report filed before the claimed loss date', 'The item may have been reported stolen by someone else earlier. Ask how the claimant came to own it.'],
  ['A public listing that mentions the serial after the claimed loss date', 'The item may be on the market. Compare the listing photos and location with the claim.'],
  ['A web post by the claimant about the theft', 'Consistent with the claim. Check that the details match.'],
  ['No report found in the records searched', 'Nothing turned up in those sources on that date. It neither supports nor undermines the claim.'],
  ['Gun serial flagged as altered or obliterated', 'The serial on file may not be the original. Talk to the investigating agency.'],
];

const FAQS = [
  {
    question: 'How can an insurer verify a stolen property claim by serial number?',
    answer:
      "Collect the serial numbers, IMEIs or VINs of the claimed items and run them on SafeOrStolen (safeorstolen.com/for-insurance-companies). Each check searches owner-filed theft reports and public web results, so you can see an earlier theft report on the same item or a listing that mentions it after the loss date. Up to 100 numbers go through /bulk-check at once.",
  },
  {
    question: 'Does SafeOrStolen search insurance claim databases?',
    answer:
      "No. SafeOrStolen does not search insurer or industry claim databases, NCIC, DMV records or carrier records other than a paid phone blacklist check. It searches its own theft reports and public web results, plus police firearm theft reports from 33 states and DC and live Ohio records for guns, a national bike registry, and Arizona law-enforcement records for Arizona vehicles.",
  },
  {
    question: 'Can SafeOrStolen tell me if a claimed phone was blacklisted?',
    answer:
      "Yes, with the paid phone blacklist check, which searches the lost and stolen carrier blacklist by IMEI. A standard IMEI check shows the make and model, which helps confirm the claimed device matches the IMEI given. Monthly members get up to 20 blacklist checks a month. It does not show Apple or Google account lock status.",
  },
  {
    question: 'What record do we get of each check?',
    answer:
      'Every check is saved to your account with the date, the result and the sources searched. The bulk check also gives you a CSV with the time of each check in UTC and a check ID. A $1.99 verification certificate adds a dated record with its own link. None of these is an official record or a finding of fraud.',
  },
  {
    question: 'Is there an API for claims systems?',
    answer:
      "No public API exists today, and there are no claims-system plugins. Adjusters can run single checks at /verify or lists at /bulk-check and attach the results file to the claim. If you need checks to run from your own system, email safeorstolenmail@gmail.com with your item types and monthly volume.",
  },
  {
    question: 'How much does it cost an insurance company?',
    answer:
      'The same as everyone: 2 free checks with a free account and no credit card, then $0.99 per check or $10 a month for unlimited checks, cancel anytime, with a 30-day refund on the monthly plan. There is no separate enterprise price list. Ask at safeorstolenmail@gmail.com if you need something else.',
  },
];

const ForInsuranceCompanies = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Theft claims verification by serial number',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-insurance-companies',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Serial number, IMEI and VIN checks that adjusters can run on items in a theft claim.',
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
        title="Theft Claims Verification by Serial Number | SafeOrStolen"
        description="How adjusters check the serial numbers, IMEIs and VINs in a theft claim: earlier theft reports, listings after the loss date, bulk checks, and what each result means."
        keywords="claims verification, claims verification services, theft claim verification, stolen property claim verification, claim validation service, insurance serial number check, claims verification web sources"
        canonical="/for-insurance-companies"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Insurance companies', url: '/for-insurance-companies' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For insurers, adjusters and claims investigators</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Theft Claims Verification by Serial Number</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To check a theft claim, run the serial number, IMEI or VIN of each claimed item through SafeOrStolen. The
              search covers owner-filed theft reports and public web results, so it can show an earlier theft report on the
              same item or a listing that mentions it after the loss. Gun serials also go against police theft reports
              from 33 states and DC. Lists of up to 100 run through the bulk check.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/bulk-check">Check a claim's items</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/verify">Check one number</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How to read a result on a claim</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">What the check shows</th><th className="px-4 py-3 font-semibold">What it can mean for the claim</th></tr>
                </thead>
                <tbody>
                  {READS.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              A result is a lead, not a finding. Every result names the sources it searched, and "possible match" means a
              source mentions a similar number, so open it before drawing a conclusion.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Checking a claim step by step</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Ask the claimant for serial numbers from receipts, boxes, warranty registrations or photos. For a phone, the IMEI is on the box label and in the carrier account.</li>
              <li>Put them in a .csv file, one per line, with the item type and the claim number as a note, for example <code>C02XG0FDH7JY, electronics, claim 88213</code>.</li>
              <li>Upload the file at /bulk-check and download the results CSV when it finishes.</li>
              <li>Open anything marked reported stolen, reported lost or possible match, and compare dates and places with the claim.</li>
              <li>Attach the CSV to the claim file. It shows what you searched and when.</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              Policyholders whose items were stolen can also file a report at{' '}
              <Link to="/report-stolen" className="text-primary underline">/report-stolen</Link>, so a buyer who checks the
              serial later sees it.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from insurers</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Try it on an open claim</h2>
            <p className="text-muted-foreground mb-6">
              2 free checks, then $0.99 per check or $10 a month unlimited. Questions: safeorstolenmail@gmail.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/bulk-check">Open the bulk check</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/phone-blacklist-check">Phone blacklist check</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForInsuranceCompanies;
