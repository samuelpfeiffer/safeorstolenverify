import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function IllinoisVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Illinois VIN Check - Free IL Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Illinois vehicles. Check if a car is stolen in IL against NICB, IL SOS, and police databases."
        keywords="illinois vin check, il stolen vehicle lookup, illinois car history, il sos stolen vehicle, chicago vehicle verification"
        canonical="/illinois-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌆 Illinois VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Illinois. Check against NICB, IL Secretary of State database, and Chicago police records.
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
          <h2 className="text-3xl font-bold mb-6">Why Check Illinois Vehicles?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">📊 IL Theft Statistics</h3>
              <p className="text-muted-foreground">Illinois reports over 18,000 vehicle thefts annually. Chicago accounts for 60% of state thefts.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🔍 Database Coverage</h3>
              <p className="text-muted-foreground">We check NICB, IL Secretary of State records, and Chicago PD stolen vehicle database.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">⚡ Instant Results</h3>
              <p className="text-muted-foreground">Get verification results in seconds. Essential for Chicago-area vehicle purchases.</p>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🛡️ Crime Prevention Impact</h2>
            <p className="text-lg mb-4">
              SafeOrStolen helps reduce vehicle theft in Illinois by making stolen cars impossible to resell. 
              Every verification creates a safer marketplace for honest buyers and sellers.
            </p>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
