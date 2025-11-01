import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, DollarSign, Globe, Smartphone } from 'lucide-react';

export default function SafeOrStolenVsCheckMENDPage() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Pricing Model",
      safeorstolen: "4 FREE searches/month, then $9.99/month unlimited",
      checkmend: "$1.99 per IMEI check (no free option)",
      winner: "safeorstolen"
    },
    {
      feature: "Item Coverage",
      safeorstolen: "Phones, cars, electronics, bikes, jewelry, firearms, tools",
      checkmend: "IMEI/mobile phones only",
      winner: "safeorstolen"
    },
    {
      feature: "Geographic Coverage",
      safeorstolen: "195 countries, global law enforcement databases",
      checkmend: "UK-focused, limited international data",
      winner: "safeorstolen"
    },
    {
      feature: "Database Size",
      safeorstolen: "50M+ records across all item types",
      checkmend: "Limited to mobile device databases",
      winner: "safeorstolen"
    },
    {
      feature: "Mobile App",
      safeorstolen: "Full iOS & Android app with barcode scanning",
      checkmend: "Web-only service",
      winner: "safeorstolen"
    },
    {
      feature: "Verification Speed",
      safeorstolen: "30 seconds average",
      checkmend: "Instant (IMEI only)",
      winner: "tie"
    },
    {
      feature: "Target Audience",
      safeorstolen: "Global consumers, businesses, law enforcement",
      checkmend: "UK consumers, mobile phone buyers",
      winner: "safeorstolen"
    },
    {
      feature: "VIN Verification",
      safeorstolen: "Yes - FREE vehicle checks",
      checkmend: "No - phones only",
      winner: "safeorstolen"
    },
    {
      feature: "Serial Number Lookup",
      safeorstolen: "Yes - electronics, tools, bikes, etc.",
      checkmend: "No",
      winner: "safeorstolen"
    },
    {
      feature: "API Access",
      safeorstolen: "Yes - enterprise API available",
      checkmend: "Yes - but expensive",
      winner: "safeorstolen"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "SafeOrStolen vs CheckMEND Comparison",
    "description": "Comprehensive comparison between SafeOrStolen and CheckMEND for stolen item verification",
    "about": [
      {
        "@type": "Service",
        "name": "SafeOrStolen",
        "description": "Multi-item stolen goods verification platform",
        "offers": {
          "@type": "Offer",
          "price": "9.99",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Service",
        "name": "CheckMEND",
        "description": "IMEI phone verification service",
        "offers": {
          "@type": "Offer",
          "price": "1.99",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMEND: Complete Comparison 2025 | Better Alternative"
        description="SafeOrStolen offers 4 FREE searches covering all item types vs CheckMEND's $1.99/IMEI phone-only checks. Compare features, pricing, and global coverage."
        keywords="SafeOrStolen vs CheckMEND, CheckMEND alternative, free IMEI check, better than CheckMEND, stolen phone checker"
        structuredData={[structuredData]}
      />
      <AISearchOptimizer
        page="comparison"
        primaryKeywords={['SafeOrStolen vs CheckMEND', 'CheckMEND alternative', 'free IMEI check']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-semibold mb-6">
              ✓ SafeOrStolen Wins for Multi-Item Verification
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SafeOrStolen vs CheckMEND:<br />Complete 2025 Comparison
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              CheckMEND is UK-focused and phone-only. SafeOrStolen verifies ALL item types globally with 4 FREE searches per month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Try SafeOrStolen FREE
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                Compare Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Comparison</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Pricing Winner</h3>
                <p className="text-2xl font-bold text-primary mb-2">SafeOrStolen</p>
                <p className="text-sm text-gray-600">4 FREE searches vs $1.99/check</p>
              </Card>

              <Card className="p-6 text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Global Coverage</h3>
                <p className="text-2xl font-bold text-primary mb-2">SafeOrStolen</p>
                <p className="text-sm text-gray-600">195 countries vs UK-focused</p>
              </Card>

              <Card className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Item Types</h3>
                <p className="text-2xl font-bold text-primary mb-2">SafeOrStolen</p>
                <p className="text-sm text-gray-600">All items vs phones only</p>
              </Card>
            </div>

            {/* Detailed Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-center font-bold text-primary">SafeOrStolen</th>
                    <th className="p-4 text-center font-bold">CheckMEND</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4 font-semibold">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === 'safeorstolen' || row.winner === 'tie' ? 'bg-green-50' : ''}`}>
                        {row.safeorstolen}
                        {row.winner === 'safeorstolen' && <CheckCircle className="w-5 h-5 text-green-600 inline ml-2" />}
                      </td>
                      <td className={`p-4 text-center ${row.winner === 'checkmend' ? 'bg-green-50' : 'bg-red-50'}`}>
                        {row.checkmend}
                        {row.winner === 'checkmend' && <CheckCircle className="w-5 h-5 text-green-600 inline ml-2" />}
                        {row.winner === 'safeorstolen' && <XCircle className="w-5 h-5 text-red-600 inline ml-2" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">When to Use Each Service</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Choose SafeOrStolen If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Need to verify ANY item type (phones, cars, bikes, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Want 4 FREE searches per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Need global coverage (not just UK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Want a mobile app with scanning features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Prefer unlimited monthly plans over per-check fees</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-gray-300">
                <h3 className="text-xl font-bold mb-4">Choose CheckMEND If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Only verify mobile phones (IMEI checks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Primarily operate in the UK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Need one-off checks occasionally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Don't need vehicle or other item verification</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "I switched from CheckMEND to SafeOrStolen and couldn't be happier. I can now verify cars, laptops, AND phones all in one place. The 4 free searches sealed the deal!"
                </p>
                <p className="font-semibold">— Marcus T., Los Angeles</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "CheckMEND was great for phones, but SafeOrStolen covers everything. I use it for my pawn shop to verify all incoming items."
                </p>
                <p className="font-semibold">— Jennifer R., Dallas</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Switch to SafeOrStolen?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start with 4 FREE verifications. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Get 4 Free Searches
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/pricing')}
                className="bg-white/10 hover:bg-white/20 border-white text-white"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
