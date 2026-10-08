/**
 * Oct 7 2026: rewritten by hand for "how does SafeOrStolen work" / "how a stolen item check works".
 * This page explains exactly what happens when you run a check: what you enter, which sources are
 * searched for each kind of item, what the three results mean, and what gets saved. The tool itself
 * lives at /check-if-stolen and prices at /pricing. Removed: named data suppliers (BikeIndex,
 * IMEI.info, StolenRegister, Stolen911), invented "data partners" (insurers, carriers, federal
 * database), the "34 states" gun figure (it is 33 states plus DC), "AI analysis" listed as a source,
 * claims about title/accident history and legal-protection certificates, "valid for 14 days",
 * "priority support", "API access", and the duplicated plans and identifier sections.
 */
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';

const SOURCES: { item: string; enter: string; searched: string; extra: string }[] = [
 {
 item: 'Phone or tablet',
 enter: '15-digit IMEI',
 searched: 'SafeOrStolen theft reports and public web results',
 extra: 'Shows the make and model the IMEI belongs to. A paid check can also search the lost/stolen carrier blacklist.',
 },
 {
 item: 'Car, truck or motorcycle',
 enter: '17-character VIN',
 searched: 'SafeOrStolen theft reports and public web results',
 extra: 'Decodes the year, make and model and lists open safety recalls. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day.',
 },
 {
 item: 'License plate',
 enter: 'Plate number and state',
 searched: 'SafeOrStolen theft reports',
 extra: 'Arizona plates are also searched against Arizona law-enforcement records. Owner names are never shown.',
 },
 {
 item: 'Gun',
 enter: 'Serial number from the frame or receiver',
 searched: 'SafeOrStolen theft reports and public web results',
 extra: '242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), plus live Ohio law-enforcement records. Serials that look altered or obliterated are flagged.',
 },
 {
 item: 'Bicycle or e-bike',
 enter: 'Frame serial number',
 searched: 'SafeOrStolen theft reports and public web results',
 extra: 'A national stolen-bicycle registry.',
 },
 {
 item: 'Laptop, console, camera, tool and anything else with a serial',
 enter: 'Serial number',
 searched: 'SafeOrStolen theft reports and public web results',
 extra: 'None. These checks rely on owner reports and public listings.',
 },
];

const RESULTS: { label: string; meaning: string; next: string }[] = [
 {
 label: 'Reported stolen',
 meaning: 'The number matches a theft report in one of the sources searched. The result shows which source.',
 next: "Don't buy. Don't confront the seller. Keep the listing and messages and give them to local police.",
 },
 {
 label: 'Possible match',
 meaning: 'Something close turned up: a similar number, a public post that mentions it, or a partial record.',
 next: 'Read the details. Ask the seller to explain, compare the number on the item itself, and walk away if it doesn\'t add up.',
 },
 {
 label: 'No report found in the records searched',
 meaning: 'Nothing matched in any listed source. It is not proof the item was never stolen, because many thefts are never reported with a serial number.',
 next: 'Go ahead with the normal checks: number on the item matches the listing, seller can unlock or sign out of it, story makes sense.',
 },
];

