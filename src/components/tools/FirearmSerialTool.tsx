import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Shield, Search, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { FirearmSourceDisclosure } from '@/components/verification/FirearmSourceDisclosure';
import { FirearmNextSteps } from '@/components/verification/FirearmNextSteps';

interface FirearmResult {
  success: boolean;
  status: 'safe' | 'stolen' | 'suspicious' | 'unknown';
  confidence: number;
  message: string;
  details?: {
    make?: string;
    model?: string;
    caliber?: string;
    atfPatternValid?: boolean;
    suspiciousReason?: string;
  };
}

const FirearmSerialTool = () => {
  const [serial, setSerial] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FirearmResult | null>(null);
  const { toast } = useToast();

  const handleCheck = async () => {
    if (serial.trim().length < 3) {
      toast({
        title: 'Invalid Serial',
        description: 'Please enter at least 3 characters',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('verify-hotgunz', {
        body: { identifier: serial.trim(), itemType: 'firearm' }
      });

      if (error) throw error;
      setResult(data);
    } catch (err: any) {
      toast({
        title: 'Verification Failed',
        description: err.message || 'Unable to verify serial',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'stolen': return <XCircle className="w-8 h-8 text-red-500" />;
      default: return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'stolen': return 'bg-red-500/10 text-red-600 border-red-500/20';
      default: return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
    }
  };

  return (
    <>
      <SEOHead
        title="Firearm Serial Check"
        description="Check if a firearm is reported stolen using 50-state firearm theft reports database. Free firearm serial number lookup."
        canonical="/tools/firearm-check"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Firearm Serial Check</h1>
            <p className="text-muted-foreground">
              Verify against the nationwide stolen firearm reports
            </p>
          </div>

          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This tool checks public databases only. Always verify with local law enforcement before any firearm purchase.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Enter Firearm Serial Number</CardTitle>
              <CardDescription>
                Serial number is typically on the frame/receiver
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serial">Serial Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="serial"
                    placeholder="Enter firearm serial"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value.toUpperCase())}
                    className="font-mono text-lg uppercase"
                  />
                  <Button onClick={handleCheck} disabled={isLoading || serial.trim().length < 3}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {result && (
                <div className={`mt-6 p-6 rounded-lg border ${getStatusColor(result.status)}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {getStatusIcon(result.status)}
                    <div>
                      <h3 className="text-xl font-semibold capitalize">{result.status}</h3>
                      <p className="text-sm opacity-80">{result.message}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm">Confidence:</span>
                    <Badge variant="outline">{Math.round(result.confidence * 100)}%</Badge>
                  </div>

                  {result.details && (
                    <div className="space-y-2 text-sm mt-4 pt-4 border-t border-current/10">
                      {result.details.make && (
                        <div className="flex justify-between">
                          <span className="opacity-70">Make:</span>
                          <span className="font-medium">{result.details.make}</span>
                        </div>
                      )}
                      {result.details.model && (
                        <div className="flex justify-between">
                          <span className="opacity-70">Model:</span>
                          <span className="font-medium">{result.details.model}</span>
                        </div>
                      )}
                      {result.details.caliber && (
                        <div className="flex justify-between">
                          <span className="opacity-70">Caliber:</span>
                          <span className="font-medium">{result.details.caliber}</span>
                        </div>
                      )}
                      {result.details.atfPatternValid !== undefined && (
                        <div className="flex justify-between">
                          <span className="opacity-70">Serial Integrity Valid:</span>
                          <span className="font-medium">{result.details.atfPatternValid ? 'Yes' : 'No'}</span>
                        </div>
                      )}
                      {result.details.suspiciousReason && (
                        <div className="mt-2 p-2 bg-yellow-500/10 rounded text-yellow-700">
                          ⚠️ {result.details.suspiciousReason}
                        </div>
                      )}
                    </div>
                  )}

                  <FirearmSourceDisclosure className="mt-4 pt-4 border-t border-current/10" />
                  <FirearmNextSteps className="mt-4" />
                </div>
              )}
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Data cross-referenced with <a href="https://hotgunz.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">50-state firearm theft reports</a> stolen firearms database
          </p>
        </div>
      </div>
    </>
  );
};

export default FirearmSerialTool;
