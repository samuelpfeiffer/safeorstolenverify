import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Car, Search, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface VINResult {
  success: boolean;
  status: 'safe' | 'stolen' | 'suspicious' | 'unknown';
  confidence: number;
  message: string;
  details?: {
    make?: string;
    model?: string;
    year?: string;
    nicbCheck?: boolean;
    nhtsaRecalls?: number;
  };
}

const VINVerificationTool = () => {
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VINResult | null>(null);
  const { toast } = useToast();

  const validateVINFormat = (value: string): boolean => {
    const cleaned = value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    return cleaned.length === 17;
  };

  const handleCheck = async () => {
    const cleaned = vin.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    
    if (!validateVINFormat(cleaned)) {
      toast({
        title: 'Invalid VIN',
        description: 'VIN must be exactly 17 characters (letters and numbers, excluding I, O, Q)',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('verify-vehicle', {
        body: { identifier: cleaned, itemType: 'vehicle' }
      });

      if (error) throw error;
      setResult(data);
    } catch (err: any) {
      toast({
        title: 'Verification Failed',
        description: err.message || 'Unable to verify VIN',
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
        title="VIN Verification Tool"
        description="Check vehicle theft history using VIN verification. Cross-references NICB and NHTSA databases."
        canonical="/tools/vin-verification"
        noIndex
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-emerald-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">VIN Verification</h1>
            <p className="text-muted-foreground">
              Check vehicle theft history and recall status
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter VIN Number</CardTitle>
              <CardDescription>
                Find VIN on dashboard (driver's side), door jamb, or vehicle registration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vin">VIN (17 characters)</Label>
                <div className="flex gap-2">
                  <Input
                    id="vin"
                    placeholder="Enter 17-character VIN"
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/gi, '').slice(0, 17))}
                    maxLength={17}
                    className="font-mono text-lg uppercase"
                  />
                  <Button onClick={handleCheck} disabled={isLoading || vin.length !== 17}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {vin.length}/17 characters
                </p>
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
                    <div className="grid grid-cols-2 gap-2 text-sm mt-4 pt-4 border-t border-current/10">
                      {result.details.year && (
                        <div>
                          <span className="opacity-70">Year:</span>
                          <span className="ml-2 font-medium">{result.details.year}</span>
                        </div>
                      )}
                      {result.details.make && (
                        <div>
                          <span className="opacity-70">Make:</span>
                          <span className="ml-2 font-medium">{result.details.make}</span>
                        </div>
                      )}
                      {result.details.model && (
                        <div>
                          <span className="opacity-70">Model:</span>
                          <span className="ml-2 font-medium">{result.details.model}</span>
                        </div>
                      )}
                      {result.details.nhtsaRecalls !== undefined && (
                        <div>
                          <span className="opacity-70">Open Recalls:</span>
                          <span className="ml-2 font-medium">{result.details.nhtsaRecalls}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default VINVerificationTool;
