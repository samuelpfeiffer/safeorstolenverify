import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Search, AlertTriangle, CheckCircle2, Car, Database, Phone } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface VerificationResult {
  vin: string;
  status: 'safe' | 'stolen' | 'lost';
  message: string;
  details?: string;
  timestamp: string;
}

export default function AlabamaVinLookup() {
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const { toast } = useToast();
  const { isAuthenticated } = useUnifiedAuth();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!vin || vin.length !== 17) {
      toast({
        title: "Invalid VIN",
        description: "Please enter a valid 17-character VIN number",
        variant: "destructive"
      });
      return;
    }

    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to check VIN numbers",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('verify-item', {
        body: { identifier: vin, itemType: 'vin' }
      });

      if (error) throw error;

      setResult({
        vin: vin.toUpperCase(),
        status: data.status || 'safe',
        message: data.message || 'Verification complete',
        details: data.details,
        timestamp: new Date().toISOString()
      });

      toast({
        title: "VIN Check Complete",
        description: `Status: ${data.status || 'safe'}`,
      });
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Unable to complete VIN verification. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="Alabama VIN Lookup - Free Stolen Vehicle Check | SafeOrStolen"
        description="Free Alabama VIN lookup service. Check if a vehicle is reported stolen in AL law enforcement databases. Verify car history before buying."
        keywords="Alabama VIN lookup, AL stolen vehicle check, Alabama car history, VIN verification AL, stolen car database Alabama"
        canonical="/alabama-vin-lookup"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { name: 'VIN Lookup', href: '/verify' },
            { name: 'Alabama VIN Lookup', href: '/alabama-vin-lookup' }
          ]}
          className="mb-6"
        />
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold">Alabama VIN Lookup</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Check if a vehicle is reported stolen in Alabama law enforcement databases
          </p>
        </div>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter VIN Number (17 characters)
              </label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  placeholder="1HGBH41JXMN109186"
                  maxLength={17}
                  className="font-mono"
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>Checking...</>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Check VIN
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Card>

        {result && (
          <Card className="p-6 mb-8">
            <div className="flex items-start gap-4">
              {result.status === 'safe' ? (
                <CheckCircle2 className="h-8 w-8 text-green-500 flex-shrink-0" />
              ) : (
                <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0" />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {result.status === 'safe' ? 'Vehicle Clear' : 'Alert: Verify Further'}
                </h3>
                <p className="text-muted-foreground mb-4">{result.message}</p>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  VIN: {result.vin}
                </div>
                {result.details && (
                  <Alert className="mt-4">
                    <AlertDescription>{result.details}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <Car className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Alabama Vehicle Theft Statistics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 5,200+ vehicles stolen in Alabama annually</li>
              <li>• Birmingham and Mobile highest theft rates</li>
              <li>• $46M+ in vehicle theft losses per year</li>
              <li>• 63% recovery rate with GPS tracking</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Databases Checked</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Alabama Law Enforcement Agency Database</li>
              <li>• NICB (National Insurance Crime Bureau)</li>
              <li>• FBI NCIC Stolen Vehicle File</li>
              <li>• Southeast regional records</li>
            </ul>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Where to Find Your VIN in Alabama</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>Dashboard:</strong> Lower left corner of windshield (driver's side)</p>
            <p><strong>Driver's Door Jamb:</strong> Sticker with VIN and vehicle information</p>
            <p><strong>AL Registration:</strong> Listed on vehicle registration document</p>
            <p><strong>AL Title:</strong> Printed on certificate of title</p>
            <p><strong>Insurance Card:</strong> May be listed on proof of insurance</p>
          </div>
        </Card>

        <Card className="p-6">
          <Phone className="h-8 w-8 text-primary mb-3" />
          <h2 className="text-2xl font-semibold mb-4">Alabama Reporting Contacts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Alabama Law Enforcement Agency</h3>
              <p className="text-muted-foreground">Emergency: 911 | Non-Emergency: (334) 242-4371</p>
              <p className="text-sm text-muted-foreground">301 S Ripley St, Montgomery, AL 36104</p>
            </div>
            <div>
              <h3 className="font-semibold">Alabama DOR Motor Vehicle Division</h3>
              <p className="text-muted-foreground">Phone: (334) 242-9000</p>
              <p className="text-sm text-muted-foreground">Report stolen vehicles for title/registration holds</p>
            </div>
            <div>
              <h3 className="font-semibold">If Vehicle is Stolen</h3>
              <Alert>
                <AlertDescription>
                  Call 911 immediately if you discover a stolen vehicle. Contact Alabama Law Enforcement Agency to file a report and obtain a case number for insurance claims.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
