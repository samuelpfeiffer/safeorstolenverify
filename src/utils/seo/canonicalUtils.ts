/**
 * Utility functions for managing canonical URLs
 */

export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://www.safeorstolen.com';
  
  // Remove trailing slashes except for root
  const cleanPath = path === '/' ? path : path.replace(/\/+$/, '');
  
  // Ensure path starts with /
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  return `${baseUrl}${normalizedPath}`;
};

export const isValidCanonicalUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:' && parsedUrl.hostname === 'www.safeorstolen.com';
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