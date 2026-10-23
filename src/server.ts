import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// Routes that render signed-in / per-visitor data must never be cached at the edge.
const PERSONALIZED_PATH_PREFIXES = [
  "/api",
  "/dashboard",
  "/profile",
  "/account",
  "/settings",
  "/auth",
  "/login",
  "/signup",
  "/reset-password",
  "/admin",
  "/proof/",
  "/verify",
  "/ai-chat",
  "/ai-verify",
  "/report-stolen",
  "/checkout",
  "/success",
  "/history",
  "/watchlist",
  "/verification/shared",
];

function isPersonalizedPath(pathname: string): boolean {
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  return PERSONALIZED_PATH_PREFIXES.some(
    (prefix) => path === prefix.replace(/\/$/, "") || path.startsWith(prefix),
  );
}

// Static, non-personalized HTML is safe to cache at the CDN and revalidate in the
// background, so most visitors get a cached response instead of a fresh SSR render.
function applyCacheHeaders(request: Request, response: Response): Response {
  if (request.method !== "GET" && request.method !== "HEAD") return response;
  if (response.status !== 200) return response;

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  // Never cache a response that is already personalized or sets a session cookie.
  if (response.headers.has("set-cookie")) return response;
  if (request.headers.get("cookie")?.includes("sb-")) return response;

  // Headers on a handler response can be immutable; re-wrap so we can set them.
  const cached = new Response(response.body, response);
  const url = new URL(request.url);
  if (isPersonalizedPath(url.pathname)) {
    cached.headers.set("cache-control", "private, no-store");
    return cached;
  }

  cached.headers.set(
    "cache-control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
  );
  cached.headers.set("cdn-cache-control", "max-age=3600, stale-while-revalidate=86400");
  cached.headers.set("vary", "Accept-Encoding");
  return cached;
}

// Oct 5 2026: the hosting platform rewrites cache-control to no-cache and Cloudflare does not
// cache Worker responses on its own, so every visit paid for a full SSR render (real-user
// time to first byte was ~2.4s). Keep rendered public HTML in the Worker's edge cache instead.
// The key includes the build id, so a new publish never serves pages from the old build.
declare const __SOS_BUILD_ID__: string | undefined;
const BUILD_ID = typeof __SOS_BUILD_ID__ !== "undefined" ? __SOS_BUILD_ID__ : "dev";
const EDGE_TTL_SECONDS = 600;

function edgeCache(): Cache | null {
  const c = (globalThis as { caches?: { default?: Cache } }).caches;
  return c?.default ?? null;
}

function edgeCacheKey(request: Request): Request | null {
  if (request.method !== "GET") return null;
  const url = new URL(request.url);
  // Query strings (tracking params, ?q= searches) are rendered fresh.
  if (url.search) return null;
  if (isPersonalizedPath(url.pathname)) return null;
  if (request.headers.get("authorization")) return null;
  if (request.headers.get("cookie")?.includes("sb-")) return null;
  return new Request(`${url.origin}${url.pathname}?__build=${encodeURIComponent(BUILD_ID)}`, { method: "GET" });
}

// Oct 23 2026: the Cloudflare Cache API above is a silent no-op on this hosting (every response
// was x-sos-cache: MISS, ~1-2s server wait). Keep recent public pages in this server instance's
// memory too. Keys include the build id, entries expire after 10 minutes, and only the most
// recently used pages are kept.
type MemEntry = { at: number; status: number; headers: [string, string][]; body: ArrayBuffer };
const MEM_CACHE = new Map<string, MemEntry>();
const MEM_TTL_MS = EDGE_TTL_SECONDS * 1000;
const MEM_MAX_ENTRIES = 120;

function memGet(key: string): Response | null {
  const e = MEM_CACHE.get(key);
  if (!e) return null;
  if (Date.now() - e.at > MEM_TTL_MS) { MEM_CACHE.delete(key); return null; }
  MEM_CACHE.delete(key); MEM_CACHE.set(key, e); // most recently used goes last
  const res = new Response(e.body.slice(0), { status: e.status, headers: e.headers });
  res.headers.set("x-sos-cache", "MEM");
  return res;
}

async function memPut(key: string, res: Response) {
  const body = await res.arrayBuffer();
  if (body.byteLength > 1_500_000) return;
  const headers: [string, string][] = [];
  res.headers.forEach((v, k) => { if (k !== "x-sos-cache") headers.push([k, v]); });
  MEM_CACHE.set(key, { at: Date.now(), status: res.status, headers, body });
  while (MEM_CACHE.size > MEM_MAX_ENTRIES) {
    const oldest = MEM_CACHE.keys().next().value;
    if (oldest === undefined) break;
    MEM_CACHE.delete(oldest);
  }
}

function waitUntil(ctx: unknown, task: Promise<unknown>) {
  const w = (ctx as { waitUntil?: (p: Promise<unknown>) => void } | null)?.waitUntil;
  if (typeof w === "function") w.call(ctx, task.catch(() => {}));
  else task.catch(() => {});
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const cache = edgeCache();
      const pageKey = edgeCacheKey(request);
      if (pageKey) {
        const fromMem = memGet(pageKey.url);
        if (fromMem) return fromMem;
      }
      const key = cache ? pageKey : null;
      if (cache && key) {
        const hit = await cache.match(key).catch(() => undefined);
        if (hit) {
          const served = new Response(hit.body, hit);
          served.headers.set("x-sos-cache", "HIT");
          return served;
        }
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      const finalResponse = applyCacheHeaders(request, normalized);

      if (
        cache && key &&
        finalResponse.status === 200 &&
        (finalResponse.headers.get("content-type") ?? "").includes("text/html") &&
        !finalResponse.headers.has("set-cookie")
      ) {
        const out = new Response(finalResponse.body, finalResponse);
        const stored = out.clone();
        const toStore = new Response(stored.body, stored);
        toStore.headers.set("cache-control", `public, max-age=${EDGE_TTL_SECONDS}`);
        waitUntil(ctx, cache.put(key, toStore.clone()));
        waitUntil(ctx, memPut(key.url, toStore));
        out.headers.set("x-sos-cache", "MISS");
        return out;
      }
      if (
        !cache && pageKey &&
        finalResponse.status === 200 &&
        (finalResponse.headers.get("content-type") ?? "").includes("text/html") &&
        !finalResponse.headers.has("set-cookie")
      ) {
        const out = new Response(finalResponse.body, finalResponse);
        waitUntil(ctx, memPut(pageKey.url, out.clone()));
        out.headers.set("x-sos-cache", "MISS");
        return out;
      }
      return finalResponse;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
