import { PageSEO } from '@/components/seo/PageSEO';
import { createStatePageSchema } from '@/utils/seo/statePageSchema';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function NewMexicoVinLookup() {
  const navigate = useNavigate();
  const structuredData = createStatePageSchema("New Mexico", "NM");

  return (
    <>
      <PageSEO
        title="New Mexico VIN Check - Free NM Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for New Mexico vehicles. Check if a car is stolen in NM against NICB, NM MVD, and police databases."
        keywords="new mexico vin check, nm stolen vehicle lookup, new mexico car history, nm mvd stolen vehicle, albuquerque vehicle verification"
        canonical="/new-mexico-vin-lookup"
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
              🌶️ New Mexico VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for New Mexico. Check against NICB, NM MVD database, and Albuquerque police records.
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
