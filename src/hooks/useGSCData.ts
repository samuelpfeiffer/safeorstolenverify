import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface URLInspectionResult {
  url: string;
  verdict: string;
  indexingState: string;
  coverageState: string;
  robotsTxtState: string;
  pageFetchState: string;
  lastCrawlTime?: string;
  googleCanonical?: string;
  userCanonical?: string;
  crawledAs?: string;
}

export function useGSCConnection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: isConnected, isLoading: isCheckingConnection } = useQuery({
    queryKey: ['gsc-connection'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return false;

      const { data } = await supabase
        .from('gsc_oauth_tokens')
        .select('id')
        .eq('user_id', user.id)
        .single();

      return !!data;
    },
  });

  const connectMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.functions.invoke('gsc-api', {
        body: {},
        method: 'GET',
      });

      if (error) throw error;
      
      if (data.authUrl) {
        window.location.href = data.authUrl;
      } else if (data.needsSetup) {
        throw new Error(data.message);
      }
    },
    onError: (error: Error) => {
      toast({
        title: 'Connection Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const disconnectMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.functions.invoke('gsc-api', {
        body: { action: 'disconnect' },
        method: 'POST',
      });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gsc-connection'] });
      toast({
        title: 'Disconnected',
        description: 'GSC account disconnected successfully',
      });
    },
  });

  return {
    isConnected,
    isCheckingConnection,
    connect: connectMutation.mutate,
    disconnect: disconnectMutation.mutate,
    isConnecting: connectMutation.isPending,
    isDisconnecting: disconnectMutation.isPending,
  };
}

export function useURLInspection() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (url: string) => {
      const { data, error } = await supabase.functions.invoke('gsc-api', {
        body: { action: 'url-inspection', inspectionUrl: url },
        method: 'POST',
      });

      if (error) throw error;
      return data as { inspectionResult: { indexStatusResult: URLInspectionResult } };
    },
    onError: (error: Error) => {
      toast({
        title: 'Inspection Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });
}

export function useGSCUrlStatus() {
  return useQuery({
    queryKey: ['gsc-url-status'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gsc_url_status')
        .select('*')
        .order('checked_at', { ascending: false });

      if (error) throw error;
      
      // Map snake_case database fields to camelCase interface
      return (data || []).map(row => ({
        url: row.url,
        verdict: row.verdict,
        indexingState: row.indexing_state,
        coverageState: row.coverage_state,
        robotsTxtState: row.robots_txt_state,
        pageFetchState: row.page_fetch_state,
        lastCrawlTime: row.last_crawl_time,
        googleCanonical: row.google_canonical,
        userCanonical: row.user_canonical,
        crawledAs: row.crawled_as,
      })) as URLInspectionResult[];
    },
  });
}

export function useSearchAnalytics(startDate: string, endDate: string) {
  return useQuery({
    queryKey: ['gsc-search-analytics', startDate, endDate],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('gsc-api', {
        body: {
          action: 'search-analytics',
          startDate,
          endDate,
          dimensions: ['query', 'page'],
        },
        method: 'POST',
      });

      if (error) throw error;
      return data;
    },
    enabled: !!startDate && !!endDate,
  });
}