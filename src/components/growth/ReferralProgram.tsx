import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gift, Copy, Check, Users, Award, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/lib/auth';

export const ReferralProgram = () => {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  
  useEffect(() => {
    // Generate unique referral code from user ID or random string
    if (user?.id) {
      setReferralCode(user.id.slice(0, 8).toUpperCase());
    } else {
      // For non-logged in users, use session storage
      let code = sessionStorage.getItem('referral_code');
      if (!code) {
        code = Math.random().toString(36).substring(2, 10).toUpperCase();
        sessionStorage.setItem('referral_code', code);
      }
      setReferralCode(code);
    }
  }, [user]);

  const referralLink = `https://safeorstolen.com/?ref=${referralCode}`;
  const shareText = "🔍 Found this tool that checks if secondhand items are stolen before you buy. Already helped me avoid a sketchy phone deal! Check it:";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast.success('Referral link copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SafeOrStolen - Check Before You Buy or Sell',
          text: shareText,
          url: referralLink,
        });
        toast.success('Thanks for sharing!');
      } catch {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralLink)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText} ${referralLink}`)}`,
      '_blank'
    );
  };

  return (
    <Card className="border-primary/30 overflow-hidden">
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-background rounded-full">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Invite & Earn Rewards</h3>
            <p className="text-sm text-muted-foreground">
              Share SafeOrStolen with friends
            </p>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-6 space-y-6">
        {/* How it works */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              1
            </div>
            <p className="text-xs text-muted-foreground">Share your link</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              2
            </div>
            <p className="text-xs text-muted-foreground">Friend signs up</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              3
            </div>
            <p className="text-xs text-muted-foreground">Both benefit</p>
          </div>
        </div>

        {/* Referral link */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Referral Link</label>
          <div className="flex gap-2">
            <Input 
              value={referralLink} 
              readOnly 
              className="bg-muted/50 text-sm"
            />
            <Button onClick={handleCopy} variant="outline" size="icon">
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleShare} className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            Share Link
          </Button>
          <Button onClick={shareTwitter} variant="outline">
            Twitter
          </Button>
          <Button onClick={shareWhatsApp} variant="outline">
            WhatsApp
          </Button>
        </div>

        {/* Stats placeholder */}
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">Referral stats available after sign up</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
