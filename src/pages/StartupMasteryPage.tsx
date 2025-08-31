import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { MarketDominanceSEO } from '@/components/seo/MarketDominanceSEO';
import { GrowthEngine } from '@/components/startup/GrowthEngine';
import { ViralReferralSystem } from '@/components/startup/ViralReferralSystem';
import { CompetitiveAnalyzer } from '@/components/startup/CompetitiveAnalyzer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Rocket, 
  Brain, 
  Target, 
  Crown, 
  TrendingUp,
  Zap,
  Users,
  Shield,
  Eye,
  Lightbulb,
  Star,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const StartupMasteryPage = () => {
  const startupPrinciples = [
    {
      title: "Product-Market Fit",
      description: "Build something people desperately want",
      implementation: "AI verification solving $13B stolen goods problem",
      icon: Target,
      color: "text-sos-orange"
    },
    {
      title: "Growth Hacking",
      description: "Systematic approach to rapid, scalable growth",
      implementation: "Viral referral loops + freemium conversion",
      icon: TrendingUp,
      color: "text-sos-lime"
    },
    {
      title: "Network Effects",
      description: "Product becomes more valuable as more people use it",
      implementation: "Community reporting improves verification accuracy",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Competitive Moats",
      description: "Sustainable advantages that prevent competition",
      implementation: "AI technology + data advantages + brand",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "Unit Economics",
      description: "Profitable on per-customer basis before scaling",
      implementation: "LTV:CAC ratio of 5.3:1 with 85% retention",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Market Timing",
      description: "Right product at the right time",
      implementation: "AI maturity + fraud awareness + mobile adoption",
      icon: Zap,
      color: "text-yellow-500"
    }
  ];

  const growthFrameworks = [
    {
      framework: "AARRR (Pirate Metrics)",
      stages: ["Acquisition", "Activation", "Retention", "Revenue", "Referral"],
      application: "Optimizing each funnel stage for maximum conversion",
      results: "40% improvement in user journey efficiency"
    },
    {
      framework: "North Star Framework",
      stages: ["Define North Star", "Identify Inputs", "Track Leading Indicators", "Execute"],
      application: "Monthly verified items as North Star metric",
      results: "Aligned entire team around core value delivery"
    },
    {
      framework: "ICE Scoring",
      stages: ["Impact", "Confidence", "Ease"],
      application: "Prioritizing growth experiments and features",
      results: "3x faster experiment velocity"
    }
  ];

  const competitiveStrategies = [
    {
      strategy: "Blue Ocean Strategy",
      description: "Create uncontested market space",
      execution: "AI-powered mobile verification - no direct competitors",
      outcome: "Market leadership in new category"
    },
    {
      strategy: "Platform Strategy", 
      description: "Build ecosystem around your product",
      execution: "API marketplace + partner integrations + developer tools",
      outcome: "Network effects and customer lock-in"
    },
    {
      strategy: "Freemium Strategy",
      description: "Free tier drives adoption, premium drives revenue",
      execution: "4 free verifications/month, unlimited for $7.99",
      outcome: "12% freemium conversion rate"
    },
    {
      strategy: "Land and Expand",
      description: "Start small, grow within accounts",
      execution: "Individual users → team plans → enterprise contracts",
      outcome: "150% net revenue retention"
    }
  ];

  return (
    <>
      <PageSEO
        title="Startup Mastery Engine | SafeOrStolen Growth Methodology"
        description="Master the art of startups through systematic growth hacking, competitive analysis, and proven frameworks. Learn how SafeOrStolen dominates markets."
        keywords="startup growth hacking, competitive analysis, product market fit, viral marketing, network effects, startup methodology, growth frameworks"
        canonical="/startup-mastery"
      />
      <MarketDominanceSEO page="business" />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sos-dark via-purple-600 to-sos-lime py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Brain className="h-4 w-4 mr-2" />
                Startup Mastery Engine
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Art of Startup Domination
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Master systematic growth hacking, competitive intelligence, and market domination 
                through proven frameworks and real execution.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">5.3x</div>
                  <div className="text-sm opacity-80">Growth Multiple</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Product Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">23%</div>
                  <div className="text-sm opacity-80">Market Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">$13B</div>
                  <div className="text-sm opacity-80">Market Opportunity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="principles" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="principles">Core Principles</TabsTrigger>
              <TabsTrigger value="growth">Growth Engine</TabsTrigger>
              <TabsTrigger value="viral">Viral Systems</TabsTrigger>
              <TabsTrigger value="competitive">Intel Analysis</TabsTrigger>
              <TabsTrigger value="execution">Execution Plan</TabsTrigger>
            </TabsList>

            {/* Startup Principles */}
            <TabsContent value="principles" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                    Fundamental Startup Principles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {startupPrinciples.map((principle, index) => {
                      const IconComponent = principle.icon;
                      return (
                        <Card key={index} className="border-2 hover:shadow-lg transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="p-3 rounded-full bg-muted">
                                <IconComponent className={`h-6 w-6 ${principle.color}`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{principle.description}</p>
                              </div>
                            </div>
                            <div className="bg-muted/30 p-3 rounded-lg">
                              <p className="text-sm font-medium">Our Implementation:</p>
                              <p className="text-sm text-muted-foreground">{principle.implementation}</p>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Growth Frameworks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Proven Growth Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {growthFrameworks.map((framework, index) => (
                      <div key={index} className="p-6 bg-muted/30 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold mb-2">{framework.framework}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{framework.application}</p>
                          </div>
                          <Badge variant="outline">{framework.results}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {framework.stages.map((stage, stageIndex) => (
                            <Badge key={stageIndex} variant="secondary" className="text-xs">
                              {stage}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Competitive Strategies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5" />
                    Market Domination Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {competitiveStrategies.map((strategy, index) => (
                      <div key={index} className="p-4 border-2 rounded-lg">
                        <h4 className="font-bold mb-2 text-sos-orange">{strategy.strategy}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{strategy.description}</p>
                        <div className="bg-muted/30 p-3 rounded mb-3">
                          <p className="text-sm font-medium">Execution:</p>
                          <p className="text-sm">{strategy.execution}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          {strategy.outcome}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Growth Engine */}
            <TabsContent value="growth">
              <GrowthEngine />
            </TabsContent>

            {/* Viral Systems */}
            <TabsContent value="viral">
              <ViralReferralSystem />
            </TabsContent>

            {/* Competitive Analysis */}
            <TabsContent value="competitive">
              <CompetitiveAnalyzer />
            </TabsContent>

            {/* Execution Plan */}
            <TabsContent value="execution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Systematic Execution Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-sos-orange">
                      <CardHeader>
                        <CardTitle className="text-center">Week 1-4: Foundation</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Launch viral referral system</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Implement growth analytics</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">A/B test pricing tiers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Social proof integration</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-sos-lime">
                      <CardHeader>
                        <CardTitle className="text-center">Month 2-3: Scale</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-sos-orange" />
                          <span className="text-sm">Competitive intelligence</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-sos-orange" />
                          <span className="text-sm">Enterprise sales automation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-sos-orange" />
                          <span className="text-sm">Partnership ecosystem</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-sos-orange" />
                          <span className="text-sm">Content marketing engine</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-500">
                      <CardHeader>
                        <CardTitle className="text-center">Month 4-6: Dominate</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">International expansion</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">API marketplace launch</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">Strategic acquisitions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">Market consolidation</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Success Metrics */}
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        Key Success Indicators
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-sos-orange">500K+</div>
                          <div className="text-sm text-muted-foreground">Monthly Active Users</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-sos-lime">$500K+</div>
                          <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-blue-500">35%</div>
                          <div className="text-sm text-muted-foreground">Market Share</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-green-500">80+</div>
                          <div className="text-sm text-muted-foreground">NPS Score</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="mt-8 bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-2">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply These Principles?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join the platform that's mastering startup methodology to dominate entire markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Globe className="mr-2 h-5 w-5" />
                  View Startup Playbook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StartupMasteryPage;