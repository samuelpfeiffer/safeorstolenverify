import React, { ReactNode } from 'react';

/**
 * Helmet Shim (React 19 hoisting based)
 *
 * React 19 hoists <title>, <meta> and <link> elements rendered anywhere in the
 * tree into <head> — during server rendering AND on the client. So this shim
 * simply renders the tags it is given. That makes per-page title/description/
 * canonical appear in the server-rendered HTML, which crawlers read.
 *
 * Inline <script type="application/ld+json"> blocks are NOT hoisted by React;
 * they render in place, which is valid for structured data.
 */

type AnyProps = Record<string, any>;

export interface HelmetProps {
  children?: ReactNode;
  title?: string;
  meta?: Array<{ name?: string; property?: string; content?: string } & AnyProps>;
  link?: Array<{ rel: string; href: string } & AnyProps>;
  script?: Array<{ type?: string; innerHTML?: string; src?: string } & AnyProps>;
}

export const Helmet: React.FC<HelmetProps> = ({ children, title, meta, link, script }) => {
  return (
    <>
      {title ? <title>{title}</title> : null}
      {(meta || []).map((m, i) => (
        <meta key={`hm-meta-${i}`} {...m} />
      ))}
      {(link || []).map((l, i) => (
        <link key={`hm-link-${i}`} {...l} />
      ))}
      {(script || []).map(({ innerHTML, ...rest }, i) =>
        innerHTML ? (
          <script key={`hm-script-${i}`} {...rest} dangerouslySetInnerHTML={{ __html: innerHTML }} />
        ) : (
          <script key={`hm-script-${i}`} {...rest} />
        )
      )}
      {children}
    </>
  );
};

export const HelmetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
