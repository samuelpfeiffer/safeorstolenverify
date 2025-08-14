
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  HelpCircle,
  Shield,
  Clock,
  Database,
  Download
} from 'lucide-react';
import { VerificationResult } from '@/utils/typeGuards';
import { getItemTypeDisplayName } from '@/utils/itemTypeDetector';
import { useReceiptGenerator } from '@/hooks/useReceiptGenerator';

interface RealVerificationCardProps {
  verificationResult?: VerificationResult;
}

const RealVerificationCard = ({ verificationResult }: RealVerificationCardProps) => {
  const { generateReceipt, isGenerating } = useReceiptGenerator();

  // Show placeholder when no verification result is provided
  if (!verificationResult) {
    return (
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-xl text-primary">
                Ready to Verify Items
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Enter a serial number above to check if an item is safe to purchase
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
              <p className="text-sm font-medium">Safe Items</p>
              <p className="text-xs text-muted-foreground">Clear to purchase</p>
            </div>
            <div className="space-y-2">
              <XCircle className="h-6 w-6 text-red-600 mx-auto" />
              <p className="text-sm font-medium">Stolen Items</p>
              <p className="text-xs text-muted-foreground">Avoid purchasing</p>
            </div>
            <div className="space-y-2">
              <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto" />
              <p className="text-sm font-medium">Lost Items</p>
              <p className="text-xs text-muted-foreground">Exercise caution</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'safe':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-50 border-green-200',
          badge: 'Safe to Purchase',
          badgeVariant: 'default' as const,
          title: 'Item Appears Safe',
          description: 'No matches found in stolen goods databases. This item appears legitimate.'
        };
      case 'stolen':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-50 border-red-200',
          badge: 'Reported Stolen',
          badgeVariant: 'destructive' as const,
          title: 'Item Reported Stolen',
          description: 'This item matches entries in stolen goods databases. Avoid purchasing.'
        };
      case 'lost':
        return {
          icon: AlertTriangle,
          color: 'text-orange-600',
          bgColor: 'bg-orange-50 border-orange-200',
          badge: 'Reported Lost',
          badgeVariant: 'secondary' as const,
          title: 'Item Reported Lost',
          description: 'This item has been reported as lost. Exercise caution.'
        };
      case 'unknown':
        return {
          icon: HelpCircle,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50 border-yellow-200',
          badge: 'Unable to Verify',
          badgeVariant: 'outline' as const,
          title: 'Verification Inconclusive',
          description: 'Unable to determine status. Request additional documentation from seller.'
        };
      default:
        return {
          icon: AlertTriangle,
          color: 'text-gray-600',
          bgColor: 'bg-gray-50 border-gray-200',
          badge: 'Error',
          badgeVariant: 'outline' as const,
          title: 'Verification Error',
          description: 'Unable to complete verification. Please try again.'
        };
    }
  };

  const statusInfo = getStatusInfo(verificationResult.status);
  const StatusIcon = statusInfo.icon;
  const itemTypeDisplay = getItemTypeDisplayName(verificationResult.item_type);

  const handleGenerateReceipt = async () => {
    await generateReceipt(
      verificationResult.id, 
      verificationResult.serial_number, 
      verificationResult.item_type
    );
  };

  return (
    <div className="space-y-6">
      <Card className={`${statusInfo.bgColor} border-2`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <StatusIcon className={`h-8 w-8 ${statusInfo.color}`} />
              <div>
                <CardTitle className={`text-xl ${statusInfo.color}`}>
                  {statusInfo.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  {statusInfo.description}
                </p>
              </div>
            </div>
            <Badge variant={statusInfo.badgeVariant} className="text-sm">
              {statusInfo.badge}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4" />
                <span>Item Details</span>
              </div>
              <div className="pl-6 space-y-1">
                <p><span className="font-medium">Serial:</span> {verificationResult.serial_number}</p>
                <p><span className="font-medium">Type:</span> {itemTypeDisplay}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Database className="h-4 w-4" />
                <span>Verification Info</span>
              </div>
              <div className="pl-6 space-y-1">
                <p><span className="font-medium">Source:</span> {verificationResult.source}</p>
                <p><span className="font-medium">Confidence:</span> {verificationResult.confidence}%</p>
              </div>
            </div>
          </div>

          {verificationResult.details && (
            <div className="border-t pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4" />
                <span>Additional Details</span>
              </div>
              <div className="pl-6 text-sm text-gray-700">
                {Object.entries(verificationResult.details).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {String(value)}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Verified on {new Date(verificationResult.verified_at).toLocaleString()}
            </div>
            <Button 
              onClick={handleGenerateReceipt}
              disabled={isGenerating}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              {isGenerating ? 'Generating...' : 'Generate Receipt'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations based on status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          {verificationResult.status === 'safe' && (
            <div className="space-y-2">
              <p className="text-green-700">✓ This item appears safe to purchase</p>
              <p className="text-sm text-gray-600">However, always verify the seller's identity and request proof of ownership.</p>
            </div>
          )}
          {verificationResult.status === 'stolen' && (
            <div className="space-y-2">
              <p className="text-red-700">⚠ Do not purchase this item</p>
              <p className="text-sm text-gray-600">Consider reporting this listing to the platform and local authorities.</p>
            </div>
          )}
          {verificationResult.status === 'lost' && (
            <div className="space-y-2">
              <p className="text-orange-700">⚠ Exercise extreme caution</p>
              <p className="text-sm text-gray-600">This item has been reported lost. Contact the seller for proof of legitimate ownership.</p>
            </div>
          )}
          {verificationResult.status === 'unknown' && (
            <div className="space-y-2">
              <p className="text-yellow-700">? Unable to verify status</p>
              <p className="text-sm text-gray-600">Request additional documentation from the seller, including purchase receipts and warranty information.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RealVerificationCard;
