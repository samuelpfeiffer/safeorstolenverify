import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useAdvancedAI } from '@/hooks/useAdvancedAI';
import { Brain, Search, Zap, Target, TrendingUp, Shield } from 'lucide-react';

export const AdvancedAIInterface: React.FC = () => {
  const [query, setQuery] = useState('');
  const {
    isEnabled,
    isProcessing,
    currentAnalysis,
    performQuickSecurityAnalysis,
    performComprehensiveAnalysis,
    performMarketAnalysis,
    performRiskAnalysis,
    toggleAdvancedAI,
    clearCurrentAnalysis
  } = useAdvancedAI();

  const handleQuickSecurity = async () => {
    if (!query.trim()) return;
    await performQuickSecurityAnalysis(query);
  };

  const handleComprehensive = async () => {
    if (!query.trim()) return;
    await performComprehensiveAnalysis(query);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Advanced AI Analysis
          </CardTitle>
          <Button
            variant={isEnabled ? "default" : "outline"}
            size="sm"
            onClick={() => toggleAdvancedAI(!isEnabled)}
          >
            {isEnabled ? 'Enabled' : 'Disabled'}
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Brain className="h-3 w-3" />
            Deep Thinking
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Search className="h-3 w-3" />
            Internet Search
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Multi-Model AI
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            Continuous Learning
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Input
            placeholder="Enter your query (e.g., 'Is this iPhone serial number stolen?')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={!isEnabled || isProcessing}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleQuickSecurity}
              disabled={!isEnabled || isProcessing || !query.trim()}
              className="flex items-center gap-1"
            >
              <Shield className="h-4 w-4" />
              Security
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleComprehensive}
              disabled={!isEnabled || isProcessing || !query.trim()}
              className="flex items-center gap-1"
            >
              <Brain className="h-4 w-4" />
              Comprehensive
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => performMarketAnalysis(query)}
              disabled={!isEnabled || isProcessing || !query.trim()}
              className="flex items-center gap-1"
            >
              <TrendingUp className="h-4 w-4" />
              Market
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => performRiskAnalysis(query)}
              disabled={!isEnabled || isProcessing || !query.trim()}
              className="flex items-center gap-1"
            >
              <Target className="h-4 w-4" />
              Risk
            </Button>
          </div>
        </div>

        {isProcessing && (
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <div>
                  <p className="font-medium">Advanced AI Processing...</p>
                  <p className="text-sm text-muted-foreground">
                    Deep thinking and internet search in progress
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentAnalysis && (
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Analysis Results</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {Math.round(currentAnalysis.confidence * 100)}% Confidence
                  </Badge>
                  <Button variant="ghost" size="sm" onClick={clearCurrentAnalysis}>
                    Clear
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Analysis</h4>
                <Textarea
                  value={currentAnalysis.result}
                  readOnly
                  className="min-h-[200px] resize-none"
                />
              </div>

              {currentAnalysis.recommendations.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Recommendations</h4>
                  <ul className="space-y-1">
                    {currentAnalysis.recommendations.slice(0, 5).map((rec, index) => (
                      <li key={index} className="text-sm">• {rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-xs text-muted-foreground pt-2 border-t">
                Models used: {currentAnalysis.metadata.modelsUsed.join(', ')} | 
                Processing time: {currentAnalysis.metadata.processingTime}ms | 
                Sources: {currentAnalysis.sources.length}
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};