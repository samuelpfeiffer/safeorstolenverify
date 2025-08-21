
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Eye, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PurchaseItem {
  id: string;
  verification_id: string;
  serial_number: string;
  item_type: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  stripe_session_id?: string;
}

interface PurchaseHistoryCardProps {
  item: PurchaseItem;
}

export const PurchaseHistoryCard = ({ item }: PurchaseHistoryCardProps) => {
  const navigate = useNavigate();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  return (
    <Card className="bg-secondary/50 backdrop-blur-lg border-white/10">
      <CardHeader className="pb-2">
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
      <CardContent className="pt-0">
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-1">
            Purchased: {formatDate(item.created_at)}
          </p>
          <p className="text-sos-orange font-medium">
            {item.amount > 0 ? formatPrice(item.amount, item.currency) : 'Free'}
          </p>
          <p className="font-mono text-xs text-gray-300 mt-1 break-all">
            {item.serial_number}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-sos-orange text-sos-orange hover:bg-sos-orange/10"
            onClick={() => navigate(`/?verificationId=${item.verification_id}`)}
          >
            View Details
          </Button>
          <Button 
            size="sm" 
            className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white"
            onClick={() => navigate('/')}
          >
            Verify Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
