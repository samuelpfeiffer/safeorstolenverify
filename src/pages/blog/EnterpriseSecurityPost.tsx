import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Database, Eye, Users, CheckCircle } from 'lucide-react';

const EnterpriseSecurityPost = () => {
  const publishDate = "September 15, 2025";
  
  const securityFeatures = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security protocols protect against sophisticated cyber attacks"
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Every verification request is authenticated and encrypted end-to-end"
    },
    {
      icon: Database,
      title: "Encrypted Data Processing",
      description: "All sensitive data is processed using military-grade AES-256 encryption"
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 security monitoring with automated threat detection and response"
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "PCI DSS Level 1",
    "ISO 27001 Certified",
    "HIPAA Compliant",
    "FedRAMP Authorized"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enterprise Security Features for Stolen Goods Verification",
    "description": "Comprehensive guide to enterprise-level security features protecting businesses from stolen merchandise verification fraud.",
    "author": {
      "@type": "Person",
      "name": "SafeOrStolen Security Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen.com"
    },
    "datePublished": "2025-09-15",
    "dateModified": "2025-09-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://safeorstolen.com/blog/enterprise-security"
    }
  };

  return (
    <>
      <PageSEO
        title="Enterprise Security Features - SafeOrStolen Business Protection"
        description="Learn about SafeOrStolen's enterprise-grade security features protecting businesses from stolen merchandise verification fraud. SOC 2, GDPR, PCI DSS compliant."
        keywords="enterprise security, stolen goods verification, business protection, SOC 2 compliance, fraud prevention"
        canonical="/blog/enterprise-security"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">Enterprise Security</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Enterprise Security Features for Business Protection
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Discover how SafeOrStolen.com's enterprise-grade security infrastructure 
                protects your business from verification fraud and ensures compliance 
                with industry regulations.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published: {publishDate}</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>Enterprise Guide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Enterprise Security Architecture
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                ))}
              </div>

              {/* Detailed Security Content */}
              <div className="prose prose-lg max-w-none">
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Multi-Layered Security Framework</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      SafeOrStolen.com employs a comprehensive multi-layered security framework designed 
                      to protect enterprise clients from sophisticated threats targeting stolen goods 
                      verification systems.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">1. Network Security</h3>
                    <p>
                      Our infrastructure utilizes advanced firewalls, DDoS protection, and intrusion 
                      detection systems to prevent unauthorized access. All traffic is routed through 
                      secure channels with continuous monitoring for suspicious activity.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">2. Data Encryption</h3>
                    <p>
                      Every piece of sensitive information is encrypted both in transit and at rest using 
                      AES-256 encryption standards. This includes verification queries, user credentials, 
                      and all communication between systems.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">3. Access Control</h3>
                    <p>
                      Role-based access control (RBAC) ensures that only authorized personnel can access 
                      specific data and functions. Multi-factor authentication is required for all 
                      administrative access.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">4. Audit Logging</h3>
                    <p>
                      Comprehensive audit logs track all system activities, providing a complete chain 
                      of custody for verification requests. These logs are tamper-proof and stored 
                      securely for compliance purposes.
                    </p>
                  </div>
                </Card>

                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Compliance Standards</h2>
                  <p className="text-muted-foreground mb-6">
                    Our enterprise security framework meets and exceeds industry compliance standards:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {complianceStandards.map((standard, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="font-semibold text-foreground">{standard}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Enterprise Benefits</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <h3 className="text-xl font-semibold text-foreground">Risk Mitigation</h3>
                    <p>
                      Reduce the risk of purchasing stolen merchandise by up to 99.7% with our 
                      enterprise verification system. Protect your business from legal liability 
                      and financial losses.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">Regulatory Compliance</h3>
                    <p>
                      Meet industry regulations and compliance requirements with our certified 
                      security framework. Automated reporting helps maintain audit trails and 
                      documentation.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">Operational Efficiency</h3>
                    <p>
                      Streamline your procurement process with bulk verification capabilities, 
                      API integration, and real-time alerts for suspicious items.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground">Brand Protection</h3>
                    <p>
                      Protect your brand reputation by ensuring all inventory is legitimate. 
                      Our verification certificates provide proof of due diligence.
                    </p>
                  </div>
                </Card>

                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Implementation Support</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our enterprise security implementation includes dedicated support to ensure 
                      seamless integration with your existing systems:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dedicated security engineer for implementation planning</li>
                      <li>Custom API integration with your existing systems</li>
                      <li>Comprehensive staff training on security protocols</li>
                      <li>24/7 technical support and incident response</li>
                      <li>Regular security audits and compliance reporting</li>
                      <li>Ongoing system updates and vulnerability management</li>
                    </ul>
                    
                    <p className="pt-4">
                      Contact our enterprise team to schedule a security consultation and learn 
                      how SafeOrStolen.com can protect your business from stolen merchandise fraud.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterpriseSecurityPost;