import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I check if something is stolen?",
    answer: "Enter the item's IMEI number (for phones), VIN (for vehicles), or serial number into our free verification tool. We'll instantly search national stolen goods databases, police reports, and carrier blacklists to determine if the item has been reported stolen."
  },
  {
    question: "Is the IMEI and serial number check really free?",
    answer: "Yes! We offer 4 free verifications with no credit card required. This includes IMEI checks for phones, VIN verification for vehicles, and serial number lookups for electronics. Additional searches are available with our affordable subscription plans."
  },
  {
    question: "What databases do you check for stolen items?",
    answer: "We search NCIC (National Crime Information Center), local police reports, carrier blacklists (AT&T, Verizon, T-Mobile, Sprint), manufacturer databases, NICB for vehicles, and international stolen goods registries. Our database is updated daily with new theft reports."
  },
  {
    question: "Can I verify items before buying on Facebook Marketplace or Craigslist?",
    answer: "Absolutely! Before purchasing any used phone, laptop, vehicle, or electronics from Facebook Marketplace, Craigslist, eBay, or other platforms, always verify the IMEI, VIN, or serial number. This protects you from unknowingly buying stolen goods and potential legal issues."
  },
  {
    question: "What should I do if an item shows as stolen?",
    answer: "Do not purchase or accept the item. If you already possess it, contact your local law enforcement non-emergency line immediately. Save all communications with the seller as evidence. Report the seller to the marketplace platform (Facebook, eBay, Craigslist) to prevent them from scamming others."
  },
  {
    question: "How accurate is your stolen item verification?",
    answer: "Our system has a 98.7% accuracy rate by cross-referencing multiple authoritative databases. However, results depend on whether the theft was reported and entered into accessible databases. A 'clean' result means no theft reports were found, but doesn't guarantee the item wasn't stolen."
  },
  {
    question: "Can police confiscate my purchased item if it's stolen?",
    answer: "Yes. Law enforcement can seize stolen property without compensating you, even if you purchased it unknowingly. This is why verification before purchase is critical - it protects you from financial loss and potential legal complications."
  },
  {
    question: "Do you check international stolen item databases?",
    answer: "Yes! We search international databases including Interpol's stolen property database, UK's Immobilise, Australia's equipsme, and databases from Canada, EU countries, and major international carriers for global coverage."
  },
  {
    question: "How long does verification take?",
    answer: "Verification results are instant - typically under 3 seconds. Our system performs real-time searches across all connected databases and returns comprehensive results immediately, so you can make quick, informed buying decisions."
  },
  {
    question: "Can I use this to prove my item isn't stolen when selling?",
    answer: "Yes! Sellers can verify their items and share the clean verification report with potential buyers. This builds trust, speeds up sales, and protects both parties. Many sellers include verification screenshots in their listings."
  }
];

export const EnhancedFAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Everything you need to know about verifying stolen items
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};