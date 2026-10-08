/**
 * Oct 7 2026: rewritten by hand for "where to find the serial number on any item" / "serial number
 * location". This page is an item-by-item reference: where the identifier is on each kind of item,
 * where else to read it, and which SafeOrStolen check fits. The buyer's step-by-step is at
 * /how-to-verify-a-used-item and is not repeated here. Removed: invented market figures ($200
 * billion resale, $50 billion stolen goods), invented penalty ranges and fine amounts, claims that
 * an IMEI check shows insurance claims and Activation Lock and that a VIN check shows title, lien,
 * odometer and accident history, "30-second check", "legally required" wording on firearms, and the
 * "creates a defense" legal claim.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';

type Row = { item: string; id: string; onItem: string; elsewhere: string; check: string; href: string };

const GROUPS: { heading: string; anchor: string; note: string; rows: Row[] }[] = [
 {
 heading: 'Phones, tablets and watches with cellular',
 anchor: 'phones',
 note:
 'Check the IMEI, not the serial number, on anything with a cellular connection: it is what carriers and owners report. A free check shows the make and model the IMEI belongs to, so you can see if it matches the phone in your hand. A paid check adds the lost/stolen carrier blacklist.',
 rows: [
 { item: 'iPhone', id: 'IMEI (15 digits)', onItem: 'SIM tray on models that have one; recent US models have no SIM tray', elsewhere: 'Dial *#06#, or Settings > General > About', check: 'IMEI check', href: '/check-iphone-stolen' },
 { item: 'Android phone', id: 'IMEI (15 digits)', onItem: 'SIM tray or a label under the back cover on older models', elsewhere: 'Dial *#06#, or Settings > About phone', check: 'IMEI check', href: '/check-android-phone-stolen' },
 { item: 'iPad or Android tablet with cellular', id: 'IMEI', onItem: 'Engraved on the back of some older iPads', elsewhere: 'Settings > General > About (iPad) or Settings > About tablet', check: 'IMEI check', href: '/check-tablet-stolen' },
 { item: 'Wi-Fi-only tablet', id: 'Serial number', onItem: 'Back of the case on some models', elsewhere: 'Settings > General > About, or the box', check: 'Serial check', href: '/serial-number-checker' },
 ],
 },
 {
 heading: 'Laptops, consoles, cameras and TVs',
 anchor: 'electronics',
 note:
 'These are checked by serial number. Read it from the settings screen and from the label, and make sure the two match: a mismatch means a replaced part or a swapped label.',
 rows: [
 { item: 'MacBook', id: 'Serial number', onItem: 'Printed on the underside, near the hinge', elsewhere: 'Apple menu > About This Mac', check: 'Laptop check', href: '/check-laptop-stolen' },
 { item: 'Windows laptop', id: 'Serial number (sometimes "S/N")', onItem: 'Label on the bottom, or under the battery on older models', elsewhere: 'Type "wmic bios get serialnumber" in Command Prompt', check: 'Laptop check', href: '/check-laptop-stolen' },
 { item: 'PlayStation 5', id: 'Serial number', onItem: 'Sticker on the back or base of the console', elsewhere: 'Settings > System > System Software > Console Information', check: 'PS5 check', href: '/check-ps5' },
 { item: 'Xbox Series X or S', id: 'Serial number', onItem: 'Sticker on the back near the ports', elsewhere: 'Settings > System > Console info', check: 'Xbox check', href: '/check-xbox' },
 { item: 'Nintendo Switch', id: 'Serial number', onItem: 'Bottom edge of the console, near the charging port', elsewhere: 'System Settings > System > Serial Information', check: 'Console check', href: '/check-gaming-console-stolen' },
 { item: 'Camera or lens', id: 'Serial number', onItem: 'Bottom plate of the body, or inside the battery door; on a lens, near the mount or on the barrel', elsewhere: 'Original box or receipt', check: 'Camera check', href: '/check-camera-stolen' },
 { item: 'TV', id: 'Serial number', onItem: 'Label on the back panel', elsewhere: 'The TV\'s Settings > Support or About screen', check: 'TV check', href: '/how-to-check-if-tv-stolen' },
 ],
 },
 {
 heading: 'Vehicles, trailers and boats',
 anchor: 'vehicles',
 note:
 'A VIN check decodes the year, make and model and lists open safety recalls, so you can see if the VIN belongs to the vehicle in front of you. Arizona VINs and plates are also searched against Arizona law-enforcement stolen-vehicle records. It does not show title, lien or accident history.',
 rows: [
 { item: 'Car or truck', id: 'VIN (17 characters)', onItem: 'Bottom of the windshield on the driver\'s side, and the sticker on the driver\'s door jamb', elsewhere: 'Title, registration and insurance card', check: 'VIN check', href: '/vin-checker' },
 { item: 'Motorcycle', id: 'VIN (17 characters)', onItem: 'Stamped on the steering head (the neck of the frame), often with a sticker on the frame too', elsewhere: 'Title and registration', check: 'Motorcycle VIN check', href: '/check-motorcycle-stolen-vin' },
 { item: 'Any vehicle you only see in photos', id: 'License plate', onItem: 'Front and rear plates in the listing photos', elsewhere: 'Ask the seller', check: 'Plate check', href: '/license-plate-lookup' },
 { item: 'Trailer or ATV', id: 'VIN or frame serial', onItem: 'Trailer: plate or stamp on the tongue or frame. ATV: stamped on the frame, often near the front', elsewhere: 'Title or certificate of origin', check: 'Trailer and ATV guide', href: '/how-to-check-if-trailer-atv-stolen' },
 { item: 'Boat', id: 'HIN (hull identification number, 12 characters)', onItem: 'Upper right of the transom, on the starboard side', elsewhere: 'Registration or title', check: 'Boat check', href: '/check-boat' },
 ],
 },
 {
 heading: 'Bikes, tools and guns',
 anchor: 'bikes-tools-guns',
 note:
 'Bike checks add a national stolen-bicycle registry. Gun checks add 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state) and live Ohio law-enforcement records, and flag serials that look altered.',
 rows: [
 { item: 'Bike or e-bike', id: 'Frame serial number', onItem: 'Under the bottom bracket, where the pedal cranks meet the frame. Turn the bike over.', elsewhere: 'Receipt or the shop\'s sales record. E-bike batteries and motors carry their own numbers.', check: 'Bike check', href: '/check-bike' },
 { item: 'Power tool', id: 'Serial number', onItem: 'Nameplate on the motor housing or handle, next to the model number', elsewhere: 'Batteries and chargers have their own labels', check: 'Tool check', href: '/check-tools' },
 { item: 'Gun', id: 'Serial number', onItem: 'Stamped on the frame or receiver; on many handguns it is on the side of the frame', elsewhere: 'Box, receipt or transfer paperwork', check: 'Gun check', href: '/firearms-check' },
 ],
 },
 {
 heading: 'Watches, jewelry and instruments',
 anchor: 'watches-jewelry',
 note:
 'These are the hardest to check. Many pieces have no serial at all, and thefts are often reported by description only. A serial check still searches SafeOrStolen theft reports and public web results, so run any number you can find.',
 rows: [
 { item: 'Luxury watch', id: 'Serial or case number', onItem: 'Case back, between the lugs, or on the inner ring of the dial, depending on the brand', elsewhere: 'Warranty card or papers; the number should match exactly', check: 'Watch check', href: '/check-watch-stolen' },
 { item: 'Diamond or graded stone', id: 'Report number', onItem: 'Some stones have the grading report number laser-inscribed on the girdle (needs a loupe)', elsewhere: 'The grading report', check: 'Jewelry check', href: '/check-jewelry' },
 { item: 'Guitar or other instrument', id: 'Serial number', onItem: 'Back of the headstock, or on a label visible through the soundhole', elsewhere: 'Receipt or case paperwork', check: 'Serial check', href: '/serial-number-checker' },
 ],
 },
];

const FAQS: { question: string; answer: string }[] = [
 {
 question: 'Where is the serial number on most items?',
 answer:
 'On electronics, look for a printed label on the bottom or back, and in the Settings or About screen. On tools, it is on the nameplate on the motor housing. On bikes, under the bottom bracket. On guns, stamped on the frame or receiver. Phones use the IMEI (dial *#06#) and vehicles use the VIN on the driver\'s side of the windshield. SafeOrStolen (safeorstolen.com/comprehensive-guide) lists each item.',
 },
 {
 question: 'Should I check the IMEI or the serial number on a phone?',
 answer:
 'The IMEI. It is the number carriers use to blacklist lost and stolen phones and the number most owners give the police. Dial *#06# to show it, or look in Settings > General > About on an iPhone or Settings > About phone on Android. Make sure the IMEI on screen matches the one on the SIM tray or box, if there is one.',
 },
 {
 question: 'What if the item has no serial number?',
 answer:
 'Then no database can tie it to a theft report, and you are relying on the seller and the item. Ask for the receipt or box, ask how they got it, look for engraved initials or marks that were scrubbed off, and compare the price with what it normally sells for. Be most careful when a label that should be there has been removed.',
 },
 {
 question: 'Why does the serial on the label not match the one in Settings?',
 answer:
 'Usually because a part was replaced (a new logic board, a refurbished housing) or because the label was swapped from another unit. Either way, check the number shown in Settings, since it comes from the hardware, and ask the seller to explain. A label that has been peeled, cut or re-stuck is a warning sign on its own.',
 },
 {
 question: 'Can I check a stolen item by model number?',
 answer:
 'No. A model number describes every unit of that product, so it can\'t identify one stolen item. You need the number unique to that unit: the serial number, IMEI, VIN or HIN. The model number is still useful to confirm the item is what the listing says it is.',
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

export default function ComprehensiveGuidePage() {
 return (
 <>
 <PageSEO
 title="Where to Find the Serial Number, IMEI or VIN on Any Item"
 description="Where the serial number, IMEI, VIN or HIN is on phones, laptops, consoles, cameras, cars, boats, bikes, tools, guns and watches, and which stolen check to run for each."
 keywords="where to find serial number, serial number location, where is the serial number, where is the imei, where is the vin, find serial number on laptop, find serial number on ps5, serial number on bike"
 canonical="/comprehensive-guide"
 modifiedTime="2026-10-07"
 structuredData={faqSchema}
 />
 <div className="min-h-screen bg-background pt-20">
 <article className="container mx-auto px-4 py-16 max-w-5xl">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">Where to Find the Serial Number, IMEI or VIN on Any Item</h1>
 <p className="text-sm text-muted-foreground mb-6">
 Updated <time dateTime="2026-10-07">October 7, 2026</time>
 </p>
 <p className="text-lg mb-4">
 Phones are checked by IMEI (dial *#06#), vehicles by the 17-character VIN on the driver's side
 of the windshield, boats by the HIN on the transom, and everything else by its serial number:
 on a label on the bottom or back, a stamped plate, or the Settings screen. The tables below show
 exactly where to look on each kind of item and which check to run.
 </p>
 <p className="text-muted-foreground mb-6">
 Read the number off the item yourself, and where there are two places to read it, check both
 match. For the order of steps when buying, see{' '}
 <Link to="/how-to-verify-a-used-item" className="text-primary underline">how to verify a used item</Link>.
 </p>

 <nav className="mb-10 rounded-xl border border-border p-4">
 <p className="font-semibold mb-2">Jump to</p>
 <ul className="grid sm:grid-cols-2 gap-1">
 {GROUPS.map((g) => (
 <li key={g.anchor}>
 <a href={`#${g.anchor}`} className="text-primary underline">{g.heading}</a>
 </li>
 ))}
 </ul>
 </nav>

 {GROUPS.map((g) => (
 <section key={g.anchor} id={g.anchor} className="mb-12 scroll-mt-24">
 <h2 className="text-2xl md:text-3xl font-bold mb-3">{g.heading}</h2>
 <p className="text-muted-foreground mb-4">{g.note}</p>
 <div className="overflow-x-auto">
 <table className="w-full text-sm border border-border">
 <thead className="bg-muted/50">
 <tr>
 <th className="text-left p-3 border-b border-border">Item</th>
 <th className="text-left p-3 border-b border-border">Number to check</th>
 <th className="text-left p-3 border-b border-border">Where it is on the item</th>
 <th className="text-left p-3 border-b border-border">Where else to read it</th>
 <th className="text-left p-3 border-b border-border">Check to run</th>
 </tr>
 </thead>
 <tbody>
 {g.rows.map((r) => (
 <tr key={r.item} className="align-top">
 <td className="p-3 border-b border-border font-semibold">{r.item}</td>
 <td className="p-3 border-b border-border">{r.id}</td>
 <td className="p-3 border-b border-border">{r.onItem}</td>
 <td className="p-3 border-b border-border">{r.elsewhere}</td>
 <td className="p-3 border-b border-border">
 <Link to={r.href} className="text-primary underline">{r.check}</Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>
 ))}

 <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">When the number is missing or damaged</h2>
 <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
 <li>A label peeled, cut, painted over or covered with a new sticker: ask why, and expect a good answer.</li>
 <li>A number ground or filed off metal: walk away. On a gun, possessing a firearm with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k).</li>
 <li>The number on the label doesn't match the one in Settings: check the Settings number and ask about repairs.</li>
 <li>The number doesn't match the photo the seller sent: you're looking at a different item.</li>
 </ul>

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
 <h2 className="text-2xl font-bold mb-2">Found the number? Check it.</h2>
 <p className="text-muted-foreground mb-4">2 free checks with a free account. No credit card.</p>
 <Button size="lg" asChild>
 <Link to="/check-if-stolen">
 Check if it's stolen <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 </div>
 </article>
 </div>
 </>
 );
}
