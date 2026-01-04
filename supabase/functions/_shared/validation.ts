/**
 * Shared validation utilities for edge functions
 * Provides server-side input validation to prevent injection attacks and API abuse
 */

// Basic validation patterns (no Zod dependency in edge functions)

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Validates serial numbers (alphanumeric with hyphens/underscores)
 * Length: 3-50 characters
 */
export function validateSerialNumber(input: unknown): ValidationResult<string> {
  if (!input || typeof input !== 'string') {
    return { success: false, error: 'Serial number is required' };
  }

  const cleaned = input.trim().toUpperCase();

  if (cleaned.length < 3) {
    return { success: false, error: 'Serial number too short (minimum 3 characters)' };
  }

  if (cleaned.length > 50) {
    return { success: false, error: 'Serial number too long (maximum 50 characters)' };
  }

  // Allow only alphanumeric, hyphens, and underscores
  if (!/^[A-Z0-9\-_]+$/.test(cleaned)) {
    return { success: false, error: 'Serial number contains invalid characters. Only letters, numbers, hyphens, and underscores allowed.' };
  }

  // Check for suspicious patterns
  const suspiciousPatterns = ['SCRIPT', 'SELECT', 'INSERT', 'DELETE', 'DROP', 'UNION', '--', '/*', '*/', '<', '>'];
  for (const pattern of suspiciousPatterns) {
    if (cleaned.includes(pattern)) {
      return { success: false, error: 'Invalid characters detected' };
    }
  }

  return { success: true, data: cleaned };
}

/**
 * Validates VIN (Vehicle Identification Number)
 * Must be exactly 17 alphanumeric characters (excluding I, O, Q)
 */
export function validateVIN(input: unknown): ValidationResult<string> {
  if (!input || typeof input !== 'string') {
    return { success: false, error: 'VIN is required' };
  }

  const cleaned = input.trim().toUpperCase();

  if (cleaned.length !== 17) {
    return { success: false, error: 'VIN must be exactly 17 characters' };
  }

  // VINs don't use I, O, or Q to avoid confusion with 1, 0
  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(cleaned)) {
    return { success: false, error: 'Invalid VIN format. Must be 17 characters (A-H, J-N, P-Z, 0-9)' };
  }

  return { success: true, data: cleaned };
}

/**
 * Validates IMEI (International Mobile Equipment Identity)
 * Must be 14-15 digits
 */
export function validateIMEI(input: unknown): ValidationResult<string> {
  if (!input || typeof input !== 'string') {
    return { success: false, error: 'IMEI is required' };
  }

  const cleaned = input.trim().replace(/[\s\-]/g, ''); // Remove spaces and hyphens

  if (!/^\d{14,15}$/.test(cleaned)) {
    return { success: false, error: 'Invalid IMEI format. Must be 14-15 digits' };
  }

  return { success: true, data: cleaned };
}

/**
 * Validates item type
 */
export function validateItemType(input: unknown): ValidationResult<string> {
  if (!input || typeof input !== 'string') {
    return { success: false, error: 'Item type is required' };
  }

  const cleaned = input.trim().toLowerCase();

  const validTypes = ['phone', 'laptop', 'tablet', 'watch', 'camera', 'bike', 'vehicle', 'firearm', 'other'];
  
  if (!validTypes.includes(cleaned)) {
    return { success: false, error: 'Invalid item type' };
  }

  return { success: true, data: cleaned };
}

/**
 * Validates email address
 */
export function validateEmail(input: unknown): ValidationResult<string> {
  if (!input || typeof input !== 'string') {
    return { success: false, error: 'Email is required' };
  }

  const cleaned = input.trim().toLowerCase();

  if (cleaned.length > 255) {
    return { success: false, error: 'Email too long' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleaned)) {
    return { success: false, error: 'Invalid email format' };
  }

  return { success: true, data: cleaned };
}

/**
 * Rate limiting check helper
 */
export async function checkRateLimit(
  supabase: any,
  identifier: string,
  action: string,
  maxRequests: number = 10,
  windowMinutes: number = 60
): Promise<{ allowed: boolean; remaining?: number; error?: string }> {
  try {
    const { data, error } = await supabase.rpc('check_enhanced_rate_limit', {
      user_identifier: identifier,
      action_type: action,
      max_requests: maxRequests,
      window_minutes: windowMinutes,
      ip_address: identifier // Can be enhanced with actual IP
    });

    if (error) {
      console.error('Rate limit check failed:', error);
      return { allowed: true }; // Fail open to avoid blocking legitimate requests
    }

    return {
      allowed: data?.allowed || false,
      remaining: data?.remaining,
      error: data?.limit_exceeded ? 'Rate limit exceeded. Please try again later.' : undefined
    };
  } catch (error) {
    console.error('Rate limit exception:', error);
    return { allowed: true }; // Fail open
  }
}

/**
 * Sanitizes error messages for client responses
 */
export function sanitizeError(error: any): string {
  if (!error) return 'An error occurred';
  
  const message = typeof error === 'string' ? error : error.message || String(error);
  const lowerMessage = message.toLowerCase();
  
  // Don't expose internal details
  if (lowerMessage.includes('permission') || lowerMessage.includes('denied')) {
    return 'Access denied';
  }
  if (lowerMessage.includes('timeout')) {
    return 'Request timed out';
  }
  if (lowerMessage.includes('not found')) {
    return 'Resource not found';
  }
  
  return 'Operation failed. Please try again.';
}

/**
 * Escapes special ILIKE pattern characters (% and _) to prevent SQL pattern injection
 * Use this before passing user input to ILIKE queries
 */
export function escapeILikePattern(input: string): string {
  if (!input || typeof input !== 'string') return '';
  // Escape backslash first, then % and _ characters
  return input
    .replace(/\\/g, '\\\\')
    .replace(/%/g, '\\%')
    .replace(/_/g, '\\_');
}
