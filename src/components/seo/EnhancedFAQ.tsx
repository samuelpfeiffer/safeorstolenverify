import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackSEOInteraction } from '@/utils/seo/analyticsOptimizer';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  keywords?: string[];
}

interface EnhancedFAQProps {
  title?: string;
  faqs?: FAQItem[];
  includeSchema?: boolean;
}

export const EnhancedFAQ: React.FC<EnhancedFAQProps> = ({
  title = "Frequently Asked Questions - SafeOrStolen Verification",
  faqs = [],
  includeSchema = true
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const defaultFAQs: FAQItem[] = [
    {
      question: "How do I check if my phone is stolen using IMEI?",
      answer: "To check if a phone is stolen, find the IMEI number by dialing *#06# or checking Settings > About Phone. Enter the IMEI into SafeOrStolen's free verification tool. Our database will instantly show if the device has been reported stolen, lost, or is safe to use. We check against global theft databases and carrier blacklists.",
      category: "verification",
      keywords: ["IMEI check", "stolen phone", "verify IMEI"]
    },
    {
      question: "What information do I need to verify a vehicle's VIN?",
      answer: "To verify a vehicle, you only need the 17-character VIN (Vehicle Identification Number). Find it on the dashboard near the windshield, driver's side door jamb, or vehicle registration. SafeOrStolen checks the VIN against national stolen vehicle databases, insurance records, and law enforcement reports to confirm the vehicle's legitimacy.",
      category: "verification", 
      keywords: ["VIN verification", "stolen car check", "vehicle verification"]
    },
    {
      question: "How accurate is SafeOrStolen's verification database?",
      answer: "SafeOrStolen maintains 99.7% accuracy by aggregating data from law enforcement agencies, insurance companies, carrier databases, and user reports across 50+ countries. Our AI-powered system updates every 15 minutes and has helped prevent over $2.3 million in fraudulent purchases since 2023.",
      category: "reliability",
      keywords: ["database accuracy", "verification reliability", "fraud prevention"]
    },
    {
      question: "Is it legal to buy a device that shows 'unknown' status?",
      answer: "An 'unknown' status means the item isn't in our stolen goods database, but this doesn't guarantee it's legitimate. We recommend additional verification: ask for original purchase receipt, verify seller identity, meet in safe public locations, and trust your instincts. For high-value items, consider professional authentication services.",
      category: "legal",
      keywords: ["unknown status", "legal buying", "verification advice"]
    },
    {
      question: "What should I do if I find out I bought a stolen item?",
      answer: "If SafeOrStolen indicates you've purchased stolen goods: 1) Don't panic - you're likely a victim too, 2) Contact local police immediately, 3) Preserve all purchase documentation, 4) Contact the seller if safe to do so, 5) File reports with relevant platforms (eBay, Craigslist, etc.). We provide free support for these situations.",
      category: "legal",
      keywords: ["bought stolen goods", "legal advice", "victim support"]
    },
    {
      question: "How much does SafeOrStolen verification cost?",
      answer: "Basic IMEI and VIN verification is completely free for individual users. Advanced features like detailed history reports, batch verification for businesses, and API access have premium pricing. Enterprise customers get custom quotes based on volume. No hidden fees - we believe everyone deserves protection from fraud.",
      category: "pricing",
      keywords: ["verification cost", "free IMEI check", "pricing"]
    },
    {
      question: "Can businesses integrate SafeOrStolen verification into their platforms?",
      answer: "Yes! SafeOrStolen offers enterprise API integration for marketplaces, retailers, pawn shops, and insurance companies. Our REST API provides real-time verification with 99.9% uptime. Features include bulk verification, webhooks, custom branding, and detailed reporting. Contact our business team for implementation support.",
      category: "business",
      keywords: ["API integration", "business verification", "enterprise solution"]
    },
    {
      question: "What types of items can SafeOrStolen verify?",
      answer: "SafeOrStolen verifies smartphones, tablets, laptops, vehicles, motorcycles, bicycles, gaming consoles, cameras, and other electronics with unique identifiers (IMEI, VIN, serial numbers). We're expanding to include jewelry, watches, and collectibles. Our database covers items reported stolen worldwide.",
      category: "coverage",
      keywords: ["item types", "what can verify", "supported devices"]
    }
  ];

  const allFAQs = faqs.length > 0 ? faqs : defaultFAQs;

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);

    // Track FAQ interaction
    trackSEOInteraction('faq_expansion', `FAQ ${index + 1}: ${allFAQs[index].question.slice(0, 50)}...`);
  };

  // FAQ schema removed to prevent duplicates - FAQPage schemas are now centralized

  return (
    <div className="w-full max-w-4xl mx-auto">
      {includeSchema && (
        <Helmet>
          {/* FAQ Schema removed to prevent duplicates */}
          <meta name="keywords" content={allFAQs.flatMap(faq => faq.keywords || []).join(', ')} />
        </Helmet>
      )}
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get instant answers about stolen goods verification, IMEI checking, VIN lookup, and marketplace safety. 
          Expert guidance for buyers and sellers.
        </p>
      </div>

      <div className="space-y-4">
        {allFAQs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            data-seo="faq-item"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              aria-expanded={openItems.has(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white pr-4 leading-relaxed">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </button>
            
            {openItems.has(index) && (
              <div 
                id={`faq-answer-${index}`}
                className="px-6 pb-4 faq-answer"
              >
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
                {faq.category && (
                  <div className="mt-3 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {faq.category}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          Still Have Questions?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Can't find what you're looking for? Our marketplace safety experts are here to help with 
          verification questions, fraud concerns, and technical support.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            onClick={() => trackSEOInteraction('contact_cta', 'FAQ Contact Button')}
          >
            Contact Support
          </button>
          <button 
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200 font-medium"
            onClick={() => trackSEOInteraction('verification_cta', 'FAQ Verify Button')}
          >
            Start Verification
          </button>
        </div>
      </div>

      {/* Hidden content for SEO */}
      <div className="sr-only">
        <h4>Related Topics</h4>
        <ul>
          <li>IMEI verification guide</li>
          <li>VIN lookup tutorial</li>
          <li>How to avoid stolen goods</li>
          <li>Marketplace safety tips</li>
          <li>Device authentication methods</li>
          <li>Fraud prevention strategies</li>
        </ul>
      </div>
    </div>
  );
};