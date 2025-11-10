import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function WashingtonVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Washington VIN Check - Free WA Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Washington vehicles. Check if a car is stolen in WA against NICB, WA DOL, and Seattle police databases."
        keywords="washington vin check, wa stolen vehicle lookup, washington car history, wa dol stolen vehicle, seattle vehicle verification"
        canonical="/washington-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌲 Washington VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Washington. Check against NICB, WA DOL database, and Seattle police records.
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
