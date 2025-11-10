import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function MontanaVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Montana VIN Check - Free MT Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Montana vehicles. Check if a car is stolen in MT against NICB, Montana MVD, and police databases."
        keywords="montana vin check, mt stolen vehicle lookup, montana car history, montana mvd stolen vehicle, billings vehicle verification"
        canonical="/montana-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ⛰️ Montana VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Montana. Check against NICB, Montana MVD database, and state police records.
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
