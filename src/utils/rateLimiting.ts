
interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

const rateLimitConfigs: Record<string, RateLimitConfig> = {
  verification: { maxAttempts: 10, windowMs: 60000 }, // 10 attempts per minute
  authentication: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
};

export const checkRateLimit = async (action: string): Promise<boolean> => {
  // Rate limiting is now handled by the backend via Supabase
  // This function is kept for backward compatibility but always returns true
  // Real rate limiting happens in edge functions and database
  console.log(`Rate limit check for action: ${action} - handled by backend`);
  return true;
};
