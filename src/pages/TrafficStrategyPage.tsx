import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, TrendingUp, Users, DollarSign, Target, Zap, Globe, Share2, FileText, Link as LinkIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function TrafficStrategyPage() {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const markComplete = (taskId: string) => {
    setCompletedTasks(prev => new Set(prev).add(taskId));
    toast.success('Task marked complete!');
  };

  const immediateActions = [
    {
      id: 'gsc-submit',
      title: 'Submit All Sitemaps to Google Search Console',
      description: 'Submit these sitemaps immediately in GSC:',
      urls: [
        'https://safeorstolen.com/sitemap.xml',
        'https://safeorstolen.com/sitemap-core.xml',
        'https://safeorstolen.com/sitemap-blog.xml',
        'https://safeorstolen.com/sitemap-mobile-app-expanded.xml',
        'https://safeorstolen.com/sitemap-seo-expansion.xml',
        'https://safeorstolen.com/sitemap-states.xml'
      ],
      timeframe: 'Today (5 minutes)',
      impact: 'Critical',
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 'bing-submit',
      title: 'Submit to Bing Webmaster Tools',
      description: 'Sign up at bing.com/webmasters and submit your sitemap. Bing often indexes faster than Google.',
      action: 'https://www.bing.com/webmasters/',
      timeframe: 'Today (10 minutes)',
      impact: 'High',
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 'gsc-index-request',
      title: 'Request Indexing for Top 20 Pages',
      description: 'Use GSC URL Inspection to request indexing for these priority URLs:',
      urls: [
        'https://safeorstolen.com/',
        'https://safeorstolen.com/verify',
        'https://safeorstolen.com/imei-checker',
        'https://safeorstolen.com/vin-checker',
        'https://safeorstolen.com/mobile-app',
        'https://safeorstolen.com/install-app',
        'https://safeorstolen.com/pricing',
        'https://safeorstolen.com/how-it-works'
      ],
      timeframe: 'Today (30 minutes)',
      impact: 'Critical',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'social-announce',
      title: 'Announce on Social Media',
      description: 'Post about SafeOrStolen on LinkedIn, Twitter/X, Facebook, Reddit (r/Flipping, r/Entrepreneur)',
      timeframe: 'Today (15 minutes)',
      impact: 'High',
      icon: <Share2 className="w-5 h-5" />
    }
  ];

  const week1Actions = [
    {
      id: 'directories',
      title: 'Submit to 20+ Directories',
      description: 'Submit to Product Hunt, BetaList, AlternativeTo, Capterra, G2, Slashdot, Hacker News, etc.',
      timeframe: 'Week 1',
      impact: 'High',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'backlinks-1',
      title: 'Get First 10 Backlinks',
      description: 'Guest post on security blogs, reach out to marketplace safety sites, comment on relevant forums',
      timeframe: 'Week 1',
      impact: 'High',
      icon: <LinkIcon className="w-5 h-5" />
    },
    {
      id: 'reddit-engage',
      title: 'Engage in 10+ Reddit Threads',
      description: 'Provide genuine value in r/Flipping, r/ThriftStoreHauls, r/eBay, r/Craigslist with subtle mentions',
      timeframe: 'Week 1',
      impact: 'Medium',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const paidTrafficOptions = [
    {
      title: 'Google Ads - Search',
      budget: '$300-500/month',
      targeting: 'IMEI checker, VIN lookup, check if phone stolen',
      expectedTraffic: '500-1000 clicks/month',
      startImmediately: true
    },
    {
      title: 'Facebook/Instagram Ads',
      budget: '$200-400/month',
      targeting: 'People interested in Facebook Marketplace, eBay, buying used items',
      expectedTraffic: '1000-2000 clicks/month',
      startImmediately: true
    },
    {
      title: 'Reddit Ads',
      budget: '$100-200/month',
      targeting: 'r/Flipping, r/ThriftStoreHauls, r/eBay audiences',
      expectedTraffic: '300-600 clicks/month',
      startImmediately: true
    }
  ];

  const organicGrowth = [
    {
      strategy: 'Content Marketing',
      actions: [
        'Publish 2 blog posts per week targeting "how to avoid stolen goods" keywords',
        'Create comparison guides: SafeOrStolen vs Checkmend vs IMEI24',
        'Write city-specific guides: "How to buy safely on LA Craigslist"'
      ],
      timeline: 'Ongoing - 3-6 months for results',
      expectedTraffic: '1000-5000/month after 6 months'
    },
    {
      strategy: 'Marketplace Partnerships',
      actions: [
        'Reach out to eBay, Facebook Marketplace for integration',
        'Contact pawn shop associations',
        'Partner with police departments for stolen goods recovery'
      ],
      timeline: '1-3 months to establish',
      expectedTraffic: '5000-20000/month if successful'
    },
    {
      strategy: 'PR & Media Outreach',
      actions: [
        'Press release: "New Mobile App Protects Buyers from Stolen Goods"',
        'Pitch to TechCrunch, VentureBeat, local news',
        'HARO responses (Help a Reporter Out)'
      ],
      timeline: '1-2 months',
      expectedTraffic: '2000-10000/month from media coverage'
    }
  ];

  return (
    <>
      <PageSEO
        title="Traffic Generation Strategy - SafeOrStolen"
        description="Immediate actionable steps to drive traffic to SafeOrStolen.com and get your first 10,000 visitors."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="default" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Traffic Generation Dashboard
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Get Your First 10,000 Visitors
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your site is technically perfect. Now execute these proven strategies to drive traffic TODAY.
            </p>
          </div>

          {/* Immediate Actions (TODAY) */}
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="w-6 h-6 text-primary" />
                Immediate Actions (Execute Today)
              </CardTitle>
              <CardDescription>
                These take less than 1 hour total and will start driving traffic within days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {immediateActions.map((action) => (
                <div key={action.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="mt-1">{action.icon}</div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold">{action.title}</h3>
                          <Badge variant={action.impact === 'Critical' ? 'destructive' : 'default'}>
                            {action.impact} Impact
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="w-3 h-3 mr-1" />
                            {action.timeframe}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                        {action.urls && (
                          <ul className="text-xs space-y-1 pl-4">
                            {action.urls.map((url, idx) => (
                              <li key={idx} className="text-primary break-all">{url}</li>
                            ))}
                          </ul>
                        )}
                        {action.action && (
                          <a 
                            href={action.action} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Open {action.action} <LinkIcon className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={completedTasks.has(action.id) ? "secondary" : "default"}
                      onClick={() => markComplete(action.id)}
                      disabled={completedTasks.has(action.id)}
                    >
                      {completedTasks.has(action.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Done
                        </>
                      ) : (
                        'Mark Complete'
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Week 1 Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Week 1 Strategy
              </CardTitle>
              <CardDescription>
                Execute these within 7 days to build momentum
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {week1Actions.map((action) => (
                <div key={action.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="mt-1">{action.icon}</div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold">{action.title}</h3>
                          <Badge variant="default">{action.impact} Impact</Badge>
                          <Badge variant="outline">{action.timeframe}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={completedTasks.has(action.id) ? "secondary" : "outline"}
                      onClick={() => markComplete(action.id)}
                      disabled={completedTasks.has(action.id)}
                    >
                      {completedTasks.has(action.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Done
                        </>
                      ) : (
                        'Mark Complete'
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Paid Traffic (Immediate Results) */}
          <Card className="border-2 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Paid Traffic (Start Getting Clicks Today)
              </CardTitle>
              <CardDescription>
                Investment required, but you'll see traffic within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {paidTrafficOptions.map((option, idx) => (
                  <div key={idx} className="p-4 border rounded-lg space-y-3">
                    <h3 className="font-semibold">{option.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <p className="font-medium">{option.budget}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Targeting:</span>
                        <p className="text-xs">{option.targeting}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected Traffic:</span>
                        <p className="font-medium text-green-600">{option.expectedTraffic}</p>
                      </div>
                    </div>
                    {option.startImmediately && (
                      <Badge variant="default" className="bg-green-600">
                        Can Start Today
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm">
                  <strong>Total Investment:</strong> $600-1,100/month = <strong>1,800-3,600 visitors/month</strong>
                  <br />
                  Expected conversions at 5% signup rate: <strong>90-180 signups/month</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Organic Growth (Long-term) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Organic Growth Strategy (Free, Takes Time)
              </CardTitle>
              <CardDescription>
                Sustainable long-term traffic that compounds over time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {organicGrowth.map((strategy, idx) => (
                <div key={idx} className="p-4 border rounded-lg space-y-3">
                  <h3 className="font-semibold text-lg">{strategy.strategy}</h3>
                  <ul className="space-y-2">
                    {strategy.actions.map((action, actionIdx) => (
                      <li key={actionIdx} className="text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 text-sm pt-2">
                    <Badge variant="outline">{strategy.timeline}</Badge>
                    <span className="text-muted-foreground">
                      Expected: <strong className="text-foreground">{strategy.expectedTraffic}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reality Check */}
          <Card className="border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/10">
            <CardHeader>
              <CardTitle>⏰ Reality Check: SEO Takes Time</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Week 1-2:</strong> Google will start crawling. You may see 10-50 impressions/day. Zero clicks is normal.
                </p>
                <p>
                  <strong>Weeks 3-4:</strong> First pages indexed. 50-200 impressions/day. 0-5 clicks/day.
                </p>
                <p>
                  <strong>Month 2:</strong> Long-tail keywords start ranking. 200-500 impressions/day. 5-20 clicks/day.
                </p>
                <p>
                  <strong>Month 3-6:</strong> Momentum builds. 500-2,000 impressions/day. 20-100 clicks/day.
                </p>
                <p className="font-semibold text-base pt-2">
                  To get traffic BEFORE Google indexes you fully: Use paid ads, social media, and direct outreach.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Progress Tracker */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">
                      Immediate Actions Completed
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {Array.from(completedTasks).filter(id => 
                        immediateActions.some(a => a.id === id)
                      ).length}/{immediateActions.length}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ 
                        width: `${(Array.from(completedTasks).filter(id => 
                          immediateActions.some(a => a.id === id)
                        ).length / immediateActions.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">
                      Week 1 Actions Completed
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {Array.from(completedTasks).filter(id => 
                        week1Actions.some(a => a.id === id)
                      ).length}/{week1Actions.length}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ 
                        width: `${(Array.from(completedTasks).filter(id => 
                          week1Actions.some(a => a.id === id)
                        ).length / week1Actions.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
