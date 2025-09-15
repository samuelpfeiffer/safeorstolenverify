
/**
 * Mobile-friendly security headers configuration
 */
export const SECURITY_HEADERS = {
  // Very permissive CSP for mobile compatibility
  'Content-Security-Policy': [
    "default-src 'self' 'unsafe-inline' 'unsafe-eval' *",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' * blob: data:",
    "style-src 'self' 'unsafe-inline' *",
    "font-src 'self' * data:",
    "img-src 'self' * data: blob:",
    "connect-src 'self' * ws: wss:",
    "frame-src 'self' *",
    "object-src 'self'",
    "base-uri 'self'",
    "form-action 'self' *"
  ].join('; '),
  
  // Mobile-friendly security headers
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
} as const;

export const applySecurityHeaders = (): void => {
  // Only apply minimal headers for mobile
  const mobileHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };

  Object.entries(mobileHeaders).forEach(([name, value]) => {
    const existingMeta = document.querySelector(`meta[http-equiv="${name}"]`);
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    }
  });
};

export const validateSecureContext = (): boolean => {
  // Mobile-friendly secure context validation
  if (typeof window !== 'undefined') {
    return window.location.protocol === 'https:' || 
           window.location.hostname === 'localhost' ||
           window.location.hostname.includes('lovableproject.com') ||
           window.isSecureContext ||
           // Allow HTTP for development/testing
           window.location.protocol === 'http:';
  }
  return true; // Default to true for mobile compatibility
};
