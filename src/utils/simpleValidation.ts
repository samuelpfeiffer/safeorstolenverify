// Simplified validation utilities that don't depend on Supabase
// These work offline and don't make network calls

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedValue?: string;
}

export const validateEmailSecurity = (email: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!email) {
    errors.push('Email is required');
    return { isValid: false, errors };
  }

  const trimmedEmail = email.trim().toLowerCase();
  
  // Basic email format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmedEmail)) {
    errors.push('Please enter a valid email address');
  }

  // Check for suspicious patterns and length limits
  if (trimmedEmail.includes('..') || trimmedEmail.length > 254) {
    errors.push('Email contains invalid characters or is too long');
  }

  // Check for script injection attempts
  if (/script|javascript|vbscript/i.test(trimmedEmail)) {
    errors.push('Email contains invalid characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedValue: errors.length === 0 ? trimmedEmail : undefined,
  };
};

export const validateSerialNumberSecurity = async (serialNumber: string): Promise<ValidationResult> => {
  if (!serialNumber || typeof serialNumber !== 'string') {
    return { isValid: false, errors: ['Serial number is required'] };
  }

  // Client-side validation only - no Supabase calls
  const errors: string[] = [];
  const sanitized = serialNumber.trim().toUpperCase().replace(/[^A-Z0-9\-_]/g, '');
  
  if (sanitized.length < 3) {
    errors.push('Serial number must be at least 3 characters');
  }
  
  if (sanitized.length > 50) {
    errors.push('Serial number too long (maximum 50 characters)');
  }

  // Check for malicious patterns
  if (/SCRIPT|JAVASCRIPT|VBSCRIPT|ONLOAD|ONERROR/.test(sanitized)) {
    errors.push('Serial number contains invalid patterns');
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedValue: errors.length === 0 ? sanitized : undefined,
  };
};

export const sanitizeInputSecurity = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  return input.trim().replace(/[<>]/g, '');
};

export const checkRateLimit = async (action: string, userId?: string, ipAddress?: string): Promise<boolean> => {
  // Simple localStorage-based rate limiting
  try {
    const rateLimitConfigs: Record<string, { maxAttempts: number; windowMs: number }> = {
      verification: { maxAttempts: 10, windowMs: 60000 }, // 10 attempts per minute
      authentication: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
    };

    const config = rateLimitConfigs[action];
    if (!config) return true; // No rate limit configured

    const key = `rate_limit_${action}_${userId || 'anon'}`;
    const now = Date.now();
    
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

// No-op logging functions that don't make network calls
export const logEnhancedSecurityEvent = async (event: { action: string; details?: any }) => {
  // Just log to console in development, do nothing in production
  if (process.env.NODE_ENV === 'development') {
    console.log('Security event:', event);
  }
};