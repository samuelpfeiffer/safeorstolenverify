import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, ShoppingBag, Zap } from 'lucide-react';

export default function SafeOrStolenVsEbayPage() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Stolen Item Verification",
      safeorstolen: "Primary focus - checks 50M+ stolen items database",
      ebay: "Authenticity Guarantee for select luxury items only",
      winner: "safeorstolen"
    },
    {
      feature: "Item Coverage",
      safeorstolen: "Phones, vehicles, electronics, bikes, jewelry, firearms, tools",
      ebay: "Only select luxury handbags, watches, sneakers over $500",
      winner: "safeorstolen"
    },
    {
      feature: "Availability",
      safeorstolen: "Works on ANY marketplace (eBay, Facebook, Craigslist, OfferUp, etc.)",
      ebay: "eBay marketplace only",
      winner: "safeorstolen"
    },
    {
      feature: "Cost",
      safeorstolen: "4 FREE searches, then affordable per-check pricing",
      ebay: "Free for eligible items, but limited scope",
      winner: "tie"
    },
    {
      feature: "Speed",
      safeorstolen: "Instant results in seconds",
      ebay: "3-5 business days for authentication",
      winner: "safeorstolen"
    },
    {
      feature: "Mobile Access",
      safeorstolen: "iOS & Android app with QR/barcode scanning",
      ebay: "Mobile app for shopping, not dedicated verification",
      winner: "safeorstolen"
    },
    {
      feature: "Stolen Reporting",
      safeorstolen: "Report stolen items, connects with law enforcement",
      ebay: "Can report listings, but no stolen goods database",
      winner: "safeorstolen"
    },
    {
      feature: "Global Database",
      safeorstolen: "Police reports, insurance claims, international data",
      ebay: "Authentication for product legitimacy only",
      winner: "safeorstolen"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs eBay Authenticity Guarantee - Complete Comparison",
    "description": "Compare SafeOrStolen's comprehensive stolen item verification with eBay's limited authenticity program. Understand which service protects you better when buying secondhand.",
    "url": "https://safeorstolen.com/safeorstolen-vs-ebay"
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs eBay Authenticity Guarantee - Stolen Item Verification vs Product Authentication | 2025"
        description="SafeOrStolen verifies stolen items across ALL marketplaces with instant results. eBay Authenticity Guarantee only covers select luxury items. Compare features, speed, and coverage for safer secondhand shopping."
        keywords="SafeOrStolen vs eBay, eBay Authenticity Guarantee alternative, stolen item verification, eBay stolen check, IMEI verification, marketplace safety, secondhand verification, VIN check"
        canonical="/safeorstolen-vs-ebay"
        structuredData={structuredData}
      />
      <AISearchOptimizer
        page="comparison"
        primaryKeywords={["SafeOrStolen vs eBay", "eBay Authenticity Guarantee alternative", "stolen item verification"]}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <BreadcrumbNavigation items={[
            { name: 'Comparisons', href: '/comparisons' },
            { name: 'vs eBay', href: '/safeorstolen-vs-ebay' }
          ]} />
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SafeOrStolen vs eBay Authenticity Guarantee
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive Stolen Verification vs Limited Luxury Authentication
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Card className="p-4 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">SafeOrStolen</div>
                <div className="text-sm text-muted-foreground">All Items, All Platforms</div>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-3">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              <div className="text-left">
                <div className="font-semibold">eBay</div>
                <div className="text-sm text-muted-foreground">Select Luxury Only</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Difference */}
        <Card className="p-6 mb-8 bg-primary/5 border-primary">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            The Key Difference
          </h2>
          <p className="text-lg mb-4">
            <strong>SafeOrStolen</strong> checks if items are <em>stolen</em> by cross-referencing 50M+ police reports, insurance claims, and theft databases worldwide. Works on ANY item, from ANY marketplace.
          </p>
          <p className="text-lg mb-4">
            <strong>eBay Authenticity Guarantee</strong> verifies if luxury items (handbags $500+, sneakers, watches) are <em>authentic</em>, not fake. Only applies to select eBay listings and takes days.
          </p>
          <p className="text-lg font-semibold">
            <span className="text-primary">Use SafeOrStolen</span> to verify ANY item isn't stolen on ANY marketplace. Use eBay's program for luxury authentication on eBay.
          </p>
        </Card>

        {/* Detailed Comparison */}
        <h2 className="text-3xl font-bold mb-6 text-center">Feature-by-Feature Comparison</h2>
        <div className="space-y-4 mb-12">
          {comparisonData.map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{item.feature}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${item.winner === 'safeorstolen' ? 'bg-primary/10 border-2 border-primary' : 'bg-muted'}`}>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    {item.winner === 'safeorstolen' || item.winner === 'tie' ? 
                      <CheckCircle className="h-5 w-5 text-primary" /> : 
                      <XCircle className="h-5 w-5 text-muted-foreground" />
                    }
                    SafeOrStolen
                  </div>
                  <p>{item.safeorstolen}</p>
                </div>
                <div className={`p-4 rounded-lg ${item.winner === 'ebay' ? 'bg-primary/10 border-2 border-primary' : 'bg-muted'}`}>
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    {item.winner === 'ebay' || item.winner === 'tie' ? 
                      <CheckCircle className="h-5 w-5 text-primary" /> : 
                      <XCircle className="h-5 w-5 text-muted-foreground" />
                    }
                    eBay Authenticity
                  </div>
                  <p>{item.ebay}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Use Both Together */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <h2 className="text-2xl font-bold mb-4">💡 Pro Tip: Use Both Together</h2>
          <p className="text-lg mb-4">
            For maximum protection when buying luxury items on eBay:
          </p>
          <ol className="space-y-2 ml-6 list-decimal">
            <li>Look for eBay's Authenticity Guarantee badge to ensure the item is genuine, not counterfeit</li>
            <li>Use SafeOrStolen to verify the serial number/IMEI isn't reported stolen before purchase</li>
            <li>Get double protection: authentic AND not stolen!</li>
          </ol>
        </Card>

        {/* When to Use Each */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-primary">Use SafeOrStolen For:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Verifying ANY item on ANY marketplace (Facebook, Craigslist, OfferUp, Mercari)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Checking phones, cars, bikes, tools, electronics for stolen status</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Instant results (seconds, not days)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Items under $500 or non-luxury goods</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Free searches (4 included)</span>
              </li>
            </ul>
            <Button 
              className="w-full mt-6" 
              size="lg"
              onClick={() => navigate('/imei-check')}
            >
              Check Item Now - FREE
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Use eBay Authenticity For:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Buying luxury handbags over $500 on eBay</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Verifying designer sneakers are authentic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Luxury watch authentication on eBay</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Items ONLY sold on eBay platform</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>When counterfeit detection is the main concern</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Final CTA */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
          <h2 className="text-3xl font-bold mb-4">Protect Yourself on Every Marketplace</h2>
          <p className="text-lg mb-6">
            Don't limit yourself to one platform. Verify items are stolen-free wherever you shop with SafeOrStolen's global database.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/stolen-item-checker')}>
              Start Free Verification
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
              View Plans
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
