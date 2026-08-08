import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, RefreshCw, CheckCircle, Clock, Zap, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const AIBlogStatus: React.FC = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<Date | null>(null);
  const [stats, setStats] = useState({ total: 0, thisWeek: 0, today: 0 });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { data: allPosts } = await supabase
        .from('blog_posts')
        .select('published_at', { count: 'exact' })
        .eq('status', 'published');

      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      const thisWeek = allPosts?.filter(p => new Date(p.published_at) >= weekAgo).length || 0;
      const todayCount = allPosts?.filter(p => new Date(p.published_at) >= today).length || 0;
      const lastPost = allPosts?.[0];

      setStats({
        total: allPosts?.length || 0,
        thisWeek,
        today: todayCount,
      });

      if (lastPost) {
        setLastGenerated(new Date(lastPost.published_at));
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const generateNow = async () => {
    setIsGenerating(true);
    try {
      const { error } = await supabase.functions.invoke('generate-daily-blog');
      
      if (error) throw error;

      toast({
        title: '✨ Blog Post Generated!',
        description: 'AI has created a new blog post. Refresh to see it.',
      });

      setTimeout(loadStats, 2000);
    } catch (error: any) {
      toast({
        title: 'Generation Failed',
        description: error.message || 'Please try again later',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <CardTitle className="flex items-center gap-2">
                AI Content Engine
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1" />
                  Active
                </Badge>
              </CardTitle>
              <CardDescription>
                Automated daily AI-powered content generation
              </CardDescription>
            </div>
          </div>
          <Button
            onClick={generateNow}
            disabled={isGenerating}
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Generate Now
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.total}</p>
            <p className="text-sm text-muted-foreground">Total Posts</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.thisWeek}</p>
            <p className="text-sm text-muted-foreground">This Week</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.today}</p>
            <p className="text-sm text-muted-foreground">Today</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <Brain className="w-6 h-6 text-pink-500 mx-auto mb-2" />
            <p className="text-xs font-semibold text-foreground">Next Generation</p>
            <p className="text-sm text-muted-foreground">9:00 AM UTC</p>
          </div>
        </div>

        {lastGenerated && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Last post generated: {lastGenerated.toLocaleString()}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
