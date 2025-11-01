import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, ShoppingCart, Globe } from 'lucide-react';

export default function SafeOrStolenVsSwappaPage() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      feature: "Primary Purpose",
      safeorstolen: "Universal stolen item verification for ANY marketplace",
      swappa: "Marketplace platform with limited verification",
      winner: "safeorstolen"
    },
    {
      feature: "Works Everywhere",
      safeorstolen: "Facebook, Craigslist, eBay, OfferUp, in-person sales",
      swappa: "Only on Swappa marketplace",
      winner: "safeorstolen"
    },
    {
      feature: "Item Coverage",
      safeorstolen: "Phones, cars, electronics, bikes, jewelry, tools",
      swappa: "Smartphones and tablets only",
      winner: "safeorstolen"
    },
    {
      feature: "Stolen Verification",
      safeorstolen: "50M+ police/insurance stolen item database",
      swappa: "Basic ESN/IMEI check only",
      winner: "safeorstolen"
    },
    {
      feature: "Independent Service",
      safeorstolen: "Verify before buying anywhere",
      swappa: "Must buy through Swappa platform",
      winner: "safeorstolen"
    },
    {
      feature: "Pricing",
      safeorstolen: "4 FREE searches, then $9.99/month unlimited",
      swappa: "Free on Swappa, but limited to their marketplace",
      winner: "safeorstolen"
    },
    {
      feature: "Mobile App",
      safeorstolen: "Full iOS/Android app with scanning",
      swappa: "iOS/Android app (marketplace only)",
      winner: "safeorstolen"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Swappa: Universal Verification vs Marketplace-Only"
        description="Swappa only verifies items sold on their platform. SafeOrStolen works on ANY marketplace—Facebook, Craigslist, eBay, OfferUp, and in-person sales."
        keywords="SafeOrStolen vs Swappa, Swappa verification, universal IMEI check, verify before Swappa"
        structuredData={[{
          "@context": "https://schema.org",
          "@type": "ComparisonTable",
          "name": "SafeOrStolen vs Swappa"
        }]}
      />
      <AISearchOptimizer
        page="comparison"
        primaryKeywords={['SafeOrStolen vs Swappa', 'Swappa verification tool', 'universal phone verification']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-semibold mb-6">
              ✓ SafeOrStolen Works on ALL Marketplaces
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SafeOrStolen vs Swappa:<br />Universal Verification vs Marketplace-Only
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Swappa only verifies items on their platform. SafeOrStolen works EVERYWHERE—Facebook, Craigslist, eBay, OfferUp, and in-person.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Verify Anywhere with SafeOrStolen
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')}>
                See How It Works
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Differences</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6">
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-4">SafeOrStolen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Works on ANY marketplace (Facebook, Craigslist, eBay, OfferUp)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Verifies in-person sales (yard sales, Meetup.com, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>ALL item types: phones, cars, bikes, electronics, jewelry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>50M+ stolen item database (police + insurance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>4 FREE searches per month</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-gray-300">
                <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-4">Swappa</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Only works on Swappa marketplace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Cannot verify Facebook Marketplace or Craigslist items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Smartphones and tablets only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Basic ESN/IMEI check (no stolen database)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>Free (but only on their platform)</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-center font-bold text-primary">SafeOrStolen</th>
                    <th className="p-4 text-center font-bold">Swappa</th>
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
                      <td className="p-4 text-center bg-red-50">
                        {row.swappa}
                        <XCircle className="w-5 h-5 text-red-600 inline ml-2" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">The Bottom Line</h2>
            <p className="text-xl text-gray-600 mb-6">
              <strong>Swappa is great if you only buy phones on their marketplace.</strong>
            </p>
            <p className="text-xl text-gray-600 mb-6">
              <strong>SafeOrStolen is essential if you buy anywhere else</strong>—Facebook Marketplace, Craigslist, eBay, OfferUp, yard sales, or from friends.
            </p>
            <p className="text-lg text-gray-600">
              SafeOrStolen also verifies cars, bikes, electronics, jewelry, and more. Swappa can't do that.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Your Purchases Everywhere</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't limit yourself to one marketplace. Verify items anywhere with SafeOrStolen.
            </p>
            <Button size="lg" variant="secondary" onClick={() => navigate('/verify')}>
              <Shield className="w-5 h-5 mr-2" />
              Start Free Verification
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
