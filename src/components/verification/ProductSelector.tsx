
import { cn } from '@/lib/utils';
import { ProductType } from '@/utils/verificationUtils';
import { Button } from '@/components/ui/button';

interface ProductSelectorProps {
  products: ProductType[];
  activeProduct: ProductType;
  onProductSelect: (product: ProductType) => void;
}

const ProductSelector = ({ products, activeProduct, onProductSelect }: ProductSelectorProps) => {
  return (
    <div className="flex flex-wrap items-center mb-8 justify-center gap-4">
      {products.map((product) => (
        <Button
          key={product.id}
          variant={activeProduct.id === product.id ? "default" : "outline"}
          className={cn(
            "flex items-center gap-2",
            activeProduct.id === product.id ? "bg-sos-orange hover:bg-sos-orange/90" : "hover:bg-transparent hover:text-sos-orange"
          )}
          onClick={() => onProductSelect(product)}
        >
          {product.icon}
          {product.name}
        </Button>
      ))}
    </div>
  );
};

export default ProductSelector;
