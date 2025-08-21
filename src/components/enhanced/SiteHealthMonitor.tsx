import React, { useEffect, useState } from 'react';
import { siteOptimizer } from '@/utils/siteOptimization';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface HealthStatus {
  healthy: boolean;
  responseTime: number;
  timestamp: string;
  error?: string;
}

export const SiteHealthMonitor: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkHealth = async () => {
    setIsChecking(true);
    try {
      const status = await siteOptimizer.checkSiteHealth();
      setHealthStatus(status);
    } catch (error) {
      console.error('Health check failed:', error);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (!healthStatus && !isChecking) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 max-w-sm">
      <CardContent className="p-3">
        <div className="flex items-center gap-2">
          {isChecking ? (
            <Clock className="h-4 w-4 animate-spin text-yellow-500" />
          ) : healthStatus?.healthy ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500" />
          )}
          
          <div className="flex-1">
            <p className="text-xs font-medium">
              {isChecking ? 'Checking...' : healthStatus?.healthy ? 'All Systems Operational' : 'Service Issues Detected'}
            </p>
            {!isChecking && healthStatus && (
              <p className="text-xs text-muted-foreground">
                Response: {healthStatus.responseTime}ms
              </p>
            )}
          </div>
          
          <Badge 
            variant={
              isChecking ? 'secondary' : 
              healthStatus?.healthy ? 'default' : 
              'destructive'
            }
          >
            {isChecking ? 'Checking' : healthStatus?.healthy ? 'Online' : 'Offline'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};