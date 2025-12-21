import { Shield, Clock, Database, Users, Smartphone, TrendingUp } from 'lucide-react';

/**
 * Quick value proof component - shows immediate value without friction
 * Designed to reduce bounce rate by proving credibility in 3 seconds
 */
export const QuickValueProof = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
        <Database className="h-5 w-5 mx-auto mb-1 text-primary" />
        <div className="text-lg font-bold text-foreground">100+</div>
        <div className="text-xs text-muted-foreground">Databases</div>
      </div>
      <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
        <Clock className="h-5 w-5 mx-auto mb-1 text-emerald-500" />
        <div className="text-lg font-bold text-foreground">3 sec</div>
        <div className="text-xs text-muted-foreground">Results</div>
      </div>
      <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
        <Shield className="h-5 w-5 mx-auto mb-1 text-blue-500" />
        <div className="text-lg font-bold text-foreground">Free</div>
        <div className="text-xs text-muted-foreground">2 Checks</div>
      </div>
      <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
        <Smartphone className="h-5 w-5 mx-auto mb-1 text-amber-500" />
        <div className="text-lg font-bold text-foreground">Only</div>
        <div className="text-xs text-muted-foreground">Mobile App</div>
      </div>
      <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
        <Users className="h-5 w-5 mx-auto mb-1 text-purple-500" />
        <div className="text-lg font-bold text-foreground">All</div>
        <div className="text-xs text-muted-foreground">Buyers+Sellers</div>
      </div>
      <div className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/10">
        <TrendingUp className="h-5 w-5 mx-auto mb-1 text-rose-500" />
        <div className="text-lg font-bold text-foreground">50</div>
        <div className="text-xs text-muted-foreground">US States</div>
      </div>
    </div>
  );
};
