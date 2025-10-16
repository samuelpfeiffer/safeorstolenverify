/**
 * Input Validation Utilities
 * Production-ready validation schemas and helpers
 */

import { z } from 'zod';

/**
 * Common validation schemas
 */
export const ValidationSchemas = {
  // Email validation
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase(),

  // Name validation
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  // Serial number / IMEI validation
  serialNumber: z.string()
    .trim()
    .toUpperCase()
    .min(3, 'Serial number must be at least 3 characters')
    .max(50, 'Serial number must be less than 50 characters')
    .regex(/^[A-Z0-9\-_]+$/, 'Only letters, numbers, hyphens, and underscores allowed'),

  // Phone number validation
  phone: z.string()
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),

  // URL validation
  url: z.string()
    .trim()
    .url('Invalid URL format')
    .max(2048, 'URL too long'),

  // Message/text validation
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),

  // Strong password validation
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
};

/**
 * Form validation schemas
 */
export const FormSchemas = {
  contact: z.object({
    name: ValidationSchemas.name,
    email: ValidationSchemas.email,
    subject: z.string().trim().min(5, 'Subject must be at least 5 characters').max(200, 'Subject too long'),
    message: ValidationSchemas.message,
  }),

  verification: z.object({
    serialNumber: ValidationSchemas.serialNumber,
    itemType: z.enum(['phone', 'laptop', 'tablet', 'vehicle', 'other'], {
      errorMap: () => ({ message: 'Please select a valid item type' }),
    }),
  }),

  signup: z.object({
    email: ValidationSchemas.email,
    password: ValidationSchemas.password,
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  }),

  signin: z.object({
    email: ValidationSchemas.email,
    password: z.string().min(1, 'Password is required'),
  }),
};

/**
 * Sanitize user input for safe URL usage
 */
export const sanitizeForUrl = (input: string): string => {
  return encodeURIComponent(input.trim());
};

/**
 * Sanitize user input for safe display
 */
export const sanitizeForDisplay = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .substring(0, 1000); // Limit length
};

/**
 * Validate and sanitize serial number
 */
export const validateSerialNumber = (serial: string): { valid: boolean; sanitized?: string; error?: string } => {
  try {
    const sanitized = ValidationSchemas.serialNumber.parse(serial);
    return { valid: true, sanitized };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, error: error.errors[0]?.message || 'Invalid serial number' };
    }
    return { valid: false, error: 'Validation failed' };
  }
};

/**
 * Check for SQL injection patterns
 */
export const containsSqlInjection = (input: string): boolean => {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/i,
    /(--|;|\/\*|\*\/|xp_|sp_)/i,
    /('|(\\')|(\\\\')|(;)|(--))/,
  ];
  
  return sqlPatterns.some(pattern => pattern.test(input));
};

/**
 * Check for XSS patterns
 */
export const containsXss = (input: string): boolean => {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi, // onclick, onerror, etc.
    /<iframe/gi,
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Comprehensive input security check
 */
export const isInputSafe = (input: string): { safe: boolean; reason?: string } => {
  if (containsSqlInjection(input)) {
    return { safe: false, reason: 'Potential SQL injection detected' };
  }
  
  if (containsXss(input)) {
    return { safe: false, reason: 'Potential XSS attack detected' };
  }
  
  if (input.length > 10000) {
    return { safe: false, reason: 'Input too long' };
  }
  
  return { safe: true };
};
