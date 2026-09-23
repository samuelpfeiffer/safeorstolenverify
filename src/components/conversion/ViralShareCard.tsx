/**
 * ViralShareCard — Post-verification viral growth surface.
 *
 * Goal: Turn every successful verification into a backlink + new visitor.
 * Shows immediately under the result with one-tap shares to the channels
 * that actually drive traffic for this product (Reddit, WhatsApp, FB, X, SMS, copy).
 *
 * Each share embeds a UTM-tagged link back to safeorstolen.com so we can
 * attribute traffic in analytics, plus a short pre-written message tuned to
 * the verification outcome (clean vs flagged).
 */

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, Copy, Check, MessageCircle, Facebook, Twitter, Send, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface ViralShareCardProps {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  itemLabel?: string;          // e.g. "iPhone 15 Pro" or "VIN ending 4837"
  shareUrl?: string;           // optional shared report URL; falls back to homepage with UTM
}

const BASE = 'https://safeorstolen.com';

export const ViralShareCard = ({ status, itemLabel, shareUrl }: ViralShareCardProps) => {
  const [copied, setCopied] = useState(false);

  // Build the canonical share URL with UTM so we can measure viral traffic
  const url = shareUrl
    ? `${shareUrl}?utm_source=share&utm_medium=user&utm_campaign=verification`
    : `${BASE}/?utm_source=share&utm_medium=user&utm_campaign=verification`;

  // Outcome-aware messaging — flagged items get a stronger PSA-style hook
  const itemText = itemLabel ? ` on ${itemLabel}` : '';
  const message =
    status === 'stolen' || status === 'lost'
      ? `⚠️ Heads up — I just ran a stolen-item check${itemText} on SafeOrStolen and it came back FLAGGED. Always verify before you buy used items:`
      : status === 'safe'
      ? `✅ Just verified${itemText} on SafeOrStolen — clean across multiple sources. Free tool, takes 3 seconds. Worth checking before you buy used:`
      : `Just used SafeOrStolen to check${itemText} against stolen-item databases. Solid free tool for buying used stuff:`;

  const encodedMsg = encodeURIComponent(message);
  const encodedUrl = encodeURIComponent(url);

  const shareTargets = [
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedMsg}%20${encodedUrl}`,
      brand: 'bg-[#25D366] hover:bg-[#1FAD52] text-white',
    },
    {
      label: 'X / Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedMsg}&url=${encodedUrl}`,
      brand: 'bg-foreground hover:bg-foreground/85 text-background',
    },
    {
      label: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedMsg}`,
      brand: 'bg-[#1877F2] hover:bg-[#145DBF] text-white',
    },
    {
      label: 'Reddit',
      icon: ExternalLink,
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedMsg}`,
      brand: 'bg-[#FF4500] hover:bg-[#D63B00] text-white',
    },
    {
      label: 'SMS',
      icon: Send,
      href: `sms:?body=${encodedMsg}%20${url}`,
      brand: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${message} ${url}`);
      setCopied(true);
      toast.success('Link copied — paste it anywhere');
      setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error('Could not copy. Try the share buttons.');
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title: 'SafeOrStolen verification',
          text: message,
          url,
        });
      } catch {
        // user cancelled — silent
      }
    } else {
      handleCopy();
    }
  };

  const headline =
    status === 'stolen' || status === 'lost'
      ? 'Warn one friend. Save them $800+.'
      : 'Help one friend avoid a stolen-item scam.';

  return (
    <Card className="mt-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
            <Share2 className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-black text-lg leading-tight">{headline}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Most people don't know this tool exists. One share = one less stolen-goods victim.
            </p>
          </div>
        </div>

        {/* One-tap channel buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {shareTargets.map(({ label, icon: Icon, href, brand }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${brand} font-semibold text-sm rounded-xl px-3 py-3 flex flex-col items-center justify-center gap-1.5 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-md`}
              aria-label={`Share on ${label}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs">{label}</span>
            </a>
          ))}
        </div>

        {/* Native share + copy fallback */}
        <div className="flex gap-2">
          <Button
            onClick={handleNativeShare}
            variant="default"
            size="lg"
            className="flex-1 font-bold"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Result
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            size="lg"
            className="font-semibold"
            aria-label="Copy share link"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-secondary" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </>
            )}
          </Button>
        </div>

        <p className="text-[11px] text-muted-foreground/70 text-center">
          Shared links open SafeOrStolen — no personal data is exposed.
        </p>
      </CardContent>
    </Card>
  );
};

export default ViralShareCard;
