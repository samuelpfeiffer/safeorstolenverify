import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, AlertTriangle, MapPin, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';

const FirearmsCheckPage = () => {
  const faqs = [
    {
      question: "Can I check a gun serial number for free?",
      answer: "Yes. SafeOrStolen offers 2 free gun serial number lookup checks with no credit card required. Each check searches FBI NCIC, ATF eTrace, all 50 state databases, local law enforcement reports, and community databases like HotGunz simultaneously. Given that possessing a stolen firearm carries up to 10 years federal prison time, free verification before any private purchase is essential protection."
    },
    {
      question: "How do I find my gun's serial number?",
      answer: "Serial number locations vary by firearm type. For pistols and handguns, check the frame near the trigger guard, under the slide, or on the barrel near the chamber. For rifles, check the receiver side — on AR-15 platforms, it's on the lower receiver near the magazine well. For shotguns, check the receiver bottom or barrel underneath. Serial numbers are typically 6-10 alphanumeric characters. If the serial number appears altered, scratched, or filed, do NOT purchase — possessing a firearm with a defaced serial number is a federal crime under 18 U.S.C. § 922(k)."
    },
    {
      question: "What if the serial number is filed off?",
      answer: "This is a FEDERAL CRIME. Under 18 U.S.C. § 922(k), possessing a firearm with an altered, removed, or obliterated serial number is a felony punishable by up to 5 years in prison. Do NOT buy, touch, or handle a firearm with a defaced serial number. Leave immediately and report to local law enforcement and ATF at 1-800-283-4867. Signs of tampering include scratches over the serial area, uneven surfaces, different font depths, or chemical etching marks."
    },
    {
      question: "Can serial numbers be faked?",
      answer: "Rarely. Factory serial numbers use specific formats, fonts, and engraving depths unique to each manufacturer. Glock, Smith & Wesson, Sig Sauer, Ruger, and other major manufacturers use proprietary marking methods. Altered or re-stamped numbers typically look different — uneven depth, misaligned characters, or different font styles. If anything looks suspicious, walk away and report to ATF."
    },
    {
      question: "What databases does SafeOrStolen check?",
      answer: "We search multiple databases simultaneously: (1) FBI NCIC — National Crime Information Center with 7+ million stolen firearm records, (2) ATF eTrace — Bureau of Alcohol, Tobacco, Firearms and Explosives traced crime guns, (3) All 50 state law enforcement databases, (4) Local police department stolen property reports, (5) HotGunz — the largest public stolen gun database with 32,000+ user-reported stolen firearms, (6) Insurance company theft claims. This comprehensive multi-source approach catches stolen firearms that might only appear in one database."
    },
    {
      question: "Is it legal to buy guns privately?",
      answer: "It depends on your state. As of 2026, 22 states require universal background checks for all firearm sales including private transfers. In the remaining 28 states, private sales between residents of the same state may proceed without a background check, though the buyer must still be legally eligible to own a firearm. Regardless of state law, it is always illegal to buy a firearm you know or suspect is stolen. Always verify the serial number before any private purchase."
    },
    {
      question: "How long does a gun serial number check take?",
      answer: "Instant. SafeOrStolen returns results in under 3 seconds by querying all databases in parallel. You receive a comprehensive report showing whether the firearm appears in any stolen property database, including the date reported (if applicable) and which database flagged it."
    },
    {
      question: "What if I already bought a stolen gun?",
      answer: "Contact local police and ATF (1-800-283-4867) immediately. Voluntary disclosure and surrender of the firearm demonstrates good faith and significantly helps your legal position. You will likely lose the firearm and your money, but cooperation helps avoid criminal charges for possession of stolen property. Document your purchase — keep any bill of sale, text messages, or listing screenshots as evidence that you were a good-faith buyer."
    },
    {
      question: "Do I need an FFL to check serial numbers?",
      answer: "No. Anyone can check firearm serial numbers on SafeOrStolen — you do not need a Federal Firearms License. Our service is designed specifically for individual buyers, private sellers, gun show attendees, and anyone purchasing from non-FFL sources where no background check is required. FFL dealers have their own access to NCIC, but private buyers do not — which is why SafeOrStolen exists."
    },
    {
      question: "Are gun serial number databases public?",
      answer: "NCIC (National Crime Information Center) is restricted to law enforcement — civilians cannot access it directly. However, SafeOrStolen provides public access to stolen firearm verification through our data partnerships with law enforcement agencies and aggregation of multiple public and private databases. HotGunz is one publicly accessible database, but it only contains user-reported stolen firearms, not official law enforcement data. SafeOrStolen combines both official and community sources."
    },
    {
      question: "Should I verify firearms at gun shows?",
      answer: "Absolutely. Private sales at gun shows are one of the highest-risk scenarios for encountering stolen firearms because many transactions don't require background checks. Use the SafeOrStolen mobile app to check serial numbers on the spot before completing any purchase. If the seller refuses to let you verify the serial number, walk away — a legitimate seller has nothing to hide."
    },
    {
      question: "What happens if the seller's gun shows as stolen?",
      answer: "Do NOT purchase or touch the firearm. Do NOT confront the seller — they may not know it's stolen, or they may be dangerous. Leave the area calmly. Contact local police with the seller's description and listing information. Report to ATF at 1-800-283-4867. If it was an online listing, take screenshots before reporting and flag the listing on the platform."
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Free Gun Serial Number Lookup",
          "url": "https://safeorstolen.com/firearms-check",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "url": "https://safeorstolen.com"
          },
          "serviceType": "Firearm Theft Verification",
          "areaServed": { "@type": "Country", "name": "United States" },
          "description": "Free gun serial number lookup against FBI NCIC, ATF, and 50 state databases. Check if any firearm is stolen before buying. 2 free checks, instant results.",
          "dateModified": "2026-02-06"
        },
        {
          "@type": "HowTo",
          "name": "How to Check if a Gun is Stolen",
          "dateModified": "2026-02-06",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Locate the firearm serial number on the frame, receiver, barrel, or slide" },
            { "@type": "HowToStep", "position": 2, "name": "Record the complete serial number including all letters and numbers" },
            { "@type": "HowToStep", "position": 3, "name": "Enter the serial number into SafeOrStolen's free verification tool" },
            { "@type": "HowToStep", "position": 4, "name": "Review results showing database matches or clean status in 3 seconds" },
            { "@type": "HowToStep", "position": 5, "name": "If flagged as stolen, walk away and report to ATF at 1-800-283-4867" }
          ]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "Gun Serial Number Lookup", "item": "https://safeorstolen.com/firearms-check" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ];

  return (
    <>
      <PageSEO
        title="Free Gun Serial Number Lookup - Check if Firearm Stolen | SafeOrStolen"
        description="Free gun serial number lookup. Check pistol, rifle, shotgun serial numbers against FBI NCIC, ATF, 50 state databases. 2 free checks. Instant results in 3 seconds."
        keywords="gun serial number lookup free, pistol serial number lookup, checking firearm serial numbers, serial number lookup gun, check if firearm stolen, stolen gun check, firearm serial number verification, gun serial number check"
        canonical="/firearms-check"
        structuredData={structuredData}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Free Gun Serial Number Lookup - Check if Firearm is Stolen</h1>
          <p>Before buying a used gun, always check the serial number against stolen firearm databases. SafeOrStolen verifies firearms against NCIC (FBI), ATF, state databases, and law enforcement records. Instant results. 2 free checks.</p>
          <p>Visit safeorstolen.com/verify to check any firearm serial number.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Firearm Verification Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              Free Gun Serial Number Lookup — Check if Firearm is Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Before buying a used gun, <strong>ALWAYS</strong> check the serial number against stolen firearm databases. SafeOrStolen verifies firearms against FBI NCIC, ATF, all 50 state databases, and law enforcement records. Instant results. 2 free checks.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Over 380,000 firearms are stolen annually in the United States. Possessing a stolen firearm is a federal crime under 18 U.S.C. § 922(j), punishable by up to <strong>10 years in prison</strong> — even if you didn't know it was stolen. Protect yourself with a free serial number check before any private sale, gun show purchase, or online transaction.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Check Gun Serial Number Now — Free <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
                <span className="text-2xl font-bold text-primary">380K+</span>
                <span className="text-sm text-muted-foreground">Guns Stolen Yearly</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
                <span className="text-2xl font-bold text-primary">3 sec</span>
                <span className="text-sm text-muted-foreground">Verification Time</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
                <span className="text-2xl font-bold text-primary">100+</span>
                <span className="text-sm text-muted-foreground">Databases Searched</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
                <span className="text-2xl font-bold text-primary">Free</span>
                <span className="text-sm text-muted-foreground">First 2 Checks</span>
              </div>
            </div>
          </div>
        </section>

        <SitewideCredibilityBar />

        {/* How to Check Gun Serial Number */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Check a Gun Serial Number for Free</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Checking a firearm serial number takes less than 60 seconds and could save you from federal criminal charges. Enter the firearm's serial number into SafeOrStolen's free verification tool and we search every major stolen firearm database in the country simultaneously. Here is what we check:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "FBI NCIC — National Crime Information Center (7M+ records)",
                "ATF eTrace — Bureau of Alcohol, Tobacco, Firearms traced firearms",
                "All 50 state law enforcement databases",
                "Local police department stolen property reports",
                "HotGunz — 32,000+ user-reported stolen guns",
                "Insurance company theft claims and records"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-background rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Enter Serial Number Now <Search className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How to Find Gun Serial Number */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Find a Gun Serial Number</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every firearm manufactured after 1968 is required by the Gun Control Act to have a unique serial number. Serial number locations vary by firearm type. Here is exactly where to look:
            </p>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Pistols and Handguns
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Frame near trigger guard</strong> — most common location on semi-automatic pistols</li>
                  <li>• <strong>Slide</strong> — top of the gun, visible when slide is locked back</li>
                  <li>• <strong>Under grip panels</strong> — some older models place serial numbers here</li>
                  <li>• <strong>Inside ejection port</strong> — visible when slide is open</li>
                  <li>• <strong>Barrel near chamber</strong> — secondary serial number on many pistols</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Common brands: <Link to="/gun-serial-number-lookup" className="text-primary hover:underline">Glock</Link>, Smith & Wesson, Sig Sauer, Ruger, Beretta, Springfield Armory, Taurus, CZ, Walther, Kimber
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Rifles
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Receiver (main body)</strong> — the primary location for all rifle types</li>
                  <li>• <strong>Barrel near chamber</strong> — secondary serial number location</li>
                  <li>• <strong>Under stock</strong> — some bolt-action rifles place numbers here</li>
                  <li>• <strong>Bolt carrier</strong> — additional serial marking on some models</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Common brands: AR-15 platforms (most stolen), Remington, Winchester, Savage, Marlin, Browning, Ruger
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Shotguns
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Receiver bottom</strong> — primary location on pump and semi-auto shotguns</li>
                  <li>• <strong>Barrel underneath</strong> — secondary serial number</li>
                  <li>• <strong>Side of action</strong> — visible on some pump-action models</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Common brands: Mossberg, Remington 870, Benelli, Browning, Winchester, Beretta
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  AR-15 and AR Platform Firearms
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Lower receiver</strong> — the serialized component under federal law</li>
                  <li>• <strong>Near magazine well</strong> — stamped or laser-engraved</li>
                  <li>• <strong>Above trigger guard</strong> — secondary location on some manufacturers</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Important: Only the lower receiver is the serialized "firearm" under ATF regulations. Upper receivers, barrels, and other components are not serialized.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Collectible and Antique Firearms
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Pre-1968 firearms</strong> may not have serial numbers (legal but verify provenance)</li>
                  <li>• <strong>Colt revolvers</strong> — check frame, crane, cylinder, and barrel</li>
                  <li>• <strong>WWI/WWII military firearms</strong> — often have arsenal markings and serial numbers</li>
                  <li>• <strong>Collector pieces</strong> — even antiques can be stolen; always verify</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-muted-foreground">
              Serial numbers are typically 6-10 alphanumeric characters. If the serial number appears scratched, filed, or tampered with, <strong>do NOT purchase the firearm</strong>. Possessing a firearm with a defaced serial number is a separate federal felony under 18 U.S.C. § 922(k).
            </p>
          </div>
        </section>

        {/* Why Check Gun Serial Numbers */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check Gun Serial Numbers Before Buying?</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Legal Protection
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Buying a stolen firearm is a <strong>federal crime in all 50 states</strong> under 18 U.S.C. § 922(j)</li>
                  <li>• Penalties include up to <strong>10 years imprisonment</strong> and $250,000 in fines</li>
                  <li>• There is <strong>NO "innocent buyer" defense</strong> — you are liable even without knowledge</li>
                  <li>• All firearms in your possession may be confiscated during investigation</li>
                  <li>• Permanent loss of gun ownership rights upon conviction</li>
                  <li>• ATF and law enforcement actively trace recovered firearms to current possessors</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Financial Protection
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Used firearms typically cost <strong>$300 to $3,000+</strong> — that's money you'll never recover</li>
                  <li>• Stolen firearms are confiscated permanently by law enforcement — no refund, no return</li>
                  <li>• Insurance will not cover a stolen firearm purchase</li>
                  <li>• No legal recourse to recover money from the seller</li>
                  <li>• Legal defense costs typically exceed $10,000 even if charges are dropped</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Safety Concerns
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Stolen firearms may have been used in violent crimes — linking you to active investigations</li>
                  <li>• ATF traces all recovered firearms back to the current possessor</li>
                  <li>• Outstanding warrants may exist for the firearm's serial number</li>
                  <li>• Criminal associations can follow you for years through ballistic databases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* State-by-State Gun Laws */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-7 h-7 text-primary" />
              State-by-State Gun Serial Number Laws
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Firearm laws vary significantly by state. Knowing your state's requirements for private sales, background checks, and stolen gun reporting helps you stay compliant and protected. Below are the key regulations for high-population states:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { state: "Alabama", details: "No registration required. Private sales allowed without background check. Stolen gun reporting recommended but not mandatory." },
                { state: "Alaska", details: "Constitutional carry state. No permit needed for open or concealed carry. Private sales legal. Report stolen firearms to local police." },
                { state: "Arizona", details: "No registration required. Private sales allowed. Stolen firearms should be reported to local law enforcement." },
                { state: "California", details: "Registration REQUIRED. All sales must go through an FFL dealer. Background check mandatory. 10-day waiting period. Stolen gun reporting REQUIRED by law." },
                { state: "Colorado", details: "Background checks required for ALL sales including private. Private sales must go through a licensed dealer. Report stolen guns within 24 hours." },
                { state: "Connecticut", details: "Permit required to purchase. Registration required. Background checks mandatory. Assault weapons ban. Report stolen firearms immediately." },
                { state: "Florida", details: "No registration required. 3-day waiting period (7 for handguns without concealed carry permit). Background checks for dealer sales. Private sales allowed." },
                { state: "Georgia", details: "No registration required. Constitutional carry state since 2022. Private sales allowed. No waiting period for purchases." },
                { state: "Illinois", details: "FOID card required to possess firearms. Background check mandatory for all purchases. 72-hour waiting period for handguns. Report stolen firearms." },
                { state: "New York", details: "License required for handguns. Registration required for handguns. Universal background checks. Safe storage law. Assault weapon restrictions." },
                { state: "Ohio", details: "Constitutional carry since 2022. No registration required. Private sales allowed. Background checks for dealer sales only." },
                { state: "Pennsylvania", details: "Background check required for handgun sales (including private). Long gun private sales exempt. No registration required." },
                { state: "Texas", details: "Constitutional carry state. No registration required. Private sales allowed. Background checks for dealer sales only. No waiting period." },
                { state: "Virginia", details: "Background checks for all sales (universal). One handgun per 30 days limit. No registration required. Red flag law enacted." },
                { state: "Washington", details: "Universal background checks required. Assault weapon ban (2023). 10-day waiting period. Mandatory reporting of stolen firearms." },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{item.state}</h3>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-muted-foreground text-sm">
              <strong>Important:</strong> Gun laws change frequently. This information reflects laws as of February 2026. Always verify current regulations with your state attorney general's office or a licensed firearms attorney. Regardless of state law, federal law (18 U.S.C. § 922(j)) applies everywhere — possessing a stolen firearm is a federal crime in all 50 states. <Link to="/serial-number-checker" className="text-primary hover:underline">Check any serial number free →</Link>
            </p>
          </div>
        </section>

        {/* Gun Serial Number Comparison */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Free Gun Serial Number Check Options Compared</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Several options exist for checking firearm serial numbers. Here is how they compare in terms of databases searched, speed, accessibility, and cost:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-4 font-bold">Service</th>
                    <th className="text-left p-4 font-bold">Databases</th>
                    <th className="text-left p-4 font-bold">Speed</th>
                    <th className="text-left p-4 font-bold">Cost</th>
                    <th className="text-left p-4 font-bold">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-primary/5">
                    <td className="p-4 font-bold text-primary">SafeOrStolen</td>
                    <td className="p-4">NCIC, ATF, 50 states, HotGunz, insurance</td>
                    <td className="p-4">3 seconds</td>
                    <td className="p-4">2 free, then $4.99/mo</td>
                    <td className="p-4">Web + Mobile App</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">HotGunz</td>
                    <td className="p-4">Community reports only (32K entries)</td>
                    <td className="p-4">Instant</td>
                    <td className="p-4">Free</td>
                    <td className="p-4">Web only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Local Police</td>
                    <td className="p-4">NCIC (single database)</td>
                    <td className="p-4">3-7 days</td>
                    <td className="p-4">Free</td>
                    <td className="p-4">In-person only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">ATF Trace</td>
                    <td className="p-4">Federal trace database</td>
                    <td className="p-4">Varies</td>
                    <td className="p-4">N/A</td>
                    <td className="p-4">Law enforcement only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">FFL Dealer</td>
                    <td className="p-4">NCIC via NICS check</td>
                    <td className="p-4">Minutes</td>
                    <td className="p-4">Part of purchase</td>
                    <td className="p-4">In-store only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-muted-foreground">
              SafeOrStolen searches more databases than any other publicly accessible service. While HotGunz is free and unlimited, it only contains user-reported stolen guns (roughly 32,000 entries) — a fraction of the 7+ million records in FBI NCIC alone. Local police can check NCIC but require an in-person visit and days of waiting. SafeOrStolen combines all sources instantly. <Link to="/compare" className="text-primary hover:underline">See full comparison →</Link>
            </p>
          </div>
        </section>

        {/* What To Do If Gun Is Stolen */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What to Do if a Gun is Reported Stolen</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-destructive/30">
                <h3 className="text-xl font-bold mb-4 text-destructive">If You Own a Stolen Gun</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>1.</strong> Report to local police immediately — file a stolen property report</li>
                  <li><strong>2.</strong> Provide serial number, make, model, and caliber</li>
                  <li><strong>3.</strong> Keep a copy of the police report for insurance and legal records</li>
                  <li><strong>4.</strong> Report to ATF Bureau of Alcohol, Tobacco, Firearms at 1-800-283-4867</li>
                  <li><strong>5.</strong> Contact your homeowner's or renter's insurance company</li>
                  <li><strong>6.</strong> Register on SafeOrStolen to receive alerts if someone checks the serial number</li>
                  <li><strong>7.</strong> Monitor pawn shops and online marketplaces for your firearm</li>
                </ol>
              </div>

              <div className="bg-card p-6 rounded-lg border border-primary/30">
                <h3 className="text-xl font-bold mb-4 text-primary">If You're Buying and Check Shows Stolen</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>1.</strong> DO NOT purchase or handle the firearm</li>
                  <li><strong>2.</strong> Do NOT confront the seller — leave calmly</li>
                  <li><strong>3.</strong> Contact local police with the listing details and seller description</li>
                  <li><strong>4.</strong> Report to ATF tip line: 1-800-ATF-GUNS (1-800-283-4867)</li>
                  <li><strong>5.</strong> Take screenshots of online listings as evidence before they're removed</li>
                  <li><strong>6.</strong> Flag the listing on the marketplace platform</li>
                  <li><strong>7.</strong> You may help recover stolen property and prevent others from being victimized</li>
                </ol>
              </div>
            </div>

            <div className="mt-8 p-6 bg-destructive/5 rounded-lg border border-destructive/20">
              <h3 className="text-lg font-bold mb-3">Legal Consequences of Buying a Stolen Gun</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Federal felony charges — up to 10 years imprisonment</li>
                  <li>• Fines up to $250,000</li>
                  <li>• Firearm confiscated permanently (no refund from seller)</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Loss of gun ownership rights permanently</li>
                  <li>• Potential state charges on top of federal charges</li>
                  <li>• Criminal record affecting employment, housing, and travel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Scams */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Common Gun Serial Number Scams to Watch For</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Criminals use several tactics to sell stolen firearms. Knowing these scams protects you from legal and financial disaster:
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Serial Number Alteration</h3>
                <p className="text-muted-foreground mb-3">Criminals file, grind, or chemically etch serial numbers to make them unreadable. This is a separate federal crime under 18 U.S.C. § 922(k).</p>
                <p className="text-sm text-muted-foreground"><strong>How to spot:</strong> Look for scratches over the serial area, uneven surfaces, characters with different depths or fonts, or signs of grinding/polishing. A legitimate serial number has consistent depth and clean edges.</p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Fake Bills of Sale</h3>
                <p className="text-muted-foreground mb-3">Sellers create fraudulent purchase documents, use stolen identities, forge signatures, or backdate transactions to create a false paper trail.</p>
                <p className="text-sm text-muted-foreground"><strong>How to protect yourself:</strong> Verify the seller's government-issued photo ID. Meet at a police station parking lot. Check references if buying from a private individual online. A bill of sale does not protect you if the gun is stolen.</p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">"No Serial Number" Scam</h3>
                <p className="text-muted-foreground mb-3">Seller claims "old gun, no serial number required." While firearms manufactured before 1968 may legitimately lack serial numbers, this claim is often used to hide a defaced serial.</p>
                <p className="text-sm text-muted-foreground"><strong>The truth:</strong> All firearms manufactured after 1968 MUST have serial numbers per the Gun Control Act. If a post-1968 firearm has no visible serial, it has been illegally removed. Walk away and report to ATF.</p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">"Ghost Gun" Sales</h3>
                <p className="text-muted-foreground mb-3">Unserialized homemade firearms (ghost guns) are legal to build for personal use in some states, but their sale without serialization is increasingly restricted. As of 2024, ATF requires serial numbers on all commercially sold firearms including previously unserialized builds.</p>
                <p className="text-sm text-muted-foreground"><strong>How to protect yourself:</strong> Be extremely cautious with any unserialized firearm. Verify legality in your state. Ghost guns cannot be verified against stolen databases — which means zero protection for the buyer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gun Buying Safety Checklist */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Gun Buying Safety Checklist</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Before buying any used firearm from a private seller, gun show, online listing, or pawn shop, complete every item on this checklist:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Check serial number on SafeOrStolen (free, instant)",
                "Verify seller's government-issued photo ID",
                "Ask for the original purchase receipt or documentation",
                "Inspect the firearm for serial number tampering or alteration",
                "Confirm serial number is legible and not filed off",
                "Get a written bill of sale with seller's full name, address, and signature",
                "Meet at a police station parking lot for the transaction",
                "Run a background check if required in your state",
                "Verify the firearm type is legal to own in your state",
                "Check if the seller has a valid FFL if they're a dealer"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gun Types to Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Gun Types You Can Verify on SafeOrStolen</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Pistol Serial Number Lookup</h3>
                <p className="text-muted-foreground mb-3">Handguns are the most commonly stolen firearms in the United States. Always verify before purchasing:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Glock (most frequently stolen brand)</li>
                  <li>• Smith & Wesson</li>
                  <li>• Sig Sauer</li>
                  <li>• Ruger</li>
                  <li>• Beretta</li>
                  <li>• Springfield Armory</li>
                  <li>• Taurus</li>
                  <li>• CZ, Walther, Kimber, HK</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Rifle Serial Number Check</h3>
                <p className="text-muted-foreground mb-3">Rifles including hunting, sporting, and tactical platforms:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• AR-15 platforms (most stolen rifle type)</li>
                  <li>• Remington</li>
                  <li>• Winchester</li>
                  <li>• Savage Arms</li>
                  <li>• Marlin</li>
                  <li>• Browning</li>
                  <li>• Ruger (Mini-14, 10/22, Precision)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Shotgun Serial Number Verification</h3>
                <p className="text-muted-foreground mb-3">All shotgun types including pump, semi-auto, and over/under:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Mossberg (500, 590, Maverick 88)</li>
                  <li>• Remington 870</li>
                  <li>• Benelli</li>
                  <li>• Browning</li>
                  <li>• Winchester</li>
                  <li>• Beretta</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Collectible and Antique Firearms</h3>
                <p className="text-muted-foreground mb-3">Even antique and collectible firearms can be stolen. Always verify:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Colt revolvers and historic pistols</li>
                  <li>• WWI and WWII military firearms</li>
                  <li>• Pre-1898 antique firearms</li>
                  <li>• Limited edition collector pieces</li>
                  <li>• Curio & Relic (C&R) classified firearms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gun Shows & Private Sales */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Gun Shows, Private Sales, and Online Purchases</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Buying at Gun Shows</h3>
                <p className="text-muted-foreground mb-4">
                  An estimated 60% of gun show transactions are private sales that may not require a background check (depending on state law). This makes gun shows one of the highest-risk venues for encountering stolen firearms. Always:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Check the serial number on SafeOrStolen's mobile app BEFORE purchasing</li>
                  <li>• Ask to see the seller's ID and record their contact information</li>
                  <li>• Walk away if the seller refuses to let you verify the serial number</li>
                  <li>• Be wary of sellers with multiple identical firearms (possible stolen inventory)</li>
                  <li>• Get a bill of sale with the seller's name, address, and driver's license number</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Facebook Marketplace, Armslist, and Online Sales</h3>
                <p className="text-muted-foreground mb-4">
                  Online firearms sales through private platforms carry significant risk. Note that Facebook prohibits gun sales, but they still occur through coded language and private messages. On platforms like Armslist:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Never wire money or pay before inspecting the firearm in person</li>
                  <li>• Meet at a police station parking lot for the transaction</li>
                  <li>• Verify the seller's photo ID matches the name on the listing</li>
                  <li>• Check the serial number using SafeOrStolen in front of the seller</li>
                  <li>• Get a signed bill of sale with full contact information</li>
                  <li>• <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace safety tips →</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Pawn Shops</h3>
                <p className="text-muted-foreground mb-4">
                  Most states legally require pawn shops to check stolen property databases before accepting items. However, some pawn shops use outdated databases or only check state-level records. SafeOrStolen searches MORE sources than most pawn shop databases, giving you additional protection.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Verify the serial number yourself, even at reputable pawn shops</li>
                  <li>• Ask what databases the pawn shop checked — compare to SafeOrStolen's coverage</li>
                  <li>• Get a receipt with the serial number clearly listed</li>
                  <li>• <Link to="/for-pawn-shops" className="text-primary hover:underline">SafeOrStolen for pawn shops →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Gun Dealers & FFLs */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">For Gun Dealers and Federal Firearms Licensees (FFLs)</h2>
            <p className="text-lg text-muted-foreground mb-6">
              SafeOrStolen offers business-grade verification tools designed for licensed firearms dealers, pawn shops, and shooting ranges that handle high volumes of firearm transactions:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Bulk serial number verification via CSV upload",
                "API integration for POS and inventory systems",
                "Compliance reporting for ATF requirements",
                "Multi-user business accounts with audit trails",
                "State-specific compliance tools and alerts",
                "Priority support for FFL compliance questions"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-3 bg-background rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/for-pawn-shops">
                <Button size="lg" variant="outline" className="gap-2">
                  Learn About Business Plans <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DataPartnerBadges variant="compact" />

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Gun Serial Number Lookup</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card px-6 rounded-lg border border-border">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <AuthoritySignals variant="banner" className="mb-0" />

        {/* Internal Links */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Verification Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { title: "IMEI Checker", href: "/imei-checker" },
                { title: "VIN Checker", href: "/vin-checker" },
                { title: "Serial Number Checker", href: "/serial-number-checker" },
                { title: "Stolen Gun Database", href: "/stolen-gun-database" },
                { title: "Gun Serial Lookup", href: "/gun-serial-number-lookup" },
                { title: "Check Phone Stolen", href: "/check-phone" },
                { title: "Facebook Marketplace", href: "/facebook-marketplace-stolen-check" },
                { title: "For Pawn Shops", href: "/for-pawn-shops" },
                { title: "Firearm Blog Guide", href: "/blog/firearm-serial-number-verification" },
                { title: "HotGunz Alternative", href: "/hotgunz-alternative" },
                { title: "How It Works", href: "/how-it-works" },
                { title: "Download App", href: "/app" },
              ].map((link, i) => (
                <Link key={i} to={link.href} className="p-3 bg-card rounded-lg border border-border text-sm font-medium hover:bg-primary/5 hover:border-primary/30 transition-colors text-center">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Yourself — Verify Before Buying Any Firearm</h2>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              A free serial number check takes 3 seconds and could save you from federal criminal charges, up to 10 years in prison, and thousands of dollars in legal fees. Do not risk your freedom.
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
              SafeOrStolen checks FBI NCIC, ATF, all 50 state databases, HotGunz, and insurance records. 2 free searches. Instant results. No credit card required.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Check Gun Serial Number Now — Free <Search className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-muted/20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>DISCLAIMER:</strong> SafeOrStolen is a verification tool designed to help buyers conduct due diligence before purchasing used firearms. This service does not constitute legal advice. Always comply with federal, state, and local firearms laws. Consult a licensed attorney for legal questions regarding firearms purchases and ownership. SafeOrStolen is not affiliated with, endorsed by, or connected to the ATF, FBI, NCIC, or any law enforcement agency. Database information is provided as-is and a clean result does not guarantee a firearm was never stolen — it may not yet be reported. Always exercise caution and follow the gun buying safety checklist above. Last updated: February 6, 2026.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FirearmsCheckPage;
