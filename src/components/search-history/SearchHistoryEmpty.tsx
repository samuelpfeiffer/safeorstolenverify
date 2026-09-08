
import { History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@/lib/router-compat";

export const SearchHistoryEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12">
      <History className="mx-auto h-12 w-12 text-gray-500 mb-3" />
      <h3 className="text-xl font-medium mb-2">No search history</h3>
      <p className="text-gray-400 mb-6">Your search history will appear here</p>
      <Button onClick={() => navigate('/')} className="bg-sos-orange hover:bg-sos-orange/90">
        Start Verifying Items
      </Button>
    </div>
  );
};
