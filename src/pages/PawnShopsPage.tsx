import React from 'react';
import { ComprehensiveSEO } from '@/components/seo/ComprehensiveSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Coins, 
  Shield, 
  TrendingUp, 
  Zap, 
  Globe, 
  Clock,
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  Crown,
  Target,
  Users,
  Building,
  Rocket,
  Star,
  Lock
} from 'lucide-react';

const PawnShopsPage: React.FC = () => {
  const pawnShopBenefits = [
    {
      icon: Shield,
      title: "Instant Legal Protection",
      description: "Verify EVERY item before purchase. Never buy stolen goods again. Protect your business from legal liability.",
      impact: "100% protection from stolen goods liability"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Verification",
      description: "Verify items in under 200ms while the customer waits. No delays, no lost sales, just confidence.",
      impact: "Sub-second verification speed"
    },
    {
      icon: DollarSign,
      title: "Increase Loan Values",
      description: "Verified clean items = higher loan values. Customers get more money, you move inventory faster.",
      impact: "25-40% higher loan amounts possible"
    },
    {
      icon: Crown,
      title: "Premium Reputation",
      description: "Display our verification badge. Become the trusted pawn shop that customers recommend.",
      impact: "Premium brand positioning"
    }
  ];

  const pawnShopCategories = [
    {
      category: "Electronics & Phones",
      coverage: "IMEI blacklists, carrier reports, theft databases",
      risk: "HIGH THEFT RISK",
      solution: "Instant IMEI verification prevents stolen phone purchases"
    },
    {
      category: "Jewelry & Watches",
      coverage: "Insurance databases, manufacturer records, theft reports",
      risk: "HIGHEST VALUE RISK",
      solution: "Serial number tracking prevents expensive mistakes"
    },
    {
      category: "Tools & Equipment",
      coverage: "Construction theft databases, serial registries",
      risk: "FREQUENT THEFT",
      solution: "Tool serial verification stops contractor theft"
    },
    {
      category: "Musical Instruments",
      coverage: "Musician databases, theft registries, serial tracking",
      risk: "HIGH RECOVERY RATE",
      solution: "Instrument verification prevents costly seizures"
    },
    {
      category: "Firearms",
      coverage: "ATF databases, law enforcement reports, federal tracking",
      risk: "FEDERAL CRIME RISK",
      solution: "Mandatory federal compliance verification"
    },
    {
      category: "Bicycles",
      coverage: "BikeIndex, police databases, insurance claims",
      risk: "MOST STOLEN ITEM",
      solution: "Frame number verification prevents bike theft"
    }
  ];

  const competitorAnalysis = [
    {
      competitor: "Manual Checking",
      problems: ["Takes 15+ minutes", "Incomplete coverage", "Human error prone"],
      ourSolution: "Instant, comprehensive, 99.7% accurate"
    },
    {
      competitor: "Basic Police Check",
      problems: ["Only local database", "Slow turnaround", "Limited coverage"],
      ourSolution: "Global coverage, real-time results"
    },
    {
      competitor: "No Verification",
      problems: ["Legal liability", "Reputation damage", "Revenue loss"],
      ourSolution: "Complete protection and growth"
    }
  ];

  return (
    <>
      <ComprehensiveSEO
        title="PAWN SHOP DOMINATION: Every Pawn Shop NEEDS SafeOrStolen.com - Ultimate Protection"
        description="Transform your pawn shop with SafeOrStolen.com. Instantly verify electronics, jewelry, tools, firearms. Eliminate stolen goods liability, increase loan values 40%, dominate your market."
        keywords="pawn shop verification, stolen goods protection, pawn shop software, IMEI verification pawn shop, jewelry verification, tool verification, firearms verification pawn shop"
        canonical="/pawn-shops"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <Badge className="mb-8 text-lg px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none font-black">
                <Coins className="h-5 w-5 mr-2" />
                PAWN SHOP REVOLUTION
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                EVERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">PAWN SHOP</span><br/>
                NEEDS PROTECTION
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-bold max-w-5xl mx-auto leading-tight">
                $15 billion pawn industry. Millions of stolen goods daily.<br/>
                <span className="text-green-400">We STOP the theft. We PROTECT your business.</span>
              </p>

              {/* Pawn Shop Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-black text-green-400">12,000+</div>
                  <div className="text-white/80 font-semibold">US Pawn Shops</div>
                  <div className="text-xs text-white/60">all need our protection</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-400">$15B</div>
                  <div className="text-white/80 font-semibold">Annual Industry</div>
                  <div className="text-xs text-white/60">we protect it all</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-400">40%</div>
                  <div className="text-white/80 font-semibold">Higher Loans</div>
                  <div className="text-xs text-white/60">with verification</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-400">100%</div>
                  <div className="text-white/80 font-semibold">Legal Protection</div>
                  <div className="text-xs text-white/60">guaranteed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-none shadow-2xl font-black">
                    <Rocket className="h-6 w-6 mr-3" />
                    PROTECT MY PAWN SHOP
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-black">
                    <Target className="h-6 w-6 mr-3" />
                    GET PARTNERSHIP NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Categories for Pawn Shops */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">COMPLETE PAWN SHOP COVERAGE</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every category of item that walks through your door - we verify it ALL.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pawnShopCategories.map((category, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg font-black">{category.category}</CardTitle>
                      <Badge className={`font-bold text-xs ${
                        category.risk.includes('FEDERAL') ? 'bg-red-600 text-white' :
                        category.risk.includes('HIGHEST') ? 'bg-red-500 text-white' :
                        category.risk.includes('HIGH') ? 'bg-orange-500 text-white' :
                        'bg-yellow-500 text-black'
                      }`}>
                        {category.risk}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.coverage}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="border-t pt-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold">{category.solution}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pawn Shop Benefits */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">TRANSFORM YOUR PAWN BUSINESS</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From liability nightmare to profit machine - we transform EVERYTHING.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pawnShopBenefits.map((benefit, index) => (
                <Card key={index} className="p-8 border-2 hover:border-primary transition-all duration-300 bg-white/70 backdrop-blur">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-4 font-semibold">{benefit.description}</p>
                      <div className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">
                        {benefit.impact}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Competition Destruction */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-8">
                WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">OBLITERATE</span> THE ALTERNATIVES
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
                Every other verification method is obsolete. Here's why.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {competitorAnalysis.map((comp, index) => (
                <Card key={index} className="bg-red-950/30 border-red-800 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-white font-black">{comp.competitor}</CardTitle>
                    <Badge variant="destructive" className="text-xs font-bold">OBSOLETE</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-red-400 text-sm font-semibold mb-2">PROBLEMS:</div>
                      {comp.problems.map((problem, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <AlertTriangle className="h-3 w-3 mr-2 text-red-400 flex-shrink-0" />
                          {problem}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="text-green-400 text-sm font-semibold mb-2">OUR SOLUTION:</div>
                      <div className="flex items-center text-sm text-white font-semibold">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                        {comp.ourSolution}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">IMPLEMENTATION IS INSTANT</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Start protecting your pawn shop in minutes, not months.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <div className="text-6xl font-black text-primary mb-4">1</div>
                  <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                  <p className="text-muted-foreground">Create your account in 60 seconds</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="text-6xl font-black text-primary mb-4">2</div>
                  <h3 className="text-xl font-bold mb-2">Integrate</h3>
                  <p className="text-muted-foreground">Add our widget to your POS system</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="text-6xl font-black text-primary mb-4">3</div>
                  <h3 className="text-xl font-bold mb-2">Dominate</h3>
                  <p className="text-muted-foreground">Start verifying and protecting immediately</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final Pawn Shop CTA */}
        <section className="py-24 bg-gradient-to-br from-black via-green-900 to-emerald-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-6xl font-black text-white mb-8">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">PAWN SHOP</span><br/>
                REVOLUTION IS HERE
              </h2>
              
              <p className="text-2xl text-gray-200 mb-12 font-bold leading-relaxed">
                12,000+ pawn shops across America need protection.<br/>
                Every single one will either use SafeOrStolen.com or lose to competitors who do.<br/>
                <span className="text-green-400">The choice is simple: Dominate or disappear.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Lock className="h-12 w-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-xl font-black mb-2">100% PROTECTION</h3>
                    <p className="text-sm">Never buy stolen goods again</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-xl font-black mb-2">MORE PROFIT</h3>
                    <p className="text-sm">40% higher loan values possible</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="text-xl font-black mb-2">MARKET LEADER</h3>
                    <p className="text-sm">Become the trusted pawn shop</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-none shadow-2xl font-black">
                    <Coins className="h-8 w-8 mr-4" />
                    REVOLUTIONIZE MY PAWN SHOP
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-2xl px-16 py-8 border-4 border-white text-white hover:bg-white hover:text-emerald-900 font-black">
                    <Users className="h-8 w-8 mr-4" />
                    JOIN THE REVOLUTION
                  </Button>
                </Link>
              </div>

              <div className="mt-12 text-lg text-gray-300 font-bold">
                <p>The pawn industry is worth $15 billion.</p>
                <p className="text-green-400">We're transforming ALL of it. Don't get left behind.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PawnShopsPage;