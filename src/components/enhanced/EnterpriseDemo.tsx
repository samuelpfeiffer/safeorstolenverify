import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, CheckCircle, XCircle, Clock, Shield, Zap, BarChart3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DemoVerificationResult {
  serialNumber: string;
  itemType: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  riskScore: number;
  sources: string[];
}

export const EnterpriseDemo = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<DemoVerificationResult[]>([]);
  const [batchInput, setBatchInput] = useState('');
  const [apiKey, setApiKey] = useState('demo_key_12345');

  const handleBatchVerification = async () => {
    setIsProcessing(true);
    
    // Parse batch input
    const lines = batchInput.split('\n').filter(line => line.trim());
    const items = lines.map(line => {
      const [serialNumber, itemType] = line.split(',').map(s => s.trim());
      return { serialNumber, itemType: itemType || 'electronics' };
    });

    if (items.length === 0) {
      toast({
        title: "No items to process",
        description: "Please enter at least one serial number",
        variant: "destructive"
      });
      setIsProcessing(false);
      return;
    }

    // Simulate API processing
    const demoResults: DemoVerificationResult[] = [];
    
    for (let i = 0; i < items.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Simulate processing delay
      
      const item = items[i];
      const hash = item.serialNumber.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);
      
      const outcome = Math.abs(hash) % 100;
      
      let status: DemoVerificationResult['status'];
      let riskScore: number;
      let sources: string[];
      
      if (outcome <= 10) {
        status = 'stolen';
        riskScore = 85 + Math.random() * 10;
        sources = ['CheckMend', 'BikeIndex', 'Police_Database'];
      } else if (outcome <= 20) {
        status = 'lost';
        riskScore = 65 + Math.random() * 15;
        sources = ['CheckMend', 'Insurance_Claims'];
      } else if (outcome <= 35) {
        status = 'unknown';
        riskScore = 40 + Math.random() * 20;
        sources = ['Primary_Database'];
      } else {
        status = 'safe';
        riskScore = 5 + Math.random() * 15;
        sources = ['CheckMend', 'BikeIndex', 'HotGunz'];
      }
      
      demoResults.push({
        serialNumber: item.serialNumber,
        itemType: item.itemType,
        status,
        confidence: 85 + Math.random() * 10,
        riskScore: Math.round(riskScore),
        sources
      });
    }

    setResults(demoResults);
    setIsProcessing(false);
    
    toast({
      title: "Batch verification complete",
      description: `Processed ${demoResults.length} items successfully`
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'stolen': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'lost': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'unknown': return <Clock className="h-4 w-4 text-gray-500" />;
      default: return <XCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-green-500';
      case 'stolen': return 'bg-red-500';
      case 'lost': return 'bg-yellow-500';
      case 'unknown': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const summary = results.reduce((acc, result) => {
    acc[result.status] = (acc[result.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Enterprise API Demo</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the power of Safe Or Stolen's Enterprise API with real-time batch verification,
          advanced analytics, and comprehensive stolen goods detection.
        </p>
      </div>

      <Tabs defaultValue="batch" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="batch">Batch Verification</TabsTrigger>
          <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
          <TabsTrigger value="integration">API Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="batch" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-sos-orange" />
                  Batch Input
                </CardTitle>
                <CardDescription>
                  Enter serial numbers to verify (one per line: serial,itemType)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">API Key</label>
                  <Input
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your API key"
                    className="bg-gray-800 border-gray-600 text-white"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Items to Verify</label>
                  <Textarea
                    value={batchInput}
                    onChange={(e) => setBatchInput(e.target.value)}
                    placeholder="ABC123456,smartphone&#10;XYZ789012,bicycle&#10;DEF345678,laptop"
                    className="bg-gray-800 border-gray-600 text-white min-h-[200px]"
                  />
                </div>
                <Button
                  onClick={handleBatchVerification}
                  disabled={isProcessing || !batchInput.trim()}
                  className="w-full bg-sos-orange hover:bg-sos-orange/90"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Verify Batch'
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-sos-orange" />
                  Verification Results
                </CardTitle>
                <CardDescription>
                  Real-time processing results with risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results.length > 0 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{results.length}</div>
                        <div className="text-sm text-gray-400">Total Processed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{summary.safe || 0}</div>
                        <div className="text-sm text-gray-400">Safe Items</div>
                      </div>
                    </div>
                    
                    {(summary.stolen || summary.lost) && (
                      <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                        <div className="flex items-center gap-2 text-red-400 font-medium">
                          <AlertTriangle className="h-4 w-4" />
                          Alert: Potential Issues Detected
                        </div>
                        <div className="text-sm text-gray-300 mt-1">
                          {summary.stolen && `${summary.stolen} stolen items`}
                          {summary.stolen && summary.lost && ', '}
                          {summary.lost && `${summary.lost} lost items`}
                        </div>
                      </div>
                    )}

                    <div className="max-h-[300px] overflow-y-auto space-y-2">
                      {results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(result.status)}
                            <div>
                              <div className="font-medium text-white">{result.serialNumber}</div>
                              <div className="text-sm text-gray-400">{result.itemType}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className={`${getStatusColor(result.status)} text-white border-0`}>
                              {result.status.toUpperCase()}
                            </Badge>
                            <div className="text-xs text-gray-400 mt-1">
                              Risk: {result.riskScore}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <Shield className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No verification results yet</p>
                    <p className="text-sm">Enter serial numbers above to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Daily Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">24,847</div>
                <p className="text-xs text-green-400">+12% from yesterday</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Stolen Items Detected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-400">187</div>
                <p className="text-xs text-gray-400">0.75% of total</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">API Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">247ms</div>
                <p className="text-xs text-green-400">-5ms from average</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Accuracy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">97.3%</div>
                <p className="text-xs text-green-400">+0.2% this week</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Verification Sources Performance</CardTitle>
              <CardDescription>Success rates by data source</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'CheckMend Database', rate: 94, requests: 18420 },
                { name: 'BikeIndex Registry', rate: 89, requests: 7231 },
                { name: 'HotGunz Database', rate: 97, requests: 3847 },
                { name: 'IMEI Lookup Service', rate: 91, requests: 12983 }
              ].map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{source.name}</span>
                    <span className="text-gray-400">{source.rate}% • {source.requests.toLocaleString()} requests</span>
                  </div>
                  <Progress value={source.rate} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-6">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Enterprise API Integration</CardTitle>
              <CardDescription>
                Seamlessly integrate Safe Or Stolen's verification engine into your platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Quick Start</h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`curl -X POST https://safeorstolen.com/api/v1/verify/batch \\
  -H "X-API-Key: your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "items": [
      {"serialNumber": "ABC123456", "itemType": "smartphone"},
      {"serialNumber": "XYZ789012", "itemType": "bicycle"}
    ],
    "webhookUrl": "https://your-app.com/webhook",
    "priority": "high"
  }'`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Batch processing up to 100 items
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Real-time webhook notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Priority processing queues
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Comprehensive analytics dashboard
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">Pricing Tiers</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="font-medium text-white">Starter</div>
                      <div className="text-sm text-gray-400">$0.10 per verification</div>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="font-medium text-white">Business</div>
                      <div className="text-sm text-gray-400">$0.05 per verification</div>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="font-medium text-white">Enterprise</div>
                      <div className="text-sm text-gray-400">Custom pricing</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-sos-orange hover:bg-sos-orange/90">
                  Request Enterprise Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};