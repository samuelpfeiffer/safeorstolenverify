import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Share2, Copy, Check, Gift, Users } from 'lucide-react';
import { toast } from 'sonner';

export const InviteFriends = () => {
  const [copied, setCopied] = useState(false);
  
  const referralLink = 'https://safeorstolen.com/?ref=friend';
  const shareText = "I use SafeOrStolen to check if secondhand items are stolen before buying. Free IMEI, VIN & serial verification. Check it out!";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast.success('Link copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SafeOrStolen - Stolen Item Checker',
          text: shareText,
          url: referralLink,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      handleCopy();
    }
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralLink)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleShareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${referralLink}`)}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="border-primary/30">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Gift className="h-6 w-6 text-primary" />
          <CardTitle>Invite Friends</CardTitle>
        </div>
        <CardDescription>
          Help others avoid stolen goods. Share SafeOrStolen with buyers, sellers & businesses.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Copy link */}
        <div className="flex gap-2">
          <Input 
            value={referralLink} 
            readOnly 
            className="bg-muted/50"
          />
          <Button onClick={handleCopy} variant="outline" size="icon">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleShare} className="flex-1 min-w-[120px]">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button onClick={handleShareTwitter} variant="outline" size="sm">
            Twitter
          </Button>
          <Button onClick={handleShareFacebook} variant="outline" size="sm">
            Facebook
          </Button>
          <Button onClick={handleShareWhatsApp} variant="outline" size="sm">
            WhatsApp
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Every share helps protect more buyers & sellers from stolen goods
        </p>
      </CardContent>
    </Card>
  );
};
