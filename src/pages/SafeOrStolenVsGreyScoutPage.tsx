import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, DollarSign, Globe, Users } from 'lucide-react';

export default function SafeOrStolenVsGreyScoutPage() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Primary Focus",
      safeorstolen: "Global stolen item verification for consumers & resellers",
      greyscout: "Brand protection for manufacturers against grey market",
      winner: "safeorstolen"
    },
    {
      feature: "Target Audience",
      safeorstolen: "Individual buyers, sellers, marketplace users worldwide",
      greyscout: "Large brands, manufacturers, legal teams only",
      winner: "safeorstolen"
    },
    {
      feature: "Consumer Access",
      safeorstolen: "4 FREE searches, instant verification for anyone",
      greyscout: "Enterprise-only, no consumer access",
      winner: "safeorstolen"
    },
    {
      feature: "Pricing",
      safeorstolen: "FREE for consumers + affordable plans",
      greyscout: "Enterprise pricing (tens of thousands annually)",
      winner: "safeorstolen"
    },
    {
      feature: "Item Coverage",
      safeorstolen: "Phones, vehicles, electronics, bikes, jewelry, firearms, tools",
      greyscout: "Brand authenticity, unauthorized sellers only",
      winner: "safeorstolen"
    },
    {
      feature: "Database",
      safeorstolen: "50M+ stolen items, police reports, insurance claims",
      greyscout: "Marketplace monitoring, not stolen goods database",
      winner: "safeorstolen"
    },
    {
      feature: "Mobile App",
      safeorstolen: "iOS & Android with scan-to-verify",
      greyscout: "No consumer mobile app",
      winner: "safeorstolen"
    },
    {
      feature: "Global Reach",
      safeorstolen: "Available worldwide for any user",
      greyscout: "Enterprise clients only",
      winner: "safeorstolen"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs GreyScout - Consumer Verification vs Brand Protection",
    "description": "SafeOrStolen offers free global stolen item verification for consumers, while GreyScout serves enterprise brand protection. Compare features, pricing, and accessibility.",
    "url": "https://safeorstolen.com/safeorstolen-vs-greyscout"
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs GreyScout - Consumer Stolen Item Verification vs Brand Protection | 2025"
        description="SafeOrStolen provides FREE stolen item verification for consumers worldwide with 50M+ database. GreyScout focuses on enterprise brand protection. Compare features, pricing, and which service fits your needs."
        keywords="SafeOrStolen vs GreyScout, GreyScout alternative, consumer verification, stolen item checker, brand protection, grey market monitoring, IMEI check, VIN verification, marketplace authentication"
        canonical="https://safeorstolen.com/safeorstolen-vs-greyscout"
        structuredData={structuredData}
      />
      <AISearchOptimizer
        page="comparison"
        primaryKeywords={["SafeOrStolen vs GreyScout", "GreyScout alternative for consumers", "stolen item verification vs brand protection"]}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <BreadcrumbNavigation items={[
            { name: 'Comparisons', href: '/comparisons' },
            { name: 'vs GreyScout', href: '/safeorstolen-vs-greyscout' }
          ]} />
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SafeOrStolen vs GreyScout
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Consumer Stolen Item Verification vs Enterprise Brand Protection
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Card className="p-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">SafeOrStolen</div>
                <div className="text-sm text-muted-foreground">For Everyone</div>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3">
              <Shield className="h-8 w-8 text-muted-foreground" />
              <div className="text-left">
                <div className="font-semibold">GreyScout</div>
                <div className="text-sm text-muted-foreground">Enterprise Only</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Winner */}
        <Card className="p-6 mb-8 bg-primary/5 border-primary">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            Different Services for Different Needs
          </h2>
          <p className="text-lg mb-4">
            <strong>SafeOrStolen</strong> is designed for individual buyers and sellers who need to verify if items are stolen before purchasing or selling secondhand goods. 
          </p>
          <p className="text-lg mb-4">
            <strong>GreyScout</strong> is an enterprise-only brand protection platform for manufacturers monitoring unauthorized sellers and grey market activity across marketplaces.
          </p>
          <p className="text-lg font-semibold">
            If you're a consumer or reseller checking for stolen items, <span className="text-primary">SafeOrStolen is your solution</span> – GreyScout doesn't serve this market.
          </p>
        </Card>

        {/* Detailed Comparison Table */}
        <h2 className="text-3xl font-bold mb-6 text-center">Feature-by-Feature Comparison</h2>
        <div className="space-y-4 mb-12">
          {comparisonData.map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{item.feature}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${item.winner === 'safeorstolen' ? 'bg-primary/10 border-2 border-primary' : 'bg-muted'}`}>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    {item.winner === 'safeorstolen' ? 
                      <CheckCircle className="h-5 w-5 text-primary" /> : 
                      <XCircle className="h-5 w-5 text-muted-foreground" />
                    }
                    SafeOrStolen
                  </div>
                  <p>{item.safeorstolen}</p>
                </div>
                <div className={`p-4 rounded-lg ${item.winner === 'greyscout' ? 'bg-primary/10 border-2 border-primary' : 'bg-muted'}`}>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    {item.winner === 'greyscout' ? 
                      <CheckCircle className="h-5 w-5 text-primary" /> : 
                      <XCircle className="h-5 w-5 text-muted-foreground" />
                    }
                    GreyScout
                  </div>
                  <p>{item.greyscout}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* When to Use Each */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-primary">Choose SafeOrStolen If:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>You're buying or selling used items on marketplaces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>You need to verify if a phone, car, or electronic is stolen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>You want FREE verification checks (4 free searches)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>You're a pawn shop, reseller, or repair business</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>You need instant results via mobile app</span>
              </li>
            </ul>
            <Button 
              className="w-full mt-6" 
              size="lg"
              onClick={() => navigate('/imei-check')}
            >
              Start Free Verification
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Choose GreyScout If:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You're a major brand manufacturer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You need to monitor unauthorized sellers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You have enterprise-level budget (tens of thousands/year)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You need legal team support for IP enforcement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You're combating grey market distribution</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Final CTA */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
          <h2 className="text-3xl font-bold mb-4">Ready to Verify Your Items?</h2>
          <p className="text-lg mb-6">
            Get started with SafeOrStolen's free stolen item verification. Protect yourself when buying or selling secondhand goods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/imei-check')}>
              Check IMEI Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/vin-verification')}>
              Verify VIN
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
