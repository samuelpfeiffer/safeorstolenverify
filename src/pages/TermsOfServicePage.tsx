import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/seo/SEOHead';
import { Scale, Shield, AlertTriangle, Users, FileText, CreditCard } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing or using Safe or Stolen services, you agree to be bound by these Terms",
        "You must be at least 18 years old to use our services",
        "If you disagree with any part of these terms, you may not access our services",
        "We reserve the right to update these terms at any time with notice"
      ]
    },
    {
      id: "services",
      title: "Description of Services",
      icon: Shield,
      content: [
        "Real-time verification of item legitimacy through database cross-referencing",
        "Access to stolen goods databases from law enforcement agencies",
        "Risk assessment and fraud prevention tools",
        "API access for enterprise clients (separate agreement required)"
      ]
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: Users,
      content: [
        "Provide accurate information when using verification services",
        "Use services only for lawful purposes and legitimate verification needs",
        "Maintain the confidentiality of your account credentials",
        "Report any suspected fraudulent activity immediately"
      ]
    },
    {
      id: "limitations",
      title: "Service Limitations",
      icon: AlertTriangle,
      content: [
        "Verification results depend on available database information",
        "We cannot guarantee 100% accuracy of all verification results",
        "Services may be temporarily unavailable due to maintenance",
        "Some verification types may require additional processing time"
      ]
    },
    {
      id: "payment-terms",
      title: "Payment and Billing",
      icon: CreditCard,
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis",
        "All fees are non-refundable except as required by law",
        "We reserve the right to change pricing with 30 days notice",
        "Failed payments may result in service suspension"
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability", 
      icon: Scale,
      content: [
        "Our liability is limited to the amount paid for services in the last 12 months",
        "We are not liable for indirect, incidental, or consequential damages",
        "Users are responsible for their own verification and purchase decisions",
        "We make no warranties about the completeness of database information"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Terms of Service - Safe or Stolen"
        description="Read the complete terms of service for Safe or Stolen verification platform. Understand your rights and responsibilities."
        keywords="terms of service, user agreement, legal terms, service conditions"
        canonical="/terms-of-service"
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
                <Scale className="mr-2 h-4 w-4" />
                Legal Agreement
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                Please read these terms carefully before using our verification services. 
                These terms govern your use of Safe or Stolen's platform and services.
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
                <h2 className="text-2xl font-bold mb-4">Agreement Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                  Safe or Stolen regarding your use of our verification platform, website, mobile applications, 
                  and related services (collectively, the "Services"). Our mission is to combat the $13 billion 
                  stolen goods crisis by providing real-time verification services to consumers and businesses. 
                  By using our Services, you acknowledge that you understand and agree to be bound by these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Terms Sections */}
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

            {/* Additional Terms */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-sos-orange" />
                  Important Additional Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Governing Law</h4>
                  <p className="text-muted-foreground text-sm">
                    These Terms are governed by and construed in accordance with applicable laws. 
                    Any disputes will be resolved through binding arbitration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Severability</h4>
                  <p className="text-muted-foreground text-sm">
                    If any provision of these Terms is found unenforceable, the remaining provisions 
                    will remain in full force and effect.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Entire Agreement</h4>
                  <p className="text-muted-foreground text-sm">
                    These Terms, together with our Privacy Policy, constitute the entire agreement 
                    between you and Safe or Stolen regarding use of our Services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-sos-orange" />
                  Legal Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact our legal team:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> legal@safeorstolen.com</p>
                  <p><strong>Address:</strong> Safe or Stolen Legal Department</p>
                  <p><strong>Response Time:</strong> We respond to all legal inquiries within 5 business days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfServicePage;