import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessSEOProps {
  businessName?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  phone?: string;
  email?: string;
  businessHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
  serviceArea?: string[];
  services?: string[];
}

export const LocalBusinessSEO: React.FC<LocalBusinessSEOProps> = ({
  businessName = "SafeOrStolen",
  address = {
    street: "TBD",
    city: "Peoria", 
    state: "Arizona",
    zipCode: "85345",
    country: "United States"
  },
  phone = "+1-555-SAFE-ORG",
  email = "support@safeorstolen.com",
  businessHours = [
    { dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "17:00" }
  ],
  serviceArea = [
    "Peoria AZ", "Phoenix AZ", "Scottsdale AZ", "Glendale AZ", "Mesa AZ", 
    "Tempe AZ", "Chandler AZ", "Arizona", "United States", "Global"
  ],
  services = [
    "IMEI Phone Verification",
    "VIN Vehicle Verification", 
    "Serial Number Verification",
    "Stolen Goods Verification",
    "Device Authentication",
    "Fraud Prevention Services"
  ]
}) => {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://safeorstolen.com/#organization",
    "name": businessName,
    "legalName": `${businessName} LLC`,
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    "image": [
      "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "https://safeorstolen.com/lovable-uploads/45491b3e-261f-4838-95f8-a95ae95bd6ea.png"
    ],
    "description": "Professional stolen goods verification service helping consumers avoid fraud when buying secondhand electronics, vehicles, and other valuable items.",
    "founder": {
      "@type": "Person",
      "name": "Doug Sittler",
      "jobTitle": "Founder & CEO"
    },
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zipCode,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5806",
      "longitude": "-112.2374"
    },
    "telephone": phone,
    "email": email,
    "openingHoursSpecification": businessHours.map(hour => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hour.dayOfWeek,
      "opens": hour.opens,
      "closes": hour.closes
    })),
    "areaServed": serviceArea.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "serviceType": "Stolen Goods Verification Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Verification Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "provider": {
            "@type": "Organization",
            "name": businessName
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        }
      }))
    },
    "priceRange": "$0 - $9.99",
    "paymentAccepted": ["Credit Card", "Debit Card", "PayPal", "Stripe"],
    "currenciesAccepted": "USD",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": phone,
        "contactType": "customer service",
        "email": email,
        "availableLanguage": ["English"],
        "areaServed": "Worldwide",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "email": "tech@safeorstolen.com",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint", 
        "contactType": "sales",
        "email": "sales@safeorstolen.com",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen", 
      "https://facebook.com/safeorstolen",
      "https://instagram.com/safeorstolen"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "SafeOrStolen saved me from buying a stolen iPhone. Quick verification and great customer service!",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Mike Chen"
        },
        "reviewBody": "Essential tool for anyone buying used electronics. Comprehensive database checks give me peace of mind.",
        "datePublished": "2024-02-20"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stolen Goods Verification Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": businessName,
      "@id": "https://safeorstolen.com/#organization"
    },
    "serviceType": "Fraud Prevention and Device Verification",
    "description": "Comprehensive verification service for IMEI numbers, VIN codes, and serial numbers to protect consumers from purchasing stolen goods.",
    "areaServed": serviceArea.map(area => ({
      "@type": "Place", 
      "name": area
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com",
      "servicePhone": phone,
      "serviceSmsNumber": phone
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Verification Plan",
        "price": "0",
        "priceCurrency": "USD",
        "description": "4 free verification checks for new users",
        "availability": "https://schema.org/InStock",
        "url": "https://safeorstolen.com/pricing"
      },
      {
        "@type": "Offer",
        "name": "Unlimited Plan",
        "price": "9.99",
        "priceCurrency": "USD", 
        "description": "Unlimited verification checks with premium features",
        "availability": "https://schema.org/InStock",
        "url": "https://safeorstolen.com/pricing"
      }
    ],
    "category": "Consumer Protection Service",
    "providerMobility": "static",
    "isRelatedTo": [
      "Fraud Prevention",
      "Consumer Protection", 
      "Device Authentication",
      "Stolen Goods Detection"
    ]
  };

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema, null, 0)}
      </script>
      
      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema, null, 0)}
      </script>
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="US-AZ" />
      <meta name="geo.placename" content={`${address.city}, ${address.state}`} />
      <meta name="geo.position" content="33.5806;-112.2374" />
      <meta name="ICBM" content="33.5806, -112.2374" />
      <meta name="DC.title" content={`${businessName} - Stolen Goods Verification in ${address.city}, ${address.state}`} />
      
      {/* Service Area Meta Tags */}
      <meta name="service-area" content={serviceArea.join(', ')} />
      <meta name="coverage" content="Arizona, United States, Global" />
      <meta name="distribution" content="Global" />
      
      {/* Business Contact Meta Tags */}
      <meta name="contact" content={phone} />
      <meta name="contact-email" content={email} />
      <meta name="business-hours" content="Monday-Friday 8:00 AM - 5:00 PM MST" />
      
      {/* Local Business Open Graph */}
      <meta property="business:contact_data:street_address" content={address.street} />
      <meta property="business:contact_data:locality" content={address.city} />
      <meta property="business:contact_data:region" content={address.state} />
      <meta property="business:contact_data:postal_code" content={address.zipCode} />
      <meta property="business:contact_data:country_name" content={address.country} />
      <meta property="business:contact_data:phone_number" content={phone} />
      <meta property="business:contact_data:email" content={email} />
    </Helmet>
  );
};