import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Eye, 
  Award, 
  Globe,
  CheckCircle,
  ExternalLink,
  FileText,
  Lock
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ComplianceBadge {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  regulation: string;
  status: 'compliant' | 'certified' | 'audited';
  documentUrl?: string;
  verificationUrl?: string;
  lastUpdated: string;
  color: string;
}

interface ComplianceBadgesProps {
  variant?: 'grid' | 'strip' | 'detailed';
  showDocuments?: boolean;
  className?: string;
}

const complianceBadges: ComplianceBadge[] = [
  {
    id: 'gdpr',
    title: 'GDPR Compliant',
    description: 'Full compliance with European data protection regulations',
    icon: Shield,
    regulation: 'General Data Protection Regulation',
    status: 'compliant',
    documentUrl: '/documents/gdpr-compliance.pdf',
    lastUpdated: '2024-01-15',
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 'ccpa',
    title: 'CCPA Ready',
    description: 'California Consumer Privacy Act compliance',
    icon: Eye,
    regulation: 'California Consumer Privacy Act',
    status: 'compliant',
    documentUrl: '/documents/ccpa-compliance.pdf',
    lastUpdated: '2024-01-15',
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  {
    id: 'soc2',
    title: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    icon: Award,
    regulation: 'Service Organization Control 2',
    status: 'audited',
    verificationUrl: 'https://aicpa.org/soc2',
    documentUrl: '/documents/soc2-report.pdf',
    lastUpdated: '2024-08-15',
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  {
    id: 'iso27001',
    title: 'ISO 27001',
    description: 'International information security management',
    icon: Globe,
    regulation: 'Information Security Management Systems',
    status: 'certified',
    verificationUrl: 'https://iso.org/iso-27001',
    documentUrl: '/documents/iso27001-certificate.pdf',
    lastUpdated: '2024-06-01',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  },
  {
    id: 'pci-dss',
    title: 'PCI DSS Level 1',
    description: 'Payment card industry data security standard',
    icon: Lock,
    regulation: 'Payment Card Industry Data Security Standard',
    status: 'certified',
    verificationUrl: 'https://pcisecuritystandards.org/',
    lastUpdated: '2024-03-20',
    color: 'bg-orange-100 text-orange-800 border-orange-200'
  }
];

const ComplianceBadges: React.FC<ComplianceBadgesProps> = ({ 
  variant = 'grid',
  showDocuments = true,
  className = '' 
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'certified': return <Award className="h-3 w-3" />;
      case 'audited': return <CheckCircle className="h-3 w-3" />;
      default: return <Shield className="h-3 w-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'certified': return 'bg-green-100 text-green-800';
      case 'audited': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (variant === 'strip') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
        {complianceBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge 
                    variant="outline" 
                    className={`${badge.color} flex items-center gap-1 cursor-pointer hover:shadow-md transition-shadow`}
                    onClick={() => badge.verificationUrl && window.open(badge.verificationUrl, '_blank')}
                  >
                    <Icon className="h-3 w-3" />
                    {badge.title}
                    {badge.verificationUrl && <ExternalLink className="h-2 w-2 ml-1" />}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-medium">{badge.regulation}</p>
                    <p className="text-sm">{badge.description}</p>
                    <p className="text-xs opacity-75 mt-1">
                      Last updated: {new Date(badge.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Compliance Certifications
        </h3>
        <p className="text-sm text-muted-foreground">
          We maintain strict compliance with international privacy and security standards
        </p>
      </div>

      <div className={`grid ${variant === 'detailed' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
        {complianceBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <Card key={badge.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${badge.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-sm">{badge.title}</h4>
                      <Badge variant="secondary" className={`text-xs px-1 py-0 ${getStatusColor(badge.status)}`}>
                        {getStatusIcon(badge.status)}
                        <span className="ml-1">{badge.status}</span>
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3">
                      {badge.description}
                    </p>
                    
                    {variant === 'detailed' && (
                      <div className="mb-3">
                        <p className="text-xs font-medium text-muted-foreground mb-1">
                          Regulation:
                        </p>
                        <p className="text-xs">{badge.regulation}</p>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>Updated: {new Date(badge.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    
                    {showDocuments && (
                      <div className="flex gap-2">
                        {badge.documentUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 h-7 text-xs"
                            onClick={() => window.open(badge.documentUrl, '_blank')}
                          >
                            <FileText className="h-3 w-3 mr-1" />
                            View Certificate
                          </Button>
                        )}
                        
                        {badge.verificationUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 h-7 text-xs"
                            onClick={() => window.open(badge.verificationUrl, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Verify
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Privacy Policy Link */}
      <div className="text-center pt-4 border-t">
        <p className="text-xs text-muted-foreground mb-2">
          For complete details on how we protect your data and ensure compliance:
        </p>
        <Button variant="outline" size="sm" className="text-xs">
          <FileText className="h-3 w-3 mr-1" />
          View Privacy Policy & Security Documentation
          <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ComplianceBadges;