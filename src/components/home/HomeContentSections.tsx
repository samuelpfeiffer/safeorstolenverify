import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * HomeContentSections - Substantive SEO content for the homepage
 * Adds 2000+ words of unique, keyword-rich content that Google can index
 * Renders statically (not lazy loaded) for bot visibility
 */
export const HomeContentSections = () => {
  const faqs = [
    {
      question: "How do I check if a phone is stolen using IMEI?",
      answer: "Enter the phone's IMEI number into SafeOrStolen's free verification tool. To find your IMEI, dial *#06# on the phone or check Settings → About Phone. We search GSMA blacklist databases, carrier records (AT&T, Verizon, T-Mobile), insurance claims, and law enforcement stolen property records. Results appear in 3 seconds showing whether the device is clean, blacklisted, or reported stolen."
    },
    {
      question: "Is SafeOrStolen really free?",
      answer: "SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited. That's significantly less than competitors like Carfax ($44.99/report) or CheckMEND ($3.50/check). Verify as many items as you need — phones, cars, firearms, electronics, bikes, and more."
    },
    {
      question: "What databases does SafeOrStolen check?",
      answer: "We search over 100 databases simultaneously including: FBI NCIC (National Crime Information Center), NICB (National Insurance Crime Bureau) for vehicles, GSMA global blacklist for phones, ATF eTrace for firearms, all 50 state law enforcement databases, DMV records, insurance company theft claims, carrier blacklists (AT&T, Verizon, T-Mobile), community-reported stolen property databases, and pawn shop records. This comprehensive approach catches stolen items that single-database checks miss."
    },
    {
      question: "How do I check if a car is stolen using VIN?",
      answer: "Enter the vehicle's 17-character VIN (Vehicle Identification Number) into SafeOrStolen. Find the VIN on the driver's side dashboard (visible through windshield), driver's door jamb, vehicle registration, or insurance card. We check NICB theft records, DMV title records, insurance claims, salvage/junk databases, and law enforcement stolen vehicle reports across all 50 states. Results in 3 seconds."
    },
    {
      question: "Can I check items on Facebook Marketplace before buying?",
      answer: "Yes! SafeOrStolen is designed for marketplace buyers. You can paste a Facebook Marketplace, eBay, Craigslist, or OfferUp listing URL directly into our tool and we'll extract the item details for verification. You can also enter any IMEI, VIN, or serial number manually. Always verify before meeting the seller — it takes 3 seconds and could save you hundreds or thousands of dollars."
    },
    {
      question: "How do I check a gun serial number for free?",
      answer: "Enter the firearm's serial number into SafeOrStolen's verification tool. Serial numbers are typically on the frame (pistols), receiver (rifles), or barrel (shotguns). We search FBI NCIC, ATF eTrace, all 50 state law enforcement databases, HotGunz (32,000+ user-reported stolen guns), and insurance claims. Unlimited checks for $10/month. Possessing a stolen firearm is a federal crime with up to 10 years imprisonment — always verify before any private sale."
    },
    {
      question: "What items can SafeOrStolen verify?",
      answer: "SafeOrStolen verifies virtually any valuable item with an identifier: phones and tablets (IMEI), cars, trucks, and motorcycles (VIN), firearms (serial number), laptops and computers (serial number), gaming consoles like PS5, Xbox, Nintendo Switch (serial number), bicycles (serial number), cameras (serial number), power tools (serial number), watches and jewelry (serial/model number), boats and watercraft (HIN), and more."
    },
    {
      question: "How is SafeOrStolen different from Carfax?",
      answer: "Carfax only checks vehicles and costs $44.99 per report. SafeOrStolen checks ALL item types — phones, cars, firearms, electronics, bikes, and more — for just $0.99/check or $10/month unlimited. We also search more databases (100+ vs Carfax's vehicle-only sources), include a mobile app for on-the-spot verification, and provide results in 3 seconds instead of generating a lengthy PDF report."
    },
    {
      question: "Does SafeOrStolen have a mobile app?",
      answer: "Yes. SafeOrStolen is the only stolen item verification service with a dedicated mobile app. Available as a Progressive Web App (PWA), it works on iPhone, Android, and any mobile browser. Use it at gun shows, pawn shops, yard sales, and marketplace meetups to verify items on the spot before purchasing. Install it at safeorstolen.com/app."
    },
    {
      question: "What should I do if an item shows as stolen?",
      answer: "Do NOT purchase the item. Leave without confronting the seller. Report to local police with the listing details and seller information. For firearms, also report to ATF at 1-800-283-4867. For vehicles, report to NICB at 1-800-TEL-NICB. Take screenshots of the listing as evidence before it's removed. You may help recover stolen property and prevent others from being victimized."
    },
    {
      question: "Can pawn shops use SafeOrStolen?",
      answer: "Yes. SafeOrStolen offers business plans designed for pawn shops, dealers, and resellers. Features include bulk CSV upload for inventory verification, API integration for POS systems, compliance reporting, multi-user accounts with audit trails, and state-specific compliance tools. Most states legally require pawn shops to check stolen property databases — SafeOrStolen searches more sources than standard pawn shop databases."
    },
    {
      question: "How accurate is SafeOrStolen?",
      answer: "SafeOrStolen's accuracy depends on the databases we search — and we search more databases than any competitor (100+). If an item has been reported stolen to law enforcement, insurance, or community databases, we will find it. However, an item may be stolen but not yet reported, so a clean result means 'not found in databases' rather than a guarantee. Always combine our verification with common-sense safety practices like meeting at police stations and getting bills of sale."
    }
  ];

  return (
    <>
      {/* Detailed What We Check */}
      <section className="py-12 px-4 bg-card/50 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What SafeOrStolen Checks — Complete Verification Coverage</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            SafeOrStolen is the only verification platform that checks <strong>all item categories</strong> in one place. Whether you're buying a used phone on Facebook Marketplace, a car from Craigslist, a firearm at a gun show, or electronics from OfferUp — we verify it against law enforcement, insurance, and manufacturer databases in 3 seconds.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "📱 Phones & Tablets",
                items: "iPhone, Samsung Galaxy, Google Pixel, OnePlus, Motorola, iPad, Surface",
                identifier: "IMEI Number",
                link: "/check-phone",
                detail: "Check GSMA blacklist, carrier locks, insurance claims, stolen reports"
              },
              {
                title: "🚗 Vehicles",
                items: "Cars, trucks, SUVs, vans — all makes and models",
                identifier: "VIN Number",
                link: "/check-car",
                detail: "NICB theft records, DMV titles, salvage history, insurance claims"
              },
              {
                title: "🔫 Firearms",
                items: "Pistols, rifles, shotguns, AR-15s — all manufacturers",
                identifier: "Serial Number",
                link: "/firearms-check",
                detail: "FBI NCIC, ATF eTrace, 50 state databases, HotGunz"
              },
              {
                title: "🎮 Gaming Consoles",
                items: "PlayStation 5, Xbox Series X/S, Nintendo Switch, Quest VR",
                identifier: "Serial Number",
                link: "/check-xbox",
                detail: "Police databases, console bans, insurance claims, pawn records"
              },
              {
                title: "💻 Laptops & Electronics",
                items: "MacBook, Dell, HP, Lenovo, cameras, monitors, audio equipment",
                identifier: "Serial Number",
                link: "/check-laptop",
                detail: "Police reports, insurance claims, manufacturer databases"
              },
              {
                title: "🚲 Bikes & E-Bikes",
                items: "Road bikes, mountain bikes, e-bikes — all brands",
                identifier: "Serial Number",
                link: "/check-bike",
                detail: "BikeIndex, police registries, insurance, community reports"
              },
              {
                title: "🏍️ Motorcycles",
                items: "Harley-Davidson, Honda, Yamaha, Kawasaki, BMW, Ducati",
                identifier: "VIN Number",
                link: "/check-motorcycle-vin",
                detail: "NICB, DMV, insurance, law enforcement databases"
              },
              {
                title: "⌚ Watches & Jewelry",
                items: "Rolex, Omega, TAG Heuer, diamonds, gold jewelry",
                identifier: "Serial/Model Number",
                link: "/check-watch-stolen",
                detail: "Police databases, insurance claims, pawn records"
              },
              {
                title: "🔧 Power Tools",
                items: "DeWalt, Milwaukee, Makita, Bosch, Festool",
                identifier: "Serial Number",
                link: "/check-power-tools-stolen",
                detail: "Contractor theft databases, police reports, insurance"
              }
            ].map((category, i) => (
              <Link key={i} to={category.link} className="p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors group">
                <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{category.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{category.items}</p>
                <p className="text-xs text-primary font-medium mb-2">Identifier: {category.identifier}</p>
                <p className="text-xs text-muted-foreground">{category.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Detailed */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How SafeOrStolen Works — Step by Step</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            SafeOrStolen's verification process is simple, fast, and thorough. Here's exactly what happens when you check an item:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Enter the Identifier</h3>
              <p className="text-sm text-muted-foreground">
                Enter any IMEI number (phones), VIN number (vehicles), or serial number (electronics, firearms, bikes). You can also paste a Facebook Marketplace, eBay, or Craigslist listing URL and we'll extract the details automatically.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">We Search 100+ Databases</h3>
              <p className="text-sm text-muted-foreground">
                In parallel, we query FBI NCIC, NICB, GSMA, ATF, all 50 state databases, DMV records, carrier blacklists, insurance claims, pawn shop records, and community databases. More sources means higher accuracy.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Get Instant Results</h3>
              <p className="text-sm text-muted-foreground">
                Within 3 seconds, you receive a clear report: SAFE (not found in any stolen database) or FLAGGED (item appears in one or more databases). Includes details on which databases flagged the item and recommended next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses SafeOrStolen */}
      <section className="py-12 px-4 bg-card/50 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who Uses SafeOrStolen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-background rounded-lg border border-border">
              <h3 className="font-bold mb-2">Marketplace Buyers</h3>
              <p className="text-sm text-muted-foreground">
                Buyers on <Link to="/facebook-marketplace-stolen-check" className="text-primary hover:underline">Facebook Marketplace</Link>, OfferUp, Craigslist, and eBay use SafeOrStolen to verify items before paying. Protect yourself from buying stolen goods — if police seize stolen property, you lose your money with no recourse.
              </p>
            </div>
            <div className="p-5 bg-background rounded-lg border border-border">
              <h3 className="font-bold mb-2">Pawn Shops & Dealers</h3>
              <p className="text-sm text-muted-foreground">
                <Link to="/for-pawn-shops" className="text-primary hover:underline">Pawn shops</Link> use SafeOrStolen for legal compliance. Most states require pawn shops to check stolen property databases. Our business plans include bulk verification, API integration, and compliance reporting.
              </p>
            </div>
            <div className="p-5 bg-background rounded-lg border border-border">
              <h3 className="font-bold mb-2">Gun Dealers & Show Attendees</h3>
              <p className="text-sm text-muted-foreground">
                <Link to="/firearms-check" className="text-primary hover:underline">Gun dealers</Link> and buyers at gun shows verify serial numbers for ATF compliance and personal protection. Private sales at gun shows carry the highest risk of encountering stolen firearms.
              </p>
            </div>
            <div className="p-5 bg-background rounded-lg border border-border">
              <h3 className="font-bold mb-2">Used Car Buyers</h3>
              <p className="text-sm text-muted-foreground">
                <Link to="/check-car" className="text-primary hover:underline">Vehicle buyers</Link> check VINs before purchasing from private sellers, dealerships, or auctions. SafeOrStolen costs $0.99/check or $10/month unlimited vs Carfax at $44.99 per report — and checks more databases.
              </p>
            </div>
            <div className="p-5 bg-background rounded-lg border border-border">
              <h3 className="font-bold mb-2">Electronics Resellers</h3>
              <p className="text-sm text-muted-foreground">
                <Link to="/for-electronics-resellers" className="text-primary hover:underline">Resellers</Link> at thrift stores, auction houses, and online platforms verify inventory before purchase and resale. Protect your business from unknowingly trafficking stolen goods.
              </p>
            </div>
            <div className="p-5 bg-background rounded-lg border border-border">
              <h3 className="font-bold mb-2">Law Enforcement</h3>
              <p className="text-sm text-muted-foreground">
                <Link to="/for-law-enforcement" className="text-primary hover:underline">Police departments</Link> and investigators use SafeOrStolen for property recovery operations and stolen goods investigations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`home-faq-${index}`} className="bg-card px-6 rounded-lg border border-border">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom SEO Content */}
      <section className="py-12 px-4 bg-muted/20 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Stolen Item Verification — Protecting Buyers and Sellers</h2>
          <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Over $15 billion worth of property is stolen annually in the United States, and a significant portion of stolen goods ends up on secondhand marketplaces including Facebook Marketplace, Craigslist, OfferUp, eBay, and local pawn shops. For buyers, the risk is real: if you unknowingly purchase stolen property, law enforcement can seize it and you lose both the item and your money with no legal recourse. In some cases, buyers can face criminal charges for receiving stolen property, especially if the price was suspiciously low or the circumstances were questionable.
            </p>
            <p>
              SafeOrStolen exists to solve this problem. By aggregating over 100 law enforcement, insurance, manufacturer, and community databases into a single 3-second check, we give buyers the ability to verify any item before completing a purchase. Whether it's checking an <Link to="/imei-checker" className="text-primary hover:underline">IMEI number on a used iPhone</Link>, running a <Link to="/vin-checker" className="text-primary hover:underline">VIN check on a used car</Link>, or performing a <Link to="/firearms-check" className="text-primary hover:underline">gun serial number lookup</Link> at a gun show, SafeOrStolen provides comprehensive coverage that no single database can match.
            </p>
            <p>
              For sellers, SafeOrStolen adds trust and transparency to your listings. Share a verification certificate to prove your items are legitimate, increase buyer confidence, and command higher prices. For businesses like <Link to="/for-pawn-shops" className="text-primary hover:underline">pawn shops</Link>, dealers, and <Link to="/for-electronics-resellers" className="text-primary hover:underline">electronics resellers</Link>, our business plans include bulk verification, API integration, compliance reporting, and audit trails to meet state due diligence requirements.
            </p>
            <p>
              SafeOrStolen is recognized by <Link to="/news/onevalley-recognition" className="text-primary hover:underline">OneValley</Link> and the Entrepreneurship World Cup for innovative SaaS disruption. We are the only verification service with a <Link to="/app" className="text-primary hover:underline">dedicated mobile app</Link> for on-the-spot verification at gun shows, pawn shops, yard sales, and marketplace meetups. Unlimited verifications for just $10/month.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
