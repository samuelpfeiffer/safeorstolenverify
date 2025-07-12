
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const PurchaseHistoryEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12">
      <Search className="mx-auto h-12 w-12 text-gray-500 mb-3" />
      <h3 className="text-xl font-medium mb-2">No purchase history</h3>
      <p className="text-gray-400 mb-6">Your verified purchases will appear here</p>
      <Button onClick={() => navigate('/for-consumers')} className="bg-sos-orange hover:bg-sos-orange/90">
        Learn How to Verify Purchases
      </Button>
    </div>
  );
};
