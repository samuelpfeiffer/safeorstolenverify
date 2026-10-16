import { Shield, CheckCircle, AlertTriangle, Database, Clock, FileText, Share2 } from 'lucide-react';
import { Link } from '@/lib/router-compat';

/**
 * Shows a sample verification result on the homepage so visitors see what a check returns
 * before signing up.
 * Oct 8 2026: rewritten by hand to match the real result screen. Removed the invented trust score,
 * per-carrier blacklist rows, "vehicle title records", "+ more databases", the AI advisory,
 * "safe to proceed", the 2.8-second timer and "instantly".
 */
export const SampleResultPreview = () => {
 return (
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-black text-foreground mb-2">
 What a check shows you
 </h2>
 <p className="text-muted-foreground max-w-xl mx-auto">
 Here's a sample phone check. Every check searches SafeOrStolen's own theft reports and public web results,
 lists every source it searched, and comes back in a few seconds.
 </p>
 </div>

 {/* Sample Result Card */}
 <div className="max-w-2xl mx-auto modern-card overflow-hidden">
 {/* Header with result */}
 <div className="bg-secondary/10 border-b border-secondary/20 p-6 text-center">
 <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1.5 text-sm font-bold mb-2">
 <CheckCircle className="w-4 h-4" />
 No report found in the records searched
 </div>
 <div className="text-muted-foreground text-xs">Sample result</div>
 </div>

 {/* Item Details */}
 <div className="p-6 space-y-4">
 <div className="flex items-center justify-between text-sm">
 <span className="text-muted-foreground">Make and model (from the IMEI)</span>
 <span className="text-foreground font-semibold">Apple iPhone 15 Pro Max</span>
 </div>
 <div className="flex items-center justify-between text-sm">
 <span className="text-muted-foreground">IMEI</span>
 <span className="font-mono text-foreground">35391112XXXXXXX</span>
 </div>
 <div className="flex items-center justify-between text-sm">
 <span className="text-muted-foreground">Checked</span>
 <span className="text-foreground">Saved to your account with the date</span>
 </div>

 {/* Sources */}
 <div className="border-t border-border pt-4">
 <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
 <Database className="w-3.5 h-3.5" />
 Sources searched
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 {[
 'SafeOrStolen theft reports',
 'Public web results (listings and posts)',
 ].map((name) => (
 <div key={name} className="flex items-center gap-2 text-xs">
 <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
 <span className="text-muted-foreground">{name}</span>
 </div>
 ))}
 </div>
 <p className="text-xs text-muted-foreground/80 mt-2">
 Optional: a paid phone blacklist check (lost/stolen carrier blacklist). Gun, bike and Arizona vehicle checks search extra sources.
 </p>
 </div>

 {/* What to do next */}
 <div className="border-t border-border pt-4">
 <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
 <Shield className="w-3.5 h-3.5" />
 Before you pay
 </div>
 <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-3">
 <p className="text-muted-foreground text-xs leading-relaxed">
 No report was found in the records searched. That isn't a guarantee the phone isn't stolen. Before paying, have the
 seller sign out of their Apple ID in front of you and check that the IMEI in Settings matches the one you checked.
 </p>
 </div>
 </div>

 {/* What you get */}
 <div className="border-t border-border pt-4 flex flex-wrap gap-3">
 <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
 <FileText className="w-3.5 h-3.5" />
 Optional $1.99 certificate
 </div>
 <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
 <Share2 className="w-3.5 h-3.5" />
 Certificate has its own link
 </div>
 <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
 <Clock className="w-3.5 h-3.5" />
 Done in a few seconds
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
 If a check comes back as "reported stolen" or "possible match", you'll see which source it came from and what was
 reported. Don't buy the item. If you think it's stolen, tell the local police where and when it's being sold.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};
