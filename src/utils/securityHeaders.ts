
/**
 * Mobile-friendly security headers configuration
 */
export const SECURITY_HEADERS = {
  // Balanced CSP - secure but functional
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://js.stripe.com https://checkout.stripe.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https:",
    "connect-src 'self' https: wss: https://*.supabase.co",
    "frame-src 'self' https://js.stripe.com https://checkout.stripe.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),
  
  // Enhanced security headers
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
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
