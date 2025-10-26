import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Crown, 
  Target, 
  Rocket, 
  TrendingUp, 
  Users, 
  Building, 
  Shield,
  DollarSign,
  Zap,
  Star,
  ChevronRight,
  MapPin,
  Languages,
  Clock,
  Award
} from 'lucide-react';

const GlobalDominationPage: React.FC = () => {
  const globalMarkets = [
    {
      region: "North America",
      markets: ["Facebook Marketplace", "Craigslist", "OfferUp", "Mercari"],
      value: "$45B",
      penetration: "CRITICAL MASS",
      status: "DOMINATING"
    },
    {
      region: "Europe", 
      markets: ["Vinted", "Leboncoin", "Marktplaats", "Gumtree"],
      value: "$38B",
      penetration: "EXPANSION MODE",
      status: "CONQUERING"
    },
    {
      region: "Asia Pacific",
      markets: ["Carousell", "Mercari Japan", "Yahoo Auctions", "Gumtree AU"],
      value: "$67B", 
      penetration: "PRIME TARGET",
      status: "INFILTRATING"
    },
    {
      region: "Latin America",
      markets: ["MercadoLibre", "OLX", "Yapo", "TuCarro"],
      value: "$23B",
      penetration: "EMERGING FORCE",
      status: "ESTABLISHING"
    },
    {
      region: "Middle East & Africa",
      markets: ["Dubizzle", "OLX", "Jiji", "PigiaMe"],
      value: "$15B",
      penetration: "UNTAPPED GOLD",
      status: "PLANNING"
    }
  ];

  const dominationStrategies = [
    {
      icon: Globe,
      title: "GLOBAL API NETWORK",
      description: "15+ verification databases across 150+ countries. No stolen goods escape our reach.",
      impact: "Worldwide coverage"
    },
    {
      icon: Languages,
      title: "MULTI-LANGUAGE DOMINANCE", 
      description: "Interface in 25+ languages. Local partnerships. Cultural adaptation. Global thinking, local action.",
      impact: "Localized market penetration"
    },
    {
      icon: Zap,
      title: "LIGHTNING INTEGRATIONS",
      description: "Every marketplace, every platform, every channel. If it sells second-hand goods, we dominate it.",
      impact: "Universal platform integration"
    },
    {
      icon: Crown,
      title: "REGULATORY COMPLIANCE",
      description: "GDPR, CCPA, local laws - we're compliant everywhere. Legal barriers become competitive advantages.",
      impact: "Regulatory moat protection"
    }
  ];

  const targetIndustries = [
    {
      industry: "Online Marketplaces",
      size: "$200B+",
      players: "Facebook, Craigslist, eBay, Amazon",
      strategy: "Essential verification layer"
    },
    {
      industry: "Auction Houses",
      size: "$25B+", 
      players: "Christie's, Sotheby's, Bonhams",
      strategy: "Premium authentication service"
    },
    {
      industry: "Pawn Shops",
      size: "$15B+",
      players: "12,000+ US locations",
      strategy: "Risk elimination platform"
    },
    {
      industry: "Auto Dealers", 
      size: "$1.2T+",
      players: "Used car lots, dealerships",
      strategy: "Title verification standard"
    },
    {
      industry: "Electronics Retailers",
      size: "$180B+",
      players: "Trade-in programs, refurbishers", 
      strategy: "Device authentication hub"
    },
    {
      industry: "Insurance Companies",
      size: "$500B+",
      players: "Claims processing, recovery",
      strategy: "Fraud detection partner"
    }
  ];

  const growthMetrics = [
    { metric: "Global Coverage", value: "150+", unit: "Countries" },
    { metric: "Database Sources", value: "15+", unit: "Networks" },
    { metric: "Daily Verifications", value: "1M+", unit: "Checks" },
    { metric: "Market Penetration", value: "95%", unit: "Accuracy" },
    { metric: "Revenue Growth", value: "500%", unit: "YoY Target" },
    { metric: "User Acquisition", value: "10M+", unit: "Monthly Users" }
  ];

  return (
    <>
      <PageSEO
        title="GLOBAL DOMINATION: SafeOrStolen.com - The ONLY Platform Every Market NEEDS Worldwide"
        description="SafeOrStolen.com global domination strategy. Conquer Facebook Marketplace, Craigslist, auction houses, pawn shops WORLDWIDE. 150+ countries, 25+ languages, universal verification platform."
        keywords="global marketplace domination, worldwide verification platform, international stolen goods detection, global second-hand market, worldwide fraud prevention, international verification API"
        canonical="/global-domination"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-7xl mx-auto">
              <Badge className="mb-8 text-lg px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none font-black">
                <Globe className="h-5 w-5 mr-2" />
                GLOBAL DOMINATION MODE
              </Badge>
              
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">GLOBAL</span><br/>
                DOMINATION
              </h1>
              
              <p className="text-2xl md:text-4xl text-gray-200 mb-12 font-bold max-w-6xl mx-auto leading-tight">
                Every marketplace, every country, every second-hand transaction.<br/>
                <span className="text-purple-400">SafeOrStolen.com will be EVERYWHERE.</span>
              </p>

              {/* Global Domination Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
                {growthMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black text-purple-400">{metric.value}</div>
                    <div className="text-white/80 font-semibold">{metric.metric}</div>
                    <div className="text-xs text-white/60">{metric.unit}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none shadow-2xl font-black">
                    <Rocket className="h-6 w-6 mr-3" />
                    JOIN GLOBAL DOMINATION
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-purple-900 font-black">
                    <Target className="h-6 w-6 mr-3" />
                    BECOME GLOBAL PARTNER
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Conquest */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8">
                GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">MARKET CONQUEST</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                $188 billion global second-hand market. Every region, every platform, every transaction.
                <span className="font-bold text-primary"> We will control it ALL.</span>
              </p>
            </div>
            
            <div className="space-y-8 max-w-7xl mx-auto">
              {globalMarkets.map((market, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 transform hover:scale-102">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle className="text-2xl font-black">{market.region}</CardTitle>
                          <p className="text-muted-foreground font-semibold">Market Value: {market.value}</p>
                        </div>
                      </div>
                      <Badge className={`font-bold ${
                        market.status === 'DOMINATING' ? 'bg-green-600 text-white' :
                        market.status === 'CONQUERING' ? 'bg-blue-600 text-white' :
                        market.status === 'INFILTRATING' ? 'bg-orange-600 text-white' :
                        market.status === 'ESTABLISHING' ? 'bg-yellow-600 text-black' :
                        'bg-purple-600 text-white'
                      }`}>
                        {market.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">Target Platforms:</h4>
                        <div className="space-y-1">
                          {market.markets.map((platform, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <ChevronRight className="h-3 w-3 mr-2 text-primary" />
                              {platform}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Penetration Strategy:</h4>
                        <div className="text-sm font-semibold text-primary">{market.penetration}</div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Market Value:</h4>
                        <div className="text-2xl font-black text-green-600">{market.value}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Domination */}
        <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">INDUSTRY DOMINATION MATRIX</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every industry that touches second-hand goods - we will dominate them ALL.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {targetIndustries.map((industry, index) => (
                <Card key={index} className="p-6 border-2 hover:border-primary transition-all duration-300 bg-white/70 backdrop-blur">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-black text-primary">{industry.industry}</CardTitle>
                    <div className="text-2xl font-black text-green-600">{industry.size}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Key Players:</div>
                      <div className="text-sm font-semibold">{industry.players}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Domination Strategy:</div>
                      <div className="text-sm font-bold text-primary">{industry.strategy}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Domination Strategies */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-8">
                DOMINATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">STRATEGIES</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
                How we will conquer every market, every platform, every transaction worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {dominationStrategies.map((strategy, index) => (
                <Card key={index} className="p-8 bg-white/10 backdrop-blur border-white/20 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                      <strategy.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-3">{strategy.title}</h3>
                      <p className="text-gray-300 mb-4 font-semibold">{strategy.description}</p>
                      <div className="text-sm font-bold text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full inline-block">
                        {strategy.impact}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Trajectory */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">UNSTOPPABLE GROWTH TRAJECTORY</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From startup to global monopoly in record time. This is how we scale.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <Card className="p-6 text-center border-2 border-green-200 bg-green-50">
                  <div className="text-4xl font-black text-green-600 mb-4">2024</div>
                  <h3 className="text-lg font-bold mb-2">MARKET PENETRATION</h3>
                  <p className="text-sm text-muted-foreground">Dominate US marketplaces</p>
                </Card>
                
                <Card className="p-6 text-center border-2 border-blue-200 bg-blue-50">
                  <div className="text-4xl font-black text-blue-600 mb-4">2025</div>
                  <h3 className="text-lg font-bold mb-2">EUROPEAN CONQUEST</h3>
                  <p className="text-sm text-muted-foreground">Expand across Europe</p>
                </Card>
                
                <Card className="p-6 text-center border-2 border-purple-200 bg-purple-50">
                  <div className="text-4xl font-black text-purple-600 mb-4">2026</div>
                  <h3 className="text-lg font-bold mb-2">ASIAN DOMINATION</h3>
                  <p className="text-sm text-muted-foreground">Control Asia-Pacific markets</p>
                </Card>
                
                <Card className="p-6 text-center border-2 border-yellow-200 bg-yellow-50">
                  <div className="text-4xl font-black text-yellow-600 mb-4">2027</div>
                  <h3 className="text-lg font-bold mb-2">GLOBAL MONOPOLY</h3>
                  <p className="text-sm text-muted-foreground">Universal verification standard</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final Global CTA */}
        <section className="py-24 bg-gradient-to-br from-black via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-black text-white mb-8">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">GLOBAL</span><br/>
                REVOLUTION BEGINS NOW
              </h2>
              
              <p className="text-2xl text-gray-200 mb-12 font-bold leading-relaxed">
                $188 billion global second-hand market.<br/>
                150+ countries. Millions of transactions daily.<br/>
                <span className="text-purple-400">SafeOrStolen.com will control it ALL.</span>
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-6">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-black mb-2">GLOBAL REACH</h3>
                  <p className="text-sm">150+ countries</p>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-6">
                  <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-lg font-black mb-2">MARKET LEADER</h3>
                  <p className="text-sm">Universal standard</p>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-6">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-400" />
                  <h3 className="text-lg font-black mb-2">REVENUE GROWTH</h3>
                  <p className="text-sm">500% YoY target</p>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white p-6">
                  <Users className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-lg font-black mb-2">USER BASE</h3>
                  <p className="text-sm">10M+ monthly users</p>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none shadow-2xl font-black">
                    <Rocket className="h-8 w-8 mr-4" />
                    JOIN GLOBAL DOMINATION
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-2xl px-16 py-8 border-4 border-white text-white hover:bg-white hover:text-purple-900 font-black">
                    <Globe className="h-8 w-8 mr-4" />
                    BECOME GLOBAL PARTNER
                  </Button>
                </Link>
              </div>

              <div className="mt-12 text-lg text-gray-300 font-bold">
                <p>The global revolution has begun.</p>
                <p className="text-purple-400">Either you're with us, or you're obsolete.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GlobalDominationPage;