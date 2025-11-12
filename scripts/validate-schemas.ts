#!/usr/bin/env node

/**
 * Pre-Deployment Schema Validator Script
 * 
 * Run this before deploying to catch Google structured data errors.
 * 
 * Usage:
 *   npm run validate-schemas
 * 
 * Exit codes:
 *   0 = All schemas valid
 *   1 = Critical errors found (blocks deployment)
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { validateHTMLSchemas, formatValidationReport, runValidatorTests, type ValidationResult } from '../src/utils/seo/schemaValidator';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
console.log(`${colors.magenta}🔍 SafeOrStolen Schema Validator${colors.reset}`);
console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

// Run built-in tests first
console.log('Step 1: Running validator self-tests...\n');
runValidatorTests();

// Find all TypeScript/TSX files with schemas
console.log('\nStep 2: Scanning codebase for schema definitions...\n');

const srcDir = join(process.cwd(), 'src');
const schemasFound: string[] = [];
let filesScanned = 0;

function scanDirectory(dir: string) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      }
    } else if (['.ts', '.tsx'].includes(extname(file))) {
      filesScanned++;
      const content = readFileSync(filePath, 'utf-8');
      
      // Check if file contains schema definitions
      if (
        content.includes('@type') && 
        content.includes('schema.org') ||
        content.includes('application/ld+json')
      ) {
        schemasFound.push(filePath.replace(process.cwd(), ''));
      }
    }
  });
}

scanDirectory(srcDir);

console.log(`Files scanned: ${filesScanned}`);
console.log(`Files with schemas: ${schemasFound.length}\n`);

if (schemasFound.length > 0) {
  console.log('Schema files found:');
  schemasFound.forEach(file => {
    console.log(`  ${colors.blue}•${colors.reset} ${file}`);
  });
  console.log('');
}

// Validate key schema utility files
console.log('\nStep 3: Validating schema utility functions...\n');

const utilFiles = [
  'src/utils/seo/structuredData.ts',
  'src/components/seo/MasterSEO.tsx',
  'src/components/seo/AdvancedSchemaGenerator.tsx'
];

let hasBlockingIssues = false;

utilFiles.forEach(file => {
  const filePath = join(process.cwd(), file);
  try {
    const content = readFileSync(filePath, 'utf-8');
    
    // Check for common anti-patterns
    const issues: string[] = [];
    
    if (content.match(/aggregateRating.*:.*{/)) {
      issues.push('❌ Contains aggregateRating definition (check if it has proper Review objects)');
    }
    
    if (content.match(/@type.*:.*["']AggregateRating["']/)) {
      issues.push('❌ Contains standalone AggregateRating schema (CRITICAL)');
      hasBlockingIssues = true;
    }
    
    if (content.match(/ratingValue.*:.*["']\d+\.\d+["']/)) {
      issues.push('⚠️  Contains hardcoded rating values');
    }
    
    if (content.match(/reviewCount.*:.*["']\d+["']/)) {
      issues.push('⚠️  Contains hardcoded review counts');
    }
    
    if (issues.length > 0) {
      console.log(`${colors.yellow}${file}:${colors.reset}`);
      issues.forEach(issue => console.log(`  ${issue}`));
      console.log('');
    } else {
      console.log(`${colors.green}✓${colors.reset} ${file} - No issues detected`);
    }
  } catch (error) {
    console.log(`${colors.yellow}⚠️  ${file} - File not found (optional)${colors.reset}`);
  }
});

// Final validation summary
console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

if (hasBlockingIssues) {
  console.log(`${colors.red}❌ DEPLOYMENT BLOCKED${colors.reset}`);
  console.log(`${colors.red}Critical schema errors detected. Fix issues before deploying.${colors.reset}\n`);
  process.exit(1);
} else {
  console.log(`${colors.green}✅ VALIDATION PASSED${colors.reset}`);
  console.log(`${colors.green}No critical schema errors detected. Safe to deploy!${colors.reset}\n`);
  console.log('Note: For runtime validation, the site includes SchemaValidationMonitor');
  console.log('that will check schemas in development mode.\n');
  process.exit(0);
}
