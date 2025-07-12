
import { ProductType } from '@/utils/verificationUtils';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-secondary/30 p-6 rounded-xl w-full">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-300">Type: {product.type}</p>
      <p className="text-sos-orange mt-2">{product.category}</p>
    </div>
  );
};

export default ProductCard;
