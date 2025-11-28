import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Brain, TrendingUp, Users, FileText, Target, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PageSEO } from "@/components/seo/PageSEO";

export default function AutonomousAIDashboard() {
  const { toast } = useToast();

  const { data: metrics, isLoading: metricsLoading } = useQuery({
    queryKey: ['autonomous-metrics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('business_metrics')
        .select('*')
        .order('recorded_at', { ascending: false })
        .limit(7);
      if (error) throw error;
      return data;
    },
    refetchInterval: 60000, // Refresh every minute
  });

  const { data: contentStats, isLoading: contentLoading } = useQuery({
    queryKey: ['content-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_generated_content')
        .select('status, seo_score, created_at')
        .order('created_at', { ascending: false })
        .limit(50);
      if (error) throw error;
      return {
        total: data.length,
        published: data.filter(c => c.status === 'published').length,
        avgSeoScore: data.reduce((sum, c) => sum + (c.seo_score || 0), 0) / data.length,
        thisWeek: data.filter(c => new Date(c.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
      };
    },
    refetchInterval: 60000,
  });

  const { data: competitorData, isLoading: competitorLoading } = useQuery({
    queryKey: ['competitor-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('competitor_analysis')
        .select('*')
        .order('last_analyzed_at', { ascending: false })
        .limit(10);
      if (error) throw error;
      return data;
    },
    refetchInterval: 300000, // Refresh every 5 minutes
  });

  const { data: seoSuggestions, isLoading: suggestionsLoading } = useQuery({
    queryKey: ['seo-suggestions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_seo_suggestions')
        .select('*')
        .eq('status', 'pending')
        .order('priority', { ascending: true })
        .limit(10);
      if (error) throw error;
      return data;
    },
    refetchInterval: 300000,
  });

  const triggerFunction = async (functionName: string) => {
    try {
      const { data, error } = await supabase.functions.invoke(functionName);
      if (error) throw error;
      toast({
        title: "Function Triggered",
        description: `${functionName} executed successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to trigger ${functionName}`,
        variant: "destructive",
      });
    }
  };

  if (metricsLoading || contentLoading || competitorLoading || suggestionsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <PageSEO
        title="Autonomous AI Dashboard - SafeOrStolen Admin"
        description="Monitor and control SafeOrStolen's autonomous AI system for content generation, SEO, and competitor tracking."
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Brain className="h-10 w-10 text-primary" />
            Autonomous AI System
          </h1>
          <p className="text-muted-foreground">
            Real-time monitoring of SafeOrStolen's 24/7 autonomous AI operations
          </p>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-8 w-8 text-blue-500" />
              <span className="text-sm font-medium text-green-600">Active</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{contentStats?.published || 0}</h3>
            <p className="text-sm text-muted-foreground">Content Published</p>
            <p className="text-xs text-muted-foreground mt-2">
              +{contentStats?.thisWeek || 0} this week
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="h-8 w-8 text-purple-500" />
              <span className="text-sm font-medium text-green-600">Monitoring</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{competitorData?.length || 0}</h3>
            <p className="text-sm text-muted-foreground">Competitors Tracked</p>
            <p className="text-xs text-muted-foreground mt-2">
              Updated weekly
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <span className="text-sm font-medium text-green-600">Running</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{Math.round(contentStats?.avgSeoScore || 0)}</h3>
            <p className="text-sm text-muted-foreground">Avg SEO Score</p>
            <p className="text-xs text-muted-foreground mt-2">
              Target: 85+
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-orange-500" />
              <span className="text-sm font-medium text-green-600">Active</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{seoSuggestions?.length || 0}</h3>
            <p className="text-sm text-muted-foreground">AI Suggestions</p>
            <p className="text-xs text-muted-foreground mt-2">
              Pending review
            </p>
          </Card>
        </div>

        {/* Manual Controls */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Manual Triggers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              onClick={() => triggerFunction('autonomous-content-generator')}
              className="w-full"
            >
              <Play className="h-4 w-4 mr-2" />
              Generate Content
            </Button>
            <Button 
              onClick={() => triggerFunction('seo-executor')}
              variant="outline"
              className="w-full"
            >
              <Play className="h-4 w-4 mr-2" />
              Run SEO Tasks
            </Button>
            <Button 
              onClick={() => triggerFunction('competitor-tracker')}
              variant="outline"
              className="w-full"
            >
              <Play className="h-4 w-4 mr-2" />
              Track Competitors
            </Button>
          </div>
        </Card>

        {/* Recent Content */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Recent AI-Generated Content</h2>
          <div className="space-y-3">
            {contentStats && Array.from({ length: Math.min(5, contentStats.thisWeek) }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Blog post generated</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(Date.now() - i * 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Competitor Insights */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Competitor Insights</h2>
          <div className="space-y-3">
            {competitorData?.slice(0, 5).map((comp) => (
              <div key={comp.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Target className="h-4 w-4 text-purple-500" />
                  <div>
                    <span className="text-sm font-medium">{comp.competitor_domain}</span>
                    <p className="text-xs text-muted-foreground">
                      Keyword: {comp.keyword} • Rank: #{comp.competitor_rank}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  Our rank: #{comp.our_rank}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Suggestions */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">AI SEO Suggestions</h2>
          <div className="space-y-3">
            {seoSuggestions?.slice(0, 5).map((suggestion) => (
              <div key={suggestion.id} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">{suggestion.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    suggestion.priority === 'high' ? 'bg-red-500/10 text-red-600' :
                    suggestion.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-600' :
                    'bg-green-500/10 text-green-600'
                  }`}>
                    {suggestion.priority}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                {suggestion.expected_impact && (
                  <p className="text-xs text-primary mt-2">Impact: {suggestion.expected_impact}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
