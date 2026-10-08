/**
 * Oct 7 2026: rewritten by hand for "verified seller badge" / "show buyers my item isn't stolen".
 * No Search Console data for this page yet. The old page described a "Generate Seller Badge"
 * button, a downloadable badge image and a "VERIFIED CLEAN" seal that do not exist in the product.
 * What exists is the $1.99 verification certificate with its own link, so the page now describes
 * that. Removed: "sell 2x faster", "get full price", "legal protection" and the letgo mention.
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Does SafeOrStolen have a verified seller badge?',
    answer:
      "Not as an image. What SafeOrStolen gives sellers is a verification certificate: a page with its own link showing the date of a check on your item, the records searched and the result. It costs $1.99 and is free for monthly members. You paste the link into your listing, and buyers open it to see the check for themselves (safeorstolen.com/seller-badge explains how).",
  },
  {
    question: 'How do I add the verification link to my listing?',
    answer:
      'Copy the certificate link from your browser after it opens. Paste it at the end of your listing description, for example "Serial checked on SafeOrStolen:" followed by the link. Some marketplaces hide or block links in listings; if yours does, send the link in the chat when a buyer asks about the item.',
  },
  {
    question: 'Can buyers tell the certificate is real?',
    answer:
      "Yes. The link opens on safeorstolen.com, not on a screenshot you made, and shows the record ID, the check date in UTC and local time, the result and a SHA-256 hash calculated when the record was made. The details can't be edited afterwards. Buyers can still ask you to read the serial off the item so they know the certificate matches it.",
  },
  {
    question: 'Does the certificate show my full serial number?',
    answer:
      'No. It shows only the last four characters, like ...4821, plus the item category. That lets a buyer match it against the item at the meetup without the full number sitting in a public listing. Give the full number to serious buyers in the chat so they can run their own check if they want to.',
  },
  {
    question: "Does the certificate prove my item isn't stolen?",
    answer:
      "No, and it says so on the page. It shows that a check was run on the date shown and what it found. Many stolen items are never reported to any database, so no check can prove an item was never stolen. What it does show a buyer is that you checked openly, which is what an honest seller does.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'The check itself is one of your checks: 2 are free with a free account, then $3.99 for a single check or $14.99 a month for unlimited checks. The certificate is $1.99 on top, or included free with the monthly plan. You only need one certificate per item.',
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

const SellerBadgePage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Verified Seller Badge: Share a Stolen-Check Link in Your Listing | SafeOrStolen"
        description="Show buyers you checked your item for theft reports. Get a $1.99 dated certificate with its own link and paste it into your Facebook Marketplace, eBay, OfferUp or Craigslist listing."
        keywords="verified seller badge, marketplace seller verification, show buyer item is not stolen, seller verification link, prove item not stolen to buyer, facebook marketplace verified seller, stolen check certificate"
        canonical="/seller-badge"
        structuredData={[faqSchema]}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Verified Seller Badge: Share a Check Link</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto speakable-summary">
            To show buyers you checked your item for theft reports, run a SafeOrStolen check on its serial number, IMEI
            or VIN, then get the $1.99 verification certificate under the result (free for monthly members). It's a
            page with its own link showing the check date, the records searched and the result. Paste that link into
            your listing. SafeOrStolen doesn't make a badge image; the link is the badge.
          </p>
          <p className="text-xs text-muted-foreground">Updated October 7, 2026</p>
        </header>

        <section aria-label="How it works">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to get your link</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Find your item's serial number, IMEI or VIN and enter it on the <Link to="/verify" className="text-primary hover:underline">verify page</Link>.</li>
            <li>Read the result. If it says "reported stolen" or "possible match", don't list the item: see the questions below.</li>
            <li>Under the result, choose "Get my certificate" and pay $1.99. Monthly members skip the payment.</li>
            <li>The certificate page opens. Copy its link from your browser.</li>
            <li>Paste the link into your listing description, or send it to buyers in the chat.</li>
          </ol>
        </section>

        <section aria-label="What buyers see">
          <h2 className="text-2xl font-bold text-foreground mb-4">What buyers see when they open it</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 font-semibold">On the page</th>
                  <th className="p-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ['Heading', 'Verification Record, marked "Verified by SafeOrStolen"'],
                  ['Record ID', 'SOS-7K2M-4Q8X'],
                  ['Check date', 'In UTC and in the viewer\'s local time'],
                  ['Category', 'Phone, vehicle, license plate, serial number, firearm or bicycle'],
                  ['Result', 'No theft report found in the records searched'],
                  ['Masked identifier', '...4821'],
                  ['Records searched', 'Each source the check covered'],
                  ['Record hash (SHA-256)', 'A long code calculated from the details when the record was made'],
                  ['Disclaimer', 'That the record shows a search and its result, and is not proof of ownership or a guarantee'],
                ].map(([a, b]) => (
                  <tr key={a} className="border-b border-border/50 align-top">
                    <td className="p-3 font-medium text-foreground whitespace-nowrap">{a}</td>
                    <td className="p-3">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-label="Tips for sellers">
          <h2 className="text-2xl font-bold text-foreground mb-4">Make the link count</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Include a photo of the serial label in your listing, so buyers can match the last four characters to the certificate.</li>
            <li>Mention it in the first lines of the description, where buyers read before they message.</li>
            <li>At the meetup, unlock the item and sign out of your accounts while the buyer watches. A certificate doesn't replace that.</li>
            <li>Bring the receipt or order confirmation if you have it. See <Link to="/how-to-prove-item-is-not-stolen" className="text-primary hover:underline">how to prove an item is not stolen</Link> for what else buyers look for.</li>
          </ul>
        </section>

        <section aria-label="Call to action" className="text-center bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Check your item first</h2>
          <p className="text-muted-foreground mb-4">The certificate offer appears under every check result. Your first 2 checks are free.</p>
          <Button asChild size="lg" className="button-glow">
            <Link to="/verify">Check a serial number, IMEI or VIN <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </section>

        <section aria-label="FAQ">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions sellers ask</h2>
          <div className="space-y-2">
            {FAQS.map((f) => (
              <details key={f.question} className="border border-border rounded-lg p-4 bg-card">
                <summary className="font-medium text-foreground cursor-pointer">{f.question}</summary>
                <p className="text-sm text-muted-foreground mt-2">{f.answer}</p>
              </details>
            ))}
            <details className="border border-border rounded-lg p-4 bg-card">
              <summary className="font-medium text-foreground cursor-pointer">What if my item comes back reported stolen?</summary>
              <p className="text-sm text-muted-foreground mt-2">
                Don't sell it. If you bought it used, it may have been stolen before it reached you. Contact your local police on the non-emergency line with your proof of purchase. If you believe the report is a mistake, for example an item you reported and later got back, email safeorstolenmail@gmail.com with the details.
              </p>
            </details>
          </div>
        </section>
      </div>
    </>
  );
};

export default SellerBadgePage;
