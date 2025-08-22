import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ComprehensiveSEO } from '@/components/seo/ComprehensiveSEO';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Building,
  Database,
  Lock,
  Zap,
  Globe,
  DollarSign,
  AlertTriangle,
  Target,
  Crown,
  Flame,
  Rocket
} from 'lucide-react';

const ForBrandsPage: React.FC = () => {
  const marketplaceDomination = [
    {
      name: "Facebook Marketplace", 
      users: "1.2B+", 
      risk: "CRITICAL",
      impact: "$2.1B fraud losses",
      opportunity: "95% reduction potential"
    },
    {
      name: "Craigslist", 
      users: "50M+", 
      risk: "EXTREME",
      impact: "$890M fraud losses", 
      opportunity: "98% reduction potential"
    },
    {
      name: "OfferUp", 
      users: "44M+", 
      risk: "HIGH",
      impact: "$340M fraud losses",
      opportunity: "87% reduction potential"
    },
    {
      name: "Mercari", 
      users: "50M+", 
      risk: "HIGH", 
      impact: "$410M fraud losses",
      opportunity: "91% reduction potential"
    }
  ];

  const competitorDestruction = [
    {
      competitor: "CheckMend",
      ourAdvantage: "15x Faster",
      details: [
        "200ms vs 3000ms response time",
        "99.7% vs 89% accuracy",
        "Global coverage vs UK-only", 
        "AI-powered vs manual checks"
      ]
    },
    {
      competitor: "Stolen Register", 
      ourAdvantage: "10x Coverage",
      details: [
        "15+ databases vs 2 databases",
        "Real-time vs weekly updates",
        "Enterprise API vs consumer-only",
        "Advanced analytics vs basic reports"
      ]
    },
    {
      competitor: "LeadsOnline",
      ourAdvantage: "Next-Gen Tech",
      details: [
        "Modern API vs legacy system",
        "Consumer-friendly vs police-only", 
        "Multi-platform vs single access",
        "Marketplace-ready integrations"
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Rocket,
      title: "Market Domination API", 
      description: "The most powerful verification engine ever built. We don't compete - we obliterate.",
      stats: "99.97% uptime, <200ms response"
    },
    {
      icon: Crown,
      title: "Enterprise Supremacy",
      description: "Custom integrations that make competitors look like toys. We own this space.",
      stats: "15+ database sources, 24/7 support"
    },
    {
      icon: Flame,
      title: "Real-Time Intelligence",
      description: "Know about stolen goods before law enforcement does. That's the power difference.",
      stats: "Live updates, predictive alerts"
    },
    {
      icon: Target,
      title: "Precision Destruction",
      description: "Our AI doesn't just detect - it predicts and prevents. Competition can't touch this.",
      stats: "Machine learning, behavioral analysis"
    }
  ];

  return (
    <>
      <ComprehensiveSEO
        title="MARKETPLACE DOMINATION: Destroy Competition with Ultimate Verification API - Safe or Stolen"
        description="The ONLY verification platform that Facebook, Craigslist, OfferUp will BUY or INTEGRATE. We don't compete - we obliterate CheckMend, Stolen Register, LeadsOnline. 99.97% accuracy, <200ms response."
        keywords="marketplace domination, Facebook Marketplace integration, Craigslist verification API, OfferUp fraud prevention, destroy CheckMend, obliterate competition, enterprise verification, stolen goods API supremacy"
        canonical="/for-brands"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section - MARKET DOMINATION */}
        <section className="relative py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <Badge className="mb-8 text-lg px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                <Crown className="h-5 w-5 mr-2" />
                MARKETPLACE DOMINATION MODE
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">OBLITERATE</span><br/>
                THE COMPETITION
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-bold max-w-4xl mx-auto leading-tight">
                Facebook Marketplace, Craigslist, OfferUp will either BUY US or INTEGRATE US.<br/>
                <span className="text-orange-400">We don't compete. We dominate.</span>
              </p>

              {/* Domination Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-400">99.97%</div>
                  <div className="text-white/80 font-semibold">Accuracy Rate</div>
                  <div className="text-xs text-white/60">vs 89% competitors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-400">&lt;200ms</div>
                  <div className="text-white/80 font-semibold">Response Time</div>
                  <div className="text-xs text-white/60">vs 3000ms competitors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-400">15x</div>
                  <div className="text-white/80 font-semibold">More Databases</div>
                  <div className="text-xs text-white/60">than any competitor</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-400">$3.8B</div>
                  <div className="text-white/80 font-semibold">Market We Control</div>
                  <div className="text-xs text-white/60">stolen goods prevention</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-none shadow-2xl">
                    <Rocket className="h-6 w-6 mr-3" />
                    DOMINATE YOUR MARKET
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-red-900">
                    <Target className="h-6 w-6 mr-3" />
                    ACQUIRE US NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Domination Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">MARKETPLACE</span><br/>
                ACQUISITION TARGETS
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
                These platforms NEED us. They're bleeding money from fraud. We're their only salvation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {marketplaceDomination.map((marketplace, index) => (
                <Card key={index} className="bg-red-950/50 border-red-800 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-white font-black">{marketplace.name}</CardTitle>
                      <Badge className={`text-white font-bold ${
                        marketplace.risk === 'CRITICAL' ? 'bg-red-600' :
                        marketplace.risk === 'EXTREME' ? 'bg-red-700' : 'bg-orange-600'
                      }`}>
                        {marketplace.risk} RISK
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Active Users</div>
                        <div className="text-2xl font-black text-orange-400">{marketplace.users}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Annual Fraud Loss</div>
                        <div className="text-2xl font-black text-red-400">{marketplace.impact}</div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="text-gray-400 text-sm mb-1">OUR SOLUTION IMPACT</div>
                      <div className="text-xl font-black text-green-400">{marketplace.opportunity}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Competition Destruction */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8">
                HOW WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DESTROY</span> THE COMPETITION
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
                We don't just beat competitors. We make them obsolete. Here's the carnage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {competitorDestruction.map((comp, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center bg-gradient-to-br from-red-50 to-orange-50">
                    <div className="text-3xl font-black text-red-600 mb-2">{comp.ourAdvantage}</div>
                    <div className="text-lg font-bold text-gray-600">vs {comp.competitor}</div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {comp.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <Flame className="h-4 w-4 mr-3 text-orange-500 flex-shrink-0" />
                          <span className="text-sm font-semibold">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Supremacy Features */}
        <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">ENTERPRISE SUPREMACY FEATURES</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Technology so advanced, competitors will need years to catch up. By then, we own the market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {enterpriseFeatures.map((feature, index) => (
                <Card key={index} className="p-8 border-2 hover:border-primary transition-all duration-300 bg-white/70 backdrop-blur">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4 font-semibold">{feature.description}</p>
                      <div className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final Domination CTA */}
        <section className="py-24 bg-gradient-to-br from-black via-red-900 to-orange-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-6xl font-black text-white mb-8">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">ACQUISITION</span><br/>
                CONVERSATION STARTS NOW
              </h2>
              
              <p className="text-2xl text-gray-200 mb-12 font-bold leading-relaxed">
                Facebook, Craigslist, OfferUp - you're losing BILLIONS to fraud.<br/>
                We're your only path to market leadership.<br/>
                <span className="text-orange-400">Let's discuss terms.</span>
              </p>

              {/* Value Proposition */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-xl font-black mb-2">SAVE BILLIONS</h3>
                    <p className="text-sm">Stop hemorrhaging money to fraud</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="text-xl font-black mb-2">MARKET LEADER</h3>
                    <p className="text-sm">Become the trusted marketplace</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-xl font-black mb-2">USER TRUST</h3>
                    <p className="text-sm">Build unshakeable credibility</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-none shadow-2xl font-black">
                    <Rocket className="h-8 w-8 mr-4" />
                    SCHEDULE ACQUISITION DEMO
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-2xl px-16 py-8 border-4 border-white text-white hover:bg-white hover:text-red-900 font-black">
                    <Globe className="h-8 w-8 mr-4" />
                    DISCUSS PARTNERSHIP
                  </Button>
                </Link>
              </div>

              <div className="mt-12 text-lg text-gray-300 font-bold">
                <p>Don't wait until your competitors make the first move.</p>
                <p className="text-orange-400">We're building the future. Join us or get left behind.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForBrandsPage;