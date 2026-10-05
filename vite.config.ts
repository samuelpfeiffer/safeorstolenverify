// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [mcpPlugin()],
    // Build id for the edge HTML cache key in src/server.ts (new publish = fresh cache).
    define: { __SOS_BUILD_ID__: JSON.stringify(Date.now().toString(36)) },
    // Route every react-helmet-async import to our SSR-capable shim so per-page
    // title/description/canonical land in the server-rendered HTML.
    resolve: {
      alias: [
        {
          find: /^react-helmet-async$/,
          replacement: new URL("./src/lib/helmet-shim.tsx", import.meta.url).pathname,
        },
      ],
    },
  },

});
