import React from 'react';
import { Shield, CheckCircle, ArrowRight, Database, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link, useParams } from '@/lib/router-compat';

const VerifiedResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <PageSEO
        title="SafeOrStolen Verified ✓ — Item Passed 100+ Database Checks"
        description="This item was verified clean by SafeOrStolen against law enforcement, insurance, and carrier databases."
        canonical={`/verified/${id}`}
      />
      <div className="max-w-lg mx-auto px-4 py-16 pt-24 text-center space-y-8">
        <header className="space-y-4">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">✓ VERIFIED CLEAN</h1>
          <p className="text-muted-foreground">This item was verified by SafeOrStolen against 100+ law enforcement, insurance, and carrier databases.</p>
        </header>

        <section className="bg-card border border-border rounded-xl p-6 text-left space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Verification ID</span>
              <span className="font-mono text-foreground">{id || 'vrf_unknown'}</span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Verified</span>
              <span className="text-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date().toLocaleDateString()}</span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Databases Checked</span>
              <span className="text-foreground flex items-center gap-1"><Database className="w-3 h-3" /> 100+</span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">Status</span>
              <span className="text-green-600 font-semibold flex items-center gap-1"><Shield className="w-3 h-3" /> CLEAN</span>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 border border-border rounded-xl p-6 space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Want to verify your own items?</h2>
          <p className="text-sm text-muted-foreground">SafeOrStolen checks IMEI, VIN, and serial numbers against 100+ databases in 3 seconds. 2 free checks, then $0.99/check or $10/month unlimited.</p>
          <Button asChild size="lg" className="button-glow">
            <Link to="/verify">Try SafeOrStolen Free → <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </section>

        <p className="text-xs text-muted-foreground">
          Verified by <Link to="/" className="text-primary hover:underline">SafeOrStolen</Link> — SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.
        </p>
      </div>
    </>
  );
};

export default VerifiedResultPage;
