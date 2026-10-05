import { Link } from '@/lib/router-compat';
import { useState } from 'react';
import { useVerifyGate } from '@/hooks/useVerifyGate';
import { UpgradeModal } from '@/components/UpgradeModal';
import { PageSEO } from '@/components/seo/PageSEO';

// Oct 5 2026: police firearm theft and loss reports we hold, by state (counted from theft_records).
// Ohio is also searched live against Ohio law-enforcement records on every gun check.
const STATE_COVERAGE: { state: string; reports: number; years: string }[] = [
 { state: 'California', reports: 80176, years: '1979–2017' },
 { state: 'Florida', reports: 64642, years: '2006–2017' },
 { state: 'Texas', reports: 21558, years: '2000–2017' },
 { state: 'Washington', reports: 10951, years: '2010–2017' },
 { state: 'Arizona', reports: 9702, years: '1990–2017' },
 { state: 'North Carolina', reports: 8455, years: '2006–2017' },
 { state: 'Illinois', reports: 7459, years: '1973–2017' },
 { state: 'Georgia', reports: 6967, years: '2010–2017' },
 { state: 'Missouri', reports: 5099, years: '1974–2017' },
 { state: 'Nevada', reports: 4597, years: '—' },
 { state: 'Kansas', reports: 3731, years: '2006–2017' },
 { state: 'Indiana', reports: 3567, years: '1993–2017' },
 { state: 'Colorado', reports: 3520, years: '2002–2017' },
 { state: 'Wisconsin', reports: 2829, years: '2010–2017' },
 { state: 'South Carolina', reports: 1817, years: '1997–2017' },
 { state: 'Maryland', reports: 1464, years: '2010–2017' },
 { state: 'Utah', reports: 916, years: '2010–2016' },
 { state: 'Oregon', reports: 739, years: '2010–2017' },
 { state: 'Virginia', reports: 643, years: '2011–2017' },
 { state: 'Oklahoma', reports: 625, years: '2010–2017' },
 { state: 'New York', reports: 590, years: '2010–2017' },
 { state: 'Idaho', reports: 590, years: '2010–2017' },
 { state: 'Michigan', reports: 493, years: '2009–2016' },
 { state: 'Nebraska', reports: 317, years: '1993–2017' },
 { state: 'District of Columbia', reports: 238, years: '2011–2017' },
 { state: 'New Jersey', reports: 230, years: '2008–2017' },
 { state: 'Connecticut', reports: 227, years: '2006–2016' },
 { state: 'Massachusetts', reports: 225, years: '2010–2017' },
 { state: 'New Hampshire', reports: 138, years: '2010–2017' },
 { state: 'Rhode Island', reports: 132, years: '2010–2017' },
 { state: 'Louisiana', reports: 99, years: '2010–2017' },
 { state: 'Ohio', reports: 73, years: '2010–2016' },
 { state: 'Pennsylvania', reports: 24, years: '2012–2017' },
 { state: 'Delaware', reports: 6, years: '2014–2017' },
];

// One list for the visible FAQ and the FAQPage schema, so they always match.
const FIREARM_FAQS: { q: string; a: string }[] = [
 { q: 'How do I check if a gun is stolen by serial number?', a: "Enter the serial number from the frame or receiver at SafeOrStolen (safeorstolen.com/firearms-check). SafeOrStolen searches more than 240,000 police firearm theft and loss reports from 34 states, live Ohio law-enforcement stolen-gun records, its own theft reports and public web results, and checks the serial for signs of tampering. You get a result in a few seconds. The first 2 checks are free." },
 { q: 'Is the gun serial number lookup free?', a: 'Yes. SafeOrStolen gives you 2 free checks with a free account and no credit card. After that it is $3.99 per check or $14.99 a month for unlimited checks.' },
 { q: 'Is there a national stolen gun database I can search?', a: "Not one the public can search. The FBI's national stolen-gun file is only open to law enforcement. SafeOrStolen brings together the records the public can use, including police theft and loss reports from 34 states and live Ohio records. A no-match result means nothing was found in those records, not proof the gun was never stolen." },
 { q: 'My state is not on the list. Can I still check a gun?', a: "Yes. Every check still searches SafeOrStolen's own theft reports and public web results, and a gun reported stolen in one of the 34 states can turn up for sale anywhere. For an extra check, call your local police non-emergency line and ask whether they will run the serial for a private buyer. Some departments will and some won't." },
 { q: 'Is it legal to check a gun serial number?', a: 'Yes. Looking up whether a serial number has been reported stolen is legal for anyone. SafeOrStolen is a private service and is not a government agency. It never shows who owns a gun or who reported it.' },
 { q: "Does a clean result guarantee the gun isn't stolen?", a: 'No. A clean SafeOrStolen result means no report was found in the records searched at the time of the check. Many stolen guns are never reported, and our state records are historical, mostly from 2006 to 2017. Also ask for the original receipt or transfer paperwork, and use a licensed dealer for the transfer where your state requires one.' },
 { q: 'What should I do if the gun comes back as stolen?', a: "Don't buy it and don't confront the seller. Leave, and give the serial number and the seller's details to your local police on their non-emergency line." },
 { q: 'Will the seller know I checked the serial number?', a: 'No. Searches on SafeOrStolen are private and the seller is never told.' },
 { q: 'How do I report my own stolen gun?', a: 'File a report with your local police first and give them the serial number. Then report it on SafeOrStolen at safeorstolen.com/report-stolen, so anyone who checks that serial number before buying will see it.' },
];

const FirearmsCheckPage = () => {
 return (
 <div className="min-h-screen bg-background text-foreground">
 <PageSEO
 title="Free Gun Serial Number Lookup — Is This Gun Stolen? | SafeOrStolen"
 description="Free gun serial number lookup. Search over 240,000 police firearm theft and loss reports from 34 states plus live Ohio records, spot altered serials, and know what to do before you buy."
 canonical="/firearms-check"
 />

 {/* HERO + TOOL — hero-stable reserves min-height to prevent CLS on mobile */}
 <section className="hero-stable bg-gradient-to-b from-muted to-background py-16 px-4 flex items-center">
 <div className="max-w-3xl mx-auto text-center w-full">
 <div className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
 🔫 Firearm Verification
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
 Free Gun Serial Number Lookup
 <br />
 <span className="text-primary">Is This Gun Stolen?</span>
 </h1>
 <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
 Search over 240,000 police firearm theft and loss reports from 34 states, plus live Ohio records, before you buy.
 </p>


 {/* VERIFY TOOL — inline if no shared component */}
 <GunVerifyTool />

 <p className="text-muted-foreground/60 text-sm mt-4">
 2 free checks · No credit card · Works for handguns, rifles, shotguns, and more
 </p>
 </div>
 </section>

 {/* QUICK ANSWER BLOCK — for AI citation */}
 <section className="max-w-3xl mx-auto px-4 py-10">
 <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-6">
 <h2 className="text-secondary font-bold text-sm uppercase tracking-wide mb-2">
 Quick Answer
 </h2>
 <p className="text-foreground font-semibold text-lg mb-3">
 How do I check if a gun serial number is stolen?
 </p>
 <p className="text-muted-foreground leading-relaxed">
 {FIREARM_FAQS[0].a}
 </p>
 </div>
 </section>

 {/* MAIN CONTENT */}
 <article className="max-w-3xl mx-auto px-4 pb-16">

 {/* Section 1 */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Where to Find the Serial Number on a Firearm
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: The serial number is engraved or stamped on the frame or receiver of the firearm — the location varies by manufacturer and type.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Under federal law (Gun Control Act of 1968), all licensed firearm manufacturers 
 must engrave a unique serial number on every firearm produced. Here's where to 
 find it by type:
 </p>
 <div className="grid sm:grid-cols-2 gap-4 mb-4">
 {[
 { type: 'Handguns (Pistols)', location: 'Frame, near trigger guard or grip. Also may be on the slide or barrel.' },
 { type: 'Revolvers', location: 'Frame above the trigger, on the butt of the grip, or on the crane.' },
 { type: 'Semi-Auto Rifles (AR-15, AK-pattern)', location: 'Lower receiver, typically near the magazine well or pistol grip.' },
 { type: 'Bolt-Action & Lever-Action Rifles', location: 'Receiver (the metal housing), often bottom or side.' },
 { type: 'Shotguns', location: 'Receiver, near the trigger group.' },
 { type: 'Revolvers (Smith & Wesson)', location: 'Butt of the grip, cylinder crane, and frame.' },
 ].map((item) => (
 <div key={item.type} className="bg-card/60 border border-border rounded-xl p-4">
 <h3 className="text-foreground font-bold text-sm mb-1">{item.type}</h3>
 <p className="text-muted-foreground text-xs leading-relaxed">{item.location}</p>
 </div>
 ))}
 </div>
 <p className="text-muted-foreground leading-relaxed">
 If the serial number has been removed, altered, or defaced, do not purchase the firearm. 
 Under 18 U.S.C. § 922(k), it is a federal felony to possess a firearm with an obliterated 
 serial number — even if you did not remove it yourself.
 </p>
 </section>

 {/* Section 2 */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Which Databases Does SafeOrStolen Check for Firearms?
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: every gun check searches police theft and loss reports from 34 states, live Ohio law-enforcement records, SafeOrStolen's own theft reports and public web results, and checks the serial for tampering.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-6">
 All of these are searched at the same time, and the result lists each one, so
 you know exactly what was checked before money changes hands.
 </p>
 <div className="space-y-3">
 {[
 {
 db: 'Police firearm theft and loss reports (34 states)',
 desc: 'More than 240,000 reports of stolen and lost guns filed with police in 33 states and Washington, DC. Matches show the make, model, state and year of the report.',
 badge: 'Search',
 badgeColor: 'bg-primary/20 text-primary',
 },
 {
 db: 'Serial Number Integrity Check',
 desc: 'We validate the serial number itself for obliterated, altered, or placeholder patterns. A defaced serial number is a federal felony under 18 U.S.C. § 922(k) and is a strong signal to walk away.',
 badge: 'Analysis',
 badgeColor: 'bg-secondary/20 text-secondary',
 },
 {
 db: 'Live Ohio law-enforcement records',
 desc: 'Checked live on every gun search, against stolen-gun records kept by Ohio law enforcement.',
 badge: 'Live',
 badgeColor: 'bg-primary/20 text-primary',
 },
 {
 db: 'SafeOrStolen theft reports and public web results',
 desc: 'Guns reported stolen by owners on SafeOrStolen, and public listings or posts that mention the serial number.',
 badge: 'Search',
 badgeColor: 'bg-primary/20 text-primary',
 },
 ].map((item) => (
 <div key={item.db} className="bg-card/50 border border-border rounded-xl p-5">
 <div className="flex items-start gap-3 mb-2">
 <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${item.badgeColor}`}>
 {item.badge}
 </span>
 <h3 className="text-foreground font-bold text-sm">{item.db}</h3>
 </div>
 <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>



 {/* State coverage — real counts */}
 <section className="mb-12" id="states">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Gun Serial Number Lookup by State
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: SafeOrStolen holds police firearm theft and loss reports from 33 states and Washington, DC, 242,839 in all. Every gun check searches all of them at once, whichever state you are in.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 These are reports filed with police, mostly from 2006 to 2017. Open a state for its most reported brands and models, or see the <Link to="/stolen-gun-statistics" className="text-primary hover:underline">national stolen gun statistics</Link>. A gun stolen in one state is often sold in another, so a check searches every state, not only yours. Ohio is also searched live on every check.
 </p>
 <div className="overflow-x-auto rounded-xl border border-border mb-4">
 <table className="w-full text-left text-sm">
 <thead className="bg-muted/60">
 <tr>
 <th className="px-4 py-3 font-semibold">State</th>
 <th className="px-4 py-3 font-semibold text-right">Police reports</th>
 <th className="px-4 py-3 font-semibold">Years reported</th>
 </tr>
 </thead>
 <tbody>
 {STATE_COVERAGE.map((r) => (
 <tr key={r.state} className="border-t border-border">
 <td className="px-4 py-2 font-medium"><Link to={`/gun-serial-number-lookup/${r.state.toLowerCase().replace(/ /g, '-')}`} className="text-primary hover:underline">{r.state}</Link></td>
 <td className="px-4 py-2 text-right text-muted-foreground">{r.reports.toLocaleString('en-US')}</td>
 <td className="px-4 py-2 text-muted-foreground">{r.years}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="text-muted-foreground leading-relaxed">
 <strong className="text-foreground">Tennessee, Kentucky, Alabama and other states not listed:</strong> you can still
 check any gun here. The search covers SafeOrStolen's own reports and public web results, plus all 34 jurisdictions above,
 where guns stolen elsewhere often turn up. For an extra check, ask your local police on their non-emergency line
 whether they will run the serial for a private buyer.
 </p>
 </section>

 {/* Section 3 */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Legal Risks of Buying a Stolen Firearm
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: Possession of a stolen firearm is a federal felony even if you unknowingly purchased it. Law enforcement can seize the firearm with no compensation to you.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 This is not a minor civil matter. Buying a stolen gun — even unknowingly — 
 creates serious legal exposure under both federal and state law:
 </p>
 <ul className="space-y-3 mb-6">
 {[
 { title: 'Federal criminal exposure', desc: 'Under 18 U.S.C. § 922(j), knowingly purchasing, possessing, or transferring a stolen firearm is a federal felony carrying up to 10 years in prison. "Knowingly" is broadly interpreted — if you had reason to know the gun was stolen (low price, seller unwilling to provide paperwork), that can be sufficient.' },
 { title: 'State criminal exposure', desc: 'All 50 states have additional receiving stolen property statutes. Penalties vary but typically include felony charges for firearms.' },
 { title: 'Asset seizure with no compensation', desc: 'Law enforcement can seize a firearm linked to theft records at any time. You have no legal claim to compensation — your money is gone.' },
 { title: 'Background check complications', desc: 'A stolen firearm discovered during a transfer at a licensed dealer (FFL) will result in the transfer being denied and possible investigation of all parties involved.' },
 ].map((item) => (
 <li key={item.title} className="flex gap-4 bg-card/40 border border-border rounded-xl p-4">
 <span className="text-destructive text-xl flex-shrink-0 mt-0.5">⚠️</span>
 <div>
 <h3 className="text-foreground font-bold text-sm mb-1">{item.title}</h3>
 <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
 </div>
 </li>
 ))}
 </ul>
 </section>

 {/* Section 4 */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Who Should Always Run a Gun Serial Check
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: Anyone buying, accepting, or reselling a used firearm — including private buyers, pawn shops, gun show attendees, estate sale participants, and FFL dealers.
 </p>
 <div className="grid sm:grid-cols-2 gap-4">
 {[
 { who: 'Private Buyers', desc: 'Anyone purchasing a used firearm through a private sale on Armslist, Facebook, at a gun show, or from an individual. Private sales in most states have no background check — the serial check is your only protection.' },
 { who: 'Gun Show Vendors & Attendees', desc: 'High volume + cash transactions = elevated risk. Many stolen guns circulate through gun shows precisely because of lighter scrutiny. Run a check on every private transaction.' },
 { who: 'FFL Dealers Buying Used Inventory', desc: 'When buying used firearms from individuals for resale, a serial check provides documented due diligence before you take ownership.' },
 { who: 'Estate Sale Participants', desc: 'Firearms in estates can have complex ownership histories. Verify before purchasing — you have no way to know the history of an inherited firearm.' },
 { who: 'Sellers Proving Legitimacy', desc: 'Sellers can run a check on their own firearm and share the clean result with buyers — increasing buyer confidence and selling price.' },
 ].map((item) => (
 <div key={item.who} className="bg-card/50 border border-border rounded-xl p-4">
 <h3 className="text-foreground font-bold text-sm mb-2">🎯 {item.who}</h3>
 <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Section 5 */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Red Flags When Buying a Used Firearm
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: Never buy if the serial number is missing, altered, or if the seller refuses to allow you to write it down for verification purposes.
 </p>
 <ul className="space-y-2">
 {[
 'Serial number is scratched, filed, or otherwise altered — federal felony to possess',
 'Seller refuses to provide the serial number or allow you to record it',
 'Price is significantly below market value for the model and condition',
 'Seller cannot produce original purchase receipt or documentation of transfer',
 'Seller is unusually eager to complete the sale quickly, especially in cash',
 'Firearm has aftermarket modifications that obscure the original serial number location',
 'Seller says they "found it" or received it as payment for a debt',
 'No box, accessories, or documentation that would normally accompany a legitimate sale',
 ].map((flag) => (
 <li key={flag} className="flex items-start gap-3 text-muted-foreground text-sm">
 <span className="text-destructive flex-shrink-0 mt-0.5">🚩</span>
 {flag}
 </li>
 ))}
 </ul>
 </section>

 {/* Section 6 — For Sellers */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Sellers: Verify Your Own Firearm First
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: Run a SafeOrStolen check on your own firearm, get the $1.99 verification certificate, and share its link with buyers so they can see the check for themselves.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Smart sellers use SafeOrStolen to prove legitimacy upfront. Here's why it matters:
 </p>
 <ul className="space-y-2 mb-6">
 {[
 "Buyers don't have to take your word for it; the certificate shows the date and what was searched",
 'A dated record that you checked before the sale, if questions come up later',
 'Makes your listing stand out from unverified ones',
 ].map((point) => (
 <li key={point} className="flex items-start gap-3 text-foreground/80 text-sm">
 <span className="text-primary flex-shrink-0">✓</span>
 {point}
 </li>
 ))}
 </ul>
 <Link
 to="/firearms-check"
 className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-3 rounded-xl transition-all text-sm"
 onClick={() => window.scrollTo(0, 0)}
 >
 Verify My Firearm — Free →
 </Link>
 </section>

 {/* Section 7 — Pawn Shops */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Pawn Shop Firearm Compliance Requirements
 </h2>
 <p className="text-muted-foreground text-sm italic mb-4">
 Quick answer: Pawn shops are commonly required by state or local law to report the guns they take in to police, and they carry more risk than private buyers when a gun turns out to be stolen. Checking every serial before you accept it, and keeping the record, is basic due diligence.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-6">
 Pawn shop operators face significant legal exposure when accepting stolen firearms. 
 Unlike private buyers who may unknowingly purchase stolen property, pawn shops 
 are considered sophisticated commercial buyers — courts hold them to a higher 
 standard of due diligence.
 </p>
 <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-6 mb-6">
 <h3 className="text-secondary font-bold mb-3">SafeOrStolen Unlimited Plan for Pawn Shops</h3>
 <ul className="space-y-2">
 {[
 'Unlimited firearm serial checks at one flat monthly rate',
 'Dated record of every check saved to your account',
 'Verification certificates included free with the monthly plan',
 'Check history your staff can pull up when asked',
 ].map((f) => (
 <li key={f} className="flex items-start gap-2 text-foreground/80 text-sm">
 <span className="text-primary flex-shrink-0">✓</span>
 {f}
 </li>
 ))}
 </ul>
 <Link
 to="/pricing"
 className="inline-flex mt-4 items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-5 py-3 rounded-xl transition-all text-sm"
 >
 Get Unlimited Plan — $14.99/mo →
 </Link>
 </div>
 </section>

 {/* FAQ Schema Section */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-6">
 Gun Serial Number Lookup — FAQ
 </h2>
 <div className="space-y-3">
 {FIREARM_FAQS.map((item) => (
 <details key={item.q} className="bg-card border border-border rounded-xl group">
 <summary className="flex justify-between items-center p-4 cursor-pointer text-foreground font-semibold text-sm list-none hover:text-primary transition-colors">
 {item.q}
 <span className="text-muted-foreground group-open:rotate-180 transition-transform ml-3 flex-shrink-0 text-xs">▼</span>
 </summary>
 <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed border-t border-border pt-3">
 {item.a}
 </div>
 </details>
 ))}
 </div>
 </section>

 {/* Internal Links */}
 <section className="bg-card/50 border border-border rounded-2xl p-6">
 <h3 className="text-foreground font-bold mb-4">Related Verification Tools</h3>
 <div className="grid sm:grid-cols-2 gap-3">
 {[
 { title: 'VIN Check — Stolen Vehicles', href: '/vin-checker', desc: 'Check cars, trucks, motorcycles' },
 { title: 'IMEI Check — Phones & Tablets', href: '/imei-checker', desc: 'Carrier blacklists + theft reports' },
 { title: 'License Plate Lookup', href: '/license-plate-lookup', desc: 'Stolen-vehicle records by plate' },
 { title: 'Bike Serial Check', href: '/check-bike', desc: 'Stolen-bike registry and our reports' },
 { title: 'State Firearm Transfer Laws', href: '/state-firearm-transfer-laws', desc: 'Which states require a private-sale background check' },
 ].map((link) => (
 <Link key={link.href} to={link.href} className="flex items-start gap-3 bg-muted/50 hover:bg-muted border border-border rounded-xl p-3 transition-all group">
 <div>
 <div className="text-primary group-hover:text-primary/80 font-semibold text-sm">{link.title}</div>
 <div className="text-muted-foreground text-xs">{link.desc}</div>
 </div>
 <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors mt-0.5">→</span>
 </Link>
 ))}
 </div>
 </section>

 </article>

 {/* JSON-LD Schema for this page */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify([
 {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Free Gun Serial Number Lookup — Is This Gun Stolen?",
 "description": "Search a gun serial number against police firearm theft and loss reports from 34 states and live Ohio records, and spot altered serials before you buy.",
 "dateModified": "2026-10-05",
 "url": "https://safeorstolen.com/firearms-check",
 "breadcrumb": {
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
 { "@type": "ListItem", "position": 2, "name": "Gun Serial Lookup", "item": "https://safeorstolen.com/firearms-check" }
 ]
 }
 },
 {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FIREARM_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Check if a Gun Serial Number is Stolen",
 "step": [
 { "@type": "HowToStep", "name": "Find the serial number", "text": "Locate the serial number engraved on the frame or receiver of the firearm. The location varies by firearm type." },
 { "@type": "HowToStep", "name": "Enter the serial number", "text": "Go to SafeOrStolen.com/firearms-check and enter the serial number in the search field." },
 { "@type": "HowToStep", "name": "Review results", "text": "The result lists every source searched, in a few seconds. If the gun is reported stolen, do not complete the transaction." }
 ]
 }
 ])
 }}
 />
 </div>
 )
}

// Inline verify tool for gun page
function GunVerifyTool() {
 const [identifier, setIdentifier] = useState('')
 const [loading, setLoading] = useState(false)

 const { checkGate, isBlocked, blockReason, resetGate } = useVerifyGate()

 async function handleSubmit(e: React.FormEvent) {
 e.preventDefault()
 if (!identifier.trim()) return

 // Oct 1 2026: the check page counts the free check itself, so don't spend one here too.
 // Send it as a FIREARM check so the stolen-firearm database is searched.
 setLoading(true)
 window.location.href = `/verify?q=${encodeURIComponent(identifier.trim())}&type=firearm`
 }

 return (
 <>
 <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl mx-auto">
 <input
 type="text"
 value={identifier}
 onChange={(e) => setIdentifier(e.target.value)}
 placeholder="Enter firearm serial number..."
 className="flex-1 bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-hidden focus:border-primary text-sm"
 />
 <button
 type="submit"
 disabled={loading || !identifier.trim()}
 className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-60 whitespace-nowrap text-sm"
 >
 {loading ? 'Checking...' : 'Check Serial →'}
 </button>
 </form>
 {isBlocked && (
 <UpgradeModal isOpen={isBlocked} reason={blockReason} onClose={resetGate} />
 )}
 </>
 )
}

export default FirearmsCheckPage;
