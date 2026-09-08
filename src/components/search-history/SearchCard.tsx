
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "@/lib/router-compat";

interface SearchItem {
  id: string;
  serial_number: string;
  item_type: string;
  created_at: string;
  verification_status?: string;
}

interface SearchCardProps {
  item: SearchItem;
  onRemove: (id: string) => void;
}

export const SearchCard = ({ item, onRemove }: SearchCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <Card className="bg-secondary/50 backdrop-blur-lg border-white/10">
      <CardContent className="pt-6 relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-2" 
          onClick={() => onRemove(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
        <p className="text-xs text-gray-400 mb-1">
          {formatDate(item.created_at)}
        </p>
        <p className="text-sm font-medium mb-1">{item.item_type}</p>
        <p className="font-mono text-sos-orange mb-3 text-sm break-all">
          {item.serial_number}
        </p>
        <Button 
          variant="default" 
          size="sm" 
          className="w-full bg-sos-orange hover:bg-sos-orange/90"
          onClick={() => navigate('/')}
        >
          Verify Again
        </Button>
      </CardContent>
    </Card>
  );
};
