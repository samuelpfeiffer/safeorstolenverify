import generalVerifyAsset from '@/assets/video/Before_You_buy_or_sell_verify.mp4.asset.json';
import facebookAsset from '@/assets/video/Before_you_buy_or_sell_on_Facebook_Marketplace.mp4.asset.json';
import ebayAsset from '@/assets/video/Before_you_buy_or_sell_on_eBay_Verify.mp4.asset.json';
import secondhandAsset from '@/assets/video/Before_you_buy_or_sell_any_secondhand_item.mp4.asset.json';
import transactionAsset from '@/assets/video/Before_any_transaction_i_verify.mp4.asset.json';

export const safeOrStolenVideos = [
  {
    id: 'verify',
    title: 'Verify Before You Buy or Sell',
    caption: 'Run a SafeOrStolen check before completing a secondhand sale.',
    src: generalVerifyAsset.url,
  },
  {
    id: 'facebook',
    title: 'Facebook Marketplace',
    caption: 'Verify the item before meeting a Facebook Marketplace buyer or seller.',
    src: facebookAsset.url,
  },
  {
    id: 'ebay',
    title: 'eBay',
    caption: 'Check the identifier before buying or selling through eBay.',
    src: ebayAsset.url,
  },
  {
    id: 'secondhand',
    title: 'Any Secondhand Item',
    caption: 'Check phones, vehicles, plates, electronics, firearms, and bicycles.',
    src: secondhandAsset.url,
  },
  {
    id: 'transaction',
    title: 'Before Any Transaction',
    caption: 'Make verification part of every secondhand transaction.',
    src: transactionAsset.url,
  },
] as const;

type SafeOrStolenVideoProps = {
  src: string;
  title: string;
  caption?: string;
  className?: string;
};

export function SafeOrStolenVideo({ src, title, caption, className = '' }: SafeOrStolenVideoProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-lg border border-primary/30 bg-card shadow-lg">
        <video
          className="block aspect-[29/43] w-full object-cover"
          controls
          playsInline
          preload="metadata"
          aria-label={`${title} video`}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support video playback. <a href={src}>Watch {title}</a>.
        </video>
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}