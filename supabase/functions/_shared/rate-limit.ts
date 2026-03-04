/**
 * In-memory IP-based rate limiter for edge functions.
 * Limits requests per IP within a sliding window.
 */

const ipRequestMap = new Map<string, { count: number; resetAt: number }>();

// Clean up stale entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of ipRequestMap) {
    if (now > val.resetAt) ipRequestMap.delete(key);
  }
}, 60_000);

export interface RateLimitOptions {
  maxRequests?: number;   // default 10
  windowMs?: number;      // default 60_000 (1 min)
}

export function checkRateLimit(
  ip: string | null,
  opts: RateLimitOptions = {}
): { allowed: boolean; remaining: number } {
  const { maxRequests = 10, windowMs = 60_000 } = opts;
  const key = ip || 'unknown';
  const now = Date.now();

  const entry = ipRequestMap.get(key);
  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  entry.count++;
  if (entry.count > maxRequests) {
    return { allowed: false, remaining: 0 };
  }
  return { allowed: true, remaining: maxRequests - entry.count };
}
