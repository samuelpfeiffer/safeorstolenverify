import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const GunShowSerialNumberCheckGuide = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check a gun serial number at a gun show?",
 "acceptedAnswer": { "@type": "Answer", "text": "Open SafeOrStolen.com on your phone, enter the serial number engraved on the firearm, and get results in 3 seconds. SafeOrStolen checks the HotGunz national stolen-firearms registry, and all the HotGunz national stolen-firearms registry. Works on any mobile device with internet access. 2 free checks, no app download required." }
      },
      {
        "@type": "Question",
        "name": "Are private sales at gun shows legal?",
        "acceptedAnswer": { "@type": "Answer", "text": "In most states, yes. Federal law does not require background checks for private (non-dealer) sales. However, about 22 states have enacted universal background check laws that DO require checks on all sales including at gun shows. Regardless of your state's law, it is always illegal to knowingly purchase a stolen firearm (18 U.S.C. § 922(j))." }
      },
      {
        "@type": "Question",
        "name": "What are red flags when buying a gun at a gun show?",
        "acceptedAnswer": { "@type": "Answer", "text": "Watch for: (1) Seller refuses to let you check the serial number, (2) Price significantly below market value, (3) Serial number appears filed, ground, or altered, (4) Seller is evasive about where they got the gun, (5) Seller wants cash only and refuses any paperwork, (6) Seller is in a hurry and pressures you to decide immediately." }
      },
      {
        "@type": "Question",
        "name": "Do I need internet access to check a serial number at a gun show?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. SafeOrStolen requires an internet connection to query databases in real-time. Most gun show venues have cellular coverage. If you don't have data on your phone, connect to the venue's WiFi if available, or use a hotspot. You can also screenshot the serial number and check it when you have service before completing the purchase." }
      },
      {
        "@type": "Question",
        "name": "Should I check serial numbers on guns from licensed dealers at gun shows?",
        "acceptedAnswer": { "@type": "Answer", "text": "Licensed dealers (FFLs) are required to run NICS background checks on buyers, but they don't necessarily check if the specific firearm they're selling is stolen. It's rare but not impossible for a stolen gun to enter a dealer's inventory through trade-ins. A quick 3-second check gives you peace of mind regardless of the seller type." }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Run a Gun Serial Number Before Buying at a Gun Show (2026)",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
    "datePublished": "2026-03-09",
    "dateModified": "2026-03-09",
    "mainEntityOfPage": "https://safeorstolen.com/blog/gun-show-serial-number-check"
  };

  return (
    <>
      <PageSEO
        title="How to Check a Gun Serial Number at a Gun Show (2026) | SafeOrStolen"
        description="Step-by-step guide to verifying firearm serial numbers at gun shows using your phone. Check the HotGunz stolen-firearms registry in 3 seconds. Red flags to watch for. Free tool included."
        canonical="/blog/gun-show-serial-number-check"
        keywords="gun show serial number check, check gun at gun show, verify firearm gun show, gun show stolen check"
        structuredData={[faqSchema, articleSchema]}
      />
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Gun Show Safety Guide</span>
            <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">How to Run a Gun Serial Number Before Buying at a Gun Show</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Private sales at gun shows often skip background checks. A 3-second serial number check on your phone is the minimum due diligence before handing over cash. Here's exactly how to do it, what red flags to watch for, and what to do if a gun comes back as stolen.
            </p>
            <p className="text-muted-foreground text-sm mt-3">Updated March 2026 · 7 min read</p>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Link to="/firearms-check">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Check Gun Serial Number Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">Works on any phone · No app needed · 3-second results</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Gun Shows Require Extra Caution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gun shows are America's largest marketplace for private firearm sales. Hundreds of shows are held across the country every weekend, ranging from small community events to massive conventions with thousands of tables. While most sellers are legitimate gun owners and licensed dealers, the volume and speed of transactions create opportunities for stolen firearms to change hands.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In most states, private sellers at gun shows are not required to run background checks on buyers. This is commonly called the "gun show loophole" (though it's technically a private sale exemption, not specific to gun shows). The lack of formal verification in private sales means there's also no systematic check on whether the firearm being sold is stolen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Licensed dealers (FFLs) at gun shows DO run NICS background checks on buyers, but even they don't always verify that every firearm in their inventory — especially trade-ins — is clean. A 3-second serial number check protects you regardless of who you're buying from.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step: Checking a Gun at a Gun Show</h2>
            <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
              <li><strong className="text-foreground">Ask to see the serial number.</strong> Any legitimate seller will let you examine the firearm and read the serial number. If they refuse, walk away immediately.</li>
              <li><strong className="text-foreground">Open SafeOrStolen on your phone.</strong> Go to safeorstolen.com/firearms-check — no app download needed.</li>
              <li><strong className="text-foreground">Enter the serial number exactly as engraved.</strong> Include all letters, numbers, and hyphens.</li>
              <li><strong className="text-foreground">Wait 3 seconds for results.</strong> SafeOrStolen checks the HotGunz national stolen-firearms registry and validates serial number integrity. It is not a federal database check.</li>
              <li><strong className="text-foreground">Review the result.</strong> Clean = proceed with negotiation. Flagged = do NOT purchase, leave safely, contact law enforcement.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Red Flags at Gun Shows</h2>
            <div className="space-y-3">
              {[
                { flag: 'Seller refuses serial number check', desc: 'Legitimate sellers have nothing to hide. Refusal is the biggest red flag.' },
                { flag: 'Price significantly below market value', desc: 'A $1,200 gun for $400? Stolen firearms are often sold cheap for quick cash.' },
                { flag: 'Serial number appears altered', desc: 'Filed, ground, or re-stamped serial numbers indicate the gun was stolen. This alone is a federal crime to possess.' },
                { flag: 'Seller is evasive about provenance', desc: '"My buddy gave it to me" or vague stories about where they got the gun.' },
                { flag: 'Cash only, no paperwork', desc: 'While private sales don\'t require federal paperwork in many states, complete refusal of any documentation is suspicious.' },
                { flag: 'High pressure to buy immediately', desc: '"Someone else is coming to look at it" or "price goes up tomorrow" — classic tactics to prevent verification.' },
              ].map(rf => (
                <div key={rf.flag} className="flex gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div><strong className="text-foreground">{rf.flag}</strong><p className="text-muted-foreground text-sm mt-1">{rf.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What if a Gun Comes Back as Stolen at a Gun Show?</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Stay calm.</strong> Don't alert the seller or cause a scene.</li>
              <li><strong className="text-foreground">Politely decline the purchase.</strong> "I'm going to think about it" is fine.</li>
              <li><strong className="text-foreground">Walk away from the table.</strong></li>
              <li><strong className="text-foreground">Find show security or an off-duty officer</strong> (most gun shows have them).</li>
              <li><strong className="text-foreground">Report the serial number, table number, and seller description.</strong></li>
              <li>If no security is available, call the local police non-emergency line from outside the venue.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How do I check a gun serial number at a gun show?</summary>
                <p className="text-muted-foreground mt-2">Open safeorstolen.com on your phone, enter the serial number, get results in 3 seconds. Checks the HotGunz national stolen-firearms registry and validates serial integrity. 2 free checks, no app needed. For a definitive check, ask police to run the serial through NCIC.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Are private sales at gun shows legal?</summary>
                <p className="text-muted-foreground mt-2">In most states, yes. About 22 states require background checks on all sales including gun shows. Regardless, purchasing a stolen firearm is always illegal (18 U.S.C. § 922(j)).</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What are red flags when buying at a gun show?</summary>
                <p className="text-muted-foreground mt-2">Seller refuses serial number check, price way below market, altered serial number, evasive about provenance, cash only with no paperwork, high pressure to buy immediately.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Do I need internet at a gun show?</summary>
                <p className="text-muted-foreground mt-2">Yes. Most venues have cellular coverage. If not, screenshot the serial number and check before completing the purchase.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Should I check guns from licensed dealers too?</summary>
                <p className="text-muted-foreground mt-2">Yes. Dealers run buyer background checks but don't always verify every firearm in inventory (especially trade-ins). A 3-second check gives peace of mind.</p>
              </details>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Guides</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog/how-to-check-if-gun-is-stolen" className="text-primary hover:underline font-medium">How to Check if a Gun is Stolen</Link>
              <Link to="/blog/atf-gun-serial-number-check" className="text-primary hover:underline font-medium">ATF Serial Number Check</Link>
              <Link to="/blog/hotgunz-database-guide" className="text-primary hover:underline font-medium">HotGunz Database Guide</Link>
              <Link to="/blog/state-stolen-gun-database-guide" className="text-primary hover:underline font-medium">State-by-State Guide</Link>
              <Link to="/firearms-check" className="text-primary hover:underline font-medium">Free Gun Lookup Tool</Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GunShowSerialNumberCheckGuide;
