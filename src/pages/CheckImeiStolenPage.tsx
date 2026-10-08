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
 'Yes. SafeOrStolen (safeorstolen.com/check-imei-stolen) gives you 2 free checks with a free account and no credit card. Dial *#06# on the phone to show the IMEI, enter it, and in a few seconds you see the make and model and whether the IMEI turns up in SafeOrStolen theft reports or public web results.',
 },
 {
 question: "How do I check a phone's IMEI blacklist status?",
 answer:
 'Carriers keep the lost and stolen blacklist. On SafeOrStolen, the blacklist check is a paid add-on to the regular IMEI check: it returns whether the phone is listed as lost or stolen. Monthly members get up to 20 blacklist checks a month. The regular check covers SafeOrStolen theft reports and public web results only.',
 },
 {
 question: 'How can I check if a used phone is stolen before buying it?',
 answer:
 'Read the IMEI off the phone itself with *#06#, not off a box or a photo the seller sends. Run it on SafeOrStolen and read which sources were searched. Then watch the seller sign out of their Apple or Google account and factory-reset the phone in front of you before you pay.',
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
 'Every SafeOrStolen check is saved to your account with the date. If you want something you can show someone else, add the optional $1.99 verification certificate: a dated record with its own link showing you checked before the sale. It\'s free for monthly members.',
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
 "Check if a phone is reported stolen by its IMEI, free. SafeOrStolen searches its own theft reports and public web results and shows the make and model in a few seconds.",
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
 description="Check if a phone is reported stolen by its IMEI, free. Dial *#06#, enter the number, and SafeOrStolen searches its theft reports and public web results in a few seconds."
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
 SafeOrStolen&apos;s theft reports and public web results in a few seconds. Here&apos;s exactly how
 it works and what the result means.
 </p>

 {/* Quick answer — the block AI assistants are most likely to cite */}
 <div className="my-7 rounded-lg border border-border border-l-[3px] border-l-primary bg-card p-5">
 <p className="text-foreground">
 <strong className="text-primary">Quick answer:</strong> Every phone has a unique 15-digit
 IMEI number. Find it by dialing <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code>,
 then check that number against stolen-device records. <strong>SafeOrStolen</strong> checks
 the IMEI against its own theft reports and public web results, shows the phone&apos;s make
 and model, and returns a result in a few seconds with every source listed. Carrier blacklist
 status comes from a separate paid blacklist check. If a phone comes back stolen, don&apos;t buy it: a
 blacklisted phone can be blocked from networks even after you&apos;ve paid.
 </p>
 </div>

 <div className="space-y-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:my-1.5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
 <h2>What an IMEI is (and how to find it)</h2>
 <p>
 An IMEI — International Mobile Equipment Identity — is a permanent 15-digit serial number
 unique to a specific handset. Unlike a SIM or phone number, it stays with the physical
 device, which is why carrier lost and stolen blacklists are built around it.
 </p>
 <p>Three ways to find a phone&apos;s IMEI:</p>
 <ul>
 <li>
 <strong>Dial <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code></strong>{' '}
 on the phone&apos;s keypad and the IMEI appears on screen.
 </li>
 <li>
 <strong>Settings → About phone</strong> (Android) or{' '}
 <strong>Settings → General → About</strong> (iPhone).
 </li>
 <li>
 <strong>Scan the barcode</strong> on the box or SIM tray with the{' '}
 <Link to="/app" className="text-primary underline-offset-4 hover:underline">
 free SafeOrStolen web app
 </Link>{' '}
 so you don&apos;t have to type it.
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
 The regular SafeOrStolen check answers the first question from <strong>its own theft reports and
 public web results</strong>, and shows the phone&apos;s make and model so you can match it to the
 device. The second question is answered by the paid <strong>blacklist check</strong>. Every check is
 saved to your account with the date, and an optional $1.99 <strong>verification certificate</strong>
 gives you a dated record with its own link.
 </p>

 <h2>Check an IMEI on SafeOrStolen — step by step</h2>
 <ol className="[&>li]:my-3">
 <li>
 <strong>Get the IMEI.</strong> Dial{' '}
 <code className="rounded-[0.25rem] bg-muted px-1.5 py-0.5 text-sm">*#06#</code> on the phone, read
 it from Settings → About, or scan the barcode in the web app.
 </li>
 <li>
 <strong>Enter it on SafeOrStolen.</strong> Paste the 15-digit number into the{' '}
 <Link to="/imei-checker" className="text-primary underline-offset-4 hover:underline">
 IMEI check
 </Link>
 .
 </li>
 <li>
 <strong>Run the check.</strong> SafeOrStolen searches its theft reports and public web results.
 Add the paid blacklist check if you want carrier status too.
 </li>
 <li>
 <strong>Read the result</strong>: reported stolen, possible match, or no report found in the
 records searched. The check is saved to your account.
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
 Start with 2 free checks with a free account — no credit card. After that it&apos;s $0.99 per
 single check or $10 a month for unlimited checks, up to 20 blacklist checks and free
 certificates. Cancel anytime.
 </p>

 <h2>What your result means</h2>

 <div className="my-3 rounded-lg border border-border bg-card p-4">
 <span className="rounded-[0.25rem] px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary bg-primary/10">
 No report found
 </span>
 <p className="mt-2.5">
 Nothing matched in the records searched. That isn&apos;t a guarantee, since not every theft gets
 reported. Still confirm the seller can factory-reset it and that it isn&apos;t locked to an account
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
 Blacklisted (paid check)
 </span>
 <p className="mt-2.5">
 The blacklist check found the IMEI listed as lost or stolen. The phone may work today but can be
 blocked from networks at any time. Treat a blacklisted result as a hard stop on any
 purchase.
 </p>
 </div>

 <h2>&quot;Stolen&quot; vs &quot;blacklisted&quot; — what&apos;s the difference?</h2>
 <p>
 <strong>Reported stolen</strong> means an owner or the police flagged the device as taken.{' '}
 <strong>Blacklisted</strong> means a carrier will deny it service. A phone can be
 blacklisted for a stolen report, for unpaid bills, or for fraud — so a blacklist check
 catches problems a stolen-only lookup misses. On SafeOrStolen it&apos;s a separate paid check.
 </p>

 <h2>What the check can&apos;t tell you</h2>
 <p>SafeOrStolen doesn&apos;t see unpaid balances or financing. If the phone came from a carrier, ask the seller to call that carrier, or ask for the final bill, to confirm it&apos;s paid off before you hand over money.</p>
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
 <strong>If you already bought it:</strong> stop using it as your own, keep the receipt, the
 listing and your saved SafeOrStolen check, and report it to local police. A dated
 record that you checked before buying helps show you acted in good faith.
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
 serial-numbered goods. Results reflect the records searched at the time of the check, and
 not every stolen item is reported. For high-value purchases, also ask local police. Questions:{' '}
 <a
 href="mailto:safeorstolenmail@gmail.com"
 className="text-primary underline-offset-4 hover:underline"
 >
 safeorstolenmail@gmail.com
 </a>
 .
 </p>
 </article>
 </>
 );
};

export default CheckImeiStolenPage;
