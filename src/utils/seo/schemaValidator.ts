/**
 * Schema Validator - Automated Google Structured Data Validation
 * Prevents invalid schemas from being deployed to production
 * 
 * Run this validator before deployment to catch:
 * - Invalid AggregateRating without Review objects
 * - Missing required fields
 * - Invalid schema types
 * - Malformed JSON-LD
 */

export interface ValidationError {
  severity: 'critical' | 'warning' | 'info';
  schemaType: string;
  message: string;
  location?: string;
  fix?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
  schemasChecked: number;
}

/**
 * Validates a single schema object for common Google errors
 */
export const validateSchema = (schema: any, location: string = 'unknown'): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  if (!schema || typeof schema !== 'object') {
    errors.push({
      severity: 'critical',
      schemaType: 'unknown',
      message: 'Schema is not a valid object',
      location
    });
    return errors;
  }

  const schemaType = schema['@type'];
  
  // CRITICAL: Check for standalone AggregateRating (Google's #1 rejection reason)
  if (schemaType === 'AggregateRating') {
    errors.push({
      severity: 'critical',
      schemaType: 'AggregateRating',
      message: 'Standalone AggregateRating detected. Must be nested within Product/Service with Review objects.',
      location,
      fix: 'Remove AggregateRating or add actual Review schema with author, datePublished, and reviewBody.'
    });
  }

  // CRITICAL: Check for aggregateRating without reviews
  if (schema.aggregateRating && !schema.review) {
    errors.push({
      severity: 'critical',
      schemaType: schemaType || 'unknown',
      message: `Schema has aggregateRating but no review objects. Google requires actual Review markup.`,
      location,
      fix: 'Either remove aggregateRating or add review array with real user reviews (author, date, text).'
    });
  }

  // WARNING: Check for Product schema on service websites
  if (schemaType === 'Product' && !schema.offers?.price) {
    errors.push({
      severity: 'warning',
      schemaType: 'Product',
      message: 'Product schema detected on service website. Consider using Service schema instead.',
      location,
      fix: 'Change @type from "Product" to "Service" if you are offering a service, not selling physical products.'
    });
  }

  // CRITICAL: Check for Review without required fields
  if (schemaType === 'Review') {
    if (!schema.author) {
      errors.push({
        severity: 'critical',
        schemaType: 'Review',
        message: 'Review missing required "author" field',
        location,
        fix: 'Add author object with @type: "Person" and name field'
      });
    }
    if (!schema.datePublished) {
      errors.push({
        severity: 'critical',
        schemaType: 'Review',
        message: 'Review missing required "datePublished" field',
        location,
        fix: 'Add datePublished with ISO 8601 date format (YYYY-MM-DD)'
      });
    }
    if (!schema.reviewBody && !schema.reviewRating) {
      errors.push({
        severity: 'critical',
        schemaType: 'Review',
        message: 'Review must have either reviewBody or reviewRating',
        location,
        fix: 'Add reviewBody (text) or reviewRating (Rating object)'
      });
    }
  }

  // WARNING: Check for missing required Organization fields
  if (schemaType === 'Organization' && !schema.url) {
    errors.push({
      severity: 'warning',
      schemaType: 'Organization',
      message: 'Organization missing recommended "url" field',
      location
    });
  }

  // CRITICAL: Check for itemReviewed in Review schema
  if (schemaType === 'Review' && !schema.itemReviewed) {
    errors.push({
      severity: 'critical',
      schemaType: 'Review',
      message: 'Review missing required "itemReviewed" field',
      location,
      fix: 'Add itemReviewed object specifying what is being reviewed (Product, Service, etc.)'
    });
  }

  // INFO: Check for @context
  if (!schema['@context']) {
    errors.push({
      severity: 'info',
      schemaType: schemaType || 'unknown',
      message: 'Schema missing @context (should be "https://schema.org")',
      location
    });
  }

  // Recursively check nested schemas (for @graph arrays)
  if (schema['@graph'] && Array.isArray(schema['@graph'])) {
    schema['@graph'].forEach((nestedSchema: any, index: number) => {
      const nestedErrors = validateSchema(nestedSchema, `${location} > @graph[${index}]`);
      errors.push(...nestedErrors);
    });
  }

  // Check array items (like FAQPage mainEntity)
  if (schema.mainEntity && Array.isArray(schema.mainEntity)) {
    schema.mainEntity.forEach((item: any, index: number) => {
      const itemErrors = validateSchema(item, `${location} > mainEntity[${index}]`);
      errors.push(...itemErrors);
    });
  }

  return errors;
};

/**
 * Validates all schemas in a JSON-LD string or object
 */
