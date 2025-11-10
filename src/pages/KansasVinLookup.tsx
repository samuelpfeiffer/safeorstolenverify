import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function KansasVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Kansas VIN Check - Free KS Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Kansas vehicles. Check if a car is stolen in KS against NICB, KS DMV, and police databases."
        keywords="kansas vin check, ks stolen vehicle lookup, kansas car history, ks dmv stolen vehicle, wichita vehicle verification"
        canonical="/kansas-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌾 Kansas VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Kansas. Check against NICB, KS DMV database, and state police records.
            </p>
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90"
              onClick={() => navigate('/verify')}
            >
              Verify VIN Now
            </Button>
          </header>
        </div>
      </main>
    </>
  );
}
