import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

const PUBLISHED = '2026-08-08';

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'How can I check if a used item is stolen?',
    answer:
      "Get the item's unique identifier from the seller — an IMEI for a phone, a VIN for a vehicle, a plate number and state for a license plate, or a serial number for electronics, tools, firearms, and bicycles — and check that identifier against stolen-property records before you pay. SafeOrStolen accepts any of these identifiers, determines the property category, checks available sources, and returns a result in a few seconds along with a timestamped Verification Record. A result indicates whether a matching stolen report was found; it does not establish legal ownership or authenticity.",
  },
  {
    question: "How do I verify something I'm buying on Facebook Marketplace?",
    answer:
      'Ask the seller for the identifier and a photo of it on the item itself, then check that identifier before you meet. You can also paste the Facebook Marketplace listing URL into SafeOrStolen, which reads the publicly visible listing, locates any item information and identifiers it contains, and runs the appropriate verification. Confirm in person that the identifier on the item matches what the seller sent, and meet in a public place.',
  },
  {
    question: 'Where can I check a serial number?',
    answer:
      'You can check a serial number at SafeOrStolen. Enter the manufacturer serial number from a laptop, camera, power tool, instrument, bicycle frame, or firearm, and it is checked against available stolen-property reports and participating theft registries. The result reports whether a matching stolen report was found in the sources checked, and a timestamped Verification Record is generated for the check.',
  },
  {
    question: 'What should I do before buying a used phone?',
    answer:
      'Ask the seller to dial *#06# on the handset and send a photo of the 15-digit IMEI it displays, then check that IMEI before you pay. A phone can also be barred from cellular networks because of a carrier report or unpaid finance, which makes it close to worthless even if no theft was ever reported, so check blacklist status as well as theft records. Confirm the IMEI on the physical handset matches the one you were sent, and confirm any account or activation lock has been removed.',
  },
  {
    question: 'How can a seller prove an item is legitimate?',
    answer:
      'A seller can run their own item through SafeOrStolen and share the resulting Verification Record with buyers. The record shows a reference number, the item category, a masked version of the identifier, the result, and the date and time of the check, so a seller can demonstrate the item was checked without publishing the full serial number. Leading a listing with a Verification Record removes the buyer objection that most often stalls a high-value secondhand sale.',
  },
  {
    question: 'What does a stolen-property verification actually tell me?',
    answer:
      'It tells you whether the identifier you submitted matched a stolen or lost-property report in the sources that were checked, at the time of the check. It does not establish legal ownership or clear title, does not confirm authenticity, and does not prove an item was never stolen — coverage varies by category and jurisdiction, not all thefts are reported, and not every report reaches a searchable source. Treat a clean result as one strong input into a buying decision rather than a guarantee.',
  },
  {
    question: 'Can AI analyze a marketplace listing?',
    answer:
      'Yes. SafeOrStolen accepts a pasted listing URL from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark and uses AI to read the publicly visible listing, locate item information and any identifier it contains, and run the appropriate verification. It also scores the listing for common fraud patterns such as pricing far below market, pressure to complete the sale quickly, or a refusal to show the serial number. It works only from what the listing publicly displays.',
  },
  {
    question: 'What information should I get from a seller before buying?',
    answer:
      "Get the item's identifier, a clear photo showing that identifier physically on the item, the model and configuration, and proof of purchase if the seller has it. Verify that the number in the photo matches the number the seller typed, check the identifier against stolen-property records before you pay, and confirm the same number in person when you inspect the item. A seller who will not provide an identifier is a warning sign in itself.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Verify a Used Item — Secondhand Verification Guide',
  description:
    "How to verify used property before buying or selling: what to check by category, what identifiers you need, and what a stolen-property check does and doesn't prove.",
  author: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    url: 'https://safeorstolen.com',
    logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/sos-logo.png' },
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safeorstolen.com/learn' },
  url: 'https://safeorstolen.com/learn',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'How to Verify a Used Item',
      item: 'https://safeorstolen.com/learn',
    },
  ],
};

