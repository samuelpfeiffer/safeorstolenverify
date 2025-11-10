import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VirginiaVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Virginia VIN Check - Free VA Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Virginia vehicles. Check if a car is stolen in VA against NICB, VA DMV, and police databases."
        keywords="virginia vin check, va stolen vehicle lookup, virginia car history, va dmv stolen vehicle, richmond vehicle verification"
        canonical="/virginia-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏛️ Virginia VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Virginia. Check against NICB, VA DMV database, and local police records.
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
