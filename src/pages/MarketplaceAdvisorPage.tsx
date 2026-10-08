/**
 * Oct 7 2026: rewritten by hand for "is this listing legit" (an AI-written listing review with a
 * price estimate). No Search Console data for this page yet. The tool needs a signed-in account,
 * reads the listing text (not the photos) and returns a written report; the copy now says so.
 * Removed: "20+ scam indicators", "50%+ below market" as a fixed rule, "all major platforms",
 * and the $14.99 price in the schema (the tool is not sold separately).
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AIMarketplaceAdvisor } from '@/components/ai/AIMarketplaceAdvisor';
import { Link } from '@/lib/router-compat';

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'How do I know if a marketplace listing is legit?',
    answer:
      "Check four things: the price against sold listings for the same model, how the seller wants to be paid, whether their story about the item holds together, and whether they'll give you the serial number before you meet. SafeOrStolen's listing review (safeorstolen.com/marketplace-advisor) reads the listing and writes up red flags, green flags and a price estimate, but the serial number check is what tells you if the item is reported stolen.",
  },
  {
    question: 'What does the AI listing review show?',
    answer:
      'A risk score from 0 to 100 with a level and a one-line verdict, a short summary, the listed price next to an estimated market value, a list of red flags with a severity for each, green flags, notes on the seller, the description and the photos as the listing describes them, recommended next steps, and any IMEI, VIN or serial number found in the listing.',
  },
  {
    question: 'Do I need an account to use it?',
    answer:
      "Yes. You need to be signed in to a SafeOrStolen account to paste a link here; a free account works. If you'd rather not sign in, the Facebook Marketplace scam checker at safeorstolen.com/marketplace-url-checker reads a listing link without an account, and the scam checker at safeorstolen.com/scam-checker works from pasted text.",
  },
  {
    question: 'How accurate is the price estimate?',
    answer:
      "Treat it as a rough guide. It's written by an AI model from the listing text, not pulled from a sales database, so it can be off for rare models, bundles or items in unusual condition. Before you decide a price is too good to be true, search sold listings for the same model and condition on eBay or the marketplace itself.",
  },
  {
    question: 'Can it tell me if the item is stolen?',
    answer:
      "Not by itself. It can point out signs that often go with stolen goods, like a seller who won't share the serial number, and it lists any number it finds in the listing. To check that number against theft reports, enter it on SafeOrStolen's verify page, which searches its theft reports and public web results and lists every source.",
  },
  {
    question: 'Which listing links can I paste?',
    answer:
      "Links to single listings on Facebook Marketplace, Craigslist, OfferUp, eBay and Mercari work best. If a listing only shows its details to logged-in users, as some Facebook listings do, the review has much less to go on. In that case, copy the listing text into the scam checker instead.",
  },
];

export default function MarketplaceAdvisorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SafeOrStolen listing review',
    url: 'https://safeorstolen.com/marketplace-advisor',
    description:
      'Paste a marketplace listing link and get a written review: risk score, red and green flags, an estimated market value and next steps. Requires a SafeOrStolen account.',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    dateModified: '2026-10-07',
  };

  return (
    <>
      <Helmet>
        <title>Is This Listing Legit? AI Marketplace Listing Review | SafeOrStolen</title>
        <meta
          name="description"
          content="Paste a Facebook Marketplace, Craigslist, OfferUp or eBay link and get a written review: red and green flags, a price estimate, a 0–100 risk score and what to do next."
        />
        <meta
          name="keywords"
          content="is this listing legit, is this marketplace listing legit, marketplace listing review, ai listing review, is this facebook marketplace listing real, marketplace price check, is this a good deal marketplace"
        />
        <link rel="canonical" href="https://safeorstolen.com/marketplace-advisor" />
        <meta property="og:title" content="Is This Listing Legit? AI Marketplace Listing Review | SafeOrStolen" />
        <meta
          property="og:description"
          content="A written review of any marketplace listing: red and green flags, a price estimate and next steps."
        />
        <meta property="og:url" content="https://safeorstolen.com/marketplace-advisor" />
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Is This Listing Legit?</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto speakable-summary">
            Paste a link to a Facebook Marketplace, Craigslist, OfferUp, eBay or Mercari listing and get a written review
            of it: a 0–100 risk score and verdict, the red flags and green flags, the listed price next to
            an estimated market value, and the steps to take before you pay. You need to be signed in; a free account
            works.
          </p>
          <p className="text-xs text-muted-foreground mt-3">Updated October 7, 2026</p>
        </div>

        <AIMarketplaceAdvisor />

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">What's in the review</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 font-semibold">Part of the review</th>
                  <th className="p-3 font-semibold">What it gives you</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Risk score and verdict', 'A number from 0 to 100, a level from Low to Critical, and a verdict from "likely safe" to "definite scam", with a 2–3 sentence reason.'],
                  ['Price check', 'The listed price, an estimated market value and how far apart they are. The estimate comes from the AI, so confirm it against sold listings.'],
                  ['Red flags', 'Each problem it spotted, such as a deposit request or a vague history, with a severity and an explanation.'],
                  ['Green flags', 'Things that count in the listing\'s favor, like a detailed description or an included receipt.'],
                  ['Seller, description and photo notes', 'Short notes on each, based on the listing text.'],
                  ['Identifiers found', 'Any IMEI, VIN or serial number in the listing, ready to check for theft.'],
                  ['Recommended actions', 'What to ask the seller and do before you hand over money.'],
                ].map(([a, b]) => (
                  <tr key={a} className="border-b border-border/50 align-top">
                    <td className="p-3 font-medium">{a}</td>
                    <td className="p-3 text-muted-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="modern-card p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">When to use this page</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>You want a second opinion in plain words, not just a score.</li>
              <li>You're not sure whether the price is a bargain or a warning sign.</li>
              <li>You want a list of questions to send the seller before you drive across town.</li>
            </ul>
          </div>
          <div className="modern-card p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Its limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>It reads the listing's text. It can't look at the photos or tell if they were copied.</li>
              <li>It can't see the seller's profile age, ratings or past sales unless they're in the listing text.</li>
              <li>An AI can be wrong. Use the review to decide what to check, not as the final word.</li>
              <li>It does not search theft reports. Check the serial number on the <Link to="/verify" className="text-primary hover:underline">verify page</Link>.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 modern-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">Other ways to check a listing</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/marketplace-url-checker" className="text-primary hover:underline">Facebook Marketplace scam checker</Link>: paste a link, no account needed. Gives a rule-based score and pulls out serial numbers with a Verify button.
            </li>
            <li>
              <Link to="/scam-checker" className="text-primary hover:underline">Scam checker</Link>: paste the listing text from any site. Runs in your browser.
            </li>
            <li>
              <Link to="/how-to-tell-if-marketplace-item-is-stolen" className="text-primary hover:underline">How to tell if a marketplace item is stolen</Link>: the checks to do yourself, step by step.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions people ask</h2>
          <div className="space-y-2">
            {FAQS.map((f) => (
              <details key={f.question} className="border border-border rounded-lg p-4 bg-card">
                <summary className="font-medium text-foreground cursor-pointer">{f.question}</summary>
                <p className="text-sm text-muted-foreground mt-2">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
