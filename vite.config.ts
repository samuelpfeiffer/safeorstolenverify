// Force rebuild: 2025-11-13T10:15:00Z
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mcpPlugin(),
    mode === 'development' && componentTagger(),
    // Static schema generator - embeds all 30+ schemas directly into HTML
    {
      name: 'post-build-static-schemas',
      closeBundle: async () => {
        if (mode === 'production') {
          const { execSync } = await import('child_process');
          console.log('🤖 Generating static HTML with embedded schemas...');
          try {
            execSync('tsx scripts/generate-static-schemas.ts', { stdio: 'inherit' });
          } catch (error) {
            console.error('⚠️  Static schema generation failed:', error);
          }
          // Per-route prerender:every route gets its OWN static HTML (unique title,
          // description, canonical, og:url and body). Must run LAST so it wins.
          console.log('🗺️  Applying per-route prerendered HTML...');
          try {
            execSync('node scripts/apply-prerender.mjs', { stdio: 'inherit' });
          } catch (error) {
            console.error('⚠️  Per-route prerender failed:', error);
          }
        }
      }
    }

  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Dedupe critical packages to prevent multiple instances
    dedupe: ['react', 'react-dom', 'react-router-dom']
  },
  build: {
    rollupOptions: {
      output: {
        // Cache busting with content hash - enables long-term caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // Set long cache for hashed assets (1 year)
          const name = assetInfo.name || 'asset';
          const extType = name.split('.').pop() || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            return 'assets/images/[name].[hash].[ext]';
          }
          if (/woff2?|ttf|eot/i.test(extType)) {
            return 'assets/fonts/[name].[hash].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        },
        manualChunks: (id) => {
          // Keep Vite's dynamic-import preload helper in the always-loaded vendor
          // chunk, otherwise it lands in a lazy chunk (e.g. scanner) and drags
          // that chunk into the initial request wave.
          if (id.includes('vite/preload-helper')) return 'vendor';
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui')) return 'ui';
            if (id.includes('@supabase/supabase-js')) return 'supabase';
            // Split heavy libraries into separate chunks for better code splitting
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('qr-scanner') || id.includes('html5-qrcode') || id.includes('@zxing')) return 'scanner';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('three') || id.includes('@react-three')) return 'three';
          }
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
  },
  preview: {
    port: 8080,
  },
}));