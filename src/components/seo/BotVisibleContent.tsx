import React from 'react';

/**
 * BotVisibleContent - Renders static HTML content for search engine crawlers
 * 
 * IMPORTANT: This uses ONLY <noscript> to provide content to bots with JS disabled.
 * The previous hidden div approach (position: absolute; left: -9999px) was removed
 * because it could be flagged as cloaking by Google.
 * 
 * This is a Google-approved method for providing fallback content to crawlers.
 * 
 * Usage:
 * <BotVisibleContent>
 *   <h1>Your Page Title</h1>
 *   <p>Your content here...</p>
 * </BotVisibleContent>
 */

interface BotVisibleContentProps {
  children: React.ReactNode;
}

export const BotVisibleContent: React.FC<BotVisibleContentProps> = ({ children }) => {
  return (
    <noscript>
      <div style={{ 
        padding: '20px', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {children}
      </div>
    </noscript>
  );
};
