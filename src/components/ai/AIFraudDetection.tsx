import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Brain, TrendingDown, TrendingUp, MapPin, DollarSign, User } from 'lucide-react';
import { aiService } from '@/services/aiService';

interface AIFraudDetectionProps {
  itemDetails: any;
  sellerInfo?: any;
  pricePoint?: number;
  location?: string;
  onFraudDetected?: (fraudData: any) => void;
}

export const AIFraudDetection: React.FC<AIFraudDetectionProps> = ({
  itemDetails,
  sellerInfo,
  pricePoint,
  location,
  onFraudDetected
}) => {
  const [fraudAnalysis, setFraudAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (itemDetails) {
      performFraudAnalysis();
    }
  }, [itemDetails, sellerInfo, pricePoint, location]);

  const performFraudAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const analysis = await aiService.detectFraudPatterns({
        itemDetails,
        sellerInfo,
        pricePoint,
        location
      });
      
      setFraudAnalysis(analysis);
      
      if (analysis.fraudScore > 70) {
        onFraudDetected?.(analysis);
      }
    } catch (error) {
      console.error('Fraud detection failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getFraudSeverity = (score: number) => {
    if (score >= 80) return { level: 'high', color: 'text-red-500', bgColor: 'bg-red-50 border-red-200' };
    if (score >= 60) return { level: 'medium', color: 'text-yellow-600', bgColor: 'bg-yellow-50 border-yellow-200' };
    if (score >= 30) return { level: 'low', color: 'text-blue-600', bgColor: 'bg-blue-50 border-blue-200' };
    return { level: 'minimal', color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' };
  };

  if (isAnalyzing) {
    return (
      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="h-5 w-5 text-primary animate-pulse" />
            AI Fraud Detection
            <Badge variant="secondary" className="ml-auto">Analyzing</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-sm text-muted-foreground">
                Scanning for fraud patterns and suspicious indicators...
              </span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!fraudAnalysis) return null;

  const severity = getFraudSeverity(fraudAnalysis.fraudScore);

  return (
    <Card className={`border-2 ${severity.bgColor}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="h-5 w-5 text-primary" />
          AI Fraud Detection
          <Badge 
            variant={severity.level === 'high' ? 'destructive' : 'secondary'} 
            className="ml-auto"
          >
            {severity.level.toUpperCase()} RISK
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Fraud Score */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-card border">
          <div className="flex items-center gap-3">
            <AlertTriangle className={`h-6 w-6 ${severity.color}`} />
            <div>
              <div className="font-semibold text-lg">
                Fraud Score: {fraudAnalysis.fraudScore}/100
              </div>
              <div className="text-sm text-muted-foreground">
                AI-detected fraud likelihood
              </div>
            </div>
          </div>
          <Progress 
            value={fraudAnalysis.fraudScore} 
            className="w-24 h-3"
          />
        </div>

        {/* High Risk Alert */}
        {fraudAnalysis.fraudScore >= 70 && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>HIGH FRAUD RISK DETECTED:</strong> Our AI has identified multiple suspicious patterns. 
              Exercise extreme caution and consider avoiding this transaction.
            </AlertDescription>
          </Alert>
        )}

        {/* Fraud Patterns Detected */}
        {fraudAnalysis.patterns.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Fraud Patterns Detected:
            </h4>
            <div className="space-y-2">
              {fraudAnalysis.patterns.map((pattern: string, index: number) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{pattern}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specific Risk Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {pricePoint && (
            <div className="p-3 rounded-lg bg-muted/30 text-center">
              <DollarSign className="h-5 w-5 mx-auto mb-1 text-blue-500" />
              <div className="text-xs font-medium">Price Analysis</div>
              <div className="text-xs text-muted-foreground">
                {pricePoint < 100 ? 'Suspiciously Low' : 'Within Range'}
              </div>
            </div>
          )}
          
          {sellerInfo && (
            <div className="p-3 rounded-lg bg-muted/30 text-center">
              <User className="h-5 w-5 mx-auto mb-1 text-green-500" />
              <div className="text-xs font-medium">Seller Profile</div>
              <div className="text-xs text-muted-foreground">
                Profile Verified
              </div>
            </div>
          )}
          
          {location && (
            <div className="p-3 rounded-lg bg-muted/30 text-center">
              <MapPin className="h-5 w-5 mx-auto mb-1 text-purple-500" />
              <div className="text-xs font-medium">Location Risk</div>
              <div className="text-xs text-muted-foreground">
                Standard Risk
              </div>
            </div>
          )}
        </div>

        {/* Warnings */}
        {fraudAnalysis.warnings.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-sm flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              AI Warnings:
            </h4>
            <div className="space-y-1">
              {fraudAnalysis.warnings.map((warning: string, index: number) => (
                <div key={index} className="flex items-start gap-2 text-sm text-yellow-700">
                  <AlertTriangle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <span>{warning}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Recommendation */}
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <h4 className="font-medium mb-2 text-sm flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            AI Recommendation:
          </h4>
          <p className="text-sm leading-relaxed">
            {fraudAnalysis.fraudScore >= 80 
              ? "❌ DO NOT PROCEED - High fraud risk detected. This transaction shows multiple red flags and should be avoided."
              : fraudAnalysis.fraudScore >= 60
              ? "⚠️ PROCEED WITH EXTREME CAUTION - Moderate fraud risk detected. Verify all details thoroughly before proceeding."
              : fraudAnalysis.fraudScore >= 30
              ? "✅ LOW FRAUD RISK - Standard precautions recommended. The transaction appears relatively safe."
              : "✅ MINIMAL FRAUD RISK - This transaction shows no significant fraud indicators."
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};