import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Play, Pause, Clock, TrendingUp, Calendar, Settings } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface AutomationStats {
  totalGenerated: number;
  published: number;
  drafts: number;
  avgWordCount: number;
  lastGeneration: string | null;
}

export const BlogAutomationDashboard: React.FC = () => {
  const { toast } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [automationEnabled, setAutomationEnabled] = useState(true);
  const [stats, setStats] = useState<AutomationStats>({
    totalGenerated: 0,
    published: 0,
    drafts: 0,
    avgWordCount: 0,
    lastGeneration: null
  });

  const triggerAutomatedGeneration = async () => {
    setIsRunning(true);
    try {
      const { data, error } = await supabase.functions.invoke('automated-blog-publisher', {
        body: { 
          manual_trigger: true, 
          automation_enabled: automationEnabled 
        }
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Blog Post Generated!",
          description: `Successfully ${data.published ? 'published' : 'drafted'}: "${data.topic}"`,
        });
        
        // Update stats
        await loadStats();
      } else {
        throw new Error(data.error || 'Failed to generate blog post');
      }
    } catch (error) {
      console.error('Error generating blog post:', error);
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate blog post automatically.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const triggerScheduler = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('schedule-blog-automation', {
        body: { manual_trigger: true }
      });

      if (error) throw error;

      if (data.success) {
        if (data.action === 'generated') {
          toast({
            title: "Scheduled Generation Complete!",
            description: `Generated: "${data.topic}"`,
          });
        } else {
          toast({
            title: "Scheduler Ran",
            description: data.reason,
          });
        }
        await loadStats();
      }
    } catch (error) {
      console.error('Error running scheduler:', error);
      toast({
        title: "Scheduler Error",
        description: error.message || "Failed to run blog scheduler.",
        variant: "destructive",
      });
    }
  };

  const loadStats = async () => {
    try {
      // Load automation stats from audit logs
      const { data: logs } = await supabase
        .from('audit_logs')
        .select('new_values, created_at')
        .eq('action', 'BLOG_AUTOMATION_STATS')
        .order('created_at', { ascending: false })
        .limit(50);

      if (logs && logs.length > 0) {
        const published = logs.filter(log => 
          log.new_values && 
          typeof log.new_values === 'object' && 
          (log.new_values as any).published
        ).length;
        const drafts = logs.length - published;
        const totalWords = logs.reduce((sum, log) => {
          const values = log.new_values as any;
          return sum + (values?.word_count || 0);
        }, 0);
        const avgWordCount = Math.round(totalWords / logs.length);

        setStats({
          totalGenerated: logs.length,
          published,
          drafts,
          avgWordCount,
          lastGeneration: logs[0]?.created_at || null
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  React.useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-sos-orange" />
            Blog Automation Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Autonomous blog content generation and publishing system
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="automation"
            checked={automationEnabled}
            onCheckedChange={setAutomationEnabled}
          />
          <Label htmlFor="automation">Automation Enabled</Label>
        </div>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Manual Controls
            </CardTitle>
            <CardDescription>
              Trigger automated generation manually for testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={triggerAutomatedGeneration}
              disabled={isRunning}
              className="w-full"
              size="lg"
            >
              {isRunning ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Generate Blog Post Now
                </>
              )}
            </Button>
            
            <Button 
              onClick={triggerScheduler}
              variant="outline"
              className="w-full"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Run Scheduler Check
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Automation Status
            </CardTitle>
            <CardDescription>
              Current automation configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Status</span>
                <Badge variant={automationEnabled ? "default" : "secondary"}>
                  {automationEnabled ? "Active" : "Disabled"}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Schedule</span>
                <span className="text-sm text-muted-foreground">Daily at 10 AM UTC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Weekend Posts</span>
                <span className="text-sm text-muted-foreground">Saturdays at 2 PM UTC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Auto-Publish Rate</span>
                <span className="text-sm text-muted-foreground">70% of posts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-sos-orange">{stats.totalGenerated}</div>
            <p className="text-xs text-muted-foreground">Total Generated</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">{stats.published}</div>
            <p className="text-xs text-muted-foreground">Published</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">{stats.drafts}</div>
            <p className="text-xs text-muted-foreground">Drafts</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">{stats.avgWordCount}</div>
            <p className="text-xs text-muted-foreground">Avg Words</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Features</CardTitle>
          <CardDescription>
            What the automated system does
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Content Intelligence</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Avoids duplicate topics automatically</li>
                <li>• Generates seasonal and trending content</li>
                <li>• Optimizes posting schedule for engagement</li>
                <li>• Creates SEO-optimized titles and descriptions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Publishing Strategy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 70% auto-publish, 30% draft for review</li>
                <li>• Limits weekend posting for optimal reach</li>
                <li>• Prevents content overload (max 5/week)</li>
                <li>• Tracks performance and analytics</li>
              </ul>
            </div>
          </div>
          
          {stats.lastGeneration && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Last automated generation:</strong>{' '}
                {new Date(stats.lastGeneration).toLocaleString()}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};