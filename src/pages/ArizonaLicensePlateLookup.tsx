import { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ServiceOfferSchema } from '@/components/seo/ServiceOfferSchema';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Search, AlertTriangle, CheckCircle, Car, MapPin, Database } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function ArizonaLicensePlateLookup() {
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();
  const [licensePlate, setLicensePlate] = useState('');
  const [state, setState] = useState('Arizona');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error('Please sign in to use Arizona theft database lookup');
      navigate('/auth?redirect=/arizona-license-plate-lookup');
      return;
    }

    if (!licensePlate.trim()) {
      toast.error('Please enter a license plate number');
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('arizona-theft-lookup', {
        body: {
          type: 'license_plate',
          value: licensePlate,
          state: state
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
      console.error('Arizona lookup error:', error);
      toast.error(error.message || 'Failed to complete Arizona theft database lookup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="Free Arizona License Plate Theft Check | TheftAZ Database Lookup - SafeOrStolen"
        description="Instantly check if a vehicle is stolen in Arizona. Free license plate verification using Arizona Attorney General's TheftAZ database. Search AZ stolen vehicle registry by plate number. Protect yourself before buying a used car in Arizona."
        keywords="arizona license plate check, theftaz lookup, arizona stolen vehicle search, az plate number verification, arizona attorney general theft database, check arizona stolen car, theftaz.azag.gov alternative, phoenix stolen vehicle lookup, arizona dmv stolen check, free az license plate search"
        canonical="/arizona-license-plate-lookup"
      />
      <ServiceOfferSchema />

      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <MapPin className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Arizona License Plate Theft Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify if a vehicle is reported stolen in Arizona's official TheftAZ database.
              Free instant lookup powered by Arizona Attorney General's stolen vehicle registry.
            </p>
          </header>

          {/* Info Banner */}
          <Alert className="mb-8 border-sos-orange/30 bg-sos-orange/5">
            <Database className="h-5 w-5 text-sos-orange" />
            <AlertDescription className="text-sm">
              <strong>Official Arizona Source:</strong> This service queries the Arizona Attorney General's 
              TheftAZ database, updated twice daily with reports from participating Arizona law enforcement agencies.
              Use this before buying any used vehicle in Arizona.
            </AlertDescription>
          </Alert>

          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Search Arizona Stolen Vehicle Database
              </CardTitle>
              <CardDescription>
                Enter the license plate number and state to check the TheftAZ database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="licensePlate">License Plate Number *</Label>
                  <Input
                    id="licensePlate"
                    placeholder="Ex: ABC1234 or 123-ABC"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                    maxLength={10}
                    required
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter plate number without spaces or special characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {US_STATES.map((stateName) => (
                        <SelectItem key={stateName} value={stateName}>
                          {stateName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sos-orange hover:bg-sos-orange/90"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Searching Arizona Database...</>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Check Arizona TheftAZ Database
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
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
                
                {result.details && (
                  <div className="bg-background/50 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">Search Details:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><strong>Database:</strong> {result.details.vehicleInfo?.database}</div>
                      <div><strong>State:</strong> {result.details.vehicleInfo?.state}</div>
                      <div><strong>Search Type:</strong> License Plate</div>
                      <div><strong>Timestamp:</strong> {new Date(result.timestamp).toLocaleString()}</div>
                    </div>
                  </div>
                )}

                {result.status === 'stolen' && (
                  <Alert className="bg-red-100 dark:bg-red-900/20 border-red-500">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <AlertDescription>
                      <strong>IMPORTANT:</strong> This vehicle is reported as stolen in Arizona. 
                      Do NOT purchase or take possession. Contact local law enforcement immediately.
                      Call 911 or your local police non-emergency number.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}

          {/* SEO Content */}
          <section className="mt-12 space-y-8">
            <article className="prose dark:prose-invert max-w-none">
              <h2>Why Check Arizona's TheftAZ Database Before Buying a Used Vehicle?</h2>
              <p>
                Arizona's TheftAZ database, maintained by the Arizona Attorney General's Office, 
                is the most authoritative source for stolen vehicle records in Arizona. Updated twice 
                daily with reports from participating law enforcement agencies across the state, 
                it's your first line of defense against purchasing a stolen vehicle.
              </p>

              <h3>What is TheftAZ?</h3>
              <p>
                TheftAZ (theftaz.azag.gov) is Arizona's official stolen vehicle registry, operated 
                by the Arizona Attorney General's Office. This public service allows anyone to verify 
                if a vehicle has been reported stolen to Arizona law enforcement. The database includes:
              </p>
              <ul>
                <li>Stolen vehicles reported to Phoenix Police Department</li>
                <li>Maricopa County Sheriff's Office stolen vehicle reports</li>
                <li>Tucson Police Department and Pima County records</li>
                <li>All participating Arizona law enforcement agencies statewide</li>
              </ul>

              <h3>How to Use Arizona License Plate Theft Check</h3>
              <ol>
                <li><strong>Enter the license plate number</strong> - Include the full plate number</li>
                <li><strong>Select the state</strong> - Choose Arizona or the issuing state</li>
                <li><strong>Click "Check Database"</strong> - Instant results from TheftAZ</li>
                <li><strong>Review the results</strong> - Safe, stolen, or not found status</li>
              </ol>

              <h3>When Should You Check Arizona's Stolen Vehicle Database?</h3>
              <ul>
                <li>Before buying any used car, truck, or motorcycle in Arizona</li>
                <li>When purchasing from Craigslist, Facebook Marketplace, or OfferUp</li>
                <li>At used car dealerships in Phoenix, Tucson, Mesa, Chandler, or Scottsdale</li>
                <li>Before accepting a vehicle as trade or payment</li>
                <li>When renting or leasing from private parties</li>
              </ul>

              <h3>Understanding Your TheftAZ Results</h3>
              <p><strong>No Records Found:</strong> The vehicle is not currently reported as stolen 
              in Arizona's database. However, always verify the VIN matches the title and registration.</p>
              
              <p><strong>Stolen Status:</strong> DO NOT purchase or take possession. Contact Arizona 
              law enforcement immediately. The vehicle may be subject to seizure and you could face 
              legal consequences.</p>

              <h3>Beyond License Plates: Complete Vehicle Verification</h3>
              <p>
                While TheftAZ license plate searches are valuable, comprehensive protection requires 
                checking the VIN (Vehicle Identification Number) as well. Stolen vehicles may have 
                switched plates. Always verify:
              </p>
              <ul>
                <li>VIN matches the title and registration documents</li>
                <li>VIN plate hasn't been tampered with or altered</li>
                <li>All paperwork is legitimate and matches the seller's ID</li>
              </ul>

              <h3>Arizona Stolen Vehicle Statistics</h3>
              <p>
                According to the National Insurance Crime Bureau (NICB), Arizona ranks in the top 10 
                states for vehicle theft. Peoria, Phoenix, Tucson, and Mesa are hotspots for stolen vehicle 
                activity. Common targets include:
              </p>
              <ul>
                <li>Ford F-Series trucks</li>
                <li>Chevrolet Silverado pickups</li>
                <li>Honda Accord and Civic models</li>
                <li>Toyota Camry and Corolla</li>
              </ul>

              <h3>Frequently Asked Questions</h3>
              <h4>Is this the same as the official TheftAZ website?</h4>
              <p>
                Our service provides convenient access to verify vehicles against Arizona's theft 
                database. For official Arizona Attorney General records, visit theftaz.azag.gov directly.
              </p>

              <h4>How often is the Arizona stolen vehicle database updated?</h4>
              <p>
                The TheftAZ database is updated twice daily with new theft reports from participating 
                Arizona law enforcement agencies.
              </p>

              <h4>Does this check nationwide stolen vehicle databases?</h4>
              <p>
                This service focuses on Arizona's official TheftAZ database. For nationwide checks 
                including NICB and NCIC databases, use our comprehensive VIN verification service.
              </p>

              <h4>What should I do if a vehicle shows as stolen?</h4>
              <p>
                Do NOT complete the purchase or take possession. Contact local Arizona law enforcement 
                immediately. Possessing a stolen vehicle, even unknowingly, can result in legal issues.
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
