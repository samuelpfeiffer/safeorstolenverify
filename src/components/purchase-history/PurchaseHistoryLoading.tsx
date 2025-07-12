
import { Loader2 } from "lucide-react";

export const PurchaseHistoryLoading = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-sos-orange" />
      <span className="ml-2 text-lg">Loading purchases...</span>
    </div>
  );
};
