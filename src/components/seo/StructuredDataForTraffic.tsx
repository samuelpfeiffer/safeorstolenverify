import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * StructuredDataForTraffic - Maximum schema markup for search visibility
 */
export const StructuredDataForTraffic = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://safeorstolen.com/#app",
        "name": "SafeOrStolen",
        "alternateName": ["Safe Or Stolen", "SOS Verification App"],
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Android, iOS, Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free trial with 2 verification checks"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.1",
          "ratingCount": "5",
          "reviewCount": "5",
          "bestRating": "5"
        },
        "description": "Check if phones, cars, laptops, and other items are stolen before buying. Free IMEI check, VIN lookup, and serial number verification.",
        "downloadUrl": "https://safeorstolen.com/app",
        "featureList": [
          "IMEI stolen phone check",
          "VIN stolen vehicle lookup",
          "Serial number verification",
          "Barcode scanning",
          "Instant 3-second results",
          "Works offline"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://safeorstolen.com/#service",
        "serviceType": "Stolen Item Verification",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Verification Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Free Trial",
                "description": "2 free verification checks"
              },
              "price": "0",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Single Check",
                "description": "One-time verification"
              },
              "price": "2.99",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Unlimited Monthly",
                "description": "Unlimited verifications per month"
              },
              "price": "4.99",
              "priceCurrency": "USD"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I check if a phone is stolen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the phone's IMEI number (dial *#06#) on SafeOrStolen.com to instantly check if it's reported stolen. You get 2 free checks."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check if a car is stolen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the vehicle's VIN number on SafeOrStolen.com to check against stolen vehicle databases. The VIN is on the dashboard or door jamb."
            }
          },
          {
            "@type": "Question",
            "name": "Is SafeOrStolen free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You get 2 free verification checks when you sign up. Additional checks are $2.99 each or unlimited for $4.99/month."
            }
          },
          {
            "@type": "Question",
            "name": "Does SafeOrStolen have a mobile app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! SafeOrStolen has a free mobile app with barcode scanning. Download at safeorstolen.com/app - it works on iPhone and Android."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Check if an Item is Stolen Before Buying",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Get the Serial Number",
            "text": "Ask the seller for the serial number, IMEI, or VIN before meeting"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Visit SafeOrStolen.com",
            "text": "Go to safeorstolen.com or download our mobile app"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Enter the Number",
            "text": "Type or scan the serial number into the verification tool"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Get Instant Results",
            "text": "Receive verification results in 3 seconds showing if the item is safe or stolen"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
