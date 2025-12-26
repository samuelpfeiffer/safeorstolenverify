import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface VoiceSearchFAQSchemaProps {
  faqs?: FAQItem[];
  pageType?: 'homepage' | 'phone' | 'car' | 'bike' | 'laptop' | 'general';
}

const defaultFAQs: Record<string, FAQItem[]> = {
  homepage: [
    {
      question: "How do I check if my phone is stolen?",
      answer: "To check if your phone is stolen, find your IMEI number by dialing *#06#, then enter it on SafeOrStolen.com. We'll check it against 100+ databases including police records and carrier blacklists in under 3 seconds. You get 2 free searches with no credit card required."
    },
    {
      question: "Can I check if a car is stolen for free?",
      answer: "Yes, you can check if a car is stolen for free on SafeOrStolen. Enter the VIN number and we'll search NICB, police databases, and insurance records instantly. You get 2 free searches with no credit card required."
    },
    {
      question: "What is an IMEI number and where do I find it?",
      answer: "An IMEI number is a 15-digit unique identifier for your phone. Find it by dialing *#06# on your phone, checking Settings > About Phone, or looking on the original box or SIM tray. Every phone has a unique IMEI that can be used to verify if it's stolen or blacklisted."
    },
    {
      question: "How do I find my phone's IMEI number?",
      answer: "To find your iPhone or Android IMEI number, dial *#06# and it will display on screen. You can also find it in Settings > About Phone > Status. For iPhones, check Settings > General > About and scroll to IMEI. The IMEI is also printed on the original box and SIM tray."
    },
    {
      question: "Is it safe to buy a used phone from Facebook Marketplace?",
      answer: "Buying used phones from Facebook Marketplace can be safe if you verify the IMEI number first. Use SafeOrStolen.com to check if the phone is stolen, blacklisted, or has insurance claims before meeting the seller. Always meet in public places and verify the IMEI matches the listing."
    },
    {
      question: "What happens if I accidentally buy a stolen phone?",
      answer: "If you accidentally buy a stolen phone, you may lose both the phone and your money. The phone can be confiscated by police, and you could face legal questions. That's why it's critical to verify the IMEI on SafeOrStolen.com before purchasing any used phone."
    },
    {
      question: "Where can I verify an IMEI number?",
      answer: "You can verify an IMEI number for free at SafeOrStolen.com. We check against over 100 databases including police stolen property records, GSMA blacklists, carrier databases, and insurance claims. Results are instant and you get 2 free checks."
    },
    {
      question: "How to check if iPhone is blacklisted?",
      answer: "To check if an iPhone is blacklisted, dial *#06# to get the IMEI, then enter it at SafeOrStolen.com. We'll check carrier blacklists, iCloud lock status, and stolen property databases. Blacklisted iPhones cannot be activated on most carriers."
    }
  ],
  phone: [
    {
      question: "How do I check if a phone is stolen before buying?",
      answer: "Before buying a used phone, get the IMEI number by asking the seller to dial *#06#. Enter that IMEI at SafeOrStolen.com to check police databases, carrier blacklists, and insurance records. Never buy a phone without verifying the IMEI first."
    },
    {
      question: "What databases does SafeOrStolen check for phones?",
      answer: "SafeOrStolen checks phones against GSMA global blacklist, CTIA carrier databases, police stolen property records, insurance claim databases, and manufacturer records. We search over 100 databases to give you comprehensive verification."
    },
    {
      question: "Can a stolen phone be unblacklisted?",
      answer: "No, legitimately blacklisted phones cannot be unblacklisted without the original owner's involvement. If a phone is marked stolen, only the original owner or their carrier can remove the blacklist. Scammers claiming to unblacklist phones are committing fraud."
    }
  ],
  car: [
    {
      question: "How do I check if a car is stolen by VIN?",
      answer: "To check if a car is stolen, find the 17-character VIN on the dashboard near the windshield or driver's door jamb. Enter it at SafeOrStolen.com to search NICB, police databases, and insurance records. You get 2 free VIN checks."
    },
    {
      question: "Where is the VIN number located on a car?",
      answer: "The VIN number is located on the driver's side dashboard visible through the windshield, on the driver's door jamb, on the vehicle title and registration, and on insurance documents. It's a 17-character code that uniquely identifies your vehicle."
    },
    {
      question: "What does a VIN check tell you about a car?",
      answer: "A VIN check on SafeOrStolen reveals if the car is reported stolen, has salvage or rebuilt title history, has insurance claims or total loss records, and if there are any liens. It helps you avoid buying stolen vehicles or cars with hidden problems."
    }
  ],
  bike: [
    {
      question: "How do I check if a bicycle is stolen?",
      answer: "To check if a bicycle is stolen, find the serial number typically located under the bottom bracket, on the head tube, or rear dropout. Enter it at SafeOrStolen.com to search Bike Index, police databases, and stolen bike registries."
    },
    {
      question: "Where is the serial number on a bike?",
      answer: "The bike serial number is usually located under the bottom bracket where the pedal cranks meet. It can also be on the head tube, rear dropout, or seat tube. Write down this number and register it with SafeOrStolen for theft protection."
    }
  ],
  laptop: [
    {
      question: "How do I check if a laptop is stolen?",
      answer: "To check if a laptop is stolen, find the serial number on the bottom of the laptop, in system settings, or on the original box. Enter it at SafeOrStolen.com to search manufacturer databases, police records, and corporate asset registries."
    },
    {
      question: "Where do I find the serial number on a laptop?",
      answer: "The laptop serial number is on a sticker on the bottom of the device, in System Information (Windows) or About This Mac (Apple), on the original box, and in your purchase receipt. Apple laptops also show serial in Settings > General > About."
    }
  ]
};

export const VoiceSearchFAQSchema: React.FC<VoiceSearchFAQSchemaProps> = ({ 
  faqs, 
  pageType = 'homepage' 
}) => {
  const faqItems = faqs || defaultFAQs[pageType] || defaultFAQs.homepage;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default VoiceSearchFAQSchema;
