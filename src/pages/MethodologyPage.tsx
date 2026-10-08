/**
 * Oct 7 2026: rewritten by hand for "how does SafeOrStolen work" / "SafeOrStolen methodology". No
 * Search Console data for this URL. Describes the actual result rules (only theft records can produce
 * "reported stolen"; web mentions can only produce "possible match"; plain-language notes never
 * decide a result). Removed: "insurance-related records" and "participating theft registries"
 * (not searched), "AI analysis" as a source, the five-status list that didn't match what users see.
 * How to act on each result lives on /blog/verification-methodology.
 */
import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';

const MODIFIED = '2026-10-07';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How SafeOrStolen Works: How a Stolen Check Reaches Its Result',
  description:
    'The rules SafeOrStolen uses to decide whether a check says reported stolen, possible match, or no report found, which records each item type is searched against, and what a check cannot establish.',
  author: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    url: 'https://safeorstolen.com',
    logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/sos-logo.png' },
  },
  datePublished: '2026-08-08',
  dateModified: MODIFIED,
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safeorstolen.com/methodology' },
  url: 'https://safeorstolen.com/methodology',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
    { '@type': 'ListItem', position: 2, name: 'How SafeOrStolen works', item: 'https://safeorstolen.com/methodology' },
  ],
};

const STEPS: string[] = [
  'You enter an IMEI, VIN, plate and state, or serial number, and pick the item type.',
  'SafeOrStolen checks the format, for example 15 digits for an IMEI or 17 characters for a VIN, so a typo is flagged and you are asked to re-enter it.',
  'It searches every source that applies to that item type at the same time (see the table below).',
  'Each source reports back on its own: a theft report found, nothing found, or no answer.',
  'The result is decided by the rules in the next section and shown with every source listed.',
  'If you are signed in, the check is saved to your account with the date and time.',
];

const SOURCES: { item: string; sources: string }[] = [
  { item: 'Every item', sources: "SafeOrStolen's own theft reports (filed by owners on the site) and public web results that mention the number" },
  { item: 'Guns', sources: '242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, and a check for serials that look altered or obliterated' },
  { item: 'Bikes', sources: 'A national stolen-bicycle registry' },
  { item: 'Phones', sources: 'Make and model decoded from the IMEI. The carrier lost/stolen blacklist is searched on a paid blacklist check' },
  { item: 'Vehicles (VIN)', sources: 'Year, make and model decoded, open safety recalls listed. Arizona VINs also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day' },
  { item: 'License plates', sources: 'SafeOrStolen theft reports. Arizona plates also searched against Arizona law-enforcement records. Owner names are never shown' },
];

const RULES: { label: string; rule: string }[] = [
  {
    label: 'Reported stolen',
    rule: 'Shown only when a theft record (a police record, the stolen-bicycle registry, the carrier blacklist, or a SafeOrStolen owner report) matches the number. The result names which record matched. A web page mentioning the number can never produce this result on its own.',
  },
  {
    label: 'Possible match',
    rule: 'Shown when something worth reading turned up but no theft record matched: for example, a public post or listing that mentions the same number, or a gun serial that looks altered. It is a lead, not an accusation. Open the details and judge it yourself.',
  },
  {
    label: 'No report found in the records searched',
    rule: 'Shown when none of the sources matched. It means exactly that, and is not a guarantee the item was never stolen. The result names the sources that actually answered, so a source that could not be reached is never counted as clean.',
  },
];

const LIMITS: string[] = [
  'It does not search NCIC, ATF eTrace, DMV or MVD records, or manufacturer, pawn or insurer databases. Only police can search NCIC.',
  "It cannot see Apple's Activation Lock or a Google account lock. You check those in person by having the seller sign out and erase the device.",
  'It does not establish ownership or title, and it does not check whether an item is genuine or counterfeit.',
  'It cannot find a theft that was never reported, or reported only to a police department whose records it does not search.',
  'Records change. A result reflects the sources on the date of the check, which is why the date is saved with it.',
];

