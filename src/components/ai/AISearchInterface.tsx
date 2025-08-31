import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Target, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AISearchResult {
  confidence: number;
  source: string;
  riskScore: number;
  aiInsight: string;
}

export const AISearchInterface = () => {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiResults, setAiResults] = useState<AISearchResult[]>([]);
  const { toast } = useToast();

  const handleAISearch = async () => {
    if (!query.trim()) return;

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResults: AISearchResult[] = [
        {
          confidence: 94,
          source: "FBI National Crime Database",
          riskScore: 8,
          aiInsight: "AI detected potential match patterns in theft reports from similar geographic regions"
        },
        {
          confidence: 87,
          source: "Insurance Fraud Network",
          riskScore: 15,
          aiInsight: "Machine learning algorithms identified suspicious pricing patterns for this item category"
        },
        {
          confidence: 92,
          source: "International Stolen Art Registry",
          riskScore: 3,
          aiInsight: "Neural network analysis shows legitimate ownership probability based on provenance data"
        }
      ];
      
      setAiResults(mockResults);
      setIsProcessing(false);
      
      toast({
        title: "AI Search Complete",
        description: `Analyzed ${mockResults.length} databases with machine learning`,
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* AI Search Header */}
      <Card className="border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-sos-orange" />
            <div>
              <h3 className="text-2xl font-bold">AI-Powered Verification</h3>
              <p className="text-muted-foreground font-normal">
                First mobile-native AI system for stolen goods detection
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter serial number, IMEI, VIN, or item description..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleAISearch()}
            />
            <Button 
              onClick={handleAISearch}
              disabled={isProcessing}
              className="bg-sos-orange hover:bg-sos-orange/90"
            >
              {isProcessing ? (
                <>
                  <Brain className="mr-2 h-4 w-4 animate-pulse" />
                  AI Processing...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  AI Search
                </>
              )}
            </Button>
          </div>
          
          {/* AI Capabilities */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="text-sos-orange border-sos-orange/30">
              <Brain className="mr-1 h-3 w-3" />
              Machine Learning
            </Badge>
            <Badge variant="outline" className="text-sos-lime border-sos-lime/30">
              <Target className="mr-1 h-3 w-3" />
              Pattern Recognition
            </Badge>
            <Badge variant="outline" className="text-blue-500 border-blue-500/30">
              <Zap className="mr-1 h-3 w-3" />
              Real-time Analysis
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* AI Results */}
      {aiResults.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Brain className="h-5 w-5 text-sos-orange" />
            AI Analysis Results
          </h4>
          
          {aiResults.map((result, index) => (
            <Card key={index} className="border-l-4 border-l-sos-orange">
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-semibold">{result.source}</h5>
                    <p className="text-sm text-muted-foreground">{result.aiInsight}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={result.riskScore > 50 ? "destructive" : "default"}>
                      Risk: {result.riskScore}%
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      Confidence: {result.confidence}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};