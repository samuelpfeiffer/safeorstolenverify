import React, { useState, useEffect } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AIOptimizationPanel } from '@/components/ai/AIOptimizationPanel';
import { Sparkles, TrendingUp, Zap, Database, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AIOptimizerPage = () => {
  const [recentAnalyses, setRecentAnalyses] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    avgConfidence: 0,
    topPriority: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    loadRecentAnalyses();
  }, []);

  const loadRecentAnalyses = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_analysis_sessions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;

      if (data) {
        setRecentAnalyses(data);
        
        // Calculate stats
        const total = data.length;
        const avgConf = data.reduce((sum, a) => sum + (a.confidence || 0), 0) / total;
        const highPriority = data.filter(a => a.priority === 'high').length;
        
        setStats({
          totalAnalyses: total,
          avgConfidence: Math.round(avgConf * 100),
          topPriority: highPriority
        });
      }
    } catch (error: any) {
      console.error('[AI-OPTIMIZER] Load error:', error);
      toast({
        title: "Failed to load analyses",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <PageSEO
        title="AI Site Optimizer - SafeOrStolen.com"
        description="AI-powered optimization for improving SEO, performance, and conversions"
        canonical="/ai-optimizer"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                AI Site Optimizer
              </h1>
              <p className="text-muted-foreground">
                Powered by Google Gemini 2.5 Flash - Continuously improving SafeOrStolen.com
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Analyses</p>
                      <p className="text-3xl font-bold">{stats.totalAnalyses}</p>
                    </div>
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Confidence</p>
                      <p className="text-3xl font-bold">{stats.avgConfidence}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">High Priority</p>
                      <p className="text-3xl font-bold">{stats.topPriority}</p>
                    </div>
                    <Zap className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Optimizer */}
            <AIOptimizationPanel />

            {/* Recent Analyses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Optimizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAnalyses.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">
                      No analyses yet. Click the buttons above to start optimizing!
                    </p>
                  ) : (
                    recentAnalyses.map((analysis) => (
                      <div
                        key={analysis.id}
                        className="border rounded-lg p-4 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={analysis.priority === 'high' ? 'default' : 'secondary'}>
                              {analysis.analysis_type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(analysis.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          {analysis.confidence && (
                            <Badge variant="outline">
                              {Math.round(analysis.confidence * 100)}% confident
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm line-clamp-2">{analysis.result}</p>
                      </div>
                    ))
                  )}
                </div>
                
                {recentAnalyses.length > 0 && (
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm" onClick={loadRecentAnalyses}>
                      Refresh
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What It Does</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Analyzes every page for SEO, UX, and performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Generates optimized meta tags and content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Identifies conversion optimization opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Monitors performance bottlenecks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">1.</span>
                      <span>Collects page data (content, meta, performance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">2.</span>
                      <span>Sends to Gemini 2.5 Flash for analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">3.</span>
                      <span>Returns actionable recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">4.</span>
                      <span>Stores insights for continuous improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIOptimizerPage;