import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  Award,
  FileText,
  Users,
  Clock,
  CheckCircle,
  ExternalLink,
  Download,
  Globe,
  AlertTriangle
} from 'lucide-react';
import TrustBadges from '@/components/security/TrustBadges';
import ComplianceBadges from '@/components/security/ComplianceBadges';
import SSLBadge from '@/components/security/SSLBadge';
import { MasterSEO } from '@/components/seo/MasterSEO';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted using AES-256 encryption both in transit and at rest',
      details: [
        'TLS 1.3 for data transmission',
        'AES-256 encryption for stored data',
        'Perfect Forward Secrecy (PFS)',
        'Regular encryption key rotation'
      ]
    },
    {
      icon: Database,
      title: 'Secure Data Access',
      description: 'Authorized connections only to verified law enforcement and insurance databases',
      details: [
        'API authentication with rotating keys',
        'Database access logging and monitoring',
        'Rate limiting and abuse prevention',
        'Authorized personnel access controls'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'Your personal information and search queries are protected and never shared',
      details: [
        'No personal data retention beyond legal requirements',
        'Anonymous verification processing',
        'GDPR and CCPA compliant data handling',
        'Right to deletion and data portability'
      ]
    },
    {
      icon: Users,
      title: 'Access Controls',
      description: 'Multi-layered access controls protect sensitive systems and data',
      details: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Regular access reviews and audits',
        'Principle of least privilege'
      ]
    }
  ];

  const auditReports = [
    {
      title: 'SOC 2 Type II Audit Report',
      description: 'Independent audit of security, availability, and confidentiality controls',
      date: '2024-08-15',
      type: 'Compliance Report',
      fileSize: '2.4 MB',
      downloadUrl: '/documents/soc2-audit-report-2024.pdf'
    },
    {
      title: 'ISO 27001 Certificate',
      description: 'Information Security Management System certification',
      date: '2024-06-01',
      type: 'Certification',
      fileSize: '1.2 MB',
      downloadUrl: '/documents/iso27001-certificate-2024.pdf'
    },
    {
      title: 'Penetration Test Report',
      description: 'Third-party security assessment and vulnerability testing',
      date: '2024-09-10',
      type: 'Security Assessment',
      fileSize: '3.1 MB',
      downloadUrl: '/documents/pentest-report-2024.pdf'
    }
  ];

  const incidentHistory = [
    {
      date: '2024-01-01',
      type: 'System Maintenance',
      description: 'Planned security updates and system hardening',
      impact: 'No data breach or service disruption',
      status: 'Completed'
    },
    {
      date: '2023-12-15',
      type: 'Security Enhancement',
      description: 'Implementation of additional DDoS protection',
      impact: 'Improved service reliability',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MasterSEO
        title="Security & Privacy - SafeOrStolen"
        description="Learn about SafeOrStolen's enterprise-grade security measures, compliance certifications, and privacy protection. Your data is secured with bank-level encryption."
        keywords="security, privacy, ssl encryption, gdpr compliance, soc 2, data protection"
        structuredData={{
          "@type": "WebPage",
          "name": "Security & Privacy",
          "description": "Security measures and privacy protections at SafeOrStolen",
          "url": "https://safeorstolen.com/security"
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Security & Privacy
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your trust is our foundation. We implement multiple layers of security to protect your data 
              and ensure accurate, reliable verification results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                View Security Documentation
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Compliance Reports
              </Button>
            </div>

            {/* Quick Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Lock, text: '256-bit SSL', color: 'text-green-600' },
                { icon: Award, text: 'SOC 2 Certified', color: 'text-blue-600' },
                { icon: Shield, text: 'GDPR Ready', color: 'text-purple-600' },
                { icon: Database, text: '25+ Databases', color: 'text-orange-600' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center justify-center gap-2 p-3 bg-card rounded-lg border">
                    <Icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* SSL Certificate Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">SSL Certificate & Encryption</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your connection to SafeOrStolen is secured with industry-standard encryption
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <SSLBadge variant="detailed" showExpiry={true} />
          </div>
        </section>

        {/* Security Features */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple layers of protection safeguard your data throughout the verification process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Compliance Certifications */}
        <section>
          <ComplianceBadges variant="detailed" showDocuments={true} />
        </section>

        {/* Trust Badges */}
        <section>
          <TrustBadges variant="full" placement="results" />
        </section>

        {/* Audit Reports & Documentation */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Audit Reports & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Independent third-party audits verify our security controls and compliance measures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {auditReports.map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{report.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                    <span>{report.fileSize}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(report.downloadUrl, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Incident History */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Incident Transparency</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain complete transparency about our security posture and any incidents
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Zero Security Breaches
              </CardTitle>
              <p className="text-muted-foreground">
                SafeOrStolen has maintained a perfect security record with no data breaches or unauthorized access incidents.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Recent Security Activities:</h4>
                {incidentHistory.map((incident, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{incident.type}</span>
                        <Badge variant="outline" className="text-xs">
                          {incident.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {incident.description}
                      </p>
                      <p className="text-xs text-green-700">{incident.impact}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(incident.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Security Team */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Security Questions or Concerns?</h3>
              <p className="text-muted-foreground mb-6">
                If you have security questions, want to report a vulnerability, or need security documentation 
                for your organization, our security team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Contact Security Team
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Report Vulnerability
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                security@safeorstolen.com • PGP Key Available
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default SecurityPage;