const CATEGORIES: { label: string; href: string; summary: string; identifier: string }[] = [
  {
    label: 'Phones',
    href: '/imei-checker',
    summary: 'Check a handset against stolen reports and carrier and theft records before you pay.',
    identifier: '15-digit IMEI — dial *#06# on the phone',
  },
  {
    label: 'Vehicles',
    href: '/vin-checker',
    summary: 'Check a car, truck, motorcycle, or RV before money or paperwork changes hands.',
    identifier: '17-character VIN — dashboard, door jamb, or title',
  },
  {
    label: 'License plates',
    href: '/license-plate-lookup',
    summary: 'A fast first pass you can run from a listing photo before you confirm the VIN.',
    identifier: 'Plate number and issuing state',
  },
  {
    label: 'Electronics and tools',
    href: '/serial-number-checker',
    summary: 'Laptops, cameras, power tools, instruments, and watches all carry serials.',
    identifier: 'Manufacturer serial number on the housing or base plate',
  },
  {
    label: 'Firearms',
    href: '/firearms-check',
    summary: 'Check a serial against stolen firearm reports before a private-party transfer.',
    identifier: 'Serial number on the frame or receiver',
  },
  {
    label: 'Bicycles',
    href: '/check-bike',
    summary: 'The frame serial is the only reliable way to identify a specific bicycle.',
    identifier: 'Frame serial, usually under the bottom bracket',
  },
];

const SELLER_CHECKS: string[] = [
  'Ask for the identifier before you agree to meet, not when you arrive.',
  'Ask for a photograph showing the identifier on the item itself, not typed into a message.',
  'Confirm in person that the identifier on the item matches the listing and the photo.',
  'Be cautious with any item whose serial is missing, altered, scratched, or obliterated.',
  'Meet in a public place, ideally a police station parking lot or a staffed retail location.',
];

const LearnHubPage = () => {
  return (
    <>
      <PageSEO
        title="How to Verify a Used Item — Secondhand Verification Guide"
        description="How to verify used property before buying or selling: what to check by category, what identifiers you need, and what a stolen-property check does and doesn't prove."
        canonical="/learn"
        type="article"
        publishedTime={PUBLISHED}
        modifiedTime={PUBLISHED}
        structuredData={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How to Verify a Used Item
            </h1>

            <section
              aria-label="Quick answer"
              className="rounded-xl border-2 border-primary/40 bg-card/60 p-6 mb-10"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-3">
                Quick answer
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                To verify a used item, get its identifier from the seller — an IMEI for phones, a VIN
                for vehicles, or a serial number for electronics, tools, firearms and bicycles — and
                check it against stolen-property records before you pay. A seller who will not
                provide an identifier is a warning sign in itself.
              </p>
            </section>

            <h2 className="text-2xl font-bold mt-12 mb-4">
              What to get from the seller before you buy
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              {SELLER_CHECKS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Verify by category</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="block rounded-xl border border-border bg-card/40 p-5 hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-2">{c.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{c.summary}</p>
                  <p className="text-xs font-mono text-primary">{c.identifier}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Verifying a marketplace listing</h2>
            <p className="text-muted-foreground">
              If you do not have an identifier yet, you can submit the listing URL instead. A listing
              from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark can be
              pasted in, and the platform reads the publicly visible listing page, locates the
              available item information and any identifier it contains, and runs the verification
              that matches the property category. This works only from what the listing publicly
              displays — it does not reach private marketplace data, seller accounts, or messages.
            </p>
            <p className="text-muted-foreground mt-4">
              Paste a listing at{' '}
              <Link to="/marketplace-url-checker" className="text-primary underline font-medium">
                the marketplace listing checker
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">If you are selling</h2>
            <p className="text-muted-foreground">
              The objection that stalls most high-value secondhand sales is that the buyer cannot
              tell whether the item is legitimate. Running your own item through a check and sharing
              the resulting Verification Record answers that question before it is asked. The record
              shows the category, a masked identifier, the result, and when the check was run, so you
              can demonstrate provenance without publishing the full serial number where it can be
              copied into a fraudulent listing.
            </p>
            <p className="text-muted-foreground mt-4">
              For what a record contains and what a result does and does not establish, see{' '}
              <Link to="/methodology" className="text-primary underline font-medium">
                the verification methodology
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">If your property was stolen</h2>
            <p className="text-muted-foreground">
              File a police report first, and make sure the serial number, IMEI, or VIN is written
              into that report — a theft recorded without an identifier is very hard to match later.
              Then register the identifier so that it surfaces when someone runs a check on that item
              before buying it. Most recoveries happen because a buyer, pawn shop, or repair shop ran
              a check, not because the item was found by chance.
            </p>
            <p className="text-muted-foreground mt-4">
              Register an item at{' '}
              <Link to="/report-stolen" className="text-primary underline font-medium">
                the stolen item report page
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <div key={f.question} className="rounded-lg border border-border bg-card/40 p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                  <p className="text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-card/50 p-6">
              <p className="text-foreground font-semibold mb-3">Check an item</p>
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
        </div>
      </div>
    </>
  );
};

export default LearnHubPage;
