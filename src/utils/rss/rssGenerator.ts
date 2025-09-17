import { format } from 'date-fns';

export interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: Date;
  guid: string;
  category?: string;
  author?: string;
  image?: string;
}

export interface RSSFeedConfig {
  title: string;
  description: string;
  link: string;
  language: string;
  managingEditor: string;
  webMaster: string;
  category: string;
  ttl: number;
  image?: {
    url: string;
    title: string;
    link: string;
    width?: number;
    height?: number;
  };
}

export const generateRSSFeed = (config: RSSFeedConfig, items: RSSItem[]): string => {
  const now = new Date();
  const buildDate = format(now, 'EEE, dd MMM yyyy HH:mm:ss xx');

  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${config.title}]]></title>
    <description><![CDATA[${config.description}]]></description>
    <link>${config.link}</link>
    <atom:link href="${config.link}/feed.xml" rel="self" type="application/rss+xml" />
    <language>${config.language}</language>
    <managingEditor>${config.managingEditor}</managingEditor>
    <webMaster>${config.webMaster}</webMaster>
    <category>${config.category}</category>
    <pubDate>${buildDate}</pubDate>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <ttl>${config.ttl}</ttl>
    <generator>SafeOrStolen RSS Generator</generator>`;

  if (config.image) {
    rss += `
    <image>
      <url>${config.image.url}</url>
      <title><![CDATA[${config.image.title}]]></title>
      <link>${config.image.link}</link>
      ${config.image.width ? `<width>${config.image.width}</width>` : ''}
      ${config.image.height ? `<height>${config.image.height}</height>` : ''}
    </image>`;
  }

  items.forEach(item => {
    const pubDate = format(item.pubDate, 'EEE, dd MMM yyyy HH:mm:ss xx');
    rss += `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${item.guid}</guid>
      ${item.category ? `<category>${item.category}</category>` : ''}
      ${item.author ? `<dc:creator><![CDATA[${item.author}]]></dc:creator>` : ''}
      ${item.image ? `<enclosure url="${item.image}" type="image/jpeg" />` : ''}
    </item>`;
  });

  rss += `
  </channel>
</rss>`;

  return rss;
};

export const getMainFeedItems = (): RSSItem[] => {
  const baseUrl = 'https://safeorstolen.com';
  const now = new Date();
  
  return [
    {
      title: 'Ultimate Guide to Buying Used Items Safely in 2024',
      link: `${baseUrl}/guide/buying-safely`,
      description: 'Complete guide to protecting yourself when buying used electronics, cars, and other items. Learn how to verify serial numbers, IMEI codes, and VIN numbers.',
      pubDate: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      guid: `${baseUrl}/guide/buying-safely`,
      category: 'Consumer Protection',
      author: 'SafeOrStolen Security Team',
      image: `${baseUrl}/images/buying-guide-hero.jpg`
    },
    {
      title: '2024 Stolen Goods Statistics: What Buyers Need to Know',
      link: `${baseUrl}/statistics/stolen-goods-2024`,
      description: 'Latest statistics on stolen goods, fraud rates, and how to protect yourself in the secondhand market. Data-driven insights for smart consumers.',
      pubDate: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      guid: `${baseUrl}/statistics/stolen-goods-2024`,
      category: 'Research & Statistics',
      author: 'SafeOrStolen Research Team',
      image: `${baseUrl}/images/statistics-hero.jpg`
    },
    {
      title: 'Free Tool: Check if Your Phone, Car, or Item is Stolen',
      link: `${baseUrl}/`,
      description: 'Instantly verify if used items are stolen before you buy. Check IMEI numbers for phones, VIN numbers for cars, and serial numbers for electronics.',
      pubDate: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
      guid: `${baseUrl}/`,
      category: 'Tools & Services',
      author: 'SafeOrStolen Team',
      image: `${baseUrl}/images/tool-hero.jpg`
    },
    {
      title: 'How to Check IMEI Numbers: Complete Phone Verification Guide',
      link: `${baseUrl}/services`,
      description: 'Step-by-step guide to checking IMEI numbers for used phones. Protect yourself from buying stolen or blacklisted devices.',
      pubDate: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      guid: `${baseUrl}/services#imei-check`,
      category: 'Phone Verification',
      author: 'SafeOrStolen Security Team',
      image: `${baseUrl}/images/phone-verification.jpg`
    }
  ];
};

export const getMainFeedConfig = (): RSSFeedConfig => ({
  title: 'SafeOrStolen - Consumer Protection & Stolen Goods Verification',
  description: 'Latest updates on consumer protection, stolen goods verification, and safe buying practices. Get notified about new tools and security insights.',
  link: 'https://safeorstolen.com',
  language: 'en-US',
  managingEditor: 'team@safeorstolen.com (SafeOrStolen Team)',
  webMaster: 'webmaster@safeorstolen.com (SafeOrStolen Webmaster)',
  category: 'Consumer Protection',
  ttl: 720, // 12 hours
  image: {
    url: 'https://safeorstolen.com/images/rss-logo.png',
    title: 'SafeOrStolen',
    link: 'https://safeorstolen.com',
    width: 144,
    height: 144
  }
});