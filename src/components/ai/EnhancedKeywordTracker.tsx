import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Minus, Plus, Search, Target, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface KeywordData {
  id: string;
  keyword: string;
  current_rank: number | null;
  previous_rank: number | null;
  target_rank: number;
  search_volume: number;
  difficulty: number;
  trend: 'up' | 'down' | 'stable';
  last_checked: string;
}

/**
 * Keyword tracker - shows empty state until real data is connected
 * Real keyword data requires Google Search Console API integration
 */
export const EnhancedKeywordTracker: React.FC = () => {
  const { toast } = useToast();
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [newKeyword, setNewKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // No mock data - start with empty state
  // Real implementation would connect to Google Search Console API

  const addKeyword = async () => {
    if (!newKeyword.trim()) return;

    setIsLoading(true);
    try {
      // Add keyword to tracking list (stored in local state for now)
      // Real implementation would save to database and connect to GSC API
      const newKeywordData: KeywordData = {
        id: Date.now().toString(),
        keyword: newKeyword.toLowerCase(),
        current_rank: null, // Will be populated when GSC API is connected
        previous_rank: null,
        target_rank: 10,
        search_volume: 0, // Requires API to get real data
        difficulty: 0,
        trend: 'stable',
        last_checked: new Date().toISOString()
      };

      setKeywords(prev => [...prev, newKeywordData]);
      setNewKeyword('');
      
      toast({
        title: "Keyword Added",
        description: `"${newKeyword}" added. Connect Google Search Console for ranking data.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add keyword. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getTrendIcon = (trend: string, currentRank: number | null, previousRank: number | null) => {
    if (currentRank === null) return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (previousRank === null) return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (currentRank < previousRank) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (currentRank > previousRank) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getRankColor = (rank: number | null, target: number) => {
    if (rank === null) return 'text-muted-foreground';
    if (rank <= target) return 'text-green-500';
    if (rank <= target * 2) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Keyword Ranking Tracker
          </CardTitle>
          <CardDescription>
            Track your target keywords. Connect Google Search Console for real ranking data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <Input
              placeholder="Enter keyword to track (e.g., stolen phone checker)"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
              className="flex-1"
            />
            <Button onClick={addKeyword} disabled={isLoading || !newKeyword.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Keyword
            </Button>
          </div>

          {keywords.length > 0 ? (
            <div className="space-y-4">
              {keywords.map((keyword) => (
                <Card key={keyword.id} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-sm">{keyword.keyword}</h3>
                      <p className="text-xs text-muted-foreground">
                        {keyword.search_volume > 0 
                          ? `Volume: ${keyword.search_volume.toLocaleString()}/mo`
                          : 'Connect GSC for volume data'}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getTrendIcon(keyword.trend, keyword.current_rank, keyword.previous_rank)}
                        <span className={`text-lg font-bold ${getRankColor(keyword.current_rank, keyword.target_rank)}`}>
                          {keyword.current_rank || '—'}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Current Rank</p>
                    </div>

                    <div className="text-center">
                      <span className="text-lg font-bold text-primary">#{keyword.target_rank}</span>
                      <p className="text-xs text-muted-foreground">Target</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs">Difficulty</span>
                        <Badge variant="outline" className="text-xs">
                          {keyword.difficulty > 0 ? `${keyword.difficulty}%` : '—'}
                        </Badge>
                      </div>
                      <Progress 
                        value={keyword.difficulty} 
                        className="h-2"
                      />
                    </div>

                    <div className="text-right">
                      <Button size="sm" variant="outline" disabled>
                        <Search className="h-3 w-3 mr-1" />
                        Check
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground font-medium">No keywords tracked yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add keywords above to start tracking. Connect Google Search Console for real ranking data.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
