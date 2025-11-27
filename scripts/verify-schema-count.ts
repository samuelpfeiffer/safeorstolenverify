/**
 * Schema Counter and Validator
 * Verifies we have 30+ schemas properly defined
 */

import { PAGE_SCHEMA_DEFINITIONS } from './schema-definitions.js';

function countSchemas() {
  console.log('🔍 Counting all schemas...\n');
  
  // Global schemas from index.html
  const globalSchemas = ['Organization', 'WebSite', 'SoftwareApplication'];
  console.log('📦 Global Schemas (in index.html):');
  globalSchemas.forEach((name, i) => {
    console.log(`   ${i + 1}. ${name}`);
  });
  console.log(`   SUBTOTAL: ${globalSchemas.length}\n`);
  
  // Page-specific schemas
  let pageSchemaCount = 0;
  console.log('📄 Page-Specific Schemas:');
  
  PAGE_SCHEMA_DEFINITIONS.forEach(page => {
    console.log(`\n   ${page.path} (${page.schemas.length} schemas):`);
    page.schemas.forEach((schema, i) => {
      const type = schema['@type'];
      const name = schema.name || type;
      console.log(`      ${pageSchemaCount + i + 1}. ${type} - ${name}`);
    });
    pageSchemaCount += page.schemas.length;
  });
  
  const totalSchemas = globalSchemas.length + pageSchemaCount;
  
  console.log('\n' + '═'.repeat(60));
  console.log(`📊 TOTAL SCHEMAS: ${totalSchemas}`);
  console.log('═'.repeat(60));
  
  if (totalSchemas >= 30) {
    console.log(`✅ SUCCESS! We have ${totalSchemas} schemas (target: 30+)`);
  } else {
    console.log(`⚠️  WARNING! Only ${totalSchemas} schemas (need ${30 - totalSchemas} more)`);
  }
  
  // Validate each schema has required fields
  console.log('\n🔍 Validating schema structure...');
  let validationErrors = 0;
  
  PAGE_SCHEMA_DEFINITIONS.forEach(page => {
    page.schemas.forEach((schema, i) => {
      if (!schema['@context']) {
        console.error(`❌ ${page.path} schema #${i + 1}: Missing @context`);
        validationErrors++;
      }
      if (!schema['@type']) {
        console.error(`❌ ${page.path} schema #${i + 1}: Missing @type`);
        validationErrors++;
      }
    });
  });
  
  if (validationErrors === 0) {
    console.log('✅ All schemas have required fields\n');
  } else {
    console.log(`❌ Found ${validationErrors} validation errors\n`);
  }
  
  return totalSchemas;
}

const total = countSchemas();
process.exit(total >= 30 ? 0 : 1);
