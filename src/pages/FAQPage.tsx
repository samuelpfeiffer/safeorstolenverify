import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Shield, Clock, Database } from 'lucide-react';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';
import { createFAQSchema } from '@/utils/seo/structuredData';

const FAQPage = () => {
  const faqCategories = [
    {
      title: "How It Works",
      icon: HelpCircle,
      faqs: [
        {
          question: "How accurate is SafeOrStolen.com's verification process?",
          answer: "Our verification system maintains a 99.7% accuracy rate, verified through independent third-party audits. We cross-reference multiple law enforcement databases including NCIC, FBI databases, and international stolen property registries to ensure comprehensive coverage."
        },
        {
          question: "What databases do you search when checking items?",
          answer: "We search the National Crime Information Center (NCIC), FBI's National Stolen Property database, Interpol's stolen property database, insurance company databases, and over 50 regional law enforcement databases across North America and internationally."
        },
        {
          question: "How long does a verification check take?",
          answer: "Most verifications are completed instantly, typically within 2-5 seconds. Complex searches involving multiple databases may take up to 30 seconds. You'll receive immediate notification when results are available."
        },
        {
          question: "Can I check items that were stolen outside the United States?",
          answer: "Yes, our international partnerships allow us to search stolen property databases in over 45 countries, including Canada, UK, Australia, and most European Union nations."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      faqs: [
        {
          question: "Is my search information stored or tracked?",
          answer: "No, we maintain a zero-data retention policy for searches. Serial numbers, IMEI numbers, and VIN numbers are immediately deleted after providing results. We only retain anonymous statistics for service improvement."
        },
        {
          question: "How do you protect my personal information?",
          answer: "We use bank-level 256-bit SSL encryption, maintain SOC 2 Type II compliance, and are fully GDPR compliant. All data transmission is encrypted and we never store personal information linked to searches."
        },
        {
          question: "Who has access to the search results?",
          answer: "Only you have access to your search results. We do not share, sell, or provide search data to third parties, including law enforcement, without a valid court order."
        }
      ]
    },
    {
      title: "Supported Items",
      icon: Database,
      faqs: [
        {
          question: "What types of items can I verify?",
          answer: "We support verification for smartphones, tablets, laptops, cameras, gaming consoles, power tools, musical instruments, bicycles, watches, jewelry, vehicles (cars, motorcycles, boats), and most electronics with serial numbers."
        },
        {
          question: "Can you check items without serial numbers?",
          answer: "Unfortunately, no. Our verification system requires a unique identifier such as a serial number, IMEI, or VIN number to perform accurate searches across law enforcement databases."
        },
        {
          question: "Do you support international device identifiers?",
          answer: "Yes, we support IMEI numbers for international devices, European Article Numbers (EAN), and various international product identification systems used across different countries."
        }
      ]
    },
    {
      title: "Results & Actions",
      icon: Clock,
      faqs: [
        {
          question: "What should I do if an item shows as stolen?",
          answer: "If an item is flagged as stolen, DO NOT purchase or transfer ownership. Contact local law enforcement immediately. We provide a detailed report that can be shared with police to help with recovery efforts."
        },
        {
          question: "What does 'Clean' result mean?",
          answer: "A 'Clean' result means the item is not currently listed in any stolen property database we search. However, this doesn't guarantee the item wasn't stolen if it hasn't been reported yet."
        },
        {
          question: "Can I get a certificate for verification results?",
          answer: "Yes, Premium subscribers receive official verification certificates that can be used for insurance purposes, legal documentation, or business compliance requirements."
        },
        {
          question: "What if I find an error in the results?",
          answer: "If you believe there's an error, contact our support team immediately. We offer a dispute resolution process and will re-verify items free of charge if documentation proves an error occurred."
        }
      ]
    },
    {
      title: "Pricing & Subscriptions",
      icon: HelpCircle,
      faqs: [
        {
          question: "How much does a single verification cost?",
          answer: "Single verifications cost $2.99 each. We also offer bulk packages: 10 checks for $19.99, 50 checks for $79.99, and unlimited monthly subscriptions starting at $29.99."
        },
        {
          question: "Do you offer discounts for businesses?",
          answer: "Yes, we offer enterprise pricing for businesses, pawn shops, electronics retailers, and law enforcement agencies. Contact our business development team for custom pricing based on volume needs."
        },
        {
          question: "Is there a free trial available?",
          answer: "New users receive 1 free verification to test our service. No credit card required for the trial verification."
        }
      ]
    }
  ];

  const pageFAQStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };
  
  const structuredData = [createFAQSchema(), pageFAQStructuredData];

  return (
    <>
      <PageSEO
        title="FAQ - Frequently Asked Questions About Stolen Item Verification"
        description="Get answers to common questions about SafeOrStolen.com's verification process, accuracy rates, supported items, privacy policy, and pricing. 99.7% accuracy guaranteed."
        keywords="safeorstolen FAQ, stolen item verification questions, IMEI check questions, VIN verification help, serial number verification guide"
        canonical="/faq"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'FAQ', href: '/faq' }]} />
        </div>
        
        {/* Simplified Hero */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Common Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Quick answers about our verification service
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="mb-8 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left text-lg font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Simplified Contact */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Need More Help?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us at support@safeorstolen.com or (206) 249-2203
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;