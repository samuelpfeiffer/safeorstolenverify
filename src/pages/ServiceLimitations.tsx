import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ServiceLimitations: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Service Limitations - Safe Or Stolen</title>
        <meta name="description" content="Understanding the limitations and scope of our verification services for stolen item checking." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safeorstolen.com/service-limitations" />
      </Helmet>
      
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