const FAQS: { question: string; answer: string }[] = [
 {
 question: 'How does SafeOrStolen work?',
 answer:
 'You type in the item\'s identifier: an IMEI for a phone, a VIN for a vehicle, a plate, or a serial number for anything else. SafeOrStolen (safeorstolen.com/how-it-works) searches its own theft reports and public web results, plus extra sources for guns, bikes, Arizona vehicles and paid phone checks. In a few seconds you get one of three results with every source listed, and the check is saved to your account with the date.',
 },
 {
 question: 'Does SafeOrStolen search police databases?',
 answer:
 'For some items. Gun checks search 242,839 police firearm theft and loss reports from 33 states and Washington, DC, filed through 2017 with years that vary by state, and live Ohio law-enforcement records. Arizona VINs and plates are searched against Arizona law-enforcement stolen-vehicle records. SafeOrStolen does not search the FBI\'s NCIC, ATF eTrace or any DMV, which the public cannot query.',
 },
 {
 question: 'What does "no report found" mean?',
 answer:
 'It means the number did not match anything in the sources listed on your result. It does not prove the item is clean. Plenty of owners never record their serial numbers, and a theft from last night may not be reported anywhere yet. Treat it as one good sign, then check that the number on the item matches the listing and that the seller can unlock or sign out of it.',
 },
 {
 question: 'Can SafeOrStolen tell me if a phone is blacklisted?',
 answer:
 'Yes, with a paid check. A free phone check shows the make and model the IMEI belongs to and searches SafeOrStolen theft reports and public web results. The lost/stolen carrier blacklist search is part of a paid check, and monthly members get up to 20 blacklist checks a month. SafeOrStolen does not check Apple or Google account locks, so have the seller sign out in front of you.',
 },
 {
 question: 'Does a VIN check show accident or title history?',
 answer:
 'No. A SafeOrStolen VIN check decodes the year, make and model, lists open safety recalls, and searches theft reports and public web results, plus Arizona law-enforcement records for Arizona vehicles. It does not show title brands, accidents, liens or odometer readings. Get those from a vehicle history report and the state title before you buy a car.',
 },
 {
 question: 'Is my check saved, and can I prove I checked?',
 answer:
 'Every check is saved to your SafeOrStolen account with the date and the sources searched. If you want something to show a seller, buyer or the police later, you can add a verification certificate for $1.99: a dated record with its own link showing you checked before the sale. Monthly members get certificates free.',
 },
 {
 question: 'Can I see who owns an item or who reported it stolen?',
 answer:
 'No. SafeOrStolen never shows owner names, addresses or who filed a report, and plate searches never return the registered owner. If an item comes back reported stolen, contact your local police on their non-emergency line. They can reach the owner and decide what happens next.',
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

const howToSchema = {
 '@context': 'https://schema.org',
 '@type': 'HowTo',
 name: 'How a SafeOrStolen stolen item check works',
 dateModified: '2026-10-07',
 step: [
 { '@type': 'HowToStep', position: 1, name: 'Enter the number', text: 'Type the IMEI, VIN, plate or serial number into the search box.' },
 { '@type': 'HowToStep', position: 2, name: 'Sources are searched', text: 'SafeOrStolen searches its theft reports and public web results, plus extra sources for guns, bikes, Arizona vehicles and paid phone checks.' },
 { '@type': 'HowToStep', position: 3, name: 'Read the result', text: 'You see "reported stolen", "possible match" or "no report found in the records searched", with every source listed.' },
 { '@type': 'HowToStep', position: 4, name: 'Keep the record', text: 'The check is saved to your account with the date. A $1.99 verification certificate is optional.' },
 ],
};

const HowItWorksPage = () => {
 return (
 <>
 <PageSEO
 title="How It Works: What a SafeOrStolen Check Searches"
 description="What happens when you run a SafeOrStolen check: what to enter, which sources are searched for phones, cars, guns and bikes, what each result means, and what's saved."
 keywords="how does safeorstolen work, how stolen item check works, what does safeorstolen search, stolen item check sources, safeorstolen results explained"
 canonical="/how-it-works"
 modifiedTime="2026-10-07"
 structuredData={[howToSchema, faqSchema]}
 />

 <div className="min-h-screen bg-background pt-20">
 <div className="container mx-auto px-4 pt-24 pb-4 max-w-4xl">
 <BreadcrumbNavigation items={[{ name: 'How It Works', href: '/how-it-works' }]} />
 </div>

 <article className="container mx-auto px-4 pb-16 max-w-4xl">
 <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How SafeOrStolen Works</h1>
 <p className="text-sm text-muted-foreground mb-6">
 Updated <time dateTime="2026-10-07">October 7, 2026</time>
 </p>

 <p className="text-lg text-foreground mb-4">
 You enter an item's IMEI, VIN, plate or serial number. SafeOrStolen searches its own theft
 reports and public web results, adds police records for guns and Arizona vehicles, a
 stolen-bicycle registry for bikes and a carrier blacklist on paid phone checks, and shows one of
 three results in a few seconds, with every source it searched. The check is saved to your
 account with the date.
 </p>
 <p className="text-muted-foreground mb-8">
 Below is exactly what goes in, what gets searched, what comes back, and what a check can't tell
 you. To run one now, use the <Link to="/check-if-stolen" className="text-primary underline">stolen item checker</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Step 1: You enter the number</h2>
 <p className="text-muted-foreground mb-4">
 One box takes any identifier. A 15-digit number is read as a phone IMEI, 17 characters as a
 VIN, and anything else as a serial number or plate. You can also pick the item type yourself.
 Get the number from the item, not from the listing text: ask the seller for a photo of the
 label, the engraving or the Settings screen, and check that same number again when you meet.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Step 2: The sources are searched</h2>
 <p className="text-muted-foreground mb-4">
 Every check searches two things: theft reports owners have filed on SafeOrStolen, and public web
 results such as listings and posts that mention the number. Some item types get more.
 </p>
 <div className="overflow-x-auto mb-6">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Item</th>
 <th className="text-left p-3 border-b border-border">What you enter</th>
 <th className="text-left p-3 border-b border-border">Always searched</th>
 <th className="text-left p-3 border-b border-border">Added for this item</th>
 </tr>
 </thead>
 <tbody>
 {SOURCES.map((s) => (
 <tr key={s.item} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{s.item}</td>
 <td className="p-3 border-b border-border">{s.enter}</td>
 <td className="p-3 border-b border-border">{s.searched}</td>
 <td className="p-3 border-b border-border">{s.extra}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h3 className="text-xl font-bold mt-6 mb-3">What a check does not search</h3>
 <p className="text-muted-foreground mb-3">
 Some records aren't open to the public, and SafeOrStolen doesn't pretend otherwise. A check does
 not search:
 </p>
 <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
 <li>The FBI's NCIC or ATF eTrace (police-only systems)</li>
 <li>State DMV or MVD title and registration records</li>
 <li>Carrier records, other than the blacklist search on a paid phone check</li>
 <li>Apple Activation Lock, Find My, or Google account status</li>
 <li>Manufacturer, pawn shop or insurance company databases</li>
 </ul>
 <p className="text-muted-foreground mb-4">
 That's why the result always lists its sources. You can see what was covered and decide what
 else to check yourself, like having the seller sign out of their Apple ID in front of you.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Step 3: You get one of three results</h2>
 <div className="overflow-x-auto mb-6">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Result</th>
 <th className="text-left p-3 border-b border-border">What it means</th>
 <th className="text-left p-3 border-b border-border">What to do</th>
 </tr>
 </thead>
 <tbody>
 {RESULTS.map((r) => (
 <tr key={r.label} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{r.label}</td>
 <td className="p-3 border-b border-border">{r.meaning}</td>
 <td className="p-3 border-b border-border">{r.next}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Step 4: The check is saved</h2>
 <p className="text-muted-foreground mb-4">
 Each check goes into your account history with the number, the date, the result and the sources
 searched. You can come back to it if a question comes up after the sale. If you want a record
 you can send to someone, add a verification certificate for $1.99. It's a dated record with its
 own link that shows you checked before you bought. Monthly members get certificates free.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">What it costs</h2>
 <p className="text-muted-foreground mb-4">
 A free account comes with 2 checks and no credit card. After that it's $3.99 for a single check
 or $14.99 a month for unlimited checks. Full details are on the{' '}
 <Link to="/pricing" className="text-primary underline">pricing page</Link>. Pawn shops and
 dealers checking many items at once can use <Link to="/bulk-check" className="text-primary underline">bulk check</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Not sure where the number is?</h2>
 <p className="text-muted-foreground mb-4">
 Each item has its own page with photos of where to look:{' '}
 <Link to="/imei-checker" className="text-primary underline">phones</Link>,{' '}
 <Link to="/vin-checker" className="text-primary underline">cars</Link>,{' '}
 <Link to="/license-plate-lookup" className="text-primary underline">plates</Link>,{' '}
 <Link to="/firearms-check" className="text-primary underline">guns</Link>,{' '}
 <Link to="/check-bike" className="text-primary underline">bikes</Link> and{' '}
 <Link to="/serial-number-checker" className="text-primary underline">everything else with a serial number</Link>.
 For a buyer's checklist from listing to handover, read{' '}
 <Link to="/how-to-verify-a-used-item" className="text-primary underline">how to verify a used item</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Questions people ask</h2>
 <div className="space-y-6">
 {FAQS.map((f) => (
 <div key={f.question}>
 <h3 className="font-semibold text-lg text-foreground mb-1">{f.question}</h3>
 <p className="text-muted-foreground">{f.answer}</p>
 </div>
 ))}
 </div>

 <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
 <h2 className="text-2xl font-bold mb-2">Run a check</h2>
 <p className="text-muted-foreground mb-4">2 free checks with a free account. No credit card.</p>
 <Button size="lg" asChild>
 <Link to="/verify">Check an item</Link>
 </Button>
 </div>
 </article>
 </div>
 </>
 );
};

export default HowItWorksPage;
