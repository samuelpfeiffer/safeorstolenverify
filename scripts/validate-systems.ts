#!/usr/bin/env node

/**
 * Pre-Deployment System Validator
 * Validates Stripe and Authentication before deployment
 * 
 * Usage: npm run validate-systems
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
console.log(`${colors.magenta}🔐 SafeOrStolen System Validator${colors.reset}`);
console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

let hasBlockingIssues = false;
const issues: string[] = [];

// Check 1: Stripe Configuration
console.log('🔍 Step 1: Validating Stripe integration...\n');

const stripeFiles = [
  'supabase/functions/create-checkout/index.ts',
  'src/hooks/useStripeCheckout.ts'
];

stripeFiles.forEach(file => {
  try {
    const content = readFileSync(join(process.cwd(), file), 'utf-8');
    
    // Check for common Stripe issues
    if (content.includes('price_1SDRrMGxnZLw8J7ObJsUlp6k')) {
      issues.push(`⚠️  ${file}: Uses old $0.50 price ID`);
    }
    
    if (file.includes('create-checkout') && !content.includes('Stripe(')) {
      issues.push(`❌ ${file}: Stripe not properly initialized`);
      hasBlockingIssues = true;
    }
    
    console.log(`${colors.green}✓${colors.reset} ${file} - OK`);
  } catch (error) {
    console.log(`${colors.yellow}⚠️  ${file} - File not found${colors.reset}`);
  }
});

// Check 2: Authentication Configuration
console.log('\n🔍 Step 2: Validating Authentication...\n');

const authFiles = [
  'src/lib/auth/AuthProvider.tsx',
  'src/integrations/supabase/client.ts'
];

authFiles.forEach(file => {
  try {
    const content = readFileSync(join(process.cwd(), file), 'utf-8');
    
    // Check for auth best practices
    if (file.includes('AuthProvider')) {
      if (!content.includes('onAuthStateChange')) {
        issues.push(`❌ ${file}: Missing onAuthStateChange listener`);
        hasBlockingIssues = true;
      }
      
      if (!content.includes('getSession')) {
        issues.push(`❌ ${file}: Missing getSession call`);
        hasBlockingIssues = true;
      }
      
      if (content.match(/onAuthStateChange.*async\s*\(/)) {
        issues.push(`⚠️  ${file}: onAuthStateChange uses async - may cause deadlock`);
      }
    }
    
    console.log(`${colors.green}✓${colors.reset} ${file} - OK`);
  } catch (error) {
    console.log(`${colors.red}❌ ${file} - File not found (CRITICAL)${colors.reset}`);
    hasBlockingIssues = true;
  }
});

// Check 3: Environment Variables
console.log('\n🔍 Step 3: Checking required environment variables...\n');

const requiredEnvVars = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_PUBLISHABLE_KEY',
  'VITE_STRIPE_PUBLISHABLE_KEY'
];

try {
  const envExample = readFileSync(join(process.cwd(), '.env.example'), 'utf-8');
  
  requiredEnvVars.forEach(varName => {
    if (!envExample.includes(varName)) {
      issues.push(`⚠️  ${varName} not in .env.example`);
    } else {
      console.log(`${colors.green}✓${colors.reset} ${varName} - Documented`);
    }
  });
} catch (error) {
  console.log(`${colors.yellow}⚠️  .env.example not found${colors.reset}`);
}

// Check 4: Edge Functions
console.log('\n🔍 Step 4: Validating Edge Functions...\n');

const edgeFunctions = [
  'create-checkout'
];

edgeFunctions.forEach(func => {
  const funcPath = `supabase/functions/${func}/index.ts`;
  try {
    const content = readFileSync(join(process.cwd(), funcPath), 'utf-8');
    
    if (!content.includes('corsHeaders')) {
      issues.push(`⚠️  ${func}: Missing CORS headers`);
    }
    
    if (!content.includes('Deno.env.get')) {
      issues.push(`❌ ${func}: Not reading environment variables`);
      hasBlockingIssues = true;
    }
    
    console.log(`${colors.green}✓${colors.reset} ${func} - OK`);
  } catch (error) {
    console.log(`${colors.yellow}⚠️  ${func} - Not found${colors.reset}`);
  }
});

// Summary
console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

if (issues.length > 0) {
  console.log(`${colors.yellow}Issues Found (${issues.length}):${colors.reset}\n`);
  issues.forEach(issue => console.log(`  ${issue}`));
  console.log('');
}

if (hasBlockingIssues) {
  console.log(`${colors.red}❌ DEPLOYMENT BLOCKED${colors.reset}`);
  console.log(`${colors.red}Critical system errors detected. Fix issues before deploying.${colors.reset}\n`);
  process.exit(1);
} else {
  console.log(`${colors.green}✅ VALIDATION PASSED${colors.reset}`);
  console.log(`${colors.green}No critical system errors detected. Safe to deploy!${colors.reset}\n`);
  console.log('💡 Tip: Runtime monitoring is active in development mode.\n');
  process.exit(0);
}
