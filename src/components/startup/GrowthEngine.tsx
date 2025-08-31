import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Crown, 
  Rocket,
  Share2,
  Gift,
  Star,
  ChartBar,
  DollarSign,
  Shield,
  Globe,
  Award,
  Lightbulb,
  ArrowRight,
  Timer,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/lib/auth';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<any>;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon: Icon, color }) => (
  <Card className="border-2 hover:shadow-lg transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold mb-2">{value}</p>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="mt-4">
        <Badge variant="secondary" className="text-xs">
          <TrendingUp className="h-3 w-3 mr-1" />
          {change}
        </Badge>
      </div>
    </CardContent>
  </Card>
);

export const GrowthEngine: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('metrics');

  // Startup Growth Metrics (Real-time simulation)
  const [metrics, setMetrics] = useState({
    users: 250000,
    revenue: 125000,
    retention: 85,
    virality: 1.4,
    ltv: 240,
    cac: 45,
    nps: 72,
    churn: 3.2
  });

  // Simulate real-time growth
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        users: prev.users + Math.floor(Math.random() * 50),
        revenue: prev.revenue + Math.floor(Math.random() * 200),
        retention: Math.min(95, prev.retention + Math.random() * 0.1),
        virality: Math.min(2.0, prev.virality + Math.random() * 0.01),
        ltv: prev.ltv + Math.floor(Math.random() * 2),
        cac: Math.max(25, prev.cac - Math.random() * 0.5),
        nps: Math.min(85, prev.nps + Math.random() * 0.2),
        churn: Math.max(1.5, prev.churn - Math.random() * 0.01)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const growthMetrics = [
    {
      title: 'Total Users',
      value: `${(metrics.users / 1000).toFixed(0)}K`,
      change: '+23.5% MoM',
      icon: Users,
      color: 'bg-sos-orange'
    },
    {
      title: 'MRR',
      value: `$${(metrics.revenue / 1000).toFixed(0)}K`,
      change: '+45.2% MoM',
      icon: DollarSign,
      color: 'bg-sos-lime'
    },
    {
      title: 'Retention Rate',
      value: `${metrics.retention.toFixed(1)}%`,
      change: '+2.1% QoQ',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Viral Coefficient',
      value: metrics.virality.toFixed(2),
      change: '+0.3 this month',
      icon: Share2,
      color: 'bg-purple-500'
    },
    {
      title: 'LTV:CAC Ratio',
      value: `${(metrics.ltv / metrics.cac).toFixed(1)}:1`,
      change: '+15% efficiency',
      icon: ChartBar,
      color: 'bg-blue-500'
    },
    {
      title: 'NPS Score',
      value: metrics.nps.toFixed(0),
      change: '+8 points',
      icon: Star,
      color: 'bg-sos-orange'
    }
  ];

  const growthHacks = [
    {
      strategy: 'Viral Referral Loop',
      impact: 'High',
      effort: 'Medium',
      description: 'Users get 1 free verification for each successful referral',
      status: 'Active',
      results: '+40% user acquisition'
    },
    {
      strategy: 'Freemium Conversion',
      impact: 'High',
      effort: 'Low',
      description: 'Strategic limitation on free tier to drive premium upgrades',
      status: 'Optimized',
      results: '12% conversion rate'
    },
    {
      strategy: 'Social Proof Engine',
      impact: 'Medium',
      effort: 'Low',
      description: 'Real-time verification counters and success stories',
      status: 'Active',
      results: '+25% landing page CVR'
    },
    {
      strategy: 'Network Effects',
      impact: 'High',
      effort: 'High',
      description: 'Community reporting makes platform more valuable',
      status: 'Building',
      results: 'Early stage'
    }
  ];

  const competitiveAdvantages = [
    {
      advantage: 'First-Mover in AI Verification',
      moat: 'Technology',
      strength: 95,
      description: 'Proprietary AI algorithms with 99.9% accuracy'
    },
    {
      advantage: 'Network Effects Platform',
      moat: 'Data',
      strength: 78,
      description: 'More users = more data = better verification'
    },
    {
      advantage: 'Brand Authority',
      moat: 'Brand',
      strength: 82,
      description: '#1 trusted verification platform globally'
    },
    {
      advantage: 'Enterprise Relationships',
      moat: 'Partnerships',
      strength: 71,
      description: 'Exclusive partnerships with law enforcement'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Growth Engine Header */}
      <div className="bg-gradient-to-r from-sos-dark via-sos-orange to-sos-lime p-8 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Rocket className="h-10 w-10" />
              Startup Growth Engine
            </h1>
            <p className="text-lg opacity-90 mb-4">
              Outperforming competition through systematic growth hacking
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Crown className="h-4 w-4 mr-1" />
                Market Leader
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Zap className="h-4 w-4 mr-1" />
                Hypergrowth Mode
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">5.3x</div>
            <div className="opacity-90">YoY Growth</div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="metrics">Growth Metrics</TabsTrigger>
          <TabsTrigger value="strategies">Growth Hacks</TabsTrigger>
          <TabsTrigger value="moats">Competitive Moats</TabsTrigger>
          <TabsTrigger value="execution">Execution Plan</TabsTrigger>
        </TabsList>

        {/* Growth Metrics Dashboard */}
        <TabsContent value="metrics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Real-time Growth Chart Simulation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBar className="h-5 w-5" />
                Real-Time Growth Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">User Acquisition</span>
                  <span className="text-2xl font-bold text-sos-orange">+{Math.floor(Math.random() * 50)}/hour</span>
                </div>
                <Progress value={75} className="h-3" />
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Revenue Growth</span>
                  <span className="text-2xl font-bold text-sos-lime">+${Math.floor(Math.random() * 200)}/hour</span>
                </div>
                <Progress value={82} className="h-3" />
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Market Share</span>
                  <span className="text-2xl font-bold text-blue-500">23.4%</span>
                </div>
                <Progress value={23.4} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Growth Hacking Strategies */}
        <TabsContent value="strategies" className="space-y-6">
          <div className="grid gap-6">
            {growthHacks.map((hack, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{hack.strategy}</h3>
                      <p className="text-muted-foreground mb-3">{hack.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={hack.status === 'Active' ? 'default' : 'secondary'}>
                        {hack.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <span className="text-sm">
                        <strong>Impact:</strong> 
                        <Badge variant="outline" className="ml-2">{hack.impact}</Badge>
                      </span>
                      <span className="text-sm">
                        <strong>Effort:</strong> 
                        <Badge variant="outline" className="ml-2">{hack.effort}</Badge>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-sos-orange">{hack.results}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Growth Methodology Explanation */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Startup Growth Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>AARRR Pirate Metrics Framework:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="font-bold">Acquisition</div>
                  <div className="text-sm text-muted-foreground">Getting users</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-sos-orange" />
                  <div className="font-bold">Activation</div>
                  <div className="text-sm text-muted-foreground">First value</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="font-bold">Retention</div>
                  <div className="text-sm text-muted-foreground">Coming back</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-sos-lime" />
                  <div className="font-bold">Revenue</div>
                  <div className="text-sm text-muted-foreground">Monetization</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Share2 className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="font-bold">Referral</div>
                  <div className="text-sm text-muted-foreground">Viral growth</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Competitive Moats */}
        <TabsContent value="moats" className="space-y-6">
          <div className="space-y-6">
            {competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{advantage.advantage}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                    <Badge variant="outline">{advantage.moat}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Moat Strength</span>
                      <span className="text-sm font-bold">{advantage.strength}%</span>
                    </div>
                    <Progress value={advantage.strength} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competitive Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Competitive Position Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3">Factor</th>
                      <th className="text-center pb-3 bg-sos-lime/20 px-4 rounded-t-lg">SafeOrStolen</th>
                      <th className="text-center pb-3">Competitor A</th>
                      <th className="text-center pb-3">Competitor B</th>
                      <th className="text-center pb-3">Market Average</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">AI Technology</td>
                      <td className="text-center py-3 bg-sos-lime/10 font-bold text-sos-lime">99.9%</td>
                      <td className="text-center py-3">85%</td>
                      <td className="text-center py-3">78%</td>
                      <td className="text-center py-3">82%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Database Coverage</td>
                      <td className="text-center py-3 bg-sos-lime/10 font-bold text-sos-lime">150+ countries</td>
                      <td className="text-center py-3">45 countries</td>
                      <td className="text-center py-3">78 countries</td>
                      <td className="text-center py-3">60 countries</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Response Time</td>
                      <td className="text-center py-3 bg-sos-lime/10 font-bold text-sos-lime">&lt;3 seconds</td>
                      <td className="text-center py-3">15 seconds</td>
                      <td className="text-center py-3">8 seconds</td>
                      <td className="text-center py-3">12 seconds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Execution Plan */}
        <TabsContent value="execution" className="space-y-6">
          <div className="grid gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5" />
                  30-60-90 Day Execution Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Badge>30 Days</Badge>
                    Foundation & Quick Wins
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Implement referral program with viral mechanics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Launch social proof engine on all pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>A/B test pricing tiers for conversion optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Badge>60 Days</Badge>
                    Scale & Optimize
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>Launch enterprise sales automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>Implement advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>Deploy predictive churn prevention</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Badge>90 Days</Badge>
                    Market Domination
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>Launch API marketplace for third-party integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>International expansion to 5 new markets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sos-orange" />
                      <span>Strategic partnerships with major marketplaces</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Key Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monthly Active Users</span>
                    <span className="font-bold">500K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Recurring Revenue</span>
                    <span className="font-bold">$250K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net Promoter Score</span>
                    <span className="font-bold">80+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Market Share</span>
                    <span className="font-bold">35%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Competitive Wins
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Accuracy Advantage</span>
                    <span className="font-bold text-sos-lime">+14.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed Advantage</span>
                    <span className="font-bold text-sos-lime">5x faster</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coverage Advantage</span>
                    <span className="font-bold text-sos-lime">2.5x more</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price Advantage</span>
                    <span className="font-bold text-sos-lime">40% lower</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-2">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Your Market?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join the platform that's redefining industry standards through systematic growth execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
              <Crown className="mr-2 h-5 w-5" />
              Start Hypergrowth Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              <Globe className="mr-2 h-5 w-5" />
              View Growth Playbook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};