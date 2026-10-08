import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "VIN check for car dealers" / "stolen trade-in check". Removed:
 * claims the check covers title brands, salvage, total-loss records, odometer, liens and "all 50
 * states' title history" (it does none of these); DMS integrations (CDK, Reynolds, DealerTrack and
 * others); two invented case studies with dollar figures; a $49/month plan with 500 checks and
 * $0.05 overage; white-label reports; "admissible in court"; a (555) phone number and a
 * dealers@ address; App Store badges; "3 seconds".
 */

const UPDATED = 'October 7, 2026';

const COVERS: string[][] = [
  ['Year, make and model decoded from the VIN', 'Yes'],
  ['Open safety recalls', 'Yes'],
  ['SafeOrStolen theft reports', 'Yes'],
  ['Public web results that mention the VIN', 'Yes'],
  ['Arizona law-enforcement stolen-vehicle records', 'Yes, for Arizona VINs and plates (updated twice a day)'],
  ['NCIC stolen vehicle file', 'No. Only police can search it.'],
  ['Title brands (salvage, flood, rebuilt), odometer, liens', 'No. Use an NMVTIS vehicle history report or your usual history provider.'],
  ['State DMV or MVD registration records', 'No'],
];

const FAQS = [
  {
    question: 'How can a car dealer check if a trade-in is stolen?',
    answer:
      'Match the VIN on the dash plate, the driver-door sticker and the title, check the seller\'s ID against the name on the title, then run the VIN on SafeOrStolen (safeorstolen.com/for-dealers). It decodes the vehicle, lists open recalls and searches theft reports and public web results, plus Arizona law-enforcement records for Arizona VINs. Ask your local police if anything looks off.',
  },
  {
    question: 'Does a SafeOrStolen VIN check show salvage or flood titles?',
    answer:
      "No. SafeOrStolen doesn't search title, odometer, lien or insurance total-loss records. Get those from an NMVTIS vehicle history report or the history service you already use. Use SafeOrStolen for what it adds: the decoded year, make and model, open safety recalls, theft reports and web mentions of the VIN, and Arizona stolen-vehicle records.",
  },
  {
    question: 'Can we check a list of VINs from an auction purchase?',
    answer:
      'Yes. Sign in, open /bulk-check, choose Vehicles (VIN) and paste up to 100 VINs, one per line, or upload them as a .csv file. A mistyped VIN is rejected without using a check. When it finishes, download the CSV: one row per VIN with the result, the sources searched and the time of the check.',
  },
  {
    question: 'What does it cost a dealership?',
    answer:
      "The same as anyone else. 2 free checks with a free account, then $0.99 per check or $10 a month for unlimited checks, cancel anytime, with a 30-day refund on the monthly plan. There are no per-rooftop plans or overage fees. If you need something different for several stores, email safeorstolenmail@gmail.com.",
  },
  {
    question: 'Can we give a buyer proof that we checked the car?',
    answer:
      'Yes. After a check, add a $1.99 verification certificate (free on the monthly plan). It has its own link and shows the date, the last four characters of the VIN, the result and the sources searched. It shows the car was looked up on that date. It is not a title report or a guarantee.',
  },
  {
    question: 'What if the VIN plates on a vehicle don\'t match?',
    answer:
      "Stop the deal. A dash VIN that doesn't match the door sticker or the title, a loose or re-riveted VIN plate, or a sticker that has been cut out are classic signs of a stolen or rebuilt vehicle with a swapped identity. Don't buy it, keep copies of the paperwork, and call your local police non-emergency line.",
  },
];

export default function ForDealers() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'VIN check for car dealers',
      serviceType: 'Stolen vehicle check',
      url: 'https://safeorstolen.com/for-dealers',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'VIN checks for dealers: decoded vehicle, open recalls, theft reports, web mentions, and Arizona stolen-vehicle records.',
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
        title="VIN Check for Car Dealers: Stolen Trade-In Check | SafeOrStolen"
        description="How car dealers check trade-ins and auction buys for theft reports by VIN: what a SafeOrStolen VIN check covers and doesn't, bulk VIN checks, and the record you keep."
        keywords="vin check for car dealers, dealer stolen vehicle check, stolen trade-in check, dealership vin verification, bulk vin check, check if trade in is stolen"
        canonical="/for-dealers"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Car dealers', url: '/for-dealers' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For used car dealers and lots</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">VIN Check for Car Dealers</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Run every trade-in and auction buy through a VIN check before you cut a check. SafeOrStolen decodes the year,
              make and model, lists open safety recalls, and searches its theft reports and public web results for the VIN.
              Arizona VINs are also checked against Arizona law-enforcement stolen-vehicle records. It does not cover title
              brands, odometer or liens, so keep your usual history report for those.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/vin-checker">Check a VIN</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/bulk-check">Check a list of VINs</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What a SafeOrStolen VIN check covers</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Record</th><th className="px-4 py-3 font-semibold">Included?</th></tr>
                </thead>
                <tbody>
                  {COVERS.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              The result reads "reported stolen", "possible match" or "no report found in the records searched", and names
              each source it checked. Plate checks never show owner names.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">At the trade-in appraisal</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Read the VIN from the plate at the base of the windshield and from the sticker on the driver-door jamb. They should match each other and the title.</li>
              <li>Look at the dash plate rivets and the door sticker. Scratched, loose or replaced plates, or a sticker cut out, are a stop sign.</li>
              <li>Check the seller's photo ID against the name on the title or registration.</li>
              <li>Run the VIN at /vin-checker. A mistyped VIN is caught before it uses a check.</li>
              <li>Pull your title and odometer history from your usual provider.</li>
              <li>Save the check in the deal jacket: your account keeps the date, and a $1.99 certificate gives you a link to print or share.</li>
            </ol>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">After an auction or a wholesale buy</h2>
            <p className="text-muted-foreground mb-4">
              Put the VINs from the run list into a .csv file, one per line. At /bulk-check, choose Vehicles (VIN), upload
              the file and let it run. Up to 100 VINs go in each run. The results CSV gives you the result, the sources
              searched and the time of the check for every VIN, which you can file with the bill of sale.
            </p>
            <p className="text-muted-foreground">
              Selling a car and want the buyer to see you checked it? See{' '}
              <Link to="/for-sellers" className="text-primary underline">how sellers share a check</Link>. Gun dealers
              checking serials should start at the <Link to="/for-pawn-shops" className="text-primary underline">pawn shop page</Link>,
              which covers firearm records.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from dealers</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.question} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-semibold mb-2">{f.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Check the next trade-in</h2>
            <p className="text-muted-foreground mb-6">
              2 free checks, then $0.99 per check or $10 a month unlimited. The free web app at safeorstolen.com/app
              works from a phone on the lot. Questions: safeorstolenmail@gmail.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/vin-checker">Check a VIN</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/pricing">See pricing</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
