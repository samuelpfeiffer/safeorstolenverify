import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  price: string;
  priceId: string;
  period?: string;
  features?: string[];
  popular?: boolean;
  image?: string;
  onCheckout: (priceId: string) => void;
  isLoading?: boolean;
}

export const ProductCard = ({ 
  name, 
  price, 
  priceId, 
  period, 
  features, 
  popular, 
  image,
  onCheckout,
  isLoading 
}: ProductCardProps) => {
  const { user } = useUnifiedAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/auth?tab=signup');
      return;
    }
    onCheckout(priceId);
  };

  return (
    <Card className={`relative overflow-hidden transition-all hover-scale hover:shadow-xl hover:shadow-sos-orange/20 hover:border-sos-orange ${popular ? 'border-sos-orange scale-105 shadow-lg shadow-sos-orange/20' : 'border-border'}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-sos-orange text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        {image && (
          <div className="mx-auto mb-4 w-16 h-16 rounded-lg bg-secondary/30 flex items-center justify-center">
            <img src={image} alt={name} className="w-8 h-8 object-contain" />
          </div>
        )}
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <div className="text-3xl font-bold text-foreground">
          {price}
          {period && <span className="text-lg font-normal text-muted-foreground"> / {period}</span>}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-4 w-4 text-sos-orange mr-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Button 
          onClick={handleCheckout}
          className={`w-full ${popular ? 'bg-sos-orange hover:bg-sos-orange/90' : 'bg-secondary hover:bg-secondary/80'}`}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : user ? "Checkout" : "Sign Up & Checkout"}
        </Button>
      </CardContent>
    </Card>
  );
};