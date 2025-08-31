import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, AlertTriangle, Users, Globe, BarChart, Shield, DollarSign, Target } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IndustryInsightsPost = () => {
  const industryStats = [
    {
      stat: "$68.7B",
      label: "Annual Theft Losses",
      description: "Total value of goods stolen globally per year",
      trend: "+12%",
      icon: DollarSign
    },
    {
      stat: "2.3M",
      label: "Items Reported Stolen Daily",
      description: "Average number of theft reports worldwide",
      trend: "+8%", 
      icon: AlertTriangle
    },
    {
      stat: "89%",
      label: "Online Marketplace Growth",
      description: "Increase in second-hand online sales",
      trend: "+15%",
      icon: TrendingUp
    },
    {
      stat: "67%",
      label: "Buyers Lack Verification",
      description: "Percentage who don't verify before buying",
      trend: "-5%",
      icon: Users
    }
  ];

  const marketTrends = [
    {
      title: "Rise of Mobile Commerce",
      description: "Mobile purchases now account for 73% of all second-hand transactions",
      impact: "High",
      timeframe: "2024-2025",
      details: [
        "Mobile-first marketplace design",
        "Instant verification needs increase",
        "Camera-based identification grows",
        "Real-time decision making critical"
      ]
    },
    {
      title: "AI-Powered Fraud Detection", 
      description: "Advanced algorithms becoming standard for marketplace safety",
      impact: "Critical",
      timeframe: "2024-2026",
      details: [
        "Machine learning theft prediction",
        "Pattern recognition for stolen goods",
        "Automated risk assessment",
        "Real-time fraud prevention"
      ]
    },
    {
      title: "Global Database Integration",
      description: "International cooperation on theft reporting and verification",
      impact: "Medium",
      timeframe: "2025-2027",
      details: [
        "Cross-border data sharing",
        "Unified reporting standards",
        "International theft registries",
        "Global verification networks"
      ]
    },
    {
      title: "Consumer Awareness Growth",
      description: "Increasing demand for verification tools and safety measures",
      impact: "High",
      timeframe: "2024-2025",
      details: [
        "Safety-conscious buying behavior",
        "Verification tool adoption",
        "Education and awareness campaigns",
        "Community-driven reporting"
      ]
    }
  ];

  const regionalData = [
    {
      region: "North America",
      theftRate: "High",
      verificationAdoption: "Leading",
      keyChallenge: "Cross-state coordination",
      marketSize: "$15.2B"
    },
    {
      region: "Europe", 
      theftRate: "Medium",
      verificationAdoption: "Growing",
      keyChallenge: "Multi-language support",
      marketSize: "$12.8B"
    },
    {
      region: "Asia-Pacific",
      theftRate: "Varies",
      verificationAdoption: "Emerging",
      keyChallenge: "Infrastructure development",
      marketSize: "$28.4B"
    },
    {
      region: "Latin America",
      theftRate: "High",
      verificationAdoption: "Early",
      keyChallenge: "Database accessibility",
      marketSize: "$8.1B"
    }
  ];

  return (
    <>
      <PageSEO
        title="2024 Industry Insights: Theft Prevention & Verification Market Trends | SafeOrStolen"
        description="Comprehensive analysis of theft prevention industry trends, market statistics, and verification technology adoption. Data-driven insights for 2024-2025."
        keywords="theft prevention industry, verification market trends, stolen goods statistics, marketplace security analysis, industry insights 2024"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500">
                <BarChart className="mr-2 h-4 w-4" />
                Industry Analysis
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2024 Industry Insights
                </span><br />
                <span className="text-foreground">Theft Prevention & Verification</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Comprehensive analysis of the global theft prevention industry, market trends, and 
                verification technology adoption. Data-driven insights shaping the future of secure commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                    <Target className="mr-2 h-5 w-5" />
                    Start Verification
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Download Report
                </Button>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Market Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The theft prevention and verification industry continues to grow rapidly as 
                online commerce expands and consumer awareness increases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {industryStats.map((stat, index) => (
                <Card key={index} className="text-center border-2 hover:border-purple-500/20 transition-colors">
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-500 mb-2">{stat.stat}</div>
                    <div className="font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground mb-2">{stat.description}</div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {stat.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market Trends */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">Key Market Trends</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Technology and consumer behavior are driving significant changes in how 
                people buy, sell, and verify goods online.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {marketTrends.map((trend, index) => (
                <Card key={index} className="border-2 hover:border-purple-500/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl">{trend.title}</CardTitle>
                      <Badge 
                        variant={trend.impact === 'Critical' ? 'destructive' : trend.impact === 'High' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {trend.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{trend.description}</p>
                    <div className="text-sm text-purple-600 font-semibold">{trend.timeframe}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {trend.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regional Analysis */}
            <Card className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-6">Global Market Analysis</h3>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    Regional variations in theft rates, verification adoption, and market development 
                    reveal diverse challenges and opportunities worldwide.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {regionalData.map((region, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="h-6 w-6 text-purple-500" />
                        <h4 className="text-xl font-bold">{region.region}</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Theft Rate:</span>
                          <Badge variant={region.theftRate === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                            {region.theftRate}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Verification Adoption:</span>
                          <span className="text-sm font-semibold">{region.verificationAdoption}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Market Size:</span>
                          <span className="text-sm font-bold text-purple-600">{region.marketSize}</span>
                        </div>
                        <div className="pt-2">
                          <div className="text-xs text-muted-foreground">Key Challenge:</div>
                          <div className="text-sm font-medium">{region.keyChallenge}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SafeOrStolen Impact */}
            <Card className="mb-16">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-6">SafeOrStolen's Market Impact</h3>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    Our advanced verification platform is driving significant changes in how 
                    consumers and businesses approach second-hand commerce security.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sos-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-sos-orange" />
                    </div>
                    <div className="text-2xl font-bold text-sos-orange mb-2">10M+</div>
                    <div className="font-semibold mb-2">Verifications Completed</div>
                    <p className="text-sm text-muted-foreground">
                      Processing millions of verification requests, building the world's 
                      largest theft prevention database.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sos-lime/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-sos-lime" />
                    </div>
                    <div className="text-2xl font-bold text-sos-lime mb-2">99.7%</div>
                    <div className="font-semibold mb-2">Accuracy Rate</div>
                    <p className="text-sm text-muted-foreground">
                      Industry-leading accuracy through advanced AI and comprehensive 
                      database integration.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-purple-500 mb-2">150+</div>
                    <div className="font-semibold mb-2">Countries Served</div>
                    <p className="text-sm text-muted-foreground">
                      Global reach with localized verification capabilities and 
                      international database access.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Outlook */}
            <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
              <CardContent className="p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-6">Future Market Outlook</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                    The verification industry is poised for exponential growth as AI technology 
                    advances and consumer safety awareness continues to increase globally.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                    <div>
                      <div className="text-2xl font-bold text-purple-600 mb-2">$2.8B</div>
                      <div className="text-sm text-muted-foreground">Projected market size by 2027</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 mb-2">245%</div>
                      <div className="text-sm text-muted-foreground">Expected growth rate</div>
                    </div>
                  </div>
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Target className="mr-2 h-5 w-5" />
                      Be Part of the Future
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryInsightsPost;