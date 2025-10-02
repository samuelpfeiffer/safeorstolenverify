import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Brain, TrendingUp, DollarSign, Settings, Code, Users, Play, Zap, CheckCircle, Clock } from 'lucide-react';

interface Executive {
  id: string;
  role: string;
  status: string;
  last_decision_at: string;
  decisions_count: number;
  actions_taken: number;
  success_rate: number;
}

interface Decision {
  id: string;
  executive_role: string;
  decision_type: string;
  decision_data: any;
  reasoning: string;
  priority: string;
  status: string;
  created_at: string;
}

export const AIExecutiveDashboard: React.FC = () => {
  const [executives, setExecutives] = useState<Executive[]>([]);
  const [recentDecisions, setRecentDecisions] = useState<Decision[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const fetchData = async () => {
    const { data: execs } = await supabase
      .from('ai_executives')
      .select('*')
      .order('role');

    const { data: decisions } = await supabase
      .from('ai_executive_decisions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (execs) setExecutives(execs);
    if (decisions) setRecentDecisions(decisions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const runAllExecutives = async () => {
    setIsRunning(true);
    toast({
      title: "AI Executive Team Activated",
      description: "Running all AI executives to analyze and make decisions...",
    });

    try {
      const { data, error } = await supabase.functions.invoke('ai-executive-orchestrator');
      
      if (error) throw error;

      toast({
        title: "AI Executives Completed",
        description: `Made ${data.summary.totalDecisions} decisions across ${data.summary.executivesRun} executives`,
      });

      fetchData();
    } catch (error) {
      console.error('Error running executives:', error);
      toast({
        title: "Error",
        description: "Failed to run AI executives. Check logs.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const getExecutiveIcon = (role: string) => {
    const icons: any = {
      'CEO': Brain,
      'COO': Settings,
      'CFO': DollarSign,
      'CMO': TrendingUp,
      'CTO': Code,
    };
    return icons[role] || Users;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">AI Executive Dashboard</h2>
          <p className="text-muted-foreground">Autonomous business management powered by AI</p>
        </div>
        <Button onClick={runAllExecutives} disabled={isRunning} size="lg">
          {isRunning ? (
            <>
              <Clock className="mr-2 h-5 w-5 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" />
              Run All Executives
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {executives.map((exec) => {
          const Icon = getExecutiveIcon(exec.role);
          return (
            <Card key={exec.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-primary" />
                  <Badge variant={exec.status === 'active' ? 'default' : 'secondary'}>
                    {exec.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{exec.role}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Decisions</span>
                  <span className="font-semibold">{exec.decisions_count}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Actions</span>
                  <span className="font-semibold">{exec.actions_taken}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-semibold">{exec.success_rate}%</span>
                </div>
                {exec.last_decision_at && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Last: {new Date(exec.last_decision_at).toLocaleDateString()}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Recent AI Decisions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDecisions.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No decisions yet. Run the AI executives to start making autonomous decisions.
              </p>
            ) : (
              recentDecisions.map((decision) => (
                <div key={decision.id} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{decision.executive_role}</Badge>
                        <Badge variant={getPriorityColor(decision.priority)}>
                          {decision.priority}
                        </Badge>
                        {decision.status === 'executed' && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <h4 className="font-semibold">{decision.decision_data?.decision || 'Decision'}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{decision.reasoning}</p>
                      {decision.decision_data?.expectedImpact && (
                        <p className="text-sm text-primary mt-1">
                          Expected Impact: {decision.decision_data.expectedImpact}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(decision.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
