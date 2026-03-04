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
export type BlockReason = 'free_limit' | 'monthly_limit' | 'single_used' | null

export function useVerifyGate() {
  const [status, setStatus] = useState<GateStatus>('idle')
  const [blockReason, setBlockReason] = useState<BlockReason>(null)
  const [checksRemaining, setChecksRemaining] = useState<number | null>(null)
  const [userPlan, setUserPlan] = useState<string>('free')

  const checkGate = useCallback(async (): Promise<boolean> => {
    setStatus('checking')

    try {
      const { data: { user } } = await supabase.auth.getUser()

      // user_id is now extracted server-side from the JWT — not sent in body
      const { data, error } = await supabase.functions.invoke('check-gate', {
        body: {
          fingerprint: getOrCreateFingerprint(),
        },
      })

      if (error) {
        console.error('Gate check failed:', error)
        // Fail open — don't block on network errors (but log)
        setStatus('allowed')
        return true
      }

      if (data?.allowed) {
        setStatus('allowed')
        setChecksRemaining(data.checks_remaining ?? null)
        setUserPlan(data.plan || 'free')
        return true
      } else {
        setStatus('blocked')
        setBlockReason(data?.reason || 'free_limit')
        return false
      }
    } catch (err) {
      console.error('Gate check error:', err)
      setStatus('idle')
      return true // Fail open on errors
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
