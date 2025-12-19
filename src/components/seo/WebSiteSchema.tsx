/**
 * @deprecated WebSiteSchema is now in index.html for guaranteed Google crawling.
 * DO NOT use this component - it creates duplicate structured data errors in GSC.
 * 
 * If you need WebSite schema, it's already in index.html (static).
 * This component is kept only for backward compatibility and will be removed.
 */
export const WebSiteSchema = () => {
  // Return null - schema is in index.html
  console.warn('WebSiteSchema is deprecated. WebSite schema is now in index.html.');
  return null;
};
