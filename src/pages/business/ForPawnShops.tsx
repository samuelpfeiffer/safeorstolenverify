import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "stolen item check for pawn shops" / "pawn shop serial number
 * check", for shop owners and counter staff. The general question "do pawn shops check if items are
 * stolen" belongs to /blog/pawn-shop-stolen-item-verification and is linked from here. Removed: POS
 * integrations (Bravo, PawnMaster and others), compliance reports "in all 50 states", a made-up
 * Sacramento case study with dollar figures, a $29/month price, "$10,000+" savings, "3 seconds",
 * employee roles, white-label, training, statute claims that a check "fulfills" state law, and App
 * Store/Google Play badges for an app that is a web app.
 */

const UPDATED = 'October 7, 2026';

const COUNTER_TABLE: string[][] = [
  ['Phones and tablets', 'IMEI: dial *#06#, or Settings > General > About (iPhone) or Settings > About phone (Android)', 'Theft reports, web results, make and model. Carrier blacklist is a separate paid check.'],
  ['Laptops, consoles, cameras', 'Label on the bottom or in the battery bay; on a laptop also in the system settings', 'Theft reports and web results'],
  ['Power tools', 'Nameplate on the motor housing; batteries and chargers have their own', 'Theft reports and web results'],
  ['Guns', 'Frame or receiver; the number on the slide or barrel can differ', 'Also police firearm theft and loss reports from 33 states and DC, live Ohio records, and an altered-serial flag'],
  ['Bikes', 'Under the bottom bracket where the pedals meet the frame', 'Also a national stolen-bicycle registry'],
  ['Vehicles, motorcycles', 'VIN plate at the base of the windshield or on the steering head', 'Year, make, model, open recalls; Arizona law-enforcement records for Arizona VINs'],
];

const FAQS = [
  {
    question: 'How can a pawn shop check if an item is stolen?',
    answer:
      "Record the seller's photo ID and the item's serial number, IMEI or VIN, report the transaction the way your state or city requires, and run the number through a stolen check before you pay. SafeOrStolen (safeorstolen.com/for-pawn-shops) checks one number at /verify or up to 100 at /bulk-check and saves a dated record of each check.",
  },
  {
    question: 'Can pawn shops look up serial numbers in NCIC?',
    answer:
      "No. NCIC, the FBI's crime records system, is open only to police and other criminal justice agencies. Pawn shops send their transaction records to local police, often through an electronic reporting system, and the police compare those records against stolen reports. A shop's own pre-purchase check, like SafeOrStolen, searches other sources and is not a substitute for that reporting.",
  },
  {
    question: 'Can a pawn shop tell if something is rented by the serial number?',
    answer:
      "Not from the serial number alone. A rent-to-own store or equipment rental company only shows up in a stolen search if it reported the item stolen to police or posted it somewhere public. Look for rental company stickers, engraved store numbers or asset tags, and ask the seller for a receipt. If it says \"property of\" a rental company, don't take it.",
  },
  {
    question: 'How does SafeOrStolen check a gun serial number for a pawn shop?',
    answer:
      'Choose Guns, or add "gun" in the type column of your bulk list. Each serial is searched against 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records and SafeOrStolen theft reports, and it is flagged if it looks altered or obliterated. It does not search NCIC or ATF eTrace, and it never replaces the NICS check on a person.',
  },
  {
    question: 'What does the bulk check give us for our records?',
    answer:
      'A CSV file named with the date, with one row per item: the number, the type, your note, the result, the message, the sources searched, the time of the check in UTC, and a check ID. The same checks are saved in your SafeOrStolen account. It is a record that you looked, not a legal document or proof of compliance.',
  },
  {
    question: 'How much does SafeOrStolen cost for a pawn shop?',
    answer:
      'Every account gets 2 free checks with no credit card. After that a single check is $3.99, or $14.99 a month for unlimited checks, which is the plan the bulk check is built for. Phone blacklist checks are capped at 20 a month on that plan. Cancel anytime; the monthly plan has a 30-day refund.',
  },
  {
    question: 'Does SafeOrStolen work with our pawn software?',
    answer:
      "There is no integration with pawn management software. The simplest routine is to export or copy the day's serial numbers from your system into a CSV, upload it at /bulk-check, and file the results CSV next to the day's tickets. If you want a direct connection, email safeorstolenmail@gmail.com and tell us which software you use.",
  },
];

