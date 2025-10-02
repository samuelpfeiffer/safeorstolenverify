import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, TrendingUp, Target, Zap, Brain, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface SEOKeyword {
  keyword: string;
  current_rank?: number;
  target_rank: number;
  search_volume: number;
  difficulty_score: number;
}

interface SEOSuggestion {
  id: string;
  suggestion_type: string;
  priority: string;
  title: string;
  description: string;
  expected_impact: string;
  ai_confidence_score: number;
}

interface SEOPerformance {
  ai_optimization_score: number;
  total_keywords_tracking: number;
  keyword_rankings_improved: number;
  average_position?: number;
}

const AISEODashboard = () => {
  const [keywords, setKeywords] = useState<SEOKeyword[]>([]);
  const [suggestions, setSuggestions] = useState<SEOSuggestion[]>([]);
  const [performance, setPerformance] = useState<SEOPerformance | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { data: kwData } = await supabase
      .from('seo_keywords')
      .select('*')
      .order('search_volume', { ascending: false })
      .limit(10);

    const { data: sugData } = await supabase
      .from('ai_seo_suggestions')
      .select('*')
      .eq('status', 'pending')
      .order('priority', { ascending: true })
      .limit(8);

    const { data: perfData } = await supabase
      .from('seo_performance')
      .select('*')
      .order('date', { ascending: false })
      .limit(1)
      .single();

    setKeywords(kwData || []);
    setSuggestions(sugData || []);
    setPerformance(perfData);
  };

  const runAIAnalysis = async () => {
    setAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-seo-domination', {
        body: { analysisType: 'comprehensive', targetUrl: window.location.href }
      });

      if (error) throw error;

      toast.success('AI SEO Analysis Complete!', {
        description: `Score: ${data.analysis?.overallScore}/100 - Found ${data.analysis?.urgentActions?.length || 0} critical actions`
      });

      loadData();
    } catch (error) {
      console.error('AI Analysis Error:', error);
      toast.error('Analysis failed. Please try again.');
    } finally {
      setAnalyzing(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical':
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <Brain className="w-10 h-10 text-primary" />
            AI SEO Command Center
          </h1>
          <p className="text-muted-foreground mt-2">
            Automated SEO domination powered by AI - Destroying the competition 24/7
          </p>
        </div>
        <Button onClick={runAIAnalysis} disabled={analyzing} size="lg">
          <Sparkles className="w-5 h-5 mr-2" />
          {analyzing ? 'Analyzing...' : 'Run AI Analysis'}
        </Button>
      </div>

      {/* Performance Overview */}
      {performance && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>AI Optimization Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {performance.ai_optimization_score}/100
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                System running optimally
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Keywords Tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {performance.total_keywords_tracking}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <Target className="w-3 h-3 inline mr-1" />
                Active monitoring
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Rankings Improved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                +{performance.keyword_rankings_improved}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <Zap className="w-3 h-3 inline mr-1" />
                Last 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Average Position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {performance.average_position?.toFixed(1) || 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Target: Top 3
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Keywords */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Target Keywords
            </CardTitle>
            <CardDescription>
              Highest priority keywords being tracked
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {keywords.map((kw, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{kw.keyword}</div>
                  <div className="text-xs text-muted-foreground">
                    {kw.search_volume.toLocaleString()} searches/mo • Difficulty: {kw.difficulty_score}
                  </div>
                </div>
                <Badge variant={kw.current_rank && kw.current_rank <= 10 ? 'default' : 'secondary'}>
                  {kw.current_rank ? `#${kw.current_rank}` : 'Not ranked'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              AI Recommendations
            </CardTitle>
            <CardDescription>
              Critical actions to dominate search rankings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestions.map((sug) => (
              <div key={sug.id} className="p-3 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium flex items-center gap-2">
                      {sug.priority === 'high' && <AlertCircle className="w-4 h-4 text-destructive" />}
                      {sug.title}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {sug.description}
                    </p>
                  </div>
                  <Badge variant={getPriorityColor(sug.priority)}>
                    {sug.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    Expected Impact: {sug.expected_impact}
                  </span>
                  <span className="text-muted-foreground">
                    Confidence: {Math.round((sug.ai_confidence_score || 0) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            AI-powered SEO optimization running 24/7 in the background
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">AI SEO Optimizer</span>
              </div>
              <Badge variant="outline" className="bg-green-100 dark:bg-green-900">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Keyword Tracker</span>
              </div>
              <Badge variant="outline" className="bg-green-100 dark:bg-green-900">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Competitor Monitor</span>
              </div>
              <Badge variant="outline" className="bg-green-100 dark:bg-green-900">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AISEODashboard;
