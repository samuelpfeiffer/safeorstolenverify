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
    videoId: 'yYXVcsr7yfI',
    title: 'HELP! I think the cops are looking for me....safeorstolen.com',
    seoTitle: 'HELP! I think the cops are looking for me - SafeOrStolen Demo',
    description: 'Watch what happens when you might have purchased stolen goods. SafeOrStolen helps you verify items BEFORE buying.',
    seoDescription: 'Real-life scenario: what if the cops are looking for your purchase? Verify items aren\'t stolen with SafeOrStolen before buying on Facebook Marketplace.',
    duration: '0:58',
    durationISO: 'PT58S',
    durationSeconds: 58,
    uploadDate: '2025-10-01T00:00:00Z',
    category: 'Demo',
    tags: ['stolen goods check', 'safeorstolen', 'marketplace safety', 'police', 'verification'],
    slug: 'cops-looking-for-me'
  },
  {
    id: '2',
    videoId: 'QCReOWUfGaU',
    title: 'these clowns are legit scary!🤡Safeorstolen.com',
    seoTitle: 'Scary Clown Deals - Verify Before Buying with SafeOrStolen',
    description: 'When a deal seems too crazy to be true, it probably is. Use SafeOrStolen to verify before buying from strangers.',
    seoDescription: 'Don\'t let scary deals fool you! Use SafeOrStolen to verify items before buying on Facebook Marketplace, OfferUp, and Craigslist.',
    duration: '0:27',
    durationISO: 'PT27S',
    durationSeconds: 27,
    uploadDate: '2025-10-01T00:00:00Z',
    category: 'Tips',
    tags: ['scam prevention', 'marketplace safety', 'stolen goods', 'verification', 'funny'],
    slug: 'scary-clowns'
  },
  {
    id: '3',
    videoId: 'Er_PXY0oMgE',
    title: 'Instant Stolen Item Lookup',
    seoTitle: 'Instant Stolen Item Lookup - SafeOrStolen Demo',
    description: 'See how fast and easy it is to verify items using SafeOrStolen. Instant results to protect your purchase.',
    seoDescription: 'Instant stolen item verification with SafeOrStolen. Check IMEI, VIN, and serial numbers in seconds. Free to use, no signup required.',
    duration: '0:59',
    durationISO: 'PT59S',
    durationSeconds: 59,
    uploadDate: '2025-10-01T00:00:00Z',
    category: 'Demo',
    tags: ['stolen item lookup', 'instant verification', 'IMEI check', 'VIN lookup', 'serial number'],
    slug: 'instant-lookup'
  },
  {
    id: '4',
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
    id: '5',
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
  }
];

// YouTube Shorts - vertical format videos
export interface ShortData {
  id: string;
  videoId: string;
  title: string;
  description: string;
  views: string;
  author: string;
  authorHandle: string;
}

export const YOUTUBE_SHORTS: ShortData[] = [
  {
    id: '1',
    videoId: 'yYXVcsr7yfI',
    title: 'HELP! I think the cops are looking for me....safeorstolen.com',
    description: 'What happens when you might have bought stolen goods?',
    views: '858',
    author: 'Kelly McEvoy',
    authorHandle: '@safeorstolenoffically'
  },
  {
    id: '2',
    videoId: 'QCReOWUfGaU',
    title: 'these clowns are legit scary!🤡Safeorstolen.com',
    description: 'When a deal is too good to be true...',
    views: '20',
    author: 'Kelly McEvoy',
    authorHandle: '@safeorstolenoffically'
  },
  {
    id: '3',
    videoId: 'Er_PXY0oMgE',
    title: 'Instant Stolen Item Lookup',
    description: 'See how fast SafeOrStolen verifies items',
    views: '986',
    author: 'SafeOrStolen',
    authorHandle: '@SafeOrStolen'
  }
];

export const YOUTUBE_CHANNEL = {
  name: 'SafeOrStolen',
  handle: '@SafeOrStolen',
  url: 'https://www.youtube.com/@SafeOrStolen',
  subscribeUrl: 'https://www.youtube.com/@SafeOrStolen?sub_confirmation=1',
  channelId: 'UCi0H8IK1dH0PhgVT9v2t9sw',
  videoCount: 10,
  viewCount: '2K+',
  description: 'Free video tutorials on verifying secondhand items before buying. Quick tips to avoid stolen goods on Facebook Marketplace, eBay, and Craigslist.'
};

export const KELLY_CHANNEL = {
  name: 'Kelly McEvoy',
  handle: '@safeorstolenoffically',
  url: 'https://www.youtube.com/@safeorstolenoffically',
  subscribers: 4,
  description: 'check out safeorstolen.com, protecting both buyer and seller.'
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
