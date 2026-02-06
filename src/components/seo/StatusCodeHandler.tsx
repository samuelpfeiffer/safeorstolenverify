import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface StatusCodeHandlerProps {
  statusCode: 200 | 404 | 301 | 302;
  noIndex?: boolean;
  canonical?: string;
  /** For 301/302 redirects: the destination URL */
  redirectLocation?: string;
}

/**
 * Handles proper HTTP status codes and meta directives for different page types.
 * 
 * Emits `prerender-status-code` and `prerender-header` meta tags that
 * LovableHTML reads to return correct HTTP status codes to search engine
 * and AI crawlers (Googlebot, GPTBot, ClaudeBot, etc.).
 */
export const StatusCodeHandler: React.FC<StatusCodeHandlerProps> = ({ 
  statusCode, 
  noIndex = false,
  canonical,
  redirectLocation,
}) => {
  useEffect(() => {
    // Update the default prerender-status-code meta tag in index.html
    const existing = document.querySelector('meta[name="prerender-status-code"]');
    if (existing) {
      existing.setAttribute('content', statusCode.toString());
    }
  }, [statusCode]);

  // Build full redirect URL for LovableHTML header signal
  const fullRedirectUrl = redirectLocation
    ? redirectLocation.startsWith('http')
      ? redirectLocation
      : `https://safeorstolen.com${redirectLocation}`
    : undefined;

  return (
    <Helmet>
      {/* Robots directive based on status and indexing preference */}
      <meta name="robots" content={
        statusCode === 404 || noIndex ? 
        "noindex, nofollow" : 
        "index, follow"
      } />
      
      {/* LovableHTML status code signal - tells the proxy what HTTP status to return to bots */}
      <meta name="prerender-status-code" content={statusCode.toString()} />
      
      {/* LovableHTML redirect header - for 301/302 signals */}
      {(statusCode === 301 || statusCode === 302) && fullRedirectUrl && (
        <meta name="prerender-header" content={`Location: ${fullRedirectUrl}`} />
      )}
      
      {/* LovableHTML cache control headers */}
      {statusCode === 200 && (
        <meta name="prerender-header" content="Cache-Control: max-age=86400" />
      )}
      {statusCode === 404 && (
        <meta name="prerender-header" content="Cache-Control: no-cache, no-store" />
      )}
      
      {/* Canonical URL */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}
    </Helmet>
  );
};
