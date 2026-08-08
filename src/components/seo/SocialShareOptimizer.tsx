import { useEffect } from 'react';
import { Share2, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SocialShareProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  hashtags?: string[];
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Social Share Optimizer - Automated sharing for backlinks and referral traffic
 * Implements Open Graph, Twitter Cards, and one-click sharing
 */
export const SocialShareOptimizer = ({
  title,
  description,
  url,
  image = 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  hashtags = ['SafeOrStolen', 'VerifyBeforeYouBuy', 'StolenItemCheck']
}: SocialShareProps) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.join(',');

  useEffect(() => {
    // Track social share events for SEO analytics
    const trackShare = (platform: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'share', {
          method: platform,
          content_type: 'page',
          item_id: currentUrl
        });
      }
    };

    // Add event listeners for share tracking
    const shareButtons = document.querySelectorAll('[data-share-platform]');
    shareButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const platform = (e.currentTarget as HTMLElement).getAttribute('data-share-platform');
        if (platform) trackShare(platform);
      });
    });
  }, [currentUrl]);

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${hashtagString}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };


  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success('Link copied to clipboard!');
  };

  return (
    <>
      {/* 
        NOTE: Open Graph and Twitter Card meta tags are managed by SEOHead component.
        Do NOT add duplicate og:* or twitter:* tags here.
      */}

      <div className="flex items-center gap-2 flex-wrap">

        <Button
          variant="outline"
          size="sm"
          onClick={shareToWhatsApp}
          data-share-platform="whatsapp"
          className="gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={copyLink}
          data-share-platform="copy"
          className="gap-2"
        >
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Copy Link</span>
        </Button>
      </div>
    </>
  );
};
