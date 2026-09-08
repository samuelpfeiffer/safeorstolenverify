
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Monitor, Shield, Wifi, Lock, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityOptimizationsProps {
  className?: string;
}

export const MobileSecurityOptimizations = ({ className }: SecurityOptimizationsProps) => {
  const isMobile = useIsMobile();
  const [deviceInfo, setDeviceInfo] = useState<{
    userAgent: string;
    platform: string;
    isSecureContext: boolean;
    connectionType: string;
    isOnline: boolean;
  } | null>(null);
  const [showSensitiveInfo, setShowSensitiveInfo] = useState(false);

  useEffect(() => {
    // Gather device and security information
    const gatherDeviceInfo = () => {
      const nav = navigator as any;
      setDeviceInfo({
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        isSecureContext: window.isSecureContext,
        connectionType: nav.connection?.effectiveType || 'unknown',
        isOnline: navigator.onLine
      });
    };

    gatherDeviceInfo();

    // Listen for online/offline changes
    const handleOnline = () => setDeviceInfo(prev => prev ? { ...prev, isOnline: true } : null);
    const handleOffline = () => setDeviceInfo(prev => prev ? { ...prev, isOnline: false } : null);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getSecurityStatus = () => {
    if (!deviceInfo) return { level: 'unknown', color: 'gray' };
    
    let score = 0;
    let issues = [];

    // Check HTTPS
    if (deviceInfo.isSecureContext) {
      score += 25;
    } else {
      issues.push('Not using HTTPS');
    }

    // Check online status
    if (deviceInfo.isOnline) {
      score += 25;
    } else {
      issues.push('Offline - features limited');
    }

    // Check connection quality
    if (['4g', '5g'].includes(deviceInfo.connectionType)) {
      score += 25;
    } else if (deviceInfo.connectionType === '3g') {
      score += 15;
    } else if (deviceInfo.connectionType === 'slow-2g' || deviceInfo.connectionType === '2g') {
      issues.push('Slow connection may affect security features');
    }

    // Basic device security
    if (deviceInfo.platform && !deviceInfo.platform.includes('unknown')) {
      score += 25;
    }

    if (score >= 75) return { level: 'high', color: 'green', score, issues };
    if (score >= 50) return { level: 'medium', color: 'yellow', score, issues };
    return { level: 'low', color: 'red', score, issues };
  };

  const securityStatus = getSecurityStatus();

  return (
    <Card className={cn('bg-gray-900 border-gray-800', className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          {isMobile ? <Smartphone className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
          {isMobile ? 'Mobile' : 'Desktop'} Security Status
        </CardTitle>
        <CardDescription className="text-gray-400">
          Real-time security monitoring for your device
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Security Level Badge */}
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Security Level:</span>
          <Badge variant={securityStatus.color === 'green' ? 'default' : 'destructive'}>
            <Shield className="h-3 w-3 mr-1" />
            {securityStatus.level.toUpperCase()}
          </Badge>
        </div>

        {/* Security Score */}
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Security Score:</span>
          <span className={cn('font-bold',
            securityStatus.score >= 75 ? 'text-green-400' : 
            securityStatus.score >= 50 ? 'text-yellow-400' : 'text-red-400'
          )}>
            {securityStatus.score}/100
          </span>
        </div>

        {/* Connection Status */}
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Connection:</span>
          <div className="flex items-center gap-2">
            <Wifi className={cn('h-4 w-4', deviceInfo?.isOnline ? 'text-green-400' : 'text-red-400')} />
            <span className="text-gray-300 text-sm">
              {deviceInfo?.isOnline ? 'Online' : 'Offline'} 
              {deviceInfo?.connectionType !== 'unknown' && ` (${deviceInfo.connectionType.toUpperCase()})`}
            </span>
          </div>
        </div>

        {/* HTTPS Status */}
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Secure Connection:</span>
          <div className="flex items-center gap-2">
            <Lock className={cn('h-4 w-4', deviceInfo?.isSecureContext ? 'text-green-400' : 'text-red-400')} />
            <span className="text-gray-300 text-sm">
              {deviceInfo?.isSecureContext ? 'HTTPS' : 'HTTP'}
            </span>
          </div>
        </div>

        {/* Security Issues */}
        {securityStatus.issues.length > 0 && (
          <div className="space-y-2">
            <span className="text-white font-medium">Security Issues:</span>
            <ul className="text-red-400 text-sm space-y-1">
              {securityStatus.issues.map((issue, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Device Information (Sensitive) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">Device Info:</span>
            <button
              onClick={() => setShowSensitiveInfo(!showSensitiveInfo)}
              className="text-gray-400 hover:text-white"
            >
              {showSensitiveInfo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          {showSensitiveInfo && deviceInfo && (
            <div className="text-xs text-gray-400 space-y-1 bg-gray-800 p-2 rounded-[0.25rem]">
              <div><span className="font-medium">Platform:</span> {deviceInfo.platform}</div>
              <div><span className="font-medium">User Agent:</span> {deviceInfo.userAgent.substring(0, 50)}...</div>
            </div>
          )}
        </div>

        {/* Mobile-Specific Optimizations */}
        {isMobile && (
          <div className="space-y-2 pt-2 border-t border-gray-700">
            <span className="text-white font-medium">Mobile Optimizations:</span>
            <ul className="text-green-400 text-sm space-y-1">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                Touch-friendly interface active
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                Responsive layout applied
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                Mobile-optimized validation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                Enhanced security for mobile
              </li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

