
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { SecurityScoreCard } from './SecurityScoreCard';
import { SecurityMetricsGrid } from './SecurityMetricsGrid';
import { SecurityDashboardLoading } from './SecurityDashboardLoading';

interface SecurityMetrics {
  totalVerifications: number;
  recentAuditLogs: number;
  rateLimitUsage: number;
  dataRetentionCompliance: number;
  securityScore: number;
}

export const SecurityDashboard = () => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    totalVerifications: 0,
    recentAuditLogs: 0,
    rateLimitUsage: 0,
    dataRetentionCompliance: 95,
    securityScore: 85
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchSecurityMetrics();
    }
  }, [user]);

  const fetchSecurityMetrics = async () => {
    try {
      setIsLoading(true);

      // Fetch verification count
      const { count: verificationCount } = await supabase
        .from('verification_results')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id ?? '');

      // Fetch recent audit logs count (last 7 days)
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      
      const { count: auditCount } = await supabase
        .from('audit_logs')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id ?? '')
        .gte('created_at', weekAgo.toISOString());

      // Fetch rate limit usage (current hour)
      const hourAgo = new Date();
      hourAgo.setHours(hourAgo.getHours() - 1);
      
      const { count: rateLimitCount } = await supabase
        .from('rate_limits')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id ?? '')
        .gte('window_start', hourAgo.toISOString());

      // Calculate security score based on activity and settings
      const verificationScore = Math.min((verificationCount || 0) * 2, 30);
      const auditScore = Math.min((auditCount || 0) * 5, 25);
      const complianceScore = 45; // Base compliance score
      const totalScore = verificationScore + auditScore + complianceScore;

      setMetrics({
        totalVerifications: verificationCount || 0,
        recentAuditLogs: auditCount || 0,
        rateLimitUsage: rateLimitCount || 0,
        dataRetentionCompliance: 95,
        securityScore: Math.min(totalScore, 100)
      });
    } catch (error) {
      console.error('Error fetching security metrics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <SecurityDashboardLoading />;
  }

  return (
    <div className="space-y-6">
      <SecurityScoreCard securityScore={metrics.securityScore} />
      <SecurityMetricsGrid metrics={metrics} />
    </div>
  );
};
