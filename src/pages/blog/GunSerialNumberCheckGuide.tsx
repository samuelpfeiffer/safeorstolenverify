import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const GunSerialNumberCheckGuide = () => {
 // Oct 7 2026: fixed by hand. Removed the false "national stolen-firearms registry" claim, the
 // "32,000+ community-reported" figure, an unsourced theft statistic, penalty years we couldn't
 // confirm, and "3 seconds". Sources below match what a gun check actually searches.
 const faqs = [
 {
 q: "How do I check if a gun is stolen for free?",
 a: "Enter the serial number at SafeOrStolen (safeorstolen.com/firearms-check). It searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, SafeOrStolen's own theft reports and public web results, and flags serials that look altered. A free account gets 2 checks with no credit card; results come back in a few seconds."
 },
 {
 q: "Is there a national stolen gun database the public can search?",
 a: "No. The FBI's NCIC holds stolen gun reports nationwide, but only law enforcement can search it, and ATF eTrace is for police too. SafeOrStolen does not search either. What a buyer can search are records like the police theft and loss reports SafeOrStolen uses from 33 states and DC. For an NCIC answer, ask your local police department to run the serial."
 },
 {
 q: "Is it illegal to buy a stolen gun?",
 a: "Yes. Under 18 U.S.C. § 922(j), it's a federal crime to receive or possess a firearm you know or have reason to believe is stolen. Even if you didn't know, police can take the gun back for its owner and you'll be out what you paid. That's why buyers check the serial before handing over cash in a private sale."
 },
 {
 q: "Where is the serial number on a gun?",
 a: "On most handguns it's stamped on the frame, often just above or in front of the trigger guard, and sometimes repeated on the slide or barrel. On rifles and shotguns it's on the receiver; on an AR-15 it's the lower receiver. If the number looks filed, ground or altered, don't buy the gun: possessing a firearm with an obliterated serial is a federal crime under 18 U.S.C. § 922(k)."
 },
 {
 q: "Can I check a gun serial number at a gun show?",
 a: "Yes. Open safeorstolen.com on your phone, or the free installable web app at safeorstolen.com/app, type the serial off the gun, and the result comes back in a few seconds at the table. It works anywhere you have signal. If a private seller won't let you read the serial, don't buy."
 },
 {
 q: "What does SafeOrStolen check for firearms?",
 a: "A SafeOrStolen gun check searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; years vary by state), live Ohio law-enforcement records, SafeOrStolen's own theft reports and public web results, and flags serials that look altered or obliterated. It does not search NCIC or ATF eTrace."
 },
 {
 q: "What should I do if a gun comes back as stolen?",
 a: "Don't buy it, and don't argue with the seller. Leave, then call the local police non-emergency line with the serial number, a description of the seller and where you met. If you already bought a gun that later shows up as stolen, call the police yourself and tell them how and when you bought it."
 }
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(f => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 };

 const articleSchema = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "How to Check if a Gun is Stolen — Free Serial Number Lookup (2026)",
 "author": { "@type": "Organization", "name": "SafeOrStolen" },
 "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
 "datePublished": "2026-03-09",
 "dateModified": "2026-10-07",
 "description": "How to check a gun serial number before you buy: where to find it, what a SafeOrStolen gun check searches, and what to do if it comes back stolen.",
 "mainEntityOfPage": "https://safeorstolen.com/blog/how-to-check-if-gun-is-stolen"
 };

 return (
 <>
 <PageSEO
 title="How to Check if a Gun is Stolen — Free Serial Number Lookup (2026) | SafeOrStolen"
 description="How to check if a gun is stolen: find the serial, search police theft reports from 33 states and DC in a few seconds, and know what to do next. 2 free checks."
 canonical="/blog/how-to-check-if-gun-is-stolen"
 keywords="gun serial number lookup, check if gun is stolen, stolen gun check, stolen firearm database, free gun serial number check"
 structuredData={[faqSchema, articleSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <span className="text-primary text-sm font-bold uppercase tracking-widest">Firearms Verification Guide</span>
 <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">How to Check if a Gun is Stolen — Free Serial Number Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Read the serial off the gun, enter it at safeorstolen.com/firearms-check, and in a few seconds you'll see whether it matches police firearm theft and loss reports from 33 states and DC, live Ohio law-enforcement records, or SafeOrStolen theft reports. Your first 2 checks are free.
 </p>
 <p className="text-muted-foreground text-sm mt-3">Updated October 7, 2026 · 8 min read</p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/firearms-check">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check Gun Serial Number Free <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · police theft reports + altered-serial check</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16 prose prose-lg dark:prose-invert">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Before Buying</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Stolen guns get resold the same way any used gun does: at gun shows, through classified ads and online listings, and between people who know each other. A licensed dealer runs a background check on the buyer, but in many states a private sale doesn't require one, and nobody checks whether the gun itself is stolen unless you do.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Knowingly receiving or possessing a stolen firearm is a federal crime under 18 U.S.C. § 922(j). Even if you had no idea, police can take the gun back for its owner and you're out the money you paid.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 A serial check takes a few seconds, and it's saved to your account with the date, which is a record that you looked before you bought.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step: How to Check a Gun Serial Number</h2>
 <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
 <li><strong className="text-foreground">Locate the serial number</strong> — On handguns, check the frame near the trigger guard. On rifles/shotguns, check the receiver. If the serial number appears filed off, altered, or missing, <strong>do not purchase</strong> — possessing a firearm with an obliterated serial number is a separate federal crime (18 U.S.C. § 922(k)).</li>
 <li><strong className="text-foreground">Go to SafeOrStolen's firearms checker</strong> — Visit <Link to="/firearms-check" className="text-primary hover:underline">safeorstolen.com/firearms-check</Link> on any device (it works on your phone at a gun show).</li>
 <li><strong className="text-foreground">Enter the serial number</strong> — Type or paste the complete serial number exactly as engraved on the firearm.</li>
 <li><strong className="text-foreground">Read the result</strong> — In a few seconds you'll see "reported stolen", "possible match" or "no report found in the records searched", with each source listed and a flag if the serial looks altered.</li>
 <li><strong className="text-foreground">Act on the results</strong> — If nothing turns up, the gun isn't in those records, which isn't a guarantee. If it's reported stolen, don't buy it and call the police non-emergency line.</li>
 </ol>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What a SafeOrStolen Gun Check Searches</h2>
 <ul className="space-y-3">
 {[
 { name: 'Police firearm theft and loss reports', desc: '242,839 reports from 33 states and Washington, DC, filed through 2017 (years covered vary by state)' },
 { name: 'Live Ohio law-enforcement records', desc: 'Current stolen-gun records from Ohio' },
 { name: 'SafeOrStolen theft reports and public web results', desc: 'Thefts owners reported on the site, plus listings and posts that mention the serial' },
 { name: 'Altered-serial flag', desc: 'Flags serials that look altered, obliterated or like placeholders' },
 ].map(db => (
 <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 <div><strong className="text-foreground">{db.name}</strong><span className="text-muted-foreground"> — {db.desc}</span></div>
 </li>
 ))}
 </ul>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Where to Find a Gun's Serial Number</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Since the Gun Control Act of 1968, guns made or imported for sale in the US carry a manufacturer's serial number. Some older guns have none. Here's where to look by type:
 </p>
 <ul className="list-disc list-inside text-muted-foreground space-y-2">
 <li><strong className="text-foreground">Semi-automatic pistols:</strong> Frame/receiver, usually near the trigger guard. Some also on the slide or barrel.</li>
 <li><strong className="text-foreground">Revolvers:</strong> Frame, typically on the butt or crane (the swing-out piece). Older revolvers may have it inside the grip.</li>
 <li><strong className="text-foreground">Rifles:</strong> Receiver (the main body where the action and barrel meet). AR-15 style rifles have it on the lower receiver.</li>
 <li><strong className="text-foreground">Shotguns:</strong> Receiver, usually on the left side. Pump-action shotguns typically have it on the receiver near the loading port.</li>
 </ul>
 <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 mt-4">
 <div className="flex gap-2 items-center mb-2">
 <AlertTriangle className="h-5 w-5 text-destructive" />
 <strong className="text-foreground">Warning</strong>
 </div>
 <p className="text-muted-foreground text-sm">If a serial number appears filed off, ground down, or altered in any way, don't buy the gun. Possessing a firearm with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k), whether or not the gun is stolen.</p>
 </div>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Checking Guns at Gun Shows</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 A lot of private sales happen at gun shows, walking the aisles or in the parking lot. In many states a private sale there doesn't require a background check. Checking the serial is how you find out whether the gun has a theft report on it.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 SafeOrStolen works on any phone with signal. At the table:
 </p>
 <ol className="list-decimal list-inside text-muted-foreground space-y-1">
 <li>Open safeorstolen.com or the installed web app</li>
 <li>Enter the serial number from the firearm you're considering</li>
 <li>Read the result, which comes back in a few seconds</li>
 </ol>
 <p className="text-muted-foreground leading-relaxed mt-4">
 If a seller won't let you read the serial number, walk away. An honest seller expects you to look.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What to Do if a Gun Comes Back as Stolen</h2>
 <ol className="list-decimal list-inside text-muted-foreground space-y-2">
 <li><strong className="text-foreground">Don't buy the gun.</strong></li>
 <li><strong className="text-foreground">Don't confront the seller.</strong> They may not know it's stolen — or they may be dangerous.</li>
 <li><strong className="text-foreground">Leave the area safely</strong> and call local law enforcement.</li>
 <li><strong className="text-foreground">Provide the serial number, seller description, and location</strong> to the police.</li>
 <li>If you've <em>already</em> purchased a firearm that later comes back as stolen, call the police yourself and tell them how and when you bought it.</li>
 </ol>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
 <div className="space-y-3">
 {faqs.map(f => (
 <details key={f.q} className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">{f.q}</summary>
 <p className="text-muted-foreground mt-2">{f.a}</p>
 </details>
 ))}
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4">Related Guides</h2>
 <div className="flex flex-wrap gap-3">
 <Link to="/blog/atf-gun-serial-number-check" className="text-primary hover:underline font-medium">ATF Serial Number Check Guide</Link>
 <Link to="/how-to-check-if-gun-is-stolen" className="text-primary hover:underline font-medium">How to Check If a Gun Is Stolen</Link>
 <Link to="/blog/state-stolen-gun-database-guide" className="text-primary hover:underline font-medium">State-by-State Stolen Gun Databases</Link>
 <Link to="/blog/gun-show-serial-number-check" className="text-primary hover:underline font-medium">Gun Show Verification Guide</Link>
 <Link to="/firearms-check" className="text-primary hover:underline font-medium">Free Gun Serial Number Lookup Tool</Link>
 </div>
 </section>
 </article>
 </div>
 </>
 );
};

export default GunSerialNumberCheckGuide;
