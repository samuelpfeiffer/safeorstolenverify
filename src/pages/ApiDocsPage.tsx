import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, Copy, ExternalLink, Shield, Zap } from 'lucide-react';

const ApiDocsPage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <PageSEO
        title="API Documentation - Safe Or Stolen Developer Portal"
        description="Complete API documentation for Safe Or Stolen verification services. Integrate stolen goods verification into your platform with our enterprise APIs."
        keywords="API documentation, verification API, stolen goods API, IMEI API, VIN API, serial number API, enterprise integration"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Code className="w-4 h-4 mr-2" />
                  Enterprise API v2.0
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Developer Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Integrate powerful stolen goods verification into your platform. 
                Real-time verification across IMEI, VIN, serial numbers, and firearms databases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Get API Key
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-primary" />
                      Fast & Reliable
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Sub-second response times with 99.9% uptime SLA</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Secure by Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Enterprise-grade security with API key authentication</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2 text-primary" />
                      RESTful API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Clean, predictable REST API with JSON responses</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="quickstart" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                  <TabsTrigger value="authentication">Auth</TabsTrigger>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="quickstart" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">1. Get Your API Key</h4>
                        <p className="text-muted-foreground mb-4">Sign up for an enterprise account to receive your API key.</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          API_KEY=sos_live_1234567890abcdef...
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">2. Make Your First Request</h4>
                        <div className="bg-muted p-4 rounded-lg">
                          <pre className="text-sm overflow-x-auto">
{`curl -X POST https://api.safeorstolen.com/v2/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "identifier": "356123456789012",
    "type": "imei"
  }'`}
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2"
                            onClick={() => copyToClipboard(`curl -X POST https://api.safeorstolen.com/v2/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "identifier": "356123456789012",
    "type": "imei"
  }'`)}
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="authentication" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Authentication</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>All API requests require authentication using your API key in the Authorization header:</p>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        Authorization: Bearer sos_live_1234567890abcdef...
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">API Key Types</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• <strong>Test keys:</strong> sos_test_... for development</li>
                          <li>• <strong>Live keys:</strong> sos_live_... for production</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="endpoints" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Endpoints</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Single Verification */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">POST</Badge>
                            <code className="font-mono">/v2/verify</code>
                          </div>
                          <p className="text-muted-foreground mb-4">Verify a single item across all databases</p>
                          
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium mb-2">Request Body</h5>
                              <div className="bg-muted p-4 rounded-lg">
                                <pre className="text-sm overflow-x-auto">
{`{
  "identifier": "356123456789012",
  "type": "imei",
  "metadata": {
    "brand": "Apple",
    "model": "iPhone 14"
  }
}`}
                                </pre>
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-medium mb-2">Response</h5>
                              <div className="bg-muted p-4 rounded-lg">
                                <pre className="text-sm overflow-x-auto">
{`{
  "verification_id": "ver_1234567890",
  "status": "safe",
  "confidence": 0.98,
  "sources": [
    {
      "name": "CheckMend",
      "status": "safe",
      "last_updated": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "device_info": {...},
    "risk_factors": []
  }
}`}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Batch Verification */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">POST</Badge>
                            <code className="font-mono">/v2/verify/batch</code>
                          </div>
                          <p className="text-muted-foreground">Verify multiple items in a single request</p>
                        </div>

                        {/* Webhook Management */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">POST</Badge>
                            <code className="font-mono">/v2/webhooks</code>
                          </div>
                          <p className="text-muted-foreground">Configure webhook endpoints for real-time notifications</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="webhooks" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Webhook Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Receive real-time notifications when verification status changes.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Webhook Events</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• <code>verification.completed</code> - Verification finished</li>
                            <li>• <code>verification.status_changed</code> - Status updated</li>
                            <li>• <code>stolen.item_reported</code> - Item reported stolen</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Example Payload</h4>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
{`{
  "event": "verification.completed",
  "data": {
    "verification_id": "ver_1234567890",
    "identifier": "356123456789012",
    "status": "stolen",
    "confidence": 0.95,
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Examples</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="javascript" className="w-full">
                        <TabsList>
                          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                          <TabsTrigger value="python">Python</TabsTrigger>
                          <TabsTrigger value="php">PHP</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="javascript">
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
{`const response = await fetch('https://api.safeorstolen.com/v2/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sos_live_your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    identifier: '356123456789012',
    type: 'imei'
  })
});

const result = await response.json();
console.log(result.status); // 'safe' or 'stolen'`}
                            </pre>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="python">
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
{`import requests

response = requests.post(
    'https://api.safeorstolen.com/v2/verify',
    headers={
        'Authorization': 'Bearer sos_live_your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'identifier': '356123456789012',
        'type': 'imei'
    }
)

result = response.json()
print(result['status'])  # 'safe' or 'stolen'`}
                            </pre>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="php">
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
{`<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.safeorstolen.com/v2/verify');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'identifier' => '356123456789012',
    'type' => 'imei'
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer sos_live_your_api_key',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$result = json_decode($response, true);
echo $result['status']; // 'safe' or 'stolen'

curl_close($ch);
?>`}
                            </pre>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiDocsPage;