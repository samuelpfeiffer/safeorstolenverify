/**
 * API Utilities Index
 * Central export point for all API-related utilities
 */

// Supabase Client
export { supabase } from '@/integrations/supabase/client';

// Security & Validation
export * from '../enhancedSecurityAudit';
export * from '../errorHandling';

// Configuration & System
export * from '../configurationUtils';
export * from '../dataRetention';

// Analytics & Tracking
export * from '../auditLogging';

// SEO Utilities
export * from '../seo/canonicalUtils';
export * from '../seo/metadata';
export * from '../seo/performanceOptimizer';
export * from '../seo/analyticsOptimizer';

// Sitemap Configuration
export * from '../../config/sitemap-urls';

// Verification Utilities
export * from '../verification';
export * from '../verificationUtils';
export * from '../itemTypeDetector';

// Error Recovery
export * from '../errorRecovery';
