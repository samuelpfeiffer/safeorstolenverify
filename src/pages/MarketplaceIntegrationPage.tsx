import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "add a stolen item check to a marketplace listing" (marketplace
 * integration). Removed: a REST API, webhooks ("Most Popular"), Shopify/WooCommerce/Magento plugins,
 * sandbox, "under 500ms", TLS 1.3 / IP whitelisting / key rotation, SDKs and a Postman collection,
 * batches of "1,000 items per request", "24/7", seller reputation scoring, "eBay/Amazon seller
 * requirements", an absolute canonical URL, and a support@ address that isn't ours. What's left is
 * what a marketplace can build today without anything from us, plus "email us" for the rest.
 */

const BUILD: string[][] = [
  ['Serial number field on the listing form', 'You', 'Ask for the IMEI, VIN or serial on phones, laptops, consoles, bikes, tools, guns and vehicles.'],
  ['"Check this item" button on the listing', 'You, using our check link', 'Points to safeorstolen.com/verify?q=NUMBER&type=TYPE. The check runs on SafeOrStolen.'],
  ['Certificate link field', 'You; sellers get the link from us', 'Sellers paste a SafeOrStolen certificate link (safeorstolen.com/proof/...) that shows a dated check.'],
  ['Staff review of reported listings', 'Your team, using /bulk-check', 'Paste up to 100 numbers, download a CSV with results and check times.'],
  ['Automatic checks at listing time', 'Not available', 'Needs an API, which doesn\'t exist publicly. Email safeorstolenmail@gmail.com.'],
];

const FAQS = [
  {
    question: 'How do I add a stolen item check to my marketplace?',
    answer:
      'Add a serial number, IMEI or VIN field to listings in high-theft categories, then show a "Check this item" button that links to safeorstolen.com/verify?q= plus the number. The buyer lands on SafeOrStolen (safeorstolen.com/marketplace-integration explains the options) and the check starts. No key or contract is needed. Automatic checks inside your own system aren\'t available yet.',
  },
  {
    question: 'Are there plugins for Shopify, WooCommerce or other platforms?',
    answer:
      'No. SafeOrStolen has no plugins, apps or embeddable widgets for e-commerce platforms. Any platform that lets you add a link to a product or listing page can use the check link, which is a plain URL with the number in it. If you want a plugin for a specific platform, tell us which one at safeorstolenmail@gmail.com.',
  },
  {
    question: 'Can SafeOrStolen send us a webhook when a listed item is reported stolen?',
    answer:
      "No. There are no webhooks or monitoring. A check reflects the sources on the day it runs. If your team wants to recheck listings, put their numbers in a CSV and run them through /bulk-check, up to 100 per run; each run is a new dated check with its own time in the results file.",
  },
  {
    question: 'Should we show a "verified" badge on listings that pass?',
    answer:
      'We advise against it. A clean result means "no report found in the records searched" on that date, not that the item is not stolen, and many thefts are never reported. Showing the seller\'s certificate link is more honest: it gives the date, the result and the sources searched, and buyers can read it themselves.',
  },
  {
    question: 'What does a buyer pay when they click the check link?',
    answer:
      'Visitors get 2 free checks. After that a check is $3.99, or $14.99 a month for unlimited checks with up to 20 phone blacklist checks a month. Your marketplace pays nothing for the link. If you want to cover checks for your buyers, email safeorstolenmail@gmail.com.',
  },
];

export default function MarketplaceIntegrationPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to add a stolen item check to a marketplace',
      description: 'Check links, certificate links and bulk checks a marketplace can use today, and what is not available.',
      author: { '@type': 'Organization', name: 'SafeOrStolen' },
      publisher: { '@type': 'Organization', name: 'SafeOrStolen' },
      dateModified: '2026-10-07',
      mainEntityOfPage: 'https://safeorstolen.com/marketplace-integration',
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
        title="Add a Stolen Item Check to Your Marketplace | SafeOrStolen"
        description="How a marketplace or online store can add a stolen item check today: a serial number field, a check link per listing, seller certificate links and bulk review. No plugins or API yet."
        keywords="marketplace integration stolen item check, add stolen check to marketplace, marketplace stolen item verification, listing serial number check link, e-commerce stolen goods check"
        canonical="/marketplace-integration"
        modifiedTime="2026-10-07"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-3xl mx-auto px-4 py-14">
          <p className="text-sm font-semibold text-primary mb-3">For marketplace and e-commerce developers</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Add a Stolen Item Check to Your Marketplace</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You can add a stolen item check to listings today with a plain link. Collect the serial number, IMEI or VIN on
            the listing, then add a "Check this item" button that points to safeorstolen.com/verify with the number in the
            URL. The buyer lands on SafeOrStolen and the check starts. There is no API, plugin or webhook yet; for those,
            email safeorstolenmail@gmail.com.
          </p>
          <p className="text-sm text-muted-foreground mb-12">Updated October 7, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What you can build, and who does each part</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Piece</th><th className="px-4 py-3 font-semibold">Who builds it</th><th className="px-4 py-3 font-semibold">How</th></tr>
                </thead>
                <tbody>
                  {BUILD.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The check button</h2>
            <p className="text-muted-foreground mb-4">
              Build the link from the number the seller entered. URL-encode it, and add the type when you know it: imei,
              vin, gun, bike or plate.
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-4">{`<a href="https://safeorstolen.com/verify?q=356789012345678&type=imei"
   rel="nofollow">Check if this phone is reported stolen</a>`}</pre>
            <p className="text-muted-foreground">
              Show the button only when the listing has a number, and label it plainly. The result appears on SafeOrStolen
              as "reported stolen", "possible match" or "no report found in the records searched", with the sources listed.
              The same link format is described on the <Link to="/api" className="text-primary underline">API page</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Seller certificate links</h2>
            <p className="text-muted-foreground">
              Add an optional field where a seller can paste a SafeOrStolen certificate link. A seller gets one by checking
              the item and adding a $1.99 verification certificate. The page at that link shows the check date, the result,
              the sources searched and only the last four characters of the number, so the full IMEI or serial isn't
              published. Only accept links that start with safeorstolen.com/proof/. Sellers can read{' '}
              <Link to="/for-sellers" className="text-primary underline">how it works for them</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">For your trust and safety team</h2>
            <p className="text-muted-foreground">
              When listings are reported, export their numbers to a .csv file (number, type, note such as the listing ID) and
              run it through the <Link to="/bulk-check" className="text-primary underline">bulk check</Link>. Up to 100 rows
              per run; the results CSV has the result, sources searched and check time for each row. Policy questions, like
              which categories to require numbers for, are covered on the{' '}
              <Link to="/for-marketplaces" className="text-primary underline">marketplaces page</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Common questions</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.question} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-semibold mb-2">{f.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg bg-primary/5 p-6 text-center">
            <h2 className="text-2xl font-bold mb-3">Want a deeper integration?</h2>
            <p className="text-muted-foreground mb-6">
              Tell us your platform, your item categories and roughly how many listings a month at safeorstolenmail@gmail.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><a href="mailto:safeorstolenmail@gmail.com">Email us</a></Button>
              <Button size="lg" variant="outline" asChild><Link to="/for-marketplaces">Marketplace guide</Link></Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
