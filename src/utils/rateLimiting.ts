
interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

const rateLimitConfigs: Record<string, RateLimitConfig> = {
  verification: { maxAttempts: 10, windowMs: 60000 }, // 10 attempts per minute
  authentication: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
};

export const checkRateLimit = async (action: string): Promise<boolean> => {
  try {
    const config = rateLimitConfigs[action];
    if (!config) return true; // No rate limit configured

    const key = `rate_limit_${action}`;
    const now = Date.now();
    
    // Get stored attempts from localStorage (in a real app, use Redis or database)
    const storedData = localStorage.getItem(key);
    let attempts: number[] = storedData ? JSON.parse(storedData) : [];
    
    // Filter out attempts outside the time window
    attempts = attempts.filter(timestamp => now - timestamp < config.windowMs);
    
    // Check if we've exceeded the limit
    if (attempts.length >= config.maxAttempts) {
      console.warn(`Rate limit exceeded for action: ${action}`);
      return false;
    }
    
    // Add current attempt
    attempts.push(now);
    localStorage.setItem(key, JSON.stringify(attempts));
    
    return true;
  } catch (error) {
    console.error('Rate limiting check failed:', error);
    return true; // Fail open - allow the request
  }
};
