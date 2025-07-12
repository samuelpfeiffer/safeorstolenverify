
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PurchaseHistoryEmpty = () => {
  return (
    <div className="text-center py-12">
      <ShoppingBag className="mx-auto h-12 w-12 text-gray-500 mb-3" />
      <h3 className="text-xl font-medium mb-2">No purchase history</h3>
      <p className="text-gray-400 mb-6">Your verified purchases will appear here</p>
      <Button onClick={() => window.location.href = '/'} className="bg-sos-orange hover:bg-sos-orange/90 text-white">
        Verify an Item
      </Button>
    </div>
  );
};
