import { Shield, Lock, Award, Users, Database, CheckCircle, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "256-Bit SSL Encryption",
      description: "All data transmissions are protected with bank-level encryption to ensure your searches remain private and secure."
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "We follow strict EU data protection regulations to safeguard your personal information and privacy rights."
    },
    {
      icon: Database,
      title: "50M+ Verified Records",
      description: "Our database is continuously updated from trusted law enforcement and insurance sources worldwide."
    },
    {
      icon: Users,
      title: "100K+ Users Trust Us",
      description: "Join thousands of buyers, sellers, and businesses who verify items daily with confidence."
    }
  ];

  const certifications = [
    {
      badge: "🔒",
      title: "SSL Secured",
      description: "256-bit encryption"
    },
    {
      badge: "✅",
      title: "Industry Leader",
      description: "Trusted since 2024"
    },
    {
      badge: "👥",
      title: "100K+ Users",
      description: "Verified daily"
    },
    {
      badge: "🛡️",
      title: "Privacy Protected",
      description: "GDPR compliant"
    }
  ];

  const dataProtection = [
    {
      title: "No Data Selling",
      description: "We never sell or share your search data with third parties"
    },
    {
      title: "Secure Storage",
      description: "All data stored in encrypted, geo-redundant servers"
    },
    {
      title: "Anonymized Searches",
      description: "Your searches are anonymized for maximum privacy"
    },
    {
      title: "Right to Delete",
      description: "Request deletion of your data at any time"
    }
  ];

  return (
    <>
      <PageSEO
        title="Security & Privacy - SafeOrStolen"
        description="Learn about SafeOrStolen's security measures, data protection, privacy policy, and industry certifications. We protect your data with bank-level encryption."
        keywords="security, privacy, data protection, encryption, GDPR, compliance"
        canonical="/security"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                <span>Your Security is Our Priority</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Security & Privacy
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We take your security seriously. Learn how we protect your data and maintain the highest standards of privacy and compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Security Measures</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Certifications & Trust Badges</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-4xl mb-3">{cert.badge}</div>
                    <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Data Protection Promise</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Your privacy matters. Here's our commitment to protecting your data.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {dataProtection.map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Regulatory Compliance</h2>
              
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">GDPR Compliance</h3>
                    <p className="text-muted-foreground">
                      We comply with the EU General Data Protection Regulation, giving you full control over your personal data, including the right to access, correct, and delete your information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">CCPA Compliance</h3>
                    <p className="text-muted-foreground">
                      California residents have additional privacy rights under the California Consumer Privacy Act. We honor all CCPA requests promptly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Law Enforcement Cooperation</h3>
                    <p className="text-muted-foreground">
                      We work closely with law enforcement agencies worldwide to combat stolen goods trafficking while protecting user privacy within legal frameworks.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Questions about security or privacy?
                </p>
                <a 
                  href="mailto:security@safeorstolen.com" 
                  className="text-primary hover:underline font-semibold"
                >
                  security@safeorstolen.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Start Verifying Securely
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your data is protected. Your searches are private. Verify with confidence.
              </p>
              <Link to="/verify">
                <Button size="lg">
                  Start Free Verification
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}