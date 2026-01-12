/**
 * Secure logging utilities for edge functions
 * Redacts PII and sensitive data to comply with security best practices
 */

/**
 * Redacts email addresses for logging
 * Example: "john.doe@example.com" -> "jo***@example.com"
 */
export function redactEmail(email: string | null | undefined): string {
  if (!email) return '[no email]';
  const atIndex = email.indexOf('@');
  if (atIndex <= 2) return '***@' + email.substring(atIndex + 1);
  return email.substring(0, 2) + '***@' + email.substring(atIndex + 1);
}

/**
 * Redacts Stripe IDs for logging
 * Example: "cus_ABC123XYZ789" -> "cus_ABC***789"
 */
export function redactStripeId(id: string | null | undefined): string {
  if (!id) return '[no id]';
  if (id.length <= 10) return '***';
  const prefix = id.substring(0, 7);
  const suffix = id.substring(id.length - 3);
  return `${prefix}***${suffix}`;
}

/**
 * Redacts user IDs for logging
 * Example: "550e8400-e29b-41d4-a716-446655440000" -> "550e***0000"
 */
export function redactUserId(userId: string | null | undefined): string {
  if (!userId) return '[no user]';
  if (userId.length <= 8) return '***';
  return userId.substring(0, 4) + '***' + userId.substring(userId.length - 4);
}

/**
 * Redacts any identifier for logging
 * Shows first 4 and last 2 characters
 */
export function redactIdentifier(id: string | null | undefined): string {
  if (!id) return '[none]';
  if (id.length <= 6) return '***';
  return id.substring(0, 4) + '***' + id.substring(id.length - 2);
}

/**
 * Secure log wrapper that automatically redacts common PII patterns
 */
export function secureLog(message: string, data?: Record<string, any>): void {
  if (data) {
    const redactedData: Record<string, any> = {};
    for (const [key, value] of Object.entries(data)) {
      const lowerKey = key.toLowerCase();
      if (lowerKey.includes('email')) {
        redactedData[key] = redactEmail(value);
      } else if (lowerKey.includes('customer_id') || lowerKey.includes('customerid')) {
        redactedData[key] = redactStripeId(value);
      } else if (lowerKey.includes('session_id') || lowerKey.includes('sessionid')) {
        redactedData[key] = redactStripeId(value);
      } else if (lowerKey.includes('user_id') || lowerKey.includes('userid') || lowerKey.includes('profile_id')) {
        redactedData[key] = redactUserId(value);
      } else if (lowerKey.includes('password') || lowerKey.includes('secret') || lowerKey.includes('token')) {
        redactedData[key] = '[REDACTED]';
      } else {
        redactedData[key] = value;
      }
    }
    console.log(`${message}`, JSON.stringify(redactedData));
  } else {
    console.log(message);
  }
}
