// Force rebuild: 2025-11-13T10:15:00Z
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    // Static HTML generation for bots (prerender + schemas)
    {
      name: 'post-build-seo-static-html',
      closeBundle: async () => {
        if (mode === 'production') {
          console.log('🤖 Generating bot prerendered HTML (+ Helmet) …');
          const { execSync } = await import('child_process');
          try {
            // 1) Generate static schema pages in dist/*.html (existing behavior)
            execSync('tsx scripts/generate-static-schemas.ts', { stdio: 'inherit' });
            // 2) Generate SSR HTML into dist/_prerendered/* (served to bots via .htaccess)
            execSync('tsx scripts/prerender-with-schemas.tsx', { stdio: 'inherit' });
          } catch (error) {
            console.error('⚠️  Static SEO HTML generation failed:', error);
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