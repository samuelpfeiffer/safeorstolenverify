import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, TrendingUp, Zap, Target, AlertCircle, CheckCircle } from 'lucide-react';

export const SEOOptimizationDashboard = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [performance, setPerformance] = useState<any>(null);
  const [keywords, setKeywords] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [suggestionsRes, perfRes, keywordsRes] = await Promise.all([
        supabase.from('ai_seo_suggestions').select('*').order('created_at', { ascending: false }).limit(10),
        supabase.from('seo_performance').select('*').order('date', { ascending: false }).limit(1),
        supabase.from('seo_keywords').select('*').order('search_volume', { ascending: false }).limit(15)
      ]);

      if (suggestionsRes.data) setSuggestions(suggestionsRes.data);
      if (perfRes.data?.[0]) setPerformance(perfRes.data[0]);
      if (keywordsRes.data) setKeywords(keywordsRes.data);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    }
  };

  const runOptimization = async () => {
    setIsRunning(true);
    try {
      const { data, error } = await supabase.functions.invoke('autonomous-seo-optimizer');
      
      if (error) throw error;

      toast({
        title: '🎯 SEO Optimization Complete',
        description: `Created ${data.actions_created} suggestions, added ${data.keywords_added} keywords`,
      });

      loadDashboardData();
    } catch (error: any) {
      toast({
        title: 'Optimization Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsRunning(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">🤖 Autonomous SEO Optimizer</h1>
          <p className="text-muted-foreground mt-1">
            AI-powered background optimization running 24/7
          </p>
        </div>
        <Button onClick={runOptimization} disabled={isRunning} size="lg">
          {isRunning ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Optimizing...
            </>
          ) : (
            <>
              <Zap className="mr-2 h-4 w-4" />
              Run Optimization
            </>
          )}
        </Button>
      </div>

      {/* Performance Overview */}
      {performance && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Score</p>
                <p className="text-2xl font-bold">{performance.ai_optimization_score}/100</p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Keywords Tracking</p>
                <p className="text-2xl font-bold">{performance.total_keywords_tracking}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rankings Improved</p>
                <p className="text-2xl font-bold text-green-600">+{performance.keyword_rankings_improved}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Position</p>
                <p className="text-2xl font-bold">{performance.average_position?.toFixed(1)}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
        </div>
      )}

      {/* AI Suggestions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">🎯 AI Optimization Suggestions</h2>
        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={getPriorityColor(suggestion.priority)}>
                      {suggestion.priority}
                    </Badge>
                    <Badge variant="outline">{suggestion.suggestion_type}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(suggestion.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{suggestion.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                  {suggestion.implementation_notes && (
                    <details className="text-xs text-muted-foreground">
                      <summary className="cursor-pointer hover:text-foreground">
                        Implementation Details
                      </summary>
                      <p className="mt-2 pl-4 border-l-2">{suggestion.implementation_notes}</p>
                    </details>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {(suggestion.ai_confidence_score * 100).toFixed(0)}% confident
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Impact: {suggestion.expected_impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Keywords */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">🔑 Top Target Keywords</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {keywords.map((keyword) => (
            <div key={keyword.id} className="border rounded p-3">
              <div className="font-medium text-sm mb-1">{keyword.keyword}</div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Vol: {keyword.search_volume?.toLocaleString()}</span>
                <span>Diff: {keyword.difficulty_score}/100</span>
                <span className={keyword.current_rank ? 'text-green-600' : 'text-yellow-600'}>
                  {keyword.current_rank ? `#${keyword.current_rank}` : 'Unranked'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};