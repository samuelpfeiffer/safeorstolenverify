import React from 'react';
import { AlertTriangle, Shield, FileText, Users, ExternalLink, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';

const limitations = [
  {
    title: "Database Coverage Is Incomplete",
    description: "No stolen goods database covers 100% of theft incidents worldwide.",
    details: [
      "Many thefts are never reported to police",
      "Some reports may be filed with jurisdictions not in our network",
      "Data entry delays can occur between incident and database update",
      "International coverage varies by country and region"
    ],
    impact: "HIGH",
    mitigation: "Use additional verification methods for valuable items"
  },
  {
    title: "Not an Authoritative Source",
    description: "SafeOrStolen is a risk assessment tool, not an official verification service.",
    details: [
      "We aggregate data from multiple sources but cannot guarantee completeness",
      "Results should inform your decision-making, not replace due diligence",
      "Law enforcement databases remain the ultimate authority",
      "Private databases may contain errors or outdated information"
    ],
    impact: "CRITICAL",
    mitigation: "Always verify through official channels for high-value purchases"
  },
  {
    title: "False Negatives Possible",
    description: "Items may be stolen even if our system shows 'SAFE' status.",
    details: [
      "Recent thefts may not yet be in databases",
      "Unreported thefts won't appear in any system",
      "Some stolen items may be listed under different identifiers",
      "Cross-border thefts may not be captured in all regions"
    ],
    impact: "HIGH", 
    mitigation: "Request purchase documentation and proof of ownership"
  },
  {
    title: "Limited Legal Protection",
    description: "Using our service does not provide legal immunity from purchasing stolen goods.",
    details: [
      "Legal responsibility remains with the purchaser",
      "Due diligence requirements vary by jurisdiction",
      "Good faith purchase laws have specific requirements",
      "Insurance claims may require additional documentation"
    ],
    impact: "CRITICAL",
    mitigation: "Consult legal professionals for high-value transactions"
  }
];

const bestPractices = [
  {
    category: "Before Using SafeOrStolen",
    items: [
      "Inspect the item physically for signs of tampering or damage",
      "Ask seller for original purchase receipts or documentation",
      "Meet in public, safe locations for transactions",
      "Verify the seller's identity and contact information"
    ]
  },
  {
    category: "Using SafeOrStolen Effectively", 
    items: [
      "Use our service as one part of your verification process",
      "Pay attention to confidence scores and data source information",
      "Check multiple identifiers if the item has them (IMEI, serial, model)",
      "Report any suspected false positives or negatives to improve accuracy"
    ]
  },
  {
    category: "After Getting Results",
    items: [
      "For 'STOLEN' results: Do not proceed with purchase, report to authorities",
      "For 'SAFE' results: Continue with additional verification methods",
      "For 'CAUTION' results: Investigate further before deciding",
      "For high-value items: Use official government databases as final check"
    ]
  },
  {
    category: "Official Verification Methods",
    items: [
      "For vehicles: Use government VIN databases (VINCheck, etc.)",
      "For phones: Check carrier blacklists and manufacturer databases", 
      "For firearms: Use official ATF and law enforcement channels",
      "For jewelry: Request authentication certificates and appraisals"
    ]
  }
];

const ServiceLimitationsPage = () => {
  return (
    <>
      <PageSEO
        title="Service Limitations & Proper Use - SafeOrStolen Disclaimer"
        description="Important limitations of SafeOrStolen's stolen item checking service. Learn proper use, what we can and cannot guarantee, and best practices for safe purchasing."
        keywords="service limitations, disclaimer, stolen item checker limitations, proper use guidelines, verification tool disclaimer"
      />
      
      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              Important Service Limitations
            </div>
            <h1 className="text-4xl font-bold mb-6">What SafeOrStolen Can and Cannot Do</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transparency is crucial for building trust. Here are the important limitations of our service 
              and how to use it properly as part of your due diligence process.
            </p>
          </div>

          {/* Critical Warning */}
          <Card className="bg-red-500/10 border-red-500/50 mb-16">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-3 text-2xl">
                <AlertTriangle className="h-8 w-8" />
                ⚠️ THIS IS NOT AN OFFICIAL VERIFICATION SERVICE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-500/20 p-6 rounded-lg mb-6">
                <h3 className="text-red-300 font-bold text-lg mb-3">CRITICAL: Do Not Rely on This Service Alone</h3>
                <p className="text-red-100 mb-4">
                  SafeOrStolen is a <strong>risk assessment tool</strong> designed to help inform your purchasing decisions. 
                  It is <strong>NOT</strong> an authoritative verification service and should <strong>NOT</strong> be your only method 
                  of checking if an item is stolen.
                </p>
                <p className="text-red-100 font-semibold">
                  Always perform additional due diligence including requesting proof of purchase, 
                  contacting official authorities, and using multiple verification methods for valuable items.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    What This Service IS
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• A risk assessment tool that checks available databases</li>
                    <li>• An additional layer of due diligence for informed buyers</li>
                    <li>• A starting point for theft verification, not the final word</li>
                    <li>• A service that clearly discloses its data sources and limitations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    What This Service IS NOT
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• An official law enforcement verification system</li>
                    <li>• A guarantee that items marked "SAFE" are not stolen</li>
                    <li>• A replacement for proper documentation and receipts</li>
                    <li>• Legal protection against purchasing stolen goods</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Limitations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Service Limitations</h2>
            <div className="grid gap-8">
              {limitations.map((limitation, index) => (
                <Card key={index} className="bg-secondary/30 border-gray-700">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white text-xl">{limitation.title}</CardTitle>
                      <Badge 
                        variant={limitation.impact === 'CRITICAL' ? 'destructive' : 'default'}
                        className={limitation.impact === 'CRITICAL' ? 'bg-red-500' : 'bg-yellow-500'}
                      >
                        {limitation.impact} IMPACT
                      </Badge>
                    </div>
                    <p className="text-gray-300">{limitation.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-yellow-400 mb-2">Specific Issues:</h4>
                        <ul className="space-y-1">
                          {limitation.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-500/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-400 mb-2">Recommended Mitigation:</h4>
                        <p className="text-blue-200 text-sm">{limitation.mitigation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Best Practices for Safe Purchasing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {bestPractices.map((practice, index) => (
                <Card key={index} className="bg-secondary/30 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">{practice.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {practice.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Transparency Commitment */}
          <Card className="bg-blue-500/10 border-blue-500/50 mb-16">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-3">
                <Shield className="h-6 w-6" />
                Our Commitment to Transparency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-300">
                <p>
                  We believe that being transparent about our limitations builds more trust than making 
                  unrealistic claims. Here's what we commit to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">What We Always Do</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Clearly disclose all data sources and their status</li>
                      <li>• Provide confidence scores with every result</li>
                      <li>• Publish annual transparency reports</li>
                      <li>• Maintain a public process for reporting errors</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">What We Never Do</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Claim 100% accuracy or completeness</li>
                      <li>• Sell or share user search data</li>
                      <li>• Accept payments to alter results</li>
                      <li>• Hide our funding sources or partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Service?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We believe in complete transparency. If you have questions about our limitations, 
              data sources, or proper use guidelines, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/transparency">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  <FileText className="mr-2 h-5 w-5" />
                  Full Transparency Report
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLimitationsPage;