import React from 'react';
import { Shield, Lock, Award, CheckCircle, Globe, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const securityCertifications = [
  {
    icon: Shield,
    title: "256-bit SSL",
    description: "All traffic encrypted in transit",
    badge: "Always On",
    color: "text-emerald-600"
  },
  {
    icon: Lock,
    title: "256-bit SSL",
    description: "Bank-level encryption for all data transmission",
    badge: "Always On",
    color: "text-blue-600"
  },
  {
    icon: Award,
    title: "GDPR Compliant",
    description: "Full compliance with European data protection laws",
    badge: "Certified",
    color: "text-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Stripe Payments",
    description: "Payments are processed by Stripe. Card details never touch our servers.",
    badge: "Secure",
    color: "text-green-600"
  },
  {
    icon: Database,
    title: "Zero Retention",
    description: "Search data is never stored or retained after results",
    badge: "Policy",
    color: "text-red-600"
  }
];

const trustIndicators = [
  {
    metric: "6",
    label: "Item Categories",
    description: "Phones, vehicles, plates, serials, firearms, bikes"
  },
  {
    metric: "500K+",
    label: "Verifications",
    description: "Completed successfully"
  },
  {
    metric: "50+",
    label: "Databases",
    description: "Law enforcement sources"
  },
  {
    metric: "45",
    label: "Countries",
    description: "International coverage"
  },
  {
    metric: "24/7",
    label: "Support",
    description: "Expert assistance available"
  },
  {
    metric: "<5s",
    label: "Response Time",
    description: "Average verification speed"
  }
];

export const SecurityBadges = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Security Certifications */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Security & Compliance Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your data security and privacy are our top priorities. We maintain the highest 
            industry standards for data protection and compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {securityCertifications.map((cert, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full bg-muted ${cert.color}`}>
                  <cert.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <Badge variant="secondary" className="text-sm">
                  {cert.badge}
                </Badge>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{cert.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Trust Indicators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven performance metrics that demonstrate our reliability and expertise 
            in stolen item verification.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {indicator.metric}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {indicator.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {indicator.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Security Promise */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Security Promise</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We pledge to protect your privacy with military-grade security measures. 
              Your searches are encrypted, never stored, and completely anonymous. 
              We maintain zero-knowledge architecture ensuring only you see your verification results.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;