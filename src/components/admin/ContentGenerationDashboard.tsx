import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, CheckCircle, AlertCircle, TrendingUp, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContentGenerationDashboard = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFixing, setIsFixing] = useState(false);
  const [stats, setStats] = useState({
    totalContent: 0,
    publishedContent: 0,
    openIssues: 0,
    fixedIssues: 0,
    avgSeoScore: 0,
  });
  const [recentContent, setRecentContent] = useState<any[]>([]);
  const [recentIssues, setRecentIssues] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadDashboardData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadDashboardData = async () => {
    try {
      // Get stats
      const { data: allContent } = await supabase
        .from('ai_generated_content')
        .select('*');

      const { data: publishedContent } = await supabase
        .from('ai_generated_content')
        .select('*')
        .eq('status', 'published');

      const { data: openIssues } = await supabase
        .from('content_issues')
        .select('*')
        .eq('status', 'open');

      const { data: fixedIssues } = await supabase
        .from('content_issues')
        .select('*')
        .eq('status', 'fixed');

      const avgScore = allContent?.reduce((sum, c) => sum + (c.seo_score || 0), 0) / (allContent?.length || 1);

      setStats({
        totalContent: allContent?.length || 0,
        publishedContent: publishedContent?.length || 0,
        openIssues: openIssues?.length || 0,
        fixedIssues: fixedIssues?.length || 0,
        avgSeoScore: Math.round(avgScore),
      });

      // Get recent content
      const { data: recent } = await supabase
        .from('ai_generated_content')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      setRecentContent(recent || []);

      // Get recent issues
      const { data: issues } = await supabase
        .from('content_issues')
        .select('*, ai_generated_content(title, slug)')
        .order('detected_at', { ascending: false })
        .limit(5);

      setRecentIssues(issues || []);

    } catch (error) {
      console.error('Error loading dashboard:', error);
    }
  };

  const generateContent = async () => {
    setIsGenerating(true);
    try {
      // Content generator temporarily disabled during cleanup
      toast({
        title: "Feature Temporarily Unavailable",
        description: "Content generation system is being optimized",
        variant: "destructive",
      });

      loadDashboardData();
    } catch (error: any) {
      toast({
        title: "Generation Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const runAutoFix = async () => {
    setIsFixing(true);
    try {
      // Auto-fix temporarily disabled during cleanup
      toast({
        title: "Feature Temporarily Unavailable",
        description: "Auto-fix system is being optimized",
        variant: "destructive",
      });

      loadDashboardData();
    } catch (error: any) {
      toast({
        title: "Auto-Fix Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsFixing(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            AI Content Generation System
          </h1>
          <p className="text-muted-foreground mt-1">
            Autonomous content creation and optimization for Google rankings
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={runAutoFix} disabled={isFixing}>
            {isFixing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Zap className="w-4 h-4 mr-2" />}
            Auto-Fix Issues
          </Button>
          <Button onClick={generateContent} disabled={isGenerating}>
            {isGenerating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
            Generate Content
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContent}</div>
            <p className="text-xs text-muted-foreground">AI-generated articles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.publishedContent}</div>
            <p className="text-xs text-muted-foreground">Live on site</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg SEO Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-1">
              {stats.avgSeoScore}
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-xs text-muted-foreground">Out of 100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.openIssues}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Auto-Fixed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.fixedIssues}</div>
            <p className="text-xs text-muted-foreground">Automatically resolved</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Content */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Generated Content</CardTitle>
          <CardDescription>Latest AI-generated articles and guides</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentContent.map((content) => (
              <div key={content.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{content.title}</h4>
                  <p className="text-sm text-muted-foreground">/{content.slug}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={content.status === 'published' ? 'default' : 'secondary'}>
                    {content.status}
                  </Badge>
                  <Badge variant="outline">
                    SEO: {content.seo_score}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Issues */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Issues</CardTitle>
          <CardDescription>Content quality and SEO issues</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentIssues.map((issue) => (
              <div key={issue.id} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {issue.status === 'fixed' ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                    )}
                    <h4 className="font-medium">{issue.ai_generated_content?.title || 'Unknown'}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{issue.description}</p>
                  {issue.auto_fixed && (
                    <Badge variant="secondary" className="mt-2">
                      <Zap className="w-3 h-3 mr-1" />
                      Auto-Fixed
                    </Badge>
                  )}
                </div>
                <Badge variant={
                  issue.severity === 'critical' ? 'destructive' :
                  issue.severity === 'high' ? 'default' :
                  'secondary'
                }>
                  {issue.severity}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
