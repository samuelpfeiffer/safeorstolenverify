import { useState, useCallback } from 'react'
import { supabase } from '@/integrations/supabase/client'

// Generates a persistent anonymous ID stored in localStorage
export function getOrCreateFingerprint(): string {
  const KEY = 'sos_fp_v2'
  let fp = localStorage.getItem(KEY)
  if (!fp) {
    fp = `anon_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
    localStorage.setItem(KEY, fp)
  }
  return fp
}

export type GateStatus = 'idle' | 'checking' | 'allowed' | 'blocked'
export type BlockReason = 'free_limit' | 'monthly_limit' | 'single_used' | 'auth_required' | null

export function useVerifyGate() {
  const [status, setStatus] = useState<GateStatus>('idle')
  const [blockReason, setBlockReason] = useState<BlockReason>(null)
  const [checksRemaining, setChecksRemaining] = useState<number | null>(null)
  const [userPlan, setUserPlan] = useState<string>('free')

  /**
   * Client-side pre-check only.
   *
   * The free-usage allowance and the account requirement are enforced by the
   * verification endpoint itself (/verify-api), which refuses an
   * unauthenticated caller with AUTH_REQUIRED and a caller over their
   * allowance with LIMIT_REACHED. This hook no longer makes its own gate
   * call; it just avoids sending an obviously signed-out request.
   */
  const checkGate = useCallback(async (): Promise<boolean> => {
    setStatus('checking')

    try {
      const { data: { session } } = await supabase.auth.getSession()

      // Oct 4 2026 SALES FIX: visitors without an account get 2 free checks. The server (/verify-api)
      // counts them per browser + connection and answers LIMIT_REACHED when they're used up.
      // This used to block every signed-out visitor here, so most people could never run a check.
      void session

      setStatus('allowed')
      return true
    } catch (err) {
      console.error('Gate pre-check error:', err)
      // The server is authoritative; let the request through and let it decide.
      setStatus('allowed')
      return true
    }
  }, [])

  const resetGate = useCallback(() => {
    setStatus('idle')
    setBlockReason(null)
  }, [])

  return {
    status,
    blockReason,
    checksRemaining,
    userPlan,
    isBlocked: status === 'blocked',
    isChecking: status === 'checking',
    checkGate,
    resetGate,
  }
}
