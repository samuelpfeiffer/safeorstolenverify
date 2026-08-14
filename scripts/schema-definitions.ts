/**
 * Complete Schema Definitions for All 9 Core Pages
 * These schemas will be injected as static JSON-LD for guaranteed bot visibility
 */

export interface PageSchemas {
  path: string;
  title: string;
  schemas: any[];
}

// Global schemas (appear on every page via index.html - already implemented)
const GLOBAL_SCHEMAS = ['Organization', 'WebSite', 'SoftwareApplication'];

/**
 * All page-specific schemas with complete data
 */
export const PAGE_SCHEMA_DEFINITIONS: PageSchemas[] = [
  {
    path: '/',
    title: 'SafeOrStolen - Free Stolen Item Checker | IMEI, VIN & Serial Verification',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SafeOrStolen Verification Service",
        "serviceType": "Stolen Item Verification",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen"
        },
        "areaServed": "Worldwide",
        "description": "Instant verification service to check if items are stolen using IMEI, VIN, and serial numbers.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "2 free searches within 14-day trial"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I check if an item is stolen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the IMEI, VIN, or serial number into our verification tool. Results appear in 3 seconds from our database of 50+ million records."
            }
          },
          {
            "@type": "Question",
            "name": "Is SafeOrStolen free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Get 2 free verification searches within a 14-day trial period. No credit card required."
            }
          },
          {
            "@type": "Question",
            "name": "What items can I verify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Verify smartphones, vehicles, electronics, bikes, firearms, and any item with an IMEI, VIN, or serial number."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          }
        ]
      }
    ]
  },
  {
    path: '/verify',
    title: 'Verify Items - Check IMEI, VIN, Serial Numbers | SafeOrStolen',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "IMEI Verification Service",
        "serviceType": "IMEI Number Verification",
        "provider": { "@type": "Organization", "name": "SafeOrStolen" },
        "description": "Verify smartphone IMEI numbers against global stolen device databases."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "VIN Verification Service",
        "serviceType": "Vehicle Identification Number Verification",
        "provider": { "@type": "Organization", "name": "SafeOrStolen" },
        "description": "Check vehicle VIN numbers against theft and fraud databases."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Serial Number Verification Service",
        "serviceType": "Serial Number Verification",
        "provider": { "@type": "Organization", "name": "SafeOrStolen" },
        "description": "Verify serial numbers for electronics, bikes, and equipment."
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Verify if an Item is Stolen",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Enter Identifier",
            "text": "Enter the IMEI, VIN, or serial number of the item you want to verify."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Submit Search",
            "text": "Click 'Verify Now' to search our database of 50+ million records."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Review Results",
            "text": "Get instant results showing if the item is safe or reported stolen."
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Verify",
            "item": "https://safeorstolen.com/verify"
          }
        ]
      }
    ]
  },
  {
    path: '/app',
    title: 'Mobile App - Download SafeOrStolen | iOS & Android PWA',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "SafeOrStolen Mobile App",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": ["iOS", "Android", "Web Browser"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Barcode scanning",
          "Offline verification mode",
          "3-second results",
          "IMEI, VIN, serial verification",
          "License plate lookup"
        ],
        "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SafeOrStolen PWA",
        "applicationCategory": "SecurityApplication",
        "installUrl": "https://safeorstolen.com/app",
        "operatingSystem": "Progressive Web App"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the mobile app free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Download the SafeOrStolen mobile app for free with 2 free verification searches."
            }
          },
          {
            "@type": "Question",
            "name": "Does it work offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The app includes offline mode with cached database for verification without internet."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Mobile App",
            "item": "https://safeorstolen.com/app"
          }
        ]
      }
    ]
  },
  {
    path: '/app',
    title: 'Download App - SafeOrStolen Mobile PWA',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "SafeOrStolen Mobile App",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": ["iOS", "Android", "Web Browser"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Barcode scanning",
          "Offline verification mode",
          "3-second results",
          "IMEI, VIN, serial verification",
          "License plate lookup"
        ],
        "screenshot": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SafeOrStolen PWA",
        "applicationCategory": "SecurityApplication",
        "installUrl": "https://safeorstolen.com/app",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the mobile app free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Download the SafeOrStolen mobile app for free with 2 free verification searches."
            }
          },
          {
            "@type": "Question",
            "name": "Does it work offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The app includes offline mode with cached database for verification without internet."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Mobile App",
            "item": "https://safeorstolen.com/app"
          }
        ]
      }
    ]
  },
  {
    path: '/pricing',
    title: 'Pricing Plans - SafeOrStolen Verification Credits',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SafeOrStolen Free Trial",
        "serviceType": "Stolen Item Verification Service",
        "provider": { "@type": "Organization", "name": "SafeOrStolen" },
        "offers": {
          "@type": "Offer",
          "name": "Free Trial",
          "price": "0",
          "priceCurrency": "USD",
          "description": "2 free verification searches within 14-day trial period"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SafeOrStolen Basic Plan",
        "serviceType": "Stolen Item Verification Service",
        "provider": { "@type": "Organization", "name": "SafeOrStolen" },
        "offers": {
          "@type": "Offer",
          "name": "Basic Plan",
          "price": "9.99",
          "priceCurrency": "USD",
          "billingDuration": "P1M",
          "description": "20 verification searches per month"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SafeOrStolen Pro Plan",
        "serviceType": "Stolen Item Verification Service",
        "provider": { "@type": "Organization", "name": "SafeOrStolen" },
        "offers": {
          "@type": "Offer",
          "name": "Pro Plan",
          "price": "29.99",
          "priceCurrency": "USD",
          "billingDuration": "P1M",
          "description": "100 verification searches per month plus priority support"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens after my free searches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After 2 free searches, you can purchase verification credits or subscribe to a monthly plan for unlimited searches."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": "https://safeorstolen.com/pricing"
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    title: 'About Us - SafeOrStolen Mission & Team',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About SafeOrStolen",
        "description": "Learn about SafeOrStolen's mission to protect buyers and sellers from stolen goods fraud.",
        "mainEntity": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "founder": {
            "@type": "Person",
            "name": "Sam Pfeiffer"
          },
          "foundingDate": "2017-07-20"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "support@safeorstolen.com",
        "url": "https://safeorstolen.com/about"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://safeorstolen.com/about"
          }
        ]
      }
    ]
  },
  {
    path: '/faq',
    title: 'FAQ - Frequently Asked Questions | SafeOrStolen',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How accurate is SafeOrStolen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SafeOrStolen searches 50+ million records from global databases including law enforcement and insurance agencies for maximum accuracy."
            }
          },
          {
            "@type": "Question",
            "name": "What if I find a stolen item?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contact local law enforcement immediately and provide them with the verification report. Do not purchase or handle the item."
            }
          },
          {
            "@type": "Question",
            "name": "Can businesses use SafeOrStolen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer business plans for pawn shops, auctions, dealers, and any business dealing with secondhand items."
            }
          },
          {
            "@type": "Question",
            "name": "How long does verification take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Verification results appear in 3 seconds or less. Our system instantly searches all connected databases."
            }
          },
          {
            "@type": "Question",
            "name": "Is my data secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All searches are encrypted and we never store or share your personal information."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": "https://safeorstolen.com/faq"
          }
        ]
      }
    ]
  },
  {
    path: '/dashboard',
    title: 'Dashboard - My Verifications | SafeOrStolen',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "SafeOrStolen User Dashboard",
        "applicationCategory": "Security Dashboard",
        "description": "View your verification history, purchases, and account settings."
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Dashboard",
            "item": "https://safeorstolen.com/dashboard"
          }
        ]
      }
    ]
  },
  {
    path: '/account',
    title: 'Account Settings - SafeOrStolen',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "SafeOrStolen Account Settings",
        "applicationCategory": "Security Dashboard",
        "description": "Manage your account, subscription, and preferences."
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Account",
            "item": "https://safeorstolen.com/account"
          }
        ]
      }
    ]
  },
  {
    path: '/terms',
    title: 'Terms of Service - SafeOrStolen',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description": "SafeOrStolen terms of service and user agreement.",
        "lastReviewed": "2025-11-27"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms",
            "item": "https://safeorstolen.com/terms"
          }
        ]
      }
    ]
  },
  {
    path: '/privacy',
    title: 'Privacy Policy - SafeOrStolen',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "SafeOrStolen privacy policy and data protection information.",
        "lastReviewed": "2025-11-27"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://safeorstolen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy",
            "item": "https://safeorstolen.com/privacy"
          }
        ]
      }
    ]
  }
];

/**
 * Calculate total schemas
 */
export function getTotalSchemaCount(): number {
  const pageSchemas = PAGE_SCHEMA_DEFINITIONS.reduce((sum, page) => sum + page.schemas.length, 0);
  return pageSchemas + GLOBAL_SCHEMAS.length; // Add 3 global schemas from index.html
}

/**
 * Get schemas for a specific page
 */
export function getSchemasForPage(path: string): any[] {
  const page = PAGE_SCHEMA_DEFINITIONS.find(p => p.path === path);
  return page?.schemas || [];
}
