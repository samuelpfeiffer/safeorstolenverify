import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Loader2, Brain, TrendingUp, DollarSign, Users, Target, 
  Zap, AlertCircle, CheckCircle, Activity, BarChart3, Lightbulb
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const AIExecutiveDashboard = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [stats, setStats] = useState({
    todayRevenue: 0,
    todayUsers: 0,
    todayVerifications: 0,
    conversionRate: 0,
  });
  const [decisions, setDecisions] = useState<any[]>([]);
  const [learnings, setLearnings] = useState<any[]>([]);
  const [experiments, setExperiments] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadDashboardData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadDashboardData = async () => {
    try {
      const today = new Date().toISOString().split('T')[0];

      // Get all verifications today
      const { data: verifications, count: verificationsCount } = await supabase
        .from('verification_items')
        .select('*', { count: 'exact' })
        .gte('created_at', `${today}T00:00:00Z`);

      // Calculate revenue (assuming $2.99 per paid verification)
      const paidCount = verifications?.filter(v => v.status === 'completed').length || 0;
      const todayRevenue = paidCount * 2.99;

      // Get new users
      const { count: newUsers } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', `${today}T00:00:00Z`);

      setStats({
        todayRevenue,
        todayUsers: newUsers || 0,
        todayVerifications: verificationsCount || 0,
        conversionRate: newUsers > 0 ? (paidCount / newUsers) * 100 : 0,
      });

      // Get recent AI executive decisions
      const { data: recentDecisions } = await supabase
        .from('ai_executive_decisions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      setDecisions(recentDecisions || []);

      // Get AI executives status
      const { data: recentLearnings } = await supabase
        .from('ai_executives')
        .select('*')
        .eq('is_active', true);

      setLearnings(recentLearnings || []);

      // Mock experiments data (will be populated by AI)
      setExperiments([]);

    } catch (error) {
      console.error('Error loading dashboard:', error);
    }
  };

  const runAutonomousSystem = async () => {
    setIsRunning(true);
    try {
      const { data, error } = await supabase.functions.invoke('autonomous-master-scheduler');

      if (error) throw error;

      toast({
        title: "✅ AI Executive System Complete",
        description: data?.summary ? `${data.summary.successful}/${data.summary.total_operations} operations successful` : "System running",
      });

      setTimeout(loadDashboardData, 2000);
    } catch (error: any) {
      toast({
        title: "System Error",
        description: error.message || "Failed to run autonomous system",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const getRoleBadge = (role: string) => {
    const colors: any = {
      ceo: 'bg-purple-500',
      coo: 'bg-blue-500',
      cmo: 'bg-green-500',
      cfo: 'bg-orange-500',
      cto: 'bg-red-500',
    };
    return (
      <Badge className={`${colors[role] || 'bg-gray-500'} text-white`}>
        {role.toUpperCase()}
      </Badge>
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'implementing':
        return <Activity className="w-4 h-4 text-blue-600 animate-pulse" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Zap className="w-4 h-4 text-yellow-600" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            AI Executive Command Center
          </h1>
          <p className="text-muted-foreground mt-1">
            Autonomous AI system managing all business operations
          </p>
        </div>
        <Button onClick={runAutonomousSystem} disabled={isRunning} size="lg">
          {isRunning ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Zap className="w-4 h-4 mr-2" />}
          Run Full Cycle
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Today's Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.todayRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Real-time tracking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              New Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.todayUsers}</div>
            <p className="text-xs text-muted-foreground">Today's signups</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="w-4 h-4" />
              Verifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.todayVerifications}</div>
            <p className="text-xs text-muted-foreground">Total today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">User to customer</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="decisions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="decisions" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            AI Decisions
          </TabsTrigger>
          <TabsTrigger value="experiments" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Experiments
          </TabsTrigger>
          <TabsTrigger value="learnings" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Learnings
          </TabsTrigger>
        </TabsList>

        {/* AI Decisions Tab */}
        <TabsContent value="decisions">
          <Card>
            <CardHeader>
              <CardTitle>Strategic AI Decisions</CardTitle>
              <CardDescription>
                Autonomous decisions made by the AI executive team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {decisions.map((decision) => (
                  <div key={decision.id} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getRoleBadge(decision.executive_role)}
                        {getStatusIcon(decision.status)}
                        <h4 className="font-semibold">{decision.decision_type}</h4>
                      </div>
                      <Badge variant="outline">
                        Priority: {decision.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {decision.reasoning || 'AI strategic decision'}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Confidence: {decision.confidence ? (decision.confidence * 100).toFixed(0) : 0}%
                      </span>
                      <span className="text-muted-foreground">
                        Impact: {decision.impact_score || 'Calculating...'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experiments Tab */}
        <TabsContent value="experiments">
          <Card>
            <CardHeader>
              <CardTitle>Active Revenue Experiments</CardTitle>
              <CardDescription>
                A/B tests and optimization experiments running live
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {experiments.map((exp) => (
                  <div key={exp.id} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{exp.experiment_name}</h4>
                      <Badge>{exp.experiment_type}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="text-sm">
                        <div className="font-medium">Variant A (Control)</div>
                        <div className="text-muted-foreground">
                          {exp.variant_a_conversions} conversions
                        </div>
                        <div className="text-muted-foreground">
                          ${exp.variant_a_revenue?.toFixed(2) || '0.00'} revenue
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Variant B (Test)</div>
                        <div className="text-muted-foreground">
                          {exp.variant_b_conversions} conversions
                        </div>
                        <div className="text-muted-foreground">
                          ${exp.variant_b_revenue?.toFixed(2) || '0.00'} revenue
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {experiments.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No active experiments. AI will create experiments when opportunities are identified.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Learnings Tab */}
        <TabsContent value="learnings">
          <Card>
            <CardHeader>
              <CardTitle>AI Learnings & Insights</CardTitle>
              <CardDescription>
                What the AI has learned from past decisions and experiments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learnings.map((executive) => (
                  <div key={executive.id} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{getRoleBadge(executive.role)} - {executive.status}</h4>
                      <Badge variant={executive.is_active ? 'default' : 'secondary'}>
                        {executive.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <div className="text-muted-foreground">Decisions</div>
                        <div className="font-semibold">{executive.decisions_count || 0}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Actions</div>
                        <div className="font-semibold">{executive.actions_taken || 0}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Success Rate</div>
                        <div className="font-semibold">{executive.success_rate ? (executive.success_rate * 100).toFixed(0) : 0}%</div>
                      </div>
                    </div>
                  </div>
                ))}
                {learnings.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    AI is collecting data and will generate learnings soon.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