export default function ForPawnShops() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Stolen item check for pawn shops',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-pawn-shops',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Single and bulk serial, gun, IMEI and VIN checks for pawn shops, with a dated record of each check.',
      offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'USD', description: 'Unlimited checks per month' },
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
        title="Stolen Item Check for Pawn Shops: Serial, Gun & IMEI | SafeOrStolen"
        description="How pawn shops check serial numbers, gun serials, IMEIs and VINs for theft reports before buying: where to find each number, bulk checks of 100 items, and the dated record."
        keywords="stolen item check for pawn shops, pawn shop serial number check, how do pawn shops check if items are stolen, pawn shop stolen gun check, pawn shop imei check, bulk serial number check pawn shop, can a pawn shop tell if something is rented by the serial number"
        canonical="/for-pawn-shops"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Pawn shops', url: '/for-pawn-shops' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For pawn shops and buy-sell-trade stores</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Stolen Item Check for Pawn Shops</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before you pay out on a pawn or a buy, run the item's serial number, IMEI or VIN through SafeOrStolen. One
              item takes a few seconds at the counter. At the end of the day, paste up to 100 numbers into the bulk check
              and download a CSV with every result and the time of each check. Guns are also searched against police theft
              reports from 33 states and DC, and flagged if the serial looks altered.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Where to find the number, and what the check covers</h2>
            <p className="text-muted-foreground mb-6">
              Take the number off the item itself. A box, a manual or a receipt can belong to a different unit.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Item</th><th className="px-4 py-3 font-semibold">Where the number is</th><th className="px-4 py-3 font-semibold">What SafeOrStolen searches</th></tr>
                </thead>
                <tbody>
                  {COUNTER_TABLE.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Every check also searches SafeOrStolen's own theft reports and public web results, such as a listing or a
              post by the owner that mentions the number. It does not search NCIC, ATF eTrace, pawn reporting systems,
              carrier records other than the paid blacklist check, or Apple and Google account locks.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How the bulk check works</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
              <li>Sign in and open /bulk-check.</li>
              <li>Pick what you're checking: Guns, Phones (IMEI), Vehicles (VIN), Electronics and tools, Bikes, or let it detect the type.</li>
              <li>Paste one number per line, or upload a .csv or .txt file. Columns are serial number, then type and a note if you want them, for example <code>356789012345678, phone, ticket 4412</code>.</li>
              <li>Watch the results fill in. Reported stolen and reported lost items are counted at the top in red.</li>
              <li>Click Download CSV and keep the file with the day's transactions.</li>
            </ol>
            <p className="text-muted-foreground">
              Each run takes up to 100 items, and each item uses one check on your account, so the bulk check is built for
              the $14.99 monthly plan. If your account runs out of checks partway, it stops and tells you.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Red flags at the counter</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>A serial plate that is scratched, sanded, painted over or replaced with a sticker.</li>
              <li>A phone that is still signed in to someone else's Apple ID or Google account, or shows "iPhone Locked to Owner".</li>
              <li>Rental company stickers, asset tags, engraved store numbers or a contractor's name on tools.</li>
              <li>Several new-in-box items of the same kind with no receipt, or the same person back every few days with more.</li>
              <li>A seller who doesn't know the passcode, the model or what the item does.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Possessing a gun with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k). Don't take one
              in, and call your local police.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What a check does not replace</h2>
            <p className="text-muted-foreground mb-4">
              Your state and city decide what you record, what you report to police and how long you hold an item before
              selling it. A SafeOrStolen check does none of that for you. It gives you one more search before you pay and a
              dated record that you ran it. The licensing agency and holding period for each state are on the{' '}
              <Link to="/state-pawnshop-laws" className="text-primary underline">state pawnshop laws page</Link>.
            </p>
            <p className="text-muted-foreground">
              Buyers often ask whether pawn shops check items at all. That is answered in{' '}
              <Link to="/blog/pawn-shop-stolen-item-verification" className="text-primary underline">how pawn shops check if items are stolen</Link>.
              For a customer who wants proof that an item they're buying from you was checked, a $1.99 verification
              certificate gives them a dated record with its own link.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from pawn shops</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Run today's intake through it</h2>
            <p className="text-muted-foreground mb-6">
              Start with 2 free checks. Counter staff can also install the free web app from safeorstolen.com/app on a shop
              phone. Questions: safeorstolenmail@gmail.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/bulk-check">Open the bulk check</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/firearms-check">Check a gun serial</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/pricing">See pricing</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
