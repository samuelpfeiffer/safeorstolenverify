import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, Play, CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const AGENTS = [
  { name: 'ai-seo-agent', label: 'SEO Agent', description: 'Analyzes blog SEO' },
  { name: 'ai-content-agent', label: 'Content Agent', description: 'Generates blog content' },
  { name: 'ai-fraud-detector', label: 'Fraud Detector', description: 'Analyzes reports for fraud' },
  { name: 'ai-retention-agent', label: 'Retention Agent', description: 'User churn prevention' },
  { name: 'ai-analytics-agent', label: 'Analytics Agent', description: 'Platform analytics' },
  { name: 'ai-compliance-agent', label: 'Compliance Agent', description: 'GDPR & data cleanup' },
  { name: 'ai-learning-agent', label: 'Learning Agent', description: 'AI pattern learning' },
];

export const AgentStatusGrid = () => {
  const { toast } = useToast();
  const [runningAgent, setRunningAgent] = useState<string | null>(null);

  const { data: runs, refetch } = useQuery({
    queryKey: ['ai-agent-runs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_agent_runs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      if (error) throw error;
      return data;
    },
  });

  const getLatestRun = (agentName: string) => {
    return runs?.find(r => r.agent_name === agentName);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed': return <XCircle className="w-4 h-4 text-destructive" />;
      case 'running': return <Loader2 className="w-4 h-4 text-primary animate-spin" />;
      default: return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const runAgent = async (agentName: string) => {
    setRunningAgent(agentName);
    try {
      const { error } = await supabase.functions.invoke(agentName);
      if (error) throw error;
      toast({ title: 'Agent started', description: `${agentName} is now running` });
      setTimeout(() => refetch(), 2000);
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to start agent', variant: 'destructive' });
    } finally {
      setRunningAgent(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {AGENTS.map((agent) => {
        const latestRun = getLatestRun(agent.name);
        return (
          <Card key={agent.name}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <CardTitle className="text-sm">{agent.label}</CardTitle>
                </div>
                {latestRun && (
                  <Badge variant={latestRun.status === 'completed' ? 'default' : latestRun.status === 'failed' ? 'destructive' : 'secondary'}>
                    {getStatusIcon(latestRun.status)}
                    <span className="ml-1 capitalize">{latestRun.status}</span>
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">{agent.description}</p>
              {latestRun && (
                <p className="text-xs text-muted-foreground mb-2">
                  Last run: {new Date(latestRun.created_at).toLocaleString()}
                </p>
              )}
              <Button
                size="sm"
                variant="outline"
                onClick={() => runAgent(agent.name)}
                disabled={runningAgent === agent.name}
                className="w-full"
              >
                {runningAgent === agent.name ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                Run Now
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
