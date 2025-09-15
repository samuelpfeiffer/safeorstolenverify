import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { 
  TrendingUp, 
  Target, 
  Brain, 
  Search, 
  BarChart3, 
  Lightbulb,
  Zap,
  Trophy,
  ArrowUp,
  Clock
} from 'lucide-react';
import { toast } from 'sonner';

const AISEODashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [performance, setPerformance] = useState(null);

  // Load existing data
  useEffect(() => {
    loadSEOData();
  }, []);

  const loadSEOData = async () => {
    try {
      const { data: suggestionsData } = await supabase
        .from('ai_seo_suggestions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      const { data: performanceData } = await supabase
        .from('seo_performance')
        .select('*')
        .order('date', { ascending: false })
        .limit(1);

      setSuggestions(suggestionsData || []);
      setPerformance(performanceData?.[0] || null);
    } catch (error) {
      console.error('Error loading SEO data:', error);
    }
  };

  const runCompetitorAnalysis = async () => {
    if (!competitorUrl.trim()) {
      toast.error('Please enter a competitor URL');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-competitor-analysis', {
        body: {
          competitorUrl: competitorUrl.trim(),
          keywords: targetKeywords.split(',').map(k => k.trim()).filter(k => k),
          analysisType: 'comprehensive'
        }
      });

      if (error) throw error;

      if (data.success) {
        toast.success('Competitor analysis completed! Check suggestions for insights.');
        loadSEOData();
        setCompetitorUrl('');
      } else {
        throw new Error(data.error || 'Analysis failed');
      }
    } catch (error) {
      toast.error(`Analysis failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runContentOptimization = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-content-optimizer', {
        body: {
          pageUrl: window.location.origin,
          content: document.body.innerText.substring(0, 5000),
          targetKeywords: targetKeywords.split(',').map(k => k.trim()).filter(k => k)
        }
      });

      if (error) throw error;

      if (data.success) {
        toast.success(`Content optimization completed! Score: ${data.content_score}/100`);
        loadSEOData();
      } else {
        throw new Error(data.error || 'Optimization failed');
      }
    } catch (error) {
      toast.error(`Optimization failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runRankingAnalysis = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-ranking-analyzer', {
        body: {
          keywords: targetKeywords.split(',').map(k => k.trim()).filter(k => k),
          timeframe: '30days',
          analysisDepth: 'comprehensive'
        }
      });

      if (error) throw error;

      if (data.success) {
        toast.success(`Ranking analysis completed! AI Score: ${data.ai_optimization_score}/100`);
        loadSEOData();
      } else {
        throw new Error(data.error || 'Analysis failed');
      }
    } catch (error) {
      toast.error(`Analysis failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const markSuggestionCompleted = async (suggestionId) => {
    try {
      const { error } = await supabase
        .from('ai_seo_suggestions')
        .update({ 
          status: 'completed',
          completed_at: new Date().toISOString()
        })
        .eq('id', suggestionId);

      if (error) throw error;

      toast.success('Suggestion marked as completed!');
      loadSEOData();
    } catch (error) {
      toast.error('Failed to update suggestion');
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getImpactIcon = (impact) => {
    switch (impact) {
      case 'high': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'medium': return <BarChart3 className="h-4 w-4 text-yellow-600" />;
      default: return <ArrowUp className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
          <Brain className="h-10 w-10 text-sos-orange" />
          AI-Powered SEO Command Center
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay ahead of competition with AI-driven SEO insights and automated optimization strategies.
        </p>
      </div>

      {/* Performance Overview */}
      {performance && (
        <Card className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-sos-orange" />
              Current SEO Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sos-orange">
                  {performance.ai_optimization_score || 0}/100
                </div>
                <div className="text-sm text-muted-foreground">AI Optimization Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sos-lime">
                  {performance.keyword_rankings_improved || 0}
                </div>
                <div className="text-sm text-muted-foreground">Rankings Improved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {performance.total_keywords_tracking || 0}
                </div>
                <div className="text-sm text-muted-foreground">Keywords Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {performance.average_position ? performance.average_position.toFixed(1) : 'N/A'}
                </div>
                <div className="text-sm text-muted-foreground">Avg Position</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Analysis Tools */}
      <Tabs defaultValue="competitor" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="competitor" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Competitor Analysis
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Content Optimization
          </TabsTrigger>
          <TabsTrigger value="rankings" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Ranking Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="competitor" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-sos-orange" />
                AI Competitor Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Competitor URL
                </label>
                <Input
                  placeholder="https://competitor-website.com"
                  value={competitorUrl}
                  onChange={(e) => setCompetitorUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Target Keywords (comma-separated)
                </label>
                <Input
                  placeholder="stolen goods check, IMEI verification, marketplace safety"
                  value={targetKeywords}
                  onChange={(e) => setTargetKeywords(e.target.value)}
                />
              </div>
              <Button 
                onClick={runCompetitorAnalysis}
                disabled={isLoading}
                className="w-full bg-sos-orange hover:bg-sos-orange-600"
              >
                {isLoading ? (
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Zap className="h-4 w-4 mr-2" />
                )}
                Analyze Competitor with AI
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-sos-lime" />
                AI Content Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Target Keywords for Optimization
                </label>
                <Input
                  placeholder="stolen item checker, verify before buying, IMEI lookup"
                  value={targetKeywords}
                  onChange={(e) => setTargetKeywords(e.target.value)}
                />
              </div>
              <Button 
                onClick={runContentOptimization}
                disabled={isLoading}
                className="w-full bg-sos-lime hover:bg-sos-lime/80 text-white"
              >
                {isLoading ? (
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Brain className="h-4 w-4 mr-2" />
                )}
                Optimize Current Page Content
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rankings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                AI Ranking Strategy Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Keywords to Analyze
                </label>
                <Input
                  placeholder="stolen goods verification, safe marketplace shopping"
                  value={targetKeywords}
                  onChange={(e) => setTargetKeywords(e.target.value)}
                />
              </div>
              <Button 
                onClick={runRankingAnalysis}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? (
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <BarChart3 className="h-4 w-4 mr-2" />
                )}
                Analyze Ranking Strategy
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* AI Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-sos-orange" />
            AI-Generated SEO Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suggestions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No suggestions yet. Run an AI analysis to get started!
              </div>
            ) : (
              suggestions.map((suggestion) => (
                <Card key={suggestion.id} className="border-l-4 border-l-sos-orange">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${getPriorityColor(suggestion.priority)} text-white`}>
                            {suggestion.priority}
                          </Badge>
                          <Badge variant="outline">{suggestion.suggestion_type}</Badge>
                          {getImpactIcon(suggestion.expected_impact)}
                          {suggestion.ai_confidence_score && (
                            <span className="text-sm text-muted-foreground">
                              {Math.round(suggestion.ai_confidence_score * 100)}% confidence
                            </span>
                          )}
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {suggestion.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          {suggestion.description.substring(0, 200)}...
                        </p>
                        {suggestion.implementation_notes && (
                          <p className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                            💡 {suggestion.implementation_notes}
                          </p>
                        )}
                      </div>
                      <div className="ml-4">
                        {suggestion.status === 'completed' ? (
                          <Badge className="bg-green-500 text-white">Completed</Badge>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markSuggestionCompleted(suggestion.id)}
                          >
                            Mark Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AISEODashboard;