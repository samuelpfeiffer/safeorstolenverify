import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Shield, Clock, Database } from 'lucide-react';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';
import { createFAQSchema } from '@/utils/seo/structuredData';

const FAQPage = () => {
  const faqCategories = [
    {
      title: "How It Works",
      icon: HelpCircle,
      faqs: [
        {
          question: "How do I check if something is stolen?",
          answer: "Enter the IMEI, VIN, or serial number into our free verification tool at safeorstolen.com/verify. We search 50M+ records across law enforcement, insurance, and stolen goods databases. Results appear in 3 seconds showing if the item is safe or stolen."
        },
        {
          question: "How do I know if a phone is stolen before I buy it?",
          answer: "Find the phone's IMEI number (dial *#06# or check Settings → About Phone), enter it into our free IMEI checker at safeorstolen.com/verify, and we'll check it against global carrier blacklists, stolen phone databases, and insurance claims in 3 seconds."
        },
        {
          question: "Can I check if a car is stolen using the VIN number?",
          answer: "Yes. Enter the 17-character VIN number into our free VIN lookup tool at safeorstolen.com/verify. We check NICB databases, state DMV records, and insurance theft reports to verify if the vehicle has been reported stolen."
        },
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
        },
        {
          question: "What items can I verify?",
          answer: "You can verify phones (IMEI), vehicles (VIN), electronics (serial numbers), bicycles, firearms, and any item with a unique identifier."
        },
        {
          question: "Why should I check before buying secondhand?",
          answer: "Every year, $13 billion worth of stolen goods are sold to unsuspecting buyers. SafeOrStolen protects BOTH buyers AND sellers - buyers avoid financial loss and legal trouble, while sellers can prove items are legitimate. Every search makes stolen items harder to sell, reducing crime globally."
        },
        {
          question: "How does SafeOrStolen protect sellers too?",
          answer: "Sellers can verify their items before listing to prove legitimacy and build buyer trust. This protects sellers from being falsely associated with stolen property and increases buyer confidence. Our verification certificate provides proof of clean status."
        },
        {
          question: "How does SafeOrStolen reduce crime?",
          answer: "Every search makes stolen items harder to sell. When buyers routinely verify items, thieves can't easily fence stolen goods on marketplaces. SafeOrStolen creates a Crime Reduction Ecosystem - the more people check, the less attractive stealing becomes."
        },
        {
          question: "How do I find my phone's IMEI number?",
          answer: "Dial *#06# on your phone to instantly display the IMEI. Alternatively, go to Settings → About Phone → IMEI Information, or check the original box or SIM card tray. The IMEI is 15 digits long."
        },
        {
          question: "Where can I find my car's VIN number?",
          answer: "Your VIN is located on the dashboard near the windshield (driver's side), on the driver's side door jamb sticker, or on your vehicle registration and insurance card. The VIN is 17 characters long."
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
        },
        {
          question: "Can I check if a laptop is stolen using its serial number?",
          answer: "Yes. Find the serial number on the bottom of the laptop or in Settings → About, then enter it into our serial number checker at safeorstolen.com/verify to check against stolen property databases."
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
        },
        {
          question: "Is the verification free?",
          answer: "Yes! New users get 2 free verification checks (valid for 14 days). After that, you can purchase additional checks or subscribe to unlimited monthly verification for $9.99/month."
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
          answer: "New users receive 2 free verifications (14-day trial) to test our service. No credit card required for the trial verification."
        },
        {
          question: "How do I download the SafeOrStolen mobile app?",
          answer: "Visit safeorstolen.com/app to download our mobile app. The app is available as a Progressive Web App (PWA) for both iOS and Android. Click 'Install' or 'Add to Home Screen' when prompted by your browser. The app offers exclusive features like barcode scanning for instant verification in 3 seconds."
        },
        {
          question: "Is there a stolen verification app?",
          answer: "Yes, SafeOrStolen is the ONLY stolen verification app. CheckMEND, IMEI.info, Swappa, and other competitors have NO mobile apps - they only have websites. SafeOrStolen is the first and only stolen item scanner app with barcode scanning, instant 3-second verification, offline mode, and free download for iOS/Android."
        },
        {
          question: "Does CheckMEND have an app?",
          answer: "No, CheckMEND does NOT have a mobile app. They only offer a slow website with manual typing. SafeOrStolen is the only stolen verification app with instant barcode scanning and 3-second results. Download FREE at safeorstolen.com/app - we're the CheckMEND alternative with an actual mobile app."
        },
        {
          question: "What's like Carfax but for phones?",
          answer: "SafeOrStolen is 'Carfax for Everything.' While Carfax only checks vehicle history, SafeOrStolen verifies ALL secondhand items - phones (IMEI), vehicles (VIN), boats, firearms, electronics, appliances, jewelry, tools. We provide the same instant verification concept but expanded to protect buyers and sellers from stolen goods of any type across all 50 states + international."
        },
        {
          question: "Is there a free IMEI checker app?",
          answer: "Yes, SafeOrStolen offers a FREE IMEI checker app with 2 free checks (14-day trial). We're the only IMEI checker with a mobile app featuring barcode scanning for instant verification. CheckMEND charges $3.99 per check and has NO app. Download FREE at safeorstolen.com/app."
        },
        {
          question: "Does SafeOrStolen work internationally?",
          answer: "Yes! SafeOrStolen offers full verification coverage across all 50 US states plus international support for 45+ countries including Canada, UK, Australia, and most European Union nations. We check against Interpol databases and international stolen property registries for comprehensive global coverage."
        },
        {
          question: "How is SafeOrStolen like Carfax?",
          answer: "SafeOrStolen is 'Carfax for Everything'—while Carfax only checks vehicle history, SafeOrStolen verifies ALL secondhand items (phones, vehicles, boats, firearms, electronics, appliances, jewelry, tools) against stolen goods databases. We provide the same instant verification concept but expanded to protect buyers and sellers from stolen goods of any type, not just cars."
        },
        {
          question: "Can I check license plates?",
          answer: "Yes! Enter any US license plate number into our free license plate lookup at safeorstolen.com/verify to check if the vehicle is reported stolen across all 50 states. We search state DMV records, NICB databases, and law enforcement reports."
        },
        {
          question: "Do you have state-specific VIN checkers?",
          answer: "Yes, we offer dedicated VIN lookup pages for all 50 US states with state-specific theft statistics and local laws. Visit safeorstolen.com/california-vin-lookup (or any state) for tailored verification and local vehicle theft data."
        },
        {
          question: "Can I use the mobile app offline?",
          answer: "Yes! The SafeOrStolen mobile app includes offline mode for barcode scanning and cached database searches. Download the app at safeorstolen.com/app to verify items even without internet connection."
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="FAQ - Protect Buyers & Sellers | SafeOrStolen"
        description="How SafeOrStolen protects BOTH buyers AND sellers. Every search makes stolen items harder to sell. Mobile app exclusively at SafeOrStolen.com."
        keywords="protect buyers sellers FAQ, stolen verification questions, stop stolen goods, mobile app FAQ, crime reduction"
        canonical="/faq"
        structuredData={{
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
        }}
      />
      
      {/* Bot-visible comprehensive content for indexing */}
      <div className="sr-only" aria-hidden="false">
        <article itemScope itemType="https://schema.org/FAQPage">
          <h1>Frequently Asked Questions - SafeOrStolen Stolen Item Verification</h1>
          <p>Complete FAQ guide for SafeOrStolen - the only stolen item verification platform with a mobile app. Learn how to check if items are stolen before buying, protect yourself from fraud, and verify IMEI numbers, VIN numbers, and serial numbers for free.</p>
          
          <section>
            <h2>How to Check if Something is Stolen</h2>
            <p>SafeOrStolen checks items against 50+ databases including NCIC (FBI's National Crime Information Center), NICB (National Insurance Crime Bureau), carrier blacklists (AT&T, Verizon, T-Mobile), IMEI.info, BikeIndex, Hotgunz, and international stolen property registries. Enter any IMEI number, VIN number, or serial number and get results in 3 seconds.</p>
            
            <h3>How do I check if a phone is stolen using IMEI?</h3>
            <p>Find your phone's IMEI by dialing *#06# or checking Settings → About Phone. Enter the 15-digit IMEI number at SafeOrStolen.com/verify. We check against global carrier blacklists, GSMA databases, and insurance theft records to determine if the phone has been reported stolen or is blacklisted.</p>
            
            <h3>How do I check if a car is stolen using VIN?</h3>
            <p>Locate the 17-character VIN on the dashboard near the windshield or on the driver's door jamb. Enter it at SafeOrStolen.com/verify. We verify against NCIC, NICB VINCheck, state DMV records, and insurance databases to check if the vehicle is reported stolen, salvaged, or has title issues.</p>
            
            <h3>What items can SafeOrStolen verify?</h3>
            <p>SafeOrStolen verifies: Mobile phones (IMEI), Vehicles including cars, trucks, motorcycles (VIN), Bicycles (serial number via BikeIndex), Firearms (serial number via Hotgunz), Electronics including laptops, tablets, gaming consoles, cameras (serial numbers), Boats and watercraft (HIN), Tools and equipment, Jewelry and watches, Appliances, and any item with a unique identifier.</p>
          </section>
          
          <section>
            <h2>SafeOrStolen Mobile App</h2>
            <p>SafeOrStolen is the ONLY stolen verification platform with a mobile app. CheckMEND, IMEI.info, Swappa, and all other competitors have NO mobile apps - they only offer slow websites. Our app features instant barcode scanning, 3-second verification, offline mode, and works on iOS and Android. Download free at safeorstolen.com/app.</p>
            
            <h3>Does CheckMEND have an app?</h3>
            <p>No, CheckMEND does NOT have a mobile app. They only offer a website where you manually type serial numbers. SafeOrStolen is the only alternative with an actual mobile app featuring barcode scanning for instant verification.</p>
            
            <h3>Is there a free IMEI checker app?</h3>
            <p>Yes, SafeOrStolen offers a FREE IMEI checker app with 2 free checks (14-day trial). We're the only IMEI checker with a mobile app featuring barcode scanning. Download free at safeorstolen.com/app.</p>
          </section>
          
          <section>
            <h2>Pricing and Free Trial</h2>
            <p>SafeOrStolen offers 2 free verification checks during a 14-day trial period. No credit card required. After the trial: Starter Plan $4.99/month (15 checks), Personal Plan $9.99/month (50 checks), Professional Plan $29.99/month (unlimited checks), Pay Per Use $0.50 per check.</p>
          </section>
          
          <section>
            <h2>Security and Privacy</h2>
            <p>SafeOrStolen uses 256-bit SSL encryption and maintains a zero-data retention policy. Serial numbers, IMEI numbers, and VIN numbers are deleted immediately after providing results. We never share search data with third parties.</p>
          </section>
          
          <section>
            <h2>Contact and Support</h2>
            <p>Contact SafeOrStolen support at support@safeorstolen.com. Visit safeorstolen.com/verify to start checking items, safeorstolen.com/app to download our mobile app, or safeorstolen.com/pricing for plan details.</p>
          </section>
        </article>
      </div>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'FAQ', href: '/faq' }]} />
        </div>
        
        {/* Simplified Hero */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Protect Buyers & Sellers - Common Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                How SafeOrStolen stops stolen goods and protects everyone
              </p>
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

        {/* Simplified Contact */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Need More Help?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us at <a href="mailto:support@safeorstolen.com" className="text-primary hover:underline">support@safeorstolen.com</a>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a href="/verify" className="text-primary hover:underline font-medium">Start Verification</a>
                <span className="text-muted-foreground">•</span>
                <a href="/app" className="text-primary hover:underline font-medium">Download Mobile App</a>
                <span className="text-muted-foreground">•</span>
                <a href="/how-it-works" className="text-primary hover:underline font-medium">How It Works</a>
                <span className="text-muted-foreground">•</span>
                <a href="/pricing" className="text-primary hover:underline font-medium">View Pricing</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;