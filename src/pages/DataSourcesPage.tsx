import { Shield, Database, CheckCircle, ExternalLink, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageSEO } from "@/components/seo/PageSEO";
import { Link } from "react-router-dom";

const dataSources = [
  {
    name: "CheckMEND Database",
    logo: "/images/partners/checkmend-logo.png",
    type: "Law Enforcement",
    description: "Official stolen goods database used by law enforcement agencies worldwide",
    coverage: "Global",
    verification: "Real-time API",
    website: "https://www.checkmend.com",
    status: "Active",
    records: "50M+ items"
  },
  {
    name: "BikeIndex",
    logo: "/images/partners/bikeindex-logo.svg", 
    type: "Community Registry",
    description: "World's largest bike registry with community-sourced theft reports",
    coverage: "Worldwide",
    verification: "API Integration",
    website: "https://bikeindex.org",
    status: "Active",
    records: "1.2M+ bikes"
  },
  {
    name: "IMEI Database",
    logo: "/images/partners/imei-logo.png",
    type: "Device Registry",
    description: "Global database for tracking lost and stolen mobile devices",
    coverage: "International",
    verification: "Direct Access",
    website: "#",
    status: "Active",
    records: "10M+ devices"
  },
  {
    name: "NICB Database",
    type: "Insurance Claims",
    description: "National Insurance Crime Bureau's comprehensive theft database",
    coverage: "United States",
    verification: "Partner API",
    website: "https://www.nicb.org",
    status: "Integration Planned",
    records: "5M+ claims"
  },
  {
    name: "Police Reports Database",
    type: "Law Enforcement", 
    description: "Aggregated police theft reports from participating jurisdictions",
    coverage: "Multi-State",
    verification: "Secure Gateway",
    website: "#",
    status: "Beta Testing",
    records: "2M+ reports"
  }
];

const trustMetrics = [
  {
    icon: Database,
    title: "99.7% Uptime",
    description: "Enterprise-grade infrastructure ensures reliable access to all databases"
  },
  {
    icon: Clock,
    title: "< 2 Second Response",
    description: "Average verification time across all integrated data sources"
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "256-bit encryption and SOC 2 compliant data handling"
  },
  {
    icon: Users,
    title: "Verified by Law Enforcement",
    description: "Our methodology is reviewed and approved by police departments"
  }
];

const DataSourcesPage = () => {
  return (
    <>
      <PageSEO
        title="Data Sources & Verification Database Partners - SafeOrStolen"
        description="Learn about SafeOrStolen's comprehensive network of law enforcement databases, stolen goods registries, and verification partners ensuring accurate theft detection."
        keywords="stolen goods database, law enforcement database, CheckMEND, BikeIndex, NICB, verification sources"
      />
      
      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sos-orange/20 text-sos-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Transparency Report
            </div>
            <h1 className="text-4xl font-bold mb-6">Our Data Sources & Partners</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SafeOrStolen aggregates data from the world's most comprehensive theft databases 
              to provide accurate, real-time verification services.
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {trustMetrics.map((metric, index) => (
              <Card key={index} className="bg-secondary/30 border-gray-700 text-center">
                <CardContent className="pt-6">
                  <metric.icon className="h-8 w-8 text-sos-orange mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">{metric.title}</h3>
                  <p className="text-gray-400 text-sm">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Sources Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Verified Data Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataSources.map((source, index) => (
                <Card key={index} className="bg-secondary/30 border-gray-700 hover:border-sos-orange/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {source.logo && (
                          <img src={source.logo} alt={source.name} className="h-8 w-8 object-contain" />
                        )}
                        <div>
                          <CardTitle className="text-white">{source.name}</CardTitle>
                          <Badge 
                            variant="outline" 
                            className={`mt-1 ${
                              source.status === 'Active' ? 'border-green-500 text-green-500' : 
                              source.status === 'Beta Testing' ? 'border-yellow-500 text-yellow-500' :
                              'border-gray-500 text-gray-500'
                            }`}
                          >
                            {source.status}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="secondary">{source.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{source.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Coverage:</span>
                        <span className="text-white">{source.coverage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Verification:</span>
                        <span className="text-white">{source.verification}</span>
                      </div>
                      {source.records && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Records:</span>
                          <span className="text-white">{source.records}</span>
                        </div>
                      )}
                    </div>
                    {source.website !== "#" && (
                      <a 
                        href={source.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sos-orange hover:text-sos-orange/80 text-sm"
                      >
                        Visit Official Site
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodology Section */}
          <Card className="bg-secondary/30 border-sos-orange/50 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-sos-orange" />
                Official Database Verification Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Our verification system cross-references multiple authoritative databases simultaneously, 
                providing comprehensive theft detection with industry-leading accuracy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-sos-orange font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Input Processing</h4>
                  <p className="text-gray-400 text-sm">Serial numbers are validated and standardized across all database formats</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-sos-orange font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Multi-Database Query</h4>
                  <p className="text-gray-400 text-sm">Simultaneous searches across all connected law enforcement and partner databases</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-sos-orange font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">AI Risk Assessment</h4>
                  <p className="text-gray-400 text-sm">Advanced algorithms analyze results and generate confidence scores</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-transparent p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">Verification Badges Explained:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <strong className="text-green-400">SAFE:</strong> No matches found in any theft database
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <strong className="text-red-400">STOLEN:</strong> Confirmed match in law enforcement database
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <strong className="text-yellow-400">CAUTION:</strong> Potential risk factors detected
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Verify Your Purchase?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Access our comprehensive database network to verify any serial number, 
              IMEI, or VIN in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  Start Free Verification
                </Button>
              </Link>
              <Link to="/transparency">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn About Our Transparency
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSourcesPage;