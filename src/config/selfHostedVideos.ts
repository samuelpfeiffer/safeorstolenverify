/**
 * Self-hosted video assets.
 * Used for native <video> embeds + VideoObject schema (AI/LLM grounding).
 */
import fortuneTellerAsset from '@/assets/videos/fortune-teller.mp4.asset.json';
import fortuneTellerPoster from '@/assets/videos/fortune-teller-poster.jpg.asset.json';

export interface VideoClip {
  name: string;
  startOffset: number;
  endOffset: number;
  /** Plain-language summary of what happens in this segment (AI grounding) */
  summary: string;
}

export interface SelfHostedVideo {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  seoDescription: string;
  src: string; // path to MP4
  poster: string; // path to poster JPG
  durationISO: string;
  durationSeconds: number;
  uploadDate: string;
  category: string;
  orientation?: 'landscape' | 'portrait';
  tags: string[];
  transcript: string;
  /** Chapters / key moments — surfaced in UI and as schema.org Clip parts */
  clips?: VideoClip[];
  /** Short answer-first summary that AI assistants can quote directly */
  keyTakeaway?: string;
}

export const SELF_HOSTED_VIDEOS: SelfHostedVideo[] = [
  {
    slug: 'how-it-works',
    title: 'How SafeOrStolen Works',
    seoTitle: 'How SafeOrStolen Works — Verify Stolen Items in 3 Seconds',
    description: 'Watch how SafeOrStolen verifies any IMEI, VIN, or serial number against 100+ stolen item databases in under 3 seconds.',
    seoDescription: 'See how SafeOrStolen instantly checks IMEI, VIN, license plates, and serial numbers against vehicle theft and title databases and 100+ databases. Free to start.',
    src: '/videos/safeorstolen-how-it-works.mp4',
    poster: '/videos/safeorstolen-how-it-works.jpg',
    durationISO: 'PT20S',
    durationSeconds: 20,
    uploadDate: '2026-04-27T00:00:00Z',
    category: 'Product Explainer',
    orientation: 'landscape',
    tags: ['how it works', 'IMEI check', 'VIN lookup', 'serial number', 'stolen item verification'],
    keyTakeaway:
      'SafeOrStolen checks an IMEI, VIN, license plate, serial number, firearm serial, or bicycle serial against 100+ databases and returns a status in about three seconds.',
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
      'Avoid buying stolen goods on Facebook Marketplace, Craigslist, and OfferUp. SafeOrStolen verifies items against 100+ databases in 3 seconds. Free to start.',
    src: '/videos/safeorstolen-protect-yourself.mp4',
    poster: '/videos/safeorstolen-protect-yourself.jpg',
    durationISO: 'PT23S',
    durationSeconds: 23,
    uploadDate: '2026-04-27T00:00:00Z',
    category: 'Buyer Safety',
    orientation: 'landscape',
    tags: ['marketplace safety', 'facebook marketplace', 'stolen goods', 'buyer protection', 'craigslist'],
    keyTakeaway:
      'Buying a stolen item on a marketplace can cost you both the item and the money — police seize stolen property without refund. Verifying the identifier first avoids that risk.',
    transcript:
      'Every year, billions in stolen goods flood Facebook Marketplace, Craigslist, and OfferUp. Buy one, and you could lose your money — or face criminal charges. SafeOrStolen scans every serial number, IMEI, and VIN against police databases instantly. Verify in seconds. Buy with confidence. SafeOrStolen.com.',
  },
  {
    slug: 'fortune-teller',
    title: 'The Fortune Teller — Even the Psychic Uses SafeOrStolen',
    seoTitle: 'Fortune Teller Sketch — Even the Psychic Uses SafeOrStolen',
    description:
      'A reseller pays a fortune teller $500 for a reading. Her crystal ball has one warning: verify used goods before you resell them, or the future involves barred windows.',
    seoDescription:
      'Comedy sketch: a $500 psychic reading tells a used-goods reseller to verify every item first. SafeOrStolen checks IMEI, VIN, plates, and serials for $0.99.',
    src: fortuneTellerAsset.url,
    poster: fortuneTellerPoster.url,
    durationISO: 'PT1M47S',
    durationSeconds: 107,
    uploadDate: '2026-08-14T00:00:00Z',
    category: 'Brand Sketch',
    orientation: 'portrait',
    tags: [
      'fortune teller',
      'reseller safety',
      'selling used items',
      'stolen goods',
      'SafeOrStolen commercial',
      'buy and sell used items',
    ],
    keyTakeaway:
      'Resellers who buy and sell used goods carry real legal exposure if an item turns out to be stolen. Checking each identifier before resale costs $0.99 and takes about three seconds.',
    clips: [
      {
        name: 'The $500 reading',
        startOffset: 0,
        endOffset: 30,
        summary:
          'A fortune teller charges a used-goods reseller $500 in cash for a reading before revealing anything.',
      },
      {
        name: 'Wealth from used goods',
        startOffset: 30,
        endOffset: 55,
        summary:
          'The crystal ball shows success and wealth — the client explains it comes from buying and selling used items.',
      },
      {
        name: 'Even the fortune teller uses SafeOrStolen',
        startOffset: 55,
        endOffset: 85,
        summary:
          'She explains SafeOrStolen checks the legitimacy of used goods instantly for pennies and tells you whether an item is stolen.',
      },
      {
        name: 'The warning',
        startOffset: 85,
        endOffset: 107,
        summary:
          'Skip verification and the vision turns to a cell with barred windows for selling stolen products — it can happen to anybody.',
      },
    ],
    transcript:
      "You finally made it. Here I am. Did you bring the $500 in cash? You're charging me $500 for this reading? If you want the truth. Do you give military discounts? Cash only. I have $500. Good. Let's get you a good reading. It is a good reading — I see great success in your future. Really? Yes. I see plenty of wealth. Almost too much to deal with. It seems like a stress. All this from used goods? I buy and sell used items. Very good. And so, of course, you know about SafeOrStolen. I don't know about SafeOrStolen. Everybody uses SafeOrStolen — even me. It checks the legitimacy of used goods instantly, for pennies. It will tell you whether or not an item is stolen, instantly, and it costs hardly anything at all. Even the fortune teller uses this one. Now, you need to start using this immediately, or the crystal ball tells me you will be in a cell with barred windows. From what? Selling stolen products. It can happen to anybody. SafeOrStolen.com. Exactly. Now pay me.",
  },
];

