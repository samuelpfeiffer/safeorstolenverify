import { PageSEO } from '@/components/seo/PageSEO';
import { createStatePageSchema } from '@/utils/seo/statePageSchema';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function OregonVinLookup() {
  const navigate = useNavigate();
  const structuredData = createStatePageSchema("Oregon", "OR");

  return (
    <>
      <PageSEO
        title="Oregon VIN Check - Free OR Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Oregon vehicles. Check if a car is stolen in OR against NICB, Oregon DMV, and Portland police databases."
        keywords="oregon vin check, or stolen vehicle lookup, oregon car history, oregon dmv stolen vehicle, portland vehicle verification"
        canonical="/oregon-vin-lookup"
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌲 Oregon VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Oregon. Check against NICB, Oregon DMV database, and Portland police records.
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
