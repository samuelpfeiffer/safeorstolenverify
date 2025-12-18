
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PurchaseItem {
  id: string;
  serial_number: string;
  item_type: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

interface PurchaseCardProps {
  item: PurchaseItem;
}

export const PurchaseCard = ({ item }: PurchaseCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  return (
    <Card className="bg-secondary/50 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-sm">{item.item_type}</span>
          <span className={cn('text-xs px-2 py-1 rounded-full',
            item.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
            item.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          )}>
            {item.status === 'completed' ? 'Completed' : 
             item.status === 'pending' ? 'Pending' : 'Failed'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-gray-400 mb-1">
          Purchased: {formatDate(item.created_at)}
        </p>
        <p className="text-sos-orange font-medium mb-1">
          {item.amount > 0 ? formatPrice(item.amount, item.currency) : 'Free'}
        </p>
        <p className="font-mono text-xs text-gray-300 mb-3 break-all">
          {item.serial_number}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-sos-orange text-sos-orange hover:bg-sos-orange/10"
          onClick={() => navigate('/dashboard')}
        >
          View Certificate
        </Button>
      </CardContent>
    </Card>
  );
};
