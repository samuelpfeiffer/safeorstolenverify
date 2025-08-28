import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Shield, 
  TrendingDown, 
  Users, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Clock,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CommercialCTA } from '@/components/blog/CommercialCTA';

const BusinessGuidePreventingStolenGoods = () => {
  const businessRisks = [
    {
      risk: "Legal Liability",
      impact: "$50K-$500K per incident",
      description: "Possession of stolen goods carries serious legal consequences",
      icon: AlertTriangle
    },
    {
      risk: "Reputation Damage", 
      impact: "30-60% customer loss",
      description: "News coverage of stolen goods incidents destroys brand trust",
      icon: TrendingDown
    },
    {
      risk: "Inventory Loss",
      impact: "$10K-$100K annually",
      description: "Seized stolen inventory cannot be resold, creating direct losses",
      icon: DollarSign
    },
    {
      risk: "Compliance Violations",
      impact: "Business license risk",
      description: "Regulatory penalties for inadequate verification procedures",
      icon: Building2
    }
  ];

  const solutionBenefits = [
    {
      benefit: "Automated Verification",
      value: "99.8% accuracy rate",
      description: "API integration provides instant verification of serial numbers, IMEIs, and VINs",
      icon: Zap
    },
    {
      benefit: "Risk Reduction",
      value: "95% liability decrease",
      description: "Documented verification process provides legal protection",
      icon: Shield
    },
    {
      benefit: "Cost Savings",
      value: "$25K-$200K annually",
      description: "Prevent losses from seized inventory and legal complications",
      icon: TrendingDown
    },
    {
      benefit: "Compliance Made Easy",
      value: "100% audit-ready",
      description: "Complete paper trail for all verification activities",
      icon: CheckCircle
    }
  ];

  const industryStats = [
    { industry: "Pawn Shops", affected: "78%", avgLoss: "$180K" },
    { industry: "Electronics Resellers", affected: "65%", avgLoss: "$150K" },
    { industry: "Auto Dealers", affected: "45%", avgLoss: "$320K" },
    { industry: "Auction Houses", affected: "38%", avgLoss: "$275K" }
  ];

  const apiFeatures = [
    "Batch verification of 100+ items simultaneously",
    "Real-time API with 99.9% uptime guarantee", 
    "Integration with existing POS and inventory systems",
    "White-label verification reports for customers",
    "24/7 priority support for business customers",
    "Custom alerts for high-risk verification results"
  ];

  return (
    <>
      <PageSEO
        title="Business Guide: Preventing Stolen Goods Liability | Enterprise Solutions"
        description="Protect your business from $200K+ in stolen goods liability. Learn how pawn shops, resellers, and dealers use verification APIs to reduce risk and ensure compliance."
        keywords="business stolen goods prevention, pawn shop verification, reseller liability protection, enterprise verification API, stolen goods compliance, business risk management"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Business Guide: Preventing Stolen Goods Liability",
          "description": "Comprehensive guide for businesses to prevent stolen goods liability",
          "author": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "datePublished": "2024-12-27",
          "dateModified": "2024-12-27"
        }}
      />

      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-sos-orange/10 text-sos-orange border-sos-orange/20">
              <Building2 className="h-4 w-4 mr-2" />
              For Business Owners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stop Losing <span className="text-gradient">$200K+</span> to Stolen Goods
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The complete business guide to preventing stolen goods liability. Used by 500+ businesses to protect inventory, reduce legal risk, and ensure regulatory compliance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sos-orange" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sos-lime" />
                <span>500+ businesses protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Enterprise grade</span>
              </div>
            </div>
          </div>

          {/* The Business Problem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              The Hidden <span className="text-red-400">Business Risk</span>
            </h2>
            <Card className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border-red-500/20 mb-8">
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">The Reality</h3>
                    <p className="text-gray-300 mb-6">
                      Businesses handling secondhand goods face an average of $180,000 in annual losses from stolen goods incidents. This isn't just small-time theft - it's organized crime that can destroy your business overnight.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-400">• 68% of businesses affected annually</div>
                      <div className="text-red-400">• Average incident cost: $180,000</div>
                      <div className="text-red-400">• 1 in 4 businesses close within 2 years</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">Industry Impact</h4>
                    <div className="grid gap-3">
                      {industryStats.map((stat, index) => (
                        <div key={index} className="bg-card/50 p-3 rounded-lg border border-red-500/20">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{stat.industry}</span>
                            <span className="text-xs text-red-400">{stat.affected} affected</span>
                          </div>
                          <div className="text-xs text-gray-400">Avg Loss: {stat.avgLoss}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Business Risks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Four Ways Stolen Goods <span className="text-red-400">Destroy</span> Your Business
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {businessRisks.map((risk, index) => (
                <Card key={index} className="bg-card border-red-500/20 hover:border-red-500/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <risk.icon className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white">{risk.risk}</CardTitle>
                        <div className="text-red-400 font-semibold text-sm">{risk.impact}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{risk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              The <span className="text-sos-lime">Enterprise Solution</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {solutionBenefits.map((solution, index) => (
                <Card key={index} className="bg-card border-sos-lime/20 hover:border-sos-lime/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sos-lime/10 rounded-lg flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-sos-lime" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white">{solution.benefit}</CardTitle>
                        <div className="text-sos-lime font-semibold text-sm">{solution.value}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* API Features */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 border-sos-lime/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Enterprise API Features
                </CardTitle>
                <p className="text-center text-gray-300">
                  Built for businesses that process hundreds of items daily
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-sos-lime flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ROI Calculator */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Calculate Your <span className="text-sos-orange">ROI</span>
            </h2>
            <Card className="bg-card border-border max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">Without Verification</div>
                    <div className="text-sm text-gray-400 mb-4">Annual Risk</div>
                    <div className="space-y-2 text-sm">
                      <div>Legal costs: $50K-$500K</div>
                      <div>Inventory loss: $25K-$100K</div>
                      <div>Reputation damage: $100K+</div>
                      <div className="border-t border-gray-700 pt-2 font-bold text-red-400">
                        Total Risk: $175K-$700K
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sos-orange mb-2">Enterprise Plan</div>
                    <div className="text-sm text-gray-400 mb-4">Annual Investment</div>
                    <div className="space-y-2 text-sm">
                      <div>API subscription: $6K</div>
                      <div>Integration: $2K</div>
                      <div>Training: $1K</div>
                      <div className="border-t border-gray-700 pt-2 font-bold text-sos-orange">
                        Total Investment: $9K
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sos-lime mb-2">Your Savings</div>
                    <div className="text-sm text-gray-400 mb-4">Annual Protection</div>
                    <div className="space-y-2 text-sm">
                      <div>Risk reduction: 95%</div>
                      <div>Compliance: 100%</div>
                      <div>Peace of mind: Priceless</div>
                      <div className="border-t border-gray-700 pt-2 font-bold text-sos-lime">
                        Net Savings: $166K-$691K
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Business Success Stories
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-gradient-to-br from-sos-lime/10 to-green-600/10 border-sos-lime/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="h-8 w-8 text-sos-lime" />
                    <div>
                      <div className="font-semibold">Metro Pawn</div>
                      <div className="text-xs text-gray-400">Chicago, IL</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    "Prevented 12 stolen goods incidents in first year. ROI was 2,400%. The API integration was seamless."
                  </p>
                  <div className="text-xs text-sos-lime font-semibold">Saved: $288K annually</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sos-orange/10 to-red-600/10 border-sos-orange/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="h-8 w-8 text-sos-orange" />
                    <div>
                      <div className="font-semibold">TechResale Pro</div>
                      <div className="text-xs text-gray-400">Austin, TX</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    "Our insurance premiums dropped 40% after implementing verification. Customers trust us more too."
                  </p>
                  <div className="text-xs text-sos-orange font-semibold">Insurance savings: $15K/year</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="h-8 w-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">AutoMax Dealers</div>
                      <div className="text-xs text-gray-400">Miami, FL</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    "Batch verification of 200+ vehicles monthly. Caught 3 stolen cars worth $180K total value."
                  </p>
                  <div className="text-xs text-blue-400 font-semibold">Prevented loss: $180K</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              3-Step Implementation
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border-sos-lime/20 text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-sos-lime/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-sos-lime">1</span>
                  </div>
                  <CardTitle>API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    Our team integrates the verification API with your existing POS or inventory system
                  </p>
                  <div className="text-xs text-sos-lime">Timeline: 1-2 weeks</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-sos-orange/20 text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-sos-orange/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-sos-orange">2</span>
                  </div>
                  <CardTitle>Staff Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    Comprehensive training for your team on verification workflows and compliance procedures
                  </p>
                  <div className="text-xs text-sos-orange">Timeline: 3-5 days</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-blue-500/20 text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-400">3</span>
                  </div>
                  <CardTitle>Go Live</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    Start verifying all inventory with 24/7 monitoring and support from our team
                  </p>
                  <div className="text-xs text-blue-400">Timeline: Immediate</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <CommercialCTA 
            type="business"
            title="Protect Your Business Today"
            description="Join 500+ businesses using enterprise verification to prevent stolen goods liability"
            buttonText="Schedule Enterprise Demo"
            buttonLink="/enterprise-demo"
          />
        </div>
      </div>
    </>
  );
};

export default BusinessGuidePreventingStolenGoods;