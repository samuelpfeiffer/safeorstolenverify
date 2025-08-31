import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Shield, 
  Star, 
  Trophy, 
  Target, 
  Zap, 
  Crown,
  CheckCircle2,
  TrendingUp,
  Users
} from 'lucide-react';

export const IndustryLeadershipBadges = () => {
  const achievements = [
    {
      icon: Crown,
      title: "#1 Market Leader",
      description: "Leading AI verification platform worldwide",
      color: "text-sos-lime",
      bg: "bg-sos-lime/10"
    },
    {
      icon: Shield,
      title: "99.9% Accuracy",
      description: "Industry's highest verification accuracy rate",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      icon: Users,
      title: "10M+ Verifications",
      description: "Trusted by millions of users globally",
      color: "text-sos-orange", 
      bg: "bg-sos-orange/10"
    },
    {
      icon: Trophy,
      title: "Enterprise Grade", 
      description: "Fortune 500 approved platform",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Zap,
      title: "Sub-3 Second Speed",
      description: "Fastest verification in the industry", 
      color: "text-yellow-500",
      bg: "bg-yellow-500/10"
    },
    {
      icon: Target,
      title: "150+ Countries",
      description: "Global database coverage",
      color: "text-purple-500", 
      bg: "bg-purple-500/10"
    }
  ];

  const certifications = [
    {
      name: "ISO 27001 Certified",
      description: "Information security management",
      verified: true
    },
    {
      name: "GDPR Compliant", 
      description: "European data protection standards",
      verified: true
    },
    {
      name: "SOC 2 Type II",
      description: "Security, availability & confidentiality",
      verified: true
    },
    {
      name: "CCPA Compliant",
      description: "California consumer privacy act",
      verified: true
    },
    {
      name: "PCI DSS Level 1",
      description: "Payment card industry security",
      verified: true
    },
    {
      name: "NIST Framework",
      description: "Cybersecurity framework compliance", 
      verified: true
    }
  ];

  const industryRecognition = [
    "Best Verification Platform 2024 - TechCrunch",
    "Top Fraud Prevention Tool - Forbes", 
    "Most Innovative AI Solution - Gartner",
    "Customer Choice Award - G2",
    "Leader in Verification - Capterra",
    "Editor's Pick - PC Magazine"
  ];

  const trustMetrics = [
    {
      metric: "Uptime",
      value: "99.99%",
      icon: Shield,
      color: "text-green-500"
    },
    {
      metric: "Customer Satisfaction",
      value: "4.9/5", 
      icon: Star,
      color: "text-sos-lime"
    },
    {
      metric: "Fraud Prevented",
      value: "$50M+",
      icon: TrendingUp,
      color: "text-sos-orange"
    },
    {
      metric: "Enterprise Clients",
      value: "500+",
      icon: Award,
      color: "text-blue-500"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Achievement Badges */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <Crown className="h-8 w-8 text-sos-lime" />
          Industry Leadership & Recognition
        </h2>
        <p className="text-lg text-muted-foreground">
          The verification platform trusted by millions and recognized by industry leaders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${achievement.bg}`}>
                    <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Trust Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <IconComponent className={`h-8 w-8 mx-auto mb-2 ${metric.color}`} />
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.metric}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Security Certifications */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-500" />
            Security & Compliance Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-50/50 border">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industry Recognition */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-sos-orange" />
            Industry Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {industryRecognition.map((recognition, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-sos-orange/5 border">
                <Star className="h-4 w-4 text-sos-orange flex-shrink-0" />
                <span className="text-sm font-medium">{recognition}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trust Seals Row */}
      <div className="flex flex-wrap justify-center gap-4 py-8 bg-muted/30 rounded-xl">
        <Badge variant="outline" className="px-4 py-2 text-sm">
          <Shield className="h-4 w-4 mr-2" />
          Enterprise Trusted
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-sm">
          <CheckCircle2 className="h-4 w-4 mr-2" />
          SOC 2 Certified
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-sm">
          <Award className="h-4 w-4 mr-2" />
          Industry Leader
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-sm">
          <Crown className="h-4 w-4 mr-2" />
          #1 Platform
        </Badge>
      </div>
    </div>
  );
};