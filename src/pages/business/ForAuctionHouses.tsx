import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

/**
 * Oct 7 2026: rewritten by hand for "how auction houses check consignments for stolen items".
 * Removed: "$4.7 billion recovered in 2026" and an FBI statistic, CSV uploads of "1,000+" items
 * "in minutes" (it's up to 100 per run), enterprise plans and pricing, white-label catalog badges,
 * PDF compliance reports, flagged-item reports with "theft dates, reporting agencies and case
 * numbers", checks "against law enforcement", jewelry and art verification, and the claim that
 * failing to check brings "criminal liability for negligence".
 */

const UPDATED = 'October 7, 2026';

const CATEGORIES: string[][] = [
  ['Vehicles, motorcycles, trailers', 'VIN', 'Year, make, model, open recalls, theft reports, web results; Arizona records for Arizona VINs'],
  ['Phones and tablets', 'IMEI', 'Make and model, theft reports, web results; carrier blacklist on paid checks'],
  ['Laptops, cameras, consoles, audio gear', 'Serial number', 'Theft reports and web results'],
  ['Power tools, generators, equipment', 'Serial number on the nameplate', 'Theft reports and web results'],
  ['Guns', 'Frame or receiver serial', 'Also police theft and loss reports from 33 states and DC, live Ohio records, altered-serial flag'],
  ['Bikes and e-bikes', 'Frame serial under the bottom bracket', 'Also a national stolen-bicycle registry'],
  ['Jewelry, art, antiques, coins', 'Usually none', 'A serial check can\'t help. Ask for provenance, receipts and photos.'],
];

const FAQS = [
  {
    question: 'How do auction houses check consignments for stolen items?',
    answer:
      "Record each consignor's ID, collect the serial number, IMEI or VIN of every lot that has one, and run the list through a stolen check before the catalog goes out. On SafeOrStolen (safeorstolen.com/for-auction-houses), paste up to 100 numbers at /bulk-check and download a CSV with each result, the sources searched and the time of the check.",
  },
  {
    question: 'Can I check a whole consignment list at once?',
    answer:
      'Up to 100 items per run. Put one number per line in a .csv or .txt file, with an optional type and a note such as the lot number: 1HGBH41JXMN109186, vehicle, lot 212. Upload it at /bulk-check. For a longer sale, split the list and run it in parts. Each item uses one check, so the $14.99 monthly plan is the one built for this.',
  },
  {
    question: 'What happens if a consigned item comes back reported stolen?',
    answer:
      "Pull the lot from the sale and don't hand it back to the consignor yet. Keep the consignment paperwork and the check result, and call your local police non-emergency line. A \"possible match\" is weaker: a source mentions a similar number, so open the result and compare before you act.",
  },
  {
    question: 'Can we show bidders that lots were checked?',
    answer:
      "Yes, lot by lot. A $1.99 verification certificate, free on the monthly plan, gives a dated record with its own link showing the result and the sources searched, with only the last four characters of the number visible. You can add that link to the lot description. There are no catalog badges or branded reports.",
  },
  {
    question: 'Does a clean result mean a lot is not stolen?',
    answer:
      'No. "No report found in the records searched" means no theft report turned up in those sources on that date. Many thefts are never reported anywhere public, and SafeOrStolen does not search NCIC, pawn reporting systems or DMV records. It is one check alongside the consignor\'s ID, paperwork and your own judgment.',
  },
];

export default function ForAuctionHouses() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Stolen item checks for auction consignments',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-auction-houses',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Bulk serial number, IMEI and VIN checks of consignment lists, up to 100 items per run.',
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
        title="Check Auction Consignments for Stolen Items | SafeOrStolen"
        description="How auction houses check consigned vehicles, electronics, tools, guns and bikes for theft reports before the sale: what to collect, bulk checks of 100 items, and what results mean."
        keywords="auction consignment stolen check, auction house stolen item check, check consignment for stolen goods, bulk vin check auction, estate sale stolen item check"
        canonical="/for-auction-houses"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Auction houses', url: '/for-auction-houses' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For auction houses, estate sales and liquidators</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Check Auction Consignments for Stolen Items</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before a lot goes in the catalog, run its serial number, IMEI or VIN through SafeOrStolen. Paste up to 100
              numbers from the consignment list into the bulk check and download a CSV with each result, the sources
              searched and the time of the check. Guns are also searched against police theft reports from 33 states and
              DC. Items without a serial, like most jewelry and art, need paperwork instead.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/bulk-check">Check a consignment list</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/verify">Check one lot</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What you can check, lot by lot</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Lot type</th><th className="px-4 py-3 font-semibold">Number to collect</th><th className="px-4 py-3 font-semibold">What the check searches</th></tr>
                </thead>
                <tbody>
                  {CATEGORIES.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">At intake</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Copy the consignor's photo ID and get a signed statement that they own what they're consigning.</li>
              <li>Read each number off the item, not the box, and write it on the intake sheet next to the lot number.</li>
              <li>Look for scratched-off nameplates, tool engravings with another company's name, rental tags, or a phone still signed in to someone's account.</li>
              <li>Run the list at /bulk-check before photography and cataloging, so a flagged lot never gets listed.</li>
              <li>Keep the results CSV with the consignment agreement.</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              Federal law (18 U.S.C. § 922(k)) makes it a crime to possess a gun whose serial number has been obliterated.
              Don't accept one, and call your local police.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from auction houses</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Check the next sale's lots</h2>
            <p className="text-muted-foreground mb-6">
              2 free checks, then $3.99 per check or $14.99 a month unlimited. For more on checking at other businesses see{' '}
              <Link to="/for-businesses" className="text-primary underline">SafeOrStolen for businesses</Link>. Questions:
              safeorstolenmail@gmail.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/bulk-check">Open the bulk check</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/pricing">See pricing</Link></Button>
            </div>
          </div>
        </section>

        <RelatedPagesSection currentPage="/for-auction-houses" currentCategory="business" maxLinks={6} />
      </div>
    </>
  );
}
