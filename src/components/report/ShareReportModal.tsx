import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Copy, Facebook, Twitter, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  shareCode: string;
  itemType?: string;
}

export function ShareReportModal({
  isOpen,
  onClose,
  shareUrl,
  shareCode,
  itemType,
}: ShareReportModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: 'Link Copied!',
        description: 'Share link copied to clipboard',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Copy Failed',
        description: 'Please copy the link manually',
        variant: 'destructive',
      });
    }
  };

  const shareOnFacebook = () => {
    const text = `⚠️ STOLEN ITEM ALERT: Help recover this ${itemType || 'item'}!`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareOnTwitter = () => {
    const text = `⚠️ STOLEN ITEM ALERT: Help recover this ${itemType || 'item'}! Check before buying: `;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareOnWhatsApp = () => {
    const text = `⚠️ STOLEN ITEM ALERT: Help recover this ${itemType || 'item'}! Check before buying: ${shareUrl}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Report Submitted Successfully!
          </DialogTitle>
          <DialogDescription>
            Share this link to help others avoid purchasing your stolen item.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Share Code Display */}
          <div className="bg-muted p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-1">Report Code</p>
            <p className="text-2xl font-mono font-bold tracking-wider">{shareCode}</p>
          </div>

          {/* Share URL Input */}
          <div className="flex gap-2">
            <Input value={shareUrl} readOnly className="flex-1" />
            <Button onClick={handleCopy} variant="outline" size="icon">
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Social Share Buttons */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">Share on social media</p>
            <div className="flex justify-center gap-3">
              <Button
                onClick={shareOnFacebook}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                Facebook
              </Button>
              <Button
                onClick={shareOnTwitter}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Twitter className="h-5 w-5 text-sky-500" />
                Twitter
              </Button>
              <Button
                onClick={shareOnWhatsApp}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Share2 className="h-5 w-5 text-green-600" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
            <p className="text-sm text-orange-800 dark:text-orange-200">
              💡 <strong>Tip:</strong> Share this link on marketplace listings, community groups, and local classifieds to maximize visibility.
            </p>
          </div>

          <Button onClick={onClose} className="w-full">
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
