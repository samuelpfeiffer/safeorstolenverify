import React, { ReactNode, useEffect, useRef } from 'react';

/**
 * Helmet Shim
 *
 * Purpose: Provide a reliable, provider-free head manager that supports the
 * common <Helmet>...</Helmet> JSX pattern used across the app (title/meta/link/script).
 *
 * Implementation notes:
 * - Each Helmet instance registers its desired head state into a module-level store.
 * - The store is merged (last-mounted wins for conflicting keys) and applied to DOM.
 * - We only manage elements we create (data-helmet-shim="true"); we don't touch
 *   tags defined outside Helmet.
 */

type MetaTag = {
  name?: string;
  property?: string;
  content?: string;
  [key: string]: any;
};

type LinkTag = {
  rel?: string;
  href?: string;
  hrefLang?: string;
  [key: string]: any;
};

type ScriptTag = {
  type?: string;
  src?: string;
  async?: boolean;
  defer?: boolean;
  childrenText?: string;
  dangerouslySetInnerHTML?: { __html?: string };
  [key: string]: any;
};

type InstanceHead = {
  mountedAt: number;
  title?: string;
  metas: MetaTag[];
  links: LinkTag[];
  scripts: ScriptTag[];
};

let mountSeq = 0;
const helmetStore = new Map<string, InstanceHead>();

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

const stableHash = (input: string) => {
  // Tiny deterministic hash (not cryptographic) for de-duping inline scripts
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
};

const textFromChildren = (node: any): string => {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textFromChildren).join('');
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<any>;
    return textFromChildren(el.props?.children);
  }
  return '';
};

const collectHelmetChildren = (children: ReactNode) => {
  const out: { title?: string; metas: MetaTag[]; links: LinkTag[]; scripts: ScriptTag[] } = {
    title: undefined,
    metas: [],
    links: [],
    scripts: [],
  };

  const walk = (node: any) => {
    if (node == null) return;

    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }

    if (!React.isValidElement(node)) return;

    const el = node as React.ReactElement<any>;
    const type = el.type;
    const props = (el.props ?? {}) as Record<string, any>;

    if (typeof type === 'string') {
      if (type === 'title') {
        out.title = textFromChildren(props.children);
      } else if (type === 'meta') {
        out.metas.push({ ...props });
      } else if (type === 'link') {
        out.links.push({ ...props });
      } else if (type === 'script') {
        out.scripts.push({ ...props, childrenText: textFromChildren(props.children) });
      }
    }

    if (props.children) {
      walk(props.children);
    }
  };

  walk(children);
  return out;
};


const setAttrs = (el: HTMLElement, attrs: Record<string, any>) => {
  Object.entries(attrs).forEach(([k, v]) => {
    if (v == null || v === false) return;
    if (k === 'children' || k === 'dangerouslySetInnerHTML' || k === 'childrenText') return;

    // React uses className, but head tags should use class
    if (k === 'className') {
      el.setAttribute('class', String(v));
      return;
    }

    el.setAttribute(k, String(v));
  });
};

