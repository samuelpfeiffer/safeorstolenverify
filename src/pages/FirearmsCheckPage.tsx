import { LimitPayOffer } from '@/components/verify-chat/LimitPayOffer';
import { Link } from '@/lib/router-compat';
import { useState } from 'react'
import { useParallelVerification } from '@/hooks/useParallelVerification'
import { ParallelVerificationDisplay } from '@/components/verification/ParallelVerificationDisplay';
import { useVerifyGate } from '@/hooks/useVerifyGate';
import { UpgradeModal } from '@/components/UpgradeModal';
import { FounderNote, FOUNDER_PERSON_SCHEMA } from '@/components/seo/FounderNote';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';

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
 { q: 'How do I check if a gun is stolen by serial number?', a: "Private citizens (buyers and sellers) can directly search stolen-gun databases with SafeOrStolen. Scan the serial with your phone camera or type it in at safeorstolen.com/firearms-check. It searches more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports, and flags serials that look altered. Result in seconds that names every source." },
 { q: 'Is the gun serial number lookup free?', a: 'Yes. SafeOrStolen gives you 1 free check, no account or credit card needed. After that it is $0.99 for 2 checks or $10 a month for unlimited checks.' },
 { q: 'Can private citizens check if a gun is stolen online?', a: "Yes. Private citizens can now directly search stolen-gun databases with SafeOrStolen by scanning or typing the serial. It checks more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC plus live Ohio records. First check is free. This does not include the FBI NCIC file — ask local police or use an FFL for that." },
 { q: "Can I search NCIC to check if a gun is stolen?", a: "No. NCIC, the FBI's National Crime Information Center, is open only to law enforcement, so private buyers and sellers can't search it. SafeOrStolen bridges the gap between citizens and NCIC: anyone can search more than 220,000 police gun theft and loss reports from 33 states and DC, plus live Ohio law-enforcement records, free for the first check. If a gun matches, give the serial number to police, who can confirm it in NCIC." },
 { q: "How do I check if a gun is stolen by serial number online?", a: "Enter the serial number in the search box at safeorstolen.com/firearms-check and press search. In seconds SafeOrStolen checks it against more than 220,000 police gun theft and loss reports from 33 states and DC, live Ohio law-enforcement records and its own theft reports, and shows the reporting police department if it matches. It works for a gun from any state." },
 { q: "Can I look up a Glock serial number to see if it's stolen?", a: "Yes. SafeOrStolen checks a serial number from any make, including Glock, Smith & Wesson, Ruger, Sig Sauer, Taurus, Springfield, Remington and Mossberg. Enter the serial exactly as stamped on the frame; on a Glock it is on the frame, the slide and the barrel, and all three should match." },
 { q: "Is there a stolen gun search for the public?", a: "Yes. SafeOrStolen is a stolen gun search anyone can use, with no account or law-enforcement credentials. One search covers more than 220,000 police gun theft and loss reports from 33 states and DC, live Ohio law-enforcement records and SafeOrStolen's own reports, with your first check free." },
 { q: 'Does the gun serial number lookup work in every state?', a: "Yes. Anyone in any state can run a gun serial check on SafeOrStolen. Every check searches all of SafeOrStolen's police reports at once, from 33 states and Washington, DC, because guns stolen in one state often turn up in another. The result names each source searched." },
 { q: 'My state is not on the list. Can I still check a gun?', a: "Yes. Every check searches the full set of reports, wherever you live, including Tennessee, Kentucky and Alabama. For an extra step, ask your local police on their non-emergency line whether they will run the serial, or do the sale through a licensed dealer." },
 { q: 'Is it legal to check a gun serial number?', a: 'Yes. Looking up whether a serial number has been reported stolen is legal for anyone. SafeOrStolen is a private service and is not a government agency. It never shows who owns a gun or who reported it.' },
 { q: 'What should I do if the result is not found?', a: 'No report found means nothing matched in the records SafeOrStolen searched, which is a good sign. It does not prove ownership. Before you pay, also ask for the original receipt or transfer paperwork, and use a licensed dealer for the transfer where your state requires one.' },
 { q: 'What should I do if the gun comes back as stolen?', a: "Don't buy it and don't confront the seller. Leave, and give the serial number and the seller's details to your local police on their non-emergency line." },
 { q: 'Will the seller know I checked the serial number?', a: 'No. Searches on SafeOrStolen are private and the seller is never told.' },
 { q: 'How do I report my own stolen gun?', a: 'File a report with your local police first and give them the serial number. Then report it on SafeOrStolen at safeorstolen.com/report-stolen, so anyone who checks that serial number before buying will see it.' },
];

