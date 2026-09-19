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
import { supabase } from '@/integrations/supabase/client';
import { requestVerification } from '@/lib/verification/verifyClient';
import { toCanonicalItemType, itemTypeLabel } from '@/lib/itemType';

interface VerificationResult {
  serialNumber: string;
  itemType: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  riskScore: number;
  sources: string[];
}

/**
 * Enterprise Demo - Uses REAL API calls to verify items
 * No mock data - all verifications go through actual edge functions
 */
export const EnterpriseDemo = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<VerificationResult[]>([]);
  const [batchInput, setBatchInput] = useState('');
  const [progress, setProgress] = useState(0);

  const handleBatchVerification = async () => {
    setIsProcessing(true);
    setProgress(0);
    setResults([]);
    
    // Parse batch input
    const lines = batchInput.split('\n').filter(line => line.trim());
    const items = lines.map(line => {
      const [serialNumber, rawItemType] = line.split(',').map(s => s.trim());
      // CSV column is free text (e.g. "Serial Number") — canonicalize before it
      // is sent anywhere that persists it, and keep the label for display only.
      const itemType = toCanonicalItemType(rawItemType);
      return { serialNumber, itemType, itemTypeLabel: itemTypeLabel(itemType) };
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

    const verificationResults: VerificationResult[] = [];
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      setProgress(Math.round(((i + 1) / items.length) * 100));
      
      try {
        // Call the app's own verification endpoint
        const { data, error } = await requestVerification({
          identifier: item.serialNumber,
          itemType: item.itemType
        });

        if (error || !data) {
          verificationResults.push({
            serialNumber: item.serialNumber,
            itemType: item.itemType,
            status: 'error',
            confidence: 0,
            riskScore: 0,
            sources: []
          });
          continue;
        }

        const status = data.finalStatus || 'unknown';

        verificationResults.push({
          serialNumber: item.serialNumber,
          itemType: item.itemType,
          status,
          confidence: data.confidence ?? 75,
          riskScore: 0,
          sources: data.checkedSources || ['SafeOrStolen Database']
        });
      } catch (err) {
        console.error('Verification error:', err);
        verificationResults.push({
          serialNumber: item.serialNumber,
          itemType: item.itemType,
          status: 'error',
          confidence: 0,
          riskScore: 0,
          sources: []
        });
      }
    }

    setResults(verificationResults);
    setIsProcessing(false);
    
    const successful = verificationResults.filter(r => r.status !== 'error').length;
    toast({
      title: "Batch verification complete",
      description: `Successfully verified ${successful} of ${items.length} items`
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
          Experience SafeOrStolen's Enterprise API with real-time batch verification.
          All verifications use our actual database and AI analysis.
        </p>
      </div>

      <Tabs defaultValue="batch" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="batch">Batch Verification</TabsTrigger>
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
                  <label className="text-sm text-gray-300 mb-2 block">Items to Verify</label>
                  <Textarea
                    value={batchInput}
                    onChange={(e) => setBatchInput(e.target.value)}
                    placeholder="ABC123456,smartphone&#10;XYZ789012,bicycle&#10;DEF345678,laptop"
                    className="bg-gray-800 border-gray-600 text-white min-h-[200px]"
                  />
                </div>
                
                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Processing...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
                
                <Button
                  onClick={handleBatchVerification}
                  disabled={isProcessing || !batchInput.trim()}
                  className="w-full bg-sos-orange hover:bg-sos-orange/90"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Verifying...
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
                  Real-time results from our verification database
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
                              Confidence: {result.confidence}%
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
                    <p className="text-sm">Enter serial numbers and click Verify to get real results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integration" className="space-y-6">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Enterprise API Integration</CardTitle>
              <CardDescription>
                Integrate SafeOrStolen's verification engine into your platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Quick Start</h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`curl -X POST https://safeorstolen.com/api/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "serialNumber": "ABC123456",
    "itemType": "smartphone"
  }'`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Real database verification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      AI-powered risk analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Batch processing support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Webhook notifications
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">Pricing</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="font-medium text-white">Starter</div>
                      <div className="text-sm text-gray-400">Contact for pricing</div>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="font-medium text-white">Business</div>
                      <div className="text-sm text-gray-400">Volume discounts available</div>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="font-medium text-white">Enterprise</div>
                      <div className="text-sm text-gray-400">Custom pricing</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-sos-orange hover:bg-sos-orange/90" asChild>
                  <a href="/about">Contact Sales</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
