import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  TrendingUp, 
  Zap, 
  Shield, 
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  Sparkles,
  Brain
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CronJobsSetup } from './CronJobsSetup';

export const AutonomousSystemDashboard: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadSystemStatus();
    // Refresh every 5 minutes
    const interval = setInterval(loadSystemStatus, 300000);
    return () => clearInterval(interval);
  }, []);

  const loadSystemStatus = async () => {
    try {
      // Get latest AI analysis sessions
      const { data: analyses } = await supabase
        .from('ai_analysis_sessions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      // Get latest SEO suggestions
      const { data: suggestions } = await supabase
        .from('ai_seo_suggestions')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false })
        .limit(5);

      // Get recent audit logs
      const { data: logs } = await supabase
        .from('audit_logs')
        .select('*')
        .like('action', '%AUTONOMOUS%')
        .order('created_at', { ascending: false })
        .limit(10);

      setSystemStatus({
        analyses: analyses || [],
        suggestions: suggestions || [],
        logs: logs || [],
        lastUpdate: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error loading system status:', error);
    }
  };

  const triggerManualRun = async (functionName: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke(functionName);
      
      if (error) throw error;
      
      toast({
        title: "System Activated",
        description: `${functionName} executed successfully`,
      });
      
      await loadSystemStatus();
    } catch (error) {
      toast({
        title: "Activation Failed",
        description: error instanceof Error ? error.message : 'Unknown error',
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { color: string; icon: any }> = {
      completed: { color: 'bg-green-500', icon: CheckCircle },
      processing: { color: 'bg-blue-500', icon: Clock },
      failed: { color: 'bg-red-500', icon: AlertCircle }
    };

    const config = statusMap[status] || statusMap.processing;
    const Icon = config.icon;

    return (
      <Badge className={`${config.color} text-white`}>
        <Icon className="h-3 w-3 mr-1" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Zap className="h-6 w-6 text-purple-500" />
            Autonomous AI System
            <Badge className="bg-green-500 text-white ml-2">
              <Activity className="h-3 w-3 mr-1" />
              ACTIVE 24/7
            </Badge>
          </CardTitle>
          <p className="text-muted-foreground">
            AI continuously monitors, fixes errors, and optimizes SEO to dominate search rankings
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Error Detection</p>
                    <p className="text-2xl font-bold">Real-time</p>
                  </div>
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">SEO Optimization</p>
                    <p className="text-2xl font-bold">Continuous</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">System Health</p>
                    <p className="text-2xl font-bold">Monitored</p>
                  </div>
                  <Activity className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Cron Jobs Setup */}
      <CronJobsSetup />

      {/* Manual Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Manual System Controls</CardTitle>
          <p className="text-sm text-muted-foreground">
            Trigger autonomous systems on-demand (they run automatically every 5 minutes)
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={() => triggerManualRun('autonomous-error-fixer')}
              disabled={loading}
              variant="outline"
              className="w-full"
            >
              <Shield className="h-4 w-4 mr-2" />
              Run Error Fixer
            </Button>
            
            <Button
              onClick={() => triggerManualRun('autonomous-seo-optimizer')}
              disabled={loading}
              variant="outline"
              className="w-full"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Run SEO Optimizer
            </Button>
            
            <Button
              onClick={() => triggerManualRun('autonomous-health-monitor')}
              disabled={loading}
              variant="outline"
              className="w-full"
            >
              <Activity className="h-4 w-4 mr-2" />
              Run Health Check
            </Button>
            
            <Button
              onClick={() => navigate('/ai-optimizer')}
              variant="outline"
              className="w-full"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI Optimizer Dashboard
            </Button>
            
            <Button
              onClick={() => navigate('/ai-executives')}
              variant="default"
              className="w-full md:col-span-2"
            >
              <Brain className="h-4 w-4 mr-2" />
              AI Executive Team
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Autonomous Actions</CardTitle>
            <Button
              onClick={loadSystemStatus}
              variant="ghost"
              size="sm"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemStatus?.analyses?.slice(0, 5).map((analysis: any) => (
              <div 
                key={analysis.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium">{analysis.analysis_type}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(analysis.created_at).toLocaleString()}
                  </p>
                </div>
                {getStatusBadge(analysis.status)}
              </div>
            ))}
            
            {(!systemStatus?.analyses || systemStatus.analyses.length === 0) && (
              <p className="text-center text-muted-foreground py-8">
                No recent autonomous actions. System will activate automatically.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Active SEO Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            AI-Generated SEO Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {systemStatus?.suggestions?.map((suggestion: any) => (
              <div 
                key={suggestion.id}
                className="p-4 border rounded-lg space-y-2"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-medium">{suggestion.title}</h4>
                  <Badge variant={
                    suggestion.priority === 'high' ? 'destructive' : 'secondary'
                  }>
                    {suggestion.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {suggestion.description}
                </p>
                {suggestion.expected_impact && (
                  <p className="text-xs text-green-600">
                    Expected Impact: {suggestion.expected_impact}
                  </p>
                )}
              </div>
            ))}
            
            {(!systemStatus?.suggestions || systemStatus.suggestions.length === 0) && (
              <p className="text-center text-muted-foreground py-8">
                No pending SEO actions. AI is analyzing...
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
