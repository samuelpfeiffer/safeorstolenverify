import React from 'react';
import { Helmet } from 'react-helmet-async';
import { VerifiedSiteBadge } from '@/components/trust/VerifiedSiteBadge';
import { SecurityCertificates } from '@/components/trust/SecurityCertificates';
import { TrustBadges } from '@/components/trust/TrustBadges';
import { ThirdPartyValidation } from '@/components/trust/ThirdPartyValidation';
import { DataSourceCredibility } from '@/components/seo/DataSourceCredibility';
import { SecurityBadges } from '@/components/seo/SecurityBadges';
import { Shield, Lock, Award, CheckCircle, Globe, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TrustVerificationPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Globe,
      title: "Global Verification Network",
      description: "Access to worldwide databases and partnerships with law enforcement agencies across 150+ countries."
    },
    {
      icon: Shield,
      title: "Mobile & Web Platform",
      description: "Verify items anywhere with our mobile app or web platform - instant results on any device."
    },
    {
      icon: Lock,
      title: "Bank-Level Encryption",
      description: "All data is encrypted using 256-bit SSL/TLS encryption, the same standard used by financial institutions worldwide."
    },
    {
      icon: CheckCircle,
      title: "Zero Personal Data Retention",
      description: "We don't store your personal information. Your verification searches remain private and secure."
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Certified and compliant with SOC 2, ISO 27001, GDPR, CCPA, PCI DSS, and more."
    },
    {
      icon: Server,
      title: "99.9% Uptime Guarantee",
      description: "Enterprise-grade infrastructure with automatic backups, disaster recovery, and 24/7 monitoring."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trust & Security Verification - Safe or Stolen | Certified Secure Platform</title>
        <meta name="description" content="Verify our security certifications, compliance standards, and trust indicators. Safe or Stolen maintains enterprise-grade security with SOC 2, ISO 27001, GDPR, and PCI DSS compliance." />
        <meta name="keywords" content="security verification, trust certification, SOC 2, ISO 27001, GDPR compliant, PCI DSS, secure platform, verified site, security audit, compliance certification" />
        {/* Canonical tag handled by PageSEO component to prevent duplicates */}
        
        {/* Open Graph */}
        <meta property="og:title" content="Trust & Security Verification - Safe or Stolen" />
        <meta property="og:description" content="Enterprise-grade security with verified certifications and compliance standards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safeorstolen.com/trust-verification" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trust & Security Verification - Safe or Stolen" />
        <meta name="twitter:description" content="Enterprise-grade security with verified certifications and compliance standards." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-orange via-sos-orange/90 to-sos-lime/80">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm">
              <Globe className="h-4 w-4 mr-2" />
              Global Verification Service
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              The World's Most Trusted Verification Platform
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
              SafeOrStolen is the global leader in stolen goods verification, protecting buyers and sellers worldwide through our web platform and mobile app.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Enterprise-grade security with verified certifications, continuous monitoring, and compliance with international security frameworks.
            </p>
            <div className="flex justify-center">
              <VerifiedSiteBadge variant="compact" className="scale-125" />
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Trust SafeOrStolen.com?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We implement comprehensive security measures to protect your data and ensure platform reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-sos-orange/20">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-sos-orange to-sos-lime w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Verified Site Badge Section */}
          <div className="mb-16">
            <VerifiedSiteBadge variant="detailed" />
          </div>
        </section>

        {/* Security Certificates */}
        <SecurityCertificates />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Third Party Validation */}
        <ThirdPartyValidation />

        {/* Data Source Credibility */}
        <DataSourceCredibility />

        {/* Additional Security Badges */}
        <SecurityBadges />

        {/* Final Trust Statement */}
        <section className="py-16 bg-gradient-to-r from-sos-orange to-sos-lime">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-20 w-20 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Worldwide, Available Everywhere
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              As the world's most trusted verification service, we protect millions of transactions globally. 
              Verify items instantly on our web platform or mobile app - your security is always in your pocket.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge className="bg-white text-sos-orange text-base px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                150+ Countries
              </Badge>
              <Badge className="bg-white text-sos-orange text-base px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Zero Data Breaches
              </Badge>
              <Badge className="bg-white text-sos-orange text-base px-4 py-2">
                <Lock className="h-4 w-4 mr-2" />
                Bank-Level Security
              </Badge>
              <Badge className="bg-white text-sos-orange text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                SOC 2 Certified
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrustVerificationPage;
