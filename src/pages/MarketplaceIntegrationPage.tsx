import React from 'react';
import { ComprehensiveSEO } from '@/components/seo/ComprehensiveSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Zap, 
  Globe, 
  Users,
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  Crown,
  Target,
  Building,
  Rocket,
  Star,
  Code,
  Database
} from 'lucide-react';

const MarketplaceIntegrationPage: React.FC = () => {
  const majorMarketplaces = [
    {
      name: "Facebook Marketplace",
      logo: "🔵",
      users: "1.2B+",
      problem: "$2.1B fraud losses annually",
      solution: "Pre-listing verification prevents stolen goods",
      integration: "Widget + API integration"
    },
    {
      name: "Craigslist", 
      logo: "📋",
      users: "50M+",
      problem: "$890M fraud losses annually",
      solution: "Instant verification at posting",
      integration: "Custom embed solution"
    },
    {
      name: "OfferUp",
      logo: "🛒", 
      users: "44M+",
      problem: "$340M fraud losses annually",
      solution: "Buyer/seller protection verification",
      integration: "Native app integration"
    },
    {
      name: "Mercari",
      logo: "📦",
      users: "50M+", 
      problem: "$410M fraud losses annually",
      solution: "Authentication badge system",
      integration: "API-first integration"
    },
    {
      name: "Poshmark",
      logo: "👗",
      users: "80M+",
      problem: "$230M fraud losses annually", 
      solution: "Luxury goods authentication",
      integration: "Premium verification layer"
    },
    {
      name: "Vinted",
      logo: "👕",
      users: "75M+",
      problem: "$180M fraud losses annually",
      solution: "European compliance verification", 
      integration: "GDPR-compliant API"
    }
  ];

  const integrationMethods = [
    {
      icon: Code,
      title: "API Integration",
      description: "Direct API calls for instant verification. Perfect for high-volume marketplaces.",
      features: ["Real-time verification", "Bulk processing", "Custom responses", "99.99% uptime"],
      bestFor: "Large marketplaces, enterprise platforms"
    },
    {
      icon: Smartphone,
      title: "Widget Embed",
      description: "Simple JavaScript widget that embeds directly into your listing pages.",
      features: ["One-line integration", "Customizable UI", "Mobile responsive", "Zero maintenance"],
      bestFor: "Quick implementation, smaller platforms"
    },
    {
      icon: Database,
      title: "Webhook Integration",
      description: "Real-time notifications when items are reported stolen or recovered.",
      features: ["Instant alerts", "Automatic updates", "Custom endpoints", "Secure delivery"],
      bestFor: "Proactive monitoring, security teams"
    },
    {
      icon: Shield,
      title: "White-label Solution",
      description: "Complete verification system under your brand. Full customization available.",
      features: ["Your branding", "Custom domain", "Full control", "Enterprise support"],
      bestFor: "Major platforms, complete control needed"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Contact Integration Team",
      description: "Reach out to discuss your platform's specific needs and volume requirements."
    },
    {
      step: 2, 
      title: "Custom Solution Design",
      description: "We design a tailored integration that fits your platform's architecture perfectly."
    },
    {
      step: 3,
      title: "Development & Testing", 
      description: "Our team handles all development work. You just review and approve."
    },
    {
      step: 4,
      title: "Launch & Monitor",
      description: "Go live with full support. We monitor performance and optimize continuously."
    }
  ];

  return (
    <>
      <ComprehensiveSEO
        title="MARKETPLACE INTEGRATION: Every Platform NEEDS SafeOrStolen.com - Facebook, Craigslist, OfferUp"
        description="THE marketplace integration that Facebook Marketplace, Craigslist, OfferUp, Mercari, Poshmark DEMAND. Eliminate fraud, protect users, increase revenue. API, widget, webhook integrations available."
        keywords="marketplace integration, Facebook Marketplace API, Craigslist integration, OfferUp verification, marketplace fraud prevention, stolen goods API integration, marketplace security, platform integration"
        canonical="/marketplace-integration"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <Badge className="mb-8 text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none font-black">
                <Globe className="h-5 w-5 mr-2" />
                MARKETPLACE INTEGRATION
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                EVERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MARKETPLACE</span><br/>
                NEEDS INTEGRATION
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-bold max-w-5xl mx-auto leading-tight">
                Facebook Marketplace, Craigslist, OfferUp - losing BILLIONS to fraud.<br/>
                <span className="text-blue-400">We ARE their salvation. We ARE their future.</span>
              </p>

              {/* Integration Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400">$4.2B</div>
                  <div className="text-white/80 font-semibold">Fraud Prevented</div>
                  <div className="text-xs text-white/60">with our integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400">&lt;24hrs</div>
                  <div className="text-white/80 font-semibold">Integration Time</div>
                  <div className="text-xs text-white/60">full implementation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400">99.99%</div>
                  <div className="text-white/80 font-semibold">API Uptime</div>
                  <div className="text-xs text-white/60">enterprise grade</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400">500M+</div>
                  <div className="text-white/80 font-semibold">Daily Users</div>
                  <div className="text-xs text-white/60">across integrated platforms</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none shadow-2xl font-black">
                    <Rocket className="h-6 w-6 mr-3" />
                    INTEGRATE NOW
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-purple-900 font-black">
                    <Code className="h-6 w-6 mr-3" />
                    CUSTOM INTEGRATION
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Major Marketplaces */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">MAJOR MARKETPLACE TARGETS</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every major marketplace WILL integrate our verification system. It's inevitable.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {majorMarketplaces.map((marketplace, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{marketplace.logo}</span>
                        <div>
                          <CardTitle className="text-xl font-black">{marketplace.name}</CardTitle>
                          <p className="text-sm text-muted-foreground font-semibold">{marketplace.users} users</p>
                        </div>
                      </div>
                      <Badge className="bg-red-600 text-white font-bold text-xs">TARGET</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Current Problem:</div>
                      <div className="text-sm font-semibold text-red-600">{marketplace.problem}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Our Solution:</div>
                      <div className="text-sm font-semibold text-green-600">{marketplace.solution}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Integration Method:</div>
                      <div className="text-sm font-bold text-primary">{marketplace.integration}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Methods */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">INTEGRATION METHODS</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multiple integration options to fit every platform's needs and architecture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {integrationMethods.map((method, index) => (
                <Card key={index} className="p-8 border-2 hover:border-primary transition-all duration-300 bg-white/70 backdrop-blur">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-3">{method.title}</h3>
                      <p className="text-muted-foreground mb-4 font-semibold">{method.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {method.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">
                        Best for: {method.bestFor}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">IMPLEMENTATION PROCESS</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From first contact to full integration in under 24 hours. We handle everything.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {implementationSteps.map((step, index) => (
                  <Card key={index} className="p-6 border-2 hover:border-primary transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-black text-xl">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-2">{step.title}</h3>
                        <p className="text-muted-foreground font-semibold">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Integration CTA */}
        <section className="py-24 bg-gradient-to-br from-black via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-6xl font-black text-white mb-8">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">INTEGRATION</span><br/>
                REVOLUTION STARTS NOW
              </h2>
              
              <p className="text-2xl text-gray-200 mb-12 font-bold leading-relaxed">
                Every marketplace will either integrate SafeOrStolen.com or lose to competitors who do.<br/>
                Facebook, Craigslist, OfferUp - the revolution is inevitable.<br/>
                <span className="text-blue-400">Lead it or watch from the sidelines.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-xl font-black mb-2">FRAUD ELIMINATION</h3>
                    <p className="text-sm">Stop fraud before it happens</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-xl font-black mb-2">USER TRUST</h3>
                    <p className="text-sm">Build unshakeable credibility</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="text-xl font-black mb-2">REVENUE GROWTH</h3>
                    <p className="text-sm">Increase platform value</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none shadow-2xl font-black">
                    <Code className="h-8 w-8 mr-4" />
                    START INTEGRATION NOW
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-2xl px-16 py-8 border-4 border-white text-white hover:bg-white hover:text-purple-900 font-black">
                    <Building className="h-8 w-8 mr-4" />
                    CUSTOM SOLUTION
                  </Button>
                </Link>
              </div>

              <div className="mt-12 text-lg text-gray-300 font-bold">
                <p>The marketplace revolution has begun.</p>
                <p className="text-blue-400">Either you integrate, or you become obsolete.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketplaceIntegrationPage;