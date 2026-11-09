const encoder = new TextEncoder();
const encode = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
const decode = (text: string) =>
  Uint8Array.from(atob(text.replace(/-/g, "+").replace(/_/g, "/")), (c) =>
    c.charCodeAt(0),
  );
const key = (secret: string) =>
  crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );

export async function createOAuthState(
  userId: string,
  secret: string,
  now = Date.now(),
): Promise<string> {
  const payload = encode(
    encoder.encode(
      JSON.stringify({
        userId,
        expiresAt: now + 600_000,
        nonce: crypto.randomUUID(),
        purpose: "gsc-oauth",
      }),
    ),
  );
  return `${payload}.${encode(new Uint8Array(await crypto.subtle.sign("HMAC", await key(secret), encoder.encode(payload))))}`;
}

export async function verifyOAuthState(
  state: unknown,
  userId: string,
  secret: string,
  now = Date.now(),
): Promise<boolean> {
  if (typeof state !== "string" || state.length > 2048) return false;
  try {
    const parts = state.split(".");
    if (parts.length !== 2) return false;
    const [payload, signature] = parts;
    if (
      !(await crypto.subtle.verify(
        "HMAC",
        await key(secret),
        decode(signature),
        encoder.encode(payload),
      ))
    )
      return false;
    const data = JSON.parse(new TextDecoder().decode(decode(payload)));
    return (
      data.userId === userId &&
      data.purpose === "gsc-oauth" &&
      Number.isFinite(data.expiresAt) &&
      data.expiresAt > now
    );
  } catch {
    return false;
  }
}
