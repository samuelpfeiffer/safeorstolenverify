import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function PennsylvaniaVinLookup() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Pennsylvania VIN Check - Free PA Stolen Vehicle Lookup | SafeOrStolen"
        description="Free VIN verification for Pennsylvania vehicles. Check if a car is stolen in PA against NICB, PennDOT, and police databases."
        keywords="pennsylvania vin check, pa stolen vehicle lookup, pennsylvania car history, penndot stolen vehicle, philadelphia vehicle verification"
        canonical="/pennsylvania-vin-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🔔 Pennsylvania VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Pennsylvania. Check against NICB, PennDOT database, and Philadelphia police records.
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
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">📊 PA Theft Data</h3>
              <p className="text-muted-foreground">Pennsylvania reports 15,000+ vehicle thefts annually across Philadelphia, Pittsburgh, and Harrisburg.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🔍 Database Coverage</h3>
              <p className="text-muted-foreground">NICB, PennDOT stolen records, Philadelphia PD, and regional law enforcement databases.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🛡️ Crime Deterrent</h3>
              <p className="text-muted-foreground">Every check makes stolen vehicles worthless to criminals in PA.</p>
            </div>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
