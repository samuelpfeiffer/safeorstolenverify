import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Lock, 
  Award, 
  CheckCircle,
  Database,
  ExternalLink,
  Users,
  Clock
} from 'lucide-react';
import SecurityBadgeStrip from './SecurityBadgeStrip';
import SSLBadge from './SSLBadge';

interface SecurityFooterProps {
  variant?: 'full' | 'compact' | 'minimal';
  showStats?: boolean;
  className?: string;
}

const SecurityFooter: React.FC<SecurityFooterProps> = ({ 
  variant = 'full',
  showStats = true,
  className = '' 
}) => {
  const securityStats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Protected Users',
      description: 'Users trust our security'
    },
    {
      icon: Database,
      value: '25+',
      label: 'Secure Databases',
      description: 'Official law enforcement connections'
    },
    {
      icon: Clock,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Reliable service availability'
    },
    {
      icon: Shield,
      value: '0',
      label: 'Security Breaches',
      description: 'Proven security track record'
    }
  ];

  if (variant === 'minimal') {
    return (
      <div className={`py-4 border-t bg-muted/30 ${className}`}>
        <div className="container mx-auto px-6">
          <SecurityBadgeStrip placement="footer" />
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`py-6 border-t bg-gradient-to-r from-background to-muted/30 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-sm mb-1 flex items-center justify-center md:justify-start gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Your Data is Protected
              </h3>
              <p className="text-xs text-muted-foreground">
                Bank-level security with industry-standard compliance
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <SSLBadge variant="minimal" />
              <SecurityBadgeStrip placement="footer" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-12 border-t bg-gradient-to-br from-background via-muted/20 to-background ${className}`}>
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Enterprise-Grade Security
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy and security are our top priorities. We employ multiple layers of protection 
              to ensure your data remains safe and your verifications are accurate.
            </p>
          </div>

          {/* Security Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {securityStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm font-medium mb-1">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* SSL Encryption */}
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Lock className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">256-bit SSL Encryption</h3>
                    <p className="text-sm text-green-700">Bank-level data protection</p>
                  </div>
                </div>
                <p className="text-sm text-green-800 mb-4">
                  All data transmitted between your browser and our servers is encrypted using the 
                  same security standards used by financial institutions.
                </p>
                <SSLBadge variant="minimal" />
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">Global Compliance</h3>
                    <p className="text-sm text-blue-700">GDPR, CCPA & SOC 2 certified</p>
                  </div>
                </div>
                <p className="text-sm text-blue-800 mb-4">
                  We maintain strict compliance with international privacy regulations and 
                  undergo regular security audits by independent third parties.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs">
                    GDPR Ready
                  </Badge>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs">
                    SOC 2 Type II
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Database Security */}
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Database className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Secure Database Access</h3>
                    <p className="text-sm text-purple-700">Official law enforcement APIs</p>
                  </div>
                </div>
                <p className="text-sm text-purple-800 mb-4">
                  Our verification system connects only to official, authorized databases from 
                  police departments, insurance companies, and manufacturers.
                </p>
                <Badge variant="outline" className="bg-purple-100 text-purple-800 text-xs">
                  25+ Verified Sources
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Recommended by law enforcement agencies</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Trusted by 500,000+ users worldwide</span>
            </div>
            
            <SecurityBadgeStrip />
            
            <div className="pt-4">
              <Button variant="outline" size="sm" className="text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                View Complete Security Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFooter;