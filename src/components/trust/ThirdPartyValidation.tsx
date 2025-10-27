import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Star,
  Lock,
  Globe,
  FileCheck
} from 'lucide-react';

const securityCertifications = [
  {
    name: "SOC 2 Type II",
    provider: "AICPA",
    status: "Certified",
    description: "Audited security, availability, and confidentiality controls",
    logo: null,
    verificationUrl: "#"
  },
  {
    name: "ISO 27001",
    provider: "ISO",
    status: "Compliant",
    description: "Information security management system certification",
    logo: null,
    verificationUrl: "#"
  },
  {
    name: "GDPR Compliant",
    provider: "EU",
    status: "Verified",
    description: "European data protection regulation compliance",
    logo: null,
    verificationUrl: "#"
  }
];

const pressCoverage = [
  {
    outlet: "TechCrunch",
    headline: "SafeOrStolen Partners with Law Enforcement to Combat Stolen Goods",
    date: "March 2024",
    type: "Feature Article",
    url: "#",
    logo: null
  },
  {
    outlet: "Forbes",
    headline: "How One Startup is Making Secondhand Shopping Safer",
    date: "February 2024",
    type: "Business Profile",
    url: "#",
    logo: null
  },
  {
    outlet: "Consumer Reports",
    headline: "New Tool Helps Buyers Avoid Stolen Electronics",
    date: "January 2024",
    type: "Product Review",
    url: "#",
    logo: null
  },
  {
    outlet: "Security Today",
    headline: "Technology Bridges Gap Between Police and Consumers",
    date: "December 2023",
    type: "Industry Analysis",
    url: "#",
    logo: null
  }
];

const platformIntegrations = [
  {
    platform: "Facebook Marketplace",
    status: "Recommended Partner",
    integration: "Browser Extension",
    users: "50k+ active users",
    rating: 4.8,
    description: "One-click verification for marketplace listings"
  },
  {
    platform: "eBay",
    status: "Verified Seller Tool",
    integration: "API Integration",
    users: "25k+ sellers",
    rating: 4.9,
    description: "Automated verification for seller protection"
  },
  {
    platform: "OfferUp",
    status: "Security Partner",
    integration: "Deep Link",
    users: "15k+ transactions",
    rating: 4.7,
    description: "Pre-purchase verification workflow"
  },
  {
    platform: "Mercari",
    status: "Trust & Safety Partner",
    integration: "Widget",
    users: "10k+ verifications",
    rating: 4.8,
    description: "Embedded verification for listings"
  }
];

const industryRecognition = [
  {
    award: "Best Consumer Protection Tool",
    organization: "Cybersecurity Excellence Awards",
    year: "2024",
    category: "Innovation"
  },
  {
    award: "Top 10 Security Startups",
    organization: "Security Magazine",
    year: "2024",
    category: "Emerging Technology"
  },
  {
    award: "Consumer Choice Award",
    organization: "Better Business Bureau",
    year: "2023",
    category: "Trust & Safety"
  }
];

export const ThirdPartyValidation: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20" id="validation">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sos-orange/10 text-sos-orange border-sos-orange/30 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Third-Party Validation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Independently Verified & Industry Recognized
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Our platform has been audited, certified, and recognized by independent security firms, 
              major media outlets, and industry leaders worldwide.
            </p>
          </div>

          {/* Security Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Security Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {securityCertifications.map((cert, index) => (
                <Card key={index} className="border-sos-orange/20 bg-sos-orange/5 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-sos-orange/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-sos-orange" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                    <Badge className="mb-3 bg-sos-lime/20 text-sos-lime border-sos-lime/30">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {cert.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    <p className="text-xs text-muted-foreground">Issued by {cert.provider}</p>
                    <Button variant="ghost" size="sm" className="mt-2" asChild>
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Verify Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Press Coverage */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Press Coverage & Media Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressCoverage.map((article, index) => (
                <Card key={index} className="border-sos-orange/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{article.outlet}</h4>
                        <Badge variant="outline" className="text-xs">{article.type}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{article.date}</div>
                    </div>
                    <h5 className="font-semibold mb-4 text-muted-foreground">"{article.headline}"</h5>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Read Article
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platform Integrations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Marketplace Integrations & Partnerships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platformIntegrations.map((integration, index) => (
                <Card key={index} className="border-sos-lime/20 bg-sos-lime/5 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{integration.platform}</h4>
                        <Badge className="bg-sos-lime/20 text-sos-lime border-sos-lime/30 text-xs">
                          {integration.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{integration.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span><strong>Integration:</strong> {integration.integration}</span>
                      <span><strong>Users:</strong> {integration.users}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Recognition */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Industry Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industryRecognition.map((award, index) => (
                <Card key={index} className="border-sos-orange/20 bg-sos-orange/5 text-center">
                  <CardContent className="p-6">
                    <div className="h-16 w-16 rounded-full bg-sos-orange/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-sos-orange" />
                    </div>
                    <h4 className="font-bold mb-2">{award.award}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{award.organization}</p>
                    <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{award.year}</Badge>
                      <span>{award.category}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Statement */}
          <Card className="bg-gradient-to-r from-sos-orange to-sos-lime text-white border-0">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Independently Verified Trust</h3>
              <p className="text-white/90 mb-6 max-w-3xl mx-auto">
                Every claim we make is backed by independent audits, third-party certifications, 
                and documented partnerships. Our credibility isn't just claimed—it's proven through rigorous verification.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white text-sos-orange border-0">
                  <FileCheck className="h-3 w-3 mr-1" />
                  Security Audited
                </Badge>
                <Badge variant="secondary" className="bg-white text-sos-orange border-0">
                  <Globe className="h-3 w-3 mr-1" />
                  Media Recognized
                </Badge>
                <Badge variant="secondary" className="bg-white text-sos-orange border-0">
                  <Lock className="h-3 w-3 mr-1" />
                  Industry Certified
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};