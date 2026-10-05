// Oct 5 2026: remembers which item a visitor paid to check, so after Stripe sends them back to
// /payment-success we can run that check for them instead of leaving them on a dead end.
const KEY = 'sos_pending_check';

export type PendingCheck = { q: string; type?: string; at: number };

export function savePendingCheck(q: string, type?: string) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ q, type, at: Date.now() } satisfies PendingCheck));
  } catch {
    /* storage blocked: the user can still re-run the check by hand */
  }
}

export function takePendingCheck(): PendingCheck | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as PendingCheck;
    // Only honour a recent purchase (2 hours).
    if (!v?.q || Date.now() - (v.at ?? 0) > 2 * 60 * 60 * 1000) {
      localStorage.removeItem(KEY);
      return null;
    }
    return v;
  } catch {
    return null;
  }
}

export function clearPendingCheck() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

export function pendingCheckUrl(p: PendingCheck) {
  return `/verify?q=${encodeURIComponent(p.q)}${p.type ? `&type=${encodeURIComponent(p.type)}` : ''}`;
}
