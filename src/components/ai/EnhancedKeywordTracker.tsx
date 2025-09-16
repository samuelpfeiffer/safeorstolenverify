import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Minus, Plus, Search, Target } from 'lucide-react';
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

export const EnhancedKeywordTracker: React.FC = () => {
  const { toast } = useToast();
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [newKeyword, setNewKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockKeywords: KeywordData[] = [
      {
        id: '1',
        keyword: 'stolen item checker',
        current_rank: 15,
        previous_rank: 18,
        target_rank: 1,
        search_volume: 2400,
        difficulty: 45,
        trend: 'up',
        last_checked: new Date().toISOString()
      },
      {
        id: '2', 
        keyword: 'IMEI checker free',
        current_rank: 8,
        previous_rank: 12,
        target_rank: 3,
        search_volume: 8100,
        difficulty: 38,
        trend: 'up',
        last_checked: new Date().toISOString()
      },
      {
        id: '3',
        keyword: 'VIN verification tool',
        current_rank: 25,
        previous_rank: 23,
        target_rank: 5,
        search_volume: 1900,
        difficulty: 52,
        trend: 'down',
        last_checked: new Date().toISOString()
      },
      {
        id: '4',
        keyword: 'check if phone is stolen',
        current_rank: 12,
        previous_rank: 12,
        target_rank: 1,
        search_volume: 5200,
        difficulty: 41,
        trend: 'stable',
        last_checked: new Date().toISOString()
      },
      {
        id: '5',
        keyword: 'serial number lookup',
        current_rank: null,
        previous_rank: null,
        target_rank: 10,
        search_volume: 3600,
        difficulty: 35,
        trend: 'stable',
        last_checked: new Date().toISOString()
      }
    ];
    setKeywords(mockKeywords);
  }, []);

  const addKeyword = async () => {
    if (!newKeyword.trim()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newKeywordData: KeywordData = {
        id: Date.now().toString(),
        keyword: newKeyword.toLowerCase(),
        current_rank: null,
        previous_rank: null,
        target_rank: 10,
        search_volume: Math.floor(Math.random() * 5000) + 500,
        difficulty: Math.floor(Math.random() * 60) + 20,
        trend: 'stable',
        last_checked: new Date().toISOString()
      };

      setKeywords(prev => [...prev, newKeywordData]);
      setNewKeyword('');
      
      toast({
        title: "Keyword Added",
        description: `Now tracking "${newKeyword}" for ranking changes.`,
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
    if (currentRank === null) return <Minus className="h-4 w-4 text-gray-400" />;
    
    if (previousRank === null) return <Minus className="h-4 w-4 text-gray-400" />;
    
    if (currentRank < previousRank) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (currentRank > previousRank) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 30) return 'bg-green-500';
    if (difficulty <= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getRankColor = (rank: number | null, target: number) => {
    if (rank === null) return 'text-gray-400';
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
            Monitor your target keywords and track ranking improvements over time
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

          <div className="space-y-4">
            {keywords.map((keyword) => (
              <Card key={keyword.id} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-sm">{keyword.keyword}</h3>
                    <p className="text-xs text-muted-foreground">
                      Volume: {keyword.search_volume.toLocaleString()}/mo
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      {getTrendIcon(keyword.trend, keyword.current_rank, keyword.previous_rank)}
                      <span className={`text-lg font-bold ${getRankColor(keyword.current_rank, keyword.target_rank)}`}>
                        {keyword.current_rank || 'N/A'}
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
                        {keyword.difficulty}%
                      </Badge>
                    </div>
                    <Progress 
                      value={keyword.difficulty} 
                      className="h-2"
                      style={{
                        backgroundColor: '#f1f5f9'
                      }}
                    />
                  </div>

                  <div className="text-right">
                    <Button size="sm" variant="outline">
                      <Search className="h-3 w-3 mr-1" />
                      Check
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {keywords.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No keywords tracked yet. Add your first keyword above.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};