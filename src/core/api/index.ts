/**
 * Core API Index
 * Central export point for all API-related functionality
 */

// Supabase
export { supabase } from '@/integrations/supabase/client';
export type { Database } from '@/integrations/supabase/types';

// Edge Functions
export { EdgeFunctions, invokeEdgeFunction } from '@/integrations';

// Services
export * from '@/services';

// API Utilities
export * from '@/utils/api';

/**
 * API Configuration
 */
export const API_CONFIG = {
  supabaseUrl: 'https://lxrdzbknktwlubbmlsqe.supabase.co',
  timeout: 30000,
  retryAttempts: 3,
  retryDelay: 1000,
} as const;

/**
 * API Error Codes
 */
export const API_ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMIT: 429,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * API Response Types
 */
export interface APIResponse<T = any> {
  data: T | null;
  error: Error | null;
  status: number;
}

/**
 * Generic API Request Handler
 */
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error('Unknown error'),
      status: 500,
    };
  }
}
