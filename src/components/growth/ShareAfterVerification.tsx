import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Twitter, Facebook, MessageCircle, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ShareAfterVerificationProps {
  itemType: string;
  result: 'safe' | 'flagged' | 'unknown';
  serialNumber?: string;
}

export const ShareAfterVerification = ({ itemType, result, serialNumber }: ShareAfterVerificationProps) => {
  const isSafe = result === 'safe';
  
  const shareMessage = isSafe
    ? `✅ Just verified a ${itemType} is NOT stolen using SafeOrStolen! Instant IMEI, VIN & serial checks. Protect yourself before buying secondhand:`
    : `🔍 Used SafeOrStolen to check a ${itemType} before buying. Smart move! Free stolen item verification for IMEI, VIN & serials:`;
  
  const shareUrl = 'https://safeorstolen.com/?ref=verified';

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SafeOrStolen Verification',
          text: shareMessage,
          url: shareUrl,
        });
        toast.success('Thanks for sharing!');
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${shareMessage} ${shareUrl}`);
      toast.success('Link copied!');
    }
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareMessage)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareMessage} ${shareUrl}`)}`,
      '_blank'
    );
  };

  return (
    <Card className={`mt-6 ${isSafe ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-primary/30 bg-primary/5'}`}>
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            {isSafe ? (
              <CheckCircle className="h-5 w-5 text-emerald-500" />
            ) : (
              <Shield className="h-5 w-5 text-primary" />
            )}
            <span className="font-medium">
              {isSafe ? 'Item Verified Safe!' : 'Verification Complete'}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Help others protect themselves - share SafeOrStolen
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Button onClick={handleNativeShare} size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share Result
            </Button>
            <Button onClick={shareTwitter} variant="outline" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button onClick={shareFacebook} variant="outline" size="sm">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button onClick={shareWhatsApp} variant="outline" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
