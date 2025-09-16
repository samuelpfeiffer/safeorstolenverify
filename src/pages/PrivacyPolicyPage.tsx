import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 15, 2025";
  
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Zero Data Retention",
      description: "Search queries are never stored or linked to personal information"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data transmission uses 256-bit SSL encryption"
    },
    {
      icon: Eye,
      title: "No Tracking",
      description: "We don't use tracking cookies or behavioral analytics"
    },
    {
      icon: Database,
      title: "Minimal Data Collection",
      description: "We only collect what's absolutely necessary for service operation"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - SafeOrStolen.com",
    "description": "Comprehensive privacy policy outlining how SafeOrStolen.com protects user data with zero retention policy and bank-level security.",
    "dateModified": lastUpdated,
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen.com"
    }
  };

  return (
    <>
      <PageSEO
        title="Privacy Policy - SafeOrStolen.com Data Protection & Security"
        description="Learn how SafeOrStolen.com protects your privacy with zero data retention, 256-bit encryption, and GDPR compliance. Your searches remain completely anonymous."
        keywords="safeorstolen privacy policy, data protection, zero retention policy, GDPR compliance, search privacy"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your privacy is our top priority. Learn how we protect your data with 
                industry-leading security measures and a zero retention policy.
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Last Updated: {lastUpdated}
              </Badge>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Privacy Principles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {privacyPrinciples.map((principle, index) => (
                <Card key={index} className="p-6 text-center">
                  <principle.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">Search Queries (Not Retained)</h3>
                  <p>When you use our verification service, you provide serial numbers, IMEI numbers, or VIN numbers. These are processed in real-time and immediately deleted after providing results. We maintain a strict zero-retention policy for all search data.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Account Information (Optional)</h3>
                  <p>If you create an account for subscription services, we collect: email address, encrypted password, and billing information (processed securely through Stripe).</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Technical Information</h3>
                  <p>We automatically collect minimal technical data including: IP address (anonymized), browser type, device type, and usage timestamps for security and performance monitoring.</p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Delivery:</strong> To process verification requests and provide results</li>
                    <li><strong>Account Management:</strong> To manage subscriptions and billing (when applicable)</li>
                    <li><strong>Security:</strong> To protect against fraud and abuse</li>
                    <li><strong>Communication:</strong> To send service updates and support responses</li>
                    <li><strong>Improvement:</strong> To analyze anonymous usage patterns for service optimization</li>
                  </ul>
                  <p className="font-semibold">We never use your information for marketing, advertising, or any commercial purposes beyond service delivery.</p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Sharing and Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">We Never Share Search Data</h3>
                  <p>Your verification searches are never shared, sold, or disclosed to any third party, including law enforcement, without a valid court order.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Limited Service Providers</h3>
                  <p>We work with carefully vetted service providers:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Stripe:</strong> Payment processing (PCI DSS compliant)</li>
                    <li><strong>Supabase:</strong> Database hosting (SOC 2 certified)</li>
                    <li><strong>Cloudflare:</strong> Security and performance (enterprise grade)</li>
                  </ul>
                  <p>All providers are bound by strict data protection agreements and cannot access or use your data for any purpose other than providing their specific service.</p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">Encryption</h3>
                  <p>All data transmission uses 256-bit SSL encryption. Data at rest is encrypted using AES-256 encryption.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Access Controls</h3>
                  <p>Access to systems is restricted using multi-factor authentication, role-based permissions, and regular security audits.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Monitoring</h3>
                  <p>We maintain 24/7 security monitoring and incident response procedures to protect against unauthorized access.</p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Your Rights (GDPR Compliance)</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Under GDPR and other privacy laws, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request information about data we hold about you</li>
                    <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Objection:</strong> Object to processing of your data</li>
                    <li><strong>Restriction:</strong> Request limitation of processing</li>
                  </ul>
                  <p>To exercise these rights, contact us at privacy@safeorstolen.com. We respond to all requests within 30 days.</p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Data Retention</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">Search Data: Zero Retention</h3>
                  <p>Serial numbers, IMEI numbers, and VIN numbers are processed in real-time and immediately purged from all systems after providing results. No search history is maintained.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground">Account Data: Retention Schedule</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Active accounts: Data retained while account is active</li>
                    <li>Closed accounts: Data deleted within 30 days</li>
                    <li>Billing records: Retained for 7 years per legal requirements</li>
                    <li>Support communications: Deleted after 2 years</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. International Transfers</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our services are hosted in the United States with SOC 2 certified data centers. If you access our services from outside the US, your data may be transferred to and processed in the United States.</p>
                  <p>We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses approved by the European Commission.</p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For privacy-related questions or to exercise your rights:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@safeorstolen.com</p>
                    <p><strong>Mail:</strong> SafeOrStolen.com Privacy Officer<br />
                    123 Security Boulevard<br />
                    Washington, DC 20001</p>
                    <p><strong>Response Time:</strong> Within 30 days for all privacy requests</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Changes to This Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may update this privacy policy to reflect changes in our practices or legal requirements. We will:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Post the updated policy on this page</li>
                    <li>Update the "Last Updated" date</li>
                    <li>Notify registered users of material changes via email</li>
                    <li>Maintain historical versions for reference</li>
                  </ul>
                  <p>Continued use of our services after changes constitutes acceptance of the updated policy.</p>
                </div>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;