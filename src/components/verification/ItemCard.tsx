
import { VerificationItemType } from '@/utils/verificationUtils';

interface ItemCardProps {
  item: VerificationItemType;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="bg-secondary/30 p-6 rounded-xl w-full">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
      <p className="text-muted-foreground">Type: {item.type}</p>
      <p className="text-primary mt-2">{item.category}</p>
    </div>
  );
};

export default ItemCard;
