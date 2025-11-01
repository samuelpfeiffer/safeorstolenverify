import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, DollarSign, Database, Zap } from 'lucide-react';

export default function SafeOrStolenVsIMEIproPage() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Pricing",
      safeorstolen: "4 FREE searches, then $9.99/month unlimited",
      imeipro: "Paid service from $1/check (no free tier)",
      winner: "safeorstolen"
    },
    {
      feature: "Item Types",
      safeorstolen: "Phones, cars, bikes, electronics, jewelry, tools",
      imeipro: "IMEI phone checks only",
      winner: "safeorstolen"
    },
    {
      feature: "Database Size",
      safeorstolen: "50M+ global stolen item records",
      imeipro: "Limited to carrier and manufacturer databases",
      winner: "safeorstolen"
    },
    {
      feature: "Mobile App",
      safeorstolen: "iOS & Android with QR/barcode scanning",
      imeipro: "Web-based only",
      winner: "safeorstolen"
    },
    {
      feature: "Police Database Access",
      safeorstolen: "Yes - law enforcement partnerships globally",
      imeipro: "No - carrier data only",
      winner: "safeorstolen"
    },
    {
      feature: "VIN Verification",
      safeorstolen: "Yes - FREE vehicle checks",
      imeipro: "No",
      winner: "safeorstolen"
    },
    {
      feature: "International Coverage",
      safeorstolen: "195 countries",
      imeipro: "Limited international data",
      winner: "safeorstolen"
    },
    {
      feature: "API Access",
      safeorstolen: "Enterprise API with bulk verification",
      imeipro: "API available (expensive)",
      winner: "safeorstolen"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs IMEIpro: Which IMEI Checker is Better? 2025"
        description="Compare SafeOrStolen's 4 FREE multi-item searches vs IMEIpro's paid IMEI-only checks. See why 100K+ users switched to SafeOrStolen."
        keywords="SafeOrStolen vs IMEIpro, IMEIpro alternative, free IMEI check, better than IMEIpro"
        structuredData={[{
          "@context": "https://schema.org",
          "@type": "ComparisonTable",
          "name": "SafeOrStolen vs IMEIpro",
          "description": "Feature comparison between SafeOrStolen and IMEIpro"
        }]}
      />
      <AISearchOptimizer
        page="comparison"
        primaryKeywords={['SafeOrStolen vs IMEIpro', 'IMEIpro alternative', 'free IMEI database']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-semibold mb-6">
              ✓ SafeOrStolen Wins for Value & Multi-Item Verification
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SafeOrStolen vs IMEIpro:<br />Complete 2025 Comparison
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              IMEIpro only checks phones. SafeOrStolen verifies phones, cars, electronics, and more with 4 FREE searches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Try SafeOrStolen FREE
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                See Pricing
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Better Value</h3>
                <p className="text-2xl font-bold text-primary mb-2">SafeOrStolen</p>
                <p className="text-sm text-gray-600">4 FREE searches included</p>
              </Card>

              <Card className="p-6 text-center">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Larger Database</h3>
                <p className="text-2xl font-bold text-primary mb-2">SafeOrStolen</p>
                <p className="text-sm text-gray-600">50M+ vs limited carrier data</p>
              </Card>

              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">More Item Types</h3>
                <p className="text-2xl font-bold text-primary mb-2">SafeOrStolen</p>
                <p className="text-sm text-gray-600">All items vs phones only</p>
              </Card>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-center font-bold text-primary">SafeOrStolen</th>
                    <th className="p-4 text-center font-bold">IMEIpro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4 font-semibold">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === 'safeorstolen' ? 'bg-green-50' : ''}`}>
                        {row.safeorstolen}
                        {row.winner === 'safeorstolen' && <CheckCircle className="w-5 h-5 text-green-600 inline ml-2" />}
                      </td>
                      <td className={`p-4 text-center ${row.winner === 'imeipro' ? 'bg-green-50' : 'bg-red-50'}`}>
                        {row.imeipro}
                        {row.winner === 'safeorstolen' && <XCircle className="w-5 h-5 text-red-600 inline ml-2" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Using SafeOrStolen Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Get 4 FREE verifications. More features. Better protection. No credit card required.
            </p>
            <Button size="lg" variant="secondary" onClick={() => navigate('/verify')}>
              <Shield className="w-5 h-5 mr-2" />
              Get Started FREE
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