const FirearmsCheckPage = () => {
 return (
 <div className="min-h-screen bg-background text-foreground">
 <PageSEO
 title="Free Gun Serial Number Lookup for Private Citizens | SafeOrStolen"
 description="Private citizens can directly search stolen-gun databases. Scan or type a serial to check 220,000+ police reports from 33 states + live Ohio records. First check free."
 canonical="/firearms-check"
 />

 {/* HERO + TOOL — hero-stable reserves min-height to prevent CLS on mobile */}
 <section className="hero-stable bg-gradient-to-b from-muted to-background py-16 px-4 flex items-center">
 <div className="max-w-3xl mx-auto text-center w-full">
 <div className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
 🔫 Firearm Verification
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
 Free Gun Serial Number Lookup for Private Citizens{' '}
 <br />
 <span className="text-primary">Scan or Type the Serial — Check Stolen Reports</span>
 </h1>
 <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
 Private citizens (buyers and sellers) can now directly search stolen-gun databases with SafeOrStolen. Scan the serial with your phone camera or type it in. We check more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio records.
 </p>


 {/* VERIFY TOOL — inline if no shared component */}
 <GunVerifyTool />
 <p className="mt-4 text-sm text-muted-foreground">Result lists every source searched. 1 free check, then $0.99 for 2 checks or $10 a month unlimited.</p>

 <p className="text-muted-foreground/60 text-sm mt-4">
 1 free check · No credit card · Works for handguns, rifles, shotguns, and more
 </p>
 <p className="text-sm mt-3">
 <Link to="/how-to-check-if-gun-is-stolen" className="text-primary hover:underline">How to check if a gun is stolen: step-by-step guide</Link>
 {' · '}
 <Link to="/stolen-gun-statistics" className="text-primary hover:underline">Stolen gun statistics by state</Link>
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

 <FounderNote
 paragraphs={[
 "SafeOrStolen exists because of my friend Glen Thomure. Someone he trusted gave him a tablet, and Glen took it in good faith. It was stolen. When police ran the serial number, Glen was the one arrested, and he lost his home, his car and his savings. That was over a tablet. With a gun, the person holding it when police run the serial is in far deeper trouble.",
 "If you're buying a gun from a private seller, check the serial here first, then look closely at the serial itself for grinding, fresh stamping or numbers that don't line up. If anything seems wrong, do the sale through a licensed dealer or ask your local police to run it. Checking here first takes a few seconds and could save you from buying a stolen gun."
 ]}
 />

 {/* MAIN CONTENT */}
 <article className="max-w-3xl mx-auto px-4 pb-16">

 {/* Oct 28 2026: the citizen / NCIC gap. Honest: SafeOrStolen does not search NCIC (police-only). */}
 <section className="mb-12 rounded-2xl border border-primary/40 bg-primary/5 p-6">
 <h2 className="text-2xl font-black text-foreground mb-3">
 Bridging the Gap Between Citizens and NCIC
 </h2>
 <p className="text-muted-foreground mb-3">
 Police check guns against NCIC, the FBI's National Crime Information Center. Private buyers and sellers can't: NCIC is open only to law enforcement. That has left citizens with no way to check a gun before a private sale.
 </p>
 <p className="text-muted-foreground mb-3">
 SafeOrStolen bridges that gap. Anyone can search a gun serial number against <strong className="text-foreground">more than 220,000 police gun theft and loss reports from 33 states and DC</strong>, plus live Ohio law-enforcement records, in seconds, for a gun from any state. Your first check is free and no account is needed.
 </p>
 <p className="text-muted-foreground">
 If a gun matches, don't buy it. Give the serial number to local police, who can confirm the report in NCIC.
 </p>
 <p className="text-sm text-muted-foreground mt-3">
 In the news: <Link to="/press-release" className="text-primary hover:underline">How to Check if a Gun Is Stolen: Free Gun Serial Number Lookup for Private Buyers</Link> (October 28, 2026)
 </p>
 </section>

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
 Quick answer: every gun check searches four sources at once: police firearm theft and loss reports from 33 states and DC, live Ohio law-enforcement records, SafeOrStolen theft reports and a serial integrity check.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-6">
 All of these are searched at the same time, and the result lists each one, so
 you know exactly what was checked before money changes hands.
 </p>
 <div className="space-y-3">
 {[
 {
 db: 'Police firearm theft and loss reports (33 states and DC)',
 desc: 'More than 220,000 reports of stolen and lost guns filed with police in 33 states and Washington, DC. Matches show the make, model, state and year of the report.',
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
 db: 'SafeOrStolen theft reports ',
 desc: 'Guns reported stolen by owners on SafeOrStolen. These are user reports, not proof of police verification.',
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
 Quick answer: SafeOrStolen holds police firearm theft and loss reports from 33 states and Washington, DC, more than 220,000 in all. Every gun check searches all of them at once, whichever state you are in.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 The table shows how many police reports SafeOrStolen holds for each state and the years they were filed. Open a state for its own free lookup page with the most reported brands and models, or see the <Link to="/stolen-gun-statistics" className="text-primary hover:underline">stolen gun statistics</Link>.
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
 check any gun here. The search covers SafeOrStolen's own reports, plus the historical reports above,
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
 Quick answer: Under 18 U.S.C. § 922(j), receiving or possessing a firearm you know or have reason to believe is stolen is a crime. A check is not legal advice or a guarantee.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 This is not a minor civil matter. Buying a stolen gun — even unknowingly — 
 creates serious legal exposure under both federal and state law:
 </p>
 <ul className="space-y-3 mb-6">
 {[
 { title: 'Federal criminal exposure', desc: 'Under 18 U.S.C. § 922(j), knowingly purchasing, possessing, or transferring a stolen firearm is a federal felony carrying up to 10 years in prison. "Knowingly" is broadly interpreted — if you had reason to know the gun was stolen (low price, seller unwilling to provide paperwork), that can be sufficient.' },
 { title: 'State criminal exposure', desc: 'Every state also has its own law against receiving stolen property. Penalties vary by state and by the value of the property.' },
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
 { who: 'Private Buyers', desc: 'Anyone purchasing a used firearm through a private sale on Armslist, Facebook, at a gun show, or from an individual. Many states do not require a background check for private sales, so checking the serial and the paperwork the seller shows you is up to you.' },
 { who: 'Gun Show Vendors & Attendees', desc: 'High volume + cash transactions = elevated risk. Many stolen guns circulate through gun shows precisely because of lighter scrutiny. Run a check on every private transaction.' },
 { who: 'FFL Dealers Buying Used Inventory', desc: 'When buying used firearms from individuals for resale, a serial check provides documented due diligence before you take ownership.' },
 { who: 'Private Sellers', desc: 'Sellers who want to show a clean serial check before a private sale. Run it yourself and share the result, or report a theft so future buyers see it.' },
 ].map((item) => (
 <div key={item.who} className="bg-card/60 border border-border rounded-xl p-4">
 <h3 className="text-foreground font-bold text-sm mb-1">{item.who}</h3>
 <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>
 </article>
 </div>
 )
}

// Inline verify tool for gun page
function GunVerifyTool() {
 const [identifier, setIdentifier] = useState('')
 const { verify, isLoading: loading, result, limitHit } = useParallelVerification()

 async function handleSubmit(e: React.FormEvent) {
 e.preventDefault()
 if (!identifier.trim()) return
 window.location.href = `/verify?q=${encodeURIComponent(identifier.trim())}&type=firearm`
 }

 return (
 <>
 <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
 <input
 type="text"
 value={identifier}
 onChange={(e) => setIdentifier(e.target.value)}
 placeholder="Scan or enter firearm serial number..."
 aria-label="Firearm serial number"
 className="flex-1 bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-hidden focus:border-primary text-sm"
 />
 <Button
 type="submit"
 disabled={loading || !identifier.trim()}
 className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-60 whitespace-nowrap text-sm"
 >
 {loading ? 'Checking...' : 'Check Serial →'}
 </Button>
 </form>
 {result && <div className="mt-6 text-left"><ParallelVerificationDisplay result={result} /></div>}
 {limitHit && <div className="mx-auto mt-6 max-w-2xl text-left"><LimitPayOffer identifier={limitHit.identifier} itemType={limitHit.itemType} /></div>}
 </>
 )
}

export default FirearmsCheckPage;
