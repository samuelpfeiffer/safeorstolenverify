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
    // Prerender hook runs after build to generate bot-friendly HTML
    {
      name: 'post-build-prerender',
      closeBundle: async () => {
        if (mode === 'production') {
          console.log('🤖 Generating prerendered HTML for bots...');
          const { execSync } = await import('child_process');
          try {
            execSync('tsx scripts/generate-prerender.ts', { stdio: 'inherit' });
          } catch (error) {
            console.error('⚠️  Prerender generation failed:', error);
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
        // Clean cache busting with content hash
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui')) return 'ui';
            if (id.includes('@supabase/supabase-js')) return 'supabase';
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