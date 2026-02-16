import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, ArrowRight, AlertTriangle, Gamepad2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';

const XboxStolenCheck = () => {
  const faqs = [
    {
      question: "Can a stolen Xbox be traced?",
      answer: "Yes. Microsoft tracks Xbox console serial numbers and can ban stolen consoles remotely from Xbox Live and all online services. When a stolen Xbox is reported to police and Microsoft, the serial number is flagged. If anyone connects that console to the internet, Microsoft can identify it and lock it from online functionality. Law enforcement also tracks console serial numbers through stolen property databases including NCIC."
    },
    {
      question: "What if I already bought a stolen Xbox?",
      answer: "Contact local police immediately and file a report — you are a victim of fraud, not a criminal if you purchased in good faith. Provide the serial number, seller information, and any transaction records. You will likely lose the console (police will confiscate it as evidence/stolen property), but voluntary disclosure demonstrates good faith and helps avoid any legal complications. Keep all screenshots of the listing and communication with the seller."
    },
    {
      question: "Will SafeOrStolen tell me who the real owner is?",
      answer: "For privacy reasons, SafeOrStolen only shows 'SAFE' or 'STOLEN/FLAGGED' status. We do not disclose the identity of the original owner. If you need owner information for a stolen item, contact local police with the serial number — they can access NCIC records and coordinate with the reporting jurisdiction."
    },
    {
      question: "How long does an Xbox serial number check take?",
      answer: "Instant — under 3 seconds. We search police stolen property databases, insurance theft claims, pawn shop records, and community-reported stolen consoles simultaneously. You receive a clear result immediately."
    },
    {
      question: "Is it illegal to buy a stolen Xbox?",
      answer: "Possessing stolen property is a crime in all 50 states. If you knew or should have known the Xbox was stolen (suspiciously low price, no box, seller behavior), you could face criminal charges. Checking the serial number before purchase demonstrates due diligence and provides legal protection — it shows you took reasonable steps to verify the item wasn't stolen."
    },
    {
      question: "Where is the serial number on Xbox Series X?",
      answer: "Xbox Series X: On the back of the console on a white sticker near the bottom. It's a 12-digit number. You can also find it digitally in Settings → System → Console Info → Serial Number. Xbox Series S: On the bottom of the console on a white sticker. The serial number is also available in the same settings menu."
    },
    {
      question: "Can a banned Xbox be unbanned?",
      answer: "Console bans issued by Microsoft for stolen property are permanent and cannot be appealed. If an Xbox is banned because it was reported stolen, it will never regain access to Xbox Live, Game Pass, the Microsoft Store, or any online functionality. The console can still play physical disc games offline, but this severely limits its value and functionality."
    },
    {
      question: "Do stolen Xbox consoles work with Game Pass?",
      answer: "No. If a stolen Xbox is banned from Xbox Live (which Microsoft does for reported stolen consoles), Game Pass will not function. Game Pass requires an active Xbox Live connection. Cloud gaming, game downloads, multiplayer, and all subscription features are disabled on banned consoles."
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Xbox Stolen Check - Serial Number Verification",
      "url": "https://safeorstolen.com/check-xbox",
      "provider": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
      "serviceType": "Gaming Console Theft Verification",
      "areaServed": { "@type": "Country", "name": "United States" },
      "description": "Verify Xbox Series X, Series S, and Xbox One serial numbers against stolen property databases. Free instant check before buying used gaming consoles.",
      "dateModified": "2026-02-06"
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if an Xbox is Stolen",
      "dateModified": "2026-02-06",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Find the Xbox serial number", "text": "Find the Xbox serial number on the back or bottom of the console, or in Settings → System → Console Info" },
        { "@type": "HowToStep", "position": 2, "name": "Enter the serial number", "text": "Enter the 12-digit serial number into SafeOrStolen's free verification tool" },
        { "@type": "HowToStep", "position": 3, "name": "We search databases", "text": "We search police databases, insurance claims, pawn shop records, and Microsoft ban lists" },
        { "@type": "HowToStep", "position": 4, "name": "Get instant results", "text": "Get instant results in 3 seconds showing if the Xbox is safe or reported stolen" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "Check Xbox Stolen", "item": "https://safeorstolen.com/check-xbox" }
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
        title="Check if Xbox is Stolen - Free Serial Number Verification | SafeOrStolen"
        description="Verify Xbox Series X, Series S, Xbox One isn't stolen before buying. Check serial numbers against police databases. 2 free checks. Avoid Xbox Live bans. Instant results."
        keywords="check if xbox is stolen, xbox serial number check, xbox stolen check, stolen xbox database, xbox series x stolen, verify xbox not stolen, used xbox verification, xbox live ban check"
        canonical="/check-xbox"
        structuredData={structuredData}
      />

      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Check if Xbox is Stolen - Free Serial Number Verification</h1>
          <p>Verify Xbox Series X, Series S, and Xbox One consoles are not stolen before buying used. Check serial numbers against police databases. 2 free checks with instant results.</p>
          <p>Visit safeorstolen.com/verify to check any Xbox serial number.</p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gamepad2 className="w-4 h-4" />
              Xbox Console Verification
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Check if Xbox is Stolen — Free Serial Number Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Buying a used Xbox? <strong>Verify it's not stolen before you buy.</strong> Check Xbox One, Xbox Series X, and Xbox Series S serial numbers against stolen property databases. 2 free checks, instant results in 3 seconds.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stolen Xbox consoles can be permanently banned from Xbox Live by Microsoft — meaning no online gaming, no Game Pass, no digital purchases, and no multiplayer. A $500 console becomes a paperweight. Don't risk it.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Check Xbox Serial Number — Free <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {[
                { value: "500K+", label: "Consoles Stolen Yearly" },
                { value: "3 sec", label: "Verification Time" },
                { value: "100+", label: "Databases Searched" },
                { value: "Free", label: "First 2 Checks" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SitewideCredibilityBar />

        {/* How to Find Xbox Serial Number */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Find Your Xbox Serial Number</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every Xbox console has a unique 12-digit serial number that identifies it. Here's exactly where to find it on each Xbox model:
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Xbox Series X</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Physical location:</strong> White sticker on the back of the console, near the bottom</li>
                  <li>• <strong>Digital location:</strong> Settings → System → Console Info → Serial Number</li>
                  <li>• <strong>Original box:</strong> Printed on the barcode label</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Xbox Series S</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Physical location:</strong> White sticker on the bottom of the console</li>
                  <li>• <strong>Digital location:</strong> Settings → System → Console Info → Serial Number</li>
                  <li>• <strong>Original box:</strong> Printed on the barcode label</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Xbox One / Xbox One S / Xbox One X</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Physical location:</strong> Back of console near the power port on a white sticker</li>
                  <li>• <strong>Digital location:</strong> Settings → System → Console Info</li>
                  <li>• <strong>Original box:</strong> On the barcode label</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-muted-foreground">
              <strong>Serial number format:</strong> Xbox serial numbers are 12 digits (numbers only). If the sticker is missing, damaged, or appears tampered with, this is a red flag — the seller may be hiding the console's identity.
            </p>

            <div className="mt-8 text-center">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  Enter Xbox Serial Number <Search className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What SafeOrStolen Checks for Xbox Consoles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Police stolen property databases (all 50 states)",
                "Insurance theft claims and reports",
                "Pawn shop stolen property records",
                "Community-reported stolen consoles",
                "GameStop trade-in fraud databases",
                "Microsoft Xbox Live console ban lists"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check Before Buying a Used Xbox?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Financial Risk</h3>
                <p className="text-muted-foreground mb-3">Used Xbox pricing makes this a significant financial risk:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Xbox Series X: <strong>$400-500</strong> used</li>
                  <li>• Xbox Series S: <strong>$200-300</strong> used</li>
                  <li>• Xbox One X: <strong>$150-250</strong> used</li>
                  <li>• Xbox One S: <strong>$100-200</strong> used</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  If the console is stolen and Microsoft bans it, you lose your entire investment with zero recourse. The seller keeps your money, and police confiscate the console.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">What Happens to Stolen Xbox Consoles</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Microsoft account ban:</strong> Console is permanently banned from Xbox Live</li>
                  <li>• <strong>No online gaming:</strong> Cannot play any multiplayer games</li>
                  <li>• <strong>No Game Pass:</strong> Subscription features completely disabled</li>
                  <li>• <strong>No digital purchases:</strong> Cannot buy or download games from the store</li>
                  <li>• <strong>No cloud saves:</strong> Game progress not backed up</li>
                  <li>• <strong>No updates:</strong> System and game updates blocked</li>
                  <li>• <strong>Confiscation:</strong> Police will seize the console if identified</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Where Stolen Xboxes Come From</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { source: "Home burglaries", pct: "60%" },
                    { source: "Porch pirate package theft", pct: "25%" },
                    { source: "Retail theft / organized crime", pct: "10%" },
                    { source: "Trade-in fraud", pct: "5%" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-background rounded-lg border border-border text-center">
                      <span className="text-2xl font-bold text-primary">{item.pct}</span>
                      <p className="text-sm text-muted-foreground mt-1">{item.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facebook Marketplace Scams */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <ShoppingCart className="w-7 h-7 text-primary" />
              Facebook Marketplace and OfferUp Xbox Scams
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-destructive">Common Red Flags</h3>
              <div className="space-y-3">
                {[
                  { flag: '"Console banned, selling cheap"', meaning: "This almost certainly means the console is stolen and has been banned by Microsoft." },
                  { flag: "No original box or accessories", meaning: "Stolen consoles rarely come with original packaging. Missing controller, cables, or box is suspicious." },
                  { flag: "Seller has multiple consoles for sale", meaning: "Legitimate sellers rarely have multiple identical consoles. This suggests stolen or fraudulent inventory." },
                  { flag: "Won't let you test before buying", meaning: "A legitimate seller has nothing to hide. Refusal to demonstrate the console working is a major red flag." },
                  { flag: "Price significantly below market value", meaning: "If the price seems too good to be true, it probably is. Stolen goods are typically priced 30-50% below market to move quickly." }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                    <p className="font-bold text-destructive">{item.flag}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">How to Protect Yourself</h3>
              <ol className="space-y-3">
                {[
                  "Check the serial number on SafeOrStolen before meeting the seller",
                  "Ask the seller to sign into their Xbox/Microsoft account to verify it's theirs",
                  "Verify the console connects to Xbox Live and isn't banned",
                  "Meet at a police station parking lot — never at the seller's home",
                  "Get the seller's photo ID and create a written bill of sale",
                  "Test all ports, controllers, and disc drive before paying",
                  "Use the SafeOrStolen mobile app for on-the-spot verification"
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 p-3 bg-card rounded-lg border border-border">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* OfferUp/Craigslist Safety */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">OfferUp, Craigslist, and Local Xbox Sales Safety</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Safe Transaction Steps</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li><strong>1.</strong> Meet in a public place (police station parking lot is safest)</li>
                  <li><strong>2.</strong> Bring a friend or family member</li>
                  <li><strong>3.</strong> Test the console before payment — connect to WiFi and verify Xbox Live works</li>
                  <li><strong>4.</strong> Check the serial number with SafeOrStolen (2 free checks)</li>
                  <li><strong>5.</strong> Cash only — no wire transfers, CashApp, or Venmo before delivery</li>
                  <li><strong>6.</strong> Get a written bill of sale with the seller's name and contact info</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-destructive">Never Do This</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Never</strong> meet at the seller's home alone</li>
                  <li>• <strong>Never</strong> pay before seeing and testing the console</li>
                  <li>• <strong>Never</strong> wire money or use CashApp/Venmo before delivery</li>
                  <li>• <strong>Never</strong> buy "sealed" consoles from non-retailers (often resealed stolen units)</li>
                  <li>• <strong>Never</strong> buy if the seller refuses to show the serial number</li>
                  <li>• <strong>Never</strong> skip the serial number check — it's free and takes 3 seconds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GameStop Trade-In */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">GameStop Trade-In and Retail Verification</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Even GameStop, Best Buy, and other retailers can accidentally accept stolen consoles as trade-ins. If you're buying a refurbished or pre-owned Xbox from a retailer:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Ask for the serial number before purchasing and verify on SafeOrStolen</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Get a receipt that includes the serial number for your records</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>GameStop offers a 30-day warranty — but it does NOT cover stolen items</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>Test Xbox Live connectivity immediately after purchase</span></li>
            </ul>
          </div>
        </section>

        {/* Also Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Also Check Other Gaming Consoles</h2>
            <p className="text-lg text-muted-foreground mb-6">
              SafeOrStolen verifies all major gaming consoles, not just Xbox. If you're buying any used gaming hardware, verify the serial number first:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-background rounded-lg border border-border text-center">
                <h3 className="font-bold mb-2">PlayStation 5 / PS4</h3>
                <p className="text-sm text-muted-foreground mb-3">Sony can ban stolen PS5 consoles from PlayStation Network. Check serial before buying.</p>
                <Link to="/check-gaming-console-stolen" className="text-primary text-sm hover:underline">Check PlayStation →</Link>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border text-center">
                <h3 className="font-bold mb-2">Nintendo Switch</h3>
                <p className="text-sm text-muted-foreground mb-3">Nintendo bans stolen Switch consoles from online services and eShop. Verify first.</p>
                <Link to="/check-gaming-console-stolen" className="text-primary text-sm hover:underline">Check Nintendo →</Link>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border text-center">
                <h3 className="font-bold mb-2">VR Headsets</h3>
                <p className="text-sm text-muted-foreground mb-3">Meta Quest, PSVR, and other VR headsets can be verified against stolen databases.</p>
                <Link to="/check-electronics" className="text-primary text-sm hover:underline">Check Electronics →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Xbox Stolen Checks</h2>
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
                { title: "Gaming Consoles", href: "/check-gaming-console-stolen" },
                { title: "Electronics Check", href: "/check-electronics" },
                { title: "Laptop Check", href: "/check-laptop" },
                { title: "Phone IMEI Check", href: "/check-phone" },
                { title: "Facebook Marketplace", href: "/facebook-marketplace-stolen-check" },
                { title: "eBay Stolen Check", href: "/ebay-stolen-item-check" },
                { title: "Serial Number Checker", href: "/serial-number-checker" },
                { title: "Download App", href: "/app" },
              ].map((link, i) => (
                <Link key={i} to={link.href} className="p-3 bg-card rounded-lg border border-border text-sm font-medium hover:bg-primary/5 hover:border-primary/30 transition-colors text-center">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Risk Buying a Stolen Xbox</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A free serial number check takes 3 seconds and protects your $300-$500 investment. Verify before you buy — avoid Xbox Live bans, police confiscation, and financial loss.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Check Xbox Serial Number — Free <Search className="w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              2 free checks · 100+ databases · Instant results · No credit card required
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default XboxStolenCheck;
