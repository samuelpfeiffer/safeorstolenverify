
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robotsDirectives?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author_id: string;
  featured_image_url?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  reading_time?: number;
  view_count?: number;
  categories?: Array<{
    id: string;
    name: string;
    color?: string;
  }>;
  tags?: Array<{
    id: string;
    name: string;
  }>;
}

export interface StructuredDataSchema {
  "@context": string;
  "@type": string;
  [key: string]: any;
}
