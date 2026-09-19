import type { ToolContext } from "@lovable.dev/mcp-js";

type RuntimeGlobals = typeof globalThis & {
  Deno?: { env?: { get?: (name: string) => string | undefined } };
  process?: { env?: Record<string, string | undefined> };
};

function runtimeEnv(name: string): string | undefined {
  const runtime = globalThis as RuntimeGlobals;
  return runtime.Deno?.env?.get?.(name) ?? runtime.process?.env?.[name];
}

/** Public site that serves the verification endpoint. */
function siteUrl(): string {
  return (
    runtimeEnv("SITE_URL")?.trim() ||
    runtimeEnv("VITE_SITE_URL")?.trim() ||
    "https://safeorstolen.com"
  ).replace(/\/+$/, "");
}

/**
 * Run a verification through the app's own endpoint, forwarding the verified
 * caller token so the account requirement and usage allowance apply.
 */
export async function verifyViaApp(
  ctx: ToolContext,
  input: { identifier: string; itemType: string },
): Promise<{ data: unknown; error: string | null }> {
  const token = ctx.getToken();
  if (!token) return { data: null, error: "Not authenticated" };

  const response = await fetch(`${siteUrl()}/verify-api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ identifier: input.identifier, itemType: input.itemType }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      (payload as { message?: string; error?: string } | null)?.message ??
      (payload as { error?: string } | null)?.error ??
      `Verification failed (${response.status})`;
    return { data: null, error: message };
  }

  return { data: payload, error: null };
}
