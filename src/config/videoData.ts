/**
 * Centralized Video Data Configuration
 * All SafeOrStolen YouTube videos with SEO metadata
 */

export interface VideoData {
  id: string;
  videoId: string;
  title: string;
  seoTitle: string;
  description: string;
  seoDescription: string;
  duration: string;
  durationISO: string; // ISO 8601 format for schema
  durationSeconds: number;
  uploadDate: string; // ISO 8601 format
  category: string;
  tags: string[];
  slug: string;
}

export const YOUTUBE_VIDEOS: VideoData[] = [
  {
    id: '1',
    videoId: 'Er_PXY0oMgE',
    title: 'How to Check if Items Are Stolen Before Buying',
    seoTitle: 'How to Check if Items Are Stolen Before Buying (Free Tool)',
    description: 'Understanding the scope of the stolen goods crisis and how SafeOrStolen protects both buyers AND sellers from financial loss.',
    seoDescription: 'Verify items aren\'t stolen in 30 seconds with SafeOrStolen. Check IMEI, VIN, and serial numbers FREE before buying on Facebook Marketplace, Craigslist, eBay, and OfferUp.',
    duration: '0:59',
    durationISO: 'PT59S',
    durationSeconds: 59,
    uploadDate: '2024-12-01T00:00:00Z',
    category: 'Introduction',
    tags: ['stolen goods check', 'safeorstolen', 'IMEI checker', 'VIN lookup', 'serial number verification'],
    slug: 'stolen-item-check'
  },
  {
    id: '2',
    videoId: '8SC44GuLi-M',
    title: 'Facebook Marketplace Safety: Verify Items Before Meeting',
    seoTitle: 'Facebook Marketplace Safety: Verify Items Before Meeting Seller',
    description: 'Don\'t buy stolen items on Facebook Marketplace! Learn how to verify EVERY item before you meet the seller.',
    seoDescription: 'Don\'t buy stolen items on Facebook Marketplace! Use SafeOrStolen to verify EVERY item before you meet the seller. Check electronics, vehicles, tools and more.',
    duration: '0:59',
    durationISO: 'PT59S',
    durationSeconds: 59,
    uploadDate: '2024-12-05T00:00:00Z',
    category: 'Marketplace Safety',
    tags: ['facebook marketplace', 'marketplace safety', 'scam prevention', 'buyer protection', 'verify items'],
    slug: 'marketplace-safety'
  },
  {
    id: '3',
    videoId: 'yYXVcsr7yfI',
    title: 'How to Check if a Car is Stolen Using VIN',
    seoTitle: 'How to Check if a Car is Stolen Using VIN Number (Free Method)',
    description: 'Buying a used car? Check the VIN FIRST! Learn where to find VIN and what a VIN check reveals about vehicle history.',
    seoDescription: 'Buying a used car? Check the VIN FIRST! SafeOrStolen verifies vehicles against NCIC stolen vehicle database, insurance theft claims, police reports, and state DMV records.',
    duration: '0:59',
    durationISO: 'PT59S',
    durationSeconds: 59,
    uploadDate: '2024-12-10T00:00:00Z',
    category: 'VIN Check',
    tags: ['VIN check', 'stolen car check', 'used car buying', 'vehicle history', 'VIN lookup'],
    slug: 'vin-check'
  },
  {
    id: '4',
    videoId: '-3INS_aSCzw',
    title: 'Free IMEI Checker - Verify Your Phone',
    seoTitle: 'Free IMEI Checker - Verify Your Phone Isn\'t Stolen or Blacklisted',
    description: 'Buying a used iPhone or Android? Check the IMEI first! Learn how to find IMEI and what our checker reveals.',
    seoDescription: 'Buying a used iPhone or Android? Check the IMEI first! SafeOrStolen IMEI checker shows stolen status, blacklisted carriers, insurance claims, and activation lock status.',
    duration: '0:59',
    durationISO: 'PT59S',
    durationSeconds: 59,
    uploadDate: '2024-12-15T00:00:00Z',
    category: 'IMEI Check',
    tags: ['IMEI checker', 'stolen phone check', 'blacklisted phone', 'iPhone check', 'Android check'],
    slug: 'imei-check'
  },
  {
    id: '5',
    videoId: 'KM_VIDEO_1', // Placeholder - needs actual YouTube ID from Kelly McEvoy's video
    title: 'I got to call Jessica hmm...safeorstolen.com',
    seoTitle: 'Real Life Stolen Item Verification - SafeOrStolen Demo',
    description: 'Watch a real-life demonstration of verifying items using SafeOrStolen before buying.',
    seoDescription: 'See SafeOrStolen in action! Real verification demo showing how to check if items are stolen before buying on Facebook Marketplace.',
    duration: '0:32',
    durationISO: 'PT32S',
    durationSeconds: 32,
    uploadDate: '2025-11-01T00:00:00Z',
    category: 'Demo',
    tags: ['safeorstolen demo', 'verification example', 'marketplace safety', 'stolen item check', 'real demo'],
    slug: 'real-demo-jessica'
  },
  {
    id: '6',
    videoId: 'KM_VIDEO_2', // Placeholder - needs actual YouTube ID from Kelly McEvoy's video
    title: 'Too good to be true...?safeorstolen.com',
    seoTitle: 'When a Deal is Too Good to Be True - Verify with SafeOrStolen',
    description: 'Deal too good to be true? It probably is. Learn how to verify before you buy.',
    seoDescription: 'Is that deal too good to be true? Use SafeOrStolen to verify items before buying. Don\'t fall for stolen goods scams on Facebook Marketplace.',
    duration: '0:45',
    durationISO: 'PT45S',
    durationSeconds: 45,
    uploadDate: '2025-11-01T00:00:00Z',
    category: 'Tips',
    tags: ['too good to be true', 'scam prevention', 'stolen goods', 'verification', 'marketplace tips'],
    slug: 'too-good-to-be-true'
  }
];

export const YOUTUBE_CHANNEL = {
  name: 'SafeOrStolen',
  handle: '@SafeOrStolen',
  url: 'https://www.youtube.com/@SafeOrStolen',
  subscribeUrl: 'https://www.youtube.com/@SafeOrStolen?sub_confirmation=1',
  channelId: 'UCi0H8IK1dH0PhgVT9v2t9sw',
  videoCount: 6,
  viewCount: '5K+',
  description: 'Free video tutorials on verifying secondhand items before buying. Quick tips to avoid stolen goods on Facebook Marketplace, eBay, and Craigslist.'
};

export const getVideoById = (videoId: string): VideoData | undefined => {
  return YOUTUBE_VIDEOS.find(v => v.videoId === videoId);
};

export const getVideoBySlug = (slug: string): VideoData | undefined => {
  return YOUTUBE_VIDEOS.find(v => v.slug === slug);
};

export const getFeaturedVideo = (): VideoData => {
  return YOUTUBE_VIDEOS[0];
};

export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'maxres'): string => {
  const qualityMap = {
    default: 'default',
    hq: 'hqdefault',
    mq: 'mqdefault',
    sd: 'sddefault',
    maxres: 'maxresdefault'
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
};

export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const getYouTubeShortsUrl = (videoId: string): string => {
  return `https://www.youtube.com/shorts/${videoId}`;
};

export const getYouTubeWatchUrl = (videoId: string): string => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};
