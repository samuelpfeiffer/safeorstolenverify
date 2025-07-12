
import { ShoppingBag, AlertCircle, CreditCard } from "lucide-react";

export const ConsumerFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-secondary/50 backdrop-blur-lg rounded-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-secondary/80 p-4">
            <ShoppingBag className="h-10 w-10 text-sos-orange" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Shop Confidently</h3>
        <p className="text-gray-300">Verify that second-hand items are legitimate before purchasing them.</p>
      </div>
      
      <div className="bg-secondary/50 backdrop-blur-lg rounded-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-secondary/80 p-4">
            <AlertCircle className="h-10 w-10 text-sos-orange" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Report Lost Items</h3>
        <p className="text-gray-300">Register your lost or stolen items to alert potential buyers.</p>
      </div>
      
      <div className="bg-secondary/50 backdrop-blur-lg rounded-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-secondary/80 p-4">
            <CreditCard className="h-10 w-10 text-sos-orange" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Protect Purchases</h3>
        <p className="text-gray-300">Keep records of verified purchases for insurance and resale purposes.</p>
      </div>
    </div>
  );
};
