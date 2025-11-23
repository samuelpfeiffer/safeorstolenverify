import { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Search, AlertTriangle, CheckCircle, Car, MapPin, Database } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function NorthCarolinaLicensePlateLookup() {
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();
  const [licensePlate, setLicensePlate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error('Please sign in to use North Carolina theft database lookup');
      navigate('/auth?redirect=/north-carolina-license-plate-lookup');
      return;
    }

    if (!licensePlate.trim()) {
      toast.error('Please enter a license plate number');
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('universal-state-lookup', {
        body: {
          type: 'license_plate',
          value: licensePlate,
          state: 'NC'
        }
      });

      if (error) throw error;

      setResult(data);
      
      if (data.status === 'stolen') {
        toast.error('⚠️ This license plate is reported as stolen!');
      } else if (data.status === 'safe') {
        toast.success('✓ No theft records found for this license plate');
      }
    } catch (error: any) {
      console.error('North Carolina lookup error:', error);
      toast.error(error.message || 'Failed to complete North Carolina theft database lookup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="North Carolina License Plate Lookup - Free NC Stolen Vehicle Check | SafeOrStolen"
        description="Free North Carolina license plate verification. Check if a vehicle is stolen in NC against highway patrol, DMV, and NICB databases instantly."
        keywords="north carolina license plate lookup, nc stolen vehicle check, north carolina dmv stolen car, charlotte vehicle verification, raleigh plate check"
        canonical="/north-carolina-license-plate-lookup"
      />

      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <MapPin className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌲 North Carolina License Plate Theft Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instantly verify North Carolina license plates against highway patrol, DMV, and national stolen vehicle databases.
            </p>
          </header>

          <Alert className="mb-8 border-sos-orange/30 bg-sos-orange/5">
            <Database className="h-5 w-5 text-sos-orange" />
            <AlertDescription className="text-sm">
              <strong>North Carolina Sources:</strong> Checks NC Highway Patrol, DMV records, and NICB database for comprehensive stolen vehicle verification.
            </AlertDescription>
          </Alert>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Search North Carolina Stolen Vehicle Database
              </CardTitle>
              <CardDescription>
                Enter the license plate number to check NC databases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="licensePlate">License Plate Number *</Label>
                  <Input
                    id="licensePlate"
                    placeholder="Ex: ABC1234"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                    maxLength={10}
                    required
                    className="text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sos-orange hover:bg-sos-orange/90"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Searching NC Database...</>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Check North Carolina Database
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {result && (
            <Card className={`${result.status === 'stolen' ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : 'border-green-500 bg-green-50 dark:bg-green-950/20'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.status === 'stolen' ? (
                    <>
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                      STOLEN VEHICLE ALERT
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      No Theft Records Found
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">{result.message}</p>
                
                {result.status === 'stolen' && (
                  <Alert className="bg-red-100 dark:bg-red-900/20 border-red-500">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <AlertDescription>
                      <strong>IMPORTANT:</strong> This vehicle is reported as stolen. Contact North Carolina law enforcement immediately.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}

          <section className="mt-12 prose dark:prose-invert max-w-none">
            <h2>About North Carolina License Plate Verification</h2>
            <p>
              North Carolina experiences approximately 19,000 vehicle thefts annually, with Charlotte, Raleigh, and Durham 
              being high-risk areas. Our license plate lookup service instantly checks North Carolina vehicles against 
              highway patrol records, DMV databases, and the National Insurance Crime Bureau (NICB).
            </p>

            <h3>What Can Be Verified</h3>
            <ul>
              <li>Vehicles (cars, trucks, motorcycles)</li>
              <li>Trailers and RVs</li>
              <li>Commercial vehicles</li>
              <li>Boats with NC registration</li>
            </ul>

            <h3>Top Cities Covered</h3>
            <ul>
              <li>Charlotte</li>
              <li>Raleigh</li>
              <li>Greensboro</li>
              <li>Durham</li>
              <li>Winston-Salem</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
