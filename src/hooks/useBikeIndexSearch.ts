/**
 * Hook for BikeIndex API search integration
 * Used in bike verification pages
 */

import { useState, useCallback } from 'react';
import { 
  searchBikeIndex, 
  searchBikeIndexStolen, 
  BikeIndexResult, 
  formatBikeResult 
} from '@/services/bikeIndexService';

interface BikeSearchState {
  results: BikeIndexResult[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

interface FormattedBikeResult {
  title: string;
  description: string;
  status: 'stolen' | 'safe' | 'unknown';
  imageUrl: string | null;
  detailUrl: string;
  stolenDate: string | null;
  stolenLocation: string | null;
  raw: BikeIndexResult;
}

export function useBikeIndexSearch() {
  const [state, setState] = useState<BikeSearchState>({
    results: [],
    isLoading: false,
    error: null,
    hasSearched: false,
  });

  const searchBike = useCallback(async (serial: string, stolenOnly: boolean = false) => {
    if (!serial || serial.length < 3) {
      setState(prev => ({
        ...prev,
        error: 'Serial number must be at least 3 characters',
        hasSearched: true,
      }));
      return [];
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const searchFn = stolenOnly ? searchBikeIndexStolen : searchBikeIndex;
      const results = await searchFn(serial);
      
      setState({
        results,
        isLoading: false,
        error: null,
        hasSearched: true,
      });
      
      return results;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Search failed';
      setState({
        results: [],
        isLoading: false,
        error: errorMessage,
        hasSearched: true,
      });
      return [];
    }
  }, []);

  const clearResults = useCallback(() => {
    setState({
      results: [],
      isLoading: false,
      error: null,
      hasSearched: false,
    });
  }, []);

  // Get formatted results for display
  const formattedResults: FormattedBikeResult[] = state.results.map(bike => ({
    ...formatBikeResult(bike),
    raw: bike,
  }));

  // Determine if any bikes are stolen
  const hasStolenBikes = state.results.some(bike => bike.stolen);
  
  // Get overall status
  const overallStatus: 'stolen' | 'safe' | 'unknown' = 
    state.results.length === 0 ? 'unknown' :
    hasStolenBikes ? 'stolen' : 'safe';

  return {
    ...state,
    formattedResults,
    hasStolenBikes,
    overallStatus,
    searchBike,
    clearResults,
  };
}
