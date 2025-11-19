import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Brain, Shield, AlertTriangle, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { aiService, type AIVerificationAnalysis } from '@/services/aiService';
import { VerificationItemType } from '@/utils/verification/types';

interface AIVerificationCardProps {
  item: VerificationItemType;
  onAnalysisComplete?: (analysis: AIVerificationAnalysis) => void;
}

export const AIVerificationCard: React.FC<AIVerificationCardProps> = ({
  item,
  onAnalysisComplete
}) => {
  const [analysis, setAnalysis] = useState<AIVerificationAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFullAnalysis, setShowFullAnalysis] = useState(false);

  useEffect(() => {
    if (item) {
      performAIAnalysis();
    }
  }, [item]);

  const performAIAnalysis = async () => {
    setIsLoading(true);
    try {
      const analysisResult = await aiService.analyzeVerification({
        serialNumber: item.serialNumber,
        itemType: item.name,
        category: item.category,
        dbResults: [{ status: item.status }],
        metadata: { color: item.color, type: item.type }
      });
      
      setAnalysis(analysisResult);
      onAnalysisComplete?.(analysisResult);
    } catch (error) {
      console.error('AI analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRiskColor = (riskScore: number) => {
    if (riskScore >= 80) return 'text-red-500';
    if (riskScore >= 50) return 'text-yellow-500';
    if (riskScore >= 20) return 'text-blue-500';
    return 'text-green-500';
  };

  const getRiskIcon = (riskScore: number) => {
    if (riskScore >= 80) return AlertTriangle;
    if (riskScore >= 50) return Shield;
    return CheckCircle2;
  };

  const getRiskLabel = (riskScore: number) => {
    if (riskScore >= 80) return 'HIGH RISK';
    if (riskScore >= 50) return 'MODERATE RISK';
    if (riskScore >= 20) return 'LOW RISK';
    return 'VERY LOW RISK';
  };

  if (isLoading) {
    return (
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="h-5 w-5 text-primary animate-pulse" />
            AI Verification Analysis
            <Badge variant="secondary" className="ml-auto">
              <Zap className="h-3 w-3 mr-1" />
              Processing
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-sm text-muted-foreground">
                Running AI analysis across multiple verification layers...
              </span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Analyzing serial patterns, database matches, and risk factors
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analysis) return null;

  const RiskIcon = getRiskIcon(analysis.riskScore);

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="h-5 w-5 text-primary" />
          AI Verification Analysis
          <Badge variant="secondary" className="ml-auto">
            <TrendingUp className="h-3 w-3 mr-1" />
            {analysis.confidence}% Confidence
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Risk Score Display */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-card border">
          <div className="flex items-center gap-3">
            <RiskIcon className={`h-6 w-6 ${getRiskColor(analysis.riskScore)}`} />
            <div>
              <div className="font-semibold text-lg">
                {getRiskLabel(analysis.riskScore)}
              </div>
              <div className="text-sm text-muted-foreground">
                Risk Score: {analysis.riskScore}/100
              </div>
            </div>
          </div>
          <Progress 
            value={analysis.riskScore} 
            className="w-24 h-3"
          />
        </div>

        {/* AI Narrative Summary */}
        <div className="p-4 rounded-lg bg-muted/50">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Brain className="h-4 w-4" />
            AI Analysis Summary
          </h4>
          <p className="text-sm leading-relaxed">
            {analysis.narrativeSummary}
          </p>
        </div>

        {/* Fraud Indicators */}
        {analysis.fraudIndicators.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-sm">Risk Indicators Detected:</h4>
            <div className="space-y-1">
              {analysis.fraudIndicators.slice(0, showFullAnalysis ? undefined : 2).map((indicator, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>{indicator}</span>
                </div>
              ))}
              {analysis.fraudIndicators.length > 2 && !showFullAnalysis && (
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={() => setShowFullAnalysis(true)}
                  className="p-0 h-auto text-xs"
                >
                  +{analysis.fraudIndicators.length - 2} more indicators
                </Button>
              )}
            </div>
          </div>
        )}

        {/* AI Recommendations */}
        <div>
          <h4 className="font-medium mb-2 text-sm">AI Recommendations:</h4>
          <div className="space-y-1">
            {analysis.recommendations.slice(0, showFullAnalysis ? undefined : 2).map((rec, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
            {analysis.recommendations.length > 2 && !showFullAnalysis && (
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => setShowFullAnalysis(true)}
                className="p-0 h-auto text-xs"
              >
                +{analysis.recommendations.length - 2} more recommendations
              </Button>
            )}
          </div>
        </div>

        {/* Additional Checks */}
        {showFullAnalysis && analysis.additionalChecks.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-sm">Suggested Additional Checks:</h4>
            <div className="space-y-1">
              {analysis.additionalChecks.map((check, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Shield className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toggle Full Analysis */}
        <div className="pt-2 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowFullAnalysis(!showFullAnalysis)}
            className="w-full"
          >
            {showFullAnalysis ? 'Show Less' : 'Show Full AI Analysis'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};