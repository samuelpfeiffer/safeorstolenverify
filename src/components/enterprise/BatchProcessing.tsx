import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Upload,
  Download,
  FileSpreadsheet,
  CheckCircle,
  AlertTriangle,
  X,
  Clock,
  Database,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BatchItem {
  serialNumber: string;
  itemType: string;
  reference?: string;
}

interface BatchResult {
  serialNumber: string;
  itemType: string;
  reference?: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  riskScore: number;
  sources: string[];
  timestamp: string;
}

interface BatchProcessingProps {
  apiKey?: string;
  onApiKeyRequired: () => void;
}

const BatchProcessing: React.FC<BatchProcessingProps> = ({ apiKey, onApiKeyRequired }) => {
  const [items, setItems] = useState<BatchItem[]>([]);
  const [results, setResults] = useState<BatchResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [batchId, setBatchId] = useState<string>('');
  const [csvData, setCsvData] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [priority, setPriority] = useState<'low' | 'normal' | 'high'>('normal');
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a CSV file.",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvContent = e.target?.result as string;
      setCsvData(csvContent);
      parseCSV(csvContent);
    };
    reader.readAsText(file);
  }, [toast]);

  const parseCSV = (csvContent: string) => {
    const lines = csvContent.trim().split('\n');
    const header = lines[0].toLowerCase().split(',');
    
    const serialIndex = header.findIndex(h => h.includes('serial') || h.includes('imei') || h.includes('vin'));
    const typeIndex = header.findIndex(h => h.includes('type') || h.includes('category'));
    const refIndex = header.findIndex(h => h.includes('ref') || h.includes('id'));

    if (serialIndex === -1) {
      toast({
        title: "Invalid CSV Format",
        description: "CSV must contain a column with 'serial', 'imei', or 'vin' in the header.",
        variant: "destructive"
      });
      return;
    }

    const parsedItems: BatchItem[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',');
      if (row[serialIndex]?.trim()) {
        parsedItems.push({
          serialNumber: row[serialIndex].trim(),
          itemType: typeIndex >= 0 ? row[typeIndex]?.trim() || 'unknown' : 'unknown',
          reference: refIndex >= 0 ? row[refIndex]?.trim() : undefined
        });
      }
    }

    if (parsedItems.length > 100) {
      toast({
        title: "Batch Size Limit",
        description: "Maximum 100 items per batch. First 100 items will be processed.",
        variant: "destructive"
      });
      setItems(parsedItems.slice(0, 100));
    } else {
      setItems(parsedItems);
    }

    toast({
      title: "CSV Uploaded",
      description: `Successfully parsed ${parsedItems.length} items.`
    });
  };

  const processBatch = async () => {
    if (!apiKey) {
      onApiKeyRequired();
      return;
    }

    if (items.length === 0) {
      toast({
        title: "No Items to Process",
        description: "Please upload a CSV file or add items manually.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setResults([]);

    try {
      const response = await fetch('/supabase/functions/v1/enterprise-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({
          items,
          webhookUrl: webhookUrl || undefined,
          priority
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Batch processing failed');
      }

      const data = await response.json();
      
      if (data.success) {
        setBatchId(data.data.batchId);
        setResults(data.data.results);
        setProgress(100);
        
        toast({
          title: "Batch Completed",
          description: `Processed ${data.data.results.length} items successfully.`
        });
      } else {
        throw new Error(data.error || 'Processing failed');
      }
    } catch (error) {
      toast({
        title: "Processing Error",
        description: error instanceof Error ? error.message : 'An error occurred during processing.',
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResults = () => {
    if (results.length === 0) return;

    const csvContent = [
      'Serial Number,Item Type,Reference,Status,Confidence,Risk Score,Sources,Timestamp',
      ...results.map(result => 
        `${result.serialNumber},${result.itemType},${result.reference || ''},${result.status},${result.confidence},${result.riskScore},"${result.sources.join('; ')}",${result.timestamp}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `verification_results_${batchId || Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-green-600 bg-green-100';
      case 'stolen': return 'text-red-600 bg-red-100';
      case 'lost': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-gray-600 bg-gray-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getSummaryStats = () => {
    if (results.length === 0) return null;
    
    const safe = results.filter(r => r.status === 'safe').length;
    const stolen = results.filter(r => r.status === 'stolen').length;
    const lost = results.filter(r => r.status === 'lost').length;
    const unknown = results.filter(r => r.status === 'unknown').length;
    const errors = results.filter(r => r.status === 'error').length;

    return { safe, stolen, lost, unknown, errors, total: results.length };
  };

  const stats = getSummaryStats();

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Items Queued</p>
                <p className="text-2xl font-bold">{items.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium">Processing Speed</p>
                <p className="text-2xl font-bold">{priority === 'high' ? '10/min' : priority === 'normal' ? '5/min' : '3/min'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm font-medium">Est. Time</p>
                <p className="text-2xl font-bold">
                  {items.length > 0 ? `${Math.ceil(items.length / (priority === 'high' ? 10 : priority === 'normal' ? 5 : 3))}min` : '0min'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload CSV</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Batch Upload
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileSpreadsheet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <Label htmlFor="csv-upload" className="cursor-pointer">
                  <span className="text-lg font-semibold">Click to upload CSV file</span>
                  <p className="text-sm text-muted-foreground mt-2">
                    Maximum 100 items per batch. CSV should include columns for serial numbers, item types, and optional reference IDs.
                  </p>
                </Label>
                <Input
                  id="csv-upload"
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {csvData && (
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    CSV file loaded successfully with {items.length} items ready for processing.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Processing Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="priority">Processing Priority</Label>
                  <select 
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as 'low' | 'normal' | 'high')}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="low">Low Priority (3 items/min)</option>
                    <option value="normal">Normal Priority (5 items/min)</option>
                    <option value="high">High Priority (10 items/min)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="webhook">Webhook URL (Optional)</Label>
                  <Input
                    id="webhook"
                    type="url"
                    placeholder="https://your-webhook-endpoint.com/callback"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Receive notifications when batch processing is complete
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          {stats && (
            <div className="grid gap-4 md:grid-cols-5">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.safe}</div>
                  <div className="text-sm text-muted-foreground">Safe</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{stats.stolen}</div>
                  <div className="text-sm text-muted-foreground">Stolen</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{stats.lost}</div>
                  <div className="text-sm text-muted-foreground">Lost</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.unknown}</div>
                  <div className="text-sm text-muted-foreground">Unknown</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-600">{stats.errors}</div>
                  <div className="text-sm text-muted-foreground">Errors</div>
                </CardContent>
              </Card>
            </div>
          )}

          {results.length > 0 && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Verification Results</CardTitle>
                <Button onClick={downloadResults} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="max-h-96 overflow-auto">
                  <div className="space-y-2">
                    {results.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div className="flex-1">
                          <div className="font-mono text-sm">{result.serialNumber}</div>
                          <div className="text-xs text-muted-foreground">{result.itemType}</div>
                        </div>
                        <Badge className={getStatusColor(result.status)}>
                          {result.status.toUpperCase()}
                        </Badge>
                        <div className="text-sm text-muted-foreground ml-4">
                          {result.confidence}% confidence
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {isProcessing && (
        <Card>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing batch...</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button
          onClick={processBatch}
          disabled={items.length === 0 || isProcessing}
          className="flex items-center gap-2"
        >
          {isProcessing ? (
            <>
              <Clock className="h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              Start Batch Processing
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default BatchProcessing;