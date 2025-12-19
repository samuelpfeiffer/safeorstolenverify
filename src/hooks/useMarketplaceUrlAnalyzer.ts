import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface MarketplaceIdentifier {
  value: string;
  type: string;
  confidence: number;
}

interface MarketplaceItemDetails {
  title?: string;
  price?: string;
  description?: string;
  seller?: string;
  sourceTitle?: string;
  sourceDescription?: string;
}

interface MarketplaceAnalysis {
  success: boolean;
  marketplace?: {
    platform: string;
    name: string;
  };
  url?: string;
  itemDetails?: MarketplaceItemDetails;
  identifiers?: MarketplaceIdentifier[];
  riskFactors?: string[];
  aiAnalyzed?: boolean;
  error?: string;
}

const SUPPORTED_MARKETPLACES = [
  { name: 'eBay', domain: 'ebay.com', example: 'ebay.com/itm/...' },
  { name: 'Facebook Marketplace', domain: 'facebook.com/marketplace', example: 'facebook.com/marketplace/item/...' },
  { name: 'Craigslist', domain: 'craigslist.org', example: 'city.craigslist.org/...' },
  { name: 'OfferUp', domain: 'offerup.com', example: 'offerup.com/item/...' },
  { name: 'Mercari', domain: 'mercari.com', example: 'mercari.com/us/item/...' },
  { name: 'Poshmark', domain: 'poshmark.com', example: 'poshmark.com/listing/...' },
];

export function useMarketplaceUrlAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<MarketplaceAnalysis | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const { toast } = useToast();

  const isValidMarketplaceUrl = useCallback((url: string): boolean => {
    if (!url) return false;
    
    try {
      const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
      const hostname = parsedUrl.hostname.toLowerCase();
      
      return SUPPORTED_MARKETPLACES.some(mp => 
        hostname.includes(mp.domain.split('.')[0]) || 
        hostname.includes(mp.domain)
      );
    } catch {
      return false;
    }
  }, []);

  const detectMarketplaceFromUrl = useCallback((url: string): string | null => {
    if (!url) return null;
    
    try {
      const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
      const hostname = parsedUrl.hostname.toLowerCase();
      
      for (const mp of SUPPORTED_MARKETPLACES) {
        if (hostname.includes(mp.domain.split('.')[0])) {
          return mp.name;
        }
      }
    } catch {
      // Invalid URL
    }
    return null;
  }, []);

  const analyzeUrl = useCallback(async (url: string): Promise<MarketplaceAnalysis> => {
    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      // Normalize URL
      const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
      
      console.log('[useMarketplaceUrlAnalyzer] Analyzing:', normalizedUrl);

      const { data, error } = await supabase.functions.invoke('marketplace-url-analyzer', {
        body: { url: normalizedUrl }
      });

      if (error) {
        console.error('[useMarketplaceUrlAnalyzer] Function error:', error);
        const result: MarketplaceAnalysis = {
          success: false,
          error: error.message || 'Failed to analyze listing'
        };
        setAnalysis(result);
        toast({
          title: 'Analysis Failed',
          description: result.error,
          variant: 'destructive'
        });
        return result;
      }

      if (!data.success) {
        const result: MarketplaceAnalysis = {
          success: false,
          error: data.error || 'Failed to analyze listing'
        };
        setAnalysis(result);
        toast({
          title: 'Analysis Failed',
          description: result.error,
          variant: 'destructive'
        });
        return result;
      }

      setAnalysis(data);
      
      // Show success toast with key findings
      const identifierCount = data.identifiers?.length || 0;
      const riskCount = data.riskFactors?.length || 0;
      
      toast({
        title: `${data.marketplace?.name} Listing Analyzed`,
        description: `Found ${identifierCount} identifier(s), ${riskCount} risk factor(s)`,
      });

      return data;

    } catch (err) {
      console.error('[useMarketplaceUrlAnalyzer] Error:', err);
      const result: MarketplaceAnalysis = {
        success: false,
        error: 'Network error. Please try again.'
      };
      setAnalysis(result);
      toast({
        title: 'Analysis Failed',
        description: result.error,
        variant: 'destructive'
      });
      return result;
    } finally {
      setIsAnalyzing(false);
    }
  }, [toast]);

  const reset = useCallback(() => {
    setAnalysis(null);
    setUrlInput('');
  }, []);

  return {
    urlInput,
    setUrlInput,
    isAnalyzing,
    analysis,
    analyzeUrl,
    reset,
    isValidMarketplaceUrl,
    detectMarketplaceFromUrl,
    supportedMarketplaces: SUPPORTED_MARKETPLACES
  };
}
