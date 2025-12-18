
import { VerificationItemType } from '@/utils/verificationUtils';
import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
// import { useReceiptGenerator } from '@/hooks/useReceiptGenerator'; // Removed - receipts table dropped

interface ReceiptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeItem: VerificationItemType | null;
}

const ReceiptDialog = ({ open, onOpenChange, activeItem }: ReceiptDialogProps) => {
  // Receipt generation removed - table dropped
  const isGenerating = false;

  if (!activeItem) return null;
  
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
    // Receipt generation removed - table dropped
    console.log('Receipt generation disabled');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card text-foreground border-border max-w-md">
        <DialogHeader>
          <DialogTitle>Verification Receipt</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 my-2">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex justify-between items-center mb-4 border-b border-border pb-2">
              <h3 className="font-bold text-lg">SOS Verification</h3>
              <p className="text-xs text-muted-foreground">Receipt #{Math.floor(Math.random() * 1000000)}</p>
            </div>
            
            <div className="space-y-2 mb-4">
              <p><strong>Item:</strong> {activeItem.name}</p>
              <p><strong>Serial:</strong> {activeItem.serialNumber}</p>
              <p><strong>Category:</strong> {activeItem.category}</p>
              <p><strong>Verification Date:</strong> {new Date(activeItem.verificationDate).toLocaleDateString()}</p>
              <p><strong>Status:</strong> <span className={
                activeItem.status === 'safe' ? "text-primary" : 
                activeItem.status === 'lost' ? "text-accent" : 
                "text-destructive"
              }>
                {activeItem.status.toUpperCase()}
              </span></p>
            </div>
            
            <div className="border-t border-border pt-2 text-center">
              <div className="flex justify-center mb-2">
                {getStatusIcon(activeItem.status)}
              </div>
              <p className="text-sm text-muted-foreground">
                This verification receipt confirms the current status of the item.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button 
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
