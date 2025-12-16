import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Share2, Facebook, Twitter, Copy, Check, Shield, 
  Download, MessageCircle, Linkedin, Mail, Code
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
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
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
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('facebook')}
                className="gap-2 hover:bg-blue-50 hover:border-blue-300"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('twitter')}
                className="gap-2 hover:bg-sky-50 hover:border-sky-300"
              >
                <Twitter className="h-4 w-4 text-sky-500" />
                Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('whatsapp')}
                className="gap-2 hover:bg-green-50 hover:border-green-300"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleCopy(shareText, 'link')}
                className="gap-2"
              >
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>

            {/* Advanced Options */}
            <div className="flex justify-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 text-xs">
                    <Code className="h-3 w-3" />
                    Get Embed Code
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Embed Verified Badge</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Add this badge to your listing to show buyers the item is verified clean.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-xs break-all">{embedCode}</code>
                    </div>
                    <Button 
                      onClick={() => handleCopy(embedCode, 'embed')} 
                      className="w-full gap-2"
                    >
                      {embedCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {embedCopied ? 'Copied!' : 'Copy Embed Code'}
                    </Button>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Preview:</p>
                      <a 
                        href={shareUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold text-sm no-underline"
                      >
                        ✓ Verified Clean by SafeOrStolen
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-xs"
                onClick={() => handleShare('linkedin')}
              >
                <Linkedin className="h-3 w-3" />
                LinkedIn
              </Button>
              
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
