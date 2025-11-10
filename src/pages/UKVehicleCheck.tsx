import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function UKVehicleCheck() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="UK Vehicle Check - Free DVLA Stolen Car Lookup | SafeOrStolen"
        description="Free UK vehicle check against DVLA, Police National Computer, and stolen vehicle databases. Verify registration plates before buying."
        keywords="uk vehicle check, dvla stolen car check, uk registration check, stolen car database uk, vehicle history check uk"
        canonical="/uk-vehicle-check"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🇬🇧 UK Vehicle Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for the UK. Check against DVLA, Police National Computer, and BikeRegister.com databases.
            </p>
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90"
              onClick={() => navigate('/verify')}
            >
              Check Vehicle Now
            </Button>
          </header>
          
          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">📊 UK Theft Data</h3>
              <p className="text-muted-foreground">Over 100,000 vehicles stolen annually across England, Scotland, Wales, and Northern Ireland.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🔍 Database Coverage</h3>
              <p className="text-muted-foreground">DVLA, Police National Computer, BikeRegister, Immobilise UK, and regional police databases.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🛡️ Crime Deterrent</h3>
              <p className="text-muted-foreground">Every check makes stolen vehicles worthless to criminals in the UK.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
