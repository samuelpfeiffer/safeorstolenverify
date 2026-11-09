import { test } from "node:test";
import assert from "node:assert/strict";
import { createGscHandler } from "../handler.ts";
import { createOAuthState, verifyOAuthState } from "../oauth.ts";

const secret = "test-only-server-signing-key";
const userId = "admin-test";
const existing = {
  access_token: "fake-access",
  refresh_token: "fake-refresh",
  expires_at: new Date(Date.now() + 3_600_000).toISOString(),
  scope: "readonly",
  updated_at: "2026-11-09",
};
function fixture(
  options: {
    admin?: boolean;
    authenticated?: boolean;
    configured?: boolean;
    token?: any;
    dbError?: boolean;
    googleError?: boolean;
    rpcError?: boolean;
  } = {},
) {
  const writes: { table: string; action: string; value: any; options?: any }[] =
    [];
  const calls: { url: string; body: any }[] = [];
  const scopedUsers: string[] = [];
  const adminClient = {
    rpc: async (name: string, params: { p_days: number }) => {
      assert.equal(name, "admin_growth_summary");
      return {
        data: { days: params.p_days, searchRecords: 10, usdGrossCents: 499 },
        error: options.rpcError ? {} : null,
      };
    },
    from(table: string) {
      const builder: any = {
        select: () => builder,
        order: () => builder,
        limit: () => builder,
        eq: (column: string, value: string) => {
          if (column === "user_id") scopedUsers.push(value);
          return builder;
        },
        maybeSingle: async () => ({
          data: table === "gsc_oauth_tokens" ? (options.token ?? null) : null,
          error: null,
        }),
        upsert: async (value: any, opts: any) => {
          writes.push({ table, action: "upsert", value, options: opts });
          return { error: options.dbError ? {} : null };
        },
        insert: async (value: any) => {
          writes.push({ table, action: "insert", value });
          return { error: options.dbError ? {} : null };
        },
        update: (value: any) => {
          writes.push({ table, action: "update", value });
          return builder;
        },
        delete: () => builder,
        then: (resolve: any) => resolve({ error: options.dbError ? {} : null }),
      };
      return builder;
    },
  };
  const userClient = {
    auth: {
      getUser: async () => ({
        data: { user: options.authenticated === false ? null : { id: userId } },
        error: null,
      }),
    },
    rpc: async () => ({ data: options.admin !== false, error: null }),
  };
  const handler = createGscHandler({
    env: (name) =>
      ({
        SUPABASE_URL: "https://example.supabase.co",
        SUPABASE_ANON_KEY: "anon",
        SUPABASE_SERVICE_ROLE_KEY: secret,
        GOOGLE_CLIENT_ID: "test-client",
        GOOGLE_CLIENT_SECRET:
          options.configured === false ? undefined : "test-client-secret",
      })[name],
    createClient: (_url, key) => (key === secret ? adminClient : userClient),
    cors: () => ({}),
    fetch: async (input, init) => {
      const url = String(input);
      calls.push({ url, body: init?.body });
      if (options.googleError)
        return Response.json({ error: "invalid_grant" }, { status: 400 });
      return Response.json(
        url.includes("oauth2.googleapis.com")
          ? {
              access_token: "new-fake-access",
              refresh_token: "new-fake-refresh",
              expires_in: 3600,
              scope: "https://www.googleapis.com/auth/webmasters.readonly",
            }
          : {
              rows: [
                {
                  keys: ["stolen tool", "https://safeorstolen.com/check-tools"],
                  clicks: 3,
                  impressions: 5,
                  position: 1,
                  ctr: 0.6,
                },
              ],
            },
      );
    },
  });
  const invoke = (body: any, authenticated = true) =>
    handler(
      new Request("https://example.test/gsc-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authenticated ? { Authorization: "Bearer fake-user-jwt" } : {}),
        },
        body: JSON.stringify(body),
      }),
    );
  return { invoke, writes, calls, scopedUsers };
}

