// Navigation utilities to prevent full page reloads
export const handleExternalNavigation = (url: string) => {
  if (url.startsWith('http') || url.startsWith('//')) {
    // External links can use window.location
    window.location.href = url;
  } else {
    console.warn(`Use React Router navigate() for internal route: ${url}`);
  }
};

export const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http') || url.startsWith('//') || url.includes('.com') || url.includes('.org');
};

// Safe navigation that prevents accidental full page reloads
export const safeNavigate = (navigate: (url: string) => void, url: string) => {
  if (isExternalUrl(url)) {
    window.location.href = url;
  } else {
    navigate(url);
  }
};