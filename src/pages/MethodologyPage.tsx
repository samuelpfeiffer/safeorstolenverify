import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const PUBLISHED = '2026-08-08';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How SafeOrStolen Verification Works — Methodology',
  description:
    'How SafeOrStolen verifies secondhand property: what we check, what results mean, and what a verification cannot establish.',
  author: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    url: 'https://safeorstolen.com',
    logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/sos-logo.png' },
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://safeorstolen.com/methodology',
  },
  url: 'https://safeorstolen.com/methodology',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Verification Methodology',
      item: 'https://safeorstolen.com/methodology',
    },
  ],
};

const STEPS: string[] = [
  'The user submits an identifier, or a marketplace listing URL the platform analyzes to locate one.',
  'SafeOrStolen determines the applicable property category.',
  'Available data sources for that category are queried.',
  'Results are evaluated and consolidated.',
  'A verification result is returned, typically in a few seconds.',
  'A timestamped Verification Record is generated.',
];

const IDENTIFIERS: { category: string; identifier: string; note: string }[] = [
  {
    category: 'Phones and cellular devices',
    identifier: 'IMEI',
    note: '15 digits. Dial *#06# on the handset to display it.',
  },
  {
    category: 'Vehicles',
    identifier: 'VIN',
    note: '17 characters. Found on the dashboard, door jamb, title, and insurance documents.',
  },
  {
    category: 'License plates',
    identifier: 'Plate number and issuing state',
    note: 'Both are required — plate formats repeat across states.',
  },
  {
    category: 'Electronics, tools, and serialized property',
    identifier: 'Manufacturer serial number',
    note: 'Printed or engraved on the housing, base plate, or inside a battery compartment.',
  },
  {
    category: 'Firearms',
    identifier: 'Serial number',
    note: 'Stamped or engraved on the frame or receiver.',
  },
  {
    category: 'Bicycles',
    identifier: 'Frame serial number',
    note: 'Usually stamped under the bottom bracket where the crank arms meet the frame.',
  },
];

const RESULTS: { status: string; label: string; body: string }[] = [
  {
    status: 'stolen',
    label: 'Stolen',
    body: 'At least one source returned a matching stolen report for the submitted identifier. This is the strongest signal the platform produces and the transaction should not proceed. Contact local law enforcement rather than confronting the seller.',
  },
  {
    status: 'lost',
    label: 'Lost',
    body: 'At least one source returned a matching lost-property report, and no stolen report was matched. An item can be reported lost and later recovered, or reported lost when the owner suspects theft but cannot confirm it. Treat it as unresolved and ask the seller for proof of purchase.',
  },
  {
    status: 'safe',
    label: 'Safe',
    body: 'One or more sources were successfully checked and none returned a matching theft or loss report. This means no matching report was found in the sources checked at the time of the check. It is not proof that the item was never stolen.',
  },
  {
    status: 'unknown',
    label: 'Unknown',
    body: 'No source returned a usable answer for this identifier — for example, coverage does not extend to the category or jurisdiction, or a source was unavailable. An unknown result is not a clean result. Nothing was confirmed either way, and the check should be repeated or supplemented with other due diligence.',
  },
  {
    status: 'error',
    label: 'Error',
    body: 'The check could not be completed, typically because the identifier was malformed or a request failed. Correct the identifier and run the check again. An error result carries no information about the item.',
  },
];

const LIMITS: string[] = [
  'A result does not establish legal ownership or clear title.',
  'A result does not establish authenticity or confirm an item is not counterfeit.',
  'A result does not prove an item was never stolen — only that no matching report was found in the sources checked.',
  'Coverage varies by category and jurisdiction. Not all thefts are reported, and not all reports reach searchable sources.',
  'Records change. A result reflects the sources at the time of the check.',
  'SafeOrStolen is not law enforcement and does not query law-enforcement-restricted systems.',
];

const MethodologyPage = () => {
  return (
    <>
      <PageSEO
        title="How SafeOrStolen Verification Works — Methodology"
        description="How SafeOrStolen verifies secondhand property: what we check, what results mean, and what a verification cannot establish."
        canonical="/methodology"
        type="article"
        publishedTime={PUBLISHED}
        modifiedTime={PUBLISHED}
        structuredData={[articleSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        <TopNavigation />

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Verification Methodology
            </h1>

            <section
              aria-label="Quick answer"
              className="rounded-xl border-2 border-primary/40 bg-card/60 p-6 mb-10"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-3">
                Quick answer
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                SafeOrStolen verifies secondhand property by checking submitted identifiers against
                available stolen-property reports, carrier and manufacturer blacklists,
                insurance-related records, and participating theft registries. Every check produces
                a timestamped Verification Record. A verification indicates whether a matching
                stolen report was found — it does not establish legal ownership, title, or
                authenticity.
              </p>
            </section>

            <h2 className="text-2xl font-bold mt-12 mb-4">How a verification works</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              {STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4">Supported identifiers</h2>
            <p className="text-muted-foreground mb-4">
              Each property category is verified using a different identifier. Collect the correct
              one before running a check.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 font-semibold text-foreground">Category</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Identifier</th>
                    <th className="py-3 font-semibold text-foreground">Where to find it</th>
                  </tr>
                </thead>
                <tbody>
                  {IDENTIFIERS.map((row) => (
                    <tr key={row.category} className="border-b border-border/50 align-top">
                      <td className="py-3 pr-4 text-foreground">{row.category}</td>
                      <td className="py-3 pr-4 text-foreground">{row.identifier}</td>
                      <td className="py-3 text-muted-foreground">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">What verification results mean</h2>
            <p className="text-muted-foreground mb-4">
              A completed check returns one of five statuses. Each one means something specific.
            </p>
            <dl className="space-y-5">
              {RESULTS.map((r) => (
                <div key={r.status} className="rounded-lg border border-border bg-card/40 p-5">
                  <dt className="font-semibold text-foreground mb-2">
                    {r.label}{' '}
                    <span className="font-mono text-xs text-muted-foreground">({r.status})</span>
                  </dt>
                  <dd className="text-muted-foreground">{r.body}</dd>
                </div>
              ))}
            </dl>

            <h2 className="text-2xl font-bold mt-12 mb-4">What SafeOrStolen cannot establish</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              {LIMITS.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Verification Records</h2>
            <p className="text-muted-foreground">
              Every completed check generates a Verification Record. A record contains a reference
              number, the item category, a masked version of the submitted identifier, the result,
              and the date and time of the check. The identifier is masked so a record can be shared
              without publishing a full serial number, IMEI, or VIN.
            </p>
            <p className="text-muted-foreground mt-4">
              Records exist to make a check reviewable after the fact. For a buyer, a record
              documents that due diligence was performed before payment. For a seller, it is
              evidence of provenance that can be shown to a prospective buyer without handing over
              the full identifier. For pawn shops, dealers, and resellers, it is an auditable
              artifact that can be retained alongside intake paperwork.
            </p>

            <p className="text-muted-foreground mt-4">
              For a practical walkthrough of verifying an item before buying it, see{' '}
              <Link to="/learn" className="text-primary underline font-medium">
                the secondhand verification guide
              </Link>
              .
            </p>

            <div className="mt-12 rounded-xl border border-border bg-card/50 p-6">
              <p className="text-foreground font-semibold mb-3">Run a verification</p>
              <p className="text-muted-foreground mb-4">
                Submit an identifier or a marketplace listing URL and get a result in a few seconds.
              </p>
              <Link
                to="/verify"
                className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                Verify an item
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MethodologyPage;
