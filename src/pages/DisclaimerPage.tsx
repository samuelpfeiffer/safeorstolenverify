import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { AlertTriangle, Info, Scale, Shield } from 'lucide-react';

const DisclaimerPage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <>
      <PageSEO 
        title="Disclaimer - SafeOrStolen Legal Notice & Service Limitations"
        description="Important legal disclaimer about SafeOrStolen's stolen goods verification service. Understand service limitations, accuracy information, and user responsibilities when using our platform."
        canonical="/disclaimer"
        keywords="disclaimer, legal notice, service limitations, verification accuracy, stolen goods database disclaimer"
      />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>SafeOrStolen Service Disclaimer</h1>
          <p>
            SafeOrStolen provides stolen goods verification services to help users verify the legitimacy 
            of items before purchase. Our service checks IMEI numbers, VIN numbers, and serial numbers 
            against multiple stolen property databases.
          </p>
          
          <h2>Service Limitations</h2>
          <p>
            While we strive for accuracy, verification results depend on available database information. 
            We cannot guarantee 100% accuracy. Items not reported stolen may still have issues. Always 
            request proof of purchase and verify seller identity.
          </p>
          
          <h2>No Warranty or Guarantee</h2>
          <p>
            SafeOrStolen makes no warranties about accuracy, reliability, or completeness of information. 
            Our service is provided "as is" without any express or implied warranties. Users assume all 
            risk when using verification results to make purchase decisions.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            SafeOrStolen and its affiliates shall not be liable for any direct, indirect, incidental, 
            special, consequential, or punitive damages resulting from use of our service. This includes 
            damages from purchasing stolen items, financial losses, or legal issues.
          </p>
          
          <h2>User Responsibility</h2>
          <p>
            Users are solely responsible for their purchase decisions. Verification results are informational 
            tools only. Always conduct due diligence, request documentation, and follow local laws when 
            buying used items. Contact law enforcement if you suspect stolen goods.
          </p>
          
          <h2>Database Information</h2>
          <p>
            Our databases include law enforcement records, insurance company data, manufacturer reports, 
            and user submissions. Not all stolen items are reported. Some databases may have delays or 
            missing information. We rely on third-party data sources.
          </p>
          
          <h2>No Legal Advice</h2>
          <p>
            Information on SafeOrStolen does not constitute legal advice. Consult with legal professionals 
            regarding stolen property laws, liability issues, or legal disputes. Laws vary by jurisdiction.
          </p>
          
          <h2>Changes to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our service at any time 
            without notice. This disclaimer may be updated periodically. Continued use constitutes acceptance 
            of changes.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            For questions about this disclaimer: support@safeorstolen.com<br/>
            Phoenix, Arizona<br/>
            Phone: (206) 249-2203
          </p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />
        </div>

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6">
                <Scale className="mr-2 h-4 w-4" />
                Legal Notice
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Service Disclaimer
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Important information about the limitations and proper use of SafeOrStolen's verification services
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Service Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    While SafeOrStolen strives to provide accurate verification results, our service has inherent 
                    limitations that users must understand:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Verification results depend entirely on available database information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Not all stolen items are reported to databases we access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Database information may be incomplete, delayed, or contain errors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>A "safe" result does not guarantee an item is legitimate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Services may be temporarily unavailable due to maintenance or technical issues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    No Warranty or Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    SafeOrStolen provides all services on an "AS IS" and "AS AVAILABLE" basis without any 
                    warranties, express or implied, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Warranties of merchantability or fitness for a particular purpose</li>
                    <li>• Warranties regarding accuracy, reliability, or completeness of information</li>
                    <li>• Warranties that the service will be uninterrupted or error-free</li>
                    <li>• Warranties regarding the security of data transmission</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>IMPORTANT:</strong> SafeOrStolen, its owners, employees, and affiliates shall NOT 
                    be liable for any damages arising from use of our service, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Financial Damages:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Loss of money from bad purchases</li>
                        <li>• Item confiscation by authorities</li>
                        <li>• Business losses or lost profits</li>
                        <li>• Transaction costs and fees</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Other Damages:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Legal fees or court costs</li>
                        <li>• Reputation or business damage</li>
                        <li>• Data loss or corruption</li>
                        <li>• Any consequential damages</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-primary" />
                    User Responsibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Users are solely responsible for their purchase decisions and must:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Conduct additional due diligence beyond our verification service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Request and verify proof of purchase from sellers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Meet sellers in safe, public locations when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Verify seller identity and contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Report suspicious items to law enforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Understand and comply with local stolen property laws</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Database Information Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our verification service aggregates data from multiple third-party sources:
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Law Enforcement:</strong> Police reports, FBI databases, NCIC records, and 
                      international crime databases (subject to availability and access permissions)
                    </p>
                    <p>
                      <strong>Insurance Companies:</strong> NICB data, insurance claim reports, and industry 
                      theft databases
                    </p>
                    <p>
                      <strong>Manufacturers:</strong> Warranty registration systems, theft reports, and 
                      serial number tracking
                    </p>
                    <p>
                      <strong>Carriers & Networks:</strong> IMEI blacklists, carrier databases, and device 
                      activation records
                    </p>
                    <p>
                      <strong>User Reports:</strong> Community-submitted theft reports (verified when possible)
                    </p>
                    <p className="mt-4 text-xs">
                      <strong>Note:</strong> We do not control these third-party databases and cannot guarantee 
                      their accuracy, completeness, or timeliness. Database access may change without notice.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>No Legal Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Information provided by SafeOrStolen does not constitute legal advice. Users should 
                    consult with qualified legal professionals regarding:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• Stolen property laws in their jurisdiction</li>
                    <li>• Liability for purchasing stolen goods</li>
                    <li>• Criminal or civil legal proceedings</li>
                    <li>• Reporting requirements and obligations</li>
                    <li>• Rights and remedies in disputes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to Service and Disclaimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    SafeOrStolen reserves the right to modify, suspend, or discontinue any aspect of our 
                    service at any time without prior notice. This disclaimer may be updated periodically. 
                    Your continued use of the service after changes constitutes acceptance of the updated 
                    disclaimer. Check this page regularly for updates.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-primary" />
                    Questions About This Disclaimer?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have questions or concerns about this disclaimer or our services:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> support@safeorstolen.com</p>
                    <p><strong>Phone:</strong> (206) 249-2203</p>
                    <p><strong>Location:</strong> Phoenix, Arizona</p>
                    <p><strong>Response Time:</strong> We respond to inquiries within 2 business days</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DisclaimerPage;
