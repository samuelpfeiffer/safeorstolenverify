import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProofDisclaimer } from '@/components/proof/ProofDisclaimer';

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What is proof of clean purchase?',
    answer:
      'Proof of clean purchase is a timestamped record showing that you ran a stolen-property database check on an item before you bought it, and what that check returned. It records the date, the category, a masked identifier, the databases queried, and a tamper-evident hash — it does not record or establish ownership.',
  },
  {
    question: "How do I prove I didn't know something was stolen?",
    answer:
      'The practical way is to document the due diligence you performed at the time of the purchase, before money changed hands. A dated record showing which databases were checked and what they returned is contemporaneous evidence of that effort, alongside your receipt, messages with the seller, and any identification you collected.',
  },
  {
    question: 'What happens if I accidentally buy stolen property?',
    answer:
      'Stolen property generally remains the legal property of its original owner, so it can be seized and returned even from a buyer who paid in good faith and had no idea. Report it to local law enforcement, stop using the item, and keep every record of the transaction and the checks you ran, because that documentation is what distinguishes an innocent buyer from a knowing one.',
  },
  {
    question: "Does a clean check mean the item definitely isn't stolen?",
    answer:
      'No. Most stolen property is never reported to any database, so a clean result means only that no matching report was found in the sources checked on that date — not that the item was never stolen.',
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
              <li>A masked identifier. The full identifier is hashed and never stored in plain text.</li>
              <li>The databases queried and the result returned.</li>
              <li>
                A SHA-256 record hash computed at creation. Records cannot be edited afterwards, so
                the hash will not match if any detail is altered.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">What stays private</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can optionally attach the seller name or handle, where you found the listing,
              where you met, and the price you paid. Those details are visible only to you when
              signed in. Anyone who opens the public record page sees the check itself, never your
              private notes.
            </p>

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
