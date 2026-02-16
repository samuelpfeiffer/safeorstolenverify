import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Smartphone, Search, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface IMEIResult {
  success: boolean;
  status: 'safe' | 'stolen' | 'blacklisted' | 'suspicious' | 'unknown';
  confidence: number;
  message: string;
  details?: {
    manufacturer?: string;
    model?: string;
    validFormat?: boolean;
    validChecksum?: boolean;
  };
}

const IMEICheckerTool = () => {
  const [imei, setImei] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IMEIResult | null>(null);
  const { toast } = useToast();

  const validateIMEIFormat = (value: string): boolean => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.length === 15;
  };

  const handleCheck = async () => {
    const cleaned = imei.replace(/\D/g, '');
    
    if (!validateIMEIFormat(cleaned)) {
      toast({
        title: 'Invalid IMEI',
        description: 'IMEI must be exactly 15 digits',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('verify-imei', {
        body: { identifier: cleaned, itemType: 'phone' }
      });

      if (error) throw error;
      setResult(data);
    } catch (err: any) {
      toast({
        title: 'Verification Failed',
        description: err.message || 'Unable to verify IMEI',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'stolen':
      case 'blacklisted': return <XCircle className="w-8 h-8 text-red-500" />;
      default: return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'stolen':
      case 'blacklisted': return 'bg-red-500/10 text-red-600 border-red-500/20';
      default: return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
    }
  };

  return (
    <>
      <SEOHead
        title="IMEI Checker Tool"
        description="Check if a phone or tablet is blacklisted or stolen using IMEI verification. Free IMEI lookup tool."
        canonical="/tools/imei-checker"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">IMEI Checker</h1>
            <p className="text-muted-foreground">
              Verify if a phone or tablet is blacklisted or reported stolen
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter IMEI Number</CardTitle>
              <CardDescription>
                Find IMEI by dialing *#06# on the device or check Settings → About Phone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="imei">IMEI (15 digits)</Label>
                <div className="flex gap-2">
                  <Input
                    id="imei"
                    placeholder="Enter 15-digit IMEI"
                    value={imei}
                    onChange={(e) => setImei(e.target.value.replace(/\D/g, '').slice(0, 15))}
                    maxLength={15}
                    className="font-mono text-lg"
                  />
                  <Button onClick={handleCheck} disabled={isLoading || imei.length !== 15}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {imei.length}/15 digits
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
                      {result.details.manufacturer && (
                        <div>
                          <span className="opacity-70">Manufacturer:</span>
                          <span className="ml-2 font-medium">{result.details.manufacturer}</span>
                        </div>
                      )}
                      {result.details.model && (
                        <div>
                          <span className="opacity-70">Model Range:</span>
                          <span className="ml-2 font-medium">{result.details.model}</span>
                        </div>
                      )}
                      <div>
                        <span className="opacity-70">Valid Format:</span>
                        <span className="ml-2 font-medium">{result.details.validFormat ? 'Yes' : 'No'}</span>
                      </div>
                      <div>
                        <span className="opacity-70">Valid Checksum:</span>
                        <span className="ml-2 font-medium">{result.details.validChecksum ? 'Yes' : 'No'}</span>
                      </div>
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

export default IMEICheckerTool;
