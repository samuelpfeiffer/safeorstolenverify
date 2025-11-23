import { PageSEO } from '@/components/seo/PageSEO';

export default function APIDocsPage() {
  return (
    <>
      <PageSEO
        title="API Documentation | SafeOrStolen Verification API"
        description="Integrate stolen item verification into your platform with SafeOrStolen API. Check IMEI, VIN, and serial numbers programmatically with RESTful API access."
        keywords="verification API, IMEI API, VIN API, stolen item checker API, REST API documentation"
        canonical="/api-docs"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">API Documentation</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">RESTful API Access</h2>
          <p className="text-lg mb-4">
            Integrate SafeOrStolen verification directly into your marketplace, e-commerce platform, or business application with our simple REST API.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Supported Verification Types</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>IMEI / ESN checks for mobile devices</li>
            <li>VIN verification for vehicles</li>
            <li>Serial number lookups for electronics</li>
            <li>Batch verification for bulk checks</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">API Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Real-time verification results in milliseconds</li>
            <li>Rate limiting and usage tracking</li>
            <li>Webhook support for asynchronous checks</li>
            <li>Comprehensive error handling</li>
            <li>JSON responses with detailed metadata</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-lg mb-4">
            Contact our sales team to request API access. We offer flexible pricing plans based on your verification volume needs.
          </p>
        </section>
      </div>
    </>
  );
}
