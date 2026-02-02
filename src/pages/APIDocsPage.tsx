import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Shield, Zap, Lock, Server, AlertTriangle, Check, Copy, Terminal } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

/**
 * API Documentation Page - Comprehensive 800+ word API documentation
 * Addresses SOFT_404 error by providing substantial content
 */
const APIDocsPage = () => {
  const apiSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "SafeOrStolen API Documentation - Stolen Item Verification API",
    "description": "Complete API documentation for integrating stolen item verification into your platform. IMEI, VIN, and serial number verification endpoints.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2025-01-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does SafeOrStolen API access cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen API pricing is based on usage tiers. Free tier includes 10 API calls/day. Starter ($29/month) includes 100 calls/day. Pro ($99/month) includes 1,000 calls/day. Enterprise offers unlimited calls with custom pricing. All paid tiers include priority support."
        }
      },
      {
        "@type": "Question",
        "name": "What databases does the SafeOrStolen API check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our API queries 50+ databases including law enforcement stolen property registries, insurance claim databases, carrier blacklists (IMEI), NICB and NMVTIS (VIN), and user-reported theft registries. Results are aggregated and returned in real-time."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are SafeOrStolen API responses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average API response time is under 500ms for IMEI checks and under 1 second for VIN checks. 99.9% of requests complete within 3 seconds. Our infrastructure is designed for high availability with 99.95% uptime SLA."
        }
      },
      {
        "@type": "Question",
        "name": "Do you store verification data from API requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We retain API request logs for 30 days for debugging purposes. Verification results are cached for 24 hours to improve performance. We do not sell or share API request data. Enterprise customers can request custom data retention policies."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the SafeOrStolen API for commercial purposes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our API is designed for commercial integration. Common use cases include marketplace verification (eBay, Facebook sellers), pawn shop due diligence, insurance claim verification, and dealership inventory checks. Contact us for enterprise pricing."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen API Documentation - Stolen Item Verification API"
        description="Integrate stolen item verification into your platform. RESTful API for IMEI, VIN, serial number checks. 500ms response time, 50M+ database. Free tier available."
        keywords="stolen item api, imei verification api, vin check api, serial number api, theft verification api"
        canonical="/api"
        structuredData={[apiSchema, faqSchema]}
      />
      <TopNavigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Code className="w-4 h-4 mr-2" />
                Developer API
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                SafeOrStolen API Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Integrate stolen item verification directly into your marketplace, POS system, or application. 
                Our RESTful API provides instant verification against 50+ databases with sub-second response times.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/pricing">Get API Access</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#endpoints">View Endpoints</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">API Overview</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  The SafeOrStolen API enables developers to integrate stolen item verification into any platform. 
                  Whether you're building a marketplace, inventory management system, or consumer application, 
                  our API provides the same comprehensive database checks used by law enforcement and insurance companies.
                </p>
                
                <p className="mb-6">
                  Our RESTful API supports verification of IMEI numbers (phones, tablets), VIN numbers (vehicles, motorcycles, boats), 
                  and general serial numbers (electronics, tools, bikes, firearms). Each verification query searches our 
                  50M+ item database aggregated from law enforcement agencies, insurance companies, carrier blacklists, 
                  and user-reported thefts across all 50 US states.
                </p>

                <p>
                  The API is designed for high-volume commercial use with 99.95% uptime SLA, average response times 
                  under 500ms, and rate limiting built to handle burst traffic patterns common in marketplace integrations.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Zap className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold">500ms Response</h3>
                    <p className="text-sm text-muted-foreground">Average API latency</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Server className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold">99.95% Uptime</h3>
                    <p className="text-sm text-muted-foreground">Enterprise SLA</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold">50M+ Database</h3>
                    <p className="text-sm text-muted-foreground">Verified records</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Lock className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold">TLS 1.3</h3>
                    <p className="text-sm text-muted-foreground">End-to-end encryption</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Lock className="w-8 h-8 text-primary" />
                Authentication
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>
                  All API requests require authentication via API key. Include your API key in the 
                  <code className="bg-muted px-2 py-1 rounded">Authorization</code> header using the Bearer token format.
                  API keys are generated from your dashboard and can be rotated at any time.
                </p>
              </div>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Request Header Example
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST https://api.safeorstolen.com/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"identifier": "353456789012345", "type": "imei"}'`}
                  </pre>
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Keep Your API Key Secure</p>
                  <p className="text-sm text-muted-foreground">
                    Never expose your API key in client-side code. Make API calls from your backend server only.
                    If you suspect your key has been compromised, rotate it immediately from your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoints Section */}
        <section id="endpoints" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                API Endpoints
              </h2>

              <Tabs defaultValue="imei" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="imei">IMEI Verification</TabsTrigger>
                  <TabsTrigger value="vin">VIN Verification</TabsTrigger>
                  <TabsTrigger value="serial">Serial Number</TabsTrigger>
                </TabsList>

                <TabsContent value="imei">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-500">POST</Badge>
                        <code className="text-lg font-mono">/v1/verify/imei</code>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Verify a phone or tablet IMEI against carrier blacklists, law enforcement databases, 
                        and insurance records. Returns stolen status, blacklist status, and device information.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Request Body</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "imei": "353456789012345",
  "include_device_info": true  // optional, default: true
}`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Example Response</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "success",
  "verification": {
    "imei": "353456789012345",
    "stolen_status": "CLEAR",
    "blacklist_status": "NOT_BLACKLISTED",
    "confidence": 0.98,
    "checked_at": "2025-01-20T12:00:00Z"
  },
  "device": {
    "brand": "Apple",
    "model": "iPhone 15 Pro",
    "type": "smartphone"
  }
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="vin">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-500">POST</Badge>
                        <code className="text-lg font-mono">/v1/verify/vin</code>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Verify a vehicle VIN against NICB, NMVTIS, law enforcement databases, and insurance records. 
                        Returns stolen status, salvage title status, and basic vehicle information.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Request Body</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "vin": "1HGBH41JXMN109186",
  "include_vehicle_info": true  // optional, default: true
}`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Example Response</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "success",
  "verification": {
    "vin": "1HGBH41JXMN109186",
    "stolen_status": "CLEAR",
    "salvage_status": "CLEAN_TITLE",
    "confidence": 0.99,
    "checked_at": "2025-01-20T12:00:00Z"
  },
  "vehicle": {
    "year": 2021,
    "make": "Honda",
    "model": "Accord",
    "type": "sedan"
  }
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="serial">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-500">POST</Badge>
                        <code className="text-lg font-mono">/v1/verify/serial</code>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Verify any serial number (electronics, tools, bikes, firearms) against law enforcement 
                        and user-reported theft databases. Specify the item type for optimized database queries.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Request Body</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "serial": "C02X12345678",
  "item_type": "laptop",  // laptop, bike, tool, firearm, other
  "brand": "Apple"        // optional, improves accuracy
}`}
                        </pre>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Example Response</h4>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "success",
  "verification": {
    "serial": "C02X12345678",
    "stolen_status": "CLEAR",
    "confidence": 0.85,
    "checked_at": "2025-01-20T12:00:00Z",
    "databases_checked": 12
  }
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Rate Limits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Rate Limits</h2>
              
              <p className="text-muted-foreground mb-8">
                API rate limits are enforced per API key on a rolling 24-hour window. 
                Exceeding your limit returns HTTP 429 with a Retry-After header.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left font-semibold border-b">Plan</th>
                      <th className="p-4 text-center font-semibold border-b">Daily Limit</th>
                      <th className="p-4 text-center font-semibold border-b">Burst Rate</th>
                      <th className="p-4 text-center font-semibold border-b">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b">Free Tier</td>
                      <td className="p-4 text-center border-b">10 requests/day</td>
                      <td className="p-4 text-center border-b">1 req/sec</td>
                      <td className="p-4 text-center border-b">$0</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="p-4 border-b">Starter</td>
                      <td className="p-4 text-center border-b">100 requests/day</td>
                      <td className="p-4 text-center border-b">5 req/sec</td>
                      <td className="p-4 text-center border-b">$29/month</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b">Pro</td>
                      <td className="p-4 text-center border-b">1,000 requests/day</td>
                      <td className="p-4 text-center border-b">20 req/sec</td>
                      <td className="p-4 text-center border-b">$99/month</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="p-4 border-b font-semibold">Enterprise</td>
                      <td className="p-4 text-center border-b">Unlimited</td>
                      <td className="p-4 text-center border-b">Custom</td>
                      <td className="p-4 text-center border-b">Contact Us</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Error Codes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Error Codes</h2>
              
              <div className="space-y-4">
                {[
                  { code: '200', status: 'OK', desc: 'Request successful, verification result returned', color: 'bg-green-500' },
                  { code: '400', status: 'Bad Request', desc: 'Invalid identifier format (IMEI must be 15 digits, VIN must be 17 characters)', color: 'bg-amber-500' },
                  { code: '401', status: 'Unauthorized', desc: 'Missing or invalid API key', color: 'bg-red-500' },
                  { code: '429', status: 'Rate Limited', desc: 'Daily or burst rate limit exceeded. Check Retry-After header.', color: 'bg-amber-500' },
                  { code: '500', status: 'Server Error', desc: 'Internal server error. Retry with exponential backoff.', color: 'bg-red-500' },
                ].map((error) => (
                  <Card key={error.code}>
                    <CardContent className="flex items-center gap-4 py-4">
                      <Badge className={error.color}>{error.code}</Badge>
                      <div>
                        <span className="font-semibold">{error.status}</span>
                        <span className="text-muted-foreground ml-3">{error.desc}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">API FAQ</h2>
              
              <div className="space-y-6">
                {[
                  { q: "How much does API access cost?", a: "Free tier includes 10 API calls/day. Starter ($29/month) includes 100 calls/day. Pro ($99/month) includes 1,000 calls/day. Enterprise offers unlimited calls with custom pricing." },
                  { q: "What databases does the API check?", a: "Our API queries 50+ databases including law enforcement stolen property registries, insurance claim databases, carrier blacklists (IMEI), NICB and NMVTIS (VIN), and user-reported theft registries." },
                  { q: "How fast are API responses?", a: "Average response time is under 500ms for IMEI checks and under 1 second for VIN checks. 99.9% of requests complete within 3 seconds." },
                  { q: "Do you store verification data?", a: "We retain API request logs for 30 days for debugging. Verification results are cached for 24 hours. We do not sell or share API request data." },
                  { q: "Can I use this for commercial purposes?", a: "Yes! Our API is designed for commercial integration including marketplaces, pawn shops, insurance verification, and dealership inventory checks." },
                ].map((faq, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Integrate?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get your API key today and start verifying items in minutes. 
              Free tier available for development and testing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/pricing">Get API Access</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/for-businesses">Enterprise Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default APIDocsPage;
