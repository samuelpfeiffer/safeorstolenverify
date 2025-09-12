
import { sanitizeUserInput, sanitizeSerialNumber, isValidEmail, preventXSS } from './securitySanitization';

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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    errors.push('Please enter a valid email address');
  }

  // Check for suspicious patterns
  if (trimmedEmail.includes('..')) {
    errors.push('Email contains invalid characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedValue: errors.length === 0 ? trimmedEmail : undefined,
  };
};

export const validatePasswordSecurity = (password: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!password) {
    errors.push('Password is required');
    return { isValid: false, errors };
  }

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedValue: errors.length === 0 ? password : undefined,
  };
};

export const validateNameSecurity = (name: string, fieldName: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!name) {
    errors.push(`${fieldName} is required`);
    return { isValid: false, errors };
  }

  const trimmedName = name.trim();
  
  if (trimmedName.length < 2) {
    errors.push(`${fieldName} must be at least 2 characters long`);
  }

  // Check for suspicious patterns
  if (/[<>\"'&]/.test(trimmedName)) {
    errors.push(`${fieldName} contains invalid characters`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedValue: errors.length === 0 ? trimmedName : undefined,
  };
};

export const validateSerialNumberSecurity = (serialNumber: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!serialNumber) {
    errors.push('Serial number is required');
    return { isValid: false, errors };
  }

  const sanitized = sanitizeSerialNumber(serialNumber);
  
  if (sanitized.length < 1 || sanitized.length > 100) {
    errors.push('Serial number must be between 1 and 100 characters');
  }

  // Additional security check for malicious patterns
  if (sanitized !== serialNumber.trim().replace(/[^a-zA-Z0-9\s\-_]/g, '')) {
    errors.push('Serial number contains invalid characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedValue: errors.length === 0 ? sanitized : undefined,
  };
};

// Explicitly export and type the sanitizeInputSecurity function
export const sanitizeInputSecurity = (input: string): string => {
  return preventXSS(input);
};

export const getSecurityHeaders = (): Record<string, string> => {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  };
};

// Re-export all functions to ensure proper module resolution
export {
  validateEmailSecurity as validateEmail,
  validatePasswordSecurity as validatePassword,
  validateNameSecurity as validateName,
  validateSerialNumberSecurity as validateSerialNumber,
  sanitizeInputSecurity as sanitizeInput,
  getSecurityHeaders as getHeaders
};
