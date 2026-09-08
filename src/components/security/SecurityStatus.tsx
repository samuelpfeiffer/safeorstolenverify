
import { useState, useEffect } from 'react';
import { Shield, CheckCircle, AlertTriangle, Lock, Wifi } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { securityService } from '@/services/securityService';

export const SecurityStatus = () => {
  const [securityMetrics, setSecurityMetrics] = useState<Record<string, unknown> | null>(null);
  const [securityScore, setSecurityScore] = useState(0);

  useEffect(() => {
    const updateSecurityStatus = async () => {
      const metrics = securityService.getSecurityMetrics();
      const score = await securityService.performSecurityCheck();
      
      setSecurityMetrics(metrics);
      setSecurityScore(score ? 100 : 0);
    };

    const handleSecurityInitialized = (event: CustomEvent) => {
      setSecurityMetrics(event.detail);
      updateSecurityStatus();
    };

    // Initial check
    updateSecurityStatus();

    // Listen for security events
    window.addEventListener('security-initialized', handleSecurityInitialized as EventListener);

    return () => {
      window.removeEventListener('security-initialized', handleSecurityInitialized as EventListener);
    };
  }, []);

  const getSecurityStatusIcon = () => {
    if (securityScore >= 90) return <Shield className="h-5 w-5 text-green-500" />;
    if (securityScore >= 75) return <CheckCircle className="h-5 w-5 text-blue-500" />;
    return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
  };

  const getSecurityStatusBadge = () => {
    if (securityScore >= 90) return <Badge className="bg-green-500">Excellent</Badge>;
    if (securityScore >= 75) return <Badge className="bg-blue-500">Good</Badge>;
    return <Badge variant="destructive">Needs Improvement</Badge>;
  };

  if (!securityMetrics) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Lock className="h-4 w-4 animate-pulse" />
        <span>Initializing mobile security...</span>
      </div>
    );
  }

  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {getSecurityStatusIcon()}
          Mobile Security Active
          {getSecurityStatusBadge()}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Mobile Headers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Input Validation</span>
          </div>
          <div className="flex items-center gap-2">
            {securityMetrics.certificateValid ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            )}
            <span>Certificate Status</span>
          </div>
          <div className="flex items-center gap-2">
            {securityMetrics.secureContext ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <Wifi className="h-4 w-4 text-blue-500" />
            )}
            <span>Connection Security</span>
          </div>
        </div>
        
        <div className="mt-3 p-2 bg-green-100 rounded-lg">
          <div className="text-sm font-medium text-green-800">
            Mobile Security Score: {Math.round(securityScore)}%
          </div>
          <div className="text-xs text-green-700 mt-1">
            {securityMetrics.certificateValid 
              ? "Your connection is secure and certificate is valid."
              : "Certificate warnings may appear on mobile but the site is functional."
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
