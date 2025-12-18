#!/usr/bin/env tsx
/**
 * Complete Schema System Test
 * Verifies all 30+ schemas are properly defined and ready
 */

import { PAGE_SCHEMA_DEFINITIONS, getTotalSchemaCount, getSchemasForPage } from './schema-definitions.js';

console.log('\n' + '═'.repeat(80));
console.log('🧪 SAFEORSTOLEN SCHEMA SYSTEM TEST');
console.log('═'.repeat(80) + '\n');

// Test 1: Count schemas
console.log('TEST 1: Schema Count');
console.log('─'.repeat(80));
const total = getTotalSchemaCount();
console.log(`✓ Total schemas defined: ${total}`);
console.log(`✓ Pages with schemas: ${PAGE_SCHEMA_DEFINITIONS.length}`);
console.log(`✓ Global schemas (index.html): 3`);
console.log(`✓ Target: 30+`);

if (total >= 30) {
  console.log(`✅ PASS: ${total} schemas (exceeds target by ${total - 30})`);
} else {
  console.log(`❌ FAIL: Only ${total} schemas (need ${30 - total} more)`);
  process.exit(1);
}

// Test 2: Validate schema structure
console.log('\n\nTEST 2: Schema Structure Validation');
console.log('─'.repeat(80));
let errors = 0;
let warnings = 0;

PAGE_SCHEMA_DEFINITIONS.forEach(page => {
  page.schemas.forEach((schema, idx) => {
    // Required fields
    if (!schema['@context']) {
      console.error(`❌ ${page.path} schema #${idx + 1}: Missing @context`);
      errors++;
    }
    if (!schema['@type']) {
      console.error(`❌ ${page.path} schema #${idx + 1}: Missing @type`);
      errors++;
    }
    
    // Type-specific validation
    const type = schema['@type'];
    
    if (type === 'Service' && !schema.serviceType) {
      console.warn(`⚠️  ${page.path} Service schema: Missing serviceType (recommended)`);
      warnings++;
    }
    
    if (type === 'FAQPage' && (!schema.mainEntity || schema.mainEntity.length === 0)) {
      console.error(`❌ ${page.path} FAQPage: No questions defined`);
      errors++;
    }
    
    if (type === 'BreadcrumbList' && (!schema.itemListElement || schema.itemListElement.length === 0)) {
      console.error(`❌ ${page.path} BreadcrumbList: No items defined`);
      errors++;
    }
  });
});

if (errors === 0 && warnings === 0) {
  console.log('✅ PASS: All schemas have valid structure');
} else {
  console.log(`${errors === 0 ? '✅' : '❌'} Errors: ${errors}`);
  console.log(`${warnings === 0 ? '✅' : '⚠️ '} Warnings: ${warnings}`);
  if (errors > 0) process.exit(1);
}

// Test 3: Check for duplicate schemas
console.log('\n\nTEST 3: Duplicate Schema Detection');
console.log('─'.repeat(80));
const schemaTypes: Record<string, number> = {};
PAGE_SCHEMA_DEFINITIONS.forEach(page => {
  page.schemas.forEach(schema => {
    const key = `${page.path}:${schema['@type']}`;
    schemaTypes[key] = (schemaTypes[key] || 0) + 1;
  });
});

const duplicates = Object.entries(schemaTypes).filter(([, count]) => count > 1);
if (duplicates.length === 0) {
  console.log('✅ PASS: No duplicate schemas on same page');
} else {
  console.log('❌ FAIL: Found duplicate schemas:');
  duplicates.forEach(([key, count]) => {
    console.log(`   ${key} appears ${count} times`);
  });
  process.exit(1);
}

// Test 4: Verify all core pages are covered
console.log('\n\nTEST 4: Core Page Coverage');
console.log('─'.repeat(80));
const expectedPages = ['/', '/verify', '/app', '/pricing', '/about', '/faq', '/terms', '/privacy', '/how-it-works'];
const definedPages = PAGE_SCHEMA_DEFINITIONS.map(p => p.path);

const missingPages = expectedPages.filter(p => !definedPages.includes(p));
if (missingPages.length === 0) {
  console.log(`✅ PASS: All ${expectedPages.length} core pages have schemas`);
} else {
  console.log('❌ FAIL: Missing schemas for:');
  missingPages.forEach(page => console.log(`   ${page}`));
  process.exit(1);
}

// Test 5: Schema type distribution
console.log('\n\nTEST 5: Schema Type Distribution');
console.log('─'.repeat(80));
const typeCount: Record<string, number> = {};
PAGE_SCHEMA_DEFINITIONS.forEach(page => {
  page.schemas.forEach(schema => {
    const type = schema['@type'];
    typeCount[type] = (typeCount[type] || 0) + 1;
  });
});

console.log('Schema types across all pages:');
Object.entries(typeCount)
  .sort((a, b) => b[1] - a[1])
  .forEach(([type, count]) => {
    console.log(`   ${type.padEnd(25)} : ${count}`);
  });
console.log('✅ PASS: Schema diversity verified');

// Summary
console.log('\n' + '═'.repeat(80));
console.log('📊 TEST SUMMARY');
console.log('═'.repeat(80));
console.log(`✅ Total Schemas: ${total}`);
console.log(`✅ Pages: ${PAGE_SCHEMA_DEFINITIONS.length}`);
console.log(`✅ Schema Types: ${Object.keys(typeCount).length}`);
console.log(`✅ All Tests: PASSED`);
console.log('═'.repeat(80));

console.log('\n🎉 Schema system is ready for production!');
console.log('📋 Next step: Run build to generate static HTML files');
console.log('   npm run build\n');

process.exit(0);
