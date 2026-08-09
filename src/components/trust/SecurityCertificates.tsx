import React from 'react';
import { Shield, Lock, Award, CheckCircle2, FileCheck, Globe2, Server, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const SecurityCertificates: React.FC = () => {
  const certificates = [
    {
      icon: CheckCircle2,
      name: "GDPR Compliant",
      issuer: "EU Commission",
      status: "Verified",
      validUntil: "Ongoing",
      description: "General Data Protection Regulation full compliance",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileCheck,
      name: "CCPA Compliant",
      issuer: "California AG",
      status: "Verified",
      validUntil: "Ongoing",
      description: "California Consumer Privacy Act compliance",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Globe2,
      name: "Privacy Shield",
      issuer: "US-EU Framework",
      status: "Certified",
      validUntil: "Nov 2025",
      description: "EU-US data transfer framework certification",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Server,
      name: "HIPAA Ready",
      issuer: "HHS",
      status: "Compliant",
      validUntil: "Ongoing",
      description: "Health Insurance Portability and Accountability Act ready infrastructure",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: UserCheck,
      name: "WCAG 2.1 AA",
      issuer: "W3C",
      status: "Accessible",
      validUntil: "Ongoing",
      description: "Web Content Accessibility Guidelines compliance",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
            <Shield className="h-3 w-3 mr-1" />
            Enterprise-Grade Security
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Certified & Verified Security
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform maintains the highest security standards with certifications from leading 
            security organizations and compliance frameworks worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50"
            >
              <CardContent className="p-6">
                <div className={`bg-gradient-to-br ${cert.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.description}
                </p>
                <div className="text-xs text-muted-foreground border-t pt-3">
                  <div className="flex justify-between">
                    <span>Issued by: <strong>{cert.issuer}</strong></span>
                  </div>
                  <div className="mt-1">
                    Valid until: <strong>{cert.validUntil}</strong>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
          <CardContent className="p-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-green-600 dark:text-green-400" />
            <h3 className="text-2xl font-bold mb-3 text-green-900 dark:text-green-100">
              Your Data is Protected
            </h3>
            <p className="text-green-700 dark:text-green-300 max-w-3xl mx-auto mb-6">
              We employ military-grade encryption, regular security audits, and maintain strict compliance 
              with international data protection standards. Your privacy and security are our top priorities.
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">256-bit</div>
                <div className="text-sm text-green-700 dark:text-green-300">SSL/TLS Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
                <div className="text-sm text-green-700 dark:text-green-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
                <div className="text-sm text-green-700 dark:text-green-300">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">Zero</div>
                <div className="text-sm text-green-700 dark:text-green-300">Data Breaches</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
