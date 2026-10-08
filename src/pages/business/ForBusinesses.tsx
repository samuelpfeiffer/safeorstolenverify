import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "stolen item check for businesses" (bulk serial, IMEI and VIN
 * checks for pawn shops, dealers and resellers). The old page sold things that don't exist: $49 and
 * $99 business plans with a 30-day free trial, an embeddable widget and REST API, POS/Shopify
 * integrations, multi-location dashboards, compliance reports "in all 50 states", an ROI calculator
 * and invented loss figures. This version describes only what a business can use today.
 */

const UPDATED = 'October 7, 2026';

const WHAT_YOU_GET: string[][] = [
  ['Single checks', 'Type or paste a serial number, IMEI, VIN or plate at /verify and get a result in a few seconds.', 'Every account, 2 free checks'],
  ['Bulk check', 'Paste up to 100 numbers, or upload a .csv or .txt file, at /bulk-check. Download the results as a CSV.', 'Built for the $14.99/month plan'],
  ['Dated check history', 'Every check is saved to your account with the date and time, the result and the sources searched.', 'Every account'],
  ['Verification certificate', 'A dated record with its own link that shows you checked an item. You can show it to a customer or keep it in the file.', '$1.99, free on the monthly plan'],
  ['Phone blacklist check', 'Checks an IMEI against the lost and stolen carrier blacklist.', 'Paid; up to 20 a month on the monthly plan'],
];

const SOURCES: string[][] = [
  ['Any serial number', 'SafeOrStolen theft reports and public web results (listings and posts that mention the number)'],
  ['Guns', 'Also 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, and a flag for serials that look altered or obliterated'],
  ['Bikes', 'Also a national stolen-bicycle registry'],
  ['Phones (IMEI)', 'Also the make and model from the IMEI; the carrier blacklist is a separate paid check'],
  ['Vehicles (VIN)', 'Also the decoded year, make and model, open safety recalls, and Arizona law-enforcement stolen-vehicle records for Arizona VINs'],
  ['Plates', 'SafeOrStolen theft reports, plus Arizona law-enforcement records for Arizona plates. No owner names.'],
];

const FAQS = [
  {
    question: 'How can a business check if an item is stolen?',
    answer:
      "Write down the item's serial number, IMEI or VIN at intake and run it on SafeOrStolen (safeorstolen.com/for-businesses) before you pay. One item takes a few seconds at /verify. For a stack of items, paste up to 100 numbers at /bulk-check and download a CSV with each result, the sources searched and the time of the check.",
  },
  {
    question: 'How much does SafeOrStolen cost for a business?',
    answer:
      'There is no separate business price. Every account gets 2 free checks with no credit card. After that it is $3.99 for a single check or $14.99 a month for unlimited checks, which is the plan bulk checking is built for. Phone blacklist checks are capped at 20 a month on that plan. You can cancel anytime, and there is a 30-day refund on the monthly plan.',
  },
  {
    question: 'Does SafeOrStolen search police databases like NCIC?',
    answer:
      "No. SafeOrStolen does not search NCIC, ATF eTrace, pawn reporting systems, DMV records or insurer databases. It searches its own theft reports and public web results, plus police firearm theft reports from 33 states and DC and live Ohio records for guns, a national stolen-bicycle registry for bikes, and Arizona law-enforcement records for Arizona vehicles. Treat it as one check alongside the reporting your state requires.",
  },
  {
    question: 'Does a SafeOrStolen check satisfy state pawn or secondhand dealer laws?',
    answer:
      "No. State and local laws set what a pawnbroker or secondhand dealer must record, report and hold, and a SafeOrStolen check doesn't replace any of it. What it adds is a dated record that you looked the item up before you bought it. See /state-pawnshop-laws for how each state licenses pawnshops, then confirm the current rules with your regulator.",
  },
  {
    question: 'Is there an API or a widget for my website?',
    answer:
      "Not a public one. There are no API keys, plugins or embeddable widgets to sign up for today. You can link a listing or your own site to a check with a URL like safeorstolen.com/verify?q=NUMBER, and run lists through the bulk check. If you need programmatic access, email safeorstolenmail@gmail.com with your item types and volume.",
  },
  {
    question: 'Can several employees use one account?',
    answer:
      "There are no separate employee logins or role permissions. A business can share one account, and every check run on it lands in the same dated history, which makes it easy to pull up what was checked and when. If you need separate logins for each location, email safeorstolenmail@gmail.com.",
  },
  {
    question: 'What should we do if an item comes back reported stolen?',
    answer:
      "Don't buy it or take it in pawn, and don't argue with the person selling it. Keep the item details, the seller's ID record and the check result, and call your local police non-emergency line. A \"possible match\" means a source mentions a similar number, so read what the result shows before you decide.",
  },
];

