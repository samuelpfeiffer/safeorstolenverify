import { supabase } from '@/integrations/supabase/client';

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
      const { data, error } = await supabase.functions.invoke('web-crawler', {
        body: { url, options },
      });

      if (error) {
        console.error('Error invoking web-crawler function:', error);
        return {
          success: false,
          error: error.message || 'Failed to crawl website',
        };
      }

      return data;
    } catch (error) {
      console.error('Error during crawl:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to connect to crawler service',
      };
    }
  }
}
