import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Twitter, Facebook, MessageCircle, Copy, Check, Users } from 'lucide-react';
import { toast } from 'sonner';

interface ViralShareWidgetProps {
  title?: string;
  message?: string;
  url?: string;
  variant?: 'inline' | 'floating' | 'compact';
}

export const ViralShareWidget = ({ 
  title = "Check if it's stolen before you buy or sell!",
  message = "I use SafeOrStolen to verify secondhand items aren't stolen. Free IMEI, VIN & serial checks. Protect yourself!",
  url = "https://safeorstolen.com/?ref=share",
  variant = 'inline'
}: ViralShareWidgetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${message} ${url}`);
      setCopied(true);
      toast.success('Link copied! Share it with friends');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: message, url });
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
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`,
      '_blank'
    );
  };

  if (variant === 'compact') {
    return (
      <div className="flex gap-2">
        <Button onClick={handleNativeShare} size="sm" variant="outline">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button onClick={shareTwitter} size="sm" variant="ghost">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button onClick={shareFacebook} size="sm" variant="ghost">
          <Facebook className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className="fixed right-4 bottom-20 z-40 flex flex-col gap-2">
        <Button 
          onClick={handleNativeShare} 
          size="icon" 
          className="rounded-full shadow-lg h-12 w-12 bg-primary hover:bg-primary/90"
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/20 rounded-full">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Help Others Stay Safe</p>
          <p className="text-sm text-muted-foreground">
            Share SafeOrStolen with buyers & sellers
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={handleNativeShare} className="flex-1 min-w-[140px]">
          <Share2 className="mr-2 h-4 w-4" />
          Share Now
        </Button>
        <Button onClick={shareTwitter} variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button onClick={shareFacebook} variant="outline" size="icon">
          <Facebook className="h-4 w-4" />
        </Button>
        <Button onClick={shareWhatsApp} variant="outline" size="icon">
          <MessageCircle className="h-4 w-4" />
        </Button>
        <Button onClick={handleCopy} variant="outline" size="icon">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Every share helps reduce stolen goods crime
      </p>
    </div>
  );
};
