import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Crown,
  Eye,
  Brain,
  Globe,
  Users,
  DollarSign,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  X,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

interface CompetitorData {
  name: string;
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  accuracy: number;
  speed: string;
  coverage: string;
  funding: string;
  users: string;
}

export const CompetitiveAnalyzer: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('accuracy');

  const competitors: CompetitorData[] = [
    {
      name: 'SafeOrStolen',
      marketShare: 23.4,
      strengths: ['AI-powered verification', 'Mobile-first design', 'Global coverage', 'Free tier', 'Real-time updates'],
      weaknesses: ['Newer brand', 'Building enterprise relationships'],
      pricing: 'Freemium ($0-$49.95/mo)',
      accuracy: 99.9,
      speed: '<3 seconds',
      coverage: '150+ countries',
      funding: 'Series A',
      users: '10M+'
    },
    {
      name: 'Competitor A',
      marketShare: 18.7,
      strengths: ['Established brand', 'Enterprise relationships', 'Large database'],
      weaknesses: ['Outdated technology', 'Slow verification', 'Limited mobile'],
      pricing: 'Premium only ($25-$99/mo)',
      accuracy: 85.2,
      speed: '15-30 seconds',
      coverage: '45 countries',
      funding: 'Series C',
      users: '5M+'
    },
    {
      name: 'Competitor B',
      marketShare: 15.3,
      strengths: ['Good API integration', 'Decent mobile app', 'Mid-range pricing'],
      weaknesses: ['Limited accuracy', 'Regional focus', 'No free tier'],
      pricing: 'Tiered ($15-$75/mo)',
      accuracy: 78.5,
      speed: '8-12 seconds',
      coverage: '78 countries',
      funding: 'Series B',
      users: '3M+'
    },
    {
      name: 'Competitor C',
      marketShare: 12.1,
      strengths: ['Low cost', 'Simple interface', 'Quick setup'],
      weaknesses: ['Poor accuracy', 'Limited features', 'Outdated data'],
      pricing: 'Budget ($5-$25/mo)',
      accuracy: 68.9,
      speed: '20-45 seconds',
      coverage: '25 countries',
      funding: 'Seed',
      users: '1M+'
    },
    {
      name: 'Others',
      marketShare: 30.5,
      strengths: ['Various niche solutions'],
      weaknesses: ['Fragmented market'],
      pricing: 'Varies',
      accuracy: 65,
      speed: 'Varies',
      coverage: 'Limited',
      funding: 'Various',
      users: 'Various'
    }
  ];

  const competitiveFeatures = [
    {
      feature: 'AI-Powered Verification',
      safeorstolen: true,
      competitorA: false,
      competitorB: false,
      competitorC: false,
      importance: 'Critical'
    },
    {
      feature: 'Mobile-First Design',
      safeorstolen: true,
      competitorA: false,
      competitorB: true,
      competitorC: false,
      importance: 'High'
    },
    {
      feature: 'Real-Time Updates',
      safeorstolen: true,
      competitorA: false,
      competitorB: false,
      competitorC: false,
      importance: 'High'
    },
    {
      feature: 'Free Tier Available',
      safeorstolen: true,
      competitorA: false,
      competitorB: false,
      competitorC: false,
      importance: 'Medium'
    },
    {
      feature: 'Global Database',
      safeorstolen: true,
      competitorA: true,
      competitorB: true,
      competitorC: false,
      importance: 'High'
    },
    {
      feature: 'API Integration',
      safeorstolen: true,
      competitorA: true,
      competitorB: true,
      competitorC: false,
      importance: 'Medium'
    },
    {
      feature: 'Enterprise Support',
      safeorstolen: true,
      competitorA: true,
      competitorB: true,
      competitorC: false,
      importance: 'High'
    },
    {
      feature: 'Bulk Processing',
      safeorstolen: true,
      competitorA: true,
      competitorB: false,
      competitorC: false,
      importance: 'Medium'
    }
  ];

  const swotAnalysis = {
    strengths: [
      'First-mover advantage in AI verification',
      '99.9% accuracy rate - industry leading',
      'Fastest verification speed (<3 seconds)',
      'Comprehensive global coverage (150+ countries)',
      'Freemium model drives user acquisition',
      'Mobile-first architecture',
      'Real-time database updates',
      'Strong technical team and innovation'
    ],
    weaknesses: [
      'Newer brand in established market',
      'Building enterprise relationships',
      'Limited marketing budget vs. incumbents',
      'Scaling customer support'
    ],
    opportunities: [
      '$13B stolen goods market growing 8.5% YoY',
      'Increasing online fraud awareness',
      'Mobile commerce expansion globally',
      'Partnership opportunities with marketplaces',
      'Enterprise digital transformation',
      'International expansion potential',
      'AI technology advancement',
      'Regulatory changes favoring verification'
    ],
    threats: [
      'Large incumbents with deep pockets',
      'Potential new entrants with funding',
      'Economic downturn affecting premium subscriptions',
      'Regulatory changes in key markets',
      'Technology disruption',
      'Data privacy concerns'
    ]
  };

  const getCompetitiveAdvantage = (metric: string) => {
    const us = competitors[0]; // SafeOrStolen
    const bestCompetitor = competitors.slice(1, 4).reduce((best, current) => {
      switch (metric) {
        case 'accuracy':
          return current.accuracy > best.accuracy ? current : best;
        case 'marketShare':
          return current.marketShare > best.marketShare ? current : best;
        default:
          return best;
      }
    });

    switch (metric) {
      case 'accuracy':
        return {
          advantage: us.accuracy - bestCompetitor.accuracy,
          unit: '%',
          better: us.accuracy > bestCompetitor.accuracy
        };
      case 'marketShare':
        return {
          advantage: us.marketShare - bestCompetitor.marketShare,
          unit: '%',
          better: us.marketShare > bestCompetitor.marketShare
        };
      default:
        return { advantage: 0, unit: '', better: true };
    }
  };

  const renderFeatureIcon = (hasFeature: boolean) => {
    return hasFeature ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-red-500" />
    );
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Competitive Intelligence Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Eye className="h-10 w-10" />
            Competitive Intelligence Dashboard
          </h1>
          <p className="text-lg opacity-90 mb-4">
            Real-time analysis of competitive positioning and market opportunities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm opacity-80">Accuracy Advantage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5x</div>
              <div className="text-sm opacity-80">Speed Advantage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2.5x</div>
              <div className="text-sm opacity-80">Coverage Advantage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">#1</div>
              <div className="text-sm opacity-80">Market Position</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="features">Feature Analysis</TabsTrigger>
          <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
        </TabsList>

        {/* Market Overview */}
        <TabsContent value="overview" className="space-y-6">
          {/* Market Share Visualization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Market Share Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className={`font-bold ${index === 0 ? 'text-sos-orange' : 'text-muted-foreground'}`}>
                          {competitor.name}
                        </span>
                        {index === 0 && <Badge className="bg-sos-lime text-sos-dark">Leader</Badge>}
                      </div>
                      <span className="font-bold">{competitor.marketShare}%</span>
                    </div>
                    <Progress 
                      value={competitor.marketShare} 
                      className={`h-3 ${index === 0 ? 'bg-sos-orange/20' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competitive Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitors.slice(0, 4).map((competitor, index) => (
              <Card key={index} className={`border-2 ${index === 0 ? 'border-sos-orange bg-sos-orange/5' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{competitor.name}</CardTitle>
                    {index === 0 && <Crown className="h-5 w-5 text-sos-orange" />}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Accuracy:</span>
                    <span className={`font-bold ${index === 0 ? 'text-sos-orange' : ''}`}>
                      {competitor.accuracy}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Speed:</span>
                    <span className={`font-bold ${index === 0 ? 'text-sos-lime' : ''}`}>
                      {competitor.speed}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Coverage:</span>
                    <span className="font-bold">{competitor.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Users:</span>
                    <span className="font-bold">{competitor.users}</span>
                  </div>
                  <Badge variant="outline" className="w-full justify-center">
                    {competitor.pricing}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competitive Advantages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Key Competitive Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="h-6 w-6 text-green-600" />
                    <h4 className="font-bold">Technology Advantage</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI-powered verification with 99.9% accuracy - 14.7% better than closest competitor
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-6 w-6 text-blue-600" />
                    <h4 className="font-bold">Speed Advantage</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sub-3 second verification - 5x faster than industry average
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="h-6 w-6 text-purple-600" />
                    <h4 className="font-bold">Coverage Advantage</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    150+ countries coverage - 2.5x more than nearest competitor
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Feature Comparison */}
        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Feature Comparison Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 pr-4">Feature</th>
                      <th className="text-center pb-3 px-4">Importance</th>
                      <th className="text-center pb-3 bg-sos-lime/20 px-4 rounded-t-lg">SafeOrStolen</th>
                      <th className="text-center pb-3 px-4">Competitor A</th>
                      <th className="text-center pb-3 px-4">Competitor B</th>
                      <th className="text-center pb-3 px-4">Competitor C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitiveFeatures.map((feature, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 pr-4 font-medium">{feature.feature}</td>
                        <td className="text-center py-3 px-4">
                          <Badge className={getImportanceColor(feature.importance)}>
                            {feature.importance}
                          </Badge>
                        </td>
                        <td className="text-center py-3 bg-sos-lime/10 px-4">
                          {renderFeatureIcon(feature.safeorstolen)}
                        </td>
                        <td className="text-center py-3 px-4">
                          {renderFeatureIcon(feature.competitorA)}
                        </td>
                        <td className="text-center py-3 px-4">
                          {renderFeatureIcon(feature.competitorB)}
                        </td>
                        <td className="text-center py-3 px-4">
                          {renderFeatureIcon(feature.competitorC)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Competitive Positioning */}
          <Card>
            <CardHeader>
              <CardTitle>Competitive Positioning Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-green-600">Our Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Highest accuracy in market (99.9%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Fastest verification speed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Only platform with free tier</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Mobile-first design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Real-time data updates</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-orange-600">Areas to Improve</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Brand recognition vs. incumbents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Enterprise relationship building</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Marketing budget vs. competitors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SWOT Analysis */}
        <TabsContent value="swot" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <ArrowUp className="h-5 w-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {swotAnalysis.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <ArrowDown className="h-5 w-5" />
                  Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {swotAnalysis.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Star className="h-5 w-5" />
                  Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {swotAnalysis.opportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertTriangle className="h-5 w-5" />
                  Threats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {swotAnalysis.threats.map((threat, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{threat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Strategy */}
        <TabsContent value="strategy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Competitive Strategy Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-sos-orange/10 rounded-lg border border-sos-orange/30">
                  <h4 className="font-bold mb-3 text-sos-orange">Differentiation Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• AI-powered accuracy advantage</li>
                    <li>• Speed leadership (sub-3 seconds)</li>
                    <li>• Mobile-first user experience</li>
                    <li>• Freemium accessibility</li>
                  </ul>
                </div>
                <div className="p-4 bg-sos-lime/10 rounded-lg border border-sos-lime/30">
                  <h4 className="font-bold mb-3 text-sos-lime">Growth Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Viral referral programs</li>
                    <li>• Content marketing dominance</li>
                    <li>• Partnership ecosystem</li>
                    <li>• International expansion</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold mb-3 text-blue-600">Defensive Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Patent protection</li>
                    <li>• Network effects</li>
                    <li>• Customer lock-in</li>
                    <li>• Continuous innovation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};