/**
 * Oct 7 2026: rewritten by hand for "proof of clean purchase" (a dated record that you checked a
 * used item for theft reports before buying it). No Search Console data for this page yet. The page
 * now describes the $1.99 verification certificate as it exists (offered under every check result,
 * free for monthly members, its own /proof/ link). Removed: the claim that "most stolen property is
 * never reported" stated as a statistic, and a "save to their account" typo. PROOF_DISCLAIMER is
 * rendered unchanged through <ProofDisclaimer />.
 */
import React from 'react';
import { Link } from '@/lib/router-compat';
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
      "Show what you did before you paid. A dated record of a stolen-item check on the serial number, the listing, your messages with the seller, the receipt and how you paid all show you acted in good faith at the time. Records made at the time of the sale carry far more weight than an explanation given afterwards. SafeOrStolen's $1.99 verification certificate (safeorstolen.com/proof-of-purchase) is one such record.",
  },
  {
    question: 'What is a proof of clean purchase certificate?',
    answer:
      "It's a page with its own link that records a SafeOrStolen check: the record ID, the date and time, the item category, the last four characters of the number, the records searched, the result, and a tamper-evident hash. It costs $1.99 and is free for monthly members. It shows that you checked and what the check found. It doesn't prove ownership or replace a bill of sale.",
  },
  {
    question: 'How do I get a certificate?',
    answer:
      'Run a check on the serial number, IMEI or VIN of the item you are buying. Under the result you will see "Get a verification certificate — $1.99". Pay, and you are taken to the certificate page; copy its link and keep it with your receipt. Monthly members get the certificate at no charge. You can also send the link to the seller or anyone else who needs to see it.',
  },
  {
    question: "Does a clean check mean the item definitely isn't stolen?",
    answer:
      "No. A clean result means no matching report was found in the records searched on that date. Plenty of thefts are never reported to any database, and some are reported days or weeks later. That's why the certificate records the date: it shows what was known when you bought, not a promise about the item's past.",
  },
  {
    question: 'What happens if I accidentally buy stolen property?',
    answer:
      "Stolen property generally still belongs to its original owner, so police can take it back even from a buyer who paid in good faith. Your money claim is against the seller. Stop using the item, report it to local police, and keep your records, including the certificate. A dated check helps show you were an innocent buyer.",
  },
  {
    question: 'Can a certificate be changed or deleted?',
    answer:
      "The details can't be edited after the record is created, and the hash on the page is calculated from them, so any change would show. The holder can delete a record. If they do, the link shows that the record was deleted by its holder rather than disappearing, so a deleted certificate can't be mistaken for one that never existed.",
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
        title="Proof of Clean Purchase: A Dated Record You Checked Before Buying | SafeOrStolen"
        description="Get a $1.99 dated certificate with its own link showing you checked a used item for theft reports before you bought it, and what the check found. Free for monthly members."
        keywords="proof of clean purchase, proof i checked item was not stolen, good faith purchase proof, stolen item check certificate, proof of due diligence used item, how to prove you didn't know something was stolen"
        canonical="/proof-of-purchase"
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <article>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Proof of Clean Purchase
            </h1>
            <p className="text-xs text-muted-foreground mb-6">Updated October 7, 2026</p>

            <section
              aria-label="Quick answer"
              className="rounded-xl border-2 border-primary/40 bg-card/60 p-6 mb-10"
            >
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Proof of clean purchase is a dated record that you checked a used item for theft reports before you
                bought it. After any SafeOrStolen check, you can get a verification certificate for $1.99 (free for
                monthly members). It has its own link and shows the date and time of the check, the item category, the
                last four characters of the number, the records searched, the result and a tamper-evident hash. Keep it
                with your receipt.
              </p>
            </section>

            <h2 className="text-2xl font-bold mt-10 mb-4">What the certificate shows</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 font-semibold">Field</th>
                    <th className="p-3 font-semibold">What it is</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['Record ID', 'A readable ID like SOS-7K2M-4Q8X, also part of the link'],
                    ['Check date', 'The date and time of the check, in UTC and in local time'],
                    ['Category', 'Phone, vehicle, license plate, serial number, firearm or bicycle'],
                    ['Result', 'No theft report found in the records searched, or a theft or loss report matched'],
                    ['Masked identifier', 'Only the last four characters, like ...4821. The full number is never shown.'],
                    ['Records searched', 'Each source the check covered'],
                    ['Record hash (SHA-256)', 'Calculated from the details when the record is made. Any change to them would not match it.'],
                  ].map(([a, b]) => (
                    <tr key={a} className="border-b border-border/50 align-top">
                      <td className="p-3 font-medium text-foreground whitespace-nowrap">{a}</td>
                      <td className="p-3">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">When it's worth $1.99</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You're buying something expensive from a stranger: a phone, laptop, e-bike, tools or a car.</li>
              <li>You're paying cash, so there's no payment record that shows when and from whom you bought.</li>
              <li>You plan to resell the item and want to show your buyer you checked it too.</li>
              <li>You're a reseller or pawn shop keeping records for each item you take in (see <Link to="/bulk-check" className="text-primary hover:underline">bulk checking</Link>).</li>
            </ul>

            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h2 className="text-2xl font-bold mt-12 mb-4">{faq.question}</h2>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-12 mb-4">Get one</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Check the item's serial number, IMEI or VIN. The certificate offer appears under the result. Selling
              instead of buying? See <Link to="/how-to-prove-item-is-not-stolen" className="text-primary hover:underline">how to prove an item is not stolen</Link>.
            </p>

            <Link
              to="/verify"
              className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Check an item — 2 free checks
            </Link>

            <ProofDisclaimer className="mt-12" />
          </article>
        </div>
      </div>
    </>
  );
};

export default ProofOfPurchasePage;
