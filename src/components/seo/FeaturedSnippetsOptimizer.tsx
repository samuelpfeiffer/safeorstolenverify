import React from 'react';
import { Helmet } from 'react-helmet-async';

export const FeaturedSnippetsOptimizer: React.FC = () => {
  
  // Optimized content for Google Featured Snippets
  const getFeaturedSnippetContent = () => {
    return {
      definitions: [
        {
          question: "What is IMEI?",
          answer: "IMEI (International Mobile Equipment Identity) is a unique 15-digit number that identifies every mobile phone. It's used to track devices and verify if they're stolen or blacklisted by carriers."
        },
        {
          question: "What is VIN?", 
          answer: "VIN (Vehicle Identification Number) is a unique 17-character code assigned to every vehicle. It contains information about the manufacturer, model year, and helps verify if a car is stolen."
        }
      ],
      howTo: [
        {
          question: "How to find IMEI number?",
          steps: [
            "Dial *#06# on your phone keypad",
            "Check Settings > About Phone > IMEI", 
            "Look under the battery (older phones)",
            "Check the original box or receipt"
          ]
        },
        {
          question: "How to check if phone is stolen?",
          steps: [
            "Find your phone's IMEI number",
            "Visit SafeOrStolen.com", 
            "Enter IMEI in the verification tool",
            "Review instant verification results"
          ]
        }
      ],
      lists: [
        {
          question: "Best places to verify stolen devices",
          items: [
            "SafeOrStolen.com - Free IMEI and VIN checker",
            "Carrier websites (Verizon, AT&T, T-Mobile)", 
            "CTIA Stolen Phone Checker",
            "National Insurance Crime Bureau (NICB)"
          ]
        },
        {
          question: "Signs a device might be stolen",
          items: [
            "Price significantly below market value",
            "Seller pressure to buy immediately",
            "No original box or documentation",
            "Device is locked to unknown carrier",
            "Seller avoids meeting in public places"
          ]
        }
      ]
    };
  };

  const content = getFeaturedSnippetContent();

  return (
    <Helmet>
      {/* Featured Snippet Optimization Meta Tags */}
      <meta name="featured-snippet-type" content="definition,how-to,list" />
      <meta name="answer-intent" content="informational,transactional" />
      
      {/* Direct Answer Meta Tags */}
      <meta name="direct-answer-imei" content="IMEI is a 15-digit unique identifier for mobile phones used to verify device status and prevent theft" />
      <meta name="direct-answer-vin" content="VIN is a 17-character vehicle identification code used to verify car history and stolen status" />
      <meta name="direct-answer-check" content="Check if phone is stolen by entering IMEI into SafeOrStolen free verification tool" />
      
      {/* Question-Answer Pairs for AI */}
      <meta name="qa-how-find-imei" content="Q: How to find IMEI? A: Dial *#06# or check Settings > About Phone > IMEI" />
      <meta name="qa-check-stolen-phone" content="Q: How to check stolen phone? A: Enter IMEI at SafeOrStolen.com for instant verification" />
      <meta name="qa-vin-lookup" content="Q: How to check VIN? A: Enter 17-digit VIN number in SafeOrStolen VIN verification tool" />
      
      {/* Structured Data for Featured Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage", 
          "name": "Device Verification Guide",
          "description": "Complete guide to verify IMEI, VIN, and serial numbers for stolen device protection",
          "mainEntity": [
            {
              "@type": "DefinedTerm",
              "name": "IMEI",
              "description": "International Mobile Equipment Identity - a unique 15-digit number identifying mobile phones, used for tracking and theft verification"
            },
            {
              "@type": "DefinedTerm", 
              "name": "VIN",
              "description": "Vehicle Identification Number - a unique 17-character code assigned to vehicles for identification and theft verification"
            }
          ]
        }, null, 0)}
      </script>
      
      {/* How-To Structured Data for Featured Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Find IMEI Number on Any Phone",
          "description": "Quick methods to locate your phone's IMEI number for verification",
          "step": content.howTo[0].steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": `Step ${index + 1}`,
            "text": step
          }))
        }, null, 0)}
      </script>
      
      {/* ItemList Schema for List-Type Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Signs a Device Might Be Stolen",
          "description": "Warning signs when buying secondhand devices",
          "numberOfItems": content.lists[1].items.length,
          "itemListElement": content.lists[1].items.map((item, index) => ({
            "@type": "ListItem", 
            "position": index + 1,
            "name": item
          }))
        }, null, 0)}
      </script>
      
      {/* FAQ Schema Optimized for Voice Search */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "Device Verification FAQ - Voice Search Optimized",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's the fastest way to check if a phone is stolen?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "The fastest way is to dial *#06# to get the IMEI, then enter it at SafeOrStolen.com for instant verification against stolen device databases."
              }
            },
            {
              "@type": "Question",
              "name": "Can I check if a car is stolen before buying?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, use the car's VIN number (found on dashboard or door frame) and check it through SafeOrStolen's VIN verification tool to see if it's reported stolen."
              }
            },
            {
              "@type": "Question", 
              "name": "Is it legal to buy a phone without checking if it's stolen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While not illegal to skip verification, buying stolen goods is illegal. Always verify device status to protect yourself from legal issues and financial loss."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if I accidentally buy a stolen phone?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "If you buy a stolen phone, you may lose the device and money when authorities recover it. The phone may also be blacklisted, making it unusable on networks."
              }
            }
          ]
        }, null, 0)}
      </script>
      
      {/* Article Schema for In-Depth Content */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Complete Guide to Verifying Stolen Devices Before Purchase",
          "description": "Comprehensive guide covering IMEI checks, VIN lookups, and stolen device verification for marketplace safety",
          "author": {
            "@type": "Organization", 
            "name": "SafeOrStolen"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "logo": {
              "@type": "ImageObject",
              "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
            }
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://safeorstolen.com"
          },
          "articleSection": "Fraud Prevention",
          "keywords": [
            "IMEI check", "VIN lookup", "stolen device verification", "marketplace safety", 
            "fraud prevention", "secondhand buying guide", "device authentication"
          ]
        }, null, 0)}
      </script>
      
      {/* Speakable Schema for Voice Search */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "SafeOrStolen Device Verification", 
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".main-headline", ".verification-steps", ".key-benefits"],
            "xpath": [
              "/html/body/main/section[1]/h1",
              "/html/body/main/section[2]/div",
              "/html/body/main/section[3]/ul"
            ]
          }
        }, null, 0)}
      </script>
    </Helmet>
  );
};