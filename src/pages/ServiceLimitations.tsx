import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BotVisibleContent } from '@/components/seo/BotVisibleContent';

export const ServiceLimitations: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Service Limitations - Safe Or Stolen"
        description="Understanding the limitations and scope of our verification services for stolen item checking."
        canonical="/service-limitations"
      />
      
      {/* Bot-visible content for search engines */}
      <BotVisibleContent>
        <h1>Service Limitations</h1>
        <p>Understanding the scope and limitations of our verification services</p>
        
        <h2>Database Coverage</h2>
        <p>Our verification service checks against multiple databases of reported stolen items, but coverage may vary by geographic region and local reporting practices, item type and manufacturer reporting systems, time since theft was reported, and quality and completeness of original theft reports.</p>
        
        <h2>Verification Accuracy</h2>
        <p>While we strive for accuracy, our service has certain limitations. Results are based on available data at time of search. False negatives possible if items not yet reported. Historical data may have gaps or inconsistencies. International databases may have varying update frequencies.</p>
        
        <h2>Legal Considerations</h2>
        <p>Our service is for verification purposes only. Results do not constitute legal advice. Users should verify with local authorities when required. Service does not replace due diligence in transactions. Regional laws and regulations may vary.</p>
        
        <h2>Technical Limitations</h2>
        <p>Technical factors that may affect service availability include network connectivity and database access, scheduled maintenance windows, peak usage periods may affect response times, and mobile device capabilities for scanning features.</p>
        
        <h2>Recommendations</h2>
        <p>For best results and protection: Use our service as one part of your verification process, verify seller identity and purchase documentation, consider local law enforcement resources when available, and trust your instincts if something seems suspicious.</p>
      </BotVisibleContent>
      
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Service Limitations
              </h1>
              <p className="text-lg text-muted-foreground">
                Understanding the scope and limitations of our verification services
              </p>
            </header>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Database Coverage</h2>
                <p className="mb-4">
                  Our verification service checks against multiple databases of reported stolen items, 
                  but coverage may vary by:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Geographic region and local reporting practices</li>
                  <li>Item type and manufacturer reporting systems</li>
                  <li>Time since theft was reported</li>
                  <li>Quality and completeness of original theft reports</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Verification Accuracy</h2>
                <p className="mb-4">
                  While we strive for accuracy, our service has certain limitations:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Results are based on available data at time of search</li>
                  <li>False negatives possible if items not yet reported</li>
                  <li>Historical data may have gaps or inconsistencies</li>
                  <li>International databases may have varying update frequencies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Legal Considerations</h2>
                <p className="mb-4">
                  Our service is for verification purposes only:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Results do not constitute legal advice</li>
                  <li>Users should verify with local authorities when required</li>
                  <li>Service does not replace due diligence in transactions</li>
                  <li>Regional laws and regulations may vary</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technical Limitations</h2>
                <p className="mb-4">
                  Technical factors that may affect service availability:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Network connectivity and database access</li>
                  <li>Scheduled maintenance windows</li>
                  <li>Peak usage periods may affect response times</li>
                  <li>Mobile device capabilities for scanning features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
                <p className="mb-4">
                  For best results and protection:
                </p>
                <ul className="list-disc pl-6">
                  <li>Use our service as one part of your verification process</li>
                  <li>Verify seller identity and purchase documentation</li>
                  <li>Consider local law enforcement resources when available</li>
                  <li>Trust your instincts if something seems suspicious</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ServiceLimitations;