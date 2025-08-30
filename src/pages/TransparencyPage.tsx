import { Shield, Lock, Users, Database, Clock, CheckCircle, AlertTriangle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageSEO } from "@/components/seo/PageSEO";
import { Link } from "react-router-dom";

const transparencyPrinciples = [
  {
    icon: Shield,
    title: "Data Source Transparency",
    description: "We clearly identify all database sources and their limitations",
    details: [
      "Complete list of partner databases published",
      "Real-time status updates for each data source", 
      "Clear coverage limitations disclosed",
      "API response times and reliability metrics"
    ]
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    description: "Your search data is encrypted and never sold or shared",
    details: [
      "End-to-end encryption for all searches",
      "No tracking of user search patterns",
      "GDPR and CCPA compliant data handling",
      "Optional anonymous search modes"
    ]
  },
  {
    icon: Users,
    title: "Community Trust", 
    description: "Built with input from law enforcement and consumer advocates",
    details: [
      "Advisory board includes police investigators",
      "Regular audits by security professionals",
      "Open-source verification methodology",
      "Public incident response procedures"
    ]
  },
  {
    icon: Database,
    title: "Algorithmic Transparency",
    description: "Our AI risk assessment logic is explainable and auditable",
    details: [
      "Confidence score calculation explained",
      "Machine learning bias testing results",
      "Regular algorithm performance reviews",
      "Human oversight for edge cases"
    ]
  }
];

const securityMeasures = [
  {
    title: "Infrastructure Security",
    items: [
      "AWS SOC 2 Type II certified infrastructure",
      "99.9% uptime SLA with real-time monitoring",
      "Distributed denial-of-service (DDoS) protection",
      "Regular penetration testing by third parties"
    ]
  },
  {
    title: "Data Protection",
    items: [
      "256-bit AES encryption for data at rest",
      "TLS 1.3 encryption for data in transit",
      "Zero-knowledge architecture for sensitive searches",
      "Automated data retention policy enforcement"
    ]
  },
  {
    title: "Access Controls",
    items: [
      "Multi-factor authentication for all admin accounts",
      "Role-based access control (RBAC) system",
      "Complete audit logs for all data access",
      "Regular access review and certification"
    ]
  }
];

const businessPractices = [
  {
    title: "Revenue Model Transparency",
    content: "SafeOrStolen operates on a freemium subscription model with limited free searches and paid unlimited access. We do not sell user data or verification results. Funding came from personal investment and we continue seeking partnerships to expand database access."
  },
  {
    title: "Partnership Status & Development", 
    content: "We are actively working to establish verified partnerships with law enforcement and insurance databases. Current integrations include confirmed partners like CheckMEND and BikeIndex, with others in development. We clearly mark the status of each data source."
  },
  {
    title: "Accuracy & False Positive Policy",
    content: "We provide confidence scores because no stolen goods database is perfect. We maintain a public process for reporting false positives and work to improve accuracy. However, users should always verify through multiple sources for high-value items."
  },
  {
    title: "Not a Replacement for Official Verification",
    content: "SafeOrStolen is designed as a risk assessment tool to supplement, not replace, official verification methods. For vehicles, always use official government databases. For valuable items, request purchase documentation and consider professional authentication."
  }
];

const TransparencyPage = () => {
  return (
    <>
      <PageSEO
        title="Transparency & Trust - How SafeOrStolen Works"
        description="Complete transparency report on SafeOrStolen's verification methodology, data sources, privacy practices, and business model. Learn how we protect users and ensure accurate results."
        keywords="transparency report, verification methodology, data privacy, stolen goods verification, trust and safety"
      />
      
      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              Transparency Report 2024
            </div>
            <h1 className="text-4xl font-bold mb-6">Complete Transparency Report</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At SafeOrStolen, transparency isn't just a buzzword—it's fundamental to building trust in the 
              secondhand marketplace. Here's exactly how we operate, what data we access, and how we protect your privacy.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-secondary/30 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-sos-orange mb-2">99.7%</div>
                <p className="text-gray-300">Uptime Reliability</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-sos-orange mb-2">5</div>
                <p className="text-gray-300">Database Partners</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-sos-orange mb-2">&lt;2s</div>
                <p className="text-gray-300">Average Response Time</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-gray-700 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-sos-orange mb-2">0</div>
                <p className="text-gray-300">Data Breaches</p>
              </CardContent>
            </Card>
          </div>

          {/* Transparency Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Transparency Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transparencyPrinciples.map((principle, index) => (
                <Card key={index} className="bg-secondary/30 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <principle.icon className="h-6 w-6 text-sos-orange" />
                      {principle.title}
                    </CardTitle>
                    <p className="text-gray-300">{principle.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {principle.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Measures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Security & Privacy Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityMeasures.map((category, index) => (
                <Card key={index} className="bg-secondary/30 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <Lock className="h-4 w-4 text-sos-orange mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Business Practices & Disclosures</h2>
            <div className="space-y-6">
              {businessPractices.map((practice, index) => (
                <Card key={index} className="bg-secondary/30 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{practice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{practice.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Limitations & Disclaimers */}
          <Card className="bg-red-500/10 border-red-500/50 mb-8">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" />
                Important: This is a Risk Assessment Tool, Not Official Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-300">
                <div className="bg-red-500/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-400 mb-3">⚠️ DO NOT RELY ON THIS SERVICE ALONE</h4>
                  <p className="text-sm mb-3">
                    SafeOrStolen is a risk assessment tool designed to help inform your purchasing decisions. 
                    It is NOT an authoritative verification service and should NOT be your only method of checking if an item is stolen.
                  </p>
                  <p className="text-sm font-semibold text-red-300">
                    Always perform additional due diligence including requesting proof of purchase, 
                    contacting official authorities, and using multiple verification methods for valuable items.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Database Coverage Is Incomplete</h4>
                  <p className="text-sm">
                    No stolen goods database covers 100% of theft incidents. Many thefts are never reported to police, 
                    may be reported to jurisdictions not in our network, or may have significant data entry delays. 
                    A "SAFE" result does not guarantee an item is not stolen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Data Source Partnerships Under Development</h4>
                  <p className="text-sm">
                    While we work to establish partnerships with law enforcement and insurance databases, 
                    many integrations are still in development. We clearly mark the status of each data source 
                    and do not claim partnerships that don't exist.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Use at Your Own Risk</h4>
                  <p className="text-sm">
                    SafeOrStolen provides information to help assess risk, but cannot guarantee accuracy or completeness. 
                    Users are responsible for making their own informed decisions and taking appropriate legal precautions 
                    when purchasing secondhand items.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">When Purchasing High-Value Items</h4>
                  <p className="text-sm">
                    For vehicles, electronics, or other valuable items, always:
                    • Request original purchase receipts or documentation
                    • Use official government databases (like VINCheck for vehicles)  
                    • Consider hiring professional inspectors or appraisers
                    • Meet sellers at police stations for high-value transactions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Limitations */}
          <Card className="bg-yellow-500/10 border-yellow-500/50 mb-16">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" />
                Service Limitations & Proper Use Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">What This Service IS</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• A risk assessment tool that checks available databases</li>
                    <li>• An additional layer of due diligence for informed buyers</li>
                    <li>• A starting point for theft verification, not the final word</li>
                    <li>• A service that clearly discloses its data sources and limitations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">What This Service IS NOT</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• An official law enforcement verification system</li>
                    <li>• A guarantee that items marked "SAFE" are not stolen</li>
                    <li>• A replacement for proper documentation and receipts</li>
                    <li>• Legal protection against purchasing stolen goods</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Recommended Use Cases</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Quick initial screening of serial numbers before purchase</li>
                    <li>• Additional verification alongside official methods</li>
                    <li>• Risk assessment for lower-value secondhand purchases</li>
                    <li>• Educational tool about theft verification importance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Reporting */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Transparency & Accountability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-secondary/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Report Issues or Concerns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Found an error in our verification results? Have privacy concerns? 
                    We're committed to addressing all issues promptly and transparently.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• <strong>False Positives:</strong> Report incorrect theft flags</p>
                    <p>• <strong>Data Errors:</strong> Report database inaccuracies</p>
                    <p>• <strong>Privacy Issues:</strong> Report data handling concerns</p>
                    <p>• <strong>Security Issues:</strong> Report vulnerabilities (bug bounty available)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Annual Transparency Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    We publish annual reports detailing our operations, 
                    accuracy metrics, and improvements made based on user feedback.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• <strong>Accuracy Metrics:</strong> Verification success rates</p>
                    <p>• <strong>Database Updates:</strong> New partnerships and coverage</p>  
                    <p>• <strong>Security Audits:</strong> Third-party security assessments</p>
                    <p>• <strong>User Feedback:</strong> How we've improved based on input</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Practices?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We believe transparency builds trust. If you have questions about how we operate, 
              our data sources, or privacy practices, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  Contact Our Team
                </Button>
              </Link>
              <Link to="/data-sources">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Data Sources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransparencyPage;