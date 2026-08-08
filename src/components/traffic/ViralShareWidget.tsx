import React, { useState } from 'react';
import { Share2, Copy, Twitter, Facebook, MessageCircle, Check, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const ViralShareWidget = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = 'https://safeorstolen.com';
  const shareText = '🔍 Before buying ANYTHING secondhand, check if it\'s stolen FREE at SafeOrStolen.com - Saved me from buying a stolen phone! #SafeOrStolen #ProtectYourself';
  
  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success('Link copied! Share it everywhere!');
    setTimeout(() => setCopied(false), 3000);
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };


  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };


  const shareReddit = () => {
    window.open(`https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('Check if items are stolen before buying - FREE tool')}`, '_blank');
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 bg-card/95 backdrop-blur-sm p-3 rounded-xl border border-border shadow-xl">
      <div className="text-xs font-bold text-center text-primary mb-1">
        <Gift className="h-4 w-4 mx-auto mb-1" />
        SHARE
      </div>
      
      

      <Button
        size="icon"
        variant="ghost"
        onClick={shareWhatsApp}
        className="h-10 w-10 rounded-full hover:bg-[#25D366] hover:text-white transition-all hover:scale-110"
        title="Share on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
      
      <Button
        size="icon"
        variant="ghost"
        onClick={shareReddit}
        className="h-10 w-10 rounded-full hover:bg-[#FF4500] hover:text-white transition-all hover:scale-110"
        title="Share on Reddit"
      >
        <Share2 className="h-5 w-5" />
      </Button>
      
      <Button
        size="icon"
        variant="ghost"
        onClick={copyLink}
        className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
        title="Copy Link"
      >
        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      </Button>
    </div>
  );
};
