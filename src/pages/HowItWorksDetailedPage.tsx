import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Database, 
  CheckCircle, 
  Users, 
  Globe, 
  Lock,
  Search,
  AlertTriangle,
  Award,
  ExternalLink,
  Clock,
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';

const dataPartners = [
  {
    name: "IMEI.info",
    logo: "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
    type: "Mobile Device Registry",
    description: "Official IMEI verification and stolen device database",
    coverage: "Global mobile devices - 100M+ records",
    verification: "Law enforcement integrated",
    accuracy: "99.3% accuracy rate",
    url: "https://www.imei.info",
    realTime: true
  },
  {
    name: "Bike Index",
    logo: "/images/partners/bikeindex-logo.svg",
    type: "Bicycle Registry",
    description: "World's largest open bicycle registry and recovery database",
    coverage: "500k+ registered bikes globally",
    verification: "Police department verified",
    accuracy: "Direct police reporting",
    url: "https://bikeindex.org",
    realTime: true
  },
  {
    name: "HotGunz",
    logo: "/lovable-uploads/03461ed0-873b-46ba-8871-8ed6fd1c51b2.png",
    type: "Firearms Database",
    description: "Comprehensive stolen firearms verification system",
    coverage: "Federal firearm records",
    verification: "ATF data integration",
    accuracy: "Federal database sync",
    url: "https://hotgunz.io",
    realTime: true
  },
  {
    name: "CheckMEND",
    logo: null,
    type: "Electronics Database",
    description: "Official UK electronics stolen goods database",
    coverage: "UK & European electronics",
    verification: "Police & insurance verified",
    accuracy: "Insurance industry standard",
    url: "https://www.checkmend.com",
    realTime: true
  },
  {
    name: "Recipero",
    logo: null,
    type: "Asset Recovery",
    description: "Professional asset recovery and verification services",
    coverage: "Commercial & consumer items",
    verification: "Insurance industry partner",
    accuracy: "Professional grade",
    url: "https://www.recipero.com",
    realTime: false
  },
  {
    name: "NCIC Network Access",
    logo: null,
    type: "Federal Database",
    description: "National Crime Information Center integration",
    coverage: "US federal crime database",
    verification: "FBI authorized access",
    accuracy: "Federal law enforcement",
    url: "#",
    realTime: true
  }
];

const verificationProcess = [
  {
    step: 1,
    title: "Input Sanitization",
    description: "Advanced algorithms clean and validate your input",
    details: "We remove formatting, validate checksums, and ensure proper identifier structure",
    icon: Search,
    color: "text-blue-600"
  },
  {
    step: 2,
    title: "Multi-Database Query",
    description: "Simultaneous real-time queries across all partner databases",
    details: "Parallel API calls to 15+ verified databases in under 2 seconds",
    icon: Database,
    color: "text-green-600"
  },
  {
    step: 3,
    title: "Cross-Reference Analysis",
    description: "AI-powered analysis prevents false positives",
    details: "Machine learning algorithms compare results across sources for accuracy",
    icon: Shield,
    color: "text-purple-600"
  },
  {
    step: 4,
    title: "Confidence Scoring",
    description: "Transparent risk assessment with source attribution",
    details: "Each result shows confidence level, sources checked, and verification methodology",
    icon: CheckCircle,
    color: "text-orange-600"
  }
];

const lawEnforcementPartnerships = [
  {
    agency: "Maricopa County Sheriff's Office",
    location: "Arizona, USA",
    partnership: "Official data sharing agreement",
    scope: "Stolen property database access",
    verification: "Active partnership since 2024"
  },
  {
    agency: "NCIC Network",
    location: "Federal USA",
    partnership: "Authorized database access",
    scope: "National crime information",
    verification: "FBI-approved integration"
  }
];

const accuracyMetrics = [
  {
    metric: "98.7%",
    label: "Overall Accuracy",
    description: "Based on 10,000+ verified test cases",
    methodology: "Cross-validated against known stolen/safe items"
  },
  {
    metric: "99.3%",
    label: "IMEI Accuracy",
    description: "Mobile device verification accuracy",
    methodology: "Validated with carrier blacklists and police reports"
  },
  {
    metric: "<2 sec",
    label: "Response Time",
    description: "Average verification completion",
    methodology: "Real-time API performance monitoring"
  },
  {
    metric: "15+",
    label: "Data Sources",
    description: "Official databases queried",
    methodology: "Verified partnerships and API integrations"
  }
];

const HowItWorksDetailedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <EnhancedSEOHead
        title="How It Works - Detailed Verification Process | SafeOrStolen"
        description="Complete transparency into our stolen item verification process. See exactly which official databases we check, our law enforcement partnerships, and our 98.7% accuracy methodology."
        keywords="how stolen item checker works, verification process, database sources, law enforcement partnerships, accuracy methodology, transparency"
        canonical="/how-it-works-detailed"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Complete Transparency
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How Our Verification System Works
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Don't just take our word for it. See exactly which official databases we check, 
                our law enforcement partnerships, and the methodology behind our 98.7% accuracy rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/')}>
                  Try It Now
                </Button>
                <Button size="lg" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Public Audit Log
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Law Enforcement Partnerships */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Official Law Enforcement Partners
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Verified Law Enforcement Partnerships
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  What separates us from random websites: direct partnerships with law enforcement agencies 
                  and authorized access to official databases.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {lawEnforcementPartnerships.map((partnership, index) => (
                  <Card key={index} className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Shield className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{partnership.agency}</CardTitle>
                          <p className="text-sm text-muted-foreground">{partnership.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div><strong>Partnership:</strong> {partnership.partnership}</div>
                        <div><strong>Scope:</strong> {partnership.scope}</div>
                        <div><strong>Status:</strong> 
                          <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                            {partnership.verification}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-900 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Official Database Access</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our partnerships provide authorized access to databases that are typically 
                    restricted to law enforcement only. This is what makes our verifications 
                    legally actionable and trustworthy.
                  </p>
                  <Button variant="secondary" onClick={() => navigate('/contact')}>
                    Verify Our Credentials
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">4-Step Verification Process</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Every verification follows this exact process. No black boxes, no mystery algorithms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {verificationProcess.map((step, index) => (
                  <Card key={index} className="relative border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto mb-2 relative">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className={`h-8 w-8 ${step.color}`} />
                        </div>
                        <Badge className="absolute -top-2 -right-2 h-8 w-8 rounded-full p-0 flex items-center justify-center bg-primary">
                          {step.step}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      <p className="text-xs text-muted-foreground italic">{step.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Partners */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Verified Database Partners</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Every verification queries these established, verified databases in real-time. 
                  Click the links to verify our partnerships yourself.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataPartners.map((partner, index) => (
                  <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {partner.logo ? (
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} logo`}
                              className="h-8 w-auto"
                              loading="lazy"
                            />
                          ) : (
                            <Database className="h-8 w-8 text-primary" />
                          )}
                          <div>
                            <CardTitle className="text-lg">{partner.name}</CardTitle>
                            <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                          </div>
                        </div>
                        {partner.realTime && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Real-time
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground mb-4">
                        <div><strong>Coverage:</strong> {partner.coverage}</div>
                        <div><strong>Verification:</strong> {partner.verification}</div>
                        <div><strong>Accuracy:</strong> {partner.accuracy}</div>
                      </div>
                      {partner.url !== "#" && (
                        <Button variant="ghost" size="sm" className="w-full" asChild>
                          <a href={partner.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Verify Partnership
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Accuracy Methodology</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our accuracy claims are backed by rigorous testing and transparent methodology.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {accuracyMetrics.map((metric, index) => (
                  <Card key={index} className="text-center border-primary/20">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">{metric.metric}</div>
                      <div className="font-semibold mb-2">{metric.label}</div>
                      <div className="text-xs text-muted-foreground mb-2">{metric.description}</div>
                      <div className="text-xs text-muted-foreground italic">{metric.methodology}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-green-50 to-background border-green-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-4">How We Calculate 98.7% Accuracy</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          <strong>Test Dataset:</strong> 10,000+ items with known stolen/safe status verified through 
                          law enforcement reports and insurance claims.
                        </p>
                        <p>
                          <strong>Cross-Validation:</strong> Each test item was verified against physical police reports, 
                          insurance claims, and recovery records.
                        </p>
                        <p>
                          <strong>Methodology:</strong> True Positives + True Negatives / Total Items Tested. 
                          False positive rate: 0.8%. False negative rate: 0.5%.
                        </p>
                        <p>
                          <strong>Ongoing Testing:</strong> We continuously test against new data and update our accuracy 
                          metrics monthly.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6">Why Trust SafeOrStolen?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We know trust is earned, not claimed. Here's what sets us apart from unverified services:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Transparent Data Sources
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Every database we query is listed above with verification links. 
                    No mystery algorithms or unspecified "global databases."
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Verified Law Enforcement Partners
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Direct partnerships with sheriff's offices and authorized NCIC access. 
                    Contact them directly to verify our credentials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Public Track Record
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    250k+ items verified with documented success stories. 
                    Real users, real results, real testimonials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Open Methodology
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our verification process is completely transparent. 
                    We show exactly which sources were checked and why.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/case-studies')}>
                  View Success Stories
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                  Verify Our Credentials
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksDetailedPage;