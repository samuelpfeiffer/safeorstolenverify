import React from 'react';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Shield, Phone, Car, Search, AlertTriangle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'imei' | 'vin' | 'safety' | 'technical';
  important?: boolean;
}

interface ComprehensiveFAQProps {
  pageType?: 'home' | 'imei' | 'vin' | 'phone' | 'car' | 'general';
  showCategories?: boolean;
  maxItems?: number;
}

export const ComprehensiveFAQ: React.FC<ComprehensiveFAQProps> = ({
  pageType = 'general',
  showCategories = true,
  maxItems
}) => {
  const allFAQs: FAQItem[] = [
    // General Questions
    {
      question: "How do I check if something is stolen?",
      answer: "Enter the item's IMEI (phones), VIN (vehicles), or serial number into our verification tool. We'll instantly check it against comprehensive stolen goods databases including police reports, insurance claims, and community submissions.",
      category: "general",
      important: true
    },
    {
      question: "Is the stolen goods check really free?",
      answer: "Yes! Basic verification is completely free for individual users. We offer premium features for businesses and bulk checks, but personal use is always free to help protect consumers.",
      category: "general",
      important: true
    },
    {
      question: "How accurate is your stolen goods database?",
      answer: "Our database maintains a 98.7% accuracy rate by combining law enforcement data, insurance reports, manufacturer databases, and verified community submissions. We update our database in real-time.",
      category: "general",
      important: true
    },
    {
      question: "What should I do if an item shows as stolen?",
      answer: "Do not purchase or use the item. If you already own it, contact local law enforcement immediately. Report the seller to the marketplace platform and consider filing a police report with all transaction details.",
      category: "safety",
      important: true
    },
    
    // IMEI/Phone Questions
    {
      question: "How do I find my phone's IMEI number?",
      answer: "Dial *#06# on your phone for instant display, go to Settings > General > About (iPhone) or Settings > About Phone (Android), check the original box, or look on your receipt. IMEI is always 15 digits.",
      category: "imei",
      important: true
    },
    {
      question: "What's the difference between stolen and blacklisted phones?",
      answer: "Blacklisted phones are blocked by carriers (often for unpaid bills), while stolen phones are reported to police. Both can cause problems - blacklisted phones won't work on networks, stolen phones have legal consequences.",
      category: "imei"
    },
    {
      question: "Can I check multiple phone IMEIs at once?",
      answer: "Individual users can check phones one at a time for free. Business users with our premium plans can perform bulk IMEI checks through our API or web interface.",
      category: "imei"
    },
    {
      question: "Do you check international phone databases?",
      answer: "Yes, we check global stolen phone databases including international law enforcement networks, carrier blacklists, and manufacturer reports from major markets worldwide.",
      category: "imei"
    },
    
    // VIN/Car Questions  
    {
      question: "Where do I find my car's VIN number?",
      answer: "Check the dashboard near the windshield (driver side), driver door jamb sticker, engine block, vehicle title, registration, or insurance documents. VIN is always 17 characters.",
      category: "vin",
      important: true
    },
    {
      question: "What types of vehicles can you check?",
      answer: "We verify cars, trucks, motorcycles, RVs, boats, trailers, and most vehicles with VIN numbers. Our database covers vehicles from all major manufacturers and includes international records.",
      category: "vin"
    },
    {
      question: "Do you show vehicle history reports?",
      answer: "We focus specifically on stolen vehicle verification. For complete history reports (accidents, maintenance, etc.), we recommend using our service alongside dedicated vehicle history providers.",
      category: "vin"
    },
    
    // Safety Questions
    {
      question: "How can I avoid buying stolen goods online?",
      answer: "Always verify IMEI/VIN numbers before buying, meet sellers in safe public places, check for original receipts/packaging, be wary of unusually low prices, and trust your instincts if something feels wrong.",
      category: "safety",
      important: true
    },
    {
      question: "What are common signs of stolen goods?",
      answer: "Unusually low prices, no original packaging/accessories, seller pressure to buy quickly, cash-only transactions, meeting in unusual locations, or reluctance to provide serial numbers/IMEIs.",
      category: "safety"
    },
    {
      question: "Can I get in trouble for accidentally buying stolen goods?",
      answer: "In most jurisdictions, innocent purchasers may not face criminal charges, but stolen goods can still be confiscated by police. This is why verification before purchase is crucial for financial protection.",
      category: "safety"
    },
    
    // Technical Questions
    {
      question: "How fast are your verification results?",
      answer: "Most checks complete within 30 seconds. Complex queries involving multiple databases may take up to 2 minutes. We prioritize speed while maintaining accuracy.",
      category: "technical"
    },
    {
      question: "Do you store my search information?",
      answer: "We store anonymized search patterns to improve our service but do not retain personal information or link searches to individual users. See our privacy policy for full details.",
      category: "technical"
    },
    {
      question: "What databases do you check?",
      answer: "We check law enforcement databases, insurance company reports, manufacturer records, carrier blacklists, and verified community submissions from multiple countries and jurisdictions.",
      category: "technical"
    }
  ];

  // Filter FAQs based on page type
  const getRelevantFAQs = (): FAQItem[] => {
    let filtered = allFAQs;
    
    switch (pageType) {
      case 'imei':
      case 'phone':
        filtered = allFAQs.filter(faq => 
          faq.category === 'general' || faq.category === 'imei' || faq.category === 'safety'
        );
        break;
      case 'vin':
      case 'car':
        filtered = allFAQs.filter(faq => 
          faq.category === 'general' || faq.category === 'vin' || faq.category === 'safety'
        );
        break;
      case 'home':
        // Show most important FAQs from all categories
        filtered = allFAQs.filter(faq => faq.important);
        break;
      default:
        filtered = allFAQs;
    }
    
    // Sort by importance, then category
    filtered.sort((a, b) => {
      if (a.important && !b.important) return -1;
      if (!a.important && b.important) return 1;
      return a.category.localeCompare(b.category);
    });
    
    return maxItems ? filtered.slice(0, maxItems) : filtered;
  };

  const faqs = getRelevantFAQs();
  
  const categoryIcons = {
    general: <Search className="h-4 w-4" />,
    imei: <Phone className="h-4 w-4" />,
    vin: <Car className="h-4 w-4" />,
    safety: <Shield className="h-4 w-4" />,
    technical: <AlertTriangle className="h-4 w-4" />
  };

  const categoryNames = {
    general: 'General Questions',
    imei: 'IMEI & Phone Questions', 
    vin: 'VIN & Vehicle Questions',
    safety: 'Safety & Prevention',
    technical: 'Technical Questions'
  };

  // Generate FAQ Schema
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

      <section className="py-16 bg-muted/30" data-seo="faq-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about verifying stolen goods and staying safe when buying secondhand items
            </p>
            {pageType !== 'home' && (
              <div className="mt-4">
                <Badge variant="secondary" className="text-sm">
                  {faqs.length} questions answered about {pageType === 'imei' ? 'IMEI checks' : pageType === 'vin' ? 'VIN verification' : 'stolen goods verification'}
                </Badge>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto">
            {showCategories ? (
              // Group by category
              Object.entries(
                faqs.reduce((acc, faq) => {
                  if (!acc[faq.category]) acc[faq.category] = [];
                  acc[faq.category].push(faq);
                  return acc;
                }, {} as Record<string, FAQItem[]>)
              ).map(([category, categoryFAQs]) => (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>
                  <div className="space-y-4">
                    {categoryFAQs.map((faq, index) => (
                      <Card key={index} className="p-6 hover:shadow-md transition-shadow" data-seo="faq-item">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-3 faq-question flex items-center gap-2">
                              {faq.important && (
                                <Badge variant="destructive" className="text-xs">Important</Badge>
                              )}
                              {faq.question}
                            </h4>
                            <p className="text-muted-foreground faq-answer leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Simple list without categories
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow" data-seo="faq-item">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3 faq-question flex items-center gap-2">
                          {faq.important && (
                            <Badge variant="destructive" className="text-xs">Important</Badge>
                          )}
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground faq-answer leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {maxItems && faqs.length >= maxItems && (
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Have more questions? Check our complete FAQ section.
              </p>
              <Card className="inline-block p-4 hover:shadow-md transition-shadow">
                <a 
                  href="/faq" 
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  <Search className="h-4 w-4" />
                  View All {allFAQs.length} Questions & Answers
                </a>
              </Card>
            </div>
          )}
        </div>
      </section>
    </>
  );
};