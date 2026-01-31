import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface StatusCodeHandlerProps {
  statusCode: 200 | 404 | 301 | 302;
  noIndex?: boolean;
  canonical?: string;
}

/**
 * Handles proper HTTP status codes and meta directives for different page types
 * Helps Google understand the actual status of pages to fix indexing issues
 */
export const StatusCodeHandler: React.FC<StatusCodeHandlerProps> = ({ 
  statusCode, 
  noIndex = false,
  canonical 
}) => {
  useEffect(() => {
    // Set HTTP status for crawlers and browsers
    const statusMeta = document.createElement('meta');
    statusMeta.httpEquiv = 'status';
    statusMeta.content = statusCode.toString();
    document.head.appendChild(statusMeta);

    // Set cache control based on status
    const cacheMeta = document.createElement('meta');
    cacheMeta.httpEquiv = 'cache-control';
    if (statusCode === 200) {
      cacheMeta.content = 'public, max-age=3600';
    } else if (statusCode === 404) {
      cacheMeta.content = 'no-cache, no-store, must-revalidate';
    } else {
      cacheMeta.content = 'no-cache';
    }
    document.head.appendChild(cacheMeta);

    return () => {
      if (document.head.contains(statusMeta)) {
        document.head.removeChild(statusMeta);
      }
      if (document.head.contains(cacheMeta)) {
        document.head.removeChild(cacheMeta);
      }
    };
  }, [statusCode]);

  return (
    <Helmet>
      {/* Set proper robots directive based on status and indexing preference */}
      <meta name="robots" content={
        statusCode === 404 || noIndex ? 
        "noindex, nofollow" : 
        "index, follow"
      } />
      
      {/* Canonical URL - CRITICAL: Always render for SEO regardless of status */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}
      
      {/* Additional status-specific meta tags */}
      {statusCode === 200 && (
        <>
          <meta name="page-status" content="live" />
          <meta name="content-status" content="published" />
        </>
      )}
      
      {statusCode === 404 && (
        <>
          <meta name="page-status" content="not-found" />
          <meta name="content-status" content="missing" />
        </>
      )}
    </Helmet>
  );
};