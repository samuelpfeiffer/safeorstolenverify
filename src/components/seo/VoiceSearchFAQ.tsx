import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  voiceOptimized?: boolean;
}

interface VoiceSearchFAQProps {
  pageType: 'imei' | 'vin' | 'general' | 'pricing';
}

export const VoiceSearchFAQ: React.FC<VoiceSearchFAQProps> = ({ pageType }) => {
  const getFAQData = (): FAQItem[] => {
    switch (pageType) {
      case 'imei':
        return [
          {
            question: "How do I check if my phone is stolen?",
            answer: "To check if your phone is stolen, enter your 15-digit IMEI number into our free verification tool. You can find your IMEI by dialing *#06# or checking Settings > About Phone. Our system checks multiple stolen device databases instantly.",
            voiceOptimized: true
          },
          {
            question: "Is this phone stolen before buying?",
            answer: "Yes, you can verify if a phone is stolen before buying it. Simply ask the seller for the IMEI number and use our free IMEI checker. This protects you from purchasing stolen goods and potential legal issues.",
            voiceOptimized: true
          },
          {
            question: "What happens if I buy a stolen phone?",
            answer: "If you unknowingly buy a stolen phone, it may be blacklisted by carriers, making it unusable. You could also face legal complications and lose your money with no recourse from the seller.",
            voiceOptimized: true
          },
          {
            question: "How long does IMEI verification take?",
            answer: "IMEI verification through SafeOrStolen takes less than 30 seconds. Our system provides instant results from multiple databases including law enforcement and carrier blacklists."
          }
        ];
      
      case 'vin':
        return [
          {
            question: "How can I tell if a car is stolen?",
            answer: "You can tell if a car is stolen by checking its VIN number through our free vehicle verification service. We search NICB, law enforcement, and insurance databases to confirm if the vehicle is reported stolen.",
            voiceOptimized: true
          },
          {
            question: "Where do I find the VIN number on my car?",
            answer: "The VIN number is typically located on your dashboard near the windshield on the driver's side, on the driver's door jamb, or on your vehicle registration and insurance documents.",
            voiceOptimized: true
          },
          {
            question: "Is buying a stolen car illegal?",
            answer: "Yes, purchasing a stolen vehicle is illegal even if you didn't know it was stolen. The vehicle can be seized by law enforcement, and you may lose both the car and your money with no legal recourse.",
            voiceOptimized: true
          }
        ];
      
      case 'pricing':
        return [
          {
            question: "How much does it cost to check if something is stolen?",
            answer: "Basic stolen item checks start free with 4 verifications included. For unlimited checks, our subscription is $9.99 per month with no long-term commitment required.",
            voiceOptimized: true
          },
          {
            question: "Is there a free way to check if items are stolen?",
            answer: "Yes, SafeOrStolen offers 4 free verification checks when you sign up. This includes IMEI, VIN, and serial number verification across multiple databases.",
            voiceOptimized: true
          },
          {
            question: "What's included in the unlimited plan?",
            answer: "The unlimited plan includes unlimited IMEI, VIN, and serial number checks, access to all databases, detailed verification reports, and priority customer support for $9.99 monthly.",
            voiceOptimized: true
          }
        ];
      
      default:
        return [
          {
            question: "What is SafeOrStolen?",
            answer: "SafeOrStolen is a comprehensive verification service that helps you check if phones, cars, electronics, and other items are stolen before you buy them. We protect consumers from purchasing stolen goods.",
            voiceOptimized: true
          },
          {
            question: "How does stolen item verification work?",
            answer: "Our verification system checks IMEI numbers, VIN codes, and serial numbers against multiple databases including law enforcement records, insurance claims, and manufacturer blacklists to determine if an item is stolen.",
            voiceOptimized: true
          },
          {
            question: "Why should I verify before buying used items?",
            answer: "Verifying items before purchase protects you from legal issues, financial loss, and ensures you're not supporting theft. Stolen items can be seized by law enforcement, leaving you with no recourse.",
            voiceOptimized: true
          }
        ];
    }
  };

  const faqs = getFAQData();
  const voiceOptimizedFAQs = faqs.filter(faq => faq.voiceOptimized);

  // Generate structured data for voice search
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": voiceOptimizedFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="space-y-6">
      {/* Voice Search Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <p className="text-muted-foreground">
          Voice search optimized answers to help you stay protected
        </p>
      </div>

      <div className="grid gap-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <Card key={index} className={`${faq.voiceOptimized ? 'border-primary/20' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.voiceOptimized && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-2">
                      <MessageSquare className="h-3 w-3" />
                      Voice Search Optimized
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};