export const validateSchemaString = (schemaString: string, location: string = 'unknown'): ValidationError[] => {
  try {
    const schema = JSON.parse(schemaString);
    return validateSchema(schema, location);
  } catch (error) {
    return [{
      severity: 'critical',
      schemaType: 'unknown',
      message: `Invalid JSON-LD: ${error instanceof Error ? error.message : 'Parse error'}`,
      location,
      fix: 'Ensure schema is valid JSON format'
    }];
  }
};

/**
 * Validates all schemas in an HTML document (for SSR/static HTML)
 */
export const validateHTMLSchemas = (html: string): ValidationResult => {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];
  let schemasChecked = 0;

  // Extract all JSON-LD scripts
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  let scriptIndex = 0;

  while ((match = scriptRegex.exec(html)) !== null) {
    scriptIndex++;
    schemasChecked++;
    const schemaString = match[1].trim();
    const location = `<script type="application/ld+json"> #${scriptIndex}`;
    
    const schemaErrors = validateSchemaString(schemaString, location);
    
    schemaErrors.forEach(error => {
      if (error.severity === 'critical') {
        errors.push(error);
      } else if (error.severity === 'warning') {
        warnings.push(error);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    schemasChecked
  };
};

/**
 * Validates schemas from React Helmet components (runtime check)
 */
export const validateReactSchemas = (schemas: any[]): ValidationResult => {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];
  
  schemas.forEach((schema, index) => {
    const schemaErrors = validateSchema(schema, `Schema #${index + 1}`);
    
    schemaErrors.forEach(error => {
      if (error.severity === 'critical') {
        errors.push(error);
      } else if (error.severity === 'warning') {
        warnings.push(error);
      }
    });
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    schemasChecked: schemas.length
  };
};

/**
 * Format validation results for console output
 */
export const formatValidationReport = (result: ValidationResult): string => {
  const lines: string[] = [];
  
  lines.push('\n🔍 Schema Validation Report\n');
  lines.push(`Schemas Checked: ${result.schemasChecked}`);
  lines.push(`Status: ${result.valid ? '✅ PASSED' : '❌ FAILED'}\n`);
  
  if (result.errors.length > 0) {
    lines.push(`\n❌ Critical Errors (${result.errors.length}):`);
    result.errors.forEach((error, i) => {
      lines.push(`\n${i + 1}. [${error.schemaType}] ${error.message}`);
      if (error.location) lines.push(`   Location: ${error.location}`);
      if (error.fix) lines.push(`   Fix: ${error.fix}`);
    });
  }
  
  if (result.warnings.length > 0) {
    lines.push(`\n⚠️  Warnings (${result.warnings.length}):`);
    result.warnings.forEach((warning, i) => {
      lines.push(`\n${i + 1}. [${warning.schemaType}] ${warning.message}`);
      if (warning.location) lines.push(`   Location: ${warning.location}`);
    });
  }
  
  if (result.valid) {
    lines.push('\n✅ All schemas are valid and safe for deployment!\n');
  } else {
    lines.push('\n❌ Deployment blocked: Fix critical errors before deploying.\n');
  }
  
  return lines.join('\n');
};

/**
 * Test validator with known good and bad schemas
 */
export const runValidatorTests = (): void => {
  console.log('\n🧪 Running Schema Validator Tests...\n');
  
  // Test 1: Invalid AggregateRating (should FAIL)
  const badSchema1 = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "125000"
  };
  const test1 = validateSchema(badSchema1, 'Test 1: Standalone AggregateRating');
  console.log('Test 1 - Standalone AggregateRating:', test1.length > 0 ? '✅ DETECTED' : '❌ MISSED');
  
  // Test 2: Product with aggregateRating but no reviews (should FAIL)
  const badSchema2 = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Test Product",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  };
  const test2 = validateSchema(badSchema2, 'Test 2: Product with aggregateRating, no reviews');
  console.log('Test 2 - aggregateRating without reviews:', test2.length > 0 ? '✅ DETECTED' : '❌ MISSED');
  
  // Test 3: Valid Service schema (should PASS)
  const goodSchema1 = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Verification Service",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    }
  };
  const test3 = validateSchema(goodSchema1, 'Test 3: Valid Service Schema');
  console.log('Test 3 - Valid Service Schema:', test3.length === 0 ? '✅ PASSED' : '❌ FAILED');
  
  // Test 4: Valid Product with proper reviews (should PASS)
  const goodSchema2 = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Test Product",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Doe"
        },
        "datePublished": "2025-01-15",
        "reviewBody": "Great service!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  };
  const test4 = validateSchema(goodSchema2, 'Test 4: Product with proper reviews');
  console.log('Test 4 - Product with proper reviews:', test4.filter(e => e.severity === 'critical').length === 0 ? '✅ PASSED' : '❌ FAILED');
  
  console.log('\n✅ Validator tests completed!\n');
};
