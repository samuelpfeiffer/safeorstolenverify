
import { cn } from '@/lib/utils';
import { VerificationItemType } from '@/utils/verificationUtils';
import { X, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface VerificationResultCardProps {
  activeItem: VerificationItemType;
  onGenerateReceipt: () => void;
  onClose: () => void;
}

const VerificationResultCard = ({ activeItem, onGenerateReceipt, onClose }: VerificationResultCardProps) => {
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
      activeItem.status === 'safe' ? "border-green-500 bg-green-500/10" : 
      activeItem.status === 'lost' ? "border-yellow-500 bg-yellow-500/10" : 
      "border-red-500 bg-red-500/10"
    )}>
      <div className="absolute top-2 right-2">
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-6 text-center">
        <div className="mb-6 flex justify-center">
          {getStatusIcon(activeItem.status)}
        </div>
        <h3 className="text-xl font-bold mb-2">
          {activeItem.status === 'safe' ? "Safe to Purchase" : 
          activeItem.status === 'lost' ? "Reported Lost" : 
          "Reported Stolen"}
        </h3>
        <p className="text-lg mb-4">
          {activeItem.status === 'safe' 
            ? "This item has been verified as legitimate and safe to purchase."
            : activeItem.status === 'lost'
            ? "This item has been reported as lost. It should not be purchased."
            : "This item has been reported as stolen. Do not purchase - contact authorities."}
        </p>
        
        <div className="bg-card/30 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-semibold mb-2">Item Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Name: <span className="text-foreground">{activeItem.name}</span></p>
              <p className="text-muted-foreground">Type: <span className="text-foreground">{activeItem.type}</span></p>
              <p className="text-muted-foreground">Category: <span className="text-foreground">{activeItem.category}</span></p>
            </div>
            <div>
              <p className="text-muted-foreground">Serial: <span className="text-foreground">{activeItem.serialNumber}</span></p>
              <p className="text-muted-foreground">Verified on: <span className="text-foreground">{new Date(activeItem.verificationDate).toLocaleDateString()}</span></p>
              <p className="text-muted-foreground">Color: <span className="text-foreground">{activeItem.color || 'Black'}</span></p>
            </div>
          </div>
        </div>
        
        {activeItem.status === 'safe' ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="flex-1" variant="default">
              View Item History
            </Button>
            <Button className="flex-1" onClick={onGenerateReceipt}>
              Generate Receipt
            </Button>
          </div>
        ) : activeItem.status === 'lost' ? (
          <Button className="w-full" variant="secondary">
            Report Information
          </Button>
        ) : (
          <Button className="w-full" variant="destructive">
            Contact Authorities
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default VerificationResultCard;
