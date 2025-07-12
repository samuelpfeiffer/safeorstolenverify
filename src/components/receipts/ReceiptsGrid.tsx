
import { ReceiptCard } from './ReceiptCard';

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

interface ReceiptsGridProps {
  receipts: ReceiptItem[];
  onRemoveReceipt: (id: string) => void;
}

export const ReceiptsGrid = ({ receipts, onRemoveReceipt }: ReceiptsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {receipts.map((item) => (
        <ReceiptCard key={item.id} item={item} onRemove={onRemoveReceipt} />
      ))}
    </div>
  );
};