export default function ForBusinesses() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SafeOrStolen stolen item checks for businesses',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-businesses',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description:
        'Single and bulk checks of serial numbers, IMEIs and VINs against SafeOrStolen theft reports and public web results, with a dated record of every check.',
      offers: [
        { '@type': 'Offer', price: '3.99', priceCurrency: 'USD', description: 'Single check' },
        { '@type': 'Offer', price: '14.99', priceCurrency: 'USD', description: 'Unlimited checks per month' },
      ],
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
        title="Stolen Item Check for Businesses: Bulk Serial, IMEI & VIN | SafeOrStolen"
        description="How pawn shops, dealers and resellers check if items are stolen with SafeOrStolen: single and bulk checks, what each check searches, pricing, and the dated record you keep."
        keywords="stolen item check for businesses, bulk serial number check, stolen goods check for resellers, pawn shop stolen check, bulk imei check, bulk vin check, secondhand dealer stolen property check"
        canonical="/for-businesses"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For pawn shops, dealers, resellers and auction houses</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Stolen Item Checks for Businesses</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A business can check whether an item is reported stolen by running its serial number, IMEI or VIN on
              SafeOrStolen before paying for it. One item takes a few seconds. A list of up to 100 goes through the bulk
              check, and you download a CSV showing each result, the sources searched and the time of the check. Every
              check stays in your account with its date, so you can show what you looked up and when.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/bulk-check">Check a list of serials</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/verify">Check one item</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What a business can use today</h2>
            <p className="text-muted-foreground mb-6">
              There is one set of tools and one price list for everyone. Nothing below needs a contract or a sales call.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Tool</th><th className="px-4 py-3 font-semibold">What it does</th><th className="px-4 py-3 font-semibold">Who gets it</th></tr>
                </thead>
                <tbody>
                  {WHAT_YOU_GET.map((r) => (
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What each check searches</h2>
            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Item</th><th className="px-4 py-3 font-semibold">Sources searched</th></tr>
                </thead>
                <tbody>
                  {SOURCES.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              Each result reads "reported stolen", "possible match" or "no report found in the records searched", and lists
              every source it checked. SafeOrStolen does not search NCIC, ATF eTrace, pawn reporting systems, DMV records,
              manufacturer databases or insurer databases. A clean result means no report turned up in those sources, not
              that the item is guaranteed clean.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A simple intake routine</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Find the number on the item itself, not the box: the nameplate, battery bay, settings screen (*#06# on a phone) or the VIN plate at the base of the windshield.</li>
              <li>Record the seller's photo ID and the number the way your state or city requires.</li>
              <li>Run the number at /verify, or save a day's intake and run it through /bulk-check.</li>
              <li>Hold anything that comes back "reported stolen" or "possible match", and call your local police non-emergency line about a stolen result.</li>
              <li>Keep the CSV or your account history with the transaction. For a customer who wants proof, add a $1.99 verification certificate.</li>
            </ol>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pages for your kind of business</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['/for-pawn-shops', 'Pawn shops', 'Counter checks, gun serials, and what the bulk CSV gives you for your files.'],
                ['/for-dealers', 'Car dealers', 'Checking trade-ins and auction buys by VIN, and what a VIN check here does not cover.'],
                ['/for-electronics-resellers', 'Electronics resellers', 'Bulk IMEI and serial checks for phone and laptop buys.'],
                ['/for-auction-houses', 'Auction houses', 'Checking a consignment list before it goes in the catalog.'],
                ['/for-marketplaces', 'Online marketplaces', 'What a marketplace can link to and ask sellers for today.'],
                ['/for-sellers', 'Sellers', 'Showing a buyer you checked an item before listing it.'],
              ].map(([to, title, text]) => (
                <Link key={to} to={to} className="block rounded-lg border border-border bg-background p-5 hover:border-primary/50">
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Try it on today's intake</h2>
            <p className="text-muted-foreground mb-6">
              Create a free account and run 2 checks. If it fits your counter, the $14.99 monthly plan covers unlimited
              checks. Questions about volume or setup: safeorstolenmail@gmail.com. SafeOrStolen is based in Seattle, WA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/bulk-check">Open the bulk check</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/pricing">See pricing</Link></Button>
              <Button size="lg" variant="outline" asChild><a href="mailto:safeorstolenmail@gmail.com">Email us</a></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
