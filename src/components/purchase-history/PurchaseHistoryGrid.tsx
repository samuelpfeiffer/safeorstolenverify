
import { PurchaseHistoryCard } from './PurchaseHistoryCard';

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

interface PurchaseHistoryGridProps {
  purchases: PurchaseItem[];
}

export const PurchaseHistoryGrid = ({ purchases }: PurchaseHistoryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {purchases.map((item) => (
        <PurchaseHistoryCard key={item.id} item={item} />
      ))}
    </div>
  );
};
