import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { MarketDominanceSEO } from '@/components/seo/MarketDominanceSEO';
import { RevenueEngine } from '@/components/monetization/RevenueEngine';
import { IndustryLeadershipBadges } from '@/components/credibility/IndustryLeadershipBadges';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Target, 
  Crown, 
  Rocket, 
  Shield,
  Zap,
  Users,
  Globe,
  ArrowRight
} from 'lucide-react';

const RevenueHubPage = () => {
  const marketStats = [
    {
      title: "Market Size",
      value: "$13B",
      description: "Global stolen goods market we're disrupting",
      trend: "+8.5% YoY"
    },
    {
      title: "TAM",
      value: "$45B",
      description: "Total addressable market for verification services",
      trend: "+12.3% YoY"
    },
    {
      title: "Market Share",
      value: "23%",
      description: "Leading position in verification market",
      trend: "+5.2% QoQ"
    },
    {
      title: "Competitive Moat",
      value: "AI-First",
      description: "Proprietary AI technology advantage",
      trend: "Widening"
    }
  ];

  const revenueStreams = [
    {
      stream: "Subscription Revenue",
      amount: "$1.2M",
      growth: "+45%",
      icon: Crown,
      color: "text-sos-lime"
    },
    {
      stream: "Enterprise Licensing", 
      amount: "$850K",
      growth: "+67%",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      stream: "API Usage Fees",
      amount: "$420K", 
      growth: "+89%",
      icon: Zap,
      color: "text-sos-orange"
    },
    {
      stream: "One-Time Reports",
      amount: "$290K",
      growth: "+34%", 
      icon: Target,
      color: "text-green-500"
    }
  ];

  const competitiveAdvantages = [
    "First-mover advantage in AI verification",
    "Largest global database coverage (150+ countries)",
    "Highest accuracy rate in industry (99.9%)",
    "Mobile-first architecture advantage", 
    "Enterprise-grade security & compliance",
    "Freemium model driving user acquisition",
    "Network effects from community data",
    "Patent-pending AI algorithms"
  ];

  return (
    <>
      <PageSEO
        title="Revenue Engine & Market Leadership | SafeOrStolen Business Hub"
        description="Comprehensive revenue analytics and market positioning for the world's #1 verification platform. Industry leadership, competitive advantages, and growth metrics."
        keywords="verification revenue engine, market leadership analytics, competitive positioning, industry dominance metrics, business intelligence platform"
        canonical="/revenue-hub"
      />
      <MarketDominanceSEO page="business" />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sos-dark via-sos-orange to-sos-lime py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Rocket className="h-4 w-4 mr-2" />
                Revenue Engine Dashboard
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                World's #1 Verification Platform
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Dominating the $13B stolen goods market with AI-powered verification technology. 
                Industry-leading revenue growth and competitive positioning.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10M+</div>
                  <div className="text-sm opacity-80">Verifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">#1</div>
                  <div className="text-sm opacity-80">Market Position</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Market Statistics */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <TrendingUp className="h-8 w-8 text-sos-orange" />
              Market Dominance Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketStats.map((stat, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sos-orange mb-2">{stat.value}</div>
                      <h3 className="font-semibold mb-2">{stat.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{stat.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.trend}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Revenue Streams */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-sos-lime" />
              Diversified Revenue Streams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenueStreams.map((stream, index) => {
                const IconComponent = stream.icon;
                return (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <IconComponent className={`h-8 w-8 ${stream.color}`} />
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          {stream.growth}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold mb-2">{stream.amount}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stream.stream}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Competitive Advantages */}
          <section>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Crown className="h-6 w-6 text-sos-lime" />
                  Sustainable Competitive Advantages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {competitiveAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <Shield className="h-5 w-5 text-sos-orange mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Industry Leadership Badges */}
          <section>
            <IndustryLeadershipBadges />
          </section>

          {/* Revenue Engine */}
          <section>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Rocket className="h-6 w-6 text-sos-orange" />
                  Monetization Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueEngine />
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Lead the Market?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join the platform that's setting industry standards and generating 
                unprecedented revenue growth in the verification space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  <Crown className="mr-2 h-5 w-5" />
                  Start Premium Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Users className="mr-2 h-5 w-5" />
                  Enterprise Demo
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default RevenueHubPage;