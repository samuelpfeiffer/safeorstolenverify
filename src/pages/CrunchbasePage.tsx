import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, ExternalLink, TrendingUp, Users, Globe, Shield, Brain, Recycle, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const crunchbaseFaqs = [
  {
    question: "What is SafeOrStolen?",
    answer: "SafeOrStolen is an AI-powered stolen item verification platform that checks IMEI numbers, VIN numbers, serial numbers, license plates, and firearm serial numbers against 100+ databases including FBI NCIC, NICB, GSMA, and all 50 state law enforcement systems. Results are returned in approximately 3 seconds."
  },
  {
    question: "Who founded SafeOrStolen?",
    answer: "SafeOrStolen was founded by Samuel Pfeiffer (CEO) and Kelly McEvoy (Co-Founder) in 2017, incorporated in Arizona in 2025. The company was recognized by OneValley's Entrepreneurship World Cup."
  },
  {
    question: "What market does SafeOrStolen serve?",
    answer: "SafeOrStolen serves the $367 billion global secondhand market (growing at 10.7% CAGR). The platform protects both individual consumers buying used items on marketplaces like Facebook Marketplace, OfferUp, and Craigslist, and businesses including pawn shops, used car dealers, auction houses, and electronics resellers."
  },
  {
    question: "How does SafeOrStolen make money?",
    answer: "SafeOrStolen operates on a freemium model: 2 free verification checks, then $0.99/check or $10/month unlimited. Business and enterprise plans offer API access, compliance reporting, and white-label solutions for high-volume verification needs."
  },
  {
    question: "Is SafeOrStolen available as a mobile app?",
    answer: "Yes. SafeOrStolen is the only stolen item verification platform with a dedicated mobile app (Progressive Web App). The app includes barcode scanning for instant IMEI, VIN, and serial number verification on the go. Available at safeorstolen.com/app."
  }
];

