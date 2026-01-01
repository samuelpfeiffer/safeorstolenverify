import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

export const HomepageFAQ = () => {
  const faqs = [
    {
      question: 'How do I find my phone\'s IMEI number?',
      answer: 'The fastest way is to dial *#06# on any phone - the IMEI displays instantly. You can also find it in Settings > About Phone (Android) or Settings > General > About (iPhone). It\'s also printed on the original box and SIM tray.'
    },
    {
      question: 'Is it legal to buy used phones and electronics?',
      answer: 'Yes, buying used items is legal. However, buying STOLEN property (even unknowingly) is illegal in most jurisdictions. That\'s why verification is critical - it protects you legally by proving you took reasonable steps to ensure the item wasn\'t stolen.'
    },
    {
      question: 'What happens if I accidentally buy a stolen phone?',
      answer: 'Police can confiscate it as evidence without compensating you. The original owner may pursue civil action to recover it. You lose all money paid, and in some jurisdictions, you may face criminal charges for receiving stolen property even if you didn\'t know it was stolen.'
    },
    {
      question: 'How accurate is SafeOrStolen?',
      answer: 'We query official databases including NICB (National Insurance Crime Bureau), GSMA Device Registry, national police databases, and carrier blacklists. Our data is 99.9% accurate as it comes directly from law enforcement and carrier sources. We update our databases in real-time.'
    },
    {
      question: 'Do you report searches to police?',
      answer: 'No. Your searches are completely private and anonymous. We don\'t log, track, or store search data. We don\'t report to police unless legally required by court order. However, we strongly encourage users who find stolen items to report sellers to both the marketplace and law enforcement.'
    },
    {
      question: 'Can I check items from other countries?',
      answer: 'Yes! SafeOrStolen works globally with coverage in 150+ countries. We query international databases including INTERPOL stolen property database, GSMA global registry, and national police databases worldwide. Perfect for checking items from international sellers.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about verification and stolen item checking
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
