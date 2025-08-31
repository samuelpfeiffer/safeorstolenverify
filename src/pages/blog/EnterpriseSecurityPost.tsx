import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Server, Globe, Award, AlertTriangle, CheckCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnterpriseSecurityPost = () => {
  const securityFeatures = [
    {
      title: "Military-Grade Encryption",
      icon: Lock,
      description: "AES-256 encryption protects all data in transit and at rest",
      details: [
        "End-to-end encryption for all communications",
        "Advanced key management systems",
        "Perfect Forward Secrecy implementation",
        "Hardware security module (HSM) protection"
      ],
      level: "Critical"
    },
    {
      title: "Zero-Knowledge Architecture",
      icon: Eye,
      description: "We never see or store your search queries or personal data",
      details: [
        "Client-side data processing",
        "Anonymous verification requests",
        "No user tracking or profiling",
        "Automatic data purging protocols"
      ],
      level: "Essential"
    },
    {
      title: "Infrastructure Security",
      icon: Server,
      description: "Enterprise-grade infrastructure with advanced threat protection",
      details: [
        "Multi-region redundancy",
        "DDoS protection and mitigation",
        "Intrusion detection systems",
        "24/7 security monitoring"
      ],
      level: "Critical"
    },
    {
      title: "Compliance & Certifications",
      icon: Award,
      description: "Full compliance with international security and privacy standards",
      details: [
        "SOC 2 Type II certified",
        "ISO 27001 compliance",
        "GDPR and CCPA compliant",
        "Regular third-party security audits"
      ],
      level: "Required"
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Comprehensive security, availability, and confidentiality controls",
      icon: Shield,
      verified: true
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      icon: Globe,
      verified: true
    },
    {
      name: "GDPR Compliant",
      description: "European data protection and privacy regulation compliance",
      icon: Lock,
      verified: true
    },
    {
      name: "CCPA Compliant", 
      description: "California Consumer Privacy Act compliance",
      icon: Eye,
      verified: true
    }
  ];

  const threatProtection = [
    {
      threat: "Data Breaches",
      protection: "Multi-layer encryption and access controls",
      status: "Protected"
    },
    {
      threat: "Man-in-the-Middle Attacks",
      protection: "Certificate pinning and secure protocols",
      status: "Protected"
    },
    {
      threat: "DDoS Attacks",
      protection: "Advanced traffic filtering and rate limiting",
      status: "Protected"
    },
    {
      threat: "Injection Attacks",
      protection: "Input validation and sanitization",
      status: "Protected"
    }
  ];

  return (
    <>
      <PageSEO
        title="Enterprise Security & Privacy Protection | SafeOrStolen Security Framework"
        description="Learn about SafeOrStolen's comprehensive security framework. Military-grade encryption, zero-knowledge architecture, SOC 2 compliance, and enterprise-level protection."
        keywords="enterprise security, military grade encryption, zero knowledge privacy, SOC 2 compliance, data protection, cybersecurity framework"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-red-500/10 text-red-500">
                <Shield className="mr-2 h-4 w-4" />
                Enterprise Security
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Uncompromising Security
                </span><br />
                <span className="text-foreground">& Privacy Protection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                SafeOrStolen implements military-grade security measures and enterprise-level compliance 
                to protect your privacy and data. Learn about our comprehensive security framework 
                that keeps your verification activities completely private and secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                    <Shield className="mr-2 h-5 w-5" />
                    Experience Secure Verification
                  </Button>
                </Link>
                <Link to="/privacy">
                  <Button size="lg" variant="outline">
                    Read Privacy Policy
                  </Button>
                </Link>
              </div>
            </div>

            {/* Security Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div className="font-bold text-green-500">100%</div>
                <div className="text-sm text-muted-foreground">Encrypted Traffic</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-blue-500" />
                </div>
                <div className="font-bold text-blue-500">0</div>
                <div className="text-sm text-muted-foreground">Data Stored</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-500" />
                </div>
                <div className="font-bold text-purple-500">4</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Server className="h-8 w-8 text-orange-500" />
                </div>
                <div className="font-bold text-orange-500">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>

            {/* Security Features */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Security Framework
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every aspect of our platform is designed with security-first principles, 
                implementing the most advanced protection measures available.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-red-500/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-red-500/10">
                          <feature.icon className="h-8 w-8 text-red-500" />
                        </div>
                        <CardTitle className="text-2xl">{feature.title}</CardTitle>
                      </div>
                      <Badge variant={feature.level === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                        {feature.level}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Compliance Standards */}
            <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-6">Industry-Leading Compliance</h3>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    We maintain the highest industry standards through rigorous compliance with 
                    international security and privacy regulations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-green-200 dark:border-green-800">
                        <standard.icon className="h-10 w-10 text-green-600" />
                      </div>
                      <h4 className="font-bold mb-2 flex items-center justify-center gap-2">
                        {standard.name}
                        {standard.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </h4>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Threat Protection Matrix */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">Advanced Threat Protection</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our security systems actively defend against the most sophisticated cyber threats
              </p>
            </div>

            <Card className="mb-16">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {threatProtection.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <AlertTriangle className="h-6 w-6 text-yellow-500" />
                        <div>
                          <div className="font-semibold">{item.threat}</div>
                          <div className="text-sm text-muted-foreground">{item.protection}</div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Promise */}
            <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Our Security Promise</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                    We pledge to maintain the highest security standards, undergo regular third-party 
                    audits, and continuously improve our security measures. Your privacy and data 
                    protection will always be our top priority.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-2">Zero Breaches</div>
                      <div className="text-sm text-muted-foreground">Since launch</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-2">100% Uptime</div>
                      <div className="text-sm text-muted-foreground">Security monitoring</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-2">Annual</div>
                      <div className="text-sm text-muted-foreground">Security audits</div>
                    </div>
                  </div>
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      <Shield className="mr-2 h-5 w-5" />
                      Verify Securely Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseSecurityPost;