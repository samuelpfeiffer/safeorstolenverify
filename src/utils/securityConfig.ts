
/**
 * Security configuration constants - these are defaults that can be overridden by database config
 */
export const SECURITY_CONFIG = {
  // Input validation limits
  MAX_SERIAL_NUMBER_LENGTH: 100,
  MAX_ITEM_TYPE_LENGTH: 50,
  MAX_FULL_NAME_LENGTH: 200,
  
  // Enhanced rate limiting (requests per hour) - will be overridden by database config
  RATE_LIMITS: {
    VERIFICATION: 10,
    SEARCH_HISTORY: 50,
    PROFILE_UPDATE: 5,
    AUTHENTICATION: 5,
    PASSWORD_RESET: 3,
    API_REQUESTS: 100
  },
  
  // Session management - will be overridden by database config
  SESSION_TIMEOUT_MINUTES: 60,
  
  // Data retention periods (in years) - will be overridden by database config
  DATA_RETENTION: {
    VERIFICATION_RESULTS: 5,
    AUDIT_LOGS: 7,
    SUBSCRIBERS: 7
  },
  
  // Security headers (for future server-side implementation)
  SECURITY_HEADERS: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  }
} as const;
