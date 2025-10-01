import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Lock, Eye, Server, FileCheck, Bell } from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-Bit Encryption",
      description: "All data transmitted to and from Safe or Stolen is encrypted using industry-standard 256-bit SSL/TLS encryption—the same security level used by banks."
    },
    {
      icon: Shield,
      title: "GDPR & CCPA Compliant",
      description: "We comply with international data protection regulations including GDPR (Europe) and CCPA (California). Your data rights are protected."
    },
    {
      icon: Eye,
      title: "Zero Data Retention",
      description: "We don't store your verification searches indefinitely. Search history is encrypted and can be deleted by you at any time."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our servers are hosted in SOC 2 Type II certified data centers with 24/7 monitoring, redundancy, and physical security."
    },
    {
      icon: FileCheck,
      title: "Regular Security Audits",
      description: "Independent third-party security audits conducted quarterly to identify and fix vulnerabilities before they become issues."
    },
    {
      icon: Bell,
      title: "Breach Notification",
      description: "In the unlikely event of a security incident, we'll notify affected users within 72 hours as required by law."
    }
  ];

  const dataHandling = [
    {
      category: "What We Collect",
      items: [
        "Email address (for account access)",
        "Search queries (IMEI, VIN, serial numbers)",
        "Payment information (processed securely by Stripe)",
        "Usage analytics (anonymized)"
      ]
    },
    {
      category: "What We DON'T Collect",
      items: [
        "Your personal identifying information",
        "Browsing history outside our site",
        "Social media data",
        "Contacts or phone books"
      ]
    },
    {
      category: "How We Use Your Data",
      items: [
        "Provide verification services",
        "Improve database accuracy",
        "Send service-related notifications",
        "Prevent fraud and abuse"
      ]
    },
    {
      category: "Who We Share With",
      items: [
        "No one - we never sell your data",
        "Law enforcement (only with valid warrants)",
        "Service providers (under strict NDAs)",
        "You control what data we keep"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Security & Privacy at Safe or Stolen",
    "description": "Learn how Safe or Stolen protects your data with bank-level encryption, GDPR compliance, and zero data retention policies",
    "about": {
      "@type": "Thing",
      "name": "Data Security",
      "description": "256-bit encryption, GDPR compliant, regular security audits"
    }
  };

  return (
    <>
      <PageSEO
        title="Security & Privacy: How We Protect Your Data | Safe or Stolen"
        description="Bank-level 256-bit encryption, GDPR compliant, zero data retention. Learn how Safe or Stolen keeps your verification searches private and secure."
        keywords="data security, privacy policy, GDPR compliant, encrypted verification, secure IMEI check, data protection"
        canonical="/security"
        structuredData={[structuredData]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-20 w-20 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl font-bold mb-6">
              Your Security is Our Priority
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use bank-level encryption and follow strict data protection standards 
              to keep your searches private and secure.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">How We Protect You</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Data Handling Policy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {dataHandling.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{section.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">Compliance & Certifications</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold mb-4">Privacy Regulations</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <strong>GDPR Compliant</strong>
                            <p className="text-muted-foreground">Full compliance with EU data protection laws</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <strong>CCPA Compliant</strong>
                            <p className="text-muted-foreground">California Consumer Privacy Act adherence</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <strong>PIPEDA Compliant</strong>
                            <p className="text-muted-foreground">Canadian privacy law compliance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">Security Standards</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Lock className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <strong>PCI DSS Level 1</strong>
                            <p className="text-muted-foreground">Payment card industry data security standard</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Lock className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <strong>SOC 2 Type II</strong>
                            <p className="text-muted-foreground">Independent security audit certification</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Lock className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <strong>ISO 27001</strong>
                            <p className="text-muted-foreground">Information security management system</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have Security Questions?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Our security team is here to answer any concerns about data protection and privacy.
            </p>
            <p className="text-sm">
              Email: <a href="mailto:security@safeorstolen.com" className="text-primary hover:underline font-semibold">security@safeorstolen.com</a>
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Response within 24 hours • GPG key available upon request
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SecurityPage;
