import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const DisclaimerPage: React.FC = () => {
  return (
    <>
      <PageSEO 
        title="Disclaimer - Safe or Stolen"
        description="Important disclaimers and limitations regarding Safe or Stolen verification services."
        noIndex={false}
      />
      
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Disclaimer</CardTitle>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">Service Limitations</h2>
                <p>
                  Safe or Stolen provides verification services based on available data sources and databases. 
                  While we strive for accuracy, our service has certain limitations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verification results are based on available database information at the time of search</li>
                  <li>Not all stolen items may be reported to databases we access</li>
                  <li>A "clean" result does not guarantee an item is not stolen</li>
                  <li>Results should be used as one factor in purchasing decisions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">No Warranty</h2>
                <p>
                  Safe or Stolen provides its services "as is" without warranty of any kind, either express or implied. 
                  We make no warranties about the accuracy, reliability, completeness, or timeliness of our verification results.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                <p>
                  Safe or Stolen, its officers, directors, employees, and agents shall not be liable for any direct, 
                  indirect, incidental, special, consequential, or punitive damages arising from your use of our services, 
                  including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">User Responsibility</h2>
                <p>Users are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using verification results responsibly and in conjunction with other due diligence</li>
                  <li>Reporting suspected stolen goods to appropriate law enforcement</li>
                  <li>Complying with all applicable laws when buying or selling items</li>
                  <li>Verifying seller legitimacy through appropriate channels</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Data Sources</h2>
                <p>
                  Our verification results are compiled from various sources including law enforcement databases, 
                  insurance company records, and other legitimate sources. The availability and accuracy of this 
                  data may vary by jurisdiction and reporting agency.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Legal Advice</h2>
                <p>
                  Safe or Stolen does not provide legal advice. If you have concerns about the legality of a 
                  transaction or the status of an item, consult with appropriate legal counsel or law enforcement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Updates</h2>
                <p>
                  This disclaimer may be updated from time to time. Continued use of our services constitutes 
                  acceptance of any changes to this disclaimer.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DisclaimerPage;