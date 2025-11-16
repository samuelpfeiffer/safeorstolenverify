import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { FileText, TrendingUp, Users, Shield, Database, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TransparencyPage: React.FC = () => {
  const currentQuarter = 'Q4 2024';
  
  return (
    <>
      <PageSEO
        title="Transparency Report - Safe or Stolen | Platform Statistics & Operations"
        description="View our quarterly transparency report including platform statistics, data handling practices, law enforcement cooperation, and operational details."
        canonical="/transparency"
      />

      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/20 border-white/30 text-white">
              <FileText className="h-4 w-4 mr-2" />
              Updated {currentQuarter}
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Transparency Report
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete visibility into our operations, data practices, and platform statistics
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 max-w-6xl">
          {/* Platform Statistics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Platform Statistics ({currentQuarter})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">25,000+</div>
                  <div className="text-sm text-muted-foreground">Total Verifications</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98.7%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operational Status */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Current Operational Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Web Platform Status</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully operational and accessible 24/7. Average uptime: 99.9%
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Operational
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Verification Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Active verification for IMEI, VIN, and serial numbers through multiple data sources
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Active
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Mobile Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Currently in development. iOS and Android apps scheduled for release in 2025
                    </p>
                    <Badge className="mt-2 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                      In Development
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Law Enforcement Partnerships</h3>
                    <p className="text-sm text-muted-foreground">
                      Actively establishing partnerships with Arizona law enforcement agencies. 
                      Initial pilot program with Peoria PD in negotiation.
                    </p>
                    <Badge className="mt-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      In Progress
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Handling */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-6 w-6" />
                Data Handling & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">What We Collect</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• IMEI, VIN, or serial numbers submitted for verification</li>
                  <li>• Search timestamps and results</li>
                  <li>• Email addresses (optional, for account holders)</li>
                  <li>• Basic analytics (page views, device type)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What We DON'T Collect</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Personal identification documents</li>
                  <li>• Financial information</li>
                  <li>• Location tracking beyond IP-based region</li>
                  <li>• Social media or browsing history</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Data Retention</h3>
                <p className="text-sm text-muted-foreground">
                  Search queries are retained for 90 days unless user opts for account-based history. 
                  All data can be deleted upon request per GDPR/CCPA requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Law Enforcement Requests */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Law Enforcement Cooperation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Official Requests Received</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance with Valid Warrants</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                We cooperate fully with law enforcement when presented with valid legal process. 
                All requests are reviewed by our legal counsel to ensure compliance with applicable laws.
              </p>
            </CardContent>
          </Card>

          {/* Commitment to Transparency */}
          <Card>
            <CardHeader>
              <CardTitle>Our Commitment to Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We believe in complete transparency about our operations, data practices, and business 
                relationships. This report is updated quarterly and provides full visibility into how 
                we operate and protect user privacy.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Questions or Concerns?</p>
                <p className="text-sm text-muted-foreground">
                  Contact our transparency officer at: transparency@safeorstolen.com
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default TransparencyPage;
