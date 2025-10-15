import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  Search,
  Lightbulb,
  RefreshCw
} from 'lucide-react';

interface SEOSuggestion {
  id: string;
  page_url: string;
  title_suggestion: string;
  meta_description: string;
  keywords: string[];
  content_improvements: string[];
  performance_score: number;
  ranking_potential: number;
  status: 'pending' | 'applied' | 'rejected';
  created_at: string;
}

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  overall_score: number;
}

const AISEOAutomation: React.FC = () => {
  const [suggestions, setSuggestions] = useState<SEOSuggestion[]>([]);
  const [performance, setPerformance] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [automationStatus, setAutomationStatus] = useState<'active' | 'paused'>('active');
  const [lastOptimized, setLastOptimized] = useState<Date | null>(null);

  useEffect(() => {
    loadSEOData();
    const interval = setInterval(loadSEOData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const loadSEOData = async () => {
    try {
      // Load AI suggestions with mock data
      const mockSuggestions: SEOSuggestion[] = [
        {
          id: '1',
          page_url: '/',
          title_suggestion: 'Safe Secondhand Buying - Check If Item Is Stolen | SafeOrStolen',
          meta_description: 'Protect buyers and sellers with free stolen goods verification. Check IMEI, VIN, serial numbers before purchase.',
          keywords: ['safe secondhand buying', 'check if stolen', 'buyer protection'],
          content_improvements: ['Add more customer testimonials', 'Improve call-to-action buttons', 'Add trust badges'],
          performance_score: 78,
          ranking_potential: 92,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ];
      
      setSuggestions(mockSuggestions);

      // Load performance data with mock fallback
      const perfData = {
        lcp_score: 2400,
        fid_score: 90,
        cls_score: 0.08,
        overall_score: 85
      };
      
      setPerformance({
        lcp: perfData.lcp_score || 0,
        fid: perfData.fid_score || 0,
        cls: perfData.cls_score || 0,
        overall_score: perfData.overall_score || 0
      });
    } catch (error) {
      console.error('Error loading SEO data:', error);
    }
  };

  const runAIOptimization = async () => {
    setIsOptimizing(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-seo-optimizer', {
        body: { 
          action: 'auto_optimize',
          pages: [
            '/',
            '/stolen-item-checker',
            '/check-phone',
            '/check-car',
            '/imei-checker',
            '/vin-verification'
          ]
        }
      });

      if (error) throw error;

      toast.success(`AI optimization complete! ${data.optimized_count} pages optimized`);
      setLastOptimized(new Date());
      loadSEOData();
    } catch (error) {
      console.error('AI optimization error:', error);
      toast.error('AI optimization failed. Please try again.');
    } finally {
      setIsOptimizing(false);
    }
  };

  const applySuggestion = async (suggestion: SEOSuggestion) => {
    try {
      const { error } = await supabase
        .from('ai_seo_suggestions')
        .update({ status: 'applied', applied_at: new Date().toISOString() })
        .eq('id', suggestion.id);

      if (error) throw error;

      toast.success('SEO suggestion applied successfully!');
      loadSEOData();
    } catch (error) {
      console.error('Error applying suggestion:', error);
      toast.error('Failed to apply suggestion');
    }
  };

  const generateContentPlan = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('autonomous-content-manager', {
        body: { action: 'generate_content_plan' }
      });

      if (error) throw error;

      toast.success('Content plan generated! Check the content planning section.');
    } catch (error) {
      console.error('Content plan generation error:', error);
      toast.error('Failed to generate content plan');
    }
  };

  const updateSitemap = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('automated-sitemap', {
        body: { action: 'generate_sitemap' }
      });

      if (error) throw error;

      toast.success('Sitemap updated successfully!');
    } catch (error) {
      console.error('Sitemap update error:', error);
      toast.error('Failed to update sitemap');
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'applied':
        return <Badge variant="default" className="bg-green-600"><CheckCircle className="w-3 h-3 mr-1" />Applied</Badge>;
      case 'pending':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            AI SEO Automation Center
          </h1>
          <p className="text-muted-foreground mt-2">
            Autonomous SEO optimization powered by AI - ranking SafeOrStolen.com #1
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={runAIOptimization} 
            disabled={isOptimizing}
            className="bg-primary hover:bg-primary/90"
          >
            {isOptimizing ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Run AI Optimization
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automation Status</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {automationStatus === 'active' ? (
                <Badge variant="default" className="bg-green-600">Active</Badge>
              ) : (
                <Badge variant="secondary">Paused</Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {lastOptimized ? `Last run: ${lastOptimized.toLocaleTimeString()}` : 'Never run'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall SEO Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(performance?.overall_score || 0)}`}>
              {performance?.overall_score || 0}/100
            </div>
            <Progress value={performance?.overall_score || 0} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Suggestions</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {suggestions.filter(s => s.status === 'pending').length}
            </div>
            <p className="text-xs text-muted-foreground">
              AI-generated improvements
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Core Web Vitals</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>LCP:</span>
                <span className={getScoreColor(performance?.lcp || 0)}>{performance?.lcp || 0}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>FID:</span>
                <span className={getScoreColor(performance?.fid || 0)}>{performance?.fid || 0}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>CLS:</span>
                <span className={getScoreColor((performance?.cls || 0) * 1000)}>{(performance?.cls || 0).toFixed(3)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="suggestions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated SEO Suggestions</CardTitle>
              <CardDescription>
                Smart recommendations to improve search rankings and user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.length === 0 ? (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No suggestions available. Run AI optimization to get started.</p>
                  </div>
                ) : (
                  suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{suggestion.title_suggestion}</h4>
                          <p className="text-sm text-muted-foreground">{suggestion.page_url}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(suggestion.status)}
                          <Badge variant="outline">Score: {suggestion.performance_score}/100</Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm">{suggestion.meta_description}</p>
                      
                      {suggestion.keywords && suggestion.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {suggestion.keywords.map((keyword, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {suggestion.content_improvements && suggestion.content_improvements.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Improvements:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {suggestion.content_improvements.map((improvement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {suggestion.status === 'pending' && (
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" onClick={() => applySuggestion(suggestion)}>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Apply
                          </Button>
                          <Button size="sm" variant="outline">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Content Generation</CardTitle>
                  <CardDescription>AI-powered content creation and optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={generateContentPlan} className="w-full">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Generate Content Plan
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Create SEO-optimized blog posts and landing pages automatically
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical SEO</CardTitle>
                  <CardDescription>Automated technical optimizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={updateSitemap} className="w-full">
                    <Target className="w-4 h-4 mr-2" />
                    Update Sitemap
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Automatically generate and update XML sitemaps
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Core Web Vitals Performance</CardTitle>
              <CardDescription>Real-time performance monitoring and optimization</CardDescription>
            </CardHeader>
            <CardContent>
              {performance ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Largest Contentful Paint</h4>
                    <div className={`text-3xl font-bold ${getScoreColor(performance.lcp <= 2500 ? 100 : performance.lcp <= 4000 ? 60 : 20)}`}>
                      {performance.lcp}ms
                    </div>
                    <Progress value={Math.max(0, 100 - (performance.lcp / 40))} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Good: &lt;2.5s, Needs work: &lt;4s
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold mb-2">First Input Delay</h4>
                    <div className={`text-3xl font-bold ${getScoreColor(performance.fid <= 100 ? 100 : performance.fid <= 300 ? 60 : 20)}`}>
                      {performance.fid}ms
                    </div>
                    <Progress value={Math.max(0, 100 - (performance.fid / 5))} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Good: &lt;100ms, Needs work: &lt;300ms
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Cumulative Layout Shift</h4>
                    <div className={`text-3xl font-bold ${getScoreColor(performance.cls <= 0.1 ? 100 : performance.cls <= 0.25 ? 60 : 20)}`}>
                      {performance.cls.toFixed(3)}
                    </div>
                    <Progress value={Math.max(0, 100 - (performance.cls * 400))} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Good: &lt;0.1, Needs work: &lt;0.25
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No performance data available. Run optimization to collect metrics.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>Track and optimize content for maximum SEO impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-muted-foreground">SEO Suggestions</div>
                    <div className="text-2xl font-bold">{suggestions.length}</div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-muted-foreground">Applied</div>
                    <div className="text-2xl font-bold">
                      {suggestions.filter(s => s.status === 'applied').length}
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-muted-foreground">Avg. Performance Score</div>
                    <div className="text-2xl font-bold">
                      {performance?.overall_score || 0}
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-muted-foreground">Pending Optimizations</div>
                    <div className="text-2xl font-bold">
                      {suggestions.filter(s => s.status === 'pending').length}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AISEOAutomation;