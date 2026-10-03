import { Link } from '@/lib/router-compat';
import { SEOHead } from '@/components/seo/SEOHead';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
 {
 question: 'Is there a free way to check if a phone is stolen?',
 answer:
 'Yes. SafeOrStolen gives you 2 free checks with a free account — no credit card. Find the IMEI by dialing *#06#, enter it, and read the verdict in about 3 seconds.',
 },
 {
 question: "How do I check a phone's IMEI blacklist status?",
 answer:
 'Enter the 15-digit IMEI into SafeOrStolen. It gathers public information and our own reports to indicate if a phone has been flagged as stolen, alongside its reported-stolen status. (Blacklists are maintained by carriers, who can tell you a device\'s blacklist status.)',
 },
 {
 question: 'How can I check if a used phone is stolen before buying it?',
 answer:
 'Read the IMEI off the actual device with *#06# (never off a box or a photo) or scan its barcode in the SafeOrStolen app, run the check, and only buy if it comes back clean. Also confirm the seller can factory-reset the phone and that it isn\u2019t locked to an account.',
 },
 {
 question: 'Can a stolen phone still be used?',
 answer:
 'Sometimes it powers on and works, which is what makes stolen and blacklisted phones dangerous to buy. A blacklisted device can be cut off from carrier service later, and a reported-stolen phone can be reclaimed, leaving the buyer with nothing.',
 },
 {
 question: 'Does an IMEI check work on both iPhone and Android?',
 answer:
 'Yes. The IMEI is a universal handset identifier, so the same check works for iPhone, Android, and other cellular devices. Dial *#06# on any of them to reveal it.',
 },
 {
 question: 'Do I get proof that I checked the phone?',
 answer:
 'Yes. Every SafeOrStolen check produces a downloadable PDF certificate and a shareable verification link, timestamped to the moment you ran it.',
 },
];

const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: FAQS.map((faq) => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: { '@type': 'Answer', text: faq.answer },
 })),
};

const articleSchema = {
 '@context': 'https://schema.org',
 '@type': 'Article',
 headline: 'How to Check if a Phone Is Stolen by IMEI (Free)',
 description:
 "Check if a phone is reported stolen by its IMEI, free. SafeOrStolen checks public web results, AI analysis, and its own reports for stolen phone data in a few seconds.",
 mainEntityOfPage: 'https://safeorstolen.com/check-imei-stolen',
 author: { '@type': 'Organization', name: 'SafeOrStolen' },
 publisher: {
 '@type': 'Organization',
 name: 'SafeOrStolen',
 logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/sos-logo.png' },
 },
};

const CheckImeiStolenPage = () => {
 return (
 <>
 <SEOHead
 title="Free Stolen Phone IMEI Check — Verify a Phone Isn't Stolen"
 description="Check if a phone is reported stolen by its IMEI, free. SafeOrStolen checks public web results, AI analysis, and its own reports for stolen phone data in a few seconds and issues a PDF certificate."
 canonical="/check-imei-stolen"
 ogType="article"
 keywords="check imei stolen, free imei check, stolen phone imei check, imei blacklist check, gsma imei lookup"
 schemaJson={[faqSchema, articleSchema]}
 />

 <article className="mx-auto max-w-3xl px-5 py-14 md:py-20">
 <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
 SafeOrStolen · Verification Guide
 </span>
 <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
 How to Check if a Phone Is Stolen by IMEI (Free)
 </h1>
 <p className="mt-3 text-lg text-muted-foreground">
 Before you buy a used phone — or if you already did — you can check its IMEI against
 SafeOrStolen&apos;s stolen-item reports, public web results and AI analysis in about three seconds. Here&apos;s exactly how
 it works and what the result means.
 </p>

 {/* Quick answer — the block AI assistants are most likely to cite */}
 <div className="my-7 rounded-lg border border-border border-l-[3px] border-l-primary bg-card p-5">
 <p className="text-foreground">
 <strong className="text-primary">Quick answer:</strong> Every phone has a unique 15-digit
 IMEI number. Find it by dialing <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code>,
 then check that number against stolen-device records. <strong>SafeOrStolen</strong> checks
 the IMEI against its own stolen-item reports, public web results and AI analysis
 and returns a clear result in about 3 seconds —
 with a downloadable PDF certificate as proof. Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. SafeOrStolen does not check carrier blacklists, so also ask the seller&apos;s carrier. If a phone comes back stolen, don&apos;t buy it — a blacklisted phone
 can be blocked from every network even after you&apos;ve paid.
 </p>
 </div>

 <div className="space-y-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:my-1.5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
 <h2>What an IMEI is (and how to find it)</h2>
 <p>
 An IMEI — International Mobile Equipment Identity — is a permanent 15-digit serial number
 unique to a specific handset. Unlike a SIM or phone number, it stays with the physical
 device for life, which is exactly why industry blacklists like the GSMA blacklist are
 built around it.
 </p>
 <p>Three ways to find a phone&apos;s IMEI:</p>
 <ul>
 <li>
 <strong>Dial <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code></strong>{' '}
 on the phone&apos;s keypad — the IMEI appears instantly.
 </li>
 <li>
 <strong>Settings → About phone</strong> (Android) or{' '}
 <strong>Settings → General → About</strong> (iPhone).
 </li>
 <li>
 <strong>Scan the barcode</strong> on the box or SIM tray with the{' '}
 <Link to="/app" className="text-primary underline-offset-4 hover:underline">
 SafeOrStolen app
 </Link>{' '}
 — no typing.
 </li>
 </ul>
 <p>
 When buying used, always read the IMEI off the actual device with{' '}
 <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code> — not off a box or a
 screenshot a seller sends you.
 </p>

 <h2>How a stolen-IMEI check actually works</h2>
 <p>
 This is the part most &quot;IMEI checker&quot; pages skip. A meaningful check isn&apos;t a
 single lookup — it answers two distinct questions together:
 </p>
 <ol>
 <li>
 <strong>Reported-stolen status.</strong> Has this exact IMEI been reported stolen or
 lost? This tells you the device is hot.
 </li>
 <li>
 <strong>Blacklist status.</strong> Have carriers flagged the IMEI so it can be denied
 service? A blacklisted phone may power on and look fine, but can be barred from calls,
 texts, and data — sometimes only after you&apos;ve paid.
 </li>
 </ol>
 <p>
 SafeOrStolen checks <strong>its own stolen-item reports, public web results, and AI analysis</strong>,
 then returns a plain-language verdict in about 3 seconds. Phone checks also provide device details,
 but do not currently check the carrier blacklist. Every completed check can produce a
 timestamped <strong>PDF certificate</strong> and a <strong>shareable verification link</strong>,
 so you can prove the phone was checked. It also runs a scam-risk analysis on the listing
 alongside the IMEI result.
 </p>

 <h2>Check an IMEI on SafeOrStolen — step by step</h2>
 <ol className="[&>li]:my-3">
 <li>
 <strong>Get the IMEI.</strong> Dial{' '}
 <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code> on the phone, read
 it from Settings → About, or scan the barcode in the app.
 </li>
 <li>
 <strong>Enter it on SafeOrStolen.</strong> Paste the 15-digit number into the{' '}
 <Link to="/imei-checker" className="text-primary underline-offset-4 hover:underline">
 IMEI check
 </Link>
 .
 </li>
 <li>
 <strong>Run the check.</strong> SafeOrStolen queries publicly available information and reported-stolen records
 across its multiple sources.
 </li>
 <li>
 <strong>Read the verdict</strong> — clean, reported stolen, or blacklisted — and save the
 PDF certificate and shareable link.
 </li>
 </ol>

 <p className="pt-2">
 <Link
 to="/verify"
 className="inline-block rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
 >
 Run a free IMEI check →
 </Link>
 </p>
 <p className="text-sm text-muted-foreground">
 Start with 2 free checks with a free account — no credit card. After that it&apos;s $3.99 per
 single check or $14.99/month for unlimited checks, PDF certificates, and shareable links.
 Cancel anytime.
 </p>

 <h2>What your result means</h2>

 <div className="my-3 rounded-lg border border-border bg-card p-4">
 <span className="rounded-[0.25rem] px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary bg-primary/10">
 Clean
 </span>
 <p className="mt-2.5">
 No reported-stolen or blacklist flags found. The phone isn&apos;t in the records checked.
 Still confirm the seller can factory-reset it and that it isn&apos;t locked to an account
 (iCloud Activation Lock / Google account).
 </p>
 </div>

 <div className="my-3 rounded-lg border border-border bg-card p-4">
 <span className="rounded-[0.25rem] bg-destructive/10 px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-destructive">
 Reported stolen
 </span>
 <p className="mt-2.5">
 The IMEI has been reported stolen or lost. Do not buy it. Buying a device you know is
 reported stolen can cost you both the phone and your money — the exact situation
 SafeOrStolen exists to prevent.
 </p>
 </div>

 <div className="my-3 rounded-lg border border-border bg-card p-4">
 <span className="rounded-[0.25rem] bg-amber-500/10 px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-500">
 Blacklisted
 </span>
 <p className="mt-2.5">
 A carrier may have flagged the IMEI in their blacklist. The phone may work today but can be
 blocked from networks at any time. Treat a blacklisted result as a hard stop on any
 purchase.
 </p>
 </div>

 <h2>&quot;Stolen&quot; vs &quot;blacklisted&quot; — what&apos;s the difference?</h2>
 <p>
 <strong>Reported stolen</strong> means an owner or the police flagged the device as taken.{' '}
 <strong>Blacklisted</strong> means a carrier will deny it service. A phone can be
 blacklisted for a stolen report, for unpaid bills, or for fraud — so a blacklist check
  catches problems a stolen-only lookup misses. SafeOrStolen does not currently check carrier blacklists, so use a carrier or authorized blacklist service separately.
 </p>

  <h2>Use SafeOrStolen with a separate carrier check</h2>
  <p>SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis and provides IMEI device details. Ask the original carrier about blacklist, network-eligibility, and finance status before paying.</p>
 <p>
 SafeOrStolen also verifies{' '}
 <Link to="/vin-checker" className="text-primary underline-offset-4 hover:underline">
 vehicles (VIN)
 </Link>
 ,{' '}
 <Link to="/check-bike" className="text-primary underline-offset-4 hover:underline">
 bikes
 </Link>
 ,{' '}
 <Link to="/check-gun" className="text-primary underline-offset-4 hover:underline">
 firearms
 </Link>
 , and other serial-numbered goods — one checker for everything, like Carfax for more than
 cars.
 </p>

 <h2>What to do if a phone comes back stolen</h2>
 <ul>
 <li>
 <strong>If you haven&apos;t bought it:</strong> walk away, and don&apos;t hand over money
 for a device you now know is flagged.
 </li>
 <li>
 <strong>If you already bought it:</strong> stop using it as your own, keep your PDF
 certificate and purchase records, and report it to local police. That timestamped
 certificate helps show you bought in good faith — the difference between an honest buyer
 and a suspect.
 </li>
 </ul>

 <h2>Frequently asked questions</h2>
 </div>

 <Accordion type="single" collapsible className="mt-3">
 {FAQS.map((faq) => (
 <AccordionItem key={faq.question} value={faq.question}>
 <AccordionTrigger className="text-left text-[17px] font-semibold">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>

 <p className="mt-12 border-t border-border pt-5 text-[13px] text-muted-foreground">
 Published by SafeOrStolen — verification for phones, vehicles, bikes, firearms, and other
 serial-numbered goods. Results reflect the records available at the time of the check; no
 service can guarantee 100% accuracy, and not all stolen items are reported. For high-value
 purchases, also verify with local law enforcement. Questions:{' '}
 <a
 href="mailto:support@safeorstolen.com"
 className="text-primary underline-offset-4 hover:underline"
 >
 support@safeorstolen.com
 </a>
 .
 </p>
 </article>
 </>
 );
};

export default CheckImeiStolenPage;
