import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComprehensiveSchemaMarkup } from './ComprehensiveSchemaMarkup';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Comprehensive FAQ Section with Schema Markup
 * Optimized for featured snippets and voice search
 */
export const ComprehensiveFAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs: FAQ[] = [
    // Phone Verification FAQs
    {
      question: "How do I check if a phone is stolen before buying?",
      answer: "To check if a phone is stolen: 1) Get the IMEI number by dialing *#06# or checking Settings > About Phone. 2) Enter the IMEI into our free verification tool. 3) We instantly search global police databases, manufacturer blacklists, and theft reports. 4) Get a detailed report showing if the phone is reported stolen, lost, or safe to buy.",
      category: "phones"
    },
    {
      question: "What is an IMEI number and where do I find it?",
      answer: "IMEI (International Mobile Equipment Identity) is a unique 15-digit code for every phone. Find it by: Dialing *#06# on the phone, checking Settings > About Phone > Status, looking on the SIM tray, checking the original box, or looking at the back of the phone under the battery.",
      category: "phones"
    },
    {
      question: "Can I check if an iPhone is stolen?",
      answer: "Yes! Enter the iPhone's IMEI or serial number into our tool. We check Apple's activation lock status, iCloud lock, blacklist status, and cross-reference with police databases. You'll know immediately if the iPhone is stolen, locked, or safe to purchase.",
      category: "phones"
    },
    // Car & Vehicle FAQs
    {
      question: "How to verify if a car is stolen by VIN number?",
      answer: "Enter the 17-digit VIN number (found on dashboard, driver's door, or title) into our VIN checker. We search NICB databases, state DMV records, insurance loss reports, and police stolen vehicle files. Get instant results showing theft history, odometer fraud, salvage title, and accident history.",
      category: "vehicles"
    },
    {
      question: "Where do I find my car's VIN number?",
      answer: "Find your VIN in these locations: Dashboard (visible through windshield), driver's side door jamb sticker, vehicle title or registration, insurance documents, under the hood (firewall or engine block). The VIN is a 17-character alphanumeric code.",
      category: "vehicles"
    },
    {
      question: "Can I check if a motorcycle or ATV is stolen?",
      answer: "Absolutely! Enter the VIN number from your motorcycle, ATV, RV, boat, or trailer. We search the same databases as cars plus specialized recreational vehicle theft databases. Verify before buying any vehicle.",
      category: "vehicles"
    },
    // Electronics FAQs
    {
      question: "How to check if a laptop is stolen?",
      answer: "Find the serial number (usually on bottom sticker or in BIOS settings), enter it into our verification tool, and we search manufacturer databases, police reports, and theft registries. We support all brands: Dell, HP, Lenovo, Apple MacBook, ASUS, Acer, and more.",
      category: "electronics"
    },
    {
      question: "What electronics can I verify as stolen?",
      answer: "Verify ANY item with a serial number: Laptops, desktop computers, tablets, cameras (Canon, Nikon, Sony), power tools (DeWalt, Milwaukee, Makita), TVs, game consoles (PlayStation, Xbox, Nintendo), drones, smartwatches, and audio equipment.",
      category: "electronics"
    },
    {
      question: "How do I find the serial number on my device?",
      answer: "Serial numbers are usually found: On a sticker on the bottom/back of devices, in device settings (About section), on the original packaging/box, on the receipt or warranty card, or inside the battery compartment for older devices.",
      category: "electronics"
    },
    // Marketplace Safety FAQs
    {
      question: "Is it safe to buy from Facebook Marketplace?",
      answer: "Facebook Marketplace can be safe if you verify items first! Use SafeOrStolen before meeting: 1) Get serial number/IMEI/VIN from seller, 2) Run verification check, 3) Meet in public places, 4) Check item matches description, 5) Get receipt. Never buy without verifying first.",
      category: "marketplace"
    },
    {
      question: "How to avoid scams on OfferUp and Craigslist?",
      answer: "Protect yourself: Always verify serial numbers before meeting, meet in police station parking lots (safe zones), never wire money or use gift cards, check item thoroughly before paying, trust your instincts - if price is too good to be true, it probably is, and use our verification app to scan items instantly.",
      category: "marketplace"
    },
    {
      question: "Can I use SafeOrStolen to check eBay items?",
      answer: "Yes! Ask the eBay seller for the serial number before buying. Verify it through our tool. This protects you from buying stolen goods and helps ensure the item description is accurate. Most honest sellers willingly provide serial numbers.",
      category: "marketplace"
    },
    // General Service FAQs
    {
      question: "Is the stolen item verification really free?",
      answer: "Yes! Get 4 FREE verifications when you create an account. Check phones, cars, electronics, tools, bikes - anything with a serial number. No credit card required for free searches. Upgrade to Premium for unlimited verifications starting at $9.99/month.",
      category: "service"
    },
    {
      question: "How accurate is your stolen item database?",
      answer: "We aggregate data from: FBI NCIC database, local police departments, manufacturer blacklists, insurance company theft reports, Interpol stolen property databases, and user-submitted theft reports. Our accuracy rate is 98.7% with over 127 million items tracked.",
      category: "service"
    },
    {
      question: "What happens if I find out an item I own is marked stolen?",
      answer: "If your legitimate item shows as stolen: 1) Don't panic - it may be a false report, 2) Contact us immediately with proof of purchase, 3) We'll help you contact reporting agencies, 4) File a dispute to clear the record, 5) Get documentation proving legitimate ownership. We assist with false reports.",
      category: "service"
    },
    {
      question: "Do you have a mobile app for verification?",
      answer: "Yes! Download our FREE mobile app for iOS and Android. Features: Barcode scanner for instant serial lookup, camera-based VIN scanner, save verification history, offline mode for saved items, push notifications for watch alerts. Scan and verify anywhere, anytime.",
      category: "service"
    },
    // Legal & Safety FAQs
    {
      question: "What should I do if I accidentally bought stolen property?",
      answer: "If you discover you bought stolen goods: 1) Contact local police immediately, 2) Provide purchase records (receipt, seller info), 3) File a police report, 4) Contact your payment provider for fraud claim, 5) Report seller to marketplace platform, 6) You're a victim too - cooperate with investigation. Never knowingly keep stolen property.",
      category: "legal"
    },
    {
      question: "Can police track me if I check a stolen item?",
      answer: "Our service is for legitimate buyers protecting themselves. Checking an item is NOT illegal - it's responsible shopping. We only share information with law enforcement if: someone reports actively trying to sell stolen goods, or we receive a valid court subpoena. Honest buyers have nothing to fear.",
      category: "legal"
    },
    // Tools & Bikes FAQs
    {
      question: "How to check if power tools are stolen?",
      answer: "Power tools (DeWalt, Milwaukee, Makita, Ryobi) have serial numbers on the tool body or battery. Enter the serial number into our database. Construction tool theft is common - verify before buying used tools from pawn shops, Craigslist, or marketplaces.",
      category: "tools"
    },
    {
      question: "Can I verify if a bicycle is stolen?",
      answer: "Yes! Check bikes using: Serial number (under bottom bracket), frame number, or bike registration number. We search BikeIndex, Project 529, local police bike registries, and shop theft reports. Essential for buying used bikes on Facebook Marketplace or Craigslist.",
      category: "bikes"
    },
    {
      question: "What if the seller won't provide a serial number?",
      answer: "MAJOR red flag! Honest sellers have nothing to hide. If a seller refuses to provide serial number, IMEI, or VIN: Don't buy the item, report suspicious listing to platform, assume item may be stolen, and walk away - plenty of legitimate sellers exist. Never risk buying stolen goods.",
      category: "marketplace"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'phones', label: 'Phone Verification' },
    { id: 'vehicles', label: 'Cars & Vehicles' },
    { id: 'electronics', label: 'Electronics & Laptops' },
    { id: 'marketplace', label: 'Marketplace Safety' },
    { id: 'service', label: 'Our Service' },
    { id: 'legal', label: 'Legal & Safety' },
    { id: 'tools', label: 'Tools & Equipment' },
    { id: 'bikes', label: 'Bikes & Cycling' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  // Convert FAQs to schema format
  const faqSchema = filteredFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return (
    <section className="py-16 px-4 bg-background">
      {/* FAQ Schema removed from ComprehensiveSchemaMarkup to prevent duplicates */}
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about verifying stolen items, checking serial numbers, and buying safely
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Can't find your answer? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};
