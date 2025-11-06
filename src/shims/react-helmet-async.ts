/**
 * React Helmet Async Shim
 * CRITICAL: This completely replaces react-helmet-async with our custom implementation
 * DO NOT import from 'react-helmet-async' - always use this shim instead
 * The alias in vite.config.ts ensures this shim is used throughout the app
 */
export { Helmet, HelmetProvider } from '@/lib/helmet-shim';
