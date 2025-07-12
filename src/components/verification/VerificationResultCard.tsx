
import { cn } from '@/lib/utils';
import { ProductType } from '@/utils/verificationUtils';
import { X, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface VerificationResultCardProps {
  activeProduct: ProductType;
  onGenerateReceipt: () => void;
  onClose: () => void;
}

const VerificationResultCard = ({ activeProduct, onGenerateReceipt, onClose }: VerificationResultCardProps) => {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'safe':
        return <ShieldCheck className="h-16 w-16 text-green-500" />;
      case 'lost':
        return <ShieldAlert className="h-16 w-16 text-yellow-500 p-2 bg-yellow-500/20 rounded-full" />;
      case 'stolen':
        return <ShieldX className="h-16 w-16 text-red-500 p-2 bg-red-500/20 rounded-full" />;
      default:
        return null;
    }
  };

  return (
    <Card className={cn(
      "border-2 animate-fadeIn",
      activeProduct.status === 'safe' ? "border-green-500 bg-green-500/10" : 
      activeProduct.status === 'lost' ? "border-yellow-500 bg-yellow-500/10" : 
      "border-red-500 bg-red-500/10"
    )}>
      <div className="absolute top-2 right-2">
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-6 text-center">
        <div className="mb-6 flex justify-center">
          {getStatusIcon(activeProduct.status)}
        </div>
        <h3 className="text-xl font-bold mb-2">
          {activeProduct.status === 'safe' ? "Safe to Purchase" : 
          activeProduct.status === 'lost' ? "Reported Lost" : 
          "Reported Stolen"}
        </h3>
        <p className="text-lg mb-4">
          {activeProduct.status === 'safe' 
            ? "This item has been verified as legitimate and safe to purchase."
            : activeProduct.status === 'lost'
            ? "This item has been reported as lost. It should not be purchased."
            : "This item has been reported as stolen. Do not purchase - contact authorities."}
        </p>
        
        <div className="bg-black/30 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-semibold mb-2">Item Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-300">Name: <span className="text-white">{activeProduct.name}</span></p>
              <p className="text-gray-300">Type: <span className="text-white">{activeProduct.type}</span></p>
              <p className="text-gray-300">Category: <span className="text-white">{activeProduct.category}</span></p>
            </div>
            <div>
              <p className="text-gray-300">Serial: <span className="text-white">{activeProduct.serialNumber}</span></p>
              <p className="text-gray-300">Verified on: <span className="text-white">{new Date(activeProduct.verificationDate).toLocaleDateString()}</span></p>
              <p className="text-gray-300">Color: <span className="text-white">{activeProduct.color || 'Black'}</span></p>
            </div>
          </div>
        </div>
        
        {activeProduct.status === 'safe' ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
              View Item History
            </Button>
            <Button className="flex-1 bg-sos-orange hover:bg-sos-orange/90 text-white" onClick={onGenerateReceipt}>
              Generate Receipt
            </Button>
          </div>
        ) : activeProduct.status === 'lost' ? (
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
            Report Information
          </Button>
        ) : (
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            Contact Authorities
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default VerificationResultCard;
