import { Shield, CheckCircle, AlertTriangle, Database, Clock, FileText, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Shows a realistic sample verification result on the homepage
 * so visitors see exactly what they're getting before signing up.
 */
export const SampleResultPreview = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-foreground mb-2">
            See What You Get — Instantly
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's a real example of a SafeOrStolen verification result.
            Every check scans 100+ databases and returns a clear verdict in ~3 seconds.
          </p>
        </div>

        {/* Sample Result Card */}
        <div className="max-w-2xl mx-auto modern-card overflow-hidden">
          {/* Header with Trust Score */}
          <div className="bg-secondary/10 border-b border-secondary/20 p-6 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1.5 text-sm font-bold mb-4">
              <CheckCircle className="w-4 h-4" />
              VERIFIED CLEAN
            </div>
            <div className="text-6xl font-black text-secondary mb-1">92</div>
            <div className="text-muted-foreground text-sm">Trust Score out of 100</div>
          </div>

          {/* Item Details */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Item</span>
              <span className="text-foreground font-semibold">iPhone 15 Pro Max — 256GB</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">IMEI</span>
              <span className="font-mono text-foreground">35391112XXXXXXX</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Carrier Status</span>
              <span className="text-secondary font-semibold">✓ Not Blacklisted</span>
            </div>

            {/* Database Results */}
            <div className="border-t border-border pt-4">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <Database className="w-3.5 h-3.5" />
                Databases Checked (12 of 100+)
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'GSMA Device Registry', status: 'clean' },
                  { name: 'AT&T Blacklist', status: 'clean' },
                  { name: 'Verizon Blacklist', status: 'clean' },
                  { name: 'T-Mobile Blacklist', status: 'clean' },
                  { name: 'Insurance Claims', status: 'clean' },
                ].map((db) => (
                  <div key={db.name} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{db.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60 mt-2">+ 94 more databases checked</p>
            </div>

            {/* AI Advisory */}
            <div className="border-t border-border pt-4">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" />
                AI Safety Advisory
              </div>
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-3">
                <p className="text-foreground text-sm font-medium mb-1">✓ SAFE TO PROCEED</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  This device has no theft reports, no carrier blacklisting, and no insurance claims across all checked databases. The IMEI structure is valid and matches an Apple iPhone 15 Pro Max manufactured in Q3 2024.
                </p>
              </div>
            </div>

            {/* What you get */}
            <div className="border-t border-border pt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <FileText className="w-3.5 h-3.5" />
                PDF Certificate
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Share2 className="w-3.5 h-3.5" />
                Shareable Link
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Completed in 2.8s
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border-t border-primary/10 p-5 text-center">
            <Link
              to="/verify"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-xl transition-all button-glow"
            >
              <Shield className="w-4 h-4" />
              Try It Free — 2 Checks, No Credit Card
            </Link>
          </div>
        </div>

        {/* What if it's stolen? */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="modern-card p-4 flex items-start gap-3 border-destructive/20 bg-destructive/5">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground text-sm font-semibold mb-1">What if an item is flagged?</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                If an item comes back as STOLEN or FLAGGED, you'll see exactly which database flagged it, what was reported, and step-by-step instructions on what to do next. Never buy a stolen item accidentally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
