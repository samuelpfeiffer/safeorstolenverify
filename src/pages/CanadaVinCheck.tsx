import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function CanadaVinCheck() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="Canada VIN Check - Free Stolen Vehicle Lookup | SafeOrStolen"
        description="Free Canadian VIN verification against CPIC, provincial databases, and police records across all provinces and territories."
        keywords="canada vin check, cpic stolen vehicle, canadian car history, ontario vehicle check, quebec vehicle verification"
        canonical="/canada-vin-check"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🇨🇦 Canada VIN Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free stolen vehicle verification for Canada. Check against CPIC (Canadian Police Information Centre) and provincial databases.
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
              <h3 className="text-xl font-semibold mb-3">📊 Canadian Theft Data</h3>
              <p className="text-muted-foreground">85,000+ vehicles stolen annually. Ontario and Quebec account for 60% of thefts.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🔍 Database Coverage</h3>
              <p className="text-muted-foreground">CPIC, NICB, Ontario MTO, Quebec SAAQ, and RCMP databases.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">🛡️ Provincial Coverage</h3>
              <p className="text-muted-foreground">All 10 provinces and 3 territories covered with local police integration.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
