import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function WisconsinVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Wisconsin VIN Check - Free WI Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Wisconsin vehicles. Check if a car is stolen in WI against NICB, WI DMV, and Milwaukee police databases."
        keywords="wisconsin vin check, wi stolen vehicle lookup, wisconsin car history, wi dmv stolen vehicle, milwaukee vehicle verification"
        canonical="/wisconsin-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🧀 Wisconsin VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Wisconsin. Check against NICB, WI DMV database, and Milwaukee police records.
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
