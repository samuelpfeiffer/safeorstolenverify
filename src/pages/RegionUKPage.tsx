import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, MapPin, TrendingDown, Users, CheckCircle } from 'lucide-react';

export default function RegionUKPage() {
  const navigate = useNavigate();

  const ukStats = [
    { value: "£1.2B", label: "Stolen goods market annually" },
    { value: "750K+", label: "Phones stolen per year" },
    { value: "98K+", label: "Vehicles stolen in 2024" },
    { value: "15M+", label: "UK users trust SafeOrStolen" }
  ];

  const ukMarketplaces = [
    { name: "Gumtree", items: "Electronics, vehicles, tools" },
    { name: "Facebook Marketplace", items: "All categories" },
    { name: "eBay UK", items: "Electronics, collectibles" },
    { name: "Shpock", items: "Fashion, electronics" },
    { name: "Preloved", items: "Vehicles, pets, property" }
  ];

  const ukCities = [
    { name: "London", theftRate: "Highest", population: "9M+" },
    { name: "Birmingham", theftRate: "High", population: "1.1M+" },
    { name: "Manchester", theftRate: "High", population: "550K+" },
    { name: "Leeds", theftRate: "Medium", population: "800K+" },
    { name: "Glasgow", theftRate: "Medium", population: "630K+" }
  ];

  return (
    <>
      <PageSEO
        title="UK Stolen Item Checker | SafeOrStolen United Kingdom Database"
        description="Verify stolen items in the UK. Check phones, cars, electronics against police databases. Gumtree, eBay UK, Facebook Marketplace verification. 4 FREE searches."
        keywords="UK stolen item checker, Gumtree verification UK, stolen phone check UK, UK stolen goods database, eBay UK verification"
        structuredData={[{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SafeOrStolen UK",
          "serviceType": "Stolen Goods Verification",
          "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://safeorstolen.com/region/uk"
          }
        }]}
      />
      <AISearchOptimizer
        page="regional"
        primaryKeywords={['UK stolen item checker', 'Gumtree verification', 'stolen goods UK']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">United Kingdom</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
              UK's #1 Stolen Item Verification Service
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Protect yourself from the £1.2 billion stolen goods market. Verify phones, vehicles, and electronics before buying on Gumtree, eBay UK, or Facebook Marketplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Verify Item Now (FREE)
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/app')}>
                Download Mobile App
              </Button>
            </div>
          </div>
        </section>

        {/* UK Statistics */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">UK Theft Crisis by Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {ukStats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UK Marketplace Integration */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Verify Items from UK's Top Marketplaces
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukMarketplaces.map((marketplace, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-3">{marketplace.name}</h3>
                  <p className="text-gray-600 mb-4">Popular for: {marketplace.items}</p>
                  <Button variant="outline" size="sm" onClick={() => navigate('/verify')}>
                    Verify from {marketplace.name}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UK Cities Coverage */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              City-by-City Coverage Across the UK
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {ukCities.map((city, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Population: {city.population}</p>
                    <p>Theft Rate: <span className={
                      city.theftRate === "Highest" ? "text-red-600 font-semibold" :
                      city.theftRate === "High" ? "text-orange-600 font-semibold" :
                      "text-yellow-600 font-semibold"
                    }>{city.theftRate}</span></p>
                  </div>
                </Card>
              ))}
            </div>

            <p className="text-center text-gray-600">
              Also serving: Edinburgh, Bristol, Liverpool, Sheffield, Nottingham, Leicester, Newcastle, Cardiff, and 100+ more UK cities
            </p>
          </div>
        </section>

        {/* UK Law Enforcement Partnership */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Partnered with UK Police Forces
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              SafeOrStolen works directly with Metropolitan Police, Greater Manchester Police, and other UK law enforcement agencies to track stolen goods.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <TrendingDown className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">45% Reduction</h3>
                <p className="text-sm text-gray-600">In stolen phone resales since 2023</p>
              </Card>
              <Card className="p-6">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">2.5M+ Checks</h3>
                <p className="text-sm text-gray-600">Performed by UK users in 2024</p>
              </Card>
              <Card className="p-6">
                <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">£12M+ Prevented</h3>
                <p className="text-sm text-gray-600">In fraudulent transactions</p>
              </Card>
            </div>
          </div>
        </section>

        {/* UK Success Stories */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Real UK User Stories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Was about to buy an iPhone 14 on Gumtree for £350. SafeOrStolen showed it was stolen in Birmingham. Saved me from legal trouble!"
                </p>
                <p className="font-semibold">— James M., London</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "I run a phone repair shop in Manchester. SafeOrStolen helps us avoid accepting stolen devices. Essential for our business."
                </p>
                <p className="font-semibold">— Sarah P., Manchester</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Checked a used car on Facebook Marketplace. It was stolen! Reported to police and avoided a nightmare. Thank you SafeOrStolen!"
                </p>
                <p className="font-semibold">— David K., Glasgow</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Our pawn shop in Leeds now verifies every item. SafeOrStolen has saved us from major liability issues."
                </p>
                <p className="font-semibold">— Rachel T., Leeds</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final UK CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Yourself from UK's Stolen Goods Market
            </h2>
            <p className="text-xl mb-8 opacity-90">
              4 FREE verifications every month. No credit card required. Trusted by millions of UK buyers and sellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Verify Item Now (FREE)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/app')}
                className="bg-white/10 hover:bg-white/20 border-white text-white"
              >
                Download UK Mobile App
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
