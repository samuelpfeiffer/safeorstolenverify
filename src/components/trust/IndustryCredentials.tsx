import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Building, 
  Users, 
  Globe,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export const IndustryCredentials = () => {
  const credentials = [
    {
      title: "Industry Pioneer",
      description: "First mobile-native AI verification platform",
      icon: <TrendingUp className="h-6 w-6 text-sos-orange" />,
      details: ["Founded 2020", "First-to-market mobile app", "AI-powered from day one"]
    },
    {
      title: "Technology Leadership",
      description: "Advanced AI and machine learning capabilities",
      icon: <Shield className="h-6 w-6 text-sos-lime" />,
      details: ["Proprietary AI algorithms", "Real-time pattern recognition", "Cross-platform plugin architecture"]
    },
    {
      title: "Enterprise Partnerships",
      description: "Trusted by major institutions and agencies",
      icon: <Building className="h-6 w-6 text-blue-500" />,
      details: ["Law enforcement partnerships", "Insurance company integrations", "Fortune 500 clients"]
    },
    {
      title: "Global Reach",
      description: "International database access and coverage",
      icon: <Globe className="h-6 w-6 text-green-500" />,
      details: ["50+ country databases", "Multi-language support", "24/7 global operations"]
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", color: "green" },
    { name: "ISO 27001", status: "Certified", color: "green" },
    { name: "GDPR Compliant", status: "Verified", color: "blue" },
    { name: "CCPA Compliant", status: "Verified", color: "blue" },
    { name: "PCI DSS Level 1", status: "Certified", color: "green" },
    { name: "HIPAA Compliant", status: "Verified", color: "blue" }
  ];

  const partnerships = [
    { name: "FBI", type: "Database Access", logo: "/images/partners/fbi-logo.png" },
    { name: "Interpol", type: "International Data", logo: "/images/partners/interpol-logo.png" },
    { name: "NICB", type: "Insurance Networks", logo: "/images/partners/nicb-logo.png" },
    { name: "CheckMEND", type: "Device Verification", logo: "/images/partners/checkmend-logo.png" },
    { name: "Bike Index", type: "Bicycle Database", logo: "/images/partners/bikeindex-logo.png" },
    { name: "Art Loss Register", type: "Fine Art Database", logo: "/images/partners/art-register-logo.png" }
  ];

  const achievements = [
    { metric: "2M+", label: "Items Verified", period: "Since 2020" },
    { metric: "50K+", label: "Stolen Items Found", period: "Prevented Sales" },
    { metric: "99.7%", label: "Accuracy Rate", period: "AI Verification" },
    { metric: "15ms", label: "Average Response", period: "Real-time Results" },
    { metric: "500+", label: "Enterprise Clients", period: "Global Reach" },
    { metric: "24/7", label: "Uptime SLA", period: "Enterprise Grade" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Leadership & Trust</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Pioneering mobile-first AI verification technology with enterprise-grade security and global reach
        </p>
      </div>

      {/* Key Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((achievement, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-sos-orange mb-1">{achievement.metric}</div>
              <div className="font-semibold text-sm">{achievement.label}</div>
              <div className="text-xs text-muted-foreground">{achievement.period}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((credential, index) => (
          <Card key={index} className="border-sos-orange/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                {credential.icon}
                <div>
                  <CardTitle className="text-lg">{credential.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {credential.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-sos-lime" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Certifications */}
      <Card className="border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-green-500" />
            Security & Compliance Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="font-medium">{cert.name}</span>
                <Badge 
                  variant="outline" 
                  className={`${cert.color === 'green' ? 'border-green-500/30 text-green-500' : 'border-blue-500/30 text-blue-500'}`}
                >
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Partnerships */}
      <Card className="border-sos-lime/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Users className="h-6 w-6 text-sos-lime" />
            Strategic Database Partnerships
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Innovation Leadership */}
      <Card className="border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-transparent">
        <CardContent className="p-8 text-center">
          <Award className="h-12 w-12 text-sos-orange mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Innovation Recognition</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Recognized as the pioneer in mobile-first AI verification technology, setting the standard for the industry with our comprehensive plugin ecosystem and real-time intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="border-sos-orange/30 text-sos-orange">
              First Mobile-Native Platform
            </Badge>
            <Badge variant="outline" className="border-sos-lime/30 text-sos-lime">
              AI-Powered from Launch
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-500">
              Plugin Architecture Pioneer
            </Badge>
            <Badge variant="outline" className="border-green-500/30 text-green-500">
              Global Database Integration
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};