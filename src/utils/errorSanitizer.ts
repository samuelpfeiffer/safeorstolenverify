/**
 * Error Sanitization Utility
 * Prevents exposure of internal database structure and sensitive details to clients
 */

const SAFE_ERROR_MESSAGES: Record<string, string> = {
  'permission denied': 'Access denied',
  'violates': 'Invalid data provided',
  'timeout': 'Request timed out',
  'statement timeout': 'Request timed out',
  'not found': 'Resource not found',
  'duplicate': 'Resource already exists',
  'unique constraint': 'Resource already exists',
  'foreign key': 'Invalid reference',
  'check constraint': 'Invalid data provided',
  'null value': 'Required field missing',
  'invalid input': 'Invalid data provided',
  'relation': 'Resource not available',
  'column': 'Invalid data structure',
  'table': 'Resource not available',
};

/**
 * Sanitizes error messages to prevent information leakage
 * @param error - The error object or message to sanitize
 * @returns Safe, user-friendly error message
 */
export function sanitizeError(error: any): string {
  if (!error) return 'An error occurred';
  
  const message = typeof error === 'string' 
    ? error 
    : error.message || String(error);
  
  const lowerMessage = message.toLowerCase();
  
  // Match against safe patterns
  for (const [pattern, safeMsg] of Object.entries(SAFE_ERROR_MESSAGES)) {
    if (lowerMessage.includes(pattern)) {
      return safeMsg;
    }
  }
  
  // Default safe message
  return 'Operation failed. Please try again.';
}

/**
 * Logs full error details (for debugging) and returns sanitized message
 * @param error - The error to log and sanitize
 * @param context - Context description for logging
 * @returns Sanitized error message safe for display
 */
export function logAndSanitizeError(
  error: any,
  context: string
): string {
  // Log full error server-side only (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context}]`, error);
  }
  
  // Return sanitized message
  return sanitizeError(error);
}

/**
 * Creates a safe error object for API responses
 * @param error - The original error
 * @param context - Context for logging
 * @returns Safe error object
 */
export function createSafeErrorResponse(
  error: any,
  context: string
): { error: string; code: string } {
  const safeMessage = logAndSanitizeError(error, context);
  
  return {
    error: safeMessage,
    code: 'OPERATION_ERROR'
  };
}
