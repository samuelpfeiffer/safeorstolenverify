
import React from 'react';
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
// import { useReceiptGenerator } from '@/hooks/useReceiptGenerator'; // Removed - receipts table dropped
import { CertifiedSafeBadge } from './CertifiedSafeBadge';
import { EmbeddableSafeBadge } from '@/components/badges/EmbeddableSafeBadge';
import { ShareAfterVerification } from '@/components/growth';

interface RealVerificationCardProps {
  verificationResult?: VerificationResult;
}

const RealVerificationCard = ({ verificationResult }: RealVerificationCardProps) => {
  // Receipt generation removed - table dropped
  const isGenerating = false;

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
          color: 'text-muted-foreground',
          bgColor: 'bg-muted border-border',
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
    // Receipt generation removed - table dropped
    console.log('Receipt generation disabled');
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
                <p className="text-sm text-muted-foreground mt-1">
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Item Details</span>
              </div>
              <div className="pl-6 space-y-1">
                <p><span className="font-medium">Serial:</span> {verificationResult.serial_number}</p>
                <p><span className="font-medium">Type:</span> {itemTypeDisplay}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="h-4 w-4" />
                <span>Additional Details</span>
              </div>
              <div className="pl-6 text-sm text-foreground">
                {Object.entries(verificationResult.details).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {String(value)}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
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
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CertifiedSafeBadge size="sm" />
              </div>
              
              {/* Trust Badge Description */}
              <div className="space-y-3 bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Your Trust Badge - Proof of Authenticity
                </h4>
                <p className="text-sm text-muted-foreground">
                  You've received an official SafeOrStolen Trust Badge - a verified digital certificate that proves your item is legitimate and clear of any theft or loss reports.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Buyer Protection:</span>
                      <span className="text-muted-foreground"> Show potential buyers your item has been professionally verified</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Instant Credibility:</span>
                      <span className="text-muted-foreground"> Display the badge on listings or social media to build trust</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Legal Documentation:</span>
                      <span className="text-muted-foreground"> Keep as proof of due diligence in your records</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Shareable Verification:</span>
                      <span className="text-muted-foreground"> Embed or link the badge anywhere to demonstrate authenticity</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic border-t border-primary/10 pt-3">
                  This isn't just a checkmark - it's your shield against fraud and your guarantee of legitimacy.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                Always verify the seller's identity and request proof of ownership before completing any transaction.
              </p>
              
              {/* Embeddable Trust Badge */}
              <div className="pt-4 border-t">
                <EmbeddableSafeBadge 
                  verificationId={verificationResult.id}
                  status="safe"
                  itemName={verificationResult.serial_number}
                />
              </div>
            </div>
          )}
          {verificationResult.status === 'stolen' && (
            <div className="space-y-2">
              <p className="text-destructive font-medium">⚠ Do not purchase this item</p>
              <p className="text-sm text-muted-foreground">Consider reporting this listing to the platform and local authorities.</p>
            </div>
          )}
          {verificationResult.status === 'lost' && (
            <div className="space-y-2">
              <p className="text-accent font-medium">⚠ Exercise extreme caution</p>
              <p className="text-sm text-muted-foreground">This item has been reported lost. Contact the seller for proof of legitimate ownership.</p>
            </div>
          )}
          {verificationResult.status === 'unknown' && (
            <div className="space-y-2">
              <p className="text-secondary font-medium">? Unable to verify status</p>
              <p className="text-sm text-muted-foreground">Request additional documentation from the seller, including purchase receipts and warranty information.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Viral Share Widget */}
      <ShareAfterVerification 
        itemType={itemTypeDisplay}
        result={verificationResult.status === 'safe' ? 'safe' : verificationResult.status === 'unknown' ? 'unknown' : 'flagged'}
        serialNumber={verificationResult.serial_number}
      />
    </div>
  );
};

export default RealVerificationCard;
