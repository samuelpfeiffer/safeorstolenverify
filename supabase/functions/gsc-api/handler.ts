import { createOAuthState, verifyOAuthState } from "./oauth.ts";

const PROPERTY = "sc-domain:safeorstolen.com";
const REDIRECT_URI = "https://safeorstolen.com/admin/gsc-callback";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
class RequestError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

// Runtime services are injected for tests; tokens never leave this server-side handler.
export function createGscHandler(deps: {
  createClient: (...args: any[]) => any;
  env: (name: string) => string | undefined;
  cors: (origin: string | null) => HeadersInit;
  fetch?: typeof fetch;
}) {
  const request = deps.fetch ?? fetch;
  return async (req: Request): Promise<Response> => {
    const headers = {
      ...deps.cors(req.headers.get("origin")),
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    };
    const json = (data: unknown, status = 200) =>
      new Response(JSON.stringify(data), { headers, status });
    if (req.method === "OPTIONS")
      return new Response(null, { headers, status: 204 });
    if (req.method !== "POST") return json({ error: "Use POST." }, 405);
    try {
      const authorization = req.headers.get("authorization");
      if (!authorization?.startsWith("Bearer "))
        return json({ error: "Sign in as an administrator first." }, 401);
      const userClient = deps.createClient(
        deps.env("SUPABASE_URL") ?? "",
        deps.env("SUPABASE_ANON_KEY") ?? "",
        {
          global: { headers: { Authorization: authorization } },
          auth: { persistSession: false, autoRefreshToken: false },
        },
      );
      const {
        data: { user },
        error: authError,
      } = await userClient.auth.getUser(authorization.slice(7));
      if (authError || !user)
        return json({ error: "Your session has expired. Sign in again." }, 401);
      const { data: isAdmin, error: roleError } =
        await userClient.rpc("is_admin_user");
      if (roleError || isAdmin !== true)
        return json({ error: "Administrator access required." }, 403);
      let body: any;
      try {
        body = await req.json();
      } catch {
        throw new RequestError("Invalid JSON request.");
      }
      if (!body || typeof body !== "object" || Array.isArray(body))
        throw new RequestError("Invalid request.");
      const serviceKey = deps.env("SUPABASE_SERVICE_ROLE_KEY");
      if (!serviceKey)
        throw new RequestError(
          "Search Console backend configuration is incomplete.",
          503,
        );
      const admin = deps.createClient(
        deps.env("SUPABASE_URL") ?? "",
        serviceKey,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );
      const clientId =
        deps.env("GOOGLE_CLIENT_ID") ||
        deps.env("SOS Google sign in client I.d.") ||
        "579001486748-rlo6gji3qq5rv8q6bkq6gncu9j2rd069.apps.googleusercontent.com";
      const clientSecret =
        deps.env("GOOGLE_CLIENT_SECRET") || deps.env("Google auth");
      const configured = Boolean(clientId && clientSecret);
      const tokenRow = async () => {
        const { data, error } = await admin
          .from("gsc_oauth_tokens")
          .select("access_token,refresh_token,expires_at,scope,updated_at")
          .eq("user_id", user.id)
          .maybeSingle();
        if (error)
          throw new RequestError(
            "Could not read the Search Console connection.",
            500,
          );
        return data;
      };
      const google = async (url: string, options: RequestInit) => {
        const response = await request(url, {
          ...options,
          signal: AbortSignal.timeout(30_000),
        });
        const result = await response.json();
        if (!response.ok) {
          const reason =
            result.error?.status ||
            (typeof result.error === "string"
              ? result.error
              : "request_failed");
          if (reason === "invalid_grant")
            throw new RequestError(
              "Google authorization expired or was revoked. Connect Google again.",
              409,
            );
          if (response.status === 403)
            throw new RequestError(
              "Google denied access. Use an account with access to the SafeOrStolen Search Console property and enable the Search Console API in Google Cloud.",
              403,
            );
          throw new RequestError(
            `Google request failed (${response.status}, ${reason}). Check the Google OAuth configuration and try again.`,
            502,
          );
        }
        return result;
      };
      if (body.action === "growth-summary") {
        const days = body.days ?? 30;
        if (!Number.isInteger(days) || days < 1 || days > 90) {
          throw new RequestError("Choose a window between 1 and 90 days.");
        }
        const { data, error } = await admin.rpc("admin_growth_summary", {
          p_days: days,
        });
        if (error)
          throw new RequestError(
            "Could not load growth metrics. Please retry.",
            500,
          );
        return json(data);
      }
      if (body.action === "connection-status") {
        const token = await tokenRow();
        const { data: latest, error } = await admin
          .from("gsc_checks")
          .select("created_at,range_start,range_end,payload")
          .eq("metric", "search_analytics")
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();
        if (error)
          throw new RequestError("Could not read saved ranking status.", 500);
        return json({
          connected: Boolean(token),
          configured,
          property: PROPERTY,
          redirectUri: REDIRECT_URI,
          connectedAt: token?.updated_at ?? null,
          latestCheck: latest
            ? {
                createdAt: latest.created_at,
                startDate: latest.range_start,
                endDate: latest.range_end,
                rows: latest.payload?.rows?.length ?? 0,
                truncated: Boolean(latest.payload?.truncated),
              }
            : null,
        });
      }
      if (body.action === "disconnect") {
        const { error } = await admin
          .from("gsc_oauth_tokens")
          .delete()
          .eq("user_id", user.id);
        if (error)
          throw new RequestError(
            "Could not disconnect Google. Try again.",
            500,
          );
        return json({ success: true });
      }
      if (!configured)
        return json(
          {
            error:
              "Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in Supabase Edge Function secrets, then register the callback URL in Google Cloud.",
            needsSetup: true,
            redirectUri: REDIRECT_URI,
          },
          503,
        );
      if (body.action === "oauth-start") {
        const state = await createOAuthState(user.id, serviceKey);
        const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
        url.search = new URLSearchParams({
          client_id: clientId,
          redirect_uri: REDIRECT_URI,
          response_type: "code",
          scope: SCOPE,
          access_type: "offline",
          prompt: "consent",
          state,
        }).toString();
        return json({ authUrl: url.toString(), state });
      }
      if (body.action === "oauth-callback") {
        if (!(await verifyOAuthState(body.state, user.id, serviceKey)))
          throw new RequestError(
            "This Google connection request is invalid or expired. Start again.",
          );
        if (
          typeof body.code !== "string" ||
          !body.code ||
          body.code.length > 4096
        )
          throw new RequestError(
            "No valid Google authorization code received.",
          );
        const tokens = await google("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            code: body.code,
            client_id: clientId,
            client_secret: clientSecret!,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code",
          }),
        });
        if (!tokens.access_token || !Number.isFinite(tokens.expires_in))
          throw new RequestError(
            "Google returned an incomplete authorization response.",
            502,
          );
        const old = await tokenRow();
        const refreshToken = tokens.refresh_token || old?.refresh_token;
        if (!refreshToken)
          throw new RequestError(
            "Google did not grant offline access. Connect again and approve access.",
            409,
          );
        const { error } = await admin
          .from("gsc_oauth_tokens")
          .upsert(
            {
              user_id: user.id,
              access_token: tokens.access_token,
              refresh_token: refreshToken,
              expires_at: new Date(
                Date.now() + tokens.expires_in * 1000,
              ).toISOString(),
              scope: tokens.scope || SCOPE,
              token_type: tokens.token_type || "Bearer",
              updated_at: new Date().toISOString(),
            },
            { onConflict: "user_id" },
          );
        if (error)
          throw new RequestError(
            "Google approved access, but saving the connection failed. Try connecting again.",
            500,
          );
        return json({ success: true });
      }
      const token = await tokenRow();
      if (!token)
        throw new RequestError(
          "Connect your Google Search Console account first.",
          409,
        );
      let accessToken = token.access_token;
      if (
        !token.expires_at ||
        new Date(token.expires_at).getTime() < Date.now() + 60_000
      ) {
        if (!token.refresh_token)
          throw new RequestError("Connect Google again to renew access.", 409);
        const refreshed = await google("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret!,
            refresh_token: token.refresh_token,
            grant_type: "refresh_token",
          }),
        });
        if (!refreshed.access_token || !Number.isFinite(refreshed.expires_in))
          throw new RequestError(
            "Google returned an incomplete renewal response.",
            502,
          );
        const { error } = await admin
          .from("gsc_oauth_tokens")
          .update({
            access_token: refreshed.access_token,
            refresh_token: refreshed.refresh_token || token.refresh_token,
            expires_at: new Date(
              Date.now() + refreshed.expires_in * 1000,
            ).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", user.id);
        if (error)
          throw new RequestError("Could not save renewed Google access.", 500);
        accessToken = refreshed.access_token;
      }
      const googleHeaders = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      };
      if (body.action === "search-analytics") {
        const { startDate, endDate } = body;
        const validDate = (date: unknown): date is string =>
          typeof date === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(date) &&
          Number.isFinite(Date.parse(date)) &&
          new Date(date).toISOString().slice(0, 10) === date;
        if (!validDate(startDate) || !validDate(endDate) || startDate > endDate)
          throw new RequestError("Choose a valid start and end date.");
        const dimensions = body.dimensions ?? ["query", "page"];
        if (
          !Array.isArray(dimensions) ||
          dimensions.some(
            (d) =>
              ![
                "query",
                "page",
                "date",
                "country",
                "device",
                "searchAppearance",
              ].includes(d),
          ) ||
          new Set(dimensions).size !== dimensions.length
        )
          throw new RequestError("Invalid ranking dimensions.");
        const rowLimit = body.rowLimit ?? 25_000;
        const startRow = body.startRow ?? 0;
        if (
          !Number.isInteger(rowLimit) ||
          rowLimit < 1 ||
          rowLimit > 25_000 ||
          !Number.isInteger(startRow) ||
          startRow < 0
        )
          throw new RequestError("Invalid ranking page size.");
        const query: Record<string, unknown> = {
          startDate,
          endDate,
          dimensions,
          rowLimit,
          startRow,
          type: body.type ?? "web",
          dataState: "final",
        };
        if (body.dimensionFilterGroups)
          query.dimensionFilterGroups = body.dimensionFilterGroups;
        if (body.aggregationType) query.aggregationType = body.aggregationType;
        const result = await google(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROPERTY)}/searchAnalytics/query`,
          {
            method: "POST",
            headers: googleHeaders,
            body: JSON.stringify(query),
          },
        );
        const truncated = (result.rows?.length ?? 0) === rowLimit;
        const { error } = await admin
          .from("gsc_checks")
          .insert({
            metric: "search_analytics",
            range_start: startDate,
            range_end: endDate,
            payload: { ...result, property: PROPERTY, query, truncated },
          });
        if (error)
          throw new RequestError(
            "Google returned rankings, but saving them failed. Please retry.",
            500,
          );
        return json({ ...result, truncated });
      }
      if (body.action === "sitemaps-list")
        return json(
          await google(
            `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROPERTY)}/sitemaps`,
            { headers: googleHeaders },
          ),
        );
      if (body.action === "url-inspection") {
        let url: URL;
        try {
          url = new URL(body.inspectionUrl);
        } catch {
          throw new RequestError("Enter a valid SafeOrStolen URL.");
        }
        if (
          url.protocol !== "https:" ||
          !["safeorstolen.com", "www.safeorstolen.com"].includes(url.hostname)
        )
          throw new RequestError("Inspect a SafeOrStolen URL only.");
        const result = await google(
          "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
          {
            method: "POST",
            headers: googleHeaders,
            body: JSON.stringify({
              inspectionUrl: url.toString(),
              siteUrl: PROPERTY,
              languageCode: "en-US",
            }),
          },
        );
        const { error } = await admin
          .from("gsc_checks")
          .insert({
            metric: "url_inspection",
            payload: { url: url.toString(), ...result },
          });
        if (error)
          throw new RequestError("Could not save the URL inspection.", 500);
        return json(result);
      }
      throw new RequestError("Unknown Search Console action.");
    } catch (error) {
      if (error instanceof RequestError)
        return json({ error: error.message }, error.status);
      console.error(
        "[gsc-api] Request failed:",
        error instanceof Error ? error.name : "UnknownError",
      );
      return json(
        { error: "Search Console request failed. Please try again." },
        500,
      );
    }
  };
}
