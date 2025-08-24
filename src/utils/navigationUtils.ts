// Navigation utilities to prevent full page reloads and handle iframes
export const isInIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch {
    return true; // Cross-origin frame
  }
};

export const navigateOutOfIframe = (url: string, newTab = false) => {
  if (newTab) {
    window.open(url, '_blank', 'noopener');
    return;
  }
  if (isInIframe() && window.top) {
    try {
      (window.top as Window).location.href = url;
      return;
    } catch {
      window.open(url, '_blank', 'noopener');
      return;
    }
  }
  window.location.href = url;
};

export const handleExternalNavigation = (url: string, newTab = false) => {
  if (url.startsWith('http') || url.startsWith('//')) {
    navigateOutOfIframe(url, newTab);
  } else {
    console.warn(`Use React Router navigate() for internal route: ${url}`);
  }
};

export const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http') || url.startsWith('//') || url.includes('.com') || url.includes('.org');
};

// Safe navigation that prevents accidental full page reloads
export const safeNavigate = (navigate: (url: string) => void, url: string, newTab = false) => {
  if (isExternalUrl(url)) {
    navigateOutOfIframe(url, newTab);
  } else {
    navigate(url);
  }
};