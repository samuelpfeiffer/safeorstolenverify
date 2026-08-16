import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useVerifyGate } from '@/hooks/useVerifyGate';
import { UpgradeModal } from '@/components/UpgradeModal';
import { PageSEO } from '@/components/seo/PageSEO';

const FirearmsCheckPage = () => {
 return (
 <div className="min-h-screen bg-background text-foreground">
 <PageSEO
 title="Gun Serial Number Check — All 50 States | SafeOrStolen"
 description="Free gun serial number check. Verify whether a firearm has been reported stolen before you buy. Instant results."
 canonical="/firearms-check"
 />

 {/* HERO + TOOL — hero-stable reserves min-height to prevent CLS on mobile */}
 <section className="hero-stable bg-gradient-to-b from-muted to-background py-16 px-4 flex items-center">
 <div className="max-w-3xl mx-auto text-center w-full">
 <div className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
 🔫 Firearm Verification
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
 Gun Serial Number Check —
 <br />
 <span className="text-primary">All 50 States</span>
 </h1>
 <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
 Search stolen firearms databases and verify serial integrity before you buy.
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
 Enter the firearm serial number into SafeOrStolen's lookup tool above.
 SafeOrStolen checks firearm serial numbers against stolen firearms databases
 and analyzes the serial for signs of alteration. A result returns in approximately 3 seconds.
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
 Quick answer: SafeOrStolen checks firearm serial numbers against stolen firearms databases and analyzes the serial for signs of alteration.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-6">
 SafeOrStolen checks firearm serial numbers against stolen firearms
 databases and analyzes the serial itself for signs of alteration, so
 you get a clear answer before money changes hands.
 </p>
 <div className="space-y-3">
 {[
 {
 db: 'Stolen Firearms Databases',
 desc: 'We check the serial number against stolen firearms databases and return a plain result in about three seconds.',
 badge: 'Search',
 badgeColor: 'bg-primary/20 text-primary',
 },
 {
 db: 'Serial Number Integrity Check',
 desc: 'We validate the serial number itself for obliterated, altered, or placeholder patterns. A defaced serial number is a federal felony under 18 U.S.C. § 922(k) and is a strong signal to walk away.',
 badge: 'Analysis',
 badgeColor: 'bg-secondary/20 text-secondary',
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
 Quick answer: Run a SafeOrStolen check on your own firearm, download the clean PDF certificate, and include it in your listing. Serious buyers will pay more for verified guns.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Smart sellers use SafeOrStolen to prove legitimacy upfront. Here's why it matters:
 </p>
 <ul className="space-y-2 mb-6">
 {[
 "Verified listings sell faster — buyers don't have to take your word for it",
 'Clean verification certificate commands $50–$200 higher prices on popular handguns',
 'Protects you legally — documented that you verified no stolen records at time of sale',
 'Differentiates your listing from the hundreds of unverified options on Armslist or Facebook',
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
 Quick answer: Most U.S. states legally require pawn shops to verify firearms against stolen property databases before accepting them. Failure to comply can result in criminal charges and loss of license.
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
 'Timestamped, printable PDF compliance certificates for every transaction',
 'Bulk CSV upload — verify a batch of firearms at once',
 'Full audit trail your staff can pull for the relevant authorities on request',
 'API integration to connect directly to your POS or inventory system',
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
 Get Unlimited Plan — $10/mo →
 </Link>
 </div>
 </section>

 {/* FAQ Schema Section */}
 <section className="mb-12">
 <h2 className="text-2xl font-black text-foreground mb-6">
 Gun Serial Number Check — FAQ
 </h2>
 <div className="space-y-3">
 {[
 { q: 'Is it legal to check a gun serial number?', a: 'Yes. Checking a firearm serial number against commercial theft databases is completely legal. SafeOrStolen is a private commercial service that aggregates publicly available and licensed data. We are not the relevant authorities and cannot query federal systems — our results come from stolen firearms databases and serial integrity analysis.' },
 { q: "What if the serial number comes back clean — does that guarantee it's not stolen?", a: 'No. A clean result means no records were found in our aggregated database at the time of the check. Not all stolen firearms are reported to all databases. A clean result significantly reduces your risk but does not constitute a guarantee. We strongly recommend also requesting the original purchase receipt from the seller.' },
 { q: 'Can a gun show vendor refuse to let me check the serial number?', a: 'Yes, a private seller can refuse. If they do, that is itself a significant red flag. Legitimate sellers with nothing to hide generally welcome verification.' },
 { q: 'How do I report a stolen firearm to your database?', a: 'After filing a police report, you can report the stolen firearm to your local police and to a public stolen-firearm registry. Reports that reach the nationwide stolen firearm feeds will be included in future SafeOrStolen checks.' },
 { q: 'Does the search notify the seller that I checked their firearm?', a: 'No. Your search is completely private. The seller has no way of knowing you ran a verification.' },
 ].map((item) => (
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
 { title: 'License Plate Lookup', href: '/license-plate-lookup', desc: 'DMV + stolen vehicle records' },
 { title: 'Bike Serial Check', href: '/check-bike', desc: 'stolen bicycle databases + police' },
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
 "name": "Gun Serial Number Check — All 50 States",
 "description": "Check any firearm serial number against stolen firearms databases. Results in 3 seconds.",
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
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How can I check if a firearm is reported stolen?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Enter the serial number stamped on the frame or receiver at SafeOrStolen. We check firearm serial numbers against stolen firearms databases and analyze the serial for signs of alteration, and return a result in about three seconds."
 }
 },
 {
 "@type": "Question",
 "name": "Can a private buyer check whether a firearm is reported stolen?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes. A private buyer can enter a firearm serial number at SafeOrStolen and search stolen firearm reports without any licence or law-enforcement access. Checking is legal and is a sensible step before any private-party transfer."
 }
 },
 {
 "@type": "Question",
 "name": "What should I verify before buying a used firearm?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Verify that the serial number on the frame is intact and unaltered, that the number matches any paperwork the seller shows you, and that the serial does not appear in stolen firearm reports \u2014 SafeOrStolen checks the last two of those in a few seconds. Separately, confirm the transfer itself is lawful where you live, since many states require the sale to go through a licensed dealer. Remember that a clean stolen-property result is not proof of ownership; those are two different questions."
 }
 },
 {
 "@type": "Question",
 "name": "Is there a stolen firearm database?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There is no single public database of every stolen firearm \u2014 SafeOrStolen searches stolen firearms databases along with community theft reports and community theft registries, which is the practical option available to a private buyer. Because coverage is fragmented, no match found means nothing was located in the sources checked rather than confirmation the firearm was never stolen."
 }
 },
 {
 "@type": "Question",
 "name": "How do I check if a gun serial number is stolen?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Enter the firearm serial number at SafeOrStolen.com/firearms-check. The system checks stolen firearms databases and validates serial number integrity. Results return in approximately 3 seconds."
 }
 },
 {
 "@type": "Question",
 "name": "Is it legal to check a gun serial number online?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes. Checking a firearm serial number against commercial theft databases is completely legal. SafeOrStolen is a private commercial service aggregating publicly available and licensed data. The service is not affiliated with any government agency."
 }
 },
 {
 "@type": "Question",
 "name": "What does a stolen gun result mean?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "A flagged result means the serial number appears in one or more stolen property databases. Do not purchase the firearm. Contact your community theft agency. SafeOrStolen will indicate which database returned the record."
 }
 }
 ]
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Check if a Gun Serial Number is Stolen",
 "step": [
 { "@type": "HowToStep", "name": "Find the serial number", "text": "Locate the serial number engraved on the frame or receiver of the firearm. The location varies by firearm type." },
 { "@type": "HowToStep", "name": "Enter the serial number", "text": "Go to SafeOrStolen.com/firearms-check and enter the serial number in the search field." },
 { "@type": "HowToStep", "name": "Review results", "text": "The system returns a Trust Score and database-by-database breakdown within 3 seconds. If flagged, do not complete the transaction." }
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

 const allowed = await checkGate()
 if (!allowed) return

 setLoading(true)
 window.location.href = `/verify?identifier=${identifier}&type=serial`
 setLoading(false)
 }

 return (
 <>
 <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl mx-auto">
 <input
 type="text"
 value={identifier}
 onChange={(e) => setIdentifier(e.target.value)}
 placeholder="Enter firearm serial number..."
 className="flex-1 bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary text-sm"
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
