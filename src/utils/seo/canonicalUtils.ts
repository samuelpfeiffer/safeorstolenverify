/**
 * Utility functions for managing canonical URLs
 */

export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://safeorstolen.com'; // Always use non-www version for canonical
  
  // Remove trailing slashes except for root
  const cleanPath = path === '/' ? path : path.replace(/\/+$/, '');
  
  // Ensure path starts with /
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  return `${baseUrl}${normalizedPath}`;
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