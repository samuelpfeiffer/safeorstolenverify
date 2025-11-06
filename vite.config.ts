import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
            handler: 'NetworkFirst',
            options: { cacheName: 'supabase-cache' }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|webp|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60
              }
            }
          }
        ]
      },
      manifest: {
        name: 'SafeOrStolen',
        short_name: 'SOS',
        theme_color: '#FF6B35',
        icons: [
          { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-helmet-async": path.resolve(__dirname, "./src/shims/react-helmet-async.ts"),
    },
    // CRITICAL: Dedupe prevents multiple React instances
    dedupe: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query'
      // DO NOT include react-helmet-async - we use a custom shim
    ],
    esbuildOptions: {
      // Ensure React is treated as a singleton during pre-bundling
      mainFields: ['module', 'main'],
      resolveExtensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    // Force Vite to re-optimize on next start
    force: true,
  },
  define: {
    global: 'globalThis',
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    logLevel: 'error',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async') || id.includes('@tanstack/react-query')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) return 'ui-radix';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('react-hook-form') || id.includes('@hookform/resolvers') || id.includes('zod')) return 'forms';
            if (id.includes('@supabase/supabase-js')) return 'supabase';
            if (id.includes('stripe')) return 'stripe';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor';
          }
          if (id.includes('/pages/')) {
            if (id.match(/\/(Index|HomePage|StolenItemChecker|IMEICheck|VIN|UnifiedVerification)Page/)) return 'pages-hero';
            if (id.match(/\/(Serial|Firearms|CheckPhone|CheckCar|CheckElectronics|CheckBike|ItemCategories)Page/)) return 'pages-verify';
            if (id.match(/\/(Auth|Dashboard|Profile|Subscription|Analytics|Security|SearchHistory|Receipts|PurchaseHistory)Page/)) return 'pages-user';
            if (id.includes('/admin/') || id.includes('Admin')) return 'pages-admin';
            if (id.includes('/blog/') || id.includes('Blog') || id.includes('Post')) return 'pages-blog';
            if (id.match(/\/(Vs|Compare|Competitor|Alternative|SafeOrStolenVs)/i)) return 'pages-seo';
            if (id.match(/\/(Guide|HowTo|Tutorial|Ultimate|Comprehensive|Avoid|Learn|Tips|Report)/i)) return 'pages-guides';
            if (id.match(/\/(Arizona|Florida|California|Texas|City|Local|NewYork|Illinois)/)) return 'pages-locations';
            if (id.includes('/mobile/') || id.includes('Mobile')) return 'pages-mobile';
            if (id.includes('/templates/') || id.includes('Template')) return 'pages-templates';
            if (id.includes('/fastercapital/') || id.includes('Partner')) return 'pages-partners';
            if (id.match(/\/(Pricing|Payment|Success|Cancel|Checkout|Enterprise|Subscription)/)) return 'pages-commerce';
            if (id.match(/\/(Terms|Privacy|Disclaimer|Cookies|Refund|About|Contact|FAQ|Press|Legal)/)) return 'pages-info';
            if (id.match(/\/(Statistic|Data|Analysis|Performance|Transparency|Problem|Accuracy|Service)/i)) return 'pages-data';
            if (id.match(/\/(NotFound|Error|404)/i)) return 'pages-utility';
            return 'pages-other';
          }
        },
        compact: true,
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 5000,
    assetsInlineLimit: 4096,
  },
  // Handle 404s properly for SPA routing
  preview: {
    port: 8080,
  },
}));