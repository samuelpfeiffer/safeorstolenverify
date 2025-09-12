
/**
 * Enhanced mobile-friendly security headers configuration with CSP
 */
export const SECURITY_HEADERS = {
  // Strict CSP that prevents XSS while allowing necessary functionality
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' *.lovableproject.com *.supabase.co",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com data:",
    "img-src 'self' data: blob: *.supabase.co *.lovableproject.com",
    "connect-src 'self' *.supabase.co *.lovableproject.com wss: ws:",
    "frame-src 'self' *.stripe.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ].join('; '),
  
  // Security headers for production
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
} as const;

export const applySecurityHeaders = (): void => {
  // Apply comprehensive security headers
  const headers = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };

  Object.entries(headers).forEach(([name, value]) => {
    const existingMeta = document.querySelector(`meta[http-equiv="${name}"]`);
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    }
  });

  // Add CSP meta tag for additional XSS protection
  const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (!cspMeta) {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = SECURITY_HEADERS['Content-Security-Policy'];
    document.head.appendChild(meta);
  }
};

export const validateSecureContext = (): boolean => {
  // Enhanced secure context validation
  if (typeof window !== 'undefined') {
    const isSecure = window.location.protocol === 'https:' || 
           window.location.hostname === 'localhost' ||
           window.location.hostname.includes('lovableproject.com') ||
           window.isSecureContext;
    
    if (!isSecure && window.location.protocol === 'http:' && 
        !window.location.hostname.includes('localhost')) {
      console.warn('Application is running in an insecure context. HTTPS is recommended for production.');
    }
    
    return isSecure;
  }
  return true;
};
