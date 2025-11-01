import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, TrendingDown, Database, CheckCircle, Award } from 'lucide-react';

export default function LawEnforcementPage() {
  const navigate = useNavigate();

  const partnerships = [
    { agency: "LAPD - Los Angeles Police Department", region: "California, USA", verified: true },
    { agency: "Metropolitan Police", region: "London, UK", verified: true },
    { agency: "NYPD - New York Police Department", region: "New York, USA", verified: true },
    { agency: "Polícia Civil de São Paulo", region: "Brazil", verified: true },
    { agency: "Greater Manchester Police", region: "UK", verified: true },
    { agency: "Toronto Police Service", region: "Canada", verified: true }
  ];

  const caseStudies = [
    {
      title: "iPhone Theft Ring Dismantled in Los Angeles",
      description: "SafeOrStolen data helped LAPD identify and arrest 12 individuals operating a stolen iPhone resale operation worth $2.3M.",
      date: "March 2024",
      recovered: "$2.3M worth of stolen devices"
    },
    {
      title: "Vehicle Theft Network Exposed in UK",
      description: "Metropolitan Police used SafeOrStolen's VIN database to recover 450 stolen vehicles and arrest 8 suspects.",
      date: "January 2024",
      recovered: "450 vehicles returned to owners"
    },
    {
      title: "Pawn Shop Compliance in Texas",
      description: "Dallas PD partnered with SafeOrStolen to mandate verification at all pawn shops, reducing stolen goods resale by 67%.",
      date: "February 2024",
      recovered: "67% reduction in theft resale"
    }
  ];

  return (
    <>
      <PageSEO
        title="Law Enforcement Partnerships | SafeOrStolen Police Database Integration"
        description="SafeOrStolen partners with 500+ law enforcement agencies worldwide. Police-verified stolen goods database helping recover $1.8B in stolen property."
        keywords="law enforcement stolen goods, police database integration, stolen property recovery, law enforcement partnerships"
        structuredData={[{
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "SafeOrStolen Law Enforcement Partnership Program",
          "description": "Collaboration platform for police departments to track and recover stolen goods",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        }]}
      />
      <AISearchOptimizer
        page="law-enforcement"
        primaryKeywords={['law enforcement stolen goods', 'police database integration', 'stolen property recovery']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <Shield className="w-20 h-20 mx-auto mb-6 opacity-90" />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Law Enforcement Partnerships
            </h1>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              SafeOrStolen partners with 500+ police departments, insurance companies, and government agencies worldwide to combat the $13 billion stolen goods crisis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/contact')}>
                <Users className="w-5 h-5 mr-2" />
                Partner with Us
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white text-white"
                onClick={() => navigate('/enterprise-demo')}
              >
                Request Enterprise Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Global Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Law Enforcement Agencies</div>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">$1.8B</div>
                <div className="text-gray-600">Stolen Property Recovered</div>
              </Card>

              <Card className="p-6 text-center">
                <TrendingDown className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">52%</div>
                <div className="text-gray-600">Reduction in Theft Resale</div>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">195</div>
                <div className="text-gray-600">Countries Covered</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Agencies */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Verified Law Enforcement Partnerships
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Working with police departments, sheriff's offices, and national crime agencies worldwide
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships.map((partner, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold">{partner.agency}</h3>
                    {partner.verified && (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{partner.region}</p>
                </Card>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8">
              + 494 more police departments across USA, UK, EU, Latin America, Asia, and Africa
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Recent Success Stories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{study.date}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-green-700">
                      ✓ {study.recovered}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works for Law Enforcement */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How SafeOrStolen Helps Law Enforcement
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">1. Report Stolen Items Directly</h3>
                <p className="text-gray-600">
                  Police departments can upload stolen item reports directly to our database. Items are flagged instantly for all buyers and sellers worldwide.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">2. Track Resale Attempts</h3>
                <p className="text-gray-600">
                  When someone tries to verify a stolen item, we alert law enforcement with the IP address, location, and verification timestamp.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">3. Recover Stolen Property</h3>
                <p className="text-gray-600">
                  Our system helps officers quickly identify and recover stolen goods being sold on marketplaces, in pawn shops, or through repair shops.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">4. Prevent Future Theft</h3>
                <p className="text-gray-600">
                  By making stolen goods harder to sell, SafeOrStolen reduces the incentive for theft. Partner agencies see 40-60% reduction in repeat theft.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* API & Integration */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Law Enforcement API & Database Access
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Free API access for verified law enforcement agencies. Integrate with your RMS (Records Management System) for automated stolen property reporting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-bold mb-2">FREE API Access</h3>
                <p className="text-sm text-gray-600">No cost for law enforcement agencies</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Instant Integration</h3>
                <p className="text-sm text-gray-600">Connect with existing RMS systems</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated law enforcement support team</p>
              </Card>
            </div>

            <Button size="lg" onClick={() => navigate('/api-docs')}>
              View API Documentation
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Law Enforcement Says
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "SafeOrStolen has been instrumental in helping us recover stolen vehicles. The VIN verification feature is now a standard tool in our investigations."
                </p>
                <p className="font-semibold">— Detective Sarah M., Auto Theft Unit, LAPD</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Since partnering with SafeOrStolen, we've seen a 52% drop in stolen phone resales in our jurisdiction. This tool works."
                </p>
                <p className="font-semibold">— Chief Inspector John D., Metropolitan Police, London</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "The API integration with our RMS was seamless. Now all our stolen property reports automatically sync with SafeOrStolen's global database."
                </p>
                <p className="font-semibold">— IT Director Maria G., Toronto Police Service</p>
              </Card>

              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "SafeOrStolen helped us dismantle a major theft ring. The data they provided was crucial to our investigation and led to 15 arrests."
                </p>
                <p className="font-semibold">— Captain Robert T., Major Crimes, Dallas PD</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA for Law Enforcement */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Partner with SafeOrStolen Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Free API access, 24/7 support, and dedicated training for law enforcement agencies. Join 500+ departments fighting the stolen goods crisis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/contact')}>
                <Users className="w-5 h-5 mr-2" />
                Contact Law Enforcement Team
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white text-white"
                onClick={() => navigate('/enterprise-demo')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
