import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Shield, Clock, Database } from 'lucide-react';

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

  const structuredData = {
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

  return (
    <>
      <PageSEO
        title="FAQ - Frequently Asked Questions About Stolen Item Verification"
        description="Get answers to common questions about SafeOrStolen.com's verification process, accuracy rates, supported items, privacy policy, and pricing. 99.7% accuracy guaranteed."
        keywords="safeorstolen FAQ, stolen item verification questions, IMEI check questions, VIN verification help, serial number verification guide"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about SafeOrStolen.com's stolen item verification service. 
                Can't find your answer? Contact our support team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="h-5 w-5 mr-2" />
                  99.7% Accuracy
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="h-5 w-5 mr-2" />
                  Instant Results
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Database className="h-5 w-5 mr-2" />
                  50+ Databases
                </Badge>
              </div>
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

        {/* Contact Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our expert support team is available 24/7 to help with any questions about 
                our verification services or results interpretation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="p-6 text-center">
                  <h3 className="font-bold mb-2 text-foreground">Email Support</h3>
                  <p className="text-muted-foreground">support@safeorstolen.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Response within 2 hours</p>
                </Card>
                <Card className="p-6 text-center">
                  <h3 className="font-bold mb-2 text-foreground">Live Chat</h3>
                  <p className="text-muted-foreground">Available 24/7</p>
                  <p className="text-sm text-muted-foreground mt-2">Instant assistance</p>
                </Card>
                <Card className="p-6 text-center">
                  <h3 className="font-bold mb-2 text-foreground">Phone Support</h3>
                  <p className="text-muted-foreground">1-800-SAFE-123</p>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Fri 9AM-6PM EST</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;