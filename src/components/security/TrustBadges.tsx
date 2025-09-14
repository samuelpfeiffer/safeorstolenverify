import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  Eye, 
  Database, 
  Award,
  ExternalLink,
  Info,
  Verified,
  CreditCard,
  Users,
  Globe
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  type: 'ssl' | 'privacy' | 'verification' | 'payment' | 'compliance' | 'database' | 'reviews';
  verificationUrl?: string;
  certificationLevel: 'basic' | 'standard' | 'premium';
  isActive: boolean;
  expiryDate?: string;
  tooltip: string;
}

interface TrustBadgesProps {
  variant?: 'compact' | 'full' | 'minimal';
  placement?: 'form' | 'footer' | 'checkout' | 'results';
  showLabels?: boolean;
  className?: string;
}

const trustBadges: TrustBadge[] = [
  {
    id: 'ssl-certificate',
    title: '256-bit SSL Encryption',
    description: 'All data transmissions are encrypted with bank-level security',
    icon: Lock,
    type: 'ssl',
    verificationUrl: 'https://www.ssllabs.com/ssltest/analyze.html?d=safeorstolen.com',
    certificationLevel: 'premium',
    isActive: true,
    expiryDate: '2024-12-31',
    tooltip: 'Your connection is secured with 256-bit SSL encryption, the same level used by banks'
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR Compliant',
    description: 'Fully compliant with European privacy regulations',
    icon: Shield,
    type: 'privacy',
    certificationLevel: 'standard',
    isActive: true,
    tooltip: 'We follow strict GDPR guidelines to protect your personal data and privacy rights'
  },
  {
    id: 'ccpa-compliance',
    title: 'CCPA Ready',
    description: 'California Consumer Privacy Act compliant',
    icon: Eye,
    type: 'privacy',
    certificationLevel: 'standard',
    isActive: true,
    tooltip: 'Your privacy rights under California law are fully protected and respected'
  },
  {
    id: 'soc2-compliant',
    title: 'SOC 2 Type II',
    description: 'Independently audited security controls',
    icon: Award,
    type: 'compliance',
    verificationUrl: '#',
    certificationLevel: 'premium',
    isActive: true,
    expiryDate: '2024-08-15',
    tooltip: 'Our security practices are independently verified by SOC 2 Type II audits'
  },
  {
    id: 'law-enforcement',
    title: 'Law Enforcement Verified',
    description: 'Connected to 25+ official police databases',
    icon: Database,
    type: 'database',
    certificationLevel: 'premium',
    isActive: true,
    tooltip: 'Our verification system is integrated with official law enforcement and insurance databases'
  },
  {
    id: 'payment-secure',
    title: 'Secure Payments',
    description: 'PCI DSS compliant payment processing',
    icon: CreditCard,
    type: 'payment',
    certificationLevel: 'premium',
    isActive: true,
    tooltip: 'All payments are processed through PCI DSS compliant secure payment gateways'
  },
  {
    id: 'verified-business',
    title: 'Verified Business',
    description: 'Registered and verified business entity',
    icon: Verified,
    type: 'verification',
    verificationUrl: '#',
    certificationLevel: 'standard',
    isActive: true,
    tooltip: 'SafeOrStolen is a verified, registered business entity with transparent operations'
  },
  {
    id: 'customer-reviews',
    title: '4.8/5 Customer Rating',
    description: 'Based on 2,500+ verified reviews',
    icon: Users,
    type: 'reviews',
    verificationUrl: '#',
    certificationLevel: 'standard',
    isActive: true,
    tooltip: 'Independently verified customer reviews with 4.8/5 average rating'
  }
];

