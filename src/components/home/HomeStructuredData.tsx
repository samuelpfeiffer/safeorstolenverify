/**
 * HomePageStructuredData - DEPRECATED
 * 
 * All core schemas (Organization, WebSite, Service, FAQ, MobileApplication) 
 * are now in index.html for guaranteed Google crawling.
 * 
 * This function returns an empty array to prevent duplicate schema errors.
 * DO NOT add schemas here - they will cause GSC "Duplicate structured data" errors.
 */
export const getHomePageStructuredData = () => {
  // All schemas are in index.html - return empty to prevent duplicates
  return [];
};