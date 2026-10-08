import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "how to stop stolen goods on an online marketplace", for
 * marketplace operators and trust and safety staff. The technical "how do we connect it" question
 * lives on /marketplace-integration. Removed: a REST API, sandbox, webhooks, badges, usage dashboard
 * and "dedicated integration support team" (none exist); "reduce fraud by up to 85%", "40% higher
 * engagement", "25% faster", "60% less moderation", "under 3 seconds"; a partnerships@ address; and
 * the shared template, whose fixed copy offered a free trial and a support@ address that isn't ours.
 */

const UPDATED = 'October 7, 2026';

const OPTIONS: string[][] = [
  ['Ask for the number in the listing form', 'A field for the serial number, IMEI or VIN on phones, laptops, bikes, tools, guns and vehicles', 'Your own form; nothing needed from us'],
  ['Link the listing to a check', 'A "Check this item" link to safeorstolen.com/verify?q=NUMBER&type=imei (or vin, gun, bike, plate). The buyer lands on SafeOrStolen and the check starts.', 'Available now'],
  ['Ask sellers for a certificate link', 'The seller runs a check and adds a $1.99 verification certificate. Its link shows the date, the last four characters of the number, the result and the sources searched.', 'Available now'],
  ['Review a batch of listings', 'Staff paste up to 100 numbers into /bulk-check and download a CSV of results.', 'Available now, on the $14.99/month plan'],
  ['Automatic checks through an API', 'Checks run from your own systems at listing time', 'Not available today. Email safeorstolenmail@gmail.com.'],
];

const FAQS = [
  {
    question: 'How can an online marketplace stop people selling stolen goods?',
    answer:
      'Ask for the serial number, IMEI or VIN on high-theft categories, show it to buyers, and let them check it before they pay. SafeOrStolen (safeorstolen.com/for-marketplaces) supports this today with a check link that starts from your listing, seller certificates with their own link, and bulk checks of up to 100 numbers for staff reviewing reports.',
  },
  {
    question: 'Which listings should require a serial number?',
    answer:
      'Start with items that are stolen often and carry a unique number: phones and tablets (IMEI), laptops, game consoles, cameras, power tools, bikes and e-bikes, guns where your rules allow them, and vehicles (VIN). A listing that hides or blurs the number on one of these is a common warning sign, and asking for it up front also helps honest sellers.',
  },
  {
    question: 'Does SafeOrStolen have an API for marketplaces?',
    answer:
      'Not a public one. There are no API keys, webhooks, plugins or verified-listing badges today. What works now is linking listings to safeorstolen.com/verify with the number in the link, asking sellers for a certificate link, and bulk checks for your staff. If your marketplace needs automatic checks, email safeorstolenmail@gmail.com with your categories and volume.',
  },
  {
    question: 'What does a SafeOrStolen check search?',
    answer:
      "Every check searches SafeOrStolen's own theft reports and public web results that mention the number. Guns also go against police firearm theft and loss reports from 33 states and Washington, DC and live Ohio records, bikes against a national stolen-bicycle registry, and Arizona VINs and plates against Arizona law-enforcement records. It does not search NCIC, carrier records other than a paid blacklist check, or Apple and Google account locks.",
  },
  {
    question: 'Does a clean check mean a listing is safe?',
    answer:
      'No. "No report found in the records searched" means no theft report turned up in those sources on that date. Many thefts are never reported anywhere public. Treat it as one signal next to account age, price, photos that show the number, and how the seller handles questions, not as a reason to label a listing verified.',
  },
  {
    question: 'What should a marketplace do with a listing that comes back reported stolen?',
    answer:
      'Take the listing down under your own policy, keep the listing details and the check result, and follow your process for law enforcement requests. A "possible match" is weaker: it means a source mentions a similar number, so look at what the result shows before acting. Don\'t forward the buyer or seller to the theft victim yourself.',
  },
];

export default function ForMarketplaces() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Stolen item checks for online marketplaces',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-marketplaces',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Check links, seller certificates and bulk checks that help marketplaces keep stolen items off their listings.',
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
        title="How Marketplaces Can Stop Stolen Goods Listings | SafeOrStolen"
        description="What an online marketplace can do today to keep stolen phones, bikes, tools and cars off its listings: serial number fields, check links, seller certificates and bulk checks."
        keywords="stolen goods online marketplace, how to stop stolen goods on marketplace, marketplace stolen item check, marketplace trust and safety stolen goods, stolen item listing check, seller serial number verification"
        canonical="/for-marketplaces"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Marketplaces', url: '/for-marketplaces' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For online marketplaces and classifieds sites</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">How Marketplaces Can Keep Stolen Goods Off Their Listings</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The most useful step is to make the serial number, IMEI or VIN part of the listing on high-theft items, then
              let buyers check it before they pay. SafeOrStolen supports that today with a check link your listing can
              point to, seller certificates with their own link, and a bulk check for staff who review reported listings.
              There is no public API yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/marketplace-integration">See how to connect it</Link></Button>
              <Button size="lg" variant="outline" asChild><a href="mailto:safeorstolenmail@gmail.com">Email us</a></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What a marketplace can do, and what's available</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Step</th><th className="px-4 py-3 font-semibold">How it works</th><th className="px-4 py-3 font-semibold">Status</th></tr>
                </thead>
                <tbody>
                  {OPTIONS.map((r) => (
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Listing patterns worth a second look</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Photos that crop out or blur the serial plate, the IMEI on the box, or the VIN.</li>
              <li>A phone listed as "iCloud locked", "for parts" or "no passcode" at a near-new price.</li>
              <li>The same seller posting several new-in-box tools or phones of one model every week.</li>
              <li>Bikes with the frame number area painted over or scratched.</li>
              <li>Sellers who refuse to share the number before a meetup but insist on cash.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Buyers on your site can check a single listing with the{' '}
              <Link to="/marketplace-url-checker" className="text-primary underline">listing checker</Link>, and sellers who
              want to show they checked can follow the <Link to="/for-sellers" className="text-primary underline">seller guide</Link>.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from marketplaces</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Talk to us about your categories</h2>
            <p className="text-muted-foreground mb-6">
              Tell us which item types you list and roughly how many a month: safeorstolenmail@gmail.com. SafeOrStolen is
              based in Seattle, WA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><a href="mailto:safeorstolenmail@gmail.com">Email us</a></Button>
              <Button size="lg" variant="outline" asChild><Link to="/bulk-check">Try the bulk check</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
