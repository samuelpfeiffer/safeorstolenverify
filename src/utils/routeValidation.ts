import { VALID_ROUTES } from '@/utils/seo/sitemapRouteValidator';

// Route validation utility to check for valid pages (single source of truth)
export const validateRoutes = () => {
  return Array.from(VALID_ROUTES);
};

export const logRouteTest = (route: string, status: 'pass' | 'fail', error?: string) => {
  console.log(`🧪 Route Test: ${route} - ${status === 'pass' ? '✅' : '❌'} ${error ? `(${error})` : ''}`);
};

