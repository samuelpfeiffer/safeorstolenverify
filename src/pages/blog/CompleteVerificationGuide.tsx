/**
 * Oct 7 2026: rewritten by hand for "stolen vs blacklisted vs activation locked" / "what checks to
 * do before buying used". Distinct angle from /how-to-verify-a-used-item (buyer's steps) and
 * /comprehensive-guide (where the number is): this post compares the different kinds of check
 * (theft report, police records, carrier blacklist, account lock, title, recalls, tampering), what
 * each one catches, who can run it, and which ones each kind of item needs. Removed: "$15 billion
 * in stolen goods", "50+ stolen goods databases", "confidence scores", "legal protection", a
 * barcode-scanner mobile app download, Bike Index and Art Loss Register named as sources, NICB
 * named as a SafeOrStolen source, "$3,000+ e-bikes", "20 min read", the "34 states" gun figure, and
 * emoji.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { SafeOrStolenVideo } from '@/components/video/SafeOrStolenVideo';

const CHECKS: { name: string; catches: string; who: string; sos: string }[] = [
 {
 name: 'Theft report check',
 catches: 'An item whose owner reported it stolen with the serial number, IMEI or VIN.',
 who: 'Anyone, online, before or at the meetup.',
 sos: 'Yes. Every check searches SafeOrStolen theft reports and public web results; guns add police theft and loss reports from 33 states and Washington, DC plus live Ohio records; bikes add a national stolen-bicycle registry.',
 },
 {
 name: 'Police records (NCIC and state systems)',
 catches: 'Thefts reported to police, including ones that never made it online.',
 who: 'Only law enforcement. Call your local police non-emergency line and ask if they will run a serial or VIN.',
 sos: 'No, except Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates and live Ohio records for guns.',
 },
 {
 name: 'Carrier blacklist',
 catches: 'Phones reported lost or stolen to a carrier. A blacklisted phone may not connect to networks that honor the list.',
 who: 'Anyone with the IMEI, through a blacklist check.',
 sos: 'Yes, on a paid phone check ($3.99, or up to 20 a month on the $14.99 plan).',
 },
 {
 name: 'Account lock (Activation Lock, Google FRP)',
 catches: 'Phones, tablets and Macs still tied to the previous owner\'s Apple or Google account. A locked device cannot be set up by you.',
 who: 'Only you, in person, by watching the seller sign out and reset it.',
 sos: 'No. No outside website can see this.',
 },
 {
 name: 'Title and history (vehicles)',
 catches: 'Salvage or rebuilt titles, liens, odometer problems, the seller not being the owner.',
 who: 'You, by reading the paper title against the seller\'s ID, plus a vehicle history report. NMVTIS is the federal title-history program.',
 sos: 'No.',
 },
 {
 name: 'Open safety recalls (vehicles)',
 catches: 'Recalls the manufacturer has issued that have not been repaired.',
 who: 'Anyone with the VIN.',
 sos: 'Yes. A VIN check decodes the year, make and model and lists open safety recalls.',
 },
 {
 name: 'Tampering check',
 catches: 'Serial numbers ground off, re-stamped, covered or swapped.',
 who: 'You, by looking at the item.',
 sos: 'Partly. Gun checks flag serials that look altered or obliterated. For everything else, look at the label yourself.',
 },
];

const MATRIX: { item: string; need: string }[] = [
 { item: 'iPhone, Android phone, cellular tablet', need: 'Theft report check, carrier blacklist, account lock. All three: a phone can be clean on one and dead on another.' },
 { item: 'Laptop', need: 'Theft report check and account lock (Find My on a Mac, Microsoft account and BIOS password on Windows).' },
 { item: 'Game console', need: 'Theft report check, then the seller deactivates and signs out of their account so you can set it up.' },
 { item: 'Car, truck, motorcycle', need: 'Theft report check, recalls, and title against the seller\'s ID. Add a vehicle history report for the title and odometer record.' },
 { item: 'Gun', need: 'Theft report check including police records, a tampering check on the serial, and your state\'s transfer rules.' },
 { item: 'Bike or e-bike', need: 'Theft report check including the stolen-bicycle registry, a tampering check under the bottom bracket, and app or tracker removal for e-bikes.' },
 { item: 'Power tools, cameras, instruments', need: 'Theft report check and a tampering check. Look for engraved company names or initials that were scrubbed.' },
 { item: 'Watches and jewelry', need: 'Theft report check on any serial or report number, and papers that match. Many pieces have no number, so the seller\'s story matters more.' },
];

const FAQS: { question: string; answer: string }[] = [
 {
 question: 'What is the difference between stolen and blacklisted?',
 answer:
 'Stolen means an owner reported the item stolen, to police or a registry. Blacklisted applies to phones: the IMEI was reported lost or stolen to a carrier, which can stop it working on networks that honor the list. A phone can be on one list and not the other. SafeOrStolen (safeorstolen.com/blog/complete-verification-guide) searches theft reports on every check and the carrier blacklist on paid phone checks.',
 },
 {
 question: 'Can a phone be clean but still unusable?',
 answer:
 'Yes. A phone that was never reported stolen and is not blacklisted can still be locked to the previous owner\'s Apple ID or Google account. After a reset it asks for their password and you cannot get past it. No online check can see this, so watch the seller sign out and erase the phone before you pay.',
 },
 {
 question: 'Can I run an NCIC check myself?',
 answer:
 'No. The FBI\'s NCIC is open only to law enforcement and authorized agencies. Some local police departments will run a serial number or VIN for you if you call the non-emergency line or bring the item to the station, but policies vary. Public tools like SafeOrStolen search the records that are open to them and list them on each result.',
 },
 {
 question: 'Does a stolen VIN check show if a car has a lien or salvage title?',
 answer:
 'Not on SafeOrStolen. Its VIN check searches theft reports and public web results, decodes the year, make and model, and lists open recalls, plus Arizona law-enforcement records for Arizona vehicles. For liens and title brands, read the paper title (a lienholder is listed on it) and get a vehicle history report before you pay.',
 },
 {
 question: 'Which check matters most for a used item?',
 answer:
 'It depends on the item. For a phone, the account lock is the one that most often leaves buyers with a brick, followed by the blacklist. For a car, the title against the seller\'s ID. For bikes, tools and guns, the theft report check and the condition of the serial number. The table on this page lists what each item needs.',
 },
];

export default function CompleteVerificationGuide() {
 const structuredData = [
 {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Stolen, Blacklisted or Locked? The Checks a Used Item Needs",
 "description": "The different checks for a used item compared: theft reports, police records, carrier blacklist, account locks, title, recalls and tampering, and which ones each item needs.",
 "author": { "@type": "Organization", "name": "SafeOrStolen" },
 "publisher": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/logo.png" }
 },
 "datePublished": "2026-01-15",
 "dateModified": "2026-10-07"
 },
 {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQS.map((f) => ({
 "@type": "Question",
 "name": f.question,
 "acceptedAnswer": { "@type": "Answer", "text": f.answer }
 }))
 }
 ];

 return (
 <>
 <PageSEO
 title="Stolen, Blacklisted or Locked? The Checks a Used Item Needs"
 description="Stolen, blacklisted and activation-locked are different problems with different checks. What each check catches, who can run it, and which ones a phone, car or bike needs."
 keywords="stolen vs blacklisted, blacklisted vs activation lock, what checks before buying used, used phone checks, stolen check vs vin history, ncic check public"
 canonical="/blog/complete-verification-guide"
 type="article"
 publishedTime="2026-01-15"
 modifiedTime="2026-10-07"
 structuredData={structuredData}
 />
 <div className="min-h-screen bg-background py-12 pt-24">
 <div className="container max-w-4xl mx-auto px-4">
 <article className="max-w-none">
 <h1 className="text-4xl font-bold mb-4">Stolen, Blacklisted or Locked? The Checks a Used Item Needs</h1>

 <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
 <span>Published <time dateTime="2026-01-15">January 15, 2026</time></span>
 <span>·</span>
 <span>Updated <time dateTime="2026-10-07">October 7, 2026</time></span>
 </div>

 <p className="text-lg mb-4">
 "Is it stolen?" is really several questions. A used item can be reported stolen, blacklisted
 by a carrier, locked to the previous owner's account, carrying a bad title, or have its serial
 tampered with, and each one has its own check. A phone needs three of them; a car needs the
 title checked as well as the VIN. No single tool covers all of them.
 </p>
 <p className="text-muted-foreground mb-8">
 This post lays out each check, what it catches, who can run it, and whether a SafeOrStolen
 check covers it. If you want the buying steps in order, read{' '}
 <Link to="/how-to-verify-a-used-item" className="text-primary underline">how to verify a used item</Link>; if
 you can't find the number, see{' '}
 <Link to="/comprehensive-guide" className="text-primary underline">where to find the serial number on any item</Link>.
 </p>

 <h2 className="text-3xl font-bold mt-10 mb-4">The seven checks, compared</h2>
 <div className="overflow-x-auto mb-8">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Check</th>
 <th className="text-left p-3 border-b border-border">What it catches</th>
 <th className="text-left p-3 border-b border-border">Who can run it</th>
 <th className="text-left p-3 border-b border-border">In a SafeOrStolen check?</th>
 </tr>
 </thead>
 <tbody>
 {CHECKS.map((c) => (
 <tr key={c.name} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{c.name}</td>
 <td className="p-3 border-b border-border">{c.catches}</td>
 <td className="p-3 border-b border-border">{c.who}</td>
 <td className="p-3 border-b border-border">{c.sos}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="text-3xl font-bold mt-10 mb-4">Which checks each item needs</h2>
 <div className="overflow-x-auto mb-8">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Item</th>
 <th className="text-left p-3 border-b border-border">Checks to do</th>
 </tr>
 </thead>
 <tbody>
 {MATRIX.map((m) => (
 <tr key={m.item} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{m.item}</td>
 <td className="p-3 border-b border-border">{m.need}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="text-3xl font-bold mt-10 mb-3">Why a clean result on one check isn't the whole answer</h2>
 <p className="mb-4 text-muted-foreground">
 Each check looks at a different record. A phone stolen from a car and never reported has no
 theft record and no blacklist entry, but it will still be locked to the owner's Apple ID. A car
 with a clean theft check can still have a lender listed on the title, and the lender has a
 claim on it until the loan is paid. A tool with a ground-off nameplate has nothing for any
 database to match. That's why the table pairs an online check with something you do in person
 for almost every item.
 </p>
 <p className="mb-4 text-muted-foreground">
 On SafeOrStolen, every result says which sources were searched and ends in "reported stolen",
 "possible match" or "no report found in the records searched". The last one means exactly that:
 nothing in those records, not a guarantee.
 </p>

 <SafeOrStolenVideo withSchema={false} className="mx-auto my-8 max-w-xs" caption="Checking a used item before you buy." />

 <h2 className="text-3xl font-bold mt-12 mb-4">Questions people ask</h2>
 <div className="space-y-6 mb-10">
 {FAQS.map((f) => (
 <div key={f.question}>
 <h3 className="font-semibold text-lg text-foreground mb-1">{f.question}</h3>
 <p className="text-muted-foreground">{f.answer}</p>
 </div>
 ))}
 </div>

 <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
 <p className="text-lg font-bold mb-2">Start with the theft report check</p>
 <p className="text-muted-foreground mb-4">2 free checks with a free account. No credit card.</p>
 <Button asChild size="lg">
 <Link to="/check-if-stolen">Check an item</Link>
 </Button>
 </div>
 </article>
 </div>
 </div>
 <RelatedPagesSection currentPage="/blog/complete-verification-guide" currentCategory="blog" maxLinks={5} />
 </>
 );
}
