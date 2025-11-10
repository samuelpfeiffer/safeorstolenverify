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

export default function FloridaVinLookup() {
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error('Please sign in to use Florida VIN theft database lookup');
      navigate('/auth?redirect=/florida-vin-lookup');
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
      const { data, error } = await supabase.functions.invoke('verify-item', {
        body: {
          type: 'vin',
          value: vin
        }
      });

      if (error) throw error;

      setResult(data);
      
      if (data.status === 'stolen') {
        toast.error('⚠️ This VIN is reported as stolen!');
      } else if (data.status === 'safe') {
        toast.success('✓ No theft records found for this VIN');
      }
    } catch (error: any) {
      console.error('Florida VIN lookup error:', error);
      toast.error(error.message || 'Failed to complete Florida VIN theft database lookup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="Free Florida VIN Theft Check | FL VIN Lookup - SafeOrStolen"
        description="Instantly verify if a vehicle is stolen in Florida by VIN number. Free VIN theft check using Florida law enforcement databases. Search FL stolen vehicle registry before buying. Protect yourself from stolen car purchases in Florida."
        keywords="florida vin check, fl vin lookup, florida stolen vin search, fl vin verification, florida dmv vin database, check florida stolen vehicle vin, miami vin theft check, orlando vin verification, tampa vin check, free fl vin lookup"
        canonical="/florida-vin-lookup"
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
              Florida VIN Theft Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify if a vehicle is reported stolen in Florida using the Vehicle Identification Number (VIN). 
              Free instant lookup from Florida law enforcement databases.
            </p>
          </header>

          {/* Info Banner */}
          <Alert className="mb-8 border-sos-orange/30 bg-sos-orange/5">
            <Database className="h-5 w-5 text-sos-orange" />
            <AlertDescription className="text-sm">
              <strong>Official Florida VIN Database:</strong> This service queries Florida law enforcement 
              stolen vehicle databases, updated daily. VIN checks are more reliable than license plate checks 
              because VINs cannot be easily changed. Essential for all used vehicle purchases in Florida.
            </AlertDescription>
          </Alert>

          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Search Florida Stolen Vehicle Database by VIN
              </CardTitle>
              <CardDescription>
                Enter the 17-character Vehicle Identification Number to check Florida theft databases
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
                    <>Searching Florida VIN Database...</>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Check Florida VIN Database
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
                      No Theft Records Found for VIN
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
                      <strong>CRITICAL ALERT:</strong> This VIN is reported as stolen. 
                      Do NOT purchase, accept, or take possession of this vehicle. Contact Florida law enforcement 
                      immediately. Call 911 or your local police non-emergency number.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}

          {/* SEO Content */}
          <section className="mt-12 space-y-8">
            <article className="prose dark:prose-invert max-w-none">
              <h2>Why Check Florida VIN Database Before Buying?</h2>
              <p>
                Florida has one of the highest vehicle theft rates in the United States, with over 40,000 vehicles 
                stolen annually. Miami, Tampa, Orlando, and Jacksonville are major hotspots for stolen vehicle 
                fraud. VIN verification is essential before any used vehicle purchase in Florida.
              </p>

              <h3>Florida Vehicle Theft Statistics</h3>
              <ul>
                <li>Over 40,000 vehicles stolen in Florida annually</li>
                <li>Miami-Dade County accounts for 30% of Florida vehicle thefts</li>
                <li>Only 45% of stolen vehicles are recovered in Florida</li>
                <li>Most targeted: Ford F-150, Chevrolet Silverado, Honda Accord, Toyota Camry</li>
                <li>Florida ranks #4 in the nation for vehicle theft</li>
              </ul>

              <h3>Where to Find a Vehicle's VIN in Florida</h3>
              <ol>
                <li><strong>Dashboard</strong> - Driver's side, visible through windshield</li>
                <li><strong>Driver's door jamb</strong> - Sticker with VIN and vehicle specifications</li>
                <li><strong>Florida vehicle title</strong> - Listed on the front page</li>
                <li><strong>Florida DMV registration</strong> - VIN on registration card</li>
                <li><strong>Insurance documents</strong> - VIN listed on policy</li>
              </ol>

              <h3>What If the VIN Shows Stolen in Florida?</h3>
              <ol>
                <li><strong>DO NOT complete the purchase</strong> - Walk away immediately</li>
                <li><strong>Contact Florida law enforcement</strong> - Call 911 or local police</li>
                <li><strong>Document everything</strong> - Photos of VIN, seller info, listing</li>
                <li><strong>Report to Florida DHSMV</strong> - File fraud report with Florida DMV</li>
                <li><strong>Report to marketplace</strong> - Alert Craigslist, Facebook, OfferUp, Letgo</li>
              </ol>

              <h3>Florida VIN Check Best Practices</h3>
              <ul>
                <li>Always verify VIN matches Florida title and registration</li>
                <li>Check VIN in multiple locations (dashboard, door jamb, engine)</li>
                <li>Beware if seller refuses to provide VIN before meeting</li>
                <li>Get pre-purchase inspection from Florida-licensed mechanic</li>
                <li>Verify Florida DHSMV title transfer is clear before payment</li>
                <li>Be extra cautious in Miami, Tampa, Orlando, Jacksonville metro areas</li>
              </ul>

              <h3>Florida-Specific VIN Theft Red Flags</h3>
              <ul>
                <li>Seller claims "lost Florida title" and offers bill of sale only</li>
                <li>VIN doesn't match Florida title or registration</li>
                <li>Title shows flood damage (Florida has extensive hurricane flood history)</li>
                <li>Seller pressures immediate cash-only purchase</li>
                <li>Vehicle price significantly below market value</li>
                <li>Out-of-state seller with Florida vehicle (common scam)</li>
                <li>Title shows multiple out-of-state transfers in short period</li>
              </ul>

              <h3>Florida Hurricane and Flood Vehicle Warning</h3>
              <p>
                Florida's hurricane history means many flood-damaged vehicles enter the used market. Always:
              </p>
              <ul>
                <li>Check for flood damage indicators (musty smell, water stains, rust)</li>
                <li>Verify title doesn't show "salvage" or "flood" branding</li>
                <li>Get CARFAX or AutoCheck to reveal flood damage history</li>
                <li>Inspect undercarriage and trunk for water damage</li>
                <li>Be skeptical of vehicles titled shortly after major hurricanes</li>
              </ul>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
