import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Lightbulb, FileText, ShieldAlert, TrendingUp, CheckCircle } from 'lucide-react';

export const AIStatsOverview = () => {
  const { data: stats } = useQuery({
    queryKey: ['ai-stats-overview'],
    queryFn: async () => {
      const [runsResult, recsResult, contentResult, fraudResult] = await Promise.all([
        supabase.from('ai_agent_runs').select('status', { count: 'exact' }).eq('status', 'completed'),
        supabase.from('ai_recommendations').select('status', { count: 'exact' }).eq('status', 'pending'),
        supabase.from('ai_content_queue').select('status', { count: 'exact' }).in('status', ['draft', 'pending_review']),
        supabase.from('fraud_analysis').select('reviewed', { count: 'exact' }).eq('reviewed', false),
      ]);

      return {
        completedRuns: runsResult.count || 0,
        pendingRecs: recsResult.count || 0,
        pendingContent: contentResult.count || 0,
        unreviewed: fraudResult.count || 0,
      };
    },
  });

  const statCards = [
    { 
      title: 'Completed Runs', 
      value: stats?.completedRuns || 0, 
      icon: CheckCircle,
      color: 'text-green-500'
    },
    { 
      title: 'Pending Recommendations', 
      value: stats?.pendingRecs || 0, 
      icon: Lightbulb,
      color: 'text-yellow-500'
    },
    { 
      title: 'Content Queue', 
      value: stats?.pendingContent || 0, 
      icon: FileText,
      color: 'text-blue-500'
    },
    { 
      title: 'Fraud Alerts', 
      value: stats?.unreviewed || 0, 
      icon: ShieldAlert,
      color: 'text-destructive'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statCards.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
