import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const HighImpactFAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do I check if a phone is stolen?",
      answer: "To check if a phone is stolen, you need the IMEI number (dial *#06# to find it). Enter the IMEI on SafeOrStolen.com and we'll instantly check it against global stolen phone databases, police reports, and insurance claims. Our service covers iPhones, Samsung, Google Pixel, and all major smartphone brands."
    },
    {
      question: "Can I verify a VIN from my phone?",
      answer: "Yes! SafeOrStolen offers a mobile-friendly VIN checker that works on any smartphone. Simply enter the 17-character VIN number from the vehicle's dashboard or door frame, and we'll instantly verify it against stolen vehicle databases. You can also download our mobile app for even faster VIN checks with barcode scanning."
    },
    {
      question: "What makes SafeOrStolen better than CheckMend?",
      answer: "SafeOrStolen offers 4 FREE verification searches (CheckMend charges £2.99+ per check), has a mobile app for iOS & Android (CheckMend is web-only), provides global coverage (CheckMend focuses on UK), and verifies more item types including vehicles, tools, jewelry, and bikes - not just phones. Plus, we deliver results in under 3 seconds."
    },
    {
      question: "How to instantly check if a laptop is stolen?",
      answer: "To check if a laptop is stolen, locate the serial number (usually on the bottom of the laptop or in the BIOS). Enter this serial number into SafeOrStolen's verification tool. We'll search global stolen property databases, manufacturer reports, and police records. Results appear in under 3 seconds, helping you avoid buying stolen electronics."
    },
    {
      question: "Is there an app to check if items are stolen?",
      answer: "Yes! SafeOrStolen is the world's only mobile app specifically designed for stolen item verification. Available for iOS and Android, our app lets you scan barcodes, verify IMEIs, check VINs, and lookup serial numbers instantly. Download it free and get 4 verification searches included."
    },
    {
      question: "How do I buy used electronics safely?",
      answer: "To buy used electronics safely: 1) Always get the serial number or IMEI before purchasing, 2) Verify it on SafeOrStolen.com to check if it's stolen, 3) Meet sellers in public places, 4) Request original receipts or proof of purchase, 5) Test all functions before buying, 6) Get a verification certificate to prove legitimacy."
    },
    {
      question: "What is a stolen goods database?",
      answer: "A stolen goods database is a centralized collection of reports from police departments, insurance companies, and individuals about items that have been stolen. SafeOrStolen aggregates multiple databases globally, including police reports, insurance claims, manufacturer reports, and user-submitted theft reports, providing the most comprehensive stolen item verification service."
    },
    {
      question: "Can I check if a vehicle is stolen for free?",
      answer: "Yes! SafeOrStolen offers 4 FREE VIN checks when you create an account. Simply sign up, enter your vehicle's 17-character VIN number, and we'll instantly check it against stolen vehicle databases, police reports, and insurance theft claims. We cover cars, trucks, motorcycles, RVs, boats, and more."
    },
    {
      question: "How does secondhand fraud prevention work?",
      answer: "Secondhand fraud prevention with SafeOrStolen works by verifying items before purchase. We check serial numbers, IMEIs, and VINs against global stolen property databases. Our AI-powered verification algorithms cross-reference multiple data sources including police reports, insurance claims, and manufacturer databases to determine if an item has been reported stolen or lost."
    },
    {
      question: "What's the difference between IMEI blacklist and stolen database?",
      answer: "An IMEI blacklist is maintained by mobile carriers and blocks stolen phones from connecting to cellular networks. A stolen database (like SafeOrStolen's) is more comprehensive - it includes police reports, insurance claims, manufacturer reports, and global theft records. Checking the stolen database gives you a complete picture, not just carrier blacklist status."
    }
  ];

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

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-700">
                <AccordionTrigger className="text-left text-white hover:text-sos-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};
