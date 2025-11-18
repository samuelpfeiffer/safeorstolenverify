import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  Target, 
  BarChart3, 
  CheckCircle,
  Star,
  Users,
  Shield,
  Award
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const SEOHub = () => {
  const seoMetrics = {
    domainAuthority: 85,
    pageAuthority: 92,
    organicTraffic: 125000,
    keywordRankings: 1200,
    backlinks: 5600,
    searchVisibility: 78
  };

  const keywordCategories = [
    {
      category: "Primary Keywords",
      keywords: ["stolen goods check", "IMEI verification", "VIN lookup", "serial number check"],
      avgPosition: 3.2,
      searchVolume: 85000
    },
    {
      category: "Long-tail Keywords", 
      keywords: ["check if phone is stolen before buying", "verify car not stolen VIN", "safe secondhand buying"],
      avgPosition: 2.8,
      searchVolume: 45000
    },
    {
      category: "Commercial Keywords",
      keywords: ["fraud prevention service", "buyer protection tool", "seller verification platform"],
      avgPosition: 4.1,
      searchVolume: 25000
    }
  ];

  const competitors = [
    { name: "CheckMEND", ranking: 2, traffic: 95000 },
    { name: "StolenPhoneChecker", ranking: 3, traffic: 78000 },
    { name: "GSMADatabase", ranking: 4, traffic: 65000 },
    { name: "PhoneHistory", ranking: 5, traffic: 52000 }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen SEO Performance Hub - Rankings & Analytics"
        description="Monitor SafeOrStolen's search engine optimization performance, keyword rankings, and competitive analysis. Leading the stolen goods verification market."
        keywords="SafeOrStolen SEO, search rankings, keyword performance, stolen goods verification SEO, IMEI check rankings"
        canonical="/seo-hub"
        noIndex={true}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <Badge className="bg-green-100 text-green-800">
              SEO Performance Dashboard
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              SEO Analytics Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time search engine optimization performance for SafeOrStolen. 
              Dominating search results for stolen goods verification.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Domain Authority</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-green-600">{seoMetrics.domainAuthority}</div>
                <Progress value={seoMetrics.domainAuthority} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Page Authority</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-blue-600">{seoMetrics.pageAuthority}</div>
                <Progress value={seoMetrics.pageAuthority} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Organic Traffic</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-purple-600">{seoMetrics.organicTraffic.toLocaleString()}</div>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +15% this month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Keywords Ranking</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-orange-600">{seoMetrics.keywordRankings}</div>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <Target className="w-3 h-3 mr-1" />
                  Top 10 positions
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Quality Backlinks</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-indigo-600">{seoMetrics.backlinks}</div>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <Globe className="w-3 h-3 mr-1" />
                  High authority
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Search Visibility</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-pink-600">{seoMetrics.searchVisibility}%</div>
                <Progress value={seoMetrics.searchVisibility} className="mt-2 h-2" />
              </CardContent>
            </Card>
          </div>

          {/* Keyword Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Keyword Performance
                </CardTitle>
                <CardDescription>
                  Top performing keyword categories and rankings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {keywordCategories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{category.category}</h4>
                      <Badge variant="secondary">
                        Pos #{category.avgPosition}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Monthly Volume: {category.searchVolume.toLocaleString()}
                    </div>
                    <div className="space-y-1">
                      {category.keywords.map((keyword, idx) => (
                        <div key={idx} className="text-sm bg-muted/50 px-2 py-1 rounded">
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Competitive Analysis
                </CardTitle>
                <CardDescription>
                  How we rank against top competitors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-green-900">SafeOrStolen</p>
                        <p className="text-sm text-green-700">Market Leader</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-900">{seoMetrics.organicTraffic.toLocaleString()}</p>
                      <p className="text-xs text-green-700">monthly visits</p>
                    </div>
                  </div>

                  {competitors.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold text-sm">
                          {competitor.ranking}
                        </div>
                        <div>
                          <p className="font-medium">{competitor.name}</p>
                          <p className="text-sm text-muted-foreground">Competitor</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{competitor.traffic.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">monthly visits</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Signals */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Trust & Authority Signals
              </CardTitle>
              <CardDescription>
                What makes SafeOrStolen the most trusted verification platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium">SSL Secured</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-medium">1M+ Users</h4>
                  <p className="text-sm text-muted-foreground">Trusted by millions</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium">FasterCapital</h4>
                  <p className="text-sm text-muted-foreground">Accelerated startup</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-medium">4.9/5 Rating</h4>
                  <p className="text-sm text-muted-foreground">Excellent reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Items */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Optimization Actions</CardTitle>
              <CardDescription>
                Continuous improvements to maintain search dominance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto flex-col space-y-2 p-4">
                  <Globe className="w-5 h-5" />
                  <span>International SEO</span>
                  <span className="text-xs opacity-70">Expand global reach</span>
                </Button>
                
                <Button variant="outline" className="h-auto flex-col space-y-2 p-4">
                  <Target className="w-5 h-5" />
                  <span>Voice Search</span>
                  <span className="text-xs opacity-70">Optimize for voice queries</span>
                </Button>
                
                <Button variant="outline" className="h-auto flex-col space-y-2 p-4">
                  <BarChart3 className="w-5 h-5" />
                  <span>AI Search</span>
                  <span className="text-xs opacity-70">Optimize for AI answers</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SEOHub;