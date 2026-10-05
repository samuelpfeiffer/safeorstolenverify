/**
 * Browser-side client for the app's own verification endpoint.
 *
 * Replaces the previous pair of Supabase function calls (the gate and the
 * verification service). The endpoint gates itself: an account is required,
 * so there is no separate gate call.
 */

import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';

export const VERIFY_ENDPOINT = '/verify-api';

export type VerifyStatus = 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';

export interface VerifyProvider {
  provider: string;
  status: VerifyStatus;
  confidence: number;
  message: string;
  details?: unknown;
  responseTime?: number;
}

export interface VerifyApiResult {
  identifier: string;
  itemType: string;
  finalStatus: VerifyStatus;
  confidence: number | null;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  providers: VerifyProvider[];
  checkedSources: string[];
  checksRemaining: number | null;
  plan: string;
  timestamp: string;
  /** Saved check id; used to issue a verification certificate. */
  checkId?: string | null;
}

export interface VerifyApiError {
  message: string;
  /** AUTH_REQUIRED | LIMIT_REACHED | INVALID_INPUT | INTERNAL_ERROR | NETWORK_ERROR */
  code: string;
  status: number;
  reason?: string;
}

export interface VerifyApiResponse {
  data: VerifyApiResult | null;
  error: VerifyApiError | null;
}

export interface VerifyRequest {
  identifier: string;
  itemType?: string | null;
  fingerprint?: string | null;
}

/**
 * Run a verification. Mirrors the previous `{ data, error }` shape so call
 * sites stay simple.
 */
export async function requestVerification(request: VerifyRequest): Promise<VerifyApiResponse> {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData.session?.access_token;

    // No account needed for the 2 free checks; the server enforces the limit
    // per browser and per connection (Sept 30 2026).

    let fingerprint = request.fingerprint ?? null;
    if (!fingerprint && typeof window !== 'undefined') {
      try {
        fingerprint = getOrCreateFingerprint();
      } catch {
        fingerprint = null;
      }
    }

    const response = await fetch(VERIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        identifier: request.identifier,
        itemType: request.itemType ?? null,
        fingerprint,
      }),
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        data: null,
        error: {
          code: payload?.code ?? 'INTERNAL_ERROR',
          status: response.status,
          reason: payload?.reason,
          message:
            payload?.message ??
            payload?.error ??
            'Unable to complete verification. Please try again.',
        },
      };
    }

    return { data: payload as VerifyApiResult, error: null };
  } catch (error: any) {
    return {
      data: null,
      error: {
        code: 'NETWORK_ERROR',
        status: 0,
        message: error?.message ?? 'Unable to reach the verification service.',
      },
    };
  }
}
