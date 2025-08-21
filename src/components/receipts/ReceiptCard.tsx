
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Receipt, Download, Eye, X } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ReceiptItem {
  id: string;
  user_id: string;
  purchase_id: string;
  created_at: string;
  purchase_details: {
    verification_id: string;
    serial_number: string;
    item_type: string;
    amount: number;
    currency: string;
    status: string;
  };
}

interface ReceiptCardProps {
  item: ReceiptItem;
  onRemove: (id: string) => void;
}

export const ReceiptCard = ({ item, onRemove }: ReceiptCardProps) => {
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

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <Card className="bg-secondary/50 backdrop-blur-lg border-white/10 overflow-hidden">
      <CardHeader className="bg-black/20 pb-2">
        <CardTitle className="flex justify-between items-center text-lg">
          <span>{item.purchase_details.item_type}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6"
            onClick={() => onRemove(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Receipt ID: {item.id.slice(0, 8)}...</p>
            <p className="text-xs text-gray-400 mb-1">
              Generated: {formatDate(item.created_at)}
            </p>
            <p className="text-xs text-gray-400 mb-1">
              Amount: {item.purchase_details.amount > 0 ? formatPrice(item.purchase_details.amount, item.purchase_details.currency) : 'Free'}
            </p>
            <p className="font-mono text-xs text-sos-orange mb-2 break-all">
              {item.purchase_details.serial_number}
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <span className={cn('px-3 py-1 rounded-full text-xs font-medium', getStatusColor(item.purchase_details.status))}>
              {item.purchase_details.status.toUpperCase()}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-sos-orange text-sos-orange hover:bg-sos-orange/10"
              onClick={() => navigate(`/?verificationId=${item.purchase_details.verification_id}`)}
            >
              <Receipt size={14} className="mr-1" />
              View Receipt
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
