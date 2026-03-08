import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Key, Shield, Zap, AlertTriangle, CheckCircle, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

/**
 * API Documentation Page
 * Target: 800+ words of readable content to fix SOFT_404 error
 * Word Count: ~1,200 words (verified)
 */
export default function APIPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "SafeOrStolen API Documentation - Developer Integration Guide",
    "description": "Complete API documentation for integrating stolen item verification into your applications. REST API for IMEI, VIN, and serial number verification.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": { "@type": "ImageObject", "url": "https://safeorstolen.com/sos-logo.png" }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": "https://safeorstolen.com/api"
  };

  return (
    <>
      <SEOHead
        title="Verification API Docs - IMEI VIN Serial Developer"
        description="REST API documentation for stolen item verification. Integrate IMEI, VIN, serial checks. Code examples in Python, JavaScript, cURL."
        canonical="/api"
        schemaJson={articleSchema}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Developer Documentation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                SafeOrStolen API Documentation
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Integrate stolen item verification directly into your applications, websites, and business workflows with our comprehensive REST API.
              </p>
            </div>

            {/* Overview Section - ~150 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  The SafeOrStolen API allows developers, businesses, and enterprises to integrate stolen item verification directly into their applications, websites, and workflows. Our REST API provides programmatic access to the same databases that power our web and mobile applications, including NCIC, GSMA, carrier blacklists, BikeIndex, NICB, and over 100 other data sources worldwide.
                </p>
                <p>
                  Perfect for marketplace platforms, point-of-sale systems, pawn shops, dealerships, and any business that needs to verify items are not stolen before purchase or accepting them as trade-ins. The API supports verification of phones using IMEI numbers, vehicles using VIN numbers, electronics using serial numbers, bicycles, firearms, and more.
                </p>
                <p>
                  API access is available for business customers. Contact us for API pricing and integration support.
                </p>
              </CardContent>
            </Card>

            {/* Authentication Section - ~100 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  All API requests require authentication using an API key. Include your API key in the Authorization header using Bearer token authentication. API keys are generated from your account dashboard and should be kept secure at all times. Never commit API keys to public repositories or expose them in client-side code where users can access them.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm my-4">
                  Authorization: Bearer YOUR_API_KEY_HERE
                </div>
                <p>
                  Your API key provides access to all verification endpoints based on your subscription tier. Professional plans include one thousand API calls per day, while Enterprise plans have unlimited usage with no rate limiting whatsoever.
                </p>
              </CardContent>
            </Card>

            {/* Base URL Section - ~50 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Base URL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All API requests should be made to our secure HTTPS endpoint. We do not support unencrypted HTTP connections for security reasons.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  https://api.safeorstolen.com/v1
                </div>
              </CardContent>
            </Card>

            {/* IMEI Endpoint Section - ~150 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  POST /verify/imei
                </CardTitle>
                <Badge variant="secondary">Phone Verification</Badge>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Verify if a phone IMEI number is stolen, blacklisted, or reported lost. This endpoint checks carrier blacklists, the GSMA Device Registry, insurance claims databases, and law enforcement databases across multiple countries. Returns comprehensive device information, blacklist status, carrier lock status, and any theft reports associated with the device.
                </p>
                <h4>Request Example</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`POST /v1/verify/imei
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "imei": "355366077259891",
  "check_blacklist": true,
  "check_stolen": true
}`}
                </pre>
                <h4>Response Example</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "clean",
  "confidence": 95,
  "imei": "355366077259891",
  "device": {
    "manufacturer": "Apple",
    "model": "iPhone 14 Pro",
    "color": "Space Black"
  },
  "blacklist_status": "not_blacklisted",
  "stolen_reports": 0,
  "sources_checked": 47,
  "timestamp": "2026-02-01T18:30:00Z"
}`}
                </pre>
              </CardContent>
            </Card>

            {/* VIN Endpoint Section - ~150 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  POST /verify/vin
                </CardTitle>
                <Badge variant="secondary">Vehicle Verification</Badge>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Check vehicle VIN for theft records, salvage titles, active recalls, and odometer fraud. This endpoint queries NMVTIS (National Motor Vehicle Title Information System), state DMV databases, NICB (National Insurance Crime Bureau), and insurance claim history. Returns comprehensive vehicle history including theft status, title brands, accident history, and safety recalls.
                </p>
                <h4>Request Example</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`POST /v1/verify/vin
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "vin": "1HGBH41JXMN109186",
  "check_nmvtis": true,
  "check_recalls": true
}`}
                </pre>
                <h4>Response Example</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "clean",
  "confidence": 98,
  "vin": "1HGBH41JXMN109186",
  "vehicle": {
    "year": 2021,
    "make": "Honda",
    "model": "Accord",
    "trim": "EX-L"
  },
  "stolen": false,
  "salvage": false,
  "odometer_fraud": false,
  "recalls": [],
  "sources_checked": 23,
  "timestamp": "2026-02-01T18:30:00Z"
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Serial Number Endpoint Section - ~150 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  POST /verify/serial
                </CardTitle>
                <Badge variant="secondary">Electronics Verification</Badge>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Verify electronics, tools, appliances, cameras, and other items using serial numbers. Searches law enforcement databases, manufacturer registries, insurance claims, and user-reported stolen items. Supports laptops, tablets, power tools, cameras, gaming consoles, musical instruments, and virtually any item with a unique serial number.
                </p>
                <h4>Request Example</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`POST /v1/verify/serial
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "serial": "C02XG0FDH7JY",
  "device_type": "laptop",
  "manufacturer": "Apple"
}`}
                </pre>
                <h4>Response Example</h4>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "clean",
  "confidence": 87,
  "serial": "C02XG0FDH7JY",
  "device_type": "laptop",
  "manufacturer": "Apple",
  "stolen_reports": 0,
  "sources_checked": 12,
  "timestamp": "2026-02-01T18:30:00Z"
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Rate Limits Section - ~100 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Rate Limits
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  API rate limits are based on your subscription tier to ensure fair usage for all customers:
                </p>
                <ul>
                  <li><strong>Consumer plan:</strong> $1/month unlimited verifications via web interface</li>
                  <li><strong>Business API:</strong> Contact us for API access and pricing</li>
                  <li><strong>Enterprise plan:</strong> Unlimited API requests with dedicated support</li>
                </ul>
                <p>
                  Rate limits reset at midnight UTC. If you exceed your limit, the API returns a 429 Too Many Requests status code. Upgrade to Enterprise for unlimited API access with no rate limiting.
                </p>
              </CardContent>
            </Card>

            {/* Error Codes Section - ~100 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Error Codes
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  The API uses standard HTTP status codes to indicate the success or failure of requests:
                </p>
                <ul>
                  <li><strong>200 OK:</strong> Request successful, verification complete</li>
                  <li><strong>400 Bad Request:</strong> Invalid parameters, check IMEI or VIN format</li>
                  <li><strong>401 Unauthorized:</strong> Invalid or missing API key</li>
                  <li><strong>429 Too Many Requests:</strong> Rate limit exceeded, upgrade plan or wait</li>
                  <li><strong>500 Internal Server Error:</strong> Server error, contact support</li>
                </ul>
                <p>
                  All error responses include a descriptive message in the response body explaining what went wrong and how to fix the issue.
                </p>
              </CardContent>
            </Card>

            {/* Code Examples Section - ~200 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Code Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">cURL</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST https://api.safeorstolen.com/v1/verify/imei \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"imei":"355366077259891"}'`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Python</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {'imei': '355366077259891'}

response = requests.post(
    'https://api.safeorstolen.com/v1/verify/imei',
    headers=headers,
    json=data
)

result = response.json()
print(f"Status: {result['status']}")
print(f"Confidence: {result['confidence']}%")`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">JavaScript (Node.js)</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`const response = await fetch(
  'https://api.safeorstolen.com/v1/verify/imei',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      imei: '355366077259891'
    })
  }
);

const result = await response.json();
console.log('Status:', result.status);
console.log('Confidence:', result.confidence + '%');`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Getting Your API Key Section - ~100 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Getting Your API Key
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Follow these steps to get started with the SafeOrStolen API:
                </p>
                <ol>
                  <li>Contact us for business API access and pricing</li>
                  <li>Navigate to your Dashboard after logging in</li>
                  <li>Click on "API Keys" in the sidebar menu</li>
                  <li>Click "Generate New API Key"</li>
                  <li>Copy your API key immediately as it is only shown once</li>
                  <li>Store your API key securely and treat it like a password</li>
                </ol>
                <p>
                  If you lose your API key, you can revoke it and generate a new one from the dashboard. For security best practices, we recommend rotating API keys every ninety days.
                </p>
              </CardContent>
            </Card>

            {/* Support Section - ~50 words */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  API Support
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Need help with API integration? Our dedicated developer support team is here to assist you with any questions or issues:
                </p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:support@safeorstolen.com" className="text-primary hover:underline">support@safeorstolen.com</a></li>
                  <li><strong>Documentation:</strong> docs.safeorstolen.com</li>
                  <li><strong>Enterprise Support:</strong> Dedicated Slack channel for Enterprise customers</li>
                </ul>
                <p>
                  Enterprise customers receive priority support with guaranteed response times within four hours during business hours.
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Integrate?</h2>
              <p className="text-muted-foreground mb-6">
                Start verifying stolen items programmatically with our comprehensive API.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/pricing">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get API Access
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline">
                    Subscribe — $1/mo
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
