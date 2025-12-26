import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

const pricingFAQs: FAQ[] = [
  {
    question: "How many free verifications do I get?",
    answer: "Every new user gets 2 completely free verifications with no credit card required. This lets you try SafeOrStolen before committing to a paid plan. After your free checks, you can purchase individual verifications for $2.99 each or subscribe to an unlimited plan starting at $4.99/month."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! All SafeOrStolen subscriptions can be cancelled anytime with no questions asked and no cancellation fees. Your access continues until the end of your current billing period. We believe in earning your business every month."
  },
  {
    question: "What's included in the free trial?",
    answer: "The free trial includes 2 full verifications with access to all features: IMEI, VIN, and serial number checks against our complete database of 100+ sources including police records, carrier blacklists, and insurance claims. Results are instant (3 seconds) and include detailed reports."
  },
  {
    question: "How does SafeOrStolen compare to CheckMEND or Carfax?",
    answer: "SafeOrStolen is significantly more affordable ($0.30-$0.50 per check vs $6-40 for competitors) and more comprehensive. We're the only platform that checks phones, vehicles, electronics, bikes, tools, and firearms in one place. Plus, we offer a mobile app that competitors don't have."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use Stripe, the same payment processor trusted by Amazon, Google, and Microsoft. All transactions are encrypted with 256-bit SSL, and we never store your credit card details on our servers. Stripe is PCI-DSS Level 1 certified, the highest level of security certification."
  },
  {
    question: "What happens if I run out of verifications on the Starter plan?",
    answer: "If you use all 10 monthly verifications on the Starter plan, you can upgrade to the Personal plan for unlimited checks, or purchase additional single verifications at $2.99 each. Your monthly allocation resets at the beginning of each billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all subscription plans. If you're not satisfied for any reason, contact us within 30 days of your purchase for a full refund, no questions asked."
  },
  {
    question: "What databases do you check?",
    answer: "We check 100+ databases including: GSMA global device blacklist, NCIC (National Crime Information Center), major carrier blacklists (AT&T, Verizon, T-Mobile), insurance claim databases, Bike Index, law enforcement records, and manufacturer databases. This comprehensive coverage is why we're more accurate than competitors."
  },
  {
    question: "Can I use SafeOrStolen for my business?",
    answer: "Yes! Our Business and Enterprise plans are designed for pawn shops, electronics resellers, car dealerships, and other businesses. Features include API access, bulk verification, team accounts, white-label options, and dedicated support. Contact us for custom enterprise pricing."
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes! SafeOrStolen is the only stolen item verification service with a mobile app. Download it from our website to verify items on-the-go, scan barcodes for instant IMEI lookup, and access your verification history offline. Available for iOS and Android."
  }
];

export const PricingFAQSection: React.FC = () => {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-12">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about SafeOrStolen pricing and plans
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {pricingFAQs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default PricingFAQSection;
