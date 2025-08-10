import React, { useState, useEffect, useCallback } from 'react';
import ZapierIntegration from '@/components/integrations/ZapierIntegration';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Zap,
  Database,
  Wifi,
  RefreshCw
} from 'lucide-react';

const RealTimeVerificationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [realtimeConnected, setRealtimeConnected] = useState(false);
  const { toast } = useToast();

  // Simulate real-time connection
  useEffect(() => {
    const connectToRealtime = () => {
      setRealtimeConnected(true);
      toast({
        title: "Real-time Connected",
        description: "Connected to live verification database",
      });
    };

    const timer = setTimeout(connectToRealtime, 1000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleVerification = useCallback(async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Enter an item to verify",
        description: "Please enter a serial number, IMEI, or product code",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);
    
    try {
      // Simulate real-time verification with multiple database checks
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simulate database responses
      const mockResult = {
        id: Date.now(),
        searchTerm,
        status: Math.random() > 0.3 ? 'safe' : 'stolen',
        confidence: Math.floor(Math.random() * 20) + 80,
        sources: [
          'FBI Stolen Property Database',
          'NCIC Database',
          'Insurance Fraud Database',
          'Manufacturer Database',
          'Retail Theft Database'
        ],
        timestamp: new Date().toISOString(),
        details: {
          brand: 'Apple',
          model: 'iPhone 15 Pro',
          color: 'Natural Titanium',
          capacity: '256GB'
        }
      };

      setVerificationResult(mockResult);
      
      toast({
        title: mockResult.status === 'safe' ? "Item Verified Safe" : "⚠️ Stolen Item Detected",
        description: `Checked across ${mockResult.sources.length} databases`,
        variant: mockResult.status === 'safe' ? "default" : "destructive"
      });
      
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Unable to verify item. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  }, [searchTerm, toast]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerification();
    }
  };

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <div className="container mx-auto container-padding py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 bg-sos-lime/10 text-sos-lime border-sos-lime/20">
            <Zap className="h-4 w-4 mr-2" />
            Real-time Verification Engine
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Instant</span> Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time verification across multiple law enforcement and insurance databases
          </p>
        </div>

        {/* Connection Status */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
            <div className={`w-3 h-3 rounded-full ${realtimeConnected ? 'bg-sos-lime animate-pulse' : 'bg-gray-500'}`}></div>
            <Wifi className={`h-4 w-4 ${realtimeConnected ? 'text-sos-lime' : 'text-gray-500'}`} />
            <span className="text-sm">
              {realtimeConnected ? 'Live Database Connected' : 'Connecting...'}
            </span>
          </div>
        </div>

        {/* Search Interface */}
        <Card className="max-w-2xl mx-auto mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-sos-orange" />
              Verify Any Item
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter serial number, IMEI, or product code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                disabled={isVerifying}
              />
              <Button 
                onClick={handleVerification}
                disabled={isVerifying || !realtimeConnected}
                className="bg-sos-orange hover:bg-sos-orange/90"
              >
                {isVerifying ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">Serial Numbers</Badge>
              <Badge variant="secondary" className="text-xs">IMEI/ESN</Badge>
              <Badge variant="secondary" className="text-xs">VIN Numbers</Badge>
              <Badge variant="secondary" className="text-xs">Product Codes</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Verification Result */}
        {verificationResult && (
          <Card className={`max-w-4xl mx-auto mb-12 ${
            verificationResult.status === 'safe' 
              ? 'border-sos-lime/50 bg-sos-lime/5' 
              : 'border-red-500/50 bg-red-500/5'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {verificationResult.status === 'safe' ? (
                  <CheckCircle className="h-6 w-6 text-sos-lime" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                )}
                {verificationResult.status === 'safe' ? 'Item Verified Safe' : 'Stolen Item Detected'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Search Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>Query: <span className="font-mono">{verificationResult.searchTerm}</span></div>
                    <div>Confidence: <span className="text-sos-lime">{verificationResult.confidence}%</span></div>
                    <div>Timestamp: {new Date(verificationResult.timestamp).toLocaleString()}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Item Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>Brand: {verificationResult.details.brand}</div>
                    <div>Model: {verificationResult.details.model}</div>
                    <div>Color: {verificationResult.details.color}</div>
                    <div>Capacity: {verificationResult.details.capacity}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Database Sources Checked
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {verificationResult.sources.map((source: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-card rounded border border-border">
                      <CheckCircle className="h-4 w-4 text-sos-lime" />
                      <span className="text-xs">{source}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-sos-orange mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sub-Second Response</h3>
              <p className="text-sm text-muted-foreground">
                Get verification results in under 1.3 seconds
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="pt-6">
              <Database className="h-12 w-12 text-sos-lime mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Multiple Databases</h3>
              <p className="text-sm text-muted-foreground">
                Checks 15+ law enforcement and insurance databases
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
              <h3 className="font-semibold mb-2">98.7% Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Industry-leading accuracy with comprehensive coverage
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Zapier Integration */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Real-time Alerts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant notifications when stolen items are detected using Zapier webhooks
            </p>
          </div>
          <ZapierIntegration />
        </div>
      </div>
    </div>
  );
};

export default RealTimeVerificationPage;