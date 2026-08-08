import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Share2, Facebook, Twitter, Copy, Check, Shield, 
  Download, MessageCircle, Mail, Code
} from 'lucide-react';
import { toast } from 'sonner';

interface VerifiedCleanBadgeProps {
  itemType: string;
  identifier: string;
  verifiedAt: Date;
  onShare?: () => void;
}

export const VerifiedCleanBadge = ({
  itemType,
  identifier,
  verifiedAt,
  onShare
}: VerifiedCleanBadgeProps) => {
  const [copied, setCopied] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  
  const maskedId = identifier.length > 8 
    ? `${identifier.slice(0, 4)}****${identifier.slice(-4)}`
    : identifier;
  
  const shareUrl = `https://safeorstolen.com/verify?ref=badge`;
  const shareText = `✅ VERIFIED CLEAN by SafeOrStolen! This ${itemType} has been verified NOT stolen. Check your items before buying: ${shareUrl}`;
  
  const embedCode = `<a href="${shareUrl}" target="_blank" style="display:inline-block;padding:8px 16px;background:#22c55e;color:white;border-radius:8px;text-decoration:none;font-family:system-ui;font-weight:bold;">✓ Verified Clean by SafeOrStolen</a>`;

  const handleCopy = async (text: string, type: 'link' | 'embed') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'link') {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        setEmbedCopied(true);
        setTimeout(() => setEmbedCopied(false), 2000);
      }
      toast.success(`${type === 'link' ? 'Link' : 'Embed code'} copied!`);
      onShare?.();
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      email: `mailto:?subject=Verified Clean Item&body=${encodeURIComponent(shareText)}`
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
      onShare?.();
    }
  };

  return (
    <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          {/* Main Badge */}
          <div className="inline-flex flex-col items-center gap-3 p-6 bg-background rounded-2xl border-2 border-primary shadow-lg">
            <div className="relative">
              <Shield className="h-16 w-16 text-primary" />
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                <Check className="h-4 w-4" />
              </div>
            </div>
            <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
              ✓ VERIFIED CLEAN
            </Badge>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                {itemType.toUpperCase()} • {maskedId}
              </p>
              <p className="text-xs text-muted-foreground">
                Verified {verifiedAt.toLocaleDateString()}
              </p>
            </div>
            <p className="text-sm font-bold text-primary">
              SafeOrStolen.com
            </p>
          </div>

          {/* Share Message */}
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">
                🎉 Share this badge to build buyer trust!
              </p>
              <p className="text-xs text-muted-foreground">
                Buyers are 3x more likely to purchase verified items
              </p>
            </div>
            
            {/* Quick Share Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-xs"
                onClick={() => handleShare('email')}
              >
                <Mail className="h-3 w-3" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VerifiedCleanBadge;
