import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Search, 
  Link, 
  FileText, 
  Zap, 
  CheckCircle,
  Calendar,
  AlertCircle
} from 'lucide-react';

const SEOStrategyPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SEO Strategy Guide for SafeOrStolen.com",
    "description": "Comprehensive SEO strategy to dominate search results for stolen item verification, IMEI checking, and marketplace safety keywords.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "url": "https://safeorstolen.com/seo-strategy"
  };

  const priorityActions = [
    {
      id: 1,
      title: "Create Targeted Landing Pages",
      description: "Build dedicated pages for high-value keywords like 'IMEI checker', 'VIN verification', 'stolen phone check'",
      priority: "Critical",
      timeline: "Week 1-2",
      impact: "High",
      status: "completed"
    },
    {
      id: 2,
      title: "Optimize Technical SEO",
      description: "Improve page speed, implement structured data, enhance mobile experience",
      priority: "High",
      timeline: "Week 2-3",
      impact: "High", 
      status: "in-progress"
    },
    {
      id: 3,
      title: "Content Marketing Campaign",
      description: "Create guides on 'How to check if phone is stolen', 'Vehicle fraud prevention', etc.",
      priority: "High",
      timeline: "Week 3-6",
      impact: "Medium",
      status: "planned"
    },
    {
      id: 4,
      title: "Link Building Strategy",
      description: "Target security blogs, consumer protection sites, and automotive forums",
      priority: "Medium",
      timeline: "Week 4-8",
      impact: "High",
      status: "planned"
    }
  ];

  const targetKeywords = [
    { keyword: "stolen item checker", volume: 2400, difficulty: 45, current: null, target: 1 },
    { keyword: "IMEI checker free", volume: 8100, difficulty: 38, current: null, target: 3 },
    { keyword: "check if phone is stolen", volume: 5200, difficulty: 41, current: null, target: 1 },
    { keyword: "VIN verification tool", volume: 1900, difficulty: 52, current: null, target: 5 },
    { keyword: "serial number lookup", volume: 3600, difficulty: 35, current: null, target: 10 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'destructive';
      case 'High': return 'default';
      case 'Medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <>
      <PageSEO
        title="SEO Strategy Guide - Dominate Stolen Item Verification Keywords"
        description="Comprehensive SEO strategy and roadmap to achieve #1 rankings for stolen item verification, IMEI checking, and marketplace safety keywords."
        keywords="SEO strategy, keyword ranking, stolen item verification SEO, IMEI checker SEO, search engine optimization plan"
        canonical="/seo-strategy"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              SEO Strategy & Roadmap
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our comprehensive strategy to dominate search results for stolen item verification keywords and become the #1 destination for marketplace safety.
            </p>
          </div>

          {/* Current Status Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">~0</div>
                <p className="text-xs text-muted-foreground">Monthly visitors</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Ranking Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">0</div>
                <p className="text-xs text-muted-foreground">Keywords in top 50</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Domain Authority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">New</div>
                <p className="text-xs text-muted-foreground">Needs development</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Target Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">50K+</div>
                <p className="text-xs text-muted-foreground">6-month goal</p>
              </CardContent>
            </Card>
          </div>

          {/* Priority Actions */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Priority Action Items
              </CardTitle>
              <CardDescription>
                Strategic initiatives to achieve rapid ranking improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {priorityActions.map((action) => (
                  <div key={action.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(action.status)} mt-2`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{action.title}</h3>
                        <Badge variant={getPriorityColor(action.priority)}>{action.priority}</Badge>
                        <Badge variant="outline" className="text-xs">{action.timeline}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Impact: {action.impact}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {action.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Target Keywords */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-6 w-6" />
                Target Keywords Strategy
              </CardTitle>
              <CardDescription>
                High-priority keywords for stolen item verification market dominance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {targetKeywords.map((keyword, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center p-4 border rounded-lg">
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-sm">{keyword.keyword}</h3>
                      <p className="text-xs text-muted-foreground">
                        {keyword.volume.toLocaleString()} searches/month
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs">Difficulty</span>
                        <Badge variant="outline" className="text-xs">
                          {keyword.difficulty}%
                        </Badge>
                      </div>
                      <Progress value={keyword.difficulty} className="h-2" />
                    </div>

                    <div className="text-center">
                      <span className="text-lg font-bold text-red-500">
                        {keyword.current || 'N/A'}
                      </span>
                      <p className="text-xs text-muted-foreground">Current</p>
                    </div>

                    <div className="text-center">
                      <span className="text-lg font-bold text-green-500">#{keyword.target}</span>
                      <p className="text-xs text-muted-foreground">Target</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SEO Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Landing pages for target keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    Educational content hub
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    FAQ and support content
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    User success stories
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle>Technical SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Mobile optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Page speed optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Structured data markup
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    XML sitemap optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Link className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle>Link Building</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    Security blog outreach
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    Consumer protection sites
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    Automotive forum partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    Law enforcement resources
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Success Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Success Timeline & Milestones
              </CardTitle>
              <CardDescription>
                Expected results and key milestones over the next 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">M1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Month 1: Foundation</h3>
                    <p className="text-sm text-muted-foreground">Complete technical SEO, launch target pages, begin indexing</p>
                    <p className="text-xs text-green-500">Expected: First keyword rankings appear</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">M2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Month 2: Content & Links</h3>
                    <p className="text-sm text-muted-foreground">Launch content marketing, begin link building campaigns</p>
                    <p className="text-xs text-green-500">Expected: Top 50 rankings for target keywords</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">M3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Month 3: Momentum</h3>
                    <p className="text-sm text-muted-foreground">Scale content production, expand keyword targeting</p>
                    <p className="text-xs text-green-500">Expected: 1,000+ monthly visitors, top 20 rankings</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">M6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Month 6: Market Leadership</h3>
                    <p className="text-sm text-muted-foreground">Achieve top rankings, establish domain authority</p>
                    <p className="text-xs text-green-500">Expected: 50K+ monthly visitors, #1 rankings for key terms</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SEOStrategyPage;