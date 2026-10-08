import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "bulk IMEI check" for phone and electronics resellers. Removed:
 * "99% reduce stolen inventory", "50% fewer returns", "$0 legal liability", "hundreds of devices at
 * once" and Excel upload (it's up to 100 per run, .csv or .txt), a REST API, webhooks, continuous
 * blacklist monitoring and alerts, carrier status reports, team dashboards, white-label, a claim
 * that "many states require" device checks, and the shared template, whose fixed copy offered a
 * free trial and a support@ address that isn't ours.
 */

const UPDATED = 'October 7, 2026';

const DEVICE_TABLE: string[][] = [
  ['iPhone, iPad', 'Dial *#06#, or Settings > General > About. Also on the SIM tray of many models.', 'Make and model from the IMEI, theft reports, web results; blacklist on paid checks'],
  ['Android phones', 'Dial *#06#, or Settings > About phone', 'Same as iPhone'],
  ['Laptops', 'Label on the bottom; on a Mac, Apple menu > About This Mac', 'Theft reports and web results'],
  ['Game consoles', 'Sticker on the back or bottom, and in the system settings', 'Theft reports and web results'],
  ['Cameras and lenses', 'Under the body or on the lens barrel', 'Theft reports and web results'],
];

const FAQS = [
  {
    question: 'How do I run a bulk IMEI check?',
    answer:
      'Sign in to SafeOrStolen, open /bulk-check (safeorstolen.com/bulk-check), choose Phones (IMEI), and paste up to 100 IMEIs, one per line, or upload them as a .csv or .txt file. When it finishes, click Download CSV. Each row shows the IMEI, the result, the sources searched, the time of the check and a check ID.',
  },
  {
    question: 'Does the bulk check include the carrier blacklist?',
    answer:
      'On the $10 monthly plan, the first 20 phone checks each month also search the lost and stolen carrier blacklist, whether you run them one at a time or in bulk. After 20, phone checks still search theft reports and web results and show the make and model, but skip the blacklist. A $0.99 single phone check includes it. Free checks do not.',
  },
  {
    question: 'Can I check if a phone is iCloud locked or Google locked by IMEI?',
    answer:
      "Not with SafeOrStolen. It doesn't see Apple Activation Lock or Google account status, and no public IMEI lookup does reliably. Check it on the device: after a reset an iPhone that is still locked shows \"iPhone Locked to Owner\", and an Android phone asks for the previous Google account. Don't buy a device that stops at either screen.",
  },
  {
    question: 'Can I check IMEIs before I buy a lot from a supplier?',
    answer:
      'Yes. Ask the supplier for the IMEI list before you pay, run it through /bulk-check, and send back any IMEI that comes back reported stolen, reported lost or possible match. When the lot arrives, dial *#06# on a sample of phones to make sure the IMEIs on the devices match the list you checked.',
  },
  {
    question: 'Will SafeOrStolen alert me if a device I sold is reported stolen later?',
    answer:
      "No. There is no monitoring or alert service. A check shows what the sources held on the day you ran it, and that date is saved in your account. If you want to look again later, run the IMEI again; each run is a new dated check.",
  },
  {
    question: 'How much does it cost a reseller?',
    answer:
      '2 free checks with a free account, no credit card. Then $0.99 per check, or $10 a month for unlimited checks with up to 20 blacklist searches a month. Cancel anytime; the monthly plan has a 30-day refund. If you need more blacklist searches than that, email safeorstolenmail@gmail.com.',
  },
];

const ForElectronicsResellers = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Bulk IMEI and serial number checks for electronics resellers',
      serviceType: 'Stolen item check',
      url: 'https://safeorstolen.com/for-electronics-resellers',
      provider: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      description: 'Up to 100 IMEIs or serial numbers per run, with a downloadable CSV of results.',
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
        title="Bulk IMEI Check for Phone & Electronics Resellers | SafeOrStolen"
        description="Check up to 100 IMEIs or serial numbers at once for theft reports before you buy stock. Where to find each number, what the blacklist covers, and the CSV you keep."
        keywords="bulk imei check, bulk imei checker, phone reseller imei check, wholesale phone imei check, electronics reseller stolen check, bulk serial number check, check imei list"
        canonical="/for-electronics-resellers"
        modifiedTime="2026-10-07"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'For businesses', url: '/for-businesses' }, { name: 'Electronics resellers', url: '/for-electronics-resellers' }]}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <section className="px-4 py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary mb-3">For phone, laptop and electronics resellers</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Bulk IMEI Check for Resellers</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Paste up to 100 IMEIs or serial numbers into SafeOrStolen's bulk check and it searches each one against
              SafeOrStolen theft reports and public web results, and shows each phone's make and model. On the monthly
              plan, the first 20 phone checks a month also search the carrier blacklist. Download the results as a CSV and
              keep it with the purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild><Link to="/bulk-check">Check a list of IMEIs</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/imei-checker">Check one IMEI</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">2 free checks · No credit card · Updated {UPDATED}</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Where to find the number on each device</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Device</th><th className="px-4 py-3 font-semibold">Where the number is</th><th className="px-4 py-3 font-semibold">What the check shows</th></tr>
                </thead>
                <tbody>
                  {DEVICE_TABLE.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              Read the IMEI from the device itself. A box label or a supplier spreadsheet can belong to a different phone.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Checking a lot before you pay</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Get the IMEI or serial list from the supplier first. One per line, with a type and a note if you like: <code>356789012345678, phone, lot 7</code>.</li>
              <li>Upload it at /bulk-check with Phones (IMEI) or Electronics and tools selected.</li>
              <li>Pull anything marked reported stolen, reported lost or possible match out of the deal.</li>
              <li>When the stock arrives, dial *#06# on the phones and match the IMEIs to your list.</li>
              <li>Power each phone on after a reset. "iPhone Locked to Owner" or a request for the previous Google account means it can't be used. SafeOrStolen can't see those locks.</li>
              <li>File the results CSV with the invoice.</li>
            </ol>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions from resellers</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Run your next lot through it</h2>
            <p className="text-muted-foreground mb-6">
              Selling a device and want to show the buyer you checked it? A $1.99 verification certificate gives them a
              dated record with its own link, free on the monthly plan. Questions: safeorstolenmail@gmail.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><Link to="/bulk-check">Open the bulk check</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/phone-blacklist-check">About the blacklist check</Link></Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForElectronicsResellers;
