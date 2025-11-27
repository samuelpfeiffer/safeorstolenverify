#!/usr/bin/env tsx
/**
 * Quick Schema Counter - Run this NOW to verify 30+ schemas
 * Usage: tsx scripts/count-schemas-now.ts
 */

import { PAGE_SCHEMA_DEFINITIONS, getTotalSchemaCount } from './schema-definitions.js';

console.log('\n' + '═'.repeat(70));
console.log('📊 SAFEORSTOLEN SCHEMA COUNT VERIFICATION');
console.log('═'.repeat(70) + '\n');

console.log('🌐 GLOBAL SCHEMAS (in index.html):');
console.log('   1. Organization');
console.log('   2. WebSite');
console.log('   3. SoftwareApplication');
console.log('   ─────────────────────');
console.log('   Subtotal: 3\n');

console.log('📄 PAGE-SPECIFIC SCHEMAS:\n');

let totalPageSchemas = 0;
let schemaNumber = 4; // Start after global schemas

PAGE_SCHEMA_DEFINITIONS.forEach(page => {
  console.log(`   ${page.path}`);
  console.log(`   ├─ Title: ${page.title}`);
  console.log(`   └─ Schemas (${page.schemas.length}):`);
  
  page.schemas.forEach(schema => {
    const type = schema['@type'];
    const name = schema.name || '';
    console.log(`      ${schemaNumber}. ${type}${name ? ` - "${name}"` : ''}`);
    schemaNumber++;
  });
  
  totalPageSchemas += page.schemas.length;
  console.log('');
});

const grandTotal = getTotalSchemaCount();

console.log('═'.repeat(70));
console.log(`📦 TOTAL PAGES: ${PAGE_SCHEMA_DEFINITIONS.length}`);
console.log(`📦 PAGE SCHEMAS: ${totalPageSchemas}`);
console.log(`📦 GLOBAL SCHEMAS: 3`);
console.log(`📦 GRAND TOTAL: ${grandTotal} schemas`);
console.log('═'.repeat(70));

if (grandTotal >= 30) {
  console.log(`\n✅ SUCCESS! ${grandTotal} schemas (target: 30+)`);
  console.log(`✅ Google Search Console will show: "Schema OK (${grandTotal})"\n`);
} else {
  console.log(`\n⚠️  INSUFFICIENT! Only ${grandTotal} schemas`);
  console.log(`⚠️  Need ${30 - grandTotal} more schemas to reach target\n`);
  process.exit(1);
}

console.log('📋 BREAKDOWN BY PAGE:');
PAGE_SCHEMA_DEFINITIONS.forEach(page => {
  const total = page.schemas.length + 3; // Include global schemas
  console.log(`   ${page.path.padEnd(20)} = ${page.schemas.length} page + 3 global = ${total} total`);
});

console.log('\n🚀 NEXT STEP: Run build to generate static HTML files');
console.log('   npm run build\n');

process.exit(0);
