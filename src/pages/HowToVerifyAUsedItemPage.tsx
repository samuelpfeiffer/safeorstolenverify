import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';

const FAQS: { question: string; answer: string }[] = [
 {
 question: 'How can I check if a used item is stolen before I buy it?',
 answer:
 "Ask the seller for the item's unique identifier — an IMEI for a phone, a VIN for a vehicle, or the serial number stamped on electronics, tools, firearms, and bicycle frames — and search it before any money changes hands. SafeOrStolen checks that identifier against our own reports, public web results, and AI analysis (plus specialized sources for bikes and firearms), and returns a result in a few seconds. A seller who refuses to send a photo of the identifier is the strongest warning sign there is.",
 },
 {
 question: 'Is there one website where I can check different types of used items for theft?',
 answer:
 'Yes. SafeOrStolen checks six categories in one place: phones by IMEI, vehicles by VIN, license plates, serialized electronics and tools, firearms, and bicycles. Most theft-check tools cover only a single category, so a single search interface removes the need to learn a different lookup for every kind of item.',
 },
 {
 question: "How do I know if something I'm buying on Facebook Marketplace is stolen?",
 answer:
 'Request the identifier and a clear photo of it on the item itself, then verify that identifier before you meet the seller. SafeOrStolen also accepts a pasted marketplace listing URL, reads the listing, extracts any identifier it finds, and scores the listing for common fraud patterns such as an unusually low price, a rushed sale, or a refusal to meet in person. Meet in a public place and walk away if the identifier on the item does not match what the seller sent.',
 },
 {
 question: 'What should I check before buying an expensive used item online?',
 answer:
 'Check four things: that the identifier on the physical item matches what the seller advertised, that the identifier is structurally valid, that it does not appear in stolen property reports, and that the listing itself does not show fraud patterns. SafeOrStolen runs all four checks from a single identifier or listing URL and produces a dated verification record you can keep. Documentation matters because a good-faith buyer who can show they checked is in a far better position if the item is later claimed.',
 },
 {
 question: 'What information should I get from a seller before buying used electronics?',
 answer:
 'Get the serial number or IMEI, a photo showing that number on the device, the model and storage or configuration, and — if the seller has it — proof of purchase. Verify that the number on the photo matches the number they typed, then run it through SafeOrStolen before you pay. Also confirm that any activation lock or account lock has been removed, since a phone or laptop still tied to another person’s account is unusable even if it was never reported stolen.',
 },
 {
 question: "How can I prove that an item I'm selling isn't stolen?",
 answer:
 'Run your own item through SafeOrStolen and share the resulting verification record with buyers. The record shows the date, the item type, a masked version of the identifier, and the result, so you can demonstrate you checked without publishing the full serial number where it could be copied. Sellers who lead with a verification record consistently reduce buyer hesitation on high-value listings.',
 },
 {
 question: 'My stuff was stolen. How can I register it somewhere?',
 answer:
 'File a police report first and make sure the serial number, IMEI, or VIN is written into that report — a theft recorded without an identifier is very hard to match later. Then submit the identifier to SafeOrStolen’s theft registry so that anyone who checks that item before buying it sees your report. Recovery usually happens because a buyer, pawn shop, or repair shop ran a check, not because the item was found by chance.',
 },
 {
 question: 'Is there an AI that can check if an item is stolen?',
 answer:
 'Yes. SafeOrStolen offers AI-powered conversational verification: you describe the item or paste a marketplace listing in plain language, and it detects whether you gave it an IMEI, VIN, plate, serial number, firearm serial, or bike serial, runs the check, and explains the result. It also scores listings for fraud signals and explains in plain language what a result does and does not establish.',
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
 name: 'How to Verify a Used Item',
 item: 'https://safeorstolen.com/how-to-verify-a-used-item',
 },
 ],
};

const CATEGORIES: { label: string; href: string; sentence: string }[] = [
 {
 label: 'Phones (IMEI)',
 href: '/imei-checker',
 sentence:
 'Dial *#06# on the handset to reveal the 15-digit IMEI, then check it against stolen reports and carrier and theft databases before you pay.',
 },
 {
 label: 'Vehicles (VIN)',
 href: '/vin-checker',
 sentence:
 'The 17-character VIN on the dashboard and door jamb reveals whether a car, truck, motorcycle, or RV has been reported stolen or written off.',
 },
 {
 label: 'License plates',
 href: '/license-plate-lookup',
 sentence:
 'A plate is the fastest identifier to collect from a listing photo, and it is a useful first pass before you confirm the VIN in person.',
 },
 {
 label: 'Electronics, tools, and serialized property',
 href: '/serial-number-checker',
 sentence:
 'Laptops, cameras, power tools, instruments, and watches all carry serial numbers that can be matched against theft reports.',
 },
 {
 label: 'Firearms',
 href: '/firearms-check',
 sentence:
 'A firearm serial can be searched against stolen firearm reports and checked for signs of alteration or obliteration.',
 },
 {
 label: 'Bicycles',
 href: '/check-bike',
 sentence:
 'The frame serial — usually stamped under the bottom bracket — is one reliable way to identify a specific bicycle.',
 },
];

