/**
 * Trust Badge Component - Displayed when item is verified as safe
 */

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Download, Share2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface TrustBadgeProps {
  identifier: string;
  itemType: string;
  verificationDate: string;
  confidence: number;
}

export const TrustBadge = ({ identifier, itemType, verificationDate, confidence }: TrustBadgeProps) => {
  const { toast } = useToast();

  const handleDownloadCertificate = () => {
    // Create a simple certificate
    const certificate = `
SAFEORSTOLEN VERIFICATION CERTIFICATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Item Identifier: ${identifier}
Item Type: ${itemType}
Status: VERIFIED SAFE ✓
Confidence: ${confidence}%
Verification Date: ${new Date(verificationDate).toLocaleString()}
Certificate ID: ${Date.now().toString(36).toUpperCase()}

This item has been verified as safe across multiple 
databases including law enforcement, manufacturer, and 
global theft registries.

Verified by SafeOrStolen.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    const blob = new Blob([certificate], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SafeOrStolen-Certificate-${identifier}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Certificate Downloaded",
      description: "Your verification certificate has been saved.",
    });
  };

  const handleShare = async () => {
    const shareText = `✓ Verified Safe on SafeOrStolen.com\nItem: ${identifier}\nConfidence: ${confidence}%\nVerify yours at safeorstolen.com`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SafeOrStolen Verification',
          text: shareText,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard",
        description: "Share this verification result with others.",
      });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            {/* Animated Badge Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <Shield className="w-24 h-24 text-green-600 dark:text-green-400" />
                <CheckCircle className="w-10 h-10 text-white bg-green-600 rounded-full absolute bottom-0 right-0" />
              </div>
            </motion.div>

            {/* Trust Message */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                Verified Safe! ✓
              </h3>
              <p className="text-sm text-muted-foreground">
                This item has been verified across multiple databases and shows no records of theft or fraud.
              </p>
              <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                  {confidence}% Confidence Score
                </span>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-xs text-muted-foreground mb-2">Certificate Details:</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Item ID:</span>
                  <span className="font-mono font-medium">{identifier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium capitalize">{itemType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Verified:</span>
                  <span className="font-medium">{new Date(verificationDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleDownloadCertificate}
                variant="outline"
                className="flex-1 border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex-1 border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Trust Note */}
            <p className="text-xs text-muted-foreground pt-2">
              This certificate can be used as proof of verification for buyers, sellers, or insurance purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
