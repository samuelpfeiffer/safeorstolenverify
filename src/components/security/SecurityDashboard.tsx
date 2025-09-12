
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { SecurityScoreCard } from './SecurityScoreCard';
import { SecurityMetricsGrid } from './SecurityMetricsGrid';
import { SecurityDashboardLoading } from './SecurityDashboardLoading';
import { useSecurityContext } from '@/components/security/SecurityContextProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';

interface SecurityMetrics {
  totalVerifications: number;
  recentAuditLogs: number;
  rateLimitUsage: number;
  dataRetentionCompliance: number;
  securityScore: number;
}

export const SecurityDashboard = () => {
  const { user } = useAuth();
  const { isSecureContext, securityStatus } = useSecurityContext();
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
        .eq('user_id', user?.id);

      // Fetch recent audit logs count (last 7 days)
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      
      const { count: auditCount } = await supabase
        .from('audit_logs')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id)
        .gte('created_at', weekAgo.toISOString());

      // Fetch rate limit usage (current hour)
      const hourAgo = new Date();
      hourAgo.setHours(hourAgo.getHours() - 1);
      
      const { count: rateLimitCount } = await supabase
        .from('rate_limits')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user?.id)
        .gte('window_start', hourAgo.toISOString());

      // Enhanced security score calculation
      const verificationScore = Math.min((verificationCount || 0) * 2, 30);
      const auditScore = Math.min((auditCount || 0) * 5, 25);
      const complianceScore = 45; // Base compliance score
      
      // Add security context bonuses
      const secureContextBonus = isSecureContext ? 10 : 0;
      const sessionValidBonus = securityStatus?.sessionValid ? 5 : 0;
      
      const totalScore = verificationScore + auditScore + complianceScore + secureContextBonus + sessionValidBonus;

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
      {/* Security Context Warning */}
      {!isSecureContext && (
        <Card className="border-red-500 bg-red-50 dark:bg-red-950">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Insecure Context Detected
            </CardTitle>
            <CardDescription className="text-red-700 dark:text-red-300">
              Your connection is not secure. For optimal security, please use HTTPS.
            </CardDescription>
          </CardHeader>
        </Card>
      )}
      
      {/* Session Security Status */}
      {securityStatus && (
        <Card className="bg-sos border-sos-orange/20">
          <CardHeader>
            <CardTitle className="text-sos-orange flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Session Security Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-gray-300">
              <p>Session Valid: {securityStatus.sessionValid ? '✓ Yes' : '✗ No'}</p>
              <p>Admin Access: {securityStatus.hasAdminRole ? '✓ Yes' : '✗ No'}</p>
              <p>Secure Context: {securityStatus.isSecure ? '✓ Yes' : '✗ No'}</p>
              {securityStatus.lastSecurityCheck && (
                <p>Last Check: {new Date(securityStatus.lastSecurityCheck).toLocaleString()}</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
      
      <SecurityScoreCard securityScore={metrics.securityScore} />
      <SecurityMetricsGrid metrics={metrics} />
    </div>
  );
};