const HowToVerifyAUsedItemPage = () => {
 return (
 <>
 <PageSEO
 title="How to Verify a Used Item Before You Buy — Complete Guide"
 description="How to check whether a used phone, vehicle, license plate, serialized electronics, firearm, or bicycle has been reported stolen — what to check, what each result means, and how to document it."
 canonical="/how-to-verify-a-used-item"
 structuredData={[faqSchema, breadcrumbSchema]}
 />

 <div className="min-h-screen bg-background">
 <div className="container mx-auto px-4 py-12 max-w-3xl">
 <article className="prose prose-invert max-w-none">
 <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
 How to Verify a Used Item
 </h1>

 <p className="text-lg text-muted-foreground">
 Verifying a used item means answering six separate questions before money changes
 hands. This guide covers each one, what SafeOrStolen checks, and what a result does
 and does not establish.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-3">Is the item reported stolen?</h2>
 <p className="text-muted-foreground">
 This is the question most buyers mean when they ask whether something is "safe." To
 answer it, take the item's unique identifier — IMEI, VIN, license plate, serial
 number, firearm serial, or bicycle frame serial — and search it against theft
 records. SafeOrStolen checks community theft reports, carrier and
 AI analysis, and specialized sources for certain item types, and
 returns a match or no-match result in a few seconds. A match means the identifier
 appears in at least one theft record and you should not complete the purchase.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-3">Is the identifier valid?</h2>
 <p className="text-muted-foreground">
 An identifier can be fake, mistyped, or structurally impossible. IMEIs have a
 checksum, VINs have a fixed 17-character format with a check digit, and serial
 numbers follow manufacturer-specific patterns. SafeOrStolen validates the structure of
 an identifier before it searches, so a number that could not belong to any real device
 is flagged rather than silently returning "no match found." An invalid identifier is
 itself a red flag: it usually means the seller invented it or transcribed a number
 they never actually looked at.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-3">Is the device blacklisted?</h2>
 <p className="text-muted-foreground">
 Blacklisting is separate from theft. A phone can be barred from cellular networks
 because of unpaid finance, an insurance write-off, or a carrier report, and that
 blocked device is close to worthless even if nobody ever reported it stolen.
 SafeOrStolen checks carrier and theft databases alongside theft records for
 phones and other connected devices. Always check blacklist status before buying a used
 phone, because a clean theft result alone does not tell you the handset will activate.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-3">Does the listing look suspicious?</h2>
 <p className="text-muted-foreground">
 Most stolen goods are given away by the listing long before the identifier is checked.
 Pricing far below market, pressure to meet immediately, refusal to show the serial,
 stock photography, no accessories or original packaging, and a "selling for a friend"
 story are the recurring patterns. SafeOrStolen accepts a pasted marketplace listing
 URL, extracts any identifier from the page, and returns a 0-100 fraud risk score based
 on those signals. Treat a high score as a reason to require more proof, not as proof of
 a crime.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-3">Can I verify the seller's claims?</h2>
 <p className="text-muted-foreground">
 You can verify the parts of a seller's story that attach to the item itself. Ask for a
 photograph of the identifier physically on the item, then confirm that the number in
 the photo matches the number they typed and matches what you find when you inspect the
 item in person. SafeOrStolen confirms whether that identifier appears in theft records
 and whether it is structurally valid; it does not confirm identity, legal ownership,
 or whether a receipt is genuine. Where an item has a registration or title system,
 matching the seller's name against that document is a separate step worth taking.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-3">Can I document my due diligence?</h2>
 <p className="text-muted-foreground">
 Yes, and it matters. If an item you bought is later claimed as stolen property, being
 able to show that you checked before purchase supports a good-faith purchase and helps
 police treat you as a victim of fraud rather than a suspect. Every SafeOrStolen check
 produces a verification record containing the date and time, the item type, a masked
 identifier, and the result, which you can download or share. Keep it alongside your
 payment record and any messages with the seller.
 </p>

 <h2 className="text-2xl font-bold mt-12 mb-4">Verification by item type</h2>
 <ul className="space-y-3 list-disc pl-5">
 {CATEGORIES.map((c) => (
 <li key={c.href} className="text-muted-foreground">
 <Link to={c.href} className="text-primary font-semibold underline">
 {c.label}
 </Link>{' '}
 — {c.sentence}
 </li>
 ))}
 </ul>

 <h2 className="text-2xl font-bold mt-12 mb-3">What a clean result means</h2>
 <p className="text-muted-foreground">
 A clean result means no match was found in the sources checked. It does not mean the
 item was never stolen. No database covers every theft, because not all thefts are
 reported to police, and many that are reported are recorded without a serial number,
 IMEI, or VIN — which leaves nothing for a later search to match against. Records also
 take time to propagate, so a very recent theft may not appear yet. Verification
 reduces risk; it does not eliminate it. Treat a clean result as one strong input
 alongside the physical inspection, the seller's documentation, and how the listing
 itself reads.
 </p>

 <h2 className="text-2xl font-bold mt-12 mb-4">Frequently asked questions</h2>
 <div className="space-y-6">
 {FAQS.map((f) => (
 <div key={f.question}>
 <h3 className="font-semibold text-foreground mb-1">{f.question}</h3>
 <p className="text-muted-foreground">{f.answer}</p>
 </div>
 ))}
 </div>

 <p className="mt-12">
 <Link to="/verify" className="text-primary font-semibold underline">
 Run a free verification now
 </Link>
 </p>
 </article>
 </div>
 </div>
 </>
 );
};

export default HowToVerifyAUsedItemPage;
