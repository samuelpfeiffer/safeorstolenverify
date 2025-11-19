
import { cn } from '@/lib/utils';
import { VerificationItemType } from '@/utils/verificationUtils';
import { Button } from '@/components/ui/button';

interface ItemSelectorProps {
  items: VerificationItemType[];
  activeItem: VerificationItemType;
  onItemSelect: (item: VerificationItemType) => void;
}

const ItemSelector = ({ items, activeItem, onItemSelect }: ItemSelectorProps) => {
  return (
    <div className="flex flex-wrap items-center mb-8 justify-center gap-4">
      {items.map((item) => (
        <Button
          key={item.id}
          variant={activeItem.id === item.id ? "default" : "outline"}
          className={cn(
            "flex items-center gap-2",
            activeItem.id === item.id ? "bg-sos-orange hover:bg-sos-orange/90" : "hover:bg-transparent hover:text-sos-orange"
          )}
          onClick={() => onItemSelect(item)}
        >
          {item.icon}
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default ItemSelector;
