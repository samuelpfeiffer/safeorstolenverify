import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProofDisclaimer } from '@/components/proof/ProofDisclaimer';

/**
 * Each entry is rendered verbatim as an <h2> question plus its answer paragraph,
 * and the identical strings feed the FAQPage JSON-LD. Keep them in sync — schema
 * that does not match the visible text is a structured-data violation.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "How do I prove I didn't know something was stolen?",
    answer:
      'You prove it by documenting the due diligence you performed before money changed hands. A dated record showing which stolen-property databases were checked and what they returned is contemporaneous evidence of that effort. Keep it alongside your receipt, your messages with the seller, and any seller identification you collected, because good faith is established by what you did at the time of the purchase rather than by what you say afterwards.',
  },
  {
    question: 'What happens if I accidentally buy stolen property?',
    answer:
      'Stolen property generally remains the legal property of its original owner, so it can be seized and returned even from a buyer who paid full price in good faith. You are usually left to pursue the seller for your money, which is often impossible on an anonymous marketplace. Report it to local law enforcement, stop using the item, and keep every record of the transaction and the checks you ran, because that documentation is what distinguishes an innocent buyer from a knowing one.',
  },
  {
    question: 'How do I protect myself when buying used on Facebook Marketplace?',
    answer:
      'Check the item identifier against stolen-property databases before you agree to meet, and save a timestamped record of that check. Meet in a public place, pay traceably, photograph the item and the identifier, and keep the listing and message thread. If a seller refuses to share the IMEI, VIN, plate, or serial number in advance, treat that as a reason to walk away rather than an inconvenience.',
  },
  {
    question: 'What is proof of clean purchase?',
    answer:
      'Proof of clean purchase is a timestamped, tamper-evident record showing that a stolen-property database search was run on a specific item before it was bought, and exactly what that search returned. It records the date, the item category, a masked identifier, the databases queried, and a SHA-256 hash of those details so any later alteration is detectable. It is evidence of due diligence, not proof of ownership: it does not transfer title, replace a bill of sale, or certify that an item is clean, and the item identifier itself is stored only as a hash and a masked fragment.',
  },
  {
    question: "Does a clean check mean the item definitely isn't stolen?",
    answer:
      'No. A clean result means only that no matching report was found in the databases checked on that date. Most stolen property is never reported to any database, and reports can be filed days or weeks after a theft, so absence of a match is meaningful but never conclusive.',
  },
  {
    question: 'How long does a verification record last?',
    answer:
      'A record is permanent and stays available at its link indefinitely unless you delete it. It cannot be edited after creation, so the details and the hash shown today are the same ones captured at the moment of the check. If you delete it, the page reports that the record was deleted by its holder rather than disappearing, so deletion is never mistaken for a record that never existed.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Proof of Clean Purchase',
      item: 'https://safeorstolen.com/proof-of-purchase',
    },
  ],
};

const ProofOfPurchasePage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Proof of Clean Purchase — Document Your Due Diligence"
        description="Save a timestamped, tamper-evident record showing you checked an item against stolen-property databases before buying it, and what that check returned."
        canonical="/proof-of-purchase"
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Proof of Clean Purchase
            </h1>

            <section
              aria-label="Quick answer"
              className="rounded-xl border-2 border-primary/40 bg-card/60 p-6 mb-10"
            >
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                After a SafeOrStolen check comes back clean, you can save a permanent, timestamped
                record of it. The record shows the date of the check, the category of item, a masked
                identifier, which databases were queried, and a tamper-evident hash — evidence that
                you did your homework before handing over money.
              </p>
            </section>

            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h2 className="text-2xl font-bold mt-12 mb-4">{faq.question}</h2>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-12 mb-4">What is in a record</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>A human-readable record ID such as SOS-7K2M-4Q8X.</li>
              <li>The date and time of the check, shown in UTC and in your local time.</li>
              <li>
                The item category — phone, vehicle, license plate, serial number, firearm, or
                bicycle.
              </li>
              <li>
                A masked identifier. The full identifier is hashed and never stored in plain text.
              </li>
              <li>The databases queried and the result returned.</li>
              <li>
                A SHA-256 record hash computed at creation. Records cannot be edited afterwards, so
                the hash will not match if any detail is altered.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Create a record</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Run a check on the item you are considering. If it comes back clean, you will be
              offered the option to save the record — no account required.
            </p>

            <Link
              to="/verify"
              className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Verify Now — Free
            </Link>

            <ProofDisclaimer className="mt-12" />
          </article>
        </div>
      </div>
    </>
  );
};

export default ProofOfPurchasePage;
