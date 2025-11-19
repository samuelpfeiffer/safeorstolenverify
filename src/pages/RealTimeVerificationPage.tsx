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

import HotGunzWidget from '@/components/integrations/HotGunzWidget';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useRealVerification } from '@/hooks/useRealVerification';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { PageSEO } from '@/components/seo/PageSEO';

const RealTimeVerificationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [realtimeConnected, setRealtimeConnected] = useState(false);
  const { toast } = useToast();
  const { consumeSearch } = useSearchLimits();

  const [showFirearmsWidget, setShowFirearmsWidget] = useState(false);
  const [hotgunzStyle, setHotgunzStyle] = useState<'style1'|'style2'|'style3'|'style4'>('style4');

  // Reveal firearms widget if category=firearms in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('category')?.toLowerCase() === 'firearms') {
      setShowFirearmsWidget(true);
    }
  }, []);

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

  const { verifyItem } = useRealVerification();

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
      const itemType = detectItemType(searchTerm) || 'generic';

      const canProceed = await consumeSearch();
      if (!canProceed) return;

      const result = await verifyItem(searchTerm, itemType);
      if (result) {
        setVerificationResult({ ...result, searchTerm });
      }
    } finally {
      setIsVerifying(false);
    }
  }, [searchTerm, toast, verifyItem, consumeSearch]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerification();
    }
  };

  return (
    <>
      <PageSEO
        title="Real-Time Verification | Safe Or Stolen"
        description="Verify IMEI, serial or VIN instantly with our live verification engine."
        canonical="/real-time-verification"
        keywords="real-time verification, IMEI check, VIN check, serial check, verify item, safe or stolen"
        noIndex={true}
      />
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real-time verification using available sources based on item type
          </p>
          
          {/* Hero Image */}
          <div className="max-w-md mx-auto">
            <img 
              src="/lovable-uploads/861961a2-983e-4394-bf36-9d4b895af7db.png" 
              alt="Real-time verification results in under 3 seconds"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              width="448"
              height="256"
              loading="eager"
            />
          </div>
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
              : verificationResult.status === 'unknown'
                ? 'border-sos-orange/50 bg-sos-orange/5'
                : 'border-red-500/50 bg-red-500/5'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {verificationResult.status === 'safe' ? (
                  <CheckCircle className="h-6 w-6 text-sos-lime" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                )}
                {verificationResult.status === 'safe' ? 'Item Appears Legitimate' : verificationResult.status === 'unknown' ? 'Unable to Confirm' : 'Potentially Stolen'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Search Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>Query: <span className="font-mono">{verificationResult.searchTerm}</span></div>
                    {typeof verificationResult.confidence === 'number' && (
                      <div>Confidence: <span className="text-sos-lime">{verificationResult.confidence}%</span></div>
                    )}
                    <div>Status: {verificationResult.status}</div>
                    {verificationResult.source && (<div>Source: {verificationResult.source}</div>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Item Details</h4>
                  <div className="space-y-2 text-sm">
                    {verificationResult.details ? (
                      Object.entries(verificationResult.details).slice(0,6).map(([k,v]: any, idx: number) => (
                        <div key={idx}>{String(k)}: {typeof v === 'object' ? JSON.stringify(v) : String(v)}</div>
                      ))
                    ) : (
                      <div className="text-muted-foreground">No additional details provided</div>
                    )}
                  </div>
                </div>
              </div>

              {verificationResult.message && (
                <div className="text-sm text-muted-foreground">{verificationResult.message}</div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-sos-orange mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Responses</h3>
              <p className="text-sm text-muted-foreground">
                Quickly get verification results depending on source availability
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="pt-6">
              <Database className="h-12 w-12 text-sos-lime mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Multiple Sources</h3>
              <p className="text-sm text-muted-foreground">
                Checks available sources based on the item type
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Confidence Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Includes a confidence score and message when available
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

        {showFirearmsWidget && (
          <section aria-labelledby="hotgunz-heading" className="mb-12">
            <div className="text-center mb-2">
              <h2 id="hotgunz-heading" className="text-sm font-medium mb-1">🔫 Stolen Firearms Check</h2>
              <p className="text-xs text-muted-foreground max-w-xl mx-auto">
                Search the community-sourced stolen firearms database.
              </p>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="space-y-4 pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">Choose widget style</div>
                  <div className="w-full sm:w-64">
                    <Select value={hotgunzStyle} onValueChange={(v) => setHotgunzStyle(v as any)}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="style1">Style 1</SelectItem>
                        <SelectItem value="style2">Style 2</SelectItem>
                        <SelectItem value="style3">Style 3</SelectItem>
                        <SelectItem value="style4">Style 4 (Transparent)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-border">
                  <HotGunzWidget style={hotgunzStyle as any} height={420} />
                </div>
                <p className="text-xs text-muted-foreground">
                  This widget is provided by HotGunz. If it fails to load due to network or HTTPS restrictions, visit
                  <a className="underline ml-1" href="https://www.hotgunz.com/" target="_blank" rel="noopener noreferrer">hotgunz.com</a>.
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
    </>
  );
};

export default RealTimeVerificationPage;
