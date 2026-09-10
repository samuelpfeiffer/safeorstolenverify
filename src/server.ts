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

  const url = new URL(request.url);
  if (isPersonalizedPath(url.pathname)) {
    response.headers.set("cache-control", "private, no-store");
    return response;
  }

  response.headers.set(
    "cache-control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
  );
  response.headers.set("cdn-cache-control", "max-age=3600, stale-while-revalidate=86400");
  response.headers.set("vary", "Accept-Encoding");
  return response;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return applyCacheHeaders(request, normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
