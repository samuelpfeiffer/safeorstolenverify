import React from 'react';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { DefaultSEO } from '@/components/seo/DefaultSEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Building, Shield, CheckCircle, Zap, FileText, BarChart, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const ForHandlersPage = () => {
  const navigate = useNavigate();

  const handlerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SafeOrStolen Business Handler Verification Service", 
    "description": "Comprehensive verification service for businesses that handle, process, store, or transport second-hand goods. API integration, bulk processing, and compliance reporting.",
    "provider": {
      "@type": "Organization", 
      "name": "Safe Or Stolen"
    },
    "serviceType": "Business Verification for Handlers",
    "areaServed": "Worldwide"
  };

  return (
    <>
      <DefaultSEO />
      <MasterSEO
        title="SafeOrStolen for Handlers - Business Compliance & Due Diligence"
        description="Pawn shops, repair shops, logistics companies, and processors: Streamline verification into your workflow. API integration, bulk processing, and compliance reporting for businesses handling second-hand goods."
        keywords="pawn shop verification, repair shop compliance, logistics verification, business due diligence, bulk item verification, API integration, compliance reporting"
        structuredData={handlerStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/for-handlers">For Handlers</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Building className="h-5 w-5 text-blue-500" />
              <span className="text-blue-500 font-semibold">For Business Handlers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Handle Second-Hand Goods with Complete Confidence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pawn shops, repair centers, logistics companies, and processors—streamline verification into your workflow. 
              Perform due diligence at scale with API integration, bulk processing, and compliance reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-500/90 text-white font-semibold px-8"
                onClick={() => navigate('/for-brands')}
              >
                <Building className="mr-2 h-5 w-5" />
                Explore Enterprise Solutions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={() => navigate('/contact')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <Settings className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Workflow Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate verification into your existing business processes with our API. 
                  No disruption to current operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bulk Processing</h3>
                <p className="text-muted-foreground">
                  Process hundreds or thousands of items efficiently. Purpose-built for high-volume 
                  business operations and enterprise-scale verification needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compliance Reporting</h3>
                <p className="text-muted-foreground">
                  Generate audit-ready compliance reports for regulators and law enforcement. 
                  Demonstrate due diligence and protect your business license.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Purpose-Built for Your Business Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Pawn Shops",
                  description: "Comprehensive due diligence for all accepted items",
                  features: ["Point-of-sale integration", "Compliance reporting", "Law enforcement alerts", "Customer documentation"]
                },
                {
                  title: "Repair Shops",
                  description: "Verify legitimacy of items brought for repair or service",
                  features: ["Intake verification", "Service documentation", "Legal protection", "Customer trust building"]
                },
                {
                  title: "Logistics & Storage", 
                  description: "Verify items in transit, storage, or processing facilities",
                  features: ["Bulk scanning", "Chain of custody", "Facility protection", "Regulatory compliance"]
                },
                {
                  title: "Processors & Refurbishers",
                  description: "Verify inventory before processing or refurbishment",
                  features: ["Inventory verification", "Supply chain protection", "Quality assurance", "Wholesale compliance"]
                }
              ].map((type, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Enterprise Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Settings className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                      <p className="text-muted-foreground mb-4">
                        RESTful API with comprehensive documentation. Integrate with existing POS systems, 
                        inventory management, or custom business applications.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Real-time verification results</li>
                        <li>• Webhook notifications</li>
                        <li>• Custom field mapping</li>
                        <li>• Sandbox environment for testing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bulk Processing</h3>
                      <p className="text-muted-foreground mb-4">
                        Upload CSV files or use batch API calls to process thousands of items simultaneously. 
                        Perfect for inventory audits and high-volume operations.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• CSV upload processing</li>
                        <li>• Batch API endpoints</li>
                        <li>• Progress tracking</li>
                        <li>• Results export</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Compliance Reporting</h3>
                      <p className="text-muted-foreground mb-4">
                        Generate comprehensive reports for audits, law enforcement requests, and regulatory compliance. 
                        Automated scheduling and secure delivery options.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Automated report generation</li>
                        <li>• Custom report templates</li>
                        <li>• Secure delivery methods</li>
                        <li>• Audit trail maintenance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BarChart className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                      <p className="text-muted-foreground mb-4">
                        Detailed analytics on verification patterns, risk indicators, and operational metrics. 
                        Make data-driven decisions to optimize your business processes.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Verification success rates</li>
                        <li>• Risk pattern analysis</li>
                        <li>• Operational dashboards</li>
                        <li>• Custom metrics tracking</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compliance & Legal Protection */}
          <section className="mb-16">
            <Card className="max-w-4xl mx-auto border-green-500/20 bg-gradient-to-r from-green-500/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Comprehensive Legal & Regulatory Protection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-600">Due Diligence Documentation</h4>
                    <p className="text-muted-foreground mb-4">
                      Maintain comprehensive records of all verification activities. Demonstrate to regulators 
                      and law enforcement that your business performs proper due diligence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-600">License Protection</h4>
                    <p className="text-muted-foreground mb-4">
                      Protect your business license by avoiding stolen goods handling. Our verification helps 
                      prevent regulatory violations that could result in fines or license suspension.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-600">Law Enforcement Cooperation</h4>
                    <p className="text-muted-foreground mb-4">
                      Demonstrate cooperation with law enforcement through proactive verification. Build positive 
                      relationships that protect your business reputation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-600">Insurance Benefits</h4>
                    <p className="text-muted-foreground mb-4">
                      Many insurance providers offer premium discounts for businesses that implement comprehensive 
                      verification processes to reduce theft-related claims.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Business Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  business: "Metro Pawn & Jewelry",
                  type: "Pawn Shop Chain",
                  story: "\"API integration reduced our verification time by 80% while ensuring 100% compliance.\"",
                  metric: "80% time savings"
                },
                {
                  business: "TechFix Repair Centers",
                  type: "Electronics Repair",
                  story: "\"Customers trust us more knowing we verify every device. Repeat business up 35%.\"",
                  metric: "35% more repeat business"
                },
                {
                  business: "Global Logistics Solutions",
                  type: "Logistics Company",
                  story: "\"Bulk processing lets us verify 10,000+ items daily across all facilities.\"",
                  metric: "10,000+ items/day"
                }
              ].map((story, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 italic">{story.story}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{story.business}</p>
                        <p className="text-sm text-muted-foreground">{story.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-blue-500">{story.metric}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Simple Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "Discuss your specific business needs and integration requirements",
                  timeline: "1-2 days"
                },
                {
                  step: 2,
                  title: "Custom Setup",
                  description: "Configure API access, reporting, and workflow integration",
                  timeline: "3-5 days"
                },
                {
                  step: 3,
                  title: "Testing & Training",
                  description: "Sandbox testing and staff training on new verification processes", 
                  timeline: "1-2 weeks"
                },
                {
                  step: 4,
                  title: "Go Live",
                  description: "Full deployment with ongoing support and monitoring",
                  timeline: "1 day"
                }
              ].map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 border-2 border-blue-500 rounded-full mb-4">
                      <span className="text-blue-500 font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                    <p className="text-blue-500 font-semibold text-sm">{step.timeline}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="max-w-3xl mx-auto border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business Operations?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of businesses that trust SafeOrStolen for comprehensive verification and compliance. 
                  Protect your business, ensure compliance, and streamline operations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button 
                    size="lg" 
                    className="bg-blue-500 hover:bg-blue-500/90 text-white font-semibold px-8"
                    onClick={() => navigate('/contact')}
                  >
                    <Building className="mr-2 h-5 w-5" />
                    Schedule Enterprise Demo
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    onClick={() => navigate('/for-brands')}
                  >
                    View API Documentation
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Custom enterprise pricing • Dedicated support • Full API access • Compliance reporting
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default ForHandlersPage;