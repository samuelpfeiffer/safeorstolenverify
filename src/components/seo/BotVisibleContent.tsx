import React from 'react';

/**
 * BotVisibleContent - Renders static HTML content that's visible to search engine crawlers
 * but hidden for regular users. This ensures bots see substantial content immediately
 * without waiting for JavaScript to load, preventing "Soft 404" errors.
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
    <>
      {/* Content visible to bots but hidden for users */}
      <div 
        className="bot-content" 
        style={{ 
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        {children}
      </div>
      
      {/* Noscript fallback for bots with JS disabled */}
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
    </>
  );
};
