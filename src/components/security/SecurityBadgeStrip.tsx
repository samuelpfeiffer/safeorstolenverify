import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  Award,
  Database,
  Globe
} from 'lucide-react';

interface SecurityBadgeStripProps {
  placement?: 'form' | 'footer' | 'header';
  className?: string;
}

const SecurityBadgeStrip: React.FC<SecurityBadgeStripProps> = ({ 
  placement = 'footer',
  className = '' 
}) => {
  const badges = [
    {
      icon: Lock,
      text: '256-bit SSL',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Shield,
      text: 'GDPR Ready',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Award,
      text: 'SOC 2 Compliant',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      icon: Database,
      text: '25+ Databases',
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      icon: CheckCircle,
      text: '99.9% Uptime',
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  if (placement === 'form') {
    return (
      <div className={`flex items-center justify-center gap-2 py-2 ${className}`}>
        <Lock className="h-3 w-3 text-green-600" />
        <span className="text-xs text-muted-foreground">
          Secured with 256-bit encryption
        </span>
        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
        <Shield className="h-3 w-3 text-blue-600" />
        <span className="text-xs text-muted-foreground">
          Privacy protected
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <Badge
            key={index}
            variant="outline"
            className={`${badge.color} flex items-center gap-1 text-xs px-2 py-1`}
          >
            <Icon className="h-3 w-3" />
            {badge.text}
          </Badge>
        );
      })}
    </div>
  );
};

export default SecurityBadgeStrip;