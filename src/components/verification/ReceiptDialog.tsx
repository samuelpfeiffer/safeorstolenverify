
import { ProductType } from '@/utils/verificationUtils';
import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useReceiptGenerator } from '@/hooks/useReceiptGenerator';

interface ReceiptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeProduct: ProductType | null;
}

const ReceiptDialog = ({ open, onOpenChange, activeProduct }: ReceiptDialogProps) => {
  const { generateReceipt, isGenerating } = useReceiptGenerator();

  if (!activeProduct) return null;
  
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

  const handleSaveReceipt = async () => {
    if (!activeProduct.serialNumber) return;
    
    const receipt = await generateReceipt(
      activeProduct.id, 
      activeProduct.serialNumber, 
      activeProduct.category
    );
    
    if (receipt) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-md">
        <DialogHeader>
          <DialogTitle>Verification Receipt</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 my-2">
          <div className="bg-black/30 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
              <h3 className="font-bold text-lg">SOS Verification</h3>
              <p className="text-xs text-gray-400">Receipt #{Math.floor(Math.random() * 1000000)}</p>
            </div>
            
            <div className="space-y-2 mb-4">
              <p><strong>Item:</strong> {activeProduct.name}</p>
              <p><strong>Serial:</strong> {activeProduct.serialNumber}</p>
              <p><strong>Category:</strong> {activeProduct.category}</p>
              <p><strong>Verification Date:</strong> {new Date(activeProduct.verificationDate).toLocaleDateString()}</p>
              <p><strong>Status:</strong> <span className={
                activeProduct.status === 'safe' ? "text-green-400" : 
                activeProduct.status === 'lost' ? "text-yellow-400" : 
                "text-red-400"
              }>
                {activeProduct.status.toUpperCase()}
              </span></p>
            </div>
            
            <div className="border-t border-gray-700 pt-2 text-center">
              <div className="flex justify-center mb-2">
                {getStatusIcon(activeProduct.status)}
              </div>
              <p className="text-sm text-gray-300">
                This verification receipt confirms the current status of the item.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button 
            className="bg-sos-orange hover:bg-sos-orange/90 w-full" 
            onClick={handleSaveReceipt}
            disabled={isGenerating}
          >
            {isGenerating ? 'Saving...' : 'Save Receipt'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptDialog;
