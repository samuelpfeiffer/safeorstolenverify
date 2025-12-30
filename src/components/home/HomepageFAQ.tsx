import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

export const HomepageFAQ = () => {
  const faqs = [
    {
      question: 'How do I check if a phone is stolen before buying?',
      answer: 'Get the serial number or IMEI from the seller (ask them to dial *#06# on the phone or check Settings > About). Enter it above. In 2 seconds, we check police databases, carrier blacklists, and insurance claims. If it shows SAFE ✅, you\'re good. If STOLEN ❌, walk away immediately.'
    },
    {
      question: 'What happens if I accidentally buy a stolen phone?',
      answer: 'Police can confiscate it as evidence without compensating you. The original owner may pursue civil action. You lose all money paid AND may face criminal charges for receiving stolen property - even if you didn\'t know it was stolen. That\'s why checking BEFORE you buy is critical.'
    },
    {
      question: 'Is this really free?',
      answer: 'Yes! Your first 2 checks are completely free. No credit card required. Just enter the serial number and get instant results. If you need more checks (dealers, pawn shops, frequent buyers), it\'s $4.99/month for unlimited.'
    },
    {
      question: 'Does this work for cars too?',
      answer: 'Absolutely. Enter the VIN number (17 digits on the dashboard or door jamb). We check NICB stolen vehicle database, police records, insurance claims, and DMV records. Perfect for Craigslist, Facebook Marketplace, or any private car sale.'
    },
    {
      question: 'What if the seller won\'t give me the serial number?',
      answer: 'Red flag. Any legitimate seller will provide the serial number, IMEI, or VIN when asked. If they refuse, make excuses, or get defensive - walk away. Scammers know their items are flagged in databases, so they avoid verification.'
    },
    {
      question: 'Can I use this at Facebook Marketplace or eBay meetups?',
      answer: 'That\'s exactly what it\'s for. Before you meet the seller, ask for the serial number and check it here. If it\'s clean, proceed with the meetup (at a police station parking lot for safety). If it\'s stolen, cancel and report the listing.'
    },
    {
      question: 'Can sellers use this to prove their item isn\'t stolen?',
      answer: 'Yes! Smart sellers run a check and share the "SAFE" result with buyers. It builds trust and helps you sell faster. You can even get a verification badge for your listings.'
    },
    {
      question: 'How accurate is this?',
      answer: 'We query official databases including NICB (National Insurance Crime Bureau), GSMA global registry, national police databases, and carrier blacklists. Our data comes directly from law enforcement and carrier sources, updated in real-time. 99.9% accuracy.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions About Checking Stolen Items
          </h2>
          <p className="text-xl text-muted-foreground">
            Real answers to what buyers ask before purchasing used phones, cars, and electronics
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Have more questions? Check our comprehensive FAQ page or contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/faq" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              View Full FAQ
            </a>
            <a 
              href="/faq" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
