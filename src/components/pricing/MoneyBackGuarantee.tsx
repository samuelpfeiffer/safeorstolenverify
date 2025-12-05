import { Shield, ArrowRight } from 'lucide-react';

export const MoneyBackGuarantee = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-green-500/20">
          <Shield className="w-8 h-8 text-green-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-muted-foreground mb-3">
            Not satisfied? Get a full refund within 30 days, no questions asked. 
            If our verification service doesn't meet your expectations, we'll refund 100% of your payment.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1 text-green-500">
              <ArrowRight className="w-4 h-4" /> No hidden fees
            </span>
            <span className="flex items-center gap-1 text-green-500">
              <ArrowRight className="w-4 h-4" /> Cancel anytime
            </span>
            <span className="flex items-center gap-1 text-green-500">
              <ArrowRight className="w-4 h-4" /> Instant refunds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
