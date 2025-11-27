import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Activity, FileText, Link, TrendingUp, Users, Wrench, Play, Pause } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const AISEODashboard = () => {
  const { toast } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [stats, setStats] = useState({
    content_generated: 0,
    backlinks_found: 0,
    keywords_tracked: 0,
    competitors_monitored: 0,
    technical_checks: 0,
  });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    fetchStats();
    fetchRecentActivity();
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('autonomous_system_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;

      const contentCount = data?.filter(m => m.metric_type === 'content_generation').length || 0;
      const backlinksCount = data?.filter(m => m.metric_type === 'backlink_opportunity').length || 0;
      const rankingsCount = data?.filter(m => m.metric_type === 'keyword_rankings').length || 0;
      const competitorCount = data?.filter(m => m.metric_type === 'competitor_activity').length || 0;
      const technicalCount = data?.filter(m => m.metric_type === 'technical_seo_audit').length || 0;

      setStats({
        content_generated: contentCount,
        backlinks_found: backlinksCount,
        keywords_tracked: rankingsCount,
        competitors_monitored: competitorCount,
        technical_checks: technicalCount,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchRecentActivity = async () => {
    try {
      const { data, error } = await supabase
        .from('autonomous_system_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setRecentActivity(data || []);
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  };

  const runAISEOSystem = async () => {
    setIsRunning(true);
    toast({
      title: "AI SEO System Starting",
      description: "Running all 5 autonomous modules...",
    });

    try {
      const { data, error } = await supabase.functions.invoke('ai-seo-orchestrator', {
        body: {},
      });

      if (error) throw error;

      toast({
        title: "AI SEO System Complete",
        description: `${data.summary.successful}/${data.summary.total_operations} operations successful`,
      });

      fetchStats();
      fetchRecentActivity();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO
        title="AI SEO Dashboard - SafeOrStolen"
        description="Autonomous AI-powered SEO system running 24/7 to dominate search rankings"
        keywords="AI SEO, autonomous SEO, search rankings"
      />

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">AI SEO Command Center</h1>
          <p className="text-muted-foreground">Autonomous 24/7 SEO operations</p>
        </div>
        <Button
          size="lg"
          onClick={runAISEOSystem}
          disabled={isRunning}
          className="gap-2"
        >
          {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          {isRunning ? 'Running...' : 'Run All Modules'}
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.content_generated}</div>
            <p className="text-xs text-muted-foreground">Posts generated</p>
            <Badge variant="default" className="mt-2">Active</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Link className="h-4 w-4" />
              Backlink AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.backlinks_found}</div>
            <p className="text-xs text-muted-foreground">Opportunities found</p>
            <Badge variant="default" className="mt-2">Active</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Rank Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.keywords_tracked}</div>
            <p className="text-xs text-muted-foreground">Keywords tracked</p>
            <Badge variant="default" className="mt-2">Active</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Competitor AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.competitors_monitored}</div>
            <p className="text-xs text-muted-foreground">Activities detected</p>
            <Badge variant="default" className="mt-2">Active</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Technical Bot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.technical_checks}</div>
            <p className="text-xs text-muted-foreground">Audits completed</p>
            <Badge variant="default" className="mt-2">Active</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content AI</TabsTrigger>
          <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest AI SEO operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <Activity className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">{activity.metric_type.replace(/_/g, ' ').toUpperCase()}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(activity.created_at).toLocaleString()}
                      </div>
                    </div>
                    <Badge variant="secondary">Automated</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Content Generation AI</CardTitle>
              <CardDescription>Auto-generates 3 blog posts per week</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Content AI automatically generates SEO-optimized blog posts targeting competitor keywords
                and publishes them automatically. Posts include internal links, schema markup, and CTAs.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold">{stats.content_generated}</div>
                  <div className="text-sm text-muted-foreground">Total posts generated</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">3/week</div>
                  <div className="text-sm text-muted-foreground">Publishing schedule</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backlinks">
          <Card>
            <CardHeader>
              <CardTitle>Backlink Finder & Outreach</CardTitle>
              <CardDescription>Discovers and contacts backlink opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Backlink AI scrapes competitor backlinks, generates personalized outreach emails,
                and tracks responses. Target: 50 backlinks by Month 3.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold">{stats.backlinks_found}</div>
                  <div className="text-sm text-muted-foreground">Opportunities found</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">50/week</div>
                  <div className="text-sm text-muted-foreground">Outreach target</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rankings">
          <Card>
            <CardHeader>
              <CardTitle>Rank Tracker & Auto-Optimizer</CardTitle>
              <CardDescription>Monitors 100 keywords and auto-optimizes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Rank Tracker monitors keyword positions daily and automatically suggests optimizations
                when rankings drop. AI generates improvement suggestions and implements them.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold">{stats.keywords_tracked}</div>
                  <div className="text-sm text-muted-foreground">Tracking cycles</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">100</div>
                  <div className="text-sm text-muted-foreground">Keywords monitored</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Intelligence</CardTitle>
              <CardDescription>Monitors 5 competitors and auto-responds</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Competitor AI monitors CheckMEND, IMEI.info, IMEIPro, LeadsOnline, and Stolen Register.
                When they publish new content, AI automatically creates superior counter-content.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold">{stats.competitors_monitored}</div>
                  <div className="text-sm text-muted-foreground">Activities detected</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">Competitors tracked</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Technical SEO Bot</CardTitle>
              <CardDescription>Daily automated technical audits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Technical Bot validates schemas, checks broken links, monitors Core Web Vitals,
                updates sitemaps, and auto-fixes issues daily at 2am.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold">{stats.technical_checks}</div>
                  <div className="text-sm text-muted-foreground">Audits completed</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">Daily</div>
                  <div className="text-sm text-muted-foreground">Audit schedule</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AISEODashboard;