test("OAuth state is user-bound, signed, and expires after ten minutes", async () => {
  const state = await createOAuthState(userId, secret, 1000);
  assert.equal(await verifyOAuthState(state, userId, secret, 2000), true);
  assert.equal(
    await verifyOAuthState(state, "another-user", secret, 2000),
    false,
  );
  assert.equal(
    await verifyOAuthState(state, userId, "wrong-secret", 2000),
    false,
  );
  assert.equal(await verifyOAuthState(state, userId, secret, 601000), false);
  assert.equal(
    await verifyOAuthState(`${state}tampered`, userId, secret, 2000),
    false,
  );
});
test("rejects missing, expired, and non-admin sessions before any Google request", async () => {
  for (const [options, withAuth, expected] of [
    [{}, false, 401],
    [{ authenticated: false }, true, 401],
    [{ admin: false }, true, 403],
  ] as const) {
    const f = fixture(options);
    assert.equal(
      (await f.invoke({ action: "oauth-start" }, withAuth)).status,
      expected,
    );
    assert.equal(f.calls.length, 0);
  }
});
test("status works with missing OAuth setup and never returns credentials", async () => {
  const f = fixture({ configured: false, token: existing });
  const response = await f.invoke({ action: "connection-status" });
  const body = await response.text();
  assert.equal(response.status, 200);
  assert.equal(JSON.parse(body).configured, false);
  assert.equal(body.includes(existing.access_token), false);
  assert.equal(body.includes(existing.refresh_token), false);
  assert.deepEqual(f.scopedUsers, [userId]);
});
test("OAuth start uses read-only Google scope and callback requires signed state", async () => {
  const f = fixture();
  const body = await (await f.invoke({ action: "oauth-start" })).json();
  const url = new URL(body.authUrl);
  assert.equal(url.searchParams.get("state"), body.state);
  assert.equal(
    url.searchParams.get("scope"),
    "https://www.googleapis.com/auth/webmasters.readonly",
  );
  assert.equal(
    (
      await f.invoke({
        action: "oauth-callback",
        code: "fake-code",
        state: "tampered",
      })
    ).status,
    400,
  );
  assert.equal(f.calls.length, 0);
});
test("callback upserts the actual scope column with a user conflict target", async () => {
  const f = fixture();
  const state = await createOAuthState(userId, secret);
  assert.equal(
    (await f.invoke({ action: "oauth-callback", code: "fake-code", state }))
      .status,
    200,
  );
  assert.equal(f.writes[0].table, "gsc_oauth_tokens");
  assert.equal(f.writes[0].value.user_id, userId);
  assert.equal(typeof f.writes[0].value.scope, "string");
  assert.equal("scopes" in f.writes[0].value, false);
  assert.deepEqual(f.writes[0].options, { onConflict: "user_id" });
});
test("callback reports failed persistence rather than claiming success", async () => {
  const f = fixture({ dbError: true });
  const state = await createOAuthState(userId, secret);
  assert.equal(
    (await f.invoke({ action: "oauth-callback", code: "fake-code", state }))
      .status,
    500,
  );
});
test("rankings persist to gsc_checks with query metadata and row-limit marker", async () => {
  const f = fixture({ token: existing });
  const res = await f.invoke({
    action: "search-analytics",
    startDate: "2026-10-10",
    endDate: "2026-11-06",
    rowLimit: 1,
  });
  assert.equal(res.status, 200);
  assert.equal((await res.json()).truncated, true);
  assert.equal(f.writes[0].table, "gsc_checks");
  assert.equal(f.writes[0].value.metric, "search_analytics");
  assert.equal(f.writes[0].value.payload.query.dataState, "final");
  assert.equal(f.writes[0].value.range_end, "2026-11-06");
});
test("expired token is renewed server-side before requesting rankings", async () => {
  const f = fixture({ token: { ...existing, expires_at: "2020-01-01" } });
  const res = await f.invoke({
    action: "search-analytics",
    startDate: "2026-10-10",
    endDate: "2026-11-06",
  });
  assert.equal(res.status, 200);
  assert.equal(f.calls.length, 2);
  assert.equal(f.calls[0].url, "https://oauth2.googleapis.com/token");
  assert.equal(f.writes[0].action, "update");
  assert.equal(f.writes[0].value.access_token, "new-fake-access");
});
test("rejects invalid dates, row limits, and inspection domains", async () => {
  for (const body of [
    {
      action: "search-analytics",
      startDate: "2026-02-30",
      endDate: "2026-11-06",
    },
    {
      action: "search-analytics",
      startDate: "2026-11-07",
      endDate: "2026-11-06",
    },
    {
      action: "search-analytics",
      startDate: "2026-10-10",
      endDate: "2026-11-06",
      rowLimit: 25001,
    },
    { action: "url-inspection", inspectionUrl: "https://other-site.test/" },
  ]) {
    const f = fixture({ token: existing });
    assert.equal((await f.invoke(body)).status, 400);
    assert.equal(f.calls.length, 0);
  }
});
test("revoked Google access returns a reconnect message without raw provider data", async () => {
  const f = fixture({
    token: { ...existing, expires_at: "2020-01-01" },
    googleError: true,
  });
  const res = await f.invoke({
    action: "search-analytics",
    startDate: "2026-10-10",
    endDate: "2026-11-06",
  });
  assert.equal(res.status, 409);
  assert.match((await res.json()).error, /Connect Google again/);
});

test("growth summary works without Google credentials and returns aggregates only", async () => {
  const f = fixture({ configured: false });
  const res = await f.invoke({ action: "growth-summary", days: 30 });
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), {
    days: 30,
    searchRecords: 10,
    usdGrossCents: 499,
  });
  assert.equal(f.calls.length, 0);
  assert.equal(f.writes.length, 0);
});

test("growth summary rejects non-admins and invalid reporting windows", async () => {
  const denied = fixture({ admin: false });
  assert.equal((await denied.invoke({ action: "growth-summary" })).status, 403);
  for (const days of [0, 91, 1.5, "30"]) {
    const f = fixture();
    assert.equal(
      (await f.invoke({ action: "growth-summary", days })).status,
      400,
    );
  }
});

test("growth summary reports database failures without leaking database details", async () => {
  const f = fixture({ rpcError: true });
  const res = await f.invoke({ action: "growth-summary", days: 7 });
  assert.equal(res.status, 500);
  assert.match((await res.json()).error, /Could not load growth metrics/);
});
