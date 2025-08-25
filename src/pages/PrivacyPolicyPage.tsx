import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/seo/SEOHead';
import { Shield, Lock, Eye, Database, Users, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal information you provide when creating an account",
        "Item verification data including serial numbers and device identifiers", 
        "Usage data and analytics to improve our services",
        "Communication preferences and support interactions"
      ]
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      icon: Eye,
      content: [
        "Provide verification services and maintain our database",
        "Improve our fraud detection algorithms",
        "Send important service updates and security notifications",
        "Comply with legal obligations and law enforcement requests"
      ]
    },
    {
      id: "data-protection",
      title: "Data Protection",
      icon: Shield,
      content: [
        "256-bit SSL encryption for all data transmission",
        "SOC 2 Type II compliant data centers",
        "Regular security audits and penetration testing",
        "Role-based access controls for all team members"
      ]
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      icon: Users,
      content: [
        "We do not sell your personal information to third parties",
        "Law enforcement access only with proper legal authorization",
        "Anonymous, aggregated data may be shared for research purposes",
        "Service providers under strict confidentiality agreements"
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: AlertTriangle,
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior (with consent)",
        "Security cookies to protect against fraud",
        "Preference cookies to remember your settings"
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: Lock,
      content: [
        "Access your personal data and verification history",
        "Request corrections to inaccurate information",
        "Delete your account and associated data",
        "Opt-out of non-essential communications"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Privacy Policy - Safe or Stolen"
        description="Learn how Safe or Stolen protects your privacy and handles your data. Comprehensive privacy policy with GDPR compliance."
        keywords="privacy policy, data protection, GDPR, privacy rights, data security"
        canonical="/privacy-policy"
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 border-sos-lime text-sos-lime">
                <Shield className="mr-2 h-4 w-4" />
                Privacy Protected
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                Your privacy is fundamental to our mission. We're committed to protecting your data while fighting the stolen goods crisis.
              </p>
              <p className="text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Safe or Stolen ("we," "our," or "us") is committed to protecting and respecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you use our verification services, website, and mobile applications. We understand the sensitive 
                  nature of our service and have implemented industry-leading security measures to protect your data 
                  while providing critical verification services to combat the stolen goods crisis.
                </p>
              </CardContent>
            </Card>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section) => (
                <Card key={section.id} id={section.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-sos-orange/10">
                        <section.icon className="h-5 w-5 text-sos-orange" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-sos-orange mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Information */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-sos-orange" />
                  Contact Us About Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> support@safeorstolen.com</p>
                  <p><strong>Address:</strong> Safe or Stolen Privacy Office</p>
                  <p><strong>Response Time:</strong> We respond to all privacy inquiries within 72 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Badges */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Privacy Compliance</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="border-sos-lime text-sos-lime">
                  GDPR Compliant
                </Badge>
                <Badge variant="outline" className="border-sos-lime text-sos-lime">
                  CCPA Compliant
                </Badge>
                <Badge variant="outline" className="border-sos-lime text-sos-lime">
                  SOC 2 Type II
                </Badge>
                <Badge variant="outline" className="border-sos-lime text-sos-lime">
                  ISO 27001 Certified
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;