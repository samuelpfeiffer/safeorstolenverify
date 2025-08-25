import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Shield, Target, Cpu, Lock } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const VerificationMethodologyPost = () => {
  const methodologySteps = [
    {
      step: 1,
      title: "Input Validation & Sanitization",
      icon: Lock,
      description: "Every query is validated, sanitized, and checked for proper formatting",
      details: [
        "Format validation (IMEI, VIN, Serial patterns)",
        "Security sanitization to prevent injection attacks", 
        "Checksum verification where applicable",
        "Input normalization for consistent processing"
      ]
    },
    {
      step: 2,
      title: "Multi-Database Query Execution",
      icon: Cpu,
      description: "Simultaneous queries across our network of verified databases",
      details: [
        "Parallel querying of 50+ official databases",
        "Real-time API calls to law enforcement systems",
        "Insurance company claim database checks",
        "Manufacturer warranty and theft reporting systems"
      ]
    },
    {
      step: 3,
      title: "AI-Powered Result Analysis",
      icon: Brain,
      description: "Machine learning algorithms analyze and cross-reference all results",
      details: [
        "Pattern recognition for false positives",
        "Confidence scoring based on source reliability",
        "Historical data correlation analysis",
        "Risk assessment calculation"
      ]
    },
    {
      step: 4,
      title: "Result Compilation & Reporting",
      icon: Target,
      description: "Final verification status with detailed supporting evidence",
      details: [
        "Clear SAFE/STOLEN/UNKNOWN status determination",
        "Source attribution for all findings",
        "Confidence level percentage",
        "Actionable next steps and recommendations"
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="The Science Behind Our Verification Methodology | SafeOrStolen Blog"
        description="Discover the advanced technology and rigorous methodology behind SafeOrStolen's stolen goods verification system. Learn how we achieve industry-leading accuracy."
        keywords="verification methodology, stolen goods detection, AI verification, database analysis, accuracy methodology"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sos-lime/10 text-sos-lime">
                <Brain className="mr-2 h-4 w-4" />
                Methodology
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Science Behind Our Verification Methodology
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our verification system combines cutting-edge AI with rigorous data analysis to deliver 
                the most accurate stolen goods detection available. Here's exactly how it works.
              </p>
            </div>

            {/* Overview */}
            <Card className="mb-12 bg-gradient-to-r from-sos-lime/5 to-sos-orange/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Precision Through Technology</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  SafeOrStolen's verification methodology has been developed through years of research and 
                  real-world testing. Our system processes over 10,000 verification requests daily, 
                  maintaining a 99.7% accuracy rate through advanced algorithms and comprehensive data analysis.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                    <div className="text-lg font-bold">Less than 2 sec</div>
                    <div className="text-sm text-muted-foreground">Average Response</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                    <div className="text-lg font-bold">99.7%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <Brain className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                    <div className="text-lg font-bold">AI-Powered</div>
                    <div className="text-sm text-muted-foreground">Analysis Engine</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                    <div className="text-lg font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">Data Sources</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Methodology Steps */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-center">Our 4-Step Verification Process</h2>
              {methodologySteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sos-orange to-sos-lime"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sos-orange/10 text-sos-orange font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <step.icon className="h-5 w-5 text-sos-orange" />
                          {step.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-sos-lime flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI & Machine Learning */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-sos-lime" />
                  AI & Machine Learning Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Pattern Recognition Algorithms</h4>
                    <p className="text-muted-foreground mb-3">
                      Our AI systems learn from millions of verification requests to identify patterns that 
                      indicate stolen goods, reducing false positives and improving accuracy over time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Confidence Scoring System</h4>
                    <p className="text-muted-foreground mb-3">
                      Each verification result includes a confidence score based on data source reliability, 
                      cross-reference validation, and historical accuracy metrics.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Continuous Learning & Improvement</h4>
                    <p className="text-muted-foreground">
                      Our models are continuously updated with new data, fraud patterns, and verification 
                      outcomes to maintain the highest possible accuracy standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Assurance */}
            <Card className="border-sos-lime/20 bg-sos-lime/5">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-sos-lime mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Rigorous Quality Assurance</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Every aspect of our verification methodology undergoes continuous testing, validation, 
                    and improvement to ensure we maintain the highest standards of accuracy and reliability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="font-bold text-sos-lime">Daily Testing</div>
                      <div className="text-sm text-muted-foreground">10,000+ Test Cases</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sos-lime">Third-Party Audits</div>
                      <div className="text-sm text-muted-foreground">Quarterly Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sos-lime">Continuous Monitoring</div>
                      <div className="text-sm text-muted-foreground">24/7 Oversight</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationMethodologyPost;