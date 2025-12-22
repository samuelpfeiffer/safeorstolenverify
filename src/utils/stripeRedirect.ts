/**
 * Safe Stripe redirect utility that works in both normal browsing and iframe contexts.
 * 
 * Problem: In iframes (like Lovable preview), window.location.href redirects are blocked.
 * Solution: Use window.open() which works when triggered by a direct user click.
 */

export const isInIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch {
    return true; // Cross-origin frame
  }
};

/**
 * Redirects to Stripe checkout URL in a way that works in iframes.
 * When in an iframe, opens in a new tab. Otherwise, redirects in same window.
 * 
 * @param url - The Stripe checkout URL
 * @returns boolean - true if redirect was attempted
 */
export const redirectToStripe = (url: string): boolean => {
  if (!url) return false;
  
  console.log('[Stripe] Redirecting to:', url, 'isIframe:', isInIframe());
  
  if (isInIframe()) {
    // In iframe: open in new tab (works with user-initiated click)
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      console.warn('[Stripe] Popup blocked, falling back to location.href');
      window.location.href = url;
    }
    return true;
  }
  
  // Normal context: redirect in same window
  window.location.href = url;
  return true;
};
