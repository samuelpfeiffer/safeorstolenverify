import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

/**
 * Oct 7 2026: rewritten by hand for "stolen item check API" (IMEI, VIN and serial number API).
 * Served at /api and /api-docs. The old page documented an API that does not exist: a base URL on
 * an api. subdomain, POST /verify/imei, /verify/vin and /verify/serial endpoints, API keys from an
 * "API Keys" dashboard menu, rate limits of 1,000 calls a day, Enterprise plans, sample responses
 * with salvage, odometer and "sources_checked: 47", SDK-style code samples, a docs subdomain, a
 * Slack channel and four-hour support times. This version describes only the three ways to connect
 * that work today: the check link, the bulk CSV, and certificate links.
 */

const LINK_PARAMS: string[][] = [
  ['q', 'The serial number, IMEI, VIN or plate to check', 'q=356789012345678'],
  ['type', 'Optional hint: imei or phone, vin or vehicle, gun or firearm, bike or bicycle, plate, tablet, motorcycle', 'type=imei'],
];

const CSV_IN: string[][] = [
  ['1. Identifier', 'Required. The serial number, IMEI, VIN or plate. Rows shorter than 3 characters are skipped.'],
  ['2. Type', 'Optional. Words like gun, rifle, phone, iphone, vin, car, plate, bike, laptop, tool or camera. Blank rows use the type picked on the page.'],
  ['3. Note', 'Optional. Your own reference, such as a ticket, lot or claim number. Comes back unchanged.'],
];

const CSV_OUT: string[][] = [
  ['Identifier', 'The number as you sent it'],
  ['Type', 'The item type used, or auto'],
  ['Note', 'Your note'],
  ['Result', 'REPORTED STOLEN, REPORTED LOST, NO REPORT FOUND, NOT CONFIRMED or ERROR'],
  ['Message', 'The plain-language result text'],
  ['Sources searched', 'Every source the check ran against, separated by semicolons'],
  ['Checked at (UTC)', 'Date and time of the check'],
  ['Check ID', 'The ID of the saved check in your account'],
];

const FAQS = [
  {
    question: 'Does SafeOrStolen have an API?',
    answer:
      'Not a public one. There are no API keys, endpoints or SDKs to sign up for today. What works now: a check link that starts a check from your site (safeorstolen.com/verify?q=NUMBER), the bulk check at safeorstolen.com/bulk-check that takes a CSV of up to 100 numbers and returns a results CSV, and certificate links for single checks. For programmatic access, email safeorstolenmail@gmail.com.',
  },
  {
    question: 'Is there an IMEI check API?',
    answer:
      "Not from SafeOrStolen. To check IMEIs in volume, upload them to the bulk check as a .csv file and download the results. Each phone check shows the make and model and searches SafeOrStolen theft reports and web results. On the $10 monthly plan, the first 20 phone checks each month also search the lost and stolen carrier blacklist.",
  },
  {
    question: 'Is there a VIN stolen check API?',
    answer:
      'Not a public one. VINs can go through the bulk check in a CSV, up to 100 at a time. Each VIN check decodes the year, make and model, lists open safety recalls, and searches SafeOrStolen theft reports, web results and, for Arizona VINs, Arizona law-enforcement stolen-vehicle records. It does not return title, odometer or lien data.',
  },
  {
    question: 'Can I link to a SafeOrStolen check from my website?',
    answer:
      'Yes. Link to safeorstolen.com/verify?q= followed by the number, and add &type=imei, vin, gun, bike or plate if you know the type. The visitor lands on SafeOrStolen and the check starts. Visitors get 2 free checks; after that they sign up or pay. Nothing on your side needs a key.',
  },
  {
    question: 'How much would API access cost?',
    answer:
      "There is no API price list because there is no public API. Today's prices are 2 free checks, $0.99 per check, or $10 a month for unlimited checks with up to 20 blacklist checks a month. If you need checks to run from your own system, email safeorstolenmail@gmail.com with your item types and monthly volume.",
  },
];

