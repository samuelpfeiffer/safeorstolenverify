/**
 * Self-hosted video assets (Remotion-rendered MP4s under /public/videos/).
 * Used for native <video> embeds + VideoObject schema.
 */

export interface SelfHostedVideo {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  seoDescription: string;
  src: string;          // public path to MP4
  poster: string;       // public path to poster JPG
  durationISO: string;
  durationSeconds: number;
  uploadDate: string;
  category: string;
  tags: string[];
  transcript: string;
}

export const SELF_HOSTED_VIDEOS: SelfHostedVideo[] = [
  {
    slug: 'how-it-works',
    title: 'How SafeOrStolen Works',
    seoTitle: 'How SafeOrStolen Works — Verify Stolen Items in 3 Seconds',
    description: 'Watch how SafeOrStolen verifies any IMEI, VIN, or serial number against 100+ stolen item databases in under 3 seconds.',
    seoDescription: 'See how SafeOrStolen instantly checks IMEI, VIN, license plates, and serial numbers against NICB, GSMA and 100+ databases. Free to start.',
    src: '/videos/safeorstolen-how-it-works.mp4',
    poster: '/videos/safeorstolen-how-it-works.jpg',
    durationISO: 'PT20S',
    durationSeconds: 20,
    uploadDate: '2026-04-27T00:00:00Z',
    category: 'Product Explainer',
    tags: ['how it works', 'IMEI check', 'VIN lookup', 'serial number', 'stolen item verification'],
    transcript:
      "Buying something second-hand? Don't risk it. SafeOrStolen checks any IMEI, VIN, or serial number against over one hundred stolen item databases in just three seconds. AI-powered. Always free to start. Verify before you buy. Stay safe with SafeOrStolen.",
  },
  {
    slug: 'protect-yourself',
    title: "Don't Buy Stolen — Protect Yourself on Marketplaces",
    seoTitle: "Don't Buy Stolen Goods on Marketplaces — Verify First",
    description:
      'Every year billions in stolen goods flood Facebook Marketplace, Craigslist, and OfferUp. Learn how to protect yourself from financial loss and criminal charges.',
    seoDescription:
      'Avoid buying stolen goods on Facebook Marketplace, Craigslist, and OfferUp. SafeOrStolen verifies items against 100+ police databases in 3 seconds. Free to start.',
    src: '/videos/safeorstolen-protect-yourself.mp4',
    poster: '/videos/safeorstolen-protect-yourself.jpg',
    durationISO: 'PT23S',
    durationSeconds: 23,
    uploadDate: '2026-04-27T00:00:00Z',
    category: 'Buyer Safety',
    tags: ['marketplace safety', 'facebook marketplace', 'stolen goods', 'buyer protection', 'craigslist'],
    transcript:
      'Every year, billions in stolen goods flood Facebook Marketplace, Craigslist, and OfferUp. Buy one, and you could lose your money — or face criminal charges. SafeOrStolen scans every serial number, IMEI, and VIN against police databases instantly. Verify in seconds. Buy with confidence. SafeOrStolen.com.',
  },
];

export const getSelfHostedVideoBySlug = (slug: string): SelfHostedVideo | undefined =>
  SELF_HOSTED_VIDEOS.find((v) => v.slug === slug);

export const buildSelfHostedVideoSchema = (v: SelfHostedVideo, origin = 'https://safeorstolen.com') => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.seoTitle,
  description: v.seoDescription,
  thumbnailUrl: `${origin}${v.poster}`,
  uploadDate: v.uploadDate,
  duration: v.durationISO,
  contentUrl: `${origin}${v.src}`,
  embedUrl: `${origin}/videos/${v.slug}`,
  transcript: v.transcript,
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    logo: { '@type': 'ImageObject', url: `${origin}/logo.png` },
  },
  potentialAction: {
    '@type': 'WatchAction',
    target: `${origin}/videos/${v.slug}`,
  },
});
