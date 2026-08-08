import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const GunSerialNumberCheckGuide = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I check if a gun is stolen for free?",
 "acceptedAnswer": { "@type": "Answer", "text": "Enter the firearm's serial number on SafeOrStolen.com. We check the national stolen-firearms registry. You get 2 free checks with no credit card required. Results in approximately 3 seconds." }
 },
 {
 "@type": "Question",
 "name": "What is stolen firearms databases?",
 "acceptedAnswer": { "@type": "Answer", "text": "The National Crime Information Center (stolen firearms databases) is the FBI's centralized criminal justice database containing over 7 million stolen firearm records. When a gun is reported stolen to any law enforcement agency in the US, it's entered into stolen firearms databases. SafeOrStolen checks stolen firearms databases as part of every firearm verification." }
 },
 {
 "@type": "Question",
 "name": "Is it illegal to buy a stolen gun?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes. Under 18 U.S.C. § 922(j), knowingly possessing a stolen firearm is a federal felony punishable by up to 10 years in prison. Even unknowing possession can result in the firearm being seized with no compensation. This is why verification before any private sale is essential." }
 },
 {
 "@type": "Question",
 "name": "Where is the serial number on a gun?",
 "acceptedAnswer": { "@type": "Answer", "text": "Most firearms have the serial number engraved on the frame or receiver. On handguns, check the frame near the trigger guard or on the barrel. On rifles and shotguns, check the receiver (the main body where the barrel attaches). Some firearms have the serial number on multiple locations. If the serial number appears filed off or altered, do not purchase the firearm — this is a federal crime under 18 U.S.C. § 922(k)." }
 },
 {
 "@type": "Question",
 "name": "Can I check a gun serial number at a gun show?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes. SafeOrStolen works on any mobile device. At a gun show, simply open safeorstolen.com, enter the serial number, and get results in 3 seconds. This is especially important for private sales at gun shows where no background check is required in many states." }
 },
 {
 "@type": "Question",
 "name": "What databases does SafeOrStolen check for firearms?",
 "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen checks firearm serial numbers against stolen firearms databases and analyzes the serial for signs of alteration." }
 },
 {
 "@type": "Question",
 "name": "What should I do if a gun comes back as stolen?",
 "acceptedAnswer": { "@type": "Answer", "text": "Do NOT purchase the firearm. Do NOT handle it further if possible. Contact local law enforcement immediately and provide the serial number, seller information, and location. Do not confront the seller. If you already purchased a firearm that later comes back as stolen, contact law enforcement immediately — cooperation is your best legal protection." }
 }
 ]
 };

 const articleSchema = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "How to Check if a Gun is Stolen — Free Serial Number Lookup (2026)",
 "author": { "@type": "Organization", "name": "SafeOrStolen" },
 "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
 "datePublished": "2026-03-09",
 "dateModified": "2026-03-09",
 "description": "Step-by-step guide to checking any firearm serial number against the national stolen-firearms registry. Free lookup tool included.",
 "mainEntityOfPage": "https://safeorstolen.com/blog/how-to-check-if-gun-is-stolen"
 };

 return (
 <>
 <PageSEO
 title="How to Check if a Gun is Stolen — Free Serial Number Lookup (2026) | SafeOrStolen"
 description="Check any gun serial number free against the national stolen-firearms registry. Step-by-step guide with free lookup tool. Verify firearms before buying."
 canonical="/blog/how-to-check-if-gun-is-stolen"
 keywords="gun serial number lookup, check if gun is stolen, stolen firearms databases gun check, stolen firearm database, free gun serial number check"
 structuredData={[faqSchema, articleSchema]}
 />
 <TopNavigation />
 <main className="min-h-screen bg-background pt-20">
 <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <span className="text-primary text-sm font-bold uppercase tracking-widest">Firearms Verification Guide</span>
 <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">How to Check if a Gun is Stolen — Free Serial Number Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Before buying any firearm in a private sale, you must verify the serial number against stolen databases. Possessing a stolen firearm is a federal felony under 18 U.S.C. § 922(j) — up to 10 years in prison. Here's how to check for free in 3 seconds.
 </p>
 <p className="text-muted-foreground text-sm mt-3">Updated March 2026 · 8 min read</p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/firearms-check">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check Gun Serial Number Free <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · registry + serial integrity check</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16 prose prose-lg dark:prose-invert">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why You Must Check Before Buying</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 An estimated 380,000 firearms are stolen in the United States each year, according to the Bureau of Justice Statistics. Many of these end up in private sales — at gun shows, through classified ads, and on platforms like Armslist and GunBroker. Unlike licensed dealer sales, private transactions in most states don't require background checks, creating a gap where stolen firearms change hands.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 The legal consequences of possessing a stolen firearm are severe. Under federal law (18 U.S.C. § 922(j)), knowingly receiving a stolen firearm is punishable by up to 10 years in federal prison. Even if you didn't know it was stolen, the firearm will be seized by law enforcement with zero compensation to you. You lose the gun and the money you paid for it.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 A 3-second serial number check before handing over cash is the minimum due diligence any responsible buyer should perform. It's free, fast, and could save you from a federal felony charge.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step: How to Check a Gun Serial Number</h2>
 <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
 <li><strong className="text-foreground">Locate the serial number</strong> — On handguns, check the frame near the trigger guard. On rifles/shotguns, check the receiver. If the serial number appears filed off, altered, or missing, <strong>do not purchase</strong> — possessing a firearm with an obliterated serial number is a separate federal crime (18 U.S.C. § 922(k)).</li>
 <li><strong className="text-foreground">Go to SafeOrStolen's firearms checker</strong> — Visit <Link to="/firearms-check" className="text-primary hover:underline">safeorstolen.com/firearms-check</Link> on any device (works on mobile at gun shows).</li>
 <li><strong className="text-foreground">Enter the serial number</strong> — Type or paste the complete serial number exactly as engraved on the firearm.</li>
 <li><strong className="text-foreground">Review results in ~3 seconds</strong> — SafeOrStolen checks firearm serial numbers against stolen firearms databases and analyzes the serial for signs of alteration.</li>
 <li><strong className="text-foreground">Act on the results</strong> — If clean, proceed with the purchase. If flagged as stolen, do NOT buy. Contact local law enforcement immediately.</li>
 </ol>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What Databases Does SafeOrStolen Check?</h2>
 <ul className="space-y-3">
 {[
 { name: '', desc: '32,000+ community-reported stolen firearms with detailed descriptions and police report numbers' },
 { name: 'Serial Integrity Check', desc: 'Detects obliterated, altered, or placeholder serial numbers — a federal felony indicator under 18 U.S.C. § 922(k)' },
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
 Every legally manufactured firearm sold in the United States must have a unique serial number engraved by the manufacturer. Here's where to find it by firearm type:
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
 <p className="text-muted-foreground text-sm">If a serial number appears filed off, ground down, or altered in any way, do NOT purchase the firearm. Possessing a firearm with an obliterated serial number is a federal felony under 18 U.S.C. § 922(k), punishable by up to 5 years in prison — regardless of whether the gun is stolen.</p>
 </div>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Checking Guns at Gun Shows</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Gun shows are one of the most common venues for private firearm sales. In many states, private sales at gun shows don't require background checks (the so-called "gun show loophole"). This makes serial number verification even more critical — it's the only check standing between you and potentially purchasing a stolen firearm.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 SafeOrStolen works on any mobile device with an internet connection. At a gun show, simply:
 </p>
 <ol className="list-decimal list-inside text-muted-foreground space-y-1">
 <li>Open safeorstolen.com on your phone</li>
 <li>Enter the serial number from the firearm you're considering</li>
 <li>Get results in 3 seconds — right at the table</li>
 </ol>
 <p className="text-muted-foreground leading-relaxed mt-4">
 If a seller refuses to let you check the serial number, that's a major red flag. Legitimate sellers have nothing to hide. Walk away.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What to Do if a Gun Comes Back as Stolen</h2>
 <ol className="list-decimal list-inside text-muted-foreground space-y-2">
 <li><strong className="text-foreground">Do NOT purchase the firearm.</strong></li>
 <li><strong className="text-foreground">Do NOT confront the seller.</strong> They may not know it's stolen — or they may be dangerous.</li>
 <li><strong className="text-foreground">Leave the area safely</strong> and call local law enforcement.</li>
 <li><strong className="text-foreground">Provide the serial number, seller description, and location</strong> to the police.</li>
 <li>If you've <em>already</em> purchased a firearm that later comes back as stolen, contact law enforcement immediately. Cooperation is your best legal protection.</li>
 </ol>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
 <div className="space-y-3">
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">How do I check if a gun is stolen for free?</summary>
 <p className="text-muted-foreground mt-2">Enter the serial number at safeorstolen.com/firearms-check. We check the national stolen-firearms registry, and all the national stolen-firearms registry. 2 free checks, no credit card. Results in 3 seconds.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">What is stolen firearms databases?</summary>
 <p className="text-muted-foreground mt-2">The FBI's National Crime Information Center contains over 7 million stolen firearm records from every law enforcement agency in the US. When a gun is reported stolen, it'</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Is it illegal to buy a stolen gun?</summary>
 <p className="text-muted-foreground mt-2">Yes. Under 18 U.S.C. § 922(j), possessing a stolen firearm is a federal felony — up to 10 years in prison. Even unknowing possession results in seizure with no compensation.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Where is the serial number on a gun?</summary>
 <p className="text-muted-foreground mt-2">On handguns: frame near trigger guard. On rifles/shotguns: receiver. If it appears filed off, do not purchase — that's a separate federal crime.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Can I check a gun serial number at a gun show?</summary>
 <p className="text-muted-foreground mt-2">Yes. SafeOrStolen works on any mobile device. Open safeorstolen.com, enter the serial number, get results in 3 seconds — right at the table.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">What databases does SafeOrStolen check for firearms?</summary>
 <p className="text-muted-foreground mt-2">The stolen firearms databases (32K+ victim-reported records), plus serial number integrity validation.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">What should I do if a gun comes back as stolen?</summary>
 <p className="text-muted-foreground mt-2">Do NOT purchase. Do NOT confront the seller. Leave safely and call local law enforcement with the serial number and seller details.</p>
 </details>
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4">Related Guides</h2>
 <div className="flex flex-wrap gap-3">
 <Link to="/blog/atf-gun-serial-number-check" className="text-primary hover:underline font-medium">ATF Serial Number Check Guide</Link>
 <Link to="/blog/hotgunz-database-guide" className="text-primary hover:underline font-medium"> Database Guide</Link>
 <Link to="/blog/state-stolen-gun-database-guide" className="text-primary hover:underline font-medium">State-by-State Stolen Gun Databases</Link>
 <Link to="/blog/gun-show-serial-number-check" className="text-primary hover:underline font-medium">Gun Show Verification Guide</Link>
 <Link to="/firearms-check" className="text-primary hover:underline font-medium">Free Gun Serial Number Lookup Tool</Link>
 </div>
 </section>
 </article>
 </main>
 <Footer />
 </>
 );
};

export default GunSerialNumberCheckGuide;
