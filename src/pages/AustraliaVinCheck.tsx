import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function AustraliaVinCheck() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Australia VIN Check - Free Stolen Vehicle Lookup | SafeOrStolen"
        description="Free Australian VIN verification against NEVDIS, state databases, and police records across all states and territories."
        keywords="australia vin check, nevdis check, australian car history, nsw vehicle check, vic vehicle verification"
        canonical="/australia-vin-check"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🇦🇺 Australia VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Australia. Check against NEVDIS, state police databases, and VicRoads records.
            </p>
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90"
              onClick={() => navigate('/verify')}
            >
              Verify VIN Now
            </Button>
          </header>
          
          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">📊 Australian Theft Data</h3>
              <p className="text-muted-foreground">54,000+ vehicles stolen annually. NSW and VIC account for 70% of thefts.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🔍 Database Coverage</h3>
              <p className="text-muted-foreground">NEVDIS, NSW RMS, VicRoads, QLD Transport, and all state police databases.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🛡️ State Coverage</h3>
              <p className="text-muted-foreground">All 6 states and 2 territories covered with comprehensive integration.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
