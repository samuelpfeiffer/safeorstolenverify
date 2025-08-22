import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CertifiedSafeBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'premium';
}

export const CertifiedSafeBadge: React.FC<CertifiedSafeBadgeProps> = ({ 
  className, 
  size = 'md',
  variant = 'success'
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5', 
    lg: 'text-base px-4 py-2'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const variantClasses = {
    default: 'bg-green-100 text-green-800 border-green-200',
    success: 'bg-green-500 text-white border-green-600',
    premium: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0'
  };

  return (
    <Badge 
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Shield className={iconSizes[size]} />
      <span>CERTIFIED SAFE</span>
      <CheckCircle className={iconSizes[size]} />
    </Badge>
  );
};