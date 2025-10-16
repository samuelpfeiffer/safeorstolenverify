
import { ShoppingBag, AlertCircle, CreditCard } from "lucide-react";

export const ConsumerFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-card backdrop-blur-lg rounded-xl p-8 text-center border border-border">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/20 p-4">
            <ShoppingBag className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Buy with Confidence</h3>
        <p className="text-foreground/90">Verify secondhand items are legitimate before purchasing - protect yourself from unknowingly buying stolen goods.</p>
      </div>
      
      <div className="bg-card backdrop-blur-lg rounded-xl p-8 text-center border border-border">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/20 p-4">
            <AlertCircle className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Sell Safely</h3>
        <p className="text-foreground/90">Verify items before reselling to avoid legal trouble from undercover police operations targeting stolen goods.</p>
      </div>
      
      <div className="bg-card backdrop-blur-lg rounded-xl p-8 text-center border border-border">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/20 p-4">
            <CreditCard className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Complete Protection</h3>
        <p className="text-foreground/90">The global hub for secondhand market safety - protecting both buyers and sellers from stolen goods risks.</p>
      </div>
    </div>
  );
};
