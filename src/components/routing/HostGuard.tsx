import React from 'react';

/**
 * HostGuard Component - Production Domain Enforcer
 * 
 * Ensures users are always on the canonical production domain.
 * Immediately redirects from preview/staging domains to safeorstolen.com
 * Preserves the full path, query, and hash during redirect.
 */
export const HostGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Run synchronously during render for fastest possible redirect
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Allow localhost for development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return <>{children}</>;
    }
    
    // Check if we're on a non-production domain
    const isLovablePreview = hostname.includes('.lovable.app');
    const isNonCanonical = isLovablePreview || hostname.includes('preview-');
    
    if (isNonCanonical) {
      // Preserve the full path during redirect
      const fullPath = window.location.pathname + window.location.search + window.location.hash;
      const productionUrl = `https://safeorstolen.com${fullPath}`;
      
      // Use replace to prevent back button issues
      window.location.replace(productionUrl);
      
      // Show minimal loading state while redirecting
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
            <p className="text-muted-foreground">Redirecting to safeorstolen.com...</p>
            <a 
              href={productionUrl}
              className="text-primary underline text-sm"
            >
              Click here if not redirected
            </a>
          </div>
        </div>
      );
    }
  }
  
  return <>{children}</>;
};