const TrustBadges: React.FC<TrustBadgesProps> = ({ 
  variant = 'full', 
  placement = 'footer',
  showLabels = true,
  className = ''
}) => {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const getDisplayBadges = () => {
    const activeBadges = trustBadges.filter(badge => badge.isActive);
    
    switch (placement) {
      case 'form':
        return activeBadges.filter(badge => 
          ['ssl', 'privacy', 'database'].includes(badge.type)
        ).slice(0, 3);
      case 'checkout':
        return activeBadges.filter(badge => 
          ['ssl', 'payment', 'compliance'].includes(badge.type)
        );
      case 'results':
        return activeBadges.filter(badge => 
          ['database', 'compliance', 'verification'].includes(badge.type)
        ).slice(0, 4);
      default:
        return variant === 'minimal' ? activeBadges.slice(0, 4) : activeBadges;
    }
  };

  const getBadgeColor = (type: string, level: string) => {
    const colors = {
      ssl: 'bg-green-100 text-green-800 border-green-200',
      privacy: 'bg-blue-100 text-blue-800 border-blue-200',
      verification: 'bg-purple-100 text-purple-800 border-purple-200',
      payment: 'bg-orange-100 text-orange-800 border-orange-200',
      compliance: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      database: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      reviews: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    
    return colors[type as keyof typeof colors] || colors.verification;
  };

  const displayBadges = getDisplayBadges();

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {displayBadges.slice(0, 3).map((badge) => {
          const Icon = badge.icon;
          return (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 px-2 ${getBadgeColor(badge.type, badge.certificationLevel)}`}
                    onClick={() => badge.verificationUrl && window.open(badge.verificationUrl, '_blank')}
                  >
                    <Icon className="h-3 w-3" />
                    {showLabels && (
                      <span className="ml-1 text-xs font-medium">
                        {badge.title.split(' ')[0]}
                      </span>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{badge.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className}`}>
        {displayBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card 
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      hoveredBadge === badge.id ? 'scale-105' : ''
                    }`}
                    onMouseEnter={() => setHoveredBadge(badge.id)}
                    onMouseLeave={() => setHoveredBadge(null)}
                    onClick={() => badge.verificationUrl && window.open(badge.verificationUrl, '_blank')}
                  >
                    <CardContent className="p-3 text-center">
                      <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${getBadgeColor(badge.type, badge.certificationLevel)}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      {showLabels && (
                        <p className="text-xs font-medium leading-tight">
                          {badge.title}
                        </p>
                      )}
                      {badge.verificationUrl && (
                        <ExternalLink className="h-3 w-3 mx-auto mt-1 opacity-60" />
                      )}
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{badge.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold flex items-center justify-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-primary" />
          Security & Trust Certifications
        </h3>
        <p className="text-sm text-muted-foreground">
          Industry-standard security measures protecting your data and privacy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <Card 
              key={badge.id}
              className={`transition-all duration-200 hover:shadow-lg cursor-pointer ${
                hoveredBadge === badge.id ? 'border-primary/50 shadow-md' : ''
              }`}
              onMouseEnter={() => setHoveredBadge(badge.id)}
              onMouseLeave={() => setHoveredBadge(null)}
              onClick={() => badge.verificationUrl && window.open(badge.verificationUrl, '_blank')}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${getBadgeColor(badge.type, badge.certificationLevel)}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm leading-tight">
                        {badge.title}
                      </h4>
                      {badge.certificationLevel === 'premium' && (
                        <Badge variant="secondary" className="text-xs px-1 py-0">
                          Premium
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground leading-tight mb-2">
                      {badge.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      {badge.expiryDate && (
                        <span className="text-xs text-muted-foreground">
                          Valid until {new Date(badge.expiryDate).toLocaleDateString()}
                        </span>
                      )}
                      
                      {badge.verificationUrl && (
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ExternalLink className="h-3 w-3" />
                          <span className="ml-1 text-xs">Verify</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Security Info */}
      <div className="bg-muted/30 rounded-lg p-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Info className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Learn More About Our Security</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          We maintain the highest security standards to protect your data and ensure accurate verification results.
        </p>
        <Button variant="outline" size="sm" className="text-xs">
          View Security Details
          <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default TrustBadges;