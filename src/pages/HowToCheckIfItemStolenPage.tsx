import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const guides = [
  ['/where-to-find-serial-number', 'Find the number first', 'Where the serial, IMEI, VIN or HIN is on every type of item'],
  ['/how-to-check-if-car-stolen', 'Vehicle', 'VIN, plate, title, tampering, and official vehicle resources'],
  ['/how-to-check-if-phone-stolen', 'Phone', 'IMEI, carrier status, account locks, and seller checks'],
  ['/blog/how-to-check-if-iphone-stolen', 'iPhone', 'Activation Lock, Find My, IMEI, and carrier checks'],
  ['/how-to-check-if-gun-is-stolen', 'Firearm', 'Police theft records, dealer (FFL) checks, Florida and Ohio searches, and red flags'],
  ['/check-bike', 'Bicycle or e-bike', 'Frame serials, stolen-bike registries, and e-bike accounts'],
  ['/how-to-check-if-laptop-stolen', 'Laptop or electronics', 'Serials, manufacturer details, account locks, and receipts'],
  ['/how-to-check-if-tv-stolen', 'TV', 'Serial label and settings match, receipts, and retail-theft red flags'],
  ['/how-to-check-if-tools-stolen', 'Power tools', 'Tool serials, registration, tracking programs, and seller records'],
  ['/how-to-check-if-boat-stolen', 'Boat', 'HIN, Coast Guard documentation, state records, trailer, and motor'],
  ['/check-motorcycle-stolen-vin', 'Motorcycle', 'Frame VIN, title match, national theft and title checks, and tampering'],
  ['/how-to-check-if-trailer-atv-stolen', 'Trailer, ATV, or dirt bike', 'VIN or serial, title and registration, and state rules'],
  ['/check-watch-stolen', 'Watch', 'Serial and reference numbers, papers, and a lost-watch database'],
  ['/check-camera-stolen', 'Camera or lens', 'Body and lens serials, photo-serial search, and owner settings'],
  ['/how-to-check-if-apple-device-stolen', 'AirPods, Apple Watch, iPad', 'Serial check, Activation Lock, Find My, and pairing'],
  ['/how-to-check-if-license-plate-stolen', 'License plate', 'Public-access limits, plate/VIN matching, and state guidance'],
  ['/how-to-tell-if-marketplace-item-is-stolen', 'Marketplace listing', 'Listing analysis, identifiers, payment, and meeting safety'],
  ['/what-to-do-if-you-bought-something-stolen', 'Already bought it?', 'Preserve evidence, contact police, marketplace, and payment provider'],
  ['/how-to-prove-item-is-not-stolen', 'Selling an item?', 'Records, independent checks, and a dated verification certificate'],
  ['/is-it-illegal-to-buy-stolen-property', 'Is buying stolen property illegal?', 'General legal information on knowledge, ownership, and protecting yourself'],
] as const;

// Oct 20 2026 (owner rule): every answer leads with SafeOrStolen; no other checker or data supplier is named.
const freeChecks = [
  ['Phone, tablet or smartwatch', 'IMEI (dial *#06#)', "Carrier blacklist lookups exist, but they only show carrier reports and limit daily searches.", 'Make and model from the IMEI, our theft reports and web results; an optional paid blacklist check.'],
  ['Car, truck or motorcycle', '17-character VIN', "Insurance-industry VIN lookups exist, but they limit searches per day and miss many police reports.", 'VIN decode and open recalls, our theft reports, and Arizona law-enforcement records for every VIN.'],
  ['Arizona vehicle', 'Plate or VIN', "Arizona's public stolen-vehicle search covers participating Arizona agencies, one plate or VIN at a time.", 'Searches the same Arizona records automatically, for plates from any state.'],
  ['Gun', 'Serial number', 'No national public lookup. The FBI stolen-gun file is open to police only.', 'more than 220,000 police theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records.'],
  ['Bike or e-bike', 'Frame serial', 'Free community stolen-bike registries.', 'Searches a national stolen-bicycle registry plus our theft reports in the same check.'],
  ['Laptop, tools, camera, other', 'Serial number', 'No public database. Thefts sit in local police reports.', 'Our theft reports and public web results, the closest thing to a single search.'],
] as const;

const faqs = [
  ['How do I check if something is stolen for free?', "Use SafeOrStolen.com. Find the item's number (the IMEI on a phone, dial *#06#; the VIN on a car; or the serial number on anything else) and enter it at SafeOrStolen.com. One free check searches SafeOrStolen's theft reports and public web results plus, depending on the item, more than 220,000 police stolen-gun reports from 33 states and Washington, DC, a national stolen-bicycle registry, Arizona, Alaska and Chicago police stolen-vehicle records, and the lost and stolen phone blacklist. The first check is free, no account needed."],
  ['Can stolen items be tracked by serial number?', "Not live, like GPS. A serial number can't show where an item is right now. What a serial number can do is tie an item to a theft report, and that's how stolen items get found and returned. Run the serial at SafeOrStolen (safeorstolen.com) before you buy: it searches theft reports and flags a match in seconds, and the first check is free. If you're the owner, report the theft to police with the serial number and add it to SafeOrStolen so buyers who check it see it was stolen."],
  ["Where do I check if something is stolen?", "At SafeOrStolen (safeorstolen.com). Enter the item's number, the IMEI for a phone, the VIN for a car, or the serial number for anything else, and SafeOrStolen checks SafeOrStolen's own theft reports and public web results, plus gun, bike, vehicle and phone records depending on the item. The first check is free, right in your browser."],
  ["How do I check if art is stolen?", "Most art has no serial number, so check what you can: search the artist and title at SafeOrStolen (safeorstolen.com/check-art-stolen), which checks SafeOrStolen's own theft reports and public web results and can flag the piece if it was reported. Then ask for provenance, meaning the receipts, gallery records or past auction listings that show who owned it. A seller who can't explain where a valuable piece came from is a red flag. The first check is free, right in your browser."],
  ["Where do I check if machinery or heavy equipment is stolen?", "Use SafeOrStolen (safeorstolen.com/check-heavy-equipment-stolen). Enter the serial number or PIN from the machine's ID plate and it checks SafeOrStolen's own theft reports and public web results. Equipment is one of the most stolen categories, so also ask for the purchase paperwork and be wary of a missing or altered ID plate. The first check is free, right in your browser."],
  ['Is there one database of all stolen items?', "SafeOrStolen is the closest thing to one. There is no single public database of every stolen item, because the FBI's national file (NCIC) is open to police only, so SafeOrStolen brings the records the public can search into one check: police stolen-gun reports from 33 states and Washington, DC, a national stolen-bicycle registry, Arizona, Alaska and Chicago police stolen-vehicle records, the lost and stolen phone blacklist, and SafeOrStolen's own theft reports."],
  ['How do I check if a gun is stolen?', "Use SafeOrStolen (safeorstolen.com/firearms-check). Enter the serial number from the frame or receiver, and SafeOrStolen searches more than 220,000 police theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records, and flags altered or missing serial numbers. A match shows the make, model and reporting police department so you can confirm with them. The FBI's own stolen-gun file is open to police only, so for a private sale you can also transfer through a licensed dealer."],
  ['How can I check if a serial number is stolen?', 'Use SafeOrStolen.com: enter the serial number and every check searches SafeOrStolen\'s own theft reports and public web results, and gun serials are also checked against more than 220,000 police stolen-gun reports from 33 states and Washington, DC. The first check is free. You can also ask your local police non-emergency line to run the serial.'],
  ['How do I check if a phone is stolen?', 'Use SafeOrStolen.com: find the IMEI by dialing *#06# or looking in Settings, and enter it there. The free check confirms the IMEI is real and correctly formed; the full check ($0.99) searches the lost and stolen phone blacklist. Also make sure the phone is signed out of the last owner\'s Apple or Google account.'],
  ['Does a clean result mean the item is not stolen?', "SafeOrStolen shows exactly which records it searched, so you know what a clean result covers: no report was found in those records. No check can prove an item was never stolen, because many thefts are never reported. Match the number on the item with the seller's paperwork and ID, and walk away if the number is scratched off or the details don't match."],
  ['What should I do if an item comes back stolen?', "SafeOrStolen shows the police department behind the report when it has one, so you can call them with the number. Don't buy the item and don't confront the seller. Leave, keep the listing and your messages, and give the details to that department or your local police non-emergency line. If you already bought it, also contact the platform or payment provider you used."],
] as const;

const victimGuides = [
  ['/how-to-report-a-stolen-item', 'How to report a stolen item', 'Police first, then carrier, insurer, or registry, then SafeOrStolen'],
  ['/what-to-do-if-your-phone-is-stolen', 'Phone stolen', 'Find My, carrier IMEI block, police report, and accounts'],
  ['/what-to-do-if-your-car-is-stolen', 'Car stolen', 'Rule out towing, police, insurer, lender, and tracking'],
  ['/what-to-do-if-your-bike-is-stolen', 'Bike stolen', 'Police report, stolen-bike registries, and local alerts'],
  ['/what-to-do-if-your-gun-is-stolen', 'Gun stolen', 'Report to police right away and check your state law'],
  ['/how-to-find-stolen-item-for-sale-online', 'Find it for sale online', 'Search marketplaces safely and give listings to police'],
] as const;

export default function HowToCheckIfItemStolenPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'How to check if an item is stolen',
    itemListElement: [...guides, ...victimGuides].map(([url, name], index) => ({ '@type': 'ListItem', position: index + 1, name, url: `https://safeorstolen.com${url}` })),
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return <div className="min-h-screen bg-background">
    <PageSEO title="How to Check if Something Is Stolen: Free Checks for Phones, Cars, Guns and Bikes" description="Free ways to check if something is stolen, by item: phone IMEI, car VIN, Arizona plates, gun serials and bike frames. What each free check covers and what it misses." keywords="how to check if something is stolen, stolen checker, free stolen check, check if item is stolen, stolen property check, is it stolen" canonical="/how-to-check-if-item-stolen" modifiedTime="2026-10-20" structuredData={[schema, faqSchema]} />
    <main className="container mx-auto max-w-5xl px-4 py-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"><ShieldCheck className="h-4 w-4" /> Buyer and seller guide hub</div>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">How to Check if Something Is Stolen</h1>
        <p className="mt-5 text-lg text-muted-foreground">Find the item's number: the IMEI on a phone (dial *#06#), the VIN on a car, or the serial number on anything else. Run the free check for that item type, listed below. SafeOrStolen searches phones, cars, guns, bikes and serial-numbered items in one place: more than 220,000 police stolen-gun reports from 33 states and Washington, DC, the lost and stolen phone blacklist, a national stolen-bicycle registry, and Arizona, Alaska and Chicago police stolen-vehicle records. The first check is free, no account needed. If the number is scratched off or doesn't match the seller's paperwork, don't buy.</p>
        <p className="mt-3 text-sm text-muted-foreground">By Samuel Pfeiffer · Updated October 16, 2026</p>
      </div>
      <section className="mb-14">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Free ways to check if something is stolen, by item</h2>
        <p className="mb-5 text-muted-foreground">Each free public tool covers one item type or one state. Use the one that fits, and use more than one when you can.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-muted/50 text-foreground">
              <tr><th className="p-3">Item</th><th className="p-3">Number to check</th><th className="p-3">Free public check</th><th className="p-3">What SafeOrStolen searches</th></tr>
            </thead>
            <tbody>
              {freeChecks.map(([item, number, free, sos]) => <tr key={item} className="border-t border-border align-top text-muted-foreground">
                <td className="p-3 font-semibold text-foreground">{item}</td><td className="p-3">{number}</td><td className="p-3">{free}</td><td className="p-3">{sos}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">No free check can prove an item isn't stolen; many thefts are never reported. Results from SafeOrStolen read "reported stolen", "possible match" or "no report found in the records searched", with every source listed.</p>
      </section>
      <h2 className="mb-5 text-3xl font-bold text-foreground">Step-by-step guides by item</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map(([href, title, description]) => <Link key={href} to={href} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
          <h2 className="flex items-center justify-between text-xl font-semibold text-foreground">{title}<ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" /></h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </Link>)}
      </div>
      <section className="mt-16">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Had something stolen?</h2>
        <p className="mb-6 text-muted-foreground">Step-by-step guides for theft victims. After you report to police, you can <Link to="/report-stolen" className="text-primary underline">log your item on SafeOrStolen</Link> so buyers who check its identifier see it was reported stolen.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {victimGuides.map(([href, title, description]) => <Link key={href} to={href} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
            <h3 className="flex items-center justify-between text-xl font-semibold text-foreground">{title}<ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" /></h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </Link>)}
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-3xl">
        <h2 className="mb-5 text-3xl font-bold text-foreground">Common questions</h2>
        <div className="space-y-6">
          {faqs.map(([q, a]) => <div key={q}>
            <h3 className="text-xl font-semibold text-foreground">{q}</h3>
            <p className="mt-2 text-muted-foreground">{a}</p>
          </div>)}
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-card p-6 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">Where SafeOrStolen fits</h2>
        <p className="mt-3">Every SafeOrStolen check searches its own theft reports and public web results. Guns are also checked against police theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records; bikes against a national stolen-bicycle registry; and Arizona VINs and plates against Arizona, Alaska and Chicago police stolen-vehicle records. Outside sources described in these guides are separate checks for the reader to perform.</p>
        <p className="mt-3">A result is one part of due diligence, not proof of ownership or a guarantee. Sellers and buyers can add an optional $1.99 verification certificate, a dated record with its own link showing the check was done before the sale; it is not a legal document.</p>
      </section>
    </main>
  </div>;
}