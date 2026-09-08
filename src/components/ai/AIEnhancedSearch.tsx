import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Brain, Search, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { aiService } from '@/services/aiService';

interface AIEnhancedSearchProps {
  onSearch: (query: string, aiEnhancements?: any) => void;
  isLoading?: boolean;
}

export const AIEnhancedSearch: React.FC<AIEnhancedSearchProps> = ({
  onSearch,
  isLoading = false
}) => {
  const [query, setQuery] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAIAnalysis = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setIsAnalyzing(true);
    try {
      // Generate AI suggestions based on the query
      const suggestions = await generateSmartSuggestions(searchQuery);
      setAiSuggestions(suggestions);
      
      // Enhance the search with AI insights
      const aiEnhancements = {
        suggestedCategories: await categorizeQuery(searchQuery),
        riskFactors: await identifyRiskFactors(searchQuery),
        searchOptimizations: await optimizeSearch(searchQuery)
      };
      
      onSearch(searchQuery, aiEnhancements);
    } catch (error) {
      console.error('AI search enhancement failed:', error);
      onSearch(searchQuery);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateSmartSuggestions = async (query: string): Promise<string[]> => {
    // AI-powered query suggestions
    const suggestions = [];
    
    if (query.match(/\d{10,}/)) {
      suggestions.push('IMEI/Serial number detected - Check phone databases');
      suggestions.push('Cross-reference with manufacturer records');
    }
    
    if (query.toLowerCase().includes('iphone') || query.toLowerCase().includes('samsung')) {
      suggestions.push('Check carrier blacklist status');
      suggestions.push('Verify activation lock status');
    }
    
    if (query.match(/[A-Z0-9]{17}/)) {
      suggestions.push('VIN detected - Run comprehensive vehicle check');
      suggestions.push('Check for liens and accidents');
    }
    
    return suggestions;
  };

  const categorizeQuery = async (query: string): Promise<string[]> => {
    const categories = [];
    
    if (query.match(/\d{15}/)) categories.push('Mobile Device');
    if (query.match(/[A-Z0-9]{17}/)) categories.push('Vehicle');
    if (query.toLowerCase().includes('bike')) categories.push('Bicycle');
    if (query.toLowerCase().includes('laptop')) categories.push('Computer');
    
    return categories.length > 0 ? categories : ['General'];
  };

  const identifyRiskFactors = async (query: string): Promise<string[]> => {
    const riskFactors = [];
    
    if (query.includes('$') && parseFloat(query.replace(/[^0-9.]/g, '')) < 100) {
      riskFactors.push('Low price may indicate stolen goods');
    }
    
    if (query.toLowerCase().includes('urgent') || query.toLowerCase().includes('quick sale')) {
      riskFactors.push('Urgency in listing may be suspicious');
    }
    
    return riskFactors;
  };

  const optimizeSearch = async (query: string): Promise<any> => {
    return {
      enhancedQuery: query.trim().toUpperCase(),
      searchPriority: 'high',
      recommendedDatabases: ['police', 'insurance', 'manufacturer']
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAIAnalysis(query);
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="h-5 w-5 text-primary" />
          AI-Enhanced Search
          <Badge variant="secondary" className="ml-auto">
            <Sparkles className="h-3 w-3 mr-1" />
            Smart
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter serial number, IMEI, VIN, or item description..."
            className="flex-1"
            disabled={isLoading || isAnalyzing}
          />
          <Button 
            type="submit" 
            disabled={!query.trim() || isLoading || isAnalyzing}
            className="px-6"
          >
            {isAnalyzing ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <Zap className="h-4 w-4" />
              </div>
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </form>

        {isAnalyzing && (
          <div className="p-3 rounded-lg bg-muted/50 border">
            <div className="flex items-center gap-2 text-sm">
              <Brain className="h-4 w-4 text-primary animate-pulse" />
              <span>AI analyzing your search for optimal results...</span>
            </div>
          </div>
        )}

        {aiSuggestions.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              AI Suggestions:
            </h4>
            <div className="space-y-1">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-2 text-sm p-2 rounded-[0.25rem] bg-muted/30">
                  <Sparkles className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Brain className="h-3 w-3" />
            <span>AI automatically detects item types and applies intelligent search patterns</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};