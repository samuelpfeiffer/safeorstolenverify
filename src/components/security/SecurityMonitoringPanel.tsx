import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { monitorSessionActivity, triggerSecurityAlert } from '@/utils/securityMonitoring';
import { useEnhancedSecurity } from '@/hooks/useEnhancedSecurity';
import { Shield, AlertTriangle, CheckCircle, Clock, Eye } from 'lucide-react';

export const SecurityMonitoringPanel: React.FC = () => {
  const { toast } = useToast();
  const { securityStatus, isLoading, performSecurityCheck, logSecurityEvent } = useEnhancedSecurity();
  const sessionMonitor = monitorSessionActivity;
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  useEffect(() => {
    // Update session activity on component mount
    sessionMonitor.updateActivity();
    
    // Set up periodic security checks
    const checkInterval = setInterval(async () => {
      await performSecurityCheck();
      setLastCheck(new Date());
    }, 5 * 60 * 1000); // Every 5 minutes

    return () => clearInterval(checkInterval);
  }, [performSecurityCheck, sessionMonitor]);

  const handleRunSecurityCheck = async () => {
    try {
      await performSecurityCheck();
      setLastCheck(new Date());
      toast({
        title: "Security check completed",
        description: "All security validations have been performed",
      });
    } catch (error) {
      console.error('Security check failed:', error);
      toast({
        title: "Security check failed",
        description: "Unable to complete security validation",
        variant: "destructive"
      });
    }
  };

  const handleTestAlert = async () => {
    try {
      await triggerSecurityAlert({
        type: 'suspicious_activity',
        severity: 'low',
        message: 'Test security alert from monitoring panel',
        metadata: {
          source: 'SecurityMonitoringPanel',
          timestamp: new Date().toISOString()
        }
      });
      
      toast({
        title: "Test alert sent",
        description: "Security alert system is functioning properly",
      });
    } catch (error) {
      console.error('Test alert failed:', error);
      toast({
        title: "Test alert failed",
        description: "Unable to send test security alert",
        variant: "destructive"
      });
    }
  };

  const getSecurityStatusColor = () => {
    if (!securityStatus.isSecure || !securityStatus.sessionValid) return 'destructive';
    if (securityStatus.securityWarnings.length > 0) return 'secondary';
    return 'default';
  };

  const getSecurityStatusIcon = () => {
    if (!securityStatus.isSecure || !securityStatus.sessionValid) return AlertTriangle;
    if (securityStatus.securityWarnings.length > 0) return Eye;
    return CheckCircle;
  };

  const StatusIcon = getSecurityStatusIcon();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Loading security status...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Status
          </CardTitle>
          <CardDescription>
            Real-time security monitoring and validation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StatusIcon className="h-5 w-5" />
              <span className="font-medium">Overall Security</span>
            </div>
            <Badge variant={getSecurityStatusColor()}>
              {securityStatus.isSecure && securityStatus.sessionValid 
                ? securityStatus.securityWarnings.length > 0 
                  ? 'Warning' 
                  : 'Secure'
                : 'At Risk'
              }
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Secure Context</span>
                <Badge variant={securityStatus.isSecure ? 'default' : 'destructive'}>
                  {securityStatus.isSecure ? 'Yes' : 'No'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Session Valid</span>
                <Badge variant={securityStatus.sessionValid ? 'default' : 'destructive'}>
                  {securityStatus.sessionValid ? 'Yes' : 'No'}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Admin Role</span>
                <Badge variant={securityStatus.hasAdminRole ? 'default' : 'secondary'}>
                  {securityStatus.hasAdminRole ? 'Yes' : 'No'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Warnings</span>
                <Badge variant={securityStatus.securityWarnings.length > 0 ? 'secondary' : 'default'}>
                  {securityStatus.securityWarnings.length}
                </Badge>
              </div>
            </div>
          </div>

          {securityStatus.securityWarnings.length > 0 && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Security warnings detected:
                <ul className="mt-2 list-disc list-inside">
                  {securityStatus.securityWarnings.map((warning, index) => (
                    <li key={index} className="text-sm">{warning}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              Last check: {lastCheck ? lastCheck.toLocaleTimeString() : 'Never'}
            </span>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleRunSecurityCheck} variant="outline" size="sm">
              Run Security Check
            </Button>
            <Button onClick={handleTestAlert} variant="outline" size="sm">
              Test Alert System
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};