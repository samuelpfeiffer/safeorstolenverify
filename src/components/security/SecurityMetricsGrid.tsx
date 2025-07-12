
import { Shield, Activity, Timer, Database } from 'lucide-react';
import { SecurityMetricCard } from './SecurityMetricCard';

interface SecurityMetrics {
  totalVerifications: number;
  recentAuditLogs: number;
  rateLimitUsage: number;
  dataRetentionCompliance: number;
}

interface SecurityMetricsGridProps {
  metrics: SecurityMetrics;
}

export const SecurityMetricsGrid = ({ metrics }: SecurityMetricsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <SecurityMetricCard
        title="Total Verifications"
        value={metrics.totalVerifications}
        description="Items verified to date"
        icon={Shield}
      />
      
      <SecurityMetricCard
        title="Recent Activity"
        value={metrics.recentAuditLogs}
        description="Audit logs (7 days)"
        icon={Activity}
      />
      
      <SecurityMetricCard
        title="Rate Limit Usage"
        value={`${metrics.rateLimitUsage}/10`}
        description="Requests this hour"
        icon={Timer}
      />
      
      <SecurityMetricCard
        title="Data Compliance"
        value={`${metrics.dataRetentionCompliance}%`}
        description="Retention compliance"
        icon={Database}
      />
    </div>
  );
};
