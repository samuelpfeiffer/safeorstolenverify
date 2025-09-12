import DOMPurify from 'dompurify';

/**
 * Enhanced security sanitization utilities using DOMPurify
 */

interface SanitizeOptions {
  allowHtml?: boolean;
  allowLinks?: boolean;
  maxLength?: number;
}

export const sanitizeHtmlContent = (content: string, options: SanitizeOptions = {}): string => {
  const { allowHtml = true, allowLinks = false, maxLength = 10000 } = options;
  
  if (!content || typeof content !== 'string') {
    return '';
  }
  
  // Truncate if too long to prevent DoS
  const truncated = content.length > maxLength ? content.substring(0, maxLength) : content;
  
  if (!allowHtml) {
    // Strip all HTML tags
    return DOMPurify.sanitize(truncated, { ALLOWED_TAGS: [] }).toString();
  }
  
  const config: any = {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre'],
    ALLOWED_ATTR: [],
    FORBID_SCRIPT: true,
    FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'button'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'style'],
  };
  
  if (allowLinks) {
    config.ALLOWED_TAGS.push('a');
    config.ALLOWED_ATTR.push('href');
  }
  
  return DOMPurify.sanitize(truncated, config).toString();
};

export const sanitizeUserInput = (input: string, maxLength: number = 1000): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  return DOMPurify.sanitize(input.trim().substring(0, maxLength), {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).toString();
};

export const sanitizeSerialNumber = (serial: string): string => {
  if (!serial || typeof serial !== 'string') {
    return '';
  }
  
  // Allow only alphanumeric, spaces, hyphens, and underscores
  const cleaned = serial.trim().replace(/[^a-zA-Z0-9\s\-_]/g, '');
  
  return DOMPurify.sanitize(cleaned.substring(0, 100), {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).toString();
};

export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const sanitized = DOMPurify.sanitize(email.trim(), { ALLOWED_TAGS: [] }).toString();
  
  return emailRegex.test(sanitized) && sanitized.length <= 254;
};

export const validateAndSanitizeUrl = (url: string): { isValid: boolean; sanitizedUrl: string } => {
  if (!url || typeof url !== 'string') {
    return { isValid: false, sanitizedUrl: '' };
  }
  
  try {
    const parsedUrl = new URL(url);
    const allowedProtocols = ['http:', 'https:'];
    
    if (!allowedProtocols.includes(parsedUrl.protocol)) {
      return { isValid: false, sanitizedUrl: '' };
    }
    
    const sanitized = DOMPurify.sanitize(parsedUrl.toString(), {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    }).toString();
    
    return { isValid: true, sanitizedUrl: sanitized };
  } catch {
    return { isValid: false, sanitizedUrl: '' };
  }
};

export const preventXSS = (content: string): string => {
  return sanitizeHtmlContent(content, { allowHtml: false, maxLength: 5000 });
};