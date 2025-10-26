import React from 'react';
import { Shield, CheckCircle, Lock, Award, Verified } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface VerifiedSiteBadgeProps {
  variant?: 'compact' | 'detailed' | 'floating';
  className?: string;
}

export const VerifiedSiteBadge: React.FC<VerifiedSiteBadgeProps> = ({ 
  variant = 'compact',
  className 
}) => {
  if (variant === 'compact') {
    return (
      <div className={cn("inline-flex items-center gap-2", className)}>
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <Shield className="h-3 w-3 mr-1" />
          Verified Secure Site
        </Badge>
        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
          <Lock className="h-3 w-3 mr-1" />
          SSL Encrypted
        </Badge>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={cn(
        "fixed bottom-4 right-4 z-50 animate-slideUp",
        className
      )}>
        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-2xl p-3">
          <div className="flex items-center gap-2 text-white">
            <div className="relative">
              <Shield className="h-6 w-6" />
              <CheckCircle className="h-3 w-3 absolute -top-1 -right-1 fill-white" />
            </div>
            <div className="text-sm">
              <div className="font-bold">Verified Site</div>
              <div className="text-xs opacity-90">256-bit Encryption</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <Card className={cn(
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800 p-6",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="relative">
            <Shield className="h-12 w-12 text-green-600 dark:text-green-400" />
            <CheckCircle className="h-5 w-5 absolute -bottom-1 -right-1 text-green-600 dark:text-green-400 fill-green-100 dark:fill-green-900" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
            Verified & Secure Website
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300 mb-4">
            This site is protected with enterprise-grade security and verified by leading security organizations.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-800 dark:text-green-200">256-bit SSL/TLS</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-800 dark:text-green-200">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-800 dark:text-green-200">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Verified className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-800 dark:text-green-200">PCI DSS Level 1</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