const CrunchbasePage: React.FC = () => {
  const crunchbaseUrl = 'https://www.crunchbase.com/organization/safe-or-stolen';

  const handleVisitProfile = () => {
    window.open(crunchbaseUrl, '_blank', 'noopener,noreferrer');
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "alternateName": ["Safe Or Stolen", "SafeOrStolen"],
      "description": "AI-powered stolen item verification platform checking IMEI, VIN, and serial numbers against 100+ law enforcement, insurance, and carrier databases in 3 seconds.",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/sos-logo.png",
      "foundingDate": "2017",
      "founder": [
        { "@type": "Person", "name": "Samuel Pfeiffer", "jobTitle": "Founder & CEO" },
        { "@type": "Person", "name": "Kelly McEvoy", "jobTitle": "Co-Founder" }
      ],
      "funder": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "knowsAbout": [
        "Stolen item verification",
        "IMEI checking",
        "VIN lookup",
        "Serial number verification",
        "Marketplace fraud prevention"
      ],
      "sameAs": [
        "https://www.crunchbase.com/organization/safe-or-stolen",
        "https://twitter.com/safeorstolen",
        "https://www.youtube.com/@safeorstolen"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": crunchbaseFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://safeorstolen.com/about" },
        { "@type": "ListItem", "position": 3, "name": "Crunchbase", "item": "https://safeorstolen.com/crunchbase" }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen Company Profile | AI-Powered Verification | Crunchbase"
        description="View SafeOrStolen on Crunchbase. AI-powered stolen item verification for the $367B secondhand market. Founded by Samuel Pfeiffer. IMEI, VIN, serial number checking."
        keywords="SafeOrStolen Crunchbase, SafeOrStolen company profile, stolen item verification startup, Samuel Pfeiffer founder, secondhand market technology"
        canonical="/crunchbase"
        structuredData={structuredData}
      />

      {/* Comprehensive noscript for crawlers */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
          <header>
            <nav><a href="/">SafeOrStolen</a> &gt; <a href="/about">About</a> &gt; Crunchbase</nav>
          </header>
          <main>
            <h1>SafeOrStolen Company Profile</h1>
            <p>SafeOrStolen is an AI-powered stolen item verification platform serving the $367 billion global secondhand market. The platform checks IMEI numbers, VIN numbers, serial numbers, license plates, and firearm serial numbers against 100+ databases including FBI NCIC, NICB, GSMA, and all 50 state law enforcement systems in approximately 3 seconds.</p>
            
            <h2>Company Overview</h2>
            <ul>
              <li>Founded: 2017 by Samuel Pfeiffer (CEO) and Kelly McEvoy (Co-Founder)</li>
              <li>Headquarters: Peoria, Arizona, USA</li>
              <li>Recognized by OneValley Entrepreneurship World Cup</li>
              <li>Market: $367B global secondhand market (10.7% CAGR)</li>
            </ul>
            
            <h2>What SafeOrStolen Does</h2>
            <p>SafeOrStolen is the "Carfax for Everything" — a universal verification platform that helps buyers and sellers verify items aren't stolen before transacting. The platform is the only verification service with a dedicated mobile app for on-the-spot verification.</p>
            <ul>
              <li>IMEI Verification — smartphones and mobile devices</li>
              <li>VIN Lookup — cars, trucks, motorcycles, boats</li>
              <li>Serial Number Verification — electronics, tools, equipment</li>
              <li>Firearm Serial Number Check — FBI NCIC and ATF databases</li>
              <li>License Plate Lookup — all 50 US states</li>
            </ul>
            
            <h2>Frequently Asked Questions</h2>
            {crunchbaseFaqs.map((faq, i) => (
              <div key={i}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
            
            <h2>Related Links</h2>
            <ul>
              <li><a href="/about">About SafeOrStolen</a></li>
              <li><a href="/verify">Verify Any Item</a></li>
              <li><a href="/pricing">Pricing - $10/mo Unlimited</a></li>
              <li><a href="/data-sources">Our 100+ Data Sources</a></li>
              <li><a href="/app">Download Mobile App</a></li>
            </ul>
            
            <p><a href="https://www.crunchbase.com/organization/safe-or-stolen">View full Crunchbase profile</a></p>
          </main>
        </div>
      </noscript>

      <TopNavigation />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">Crunchbase</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Building2 className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen Company Profile
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              AI-powered trust infrastructure for the $367 billion global secondhand market.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Founded by Samuel Pfeiffer and Kelly McEvoy. Checking 100+ databases in 3 seconds.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitProfile}
              className="gap-2"
              aria-label="View SafeOrStolen profile on Crunchbase"
            >
              <Building2 className="h-5 w-5" aria-hidden="true" />
              View on Crunchbase
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Market Opportunity */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">$367B</p>
                <p className="text-muted-foreground text-sm">
                  Global secondhand market by 2029 with 10.7% annual growth. SafeOrStolen provides critical trust infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">100+</p>
                <p className="text-muted-foreground text-sm">
                  Databases checked simultaneously. AI-powered fraud detection with results in 3 seconds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Recycle className="h-5 w-5 text-primary" />
                  Mobile App
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">Only App</p>
                <p className="text-muted-foreground text-sm">
                  The only stolen item verification platform with a dedicated mobile app for on-the-spot barcode scanning.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Protect buyers and sellers from stolen goods through instant verification. "Check before you buy or sell."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-primary" />
                  Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  All 50 US states. IMEI checks across 200+ countries via GSMA. Vehicle checks via FBI NCIC and NICB.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Backed By
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Recognized by OneValley Entrepreneurship World Cup.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Individual buyers, pawn shops, used car dealers, auction houses, electronics resellers, and FFL gun dealers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">About SafeOrStolen</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
              <p>
                SafeOrStolen is the "Carfax for Everything" — a universal verification platform for the secondhand market. The platform helps buyers avoid purchasing stolen goods and helps sellers prove their items are legitimate.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>IMEI Verification</strong> — Smartphones via GSMA (15B+ records)</li>
                <li><strong>VIN Lookup</strong> — Cars, trucks, motorcycles via NICB and NMVTIS</li>
                <li><strong>Serial Number Verification</strong> — Electronics, tools, equipment</li>
                <li><strong>Firearm Check</strong> — FBI NCIC and ATF eTrace databases</li>
                <li><strong>License Plate Lookup</strong> — All 50 US states</li>
              </ul>
              <p className="mt-4">
                SafeOrStolen is the only verification platform with a dedicated mobile app, offering barcode scanning for instant on-the-spot verification.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {crunchbaseFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card px-6 rounded-lg">
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

          {/* Related Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Explore SafeOrStolen</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/about" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">About Us</h3>
                <p className="text-sm text-muted-foreground">Our team, mission, and story</p>
              </Link>
              <Link to="/verify" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Verify Any Item</h3>
                <p className="text-sm text-muted-foreground">Free stolen item verification</p>
              </Link>
              <Link to="/data-sources" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Our Data Sources</h3>
                <p className="text-sm text-muted-foreground">100+ databases we check</p>
              </Link>
              <Link to="/pricing" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Pricing</h3>
                <p className="text-sm text-muted-foreground">$10/mo unlimited verifications</p>
              </Link>
              <Link to="/app" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Mobile App</h3>
                <p className="text-sm text-muted-foreground">Download for iOS & Android</p>
              </Link>
              <Link to="/for-businesses" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">For Businesses</h3>
                <p className="text-sm text-muted-foreground">Enterprise verification solutions</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Try SafeOrStolen Free</h2>
            <p className="text-muted-foreground mb-6">
              2 free verification checks. No credit card required. Check any IMEI, VIN, or serial number in 3 seconds.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild className="gap-2">
                <Link to="/verify">
                  Verify Now — Free <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleVisitProfile}
                className="gap-2"
              >
                <Building2 className="h-5 w-5" />
                Crunchbase Profile
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CrunchbasePage;