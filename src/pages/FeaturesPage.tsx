/**
 * Oct 7 2026: rewritten by hand for "safeorstolen features" / "what can safeorstolen do". A plain
 * list of what the product actually does, each with what it costs. Removed false or unconfirmed
 * claims: an iOS and Android app (the app is an installable web app at /app), offline mode, a
 * barcode scanner, "190+ countries", a REST API, team accounts with role permissions, automated
 * compliance reports, "under 3 seconds", "24/7", "AI-powered" and "peace of mind".
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';

const FEATURES: { name: string; what: string; cost: string; href: string; linkText: string }[] = [
 {
 name: 'Stolen item check',
 what: 'One box for an IMEI, VIN, plate or serial number. Searches SafeOrStolen theft reports and public web results, plus extra sources for some items (below). Results in a few seconds with every source listed.',
 cost: '2 free, then $0.99 each or unlimited at $10 a month',
 href: '/check-if-stolen',
 linkText: 'Check an item',
 },
 {
 name: 'Gun serial check',
 what: 'Adds 242,839 police firearm theft and loss reports from 33 states and Washington, DC, using the same gun codes as the FBI’s NCIC gun file (filed 1973–2017) and live Ohio law-enforcement records. Flags serials that look altered or obliterated.',
 cost: 'Same as any check',
 href: '/firearms-check',
 linkText: 'Gun check',
 },
 {
 name: 'Bike serial check',
 what: 'Adds a national stolen-bicycle registry to the search for the frame serial number.',
 cost: 'Same as any check',
 href: '/check-bike',
 linkText: 'Bike check',
 },
 {
 name: 'VIN check',
 what: 'Decodes the year, make and model and lists open safety recalls. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day.',
 cost: 'Same as any check',
 href: '/vin-checker',
 linkText: 'VIN check',
 },
 {
 name: 'License plate check',
 what: 'Searches SafeOrStolen theft reports for the plate, and Arizona law-enforcement records for Arizona plates. Never shows the owner\'s name.',
 cost: 'Same as any check',
 href: '/license-plate-lookup',
 linkText: 'Plate check',
 },
 {
 name: 'IMEI check and phone blacklist check',
 what: 'Shows the make and model the IMEI belongs to and searches theft reports. A paid check adds the lost/stolen carrier blacklist search.',
 cost: 'Blacklist search on a $0.99 check, or up to 20 a month on the monthly plan',
 href: '/imei-checker',
 linkText: 'IMEI check',
 },
 {
 name: 'Check history',
 what: 'Every check is saved to your account with the number, the date, the result and the sources searched.',
 cost: 'Included',
 href: '/dashboard',
 linkText: 'Your dashboard',
 },
 {
 name: 'Verification certificate',
 what: 'A dated record with its own link that shows you checked an item before the sale. Send it to a buyer, or keep it in case questions come up after you buy.',
 cost: '$1.99, free for monthly members',
 href: '/pricing',
 linkText: 'Pricing',
 },
 {
 name: 'Report a stolen item',
 what: 'If something of yours was stolen, add its serial number, IMEI or VIN. Anyone who checks that number later sees the report.',
 cost: 'Free',
 href: '/report-stolen',
 linkText: 'Report a theft',
 },
 {
 name: 'Bulk check',
 what: 'For pawn shops and dealers: check a list of serial numbers, IMEIs or VINs at once.',
 cost: 'See the bulk check page',
 href: '/bulk-check',
 linkText: 'Bulk check',
 },
 {
 name: 'Installable web app',
 what: 'Add SafeOrStolen to your phone\'s home screen from your browser, so you can check a number on the spot at a meetup. It is a web app, not an App Store or Google Play download.',
 cost: 'Free',
 href: '/app',
 linkText: 'Get the web app',
 },
];

const FAQS: { question: string; answer: string }[] = [
 {
 question: 'What can SafeOrStolen check?',
 answer:
 'SafeOrStolen (safeorstolen.com/features) checks phones and tablets by IMEI, vehicles by VIN, license plates, guns, bikes, and anything else with a serial number, such as laptops, game consoles, cameras and power tools. Every check searches SafeOrStolen theft reports and public web results. Guns, bikes, Arizona vehicles and paid phone checks get extra sources.',
 },
 {
 question: 'Is there a SafeOrStolen app?',
 answer:
 'Yes, a free installable web app at safeorstolen.com/app. Open it in your phone\'s browser and add it to your home screen; it then opens like an app. It is not in the App Store or Google Play. It runs the same checks as the website, so you can check a serial number while standing next to the item.',
 },
 {
 question: 'Can a pawn shop or dealer check many items at once?',
 answer:
 'Yes. Bulk check at safeorstolen.com/bulk-check lets a pawn shop, dealer or reseller run a list of serial numbers, IMEIs or VINs in one go instead of typing them one by one. Each number is searched the same way as a single check. For questions about volume or setup, email safeorstolenmail@gmail.com.',
 },
 {
 question: 'Can I prove I checked an item before I bought it?',
 answer:
 'Yes. Every check is saved to your account with the date. For something you can share, add a verification certificate for $1.99: a dated record with its own link showing you checked before the sale. Monthly members get certificates free. It shows you did your homework; it doesn\'t replace a receipt or bill of sale.',
 },
 {
 question: 'Which records does SafeOrStolen search?',
 answer:
 'Every check searches SafeOrStolen\'s own theft reports and public web results. Gun checks add 242,839 police firearm theft and loss reports from 33 states and Washington, DC, using the same gun codes as the FBI’s NCIC gun file (filed 1973–2017) and live Ohio law-enforcement stolen-gun records. Arizona VINs and plates add Arizona law-enforcement stolen-vehicle records, vehicle checks decode the VIN and show open safety recalls, bike checks add a national stolen-bicycle registry, and the paid phone check searches the lost and stolen phone blacklist. Every result lists exactly which sources were searched.',
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

export default function FeaturesPage() {
 return (
 <>
 <PageSEO
 title="SafeOrStolen Features: Every Check and Tool, With Prices"
 description="Everything SafeOrStolen does: IMEI, VIN, plate, gun, bike and serial checks, phone blacklist search, check history, $1.99 certificates, bulk check and the web app."
 keywords="safeorstolen features, what can safeorstolen check, stolen item checker features, safeorstolen app, verification certificate, bulk stolen check"
 canonical="/features"
 modifiedTime="2026-10-07"
 structuredData={faqSchema}
 />
 <div className="min-h-screen bg-background pt-20">
 <article className="container mx-auto px-4 py-16 max-w-4xl">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">SafeOrStolen Features</h1>
 <p className="text-sm text-muted-foreground mb-6">
 Updated <time dateTime="2026-10-07">October 7, 2026</time>
 </p>
 <p className="text-lg mb-4">
 SafeOrStolen checks whether a phone, vehicle, plate, gun, bike or any serial-numbered item has
 been reported stolen. On top of the check itself you get a saved history of every search, an
 optional $1.99 verification certificate, a free form to report your own stolen items, bulk
 checking for businesses, and a free web app you can use at a meetup.
 </p>
 <p className="text-muted-foreground mb-8">
 Here is every feature, what it does and what it costs. Nothing on this list is "coming soon."
 </p>

 <div className="overflow-x-auto mb-10">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Feature</th>
 <th className="text-left p-3 border-b border-border">What it does</th>
 <th className="text-left p-3 border-b border-border">Cost</th>
 </tr>
 </thead>
 <tbody>
 {FEATURES.map((f) => (
 <tr key={f.name} className="align-top">
 <td className="p-3 border-b border-border font-semibold">
 <Link to={f.href} className="text-primary underline">{f.name}</Link>
 </td>
 <td className="p-3 border-b border-border">{f.what}</td>
 <td className="p-3 border-b border-border">{f.cost}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">Results you can read in one look</h2>
 <p className="text-muted-foreground mb-4">
 Every check ends in one of three results: "reported stolen", "possible match", or "no report
 found in the records searched". Under it you see each source that was searched. Before you pay,
 also ask the seller for proof of ownership. The step-by-step of what happens behind the search box is on{' '}
 <Link to="/how-it-works" className="text-primary underline">how it works</Link>.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">Privacy and next steps</h2>
 <p className="text-muted-foreground mb-4">
 SafeOrStolen never shows who owns an item or who reported it. For a used car, also get a vehicle
 history report and compare the title with the seller's ID. When you buy a used phone or laptop,
 have the seller sign out of their account and erase it in front of you.
 </p>

 <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Questions about features</h2>
 <div className="space-y-6">
 {FAQS.map((f) => (
 <div key={f.question}>
 <h3 className="font-semibold text-lg text-foreground mb-1">{f.question}</h3>
 <p className="text-muted-foreground">{f.answer}</p>
 </div>
 ))}
 </div>

 <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
 <h2 className="text-2xl font-bold mb-2">Try it on your next purchase</h2>
 <p className="text-muted-foreground mb-4">2 free checks, no account needed. No credit card.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link to="/verify">
 Check an item <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/pricing">See pricing</Link>
 </Button>
 </div>
 </div>
 </article>
 </div>
 </>
 );
}
