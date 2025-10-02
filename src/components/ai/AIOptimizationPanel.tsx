import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, TrendingUp, Zap, Shield, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AIOptimizationPanelProps {
  pageUrl?: string;
  pageTitle?: string;
  pageContent?: string;
}

export const AIOptimizationPanel: React.FC<AIOptimizationPanelProps> = ({
  pageUrl = window.location.pathname,
  pageTitle = document.title,
  pageContent
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const { toast } = useToast();

  const analyzeCurrentPage = async (action: string) => {
    setIsAnalyzing(true);
    
    try {
      const pageData = {
        url: pageUrl,
        title: pageTitle,
        content: pageContent || document.body.innerText.substring(0, 3000),
        meta: {
          description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
          keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content')
        },
        performance: {
          loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
          domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        }
      };

      const { data, error } = await supabase.functions.invoke('ai-site-optimizer', {
        body: { action, pageData }
      });

      if (error) throw error;

      if (data?.analysis) {
        setAnalysis(data.analysis);
        
        // Parse recommendations from analysis
        const lines = data.analysis.split('\n').filter((line: string) => 
          line.trim().match(/^[\d\.\-\*]+\s+/) || line.includes('recommend')
        );
        setRecommendations(lines);

        toast({
          title: "AI Analysis Complete",
          description: "Check the recommendations below",
        });
      }
    } catch (error: any) {
      console.error('[AI-OPTIMIZER] Error:', error);
      toast({
        title: "Analysis Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Site Optimizer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => analyzeCurrentPage('analyze-page')}
            disabled={isAnalyzing}
            className="w-full"
            size="sm"
          >
            {isAnalyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : <TrendingUp className="h-4 w-4" />}
            <span className="ml-2">Analyze Page</span>
          </Button>
          
          <Button
            onClick={() => analyzeCurrentPage('generate-seo')}
            disabled={isAnalyzing}
            variant="outline"
            className="w-full"
            size="sm"
          >
            <Search className="h-4 w-4 mr-2" />
            SEO Boost
          </Button>
          
          <Button
            onClick={() => analyzeCurrentPage('improve-content')}
            disabled={isAnalyzing}
            variant="outline"
            className="w-full"
            size="sm"
          >
            <Zap className="h-4 w-4 mr-2" />
            Improve Copy
          </Button>
          
          <Button
            onClick={() => analyzeCurrentPage('fix-performance')}
            disabled={isAnalyzing}
            variant="outline"
            className="w-full"
            size="sm"
          >
            <Shield className="h-4 w-4 mr-2" />
            Performance
          </Button>
        </div>

        {analysis && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">AI Recommendations</h4>
              <Badge variant="secondary">Powered by Gemini</Badge>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg space-y-2 max-h-96 overflow-y-auto">
              <p className="text-sm whitespace-pre-wrap">{analysis}</p>
            </div>

            {recommendations.length > 0 && (
              <div>
                <h5 className="font-medium text-sm mb-2">Quick Actions:</h5>
                <ul className="space-y-1">
                  {recommendations.slice(0, 5).map((rec, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{rec.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="pt-2 border-t text-xs text-muted-foreground">
          Current page: <span className="font-mono">{pageUrl}</span>
        </div>
      </CardContent>
    </Card>
  );
};