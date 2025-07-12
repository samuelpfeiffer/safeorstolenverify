
/**
 * Input validation utilities for security
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateSerialNumber = (serialNumber: string): ValidationResult => {
  if (!serialNumber || typeof serialNumber !== 'string') {
    return { isValid: false, error: 'Serial number is required' };
  }

  const trimmed = serialNumber.trim();
  
  if (trimmed.length < 1 || trimmed.length > 100) {
    return { isValid: false, error: 'Serial number must be between 1 and 100 characters' };
  }

  // Allow alphanumeric, spaces, hyphens, and underscores only
  if (!/^[a-zA-Z0-9\s\-_]+$/.test(trimmed)) {
    return { isValid: false, error: 'Serial number contains invalid characters' };
  }

  return { isValid: true };
};

export const validateItemType = (itemType: string): ValidationResult => {
  if (!itemType || typeof itemType !== 'string') {
    return { isValid: false, error: 'Item type is required' };
  }

  const trimmed = itemType.trim();
  
  if (trimmed.length < 1 || trimmed.length > 50) {
    return { isValid: false, error: 'Item type must be between 1 and 50 characters' };
  }

  // Allow alphanumeric, spaces, hyphens, and underscores only
  if (!/^[a-zA-Z0-9\s\-_]+$/.test(trimmed)) {
    return { isValid: false, error: 'Item type contains invalid characters' };
  }

  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

export const validateFullName = (fullName?: string): ValidationResult => {
  if (!fullName) {
    return { isValid: true }; // Optional field
  }

  if (typeof fullName !== 'string') {
    return { isValid: false, error: 'Full name must be a string' };
  }

  const trimmed = fullName.trim();
  
  if (trimmed.length < 1 || trimmed.length > 200) {
    return { isValid: false, error: 'Full name must be between 1 and 200 characters' };
  }

  return { isValid: true };
};

export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  return input.trim().replace(/[<>]/g, '');
};