const FAQS = [
  {
    q: 'How does SafeOrStolen decide an item is stolen?',
    a: 'SafeOrStolen (safeorstolen.com/methodology) only says "reported stolen" when a theft record matches the exact number you entered: a police record, the national stolen-bicycle registry, the carrier blacklist, or an owner\'s theft report on SafeOrStolen. Web mentions and plain-language notes can raise a "possible match" but can never make an item "reported stolen" on their own.',
  },
  {
    q: 'Does SafeOrStolen use AI to decide if something is stolen?',
    a: 'No. Some results include a short plain-language note to help you read them, but that note never decides the result. Only a matching theft record can produce "reported stolen", and only a check where no source matched produces "no report found". The same set of source answers always gives the same result.',
  },
  {
    q: "What's the difference between 'possible match' and 'reported stolen'?",
    a: '"Reported stolen" means a theft record matched the number. "Possible match" means something turned up that deserves a look, such as a forum post or listing mentioning the same serial, or a gun serial that appears altered, but no theft record matched. Read the details before deciding, and ask the police if it involves a gun or car.',
  },
  {
    q: 'What is saved when I run a check?',
    a: 'Signed-in checks are saved to your account with the item type, the result, the sources searched, and the date and time. If you add a $1.99 verification certificate (free on the monthly plan), you get a dated record with its own link that shows only the last four characters of the number, so you can share it without publishing the full serial.',
  },
];

const MethodologyPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <PageSEO
        title="How SafeOrStolen Works: How a Check Reaches Its Result"
        description="How SafeOrStolen decides between reported stolen, possible match and no report found, which records each item is searched against, and what a check can't tell you."
        keywords="how does SafeOrStolen work, SafeOrStolen methodology, how stolen checks work, what does possible match mean, stolen check result"
        canonical="/methodology"
        type="article"
        publishedTime="2026-08-08"
        modifiedTime={MODIFIED}
        structuredData={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">How SafeOrStolen Works</h1>
            <p className="text-sm text-muted-foreground mb-8">Updated October 7, 2026</p>

            <section aria-label="Quick answer" className="rounded-xl border-2 border-primary/40 bg-card/60 p-6 mb-10">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                SafeOrStolen searches the number you enter, an IMEI, VIN, plate or serial, against its own theft reports, public web
                results, and extra records for guns, bikes, phones and Arizona vehicles. It says "reported stolen" only when a theft
                record matches that exact number. Web mentions can only raise a "possible match". If nothing matches, it says "no
                report found in the records searched" and lists every source it checked.
              </p>
            </section>

            <h2 className="text-2xl font-bold mt-12 mb-4">What happens when you run a check</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              {STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4">Which records each item is searched against</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 font-semibold text-foreground">Item</th>
                    <th className="py-3 font-semibold text-foreground">Sources</th>
                  </tr>
                </thead>
                <tbody>
                  {SOURCES.map((row) => (
                    <tr key={row.item} className="border-b border-border/50 align-top">
                      <td className="py-3 pr-4 text-foreground whitespace-nowrap">{row.item}</td>
                      <td className="py-3 text-muted-foreground">{row.sources}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-sm mt-3">
              More on each source: <Link to="/data-sources" className="text-primary underline">data sources</Link>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">The rules behind each result</h2>
            <dl className="space-y-5">
              {RULES.map((r) => (
                <div key={r.label} className="rounded-lg border border-border bg-card/40 p-5">
                  <dt className="font-semibold text-foreground mb-2">{r.label}</dt>
                  <dd className="text-muted-foreground">{r.rule}</dd>
                </div>
              ))}
            </dl>
            <p className="text-muted-foreground mt-4">
              Some results also carry a short plain-language note to help you read them. The note is advice only and never changes
              the result. If a source reports the item as lost rather than stolen, the result says that.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">What a check can't tell you</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              {LIMITS.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Questions about how it works</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mt-10">
              What to do after each kind of result is covered in{' '}
              <Link to="/blog/verification-methodology" className="text-primary underline font-medium">
                how to read a stolen check result
              </Link>
              .
            </p>

            <div className="mt-8 rounded-xl border border-border bg-card/50 p-6">
              <p className="text-foreground font-semibold mb-3">Run a check</p>
              <p className="text-muted-foreground mb-4">Your first 2 checks are free with an account, no credit card.</p>
              <Link
                to="/verify"
                className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                Check an item
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default MethodologyPage;
