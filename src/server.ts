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

function waitUntil(ctx: unknown, task: Promise<unknown>) {
  const w = (ctx as { waitUntil?: (p: Promise<unknown>) => void } | null)?.waitUntil;
  if (typeof w === "function") w.call(ctx, task.catch(() => {}));
  else task.catch(() => {});
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const cache = edgeCache();
      const key = cache ? edgeCacheKey(request) : null;
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
        waitUntil(ctx, cache.put(key, toStore));
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
