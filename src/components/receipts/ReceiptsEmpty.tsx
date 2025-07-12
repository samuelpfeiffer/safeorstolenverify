
import { Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ReceiptsEmpty = () => {
  return (
    <div className="text-center py-12">
      <Receipt className="mx-auto h-12 w-12 text-gray-500 mb-3" />
      <h3 className="text-xl font-medium mb-2">No saved receipts</h3>
      <p className="text-gray-400 mb-6">Your verification receipts will appear here</p>
      <Button onClick={() => window.location.href = '/'} className="bg-sos-orange hover:bg-sos-orange/90">
        Go to Verification
      </Button>
    </div>
  );
};
