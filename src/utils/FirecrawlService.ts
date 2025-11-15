interface CrawlStatusResponse {
  success: true;
  status: string;
  completed: number;
  total: number;
  creditsUsed: number;
  expiresAt: string;
  data: any[];
}

interface ErrorResponse {
  success: false;
  error: string;
}

type CrawlResponse = CrawlStatusResponse | ErrorResponse;

export interface CrawlOptions {
  limit?: number;
  scrapeOptions?: {
    formats?: ('markdown' | 'html' | 'rawHtml')[];
    includeTags?: string[];
    excludeTags?: string[];
    onlyMainContent?: boolean;
  };
}

export class FirecrawlService {
  static async crawlWebsite(
    url: string,
    options?: CrawlOptions
  ): Promise<{ success: boolean; error?: string; data?: any }> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/web-crawler`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ url, options }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        return {
          success: false,
          error: `HTTP ${response.status}: ${errorText}`,
        };
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error during crawl:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to connect to crawler service',
      };
    }
  }
}
