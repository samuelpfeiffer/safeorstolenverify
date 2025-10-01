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

  // No visual display - monitoring happens in backend
  return null;
};