const applyHead = () => {
  if (!isBrowser) return;

  const instances = Array.from(helmetStore.values()).sort((a, b) => a.mountedAt - b.mountedAt);

  // Merge with "last mounted wins" semantics
  let mergedTitle: string | undefined;
  const mergedMetas = new Map<string, MetaTag>();
  const mergedLinks = new Map<string, LinkTag>();
  const mergedScripts = new Map<string, ScriptTag>();

  for (const inst of instances) {
    if (inst.title) mergedTitle = inst.title;

    for (const m of inst.metas) {
      const key = m.property ? `meta:property:${m.property}` : m.name ? `meta:name:${m.name}` : null;
      if (!key) continue;
      mergedMetas.set(key, m);
    }

    for (const l of inst.links) {
      const rel = l.rel || '';
      if (!rel) continue;

      // Canonical must be unique
      const key = rel === 'canonical'
        ? 'link:canonical'
        : rel === 'alternate' && l.hrefLang
          ? `link:alternate:${l.hrefLang}`
          : l.href
            ? `link:${rel}:${l.href}`
            : `link:${rel}`;

      mergedLinks.set(key, l);
    }

    for (const s of inst.scripts) {
      const type = s.type || 'text/javascript';
      const src = s.src;
      const inlineHtml = s.dangerouslySetInnerHTML?.__html ?? s.childrenText ?? '';

      const key = src
        ? `script:src:${src}`
        : `script:inline:${type}:${stableHash(inlineHtml)}`;

      mergedScripts.set(key, s);
    }
  }

  if (mergedTitle != null && mergedTitle !== '') {
    document.title = mergedTitle;
  }

  const desiredKeys = new Set<string>([
    ...mergedMetas.keys(),
    ...mergedLinks.keys(),
    ...mergedScripts.keys(),
  ]);

  // Remove stale shim-managed tags
  const managed = document.head.querySelectorAll('[data-helmet-shim="true"][data-helmet-key]');
  managed.forEach((el) => {
    const key = el.getAttribute('data-helmet-key') || '';
    if (key && !desiredKeys.has(key)) {
      el.parentNode?.removeChild(el);
    }
  });

  // Upsert meta tags
  for (const [key, m] of mergedMetas.entries()) {
    let el = document.head.querySelector(`meta[data-helmet-shim="true"][data-helmet-key="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('data-helmet-shim', 'true');
      el.setAttribute('data-helmet-key', key);
      document.head.appendChild(el);
    }

    // Clear identifying attrs first
    el.removeAttribute('name');
    el.removeAttribute('property');

    if (m.name) el.setAttribute('name', String(m.name));
    if (m.property) el.setAttribute('property', String(m.property));

    setAttrs(el, m);
  }

  // Upsert link tags
  for (const [key, l] of mergedLinks.entries()) {
    let el = document.head.querySelector(`link[data-helmet-shim="true"][data-helmet-key="${key}"]`) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('data-helmet-shim', 'true');
      el.setAttribute('data-helmet-key', key);
      document.head.appendChild(el);
    }

    setAttrs(el, l as any);
  }

  // Upsert scripts
  for (const [key, s] of mergedScripts.entries()) {
    let el = document.head.querySelector(`script[data-helmet-shim="true"][data-helmet-key="${key}"]`) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.setAttribute('data-helmet-shim', 'true');
      el.setAttribute('data-helmet-key', key);
      document.head.appendChild(el);
    }

    // Reset content if needed
    el.text = '';

    const inlineHtml = s.dangerouslySetInnerHTML?.__html ?? s.childrenText ?? '';
    setAttrs(el, s as any);

    if (!s.src && inlineHtml) {
      el.text = inlineHtml;
    }
  }
};

export interface HelmetProps {
  children?: ReactNode;

  // Optional prop-based API (some code may pass these)
  title?: string;
  meta?: Array<{ name?: string; property?: string; content?: string } & Record<string, any>>;
  link?: Array<{ rel: string; href: string } & Record<string, any>>;
  script?: Array<{ type?: string; innerHTML?: string; src?: string } & Record<string, any>>;
}

export const Helmet: React.FC<HelmetProps> = ({ children, title, meta, link, script }) => {
  const instanceId = useRef(`helmet_${Math.random().toString(36).slice(2)}`);
  const mountedAt = useRef<number>(++mountSeq);

  useEffect(() => {
    if (!isBrowser) return;

    const extracted = collectHelmetChildren(children);

    const scriptsFromProps: ScriptTag[] = (script || []).map((s) => ({
      ...(s || {}),
      type: s.type,
      src: s.src,
      childrenText: s.innerHTML,
    }));

    helmetStore.set(instanceId.current, {
      mountedAt: mountedAt.current,
      title: extracted.title || title,
      metas: [...extracted.metas, ...(meta || [])],
      links: [...extracted.links, ...(link || [])],
      scripts: [...extracted.scripts, ...scriptsFromProps],
    });

    applyHead();

    return () => {
      helmetStore.delete(instanceId.current);
      applyHead();
    };
  }, [children, title, meta, link, script]);

  return null;
};

export const HelmetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

