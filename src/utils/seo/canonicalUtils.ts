/**
 * Utility functions for managing canonical URLs
 */

export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://safeorstolen.com'; // Always use non-www version for canonical
  
  // Handle empty or invalid paths
  if (!path || path === '') {
    return baseUrl;
  }
  
  // Remove query parameters and hash fragments for canonical URLs
  const cleanPath = path.split('?')[0].split('#')[0];
  
  // Remove trailing slashes except for root
  const trimmedPath = cleanPath === '/' ? cleanPath : cleanPath.replace(/\/+$/, '');
  
  // Ensure path starts with /
  const normalizedPath = trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`;
  
  // Remove double slashes
  const finalPath = normalizedPath.replace(/\/+/g, '/');
  
  return `${baseUrl}${finalPath}`;
};

export const normalizeCanonicalUrl = (url: string): string => {
  // Convert www to non-www version for consistent canonicals
  return url.replace(/^https?:\/\/www\.safeorstolen\.com/, 'https://safeorstolen.com');
};

export const isValidCanonicalUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:' && parsedUrl.hostname === 'safeorstolen.com';
  } catch {
    return false;
  }
};

export const normalizeUrl = (url: string): string => {
  // Remove double slashes, trailing slashes (except root), and ensure https
  return url
    .replace(/([^:]\/)\/+/g, '$1')
    .replace(/\/+$/, '')
    .replace(/^http:/, 'https:');
};

/**
 * Get sitemap priority for a given path
 */
export const getSitemapPriority = (pathname: string): number => {
  // Homepage gets highest priority
  if (pathname === '/') return 1.0;
  
  // Main verification tools
  if (pathname.includes('/check-') || pathname.includes('/verify') || pathname === '/stolen-item-checker') {
    return 0.9;
  }
  
  // Important info pages
  if (pathname === '/how-it-works' || pathname === '/for-brands') {
    return 0.8;
  }
  
  // Blog posts and content
  if (pathname.includes('/blog/')) return 0.7;
  
  // Other pages
  if (pathname === '/about' || pathname === '/contact' || pathname === '/faq') {
    return 0.6;
  }
  
  // City/location pages
  if (pathname.includes('/city/')) return 0.5;
  
  return 0.5;
};

/**
 * Get change frequency for sitemap
 */
export const getChangeFrequency = (pathname: string): string => {
  // Homepage changes frequently
  if (pathname === '/') return 'daily';
  
  // Blog posts change occasionally
  if (pathname.includes('/blog/')) return 'monthly';
  
  // Main tools and features change occasionally
  if (pathname.includes('/check-') || pathname.includes('/verify')) {
    return 'weekly';
  }
  
  // Static info pages change rarely
  if (pathname === '/about' || pathname === '/contact' || pathname === '/how-it-works') {
    return 'yearly';
  }
  
  return 'monthly';
};