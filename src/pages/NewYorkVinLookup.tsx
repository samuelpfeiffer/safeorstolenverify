import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function NewYorkVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="New York VIN Check - Free NY Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for New York vehicles. Check if a car is stolen in NY against NICB, DMV, and police databases. Protect yourself before buying."
        keywords="new york vin check, ny stolen vehicle lookup, new york car history, ny dmv stolen vehicle, new york vehicle verification"
        canonical="/new-york-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🗽 New York VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for New York. Check against NICB, NY DMV stolen vehicle database, and police records before you buy.
            </p>
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90"
              onClick={() => navigate('/verify')}
            >
              Verify VIN Now
            </Button>
          </header>
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Why Check NY Vehicles?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">📊 NY Theft Statistics</h3>
              <p className="text-muted-foreground">New York reports over 20,000 vehicle thefts annually. NYC has the highest rate in the state.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🔍 Database Coverage</h3>
              <p className="text-muted-foreground">We check NICB, NY DMV stolen records, and regional law enforcement databases.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">⚡ Instant Results</h3>
              <p className="text-muted-foreground">Get verification results in seconds. Protect yourself from buying stolen vehicles.</p>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🛡️ Crime Prevention Impact</h2>
            <p className="text-lg mb-4">
              Every VIN check on SafeOrStolen makes stolen vehicles harder to resell in New York. 
              By verifying before you buy, you're helping reduce vehicle theft across the state.
            </p>
            <p className="text-muted-foreground">
              <strong>How it works:</strong> When criminals know buyers are checking VINs, stolen vehicles become 
              worthless. SafeOrStolen creates a verification network that protects honest buyers and sellers 
              while deterring theft.
            </p>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
