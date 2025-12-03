import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2, Facebook, Twitter, Copy, Check, Shield, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface ShareableVerificationBadgeProps {
  itemType: string;
  identifier: string;
  status: 'safe' | 'stolen' | 'unknown';
  verifiedAt: Date;
}

export const ShareableVerificationBadge = ({
  itemType,
  identifier,
  status,
  verifiedAt
}: ShareableVerificationBadgeProps) => {
  const [copied, setCopied] = useState(false);
  
  // Mask identifier for privacy (show first 4 and last 4 characters)
  const maskedId = identifier.length > 8 
    ? `${identifier.slice(0, 4)}****${identifier.slice(-4)}`
    : identifier;
  
  const shareUrl = `https://safeorstolen.com/verify?ref=badge`;
  const shareText = status === 'safe' 
    ? `✅ This ${itemType} has been verified SAFE by SafeOrStolen - the stolen item checker for buyers, sellers & businesses. Check before you buy!`
    : `I use SafeOrStolen to verify items aren't stolen before buying. Protect yourself too!`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleShareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(url, '_blank');
  };

  if (status !== 'safe') return null;

  return (
    <Card className="border-primary/50 bg-primary/5">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          {/* Badge Display */}
          <div className="inline-flex flex-col items-center gap-2 p-4 bg-background rounded-xl border-2 border-primary">
            <Shield className="h-10 w-10 text-primary" />
            <Badge variant="default" className="text-sm px-3 py-1">
              ✓ VERIFIED SAFE
            </Badge>
            <p className="text-xs text-muted-foreground">
              {itemType} • {maskedId}
            </p>
            <p className="text-xs text-muted-foreground">
              Verified {verifiedAt.toLocaleDateString()}
            </p>
            <p className="text-xs font-medium text-primary">
              SafeOrStolen.com
            </p>
          </div>

          {/* Share prompt */}
          <div className="space-y-3">
            <p className="text-sm font-medium">
              Share this verification to build trust with buyers!
            </p>
            
            {/* Share buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShareFacebook}
                className="gap-2"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShareTwitter}
                className="gap-2"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShareWhatsApp}
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopyLink}
                className="gap-2"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Sharing helps other buyers & sellers discover SafeOrStolen
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
