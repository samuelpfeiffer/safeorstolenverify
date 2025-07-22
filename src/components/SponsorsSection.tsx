import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Shield, 
  Database, 
  Cloud, 
  Zap,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const SponsorsSection = () => {
  const partners = [
    {
      name: 'FasterCapital',
      logo: 'FC',
      description: 'Startup Accelerator & VC Network',
      url: 'https://fastercapital.com',
      featured: true,
      color: 'text-blue-500',
      bgColor: 'bg-gradient-to-r from-blue-500/10 to-red-500/10',
      logoColors: 'bg-gradient-to-r from-blue-500 to-red-500'
    },
    {
      name: 'Lovable.dev',
      logo: 'LV',
      description: 'AI-Powered Development Platform',
      url: 'https://lovable.dev',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      name: 'Supabase',
      logo: 'SB',
      description: 'Database & Backend Platform',
      url: 'https://supabase.com',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      name: 'Stripe',
      logo: 'ST',
      description: 'Payment Processing',
      url: 'https://stripe.com',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      name: 'Vercel',
      logo: 'VC',
      description: 'Cloud Hosting Platform',
      url: 'https://vercel.com',
      color: 'text-white',
      bgColor: 'bg-white/10'
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      icon: Shield,
      description: 'Security Compliance'
    },
    {
      name: 'ISO 27001',
      icon: Award,
      description: 'Information Security'
    },
    {
      name: 'GDPR Ready',
      icon: CheckCircle,
      description: 'Data Protection'
    },
    {
      name: '256-bit SSL',
      icon: Database,
      description: 'Data Encryption'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto container-padding">
        {/* Partners Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-sos-orange/10 text-sos-orange border-sos-orange/20">
            Trusted Partners & Sponsors
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Powered by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Safe or Stolen is proud to be supported by world-class partners and technology providers 
            who share our mission to fight stolen goods fraud.
          </p>
        </div>

        {/* Featured Partner - FasterCapital */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-500/10 to-red-500/10 border-blue-500/20 p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">FC</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground">FasterCapital</h3>
                <p className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent font-semibold">Lead Accelerator Partner</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Currently participating in the 12-month FasterCapital acceleration program, 
              receiving mentorship, funding support, and access to their global network of 155K+ angels and 50K+ VCs.
            </p>
            <a 
              href="https://fastercapital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity font-semibold"
            >
              Learn more about FasterCapital
              <ExternalLink className="h-4 w-4 text-blue-500" />
            </a>
          </Card>
        </div>

        {/* Other Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {partners.slice(1).map((partner, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 p-6 text-center hover:bg-card/90 transition-all">
              <div className={`w-12 h-12 ${partner.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <span className={`text-lg font-bold ${partner.color}`}>{partner.logo}</span>
              </div>
              <h4 className="font-semibold mb-2">{partner.name}</h4>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </Card>
          ))}
        </div>

        {/* Certifications & Security */}
        <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
            <p className="text-muted-foreground">
              Industry-standard security certifications and compliance measures
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <cert.icon className="h-8 w-8 text-sos-lime mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-sos-lime" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-sos-lime" />
              <span>Real-time Database</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-sos-lime" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-sos-lime" />
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