export default function APIPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SafeOrStolen API: what is available for stolen item checks',
      description: 'The check link, bulk CSV format and certificate links that connect to SafeOrStolen today, and how to ask about programmatic access.',
      author: { '@type': 'Organization', name: 'SafeOrStolen' },
      publisher: { '@type': 'Organization', name: 'SafeOrStolen' },
      datePublished: '2026-01-15',
      dateModified: '2026-10-07',
      mainEntityOfPage: 'https://safeorstolen.com/api',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ];

  const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/60">
          <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-border">
              {r.map((c, i) => <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-medium font-mono' : 'text-muted-foreground'}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <PageSEO
        title="SafeOrStolen API: Stolen Item Check by IMEI, VIN or Serial"
        description="Is there a SafeOrStolen API? Not a public one yet. Here is what works today: a check link for your site, the bulk CSV format for 100 numbers, certificate links, and who to email."
        keywords="stolen item check api, imei check api, vin stolen check api, serial number check api, stolen phone api, safeorstolen api, bulk imei check csv"
        canonical="/api"
        modifiedTime="2026-10-07"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-3xl mx-auto px-4 py-14">
          <p className="text-sm font-semibold text-primary mb-3">For developers and businesses</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">SafeOrStolen API: What's Available</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            SafeOrStolen does not offer a public API with keys today. There are three ways to connect that work now: a
            check link that starts a check from your own site, the bulk check that takes a CSV of up to 100 serial numbers,
            IMEIs or VINs and returns a results CSV, and certificate links that show a single dated check. For programmatic
            access, email safeorstolenmail@gmail.com.
          </p>
          <p className="text-sm text-muted-foreground mb-12">Updated October 7, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Check link</h2>
            <p className="text-muted-foreground mb-4">
              Send people from your listing, inventory page or app to a check that starts on its own. The format is:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-4">https://safeorstolen.com/verify?q=356789012345678&amp;type=imei</pre>
            <Table head={['Parameter', 'What it is', 'Example']} rows={LINK_PARAMS} />
            <p className="text-muted-foreground mt-4">
              The visitor sees the result on SafeOrStolen, not on your site. Visitors get 2 free checks without paying; after
              that they create an account and pay $0.99 a check or $10 a month.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Bulk check: CSV in, CSV out</h2>
            <p className="text-muted-foreground mb-4">
              Signed-in users open <Link to="/bulk-check" className="text-primary underline">/bulk-check</Link>, paste
              numbers or upload a .csv or .txt file, and download the results. Up to 100 rows per run. Fields can be
              separated by commas or tabs and quoted. A first row starting with identifier, serial, imei, vin or id is
              treated as a header and skipped.
            </p>
            <h3 className="font-semibold mb-2">Input columns</h3>
            <Table head={['Column', 'Contents']} rows={CSV_IN} />
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm my-4">{`identifier,type,note
356789012345678,phone,ticket 4412
1HGBH41JXMN109186,vehicle,lot 212
ABC123456,gun,ticket 4413`}</pre>
            <h3 className="font-semibold mb-2">Output columns</h3>
            <Table head={['Column', 'Contents']} rows={CSV_OUT} />
            <p className="text-muted-foreground mt-4">
              Each row uses one check on the account, so this is built for the $10 monthly plan. If the account runs out
              of checks, the run stops and says so. Every check is also saved to the account with its date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Certificate links</h2>
            <p className="text-muted-foreground">
              After a single check, the user can add a $1.99 verification certificate (free on the monthly plan) within 30
              days. It lives at its own link on safeorstolen.com/proof/ and shows the check date, category, result, the last
              four characters of the number, the sources searched and a SHA-256 record hash. You can store or display that
              link next to an item. See <Link to="/for-sellers" className="text-primary underline">how sellers use it</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What a check searches</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Every check: SafeOrStolen theft reports and public web results that mention the number.</li>
              <li>Guns: also 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio records, and a flag for altered or obliterated serials.</li>
              <li>Bikes: also a national stolen-bicycle registry.</li>
              <li>Phones: make and model from the IMEI; the carrier blacklist on paid checks.</li>
              <li>Vehicles: decoded year, make and model, open recalls, and Arizona law-enforcement records for Arizona VINs and plates.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Not searched: NCIC, ATF eTrace, DMV or MVD records, Apple and Google account status, manufacturer, pawn or
              insurer databases.
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
            <h2 className="text-2xl font-bold mb-3">Need checks to run from your system?</h2>
            <p className="text-muted-foreground mb-6">
              Email safeorstolenmail@gmail.com with what you check, roughly how many a month, and how you'd want results
              back. Marketplaces can also read <Link to="/marketplace-integration" className="text-primary underline">marketplace integration</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild><a href="mailto:safeorstolenmail@gmail.com">Email us</a></Button>
              <Button size="lg" variant="outline" asChild><Link to="/bulk-check">Open the bulk check</Link></Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
