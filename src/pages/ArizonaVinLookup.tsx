import { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ServiceOfferSchema } from '@/components/seo/ServiceOfferSchema';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Search, AlertTriangle, CheckCircle, Car, Database, FileText } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function ArizonaVinLookup() {
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error('Please sign in to use Arizona VIN theft database lookup');
      navigate('/auth?redirect=/arizona-vin-lookup');
      return;
    }

    if (!vin.trim()) {
      toast.error('Please enter a VIN');
      return;
    }

    if (vin.length !== 17) {
      toast.error('VIN must be exactly 17 characters');
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('arizona-theft-lookup', {
        body: {
          type: 'vin',
          value: vin
        }
      });

      if (error) throw error;

      setResult(data);
      
      if (data.status === 'stolen') {
        toast.error('⚠️ This VIN is reported as stolen in Arizona!');
      } else if (data.status === 'safe') {
        toast.success('✓ No theft records found for this VIN in Arizona');
      }
    } catch (error: any) {
      console.error('Arizona VIN lookup error:', error);
      toast.error(error.message || 'Failed to complete Arizona VIN theft database lookup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="Free Arizona VIN Theft Check | TheftAZ VIN Lookup - SafeOrStolen"
        description="Instantly verify if a vehicle is stolen in Arizona by VIN number. Free VIN theft check using Arizona Attorney General's TheftAZ database. Search AZ stolen vehicle registry before buying. Protect yourself from stolen car purchases in Arizona."
        keywords="arizona vin check, theftaz vin lookup, arizona stolen vin search, az vin verification, arizona attorney general vin database, check arizona stolen vehicle vin, theftaz.azag.gov vin search, phoenix vin theft check, arizona dmv vin verification, free az vin lookup"
        canonical="/arizona-vin-lookup"
      />
      <ServiceOfferSchema />

      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <FileText className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Arizona VIN Theft Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify if a vehicle is reported stolen in Arizona's official TheftAZ database using 
              the Vehicle Identification Number (VIN). Free instant lookup from Arizona Attorney General.
            </p>
          </header>

          {/* Info Banner */}
          <Alert className="mb-8 border-sos-orange/30 bg-sos-orange/5">
            <Database className="h-5 w-5 text-sos-orange" />
            <AlertDescription className="text-sm">
              <strong>Official Arizona VIN Database:</strong> This service queries the Arizona Attorney General's 
              TheftAZ database by VIN, updated twice daily. VIN checks are more reliable than license plate 
              checks because VINs cannot be easily changed. Essential for all used vehicle purchases in Arizona.
            </AlertDescription>
          </Alert>

          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Search Arizona Stolen Vehicle Database by VIN
              </CardTitle>
              <CardDescription>
                Enter the 17-character Vehicle Identification Number to check the TheftAZ database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="vin">Vehicle Identification Number (VIN) *</Label>
                  <Input
                    id="vin"
                    placeholder="Ex: 1HGBH41JXMN109186"
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    maxLength={17}
                    required
                    className="text-lg font-mono"
                  />
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="mb-1">VIN must be exactly 17 characters (letters and numbers)</p>
                      <p>Find the VIN on the driver's side dashboard visible through windshield, 
                      driver's door jamb, or vehicle title/registration</p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sos-orange hover:bg-sos-orange/90"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Searching Arizona VIN Database...</>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Check Arizona TheftAZ VIN Database
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
                      STOLEN VEHICLE ALERT - VIN MATCH
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      No Arizona Theft Records Found for VIN
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">{result.message}</p>
                
                {result.details && (
                  <div className="bg-background/50 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">VIN Search Details:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><strong>Database:</strong> {result.details.vehicleInfo?.database}</div>
                      <div><strong>Search Type:</strong> VIN Verification</div>
                      <div><strong>Timestamp:</strong> {new Date(result.timestamp).toLocaleString()}</div>
                      <div><strong>VIN Length:</strong> 17 characters (validated)</div>
                    </div>
                  </div>
                )}

                {result.status === 'stolen' && (
                  <Alert className="bg-red-100 dark:bg-red-900/20 border-red-500">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <AlertDescription>
                      <strong>CRITICAL ALERT:</strong> This VIN is reported as stolen in Arizona's TheftAZ database. 
                      Do NOT purchase, accept, or take possession of this vehicle. Contact Arizona law enforcement 
                      immediately. Call 911 or your local police non-emergency number. Possessing a stolen vehicle 
                      is a serious crime in Arizona.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}

          {/* SEO Content */}
          <section className="mt-12 space-y-8">
            <article className="prose dark:prose-invert max-w-none">
              <h2>Why Check Arizona's TheftAZ VIN Database Before Buying?</h2>
              <p>
                Vehicle Identification Number (VIN) checks are the gold standard for stolen vehicle verification 
                in Arizona. Unlike license plates that can be switched, VINs are permanently assigned to vehicles 
                and stamped in multiple locations. Arizona's TheftAZ VIN database, maintained by the Attorney 
                General's Office, provides the most authoritative stolen vehicle records in the state.
              </p>

              <h3>What is a VIN and Why is it Important?</h3>
              <p>
                A VIN (Vehicle Identification Number) is a unique 17-character code assigned to every vehicle 
                manufactured since 1981. It serves as the vehicle's fingerprint and includes information about:
              </p>
              <ul>
                <li>Manufacturer and country of origin</li>
                <li>Vehicle type, model year, and engine</li>
                <li>Manufacturing plant and serial number</li>
              </ul>
              <p>
                Because VINs are permanently etched into multiple vehicle locations (dashboard, engine block, 
                door jamb), they're much harder to alter than license plates, making them the preferred method 
                for theft verification.
              </p>

              <h3>Where to Find a Vehicle's VIN</h3>
              <p>Check these locations to find the 17-character VIN:</p>
              <ol>
                <li><strong>Dashboard</strong> - Driver's side, visible through windshield</li>
                <li><strong>Driver's door jamb</strong> - Sticker with VIN and vehicle specifications</li>
                <li><strong>Vehicle title</strong> - Listed on the front page</li>
                <li><strong>Registration documents</strong> - Arizona vehicle registration</li>
                <li><strong>Insurance card</strong> - VIN listed on policy documents</li>
                <li><strong>Engine block</strong> - Stamped on the engine (harder to access)</li>
              </ol>

              <h3>Arizona VIN Theft Check Process</h3>
              <ol>
                <li><strong>Locate the VIN</strong> - Use the dashboard or door jamb VIN</li>
                <li><strong>Enter all 17 characters</strong> - Include all letters and numbers</li>
                <li><strong>Submit to TheftAZ database</strong> - Instant Arizona AG verification</li>
                <li><strong>Review results</strong> - Safe, stolen, or error status</li>
                <li><strong>Cross-reference</strong> - Verify VIN matches title and registration</li>
              </ol>

              <h3>Why VIN Checks Are Better Than License Plate Checks</h3>
              <p>VIN verification offers superior protection because:</p>
              <ul>
                <li><strong>Cannot be easily changed</strong> - VINs are permanently stamped</li>
                <li><strong>Multiple locations</strong> - Harder to tamper with all VIN locations</li>
                <li><strong>Unique identifier</strong> - No two vehicles share the same VIN</li>
                <li><strong>Comprehensive history</strong> - Links to entire vehicle history</li>
                <li><strong>Legal requirement</strong> - Arizona law requires VIN on title transfer</li>
              </ul>

              <h3>Red Flags When Checking a VIN in Arizona</h3>
              <p>Be cautious if you notice:</p>
              <ul>
                <li>VIN doesn't match between dashboard, door jamb, and title</li>
                <li>VIN plate appears scratched, welded, or tampered</li>
                <li>Seller refuses to provide VIN before meeting</li>
                <li>VIN characters are unclear or difficult to read</li>
                <li>Title shows "salvage" or "rebuilt" without disclosure</li>
                <li>Seller pressures immediate purchase without VIN check</li>
              </ul>

              <h3>Arizona Stolen Vehicle VIN Statistics</h3>
              <p>
                According to the Arizona Automobile Theft Authority (AATA) and NICB data:
              </p>
              <ul>
                <li>Over 18,000 vehicles stolen in Arizona annually</li>
                <li>Peoria and Phoenix metro area account for 60% of Arizona vehicle thefts</li>
                <li>Only 60% of stolen vehicles are recovered in Arizona</li>
                <li>Average stolen vehicle value in Arizona: $12,000-$18,000</li>
                <li>Most common targets: Ford F-150, Chevrolet Silverado, Honda Accord</li>
              </ul>

              <h3>What Happens If Your Arizona VIN Check Shows "Stolen"?</h3>
              <p>If the TheftAZ VIN database returns a stolen status:</p>
              <ol>
                <li><strong>DO NOT complete the purchase</strong> - Walk away immediately</li>
                <li><strong>Contact Arizona law enforcement</strong> - Call 911 or local police</li>
                <li><strong>Document everything</strong> - Take photos of VIN, seller info, listing</li>
                <li><strong>Report to Attorney General</strong> - File complaint with AZ AG's office</li>
                <li><strong>Alert marketplace</strong> - Report listing to Craigslist, Facebook, etc.</li>
              </ol>

              <h3>Beyond TheftAZ: Comprehensive Arizona VIN Verification</h3>
              <p>
                For complete protection, combine TheftAZ VIN checks with:
              </p>
              <ul>
                <li>National Insurance Crime Bureau (NICB) VIN check</li>
                <li>Arizona DMV title history verification</li>
                <li>CARFAX or AutoCheck vehicle history report</li>
                <li>Pre-purchase inspection by certified Arizona mechanic</li>
              </ul>

              <h3>Frequently Asked Questions About Arizona VIN Checks</h3>
              
              <h4>Is this the official Arizona Attorney General TheftAZ website?</h4>
              <p>
                Our service provides convenient VIN verification access to Arizona's theft database. 
                For the official Arizona Attorney General site, visit theftaz.azag.gov directly.
              </p>

              <h4>How accurate is the Arizona TheftAZ VIN database?</h4>
              <p>
                The TheftAZ database is updated twice daily with theft reports from all participating 
                Arizona law enforcement agencies. It's the most current and authoritative source for 
                Arizona stolen vehicle records.
              </p>

              <h4>Does this check out-of-state stolen vehicle databases?</h4>
              <p>
                This service focuses specifically on Arizona's TheftAZ database. For nationwide VIN 
                theft checks including NICB and NCIC databases, use our comprehensive national VIN 
                verification service.
              </p>

              <h4>What if I bought a car and later found it's stolen?</h4>
              <p>
                Contact Arizona law enforcement immediately. You may lose the vehicle and any money 
                paid. Arizona law doesn't protect buyers of stolen property, even if purchased unknowingly. 
                Always verify VIN before purchase.
              </p>

              <h4>Can I check multiple VINs for a dealership or business?</h4>
              <p>
                Yes! Our platform supports bulk VIN verification for Arizona dealerships, auction houses, 
                and wholesale operations. Contact us for enterprise API access and volume pricing.
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
