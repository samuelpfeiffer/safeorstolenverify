import { Link, useLocation } from 'react-router-dom';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight, Smartphone, Car, Bike, Laptop, Gamepad2, Wrench, Camera, Watch, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';

const itemTypeCards = [
  { name: 'Phones', href: '/check-phone', icon: Smartphone, description: 'iPhone, Samsung, Android' },
  { name: 'Cars', href: '/check-car', icon: Car, description: 'VIN & license plate' },
  { name: 'Firearms', href: '/firearms-check', icon: Shield, description: 'Serial number lookup' },
  { name: 'Bikes', href: '/check-bike', icon: Bike, description: 'Bicycle serial check' },
  { name: 'Laptops', href: '/check-laptop', icon: Laptop, description: 'MacBook, Dell, HP' },
  { name: 'Electronics', href: '/check-electronics', icon: Monitor, description: 'TVs, cameras, tablets' },
  { name: 'PS5 & Gaming', href: '/check-ps5', icon: Gamepad2, description: 'PlayStation, Xbox, Switch' },
  { name: 'Tools', href: '/check-appliances', icon: Wrench, description: 'Power tools, equipment' },
];

const CheckIfStolenPage = () => {
  const location = useLocation();
  
  const content = {
    intro: "Enter any identifier to check against 100+ databases. SafeOrStolen verifies phones, cars, bikes, laptops, tools, electronics, firearms, and jewelry. Free instant verification for buyers AND sellers - protect yourself before any secondhand purchase.",
    
    whatIs: "Checking if an item is stolen means verifying the item hasn't been reported as lost, stolen, or fraudulently obtained. Every valuable item has a unique identifier - IMEI for phones, VIN for vehicles, serial numbers for electronics. SafeOrStolen checks these identifiers against law enforcement databases, carrier blacklists, insurance claims, and user-reported theft registries to determine if an item is safe to buy.",
    
    howItWorks: "Our universal stolen item checker works with any identifier: (1) Enter the serial number, IMEI, VIN, or license plate, (2) We automatically detect the identifier type and search the appropriate databases, (3) For phones: carrier blacklists, GSMA Device Registry, activation locks, (4) For vehicles: NCIC, NICB, DMV records, title history, (5) For electronics: manufacturer databases, user reports, police records, (6) You receive instant results showing clean status or any red flags.",
    
    whyCheck: "Buying stolen property can result in losing your money AND facing criminal charges. You have no legal ownership of stolen goods - they can be confiscated by police at any time with zero compensation. Phones get blacklisted and become useless. Cars get impounded. Electronics get seized. Protect yourself with a free verification before any secondhand purchase.",
    
    benefits: [
      "Check phones - iPhone, Samsung, Android, any IMEI",
      "Check cars - VIN verification against 100+ databases",
      "Check bikes - serial number lookup for bicycles",
      "Check laptops - MacBook, Dell, HP serial verification",
      "Check tools - power tools and equipment",
      "Check electronics - gaming consoles, cameras, tablets",
      "Check firearms - serial number verification",
      "Check jewelry - designer watches, luxury items",
      "Free 2 verifications - no credit card required",
      "Instant 3-second results"
    ],
    
    process: [
      "Find the identifier: IMEI (*#06# on phones), VIN (dashboard/door), serial number (label/settings)",
      "Enter any identifier into our verification tool",
      "We automatically detect the type and search appropriate databases",
      "Review the instant report showing stolen status and any red flags",
      "Only buy if the report shows CLEAN status"
    ],
    
    faqs: [
      {
        question: "What types of items can SafeOrStolen check?",
        answer: "SafeOrStolen can verify almost any valuable item: Phones (iPhone, Samsung, Android), Vehicles (cars, trucks, motorcycles, boats), Bicycles, Laptops and tablets, Gaming consoles (PS5, Xbox, Nintendo Switch), Cameras and equipment, Power tools, Firearms, Watches and jewelry. If it has a serial number, IMEI, or VIN, we can check it."
      },
      {
        question: "How do I find the serial number or identifier?",
        answer: "For phones: Dial *#06# or check Settings > About. For vehicles: VIN is on the dashboard (driver side) or door jamb. For electronics: Check the bottom, back, or Settings > About. For bikes: Serial number is under the bottom bracket. For firearms: Serial number is on the frame/receiver. We have specific guides for each item type."
      },
      {
        question: "Is the stolen item check really free?",
        answer: "Yes, SafeOrStolen offers 2 free verifications. This covers most casual buyers purchasing a used phone or checking a car before meeting a seller. Additional checks require a paid plan ($9.99/month for unlimited), but our free tier protects most users."
      },
      {
        question: "What should I do if an item shows as stolen?",
        answer: "Do NOT buy the item. Walk away immediately without confronting the seller. Report the listing to the platform (Facebook Marketplace, Craigslist, etc.). Consider reporting to local police. If you already purchased a stolen item, contact police immediately - you're a victim of fraud."
      },
      {
        question: "What databases does SafeOrStolen search?",
        answer: "SafeOrStolen searches 100+ databases including law enforcement records, carrier blacklists, insurance claims, manufacturer databases, NCIC, NICB, state DMV records, and user-reported theft registries. We're the most comprehensive stolen goods verification service available."
      },
      {
        question: "Do I need an account to check if something is stolen?",
        answer: "No account is required for your first 2 free checks. You can verify any item instantly without registration. Creating an account lets you access additional features like search history, unlimited checks, and saved reports."
      }
    ]
  };

  // Service and HowTo schemas in @graph
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Stolen Item Verification Service",
        "url": `https://safeorstolen.com${location.pathname}`,
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com"
        },
        "serviceType": "Stolen Goods Verification",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "description": "Free stolen item checker. Verify if phones, cars, bikes, electronics, or tools are stolen before buying."
      },
      {
        "@type": "HowTo",
        "name": "How to Check if an Item is Stolen",
        "step": content.process.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step
        }))
      }
    ]
  };

  // FAQPage must be SEPARATE root-level schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
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
      <PageSEO
        title="Check If Item Is Stolen - Free Verification | SafeOrStolen"
        description="Free stolen item checker. Verify if phones, cars, bikes, electronics, or tools are stolen before buying. Instant results."
        keywords="check if stolen, is this stolen, stolen item checker, verify not stolen, check stolen status, free stolen check"
        canonical={location.pathname}
        structuredData={[serviceSchema, faqSchema]}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
                Check If It's Stolen
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {content.intro}
              </p>
              
              {/* Large Hero Search CTA */}
              <Link to="/verify">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  <Search className="w-5 h-5" />
                  Enter Serial Number, IMEI, VIN, or License Plate
                </Button>
              </Link>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  100+ Databases
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Instant Results
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free to Start
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Secure</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">3 Seconds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Accurate</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-lg">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold">Trusted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Item Type Cards Grid */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Do You Need to Check?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {itemTypeCards.map((item) => (
                <Link key={item.name} to={item.href}>
                  <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <item.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility Bar */}
        <SitewideCredibilityBar />

        {/* What Is Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Stolen Item Verification?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {content.whatIs}
            </p>
            <DataPartnerBadges variant="compact" />
          </div>
        </section>

        {/* The SafeOrStolen Difference */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The SafeOrStolen Difference</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-2">Mobile App</h3>
                <p className="text-muted-foreground">
                  The ONLY stolen goods verification service with a dedicated mobile app. 
                  Scan barcodes for instant verification anywhere.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-2">100+ Databases</h3>
                <p className="text-muted-foreground">
                  We search more databases than any competitor. Law enforcement, carriers, 
                  manufacturers, insurance companies - all in one search.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-2">No Daily Limits</h3>
                <p className="text-muted-foreground">
                  Unlike competitors who limit searches, our paid plans offer unlimited 
                  verifications with no daily or monthly caps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              {content.process.map((step, index) => (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-muted-foreground">{content.howItWorks}</p>
          </div>
        </section>

        {/* Why Check Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Check Before Buying?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{content.whyCheck}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Authority Signals Before CTA */}
        <AuthoritySignals variant="banner" className="mb-0" />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify Your Item?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get instant verification results in 3 seconds. Protect yourself from stolen goods.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Start Free Check <Search className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CheckIfStolenPage;