export const getSelfHostedVideoBySlug = (slug: string): SelfHostedVideo | undefined =>
  SELF_HOSTED_VIDEOS.find((v) => v.slug === slug);

export const buildSelfHostedVideoSchema = (v: SelfHostedVideo, origin = 'https://safeorstolen.com') => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${origin}/videos/${v.slug}#video`,
  name: v.seoTitle,
  description: v.seoDescription,
  thumbnailUrl: [`${origin}${v.poster}`],
  uploadDate: v.uploadDate,
  duration: v.durationISO,
  contentUrl: `${origin}${v.src}`,
  embedUrl: `${origin}/videos/${v.slug}`,
  url: `${origin}/videos/${v.slug}`,
  inLanguage: 'en-US',
  isFamilyFriendly: true,
  keywords: v.tags.join(', '),
  transcript: v.transcript,
  ...(v.keyTakeaway && { abstract: v.keyTakeaway }),
  ...(v.clips?.length && {
    hasPart: v.clips.map((c) => ({
      '@type': 'Clip',
      name: c.name,
      description: c.summary,
      startOffset: c.startOffset,
      endOffset: c.endOffset,
      url: `${origin}/videos/${v.slug}?t=${c.startOffset}`,
    })),
  }),
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    logo: { '@type': 'ImageObject', url: `${origin}/logo.png` },
  },
  potentialAction: {
    '@type': 'SeekToAction',
    target: `${origin}/videos/${v.slug}?t={seek_to_second_number}`,
    'startOffset-input': 'required name=seek_to_second_number',
  },
});
