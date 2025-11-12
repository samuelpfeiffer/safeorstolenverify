# Automated Schema Validation System

## Overview

SafeOrStolen now has a comprehensive, multi-layer schema validation system to prevent Google structured data errors before they reach production.

## System Components

### 1. Schema Validator (`src/utils/seo/schemaValidator.ts`)
Core validation engine that checks for:
- ❌ Standalone `AggregateRating` schemas (Google's #1 rejection reason)
- ❌ `aggregateRating` without actual `Review` objects
- ❌ Missing required fields (author, datePublished, itemReviewed)
- ⚠️  Product schema on service websites
- ⚠️  Invalid JSON-LD syntax
- ℹ️  Missing recommended fields

**Key Functions:**
- `validateSchema()` - Validates a single schema object
- `validateSchemaString()` - Validates JSON-LD string
- `validateHTMLSchemas()` - Scans entire HTML document
- `validateReactSchemas()` - Validates React Helmet schemas
- `formatValidationReport()` - Pretty-prints results
- `runValidatorTests()` - Built-in self-tests

### 2. Runtime Monitor (`src/components/seo/SchemaValidationMonitor.tsx`)
**Development-only** component that:
- ✅ Automatically validates all schemas on page load
- 🔴 Shows toast notifications for critical errors
- 📊 Logs detailed reports to console
- 🎯 Exposes `window.__schemaValidation` for debugging

**Visual Indicator:**
- Green badge = All schemas valid
- Red badge = Critical errors detected
- Yellow badge = Warnings present
- Click badge to view full report in console

### 3. Pre-Deployment Script (`scripts/validate-schemas.ts`)
Command-line validator that runs before deployment:

```bash
npm run validate-schemas
```

**What it does:**
1. Runs built-in validator tests
2. Scans entire codebase for schema files
3. Checks for anti-patterns (hardcoded ratings, etc.)
4. Blocks deployment if critical errors found
5. Exit code 0 = safe to deploy, 1 = blocked

### 4. Integration with Build Process

To automatically run validation before every build, add to `package.json`:

```json
{
  "scripts": {
    "prebuild": "tsx scripts/validate-schemas.ts",
    "build": "vite build",
    "validate-schemas": "tsx scripts/validate-schemas.ts"
  }
}
```

## Usage Guide

### Development Workflow

1. **While coding:**
   - Make schema changes in your components
   - `SchemaValidationMonitor` automatically checks on page load
   - See results in browser console and floating indicator

2. **Before committing:**
   ```bash
   npm run validate-schemas
   ```
   - Catches issues before they reach repo

3. **Before deploying:**
   - System automatically validates if `prebuild` script is set
   - Or manually run: `npm run validate-schemas`
   - Deployment blocked if critical errors found

### Testing Your Schemas

**Option 1: Automatic (Runtime)**
- Just load the page in dev mode
- Check console and floating indicator

**Option 2: Manual (CLI)**
```bash
npm run validate-schemas
```

**Option 3: Browser Console**
```javascript
// After page loads in dev mode
window.__schemaValidation  // View full validation result
```

## Validation Rules

### ❌ Critical Errors (Block Deployment)
1. **Standalone AggregateRating**
   ```json
   // ❌ WRONG
   {
     "@type": "AggregateRating",
     "ratingValue": "4.9",
     "reviewCount": "100"
   }
   ```

2. **aggregateRating Without Reviews**
   ```json
   // ❌ WRONG
   {
     "@type": "Product",
     "name": "Service",
     "aggregateRating": {
       "@type": "AggregateRating",
       "ratingValue": "4.9"
     }
     // Missing: review array!
   }
   ```

3. **Review Missing Required Fields**
   ```json
   // ❌ WRONG
   {
     "@type": "Review",
     "reviewRating": { "ratingValue": 5 }
     // Missing: author, datePublished, itemReviewed
   }
   ```

### ⚠️  Warnings (Don't Block, But Should Fix)
- Product schema on service websites
- Missing recommended Organization fields
- Missing @context

### ✅ Valid Examples

**Service Schema (Preferred)**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Verification Service",
  "provider": {
    "@type": "Organization",
    "name": "SafeOrStolen"
  }
}
```

**Product with Proper Reviews**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Service",
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John Smith"
      },
      "datePublished": "2025-01-15",
      "reviewBody": "Excellent service!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      },
      "itemReviewed": {
        "@type": "Service",
        "name": "Verification Service"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "100"
  }
}
```

## Troubleshooting

### Issue: Validator not running in development

**Solution:** Make sure you're running in dev mode:
```bash
npm run dev
```
The monitor only runs when `import.meta.env.DEV === true`

### Issue: False positives

**Solution:** Check if your schema follows Google's requirements:
- https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- https://search.google.com/test/rich-results

### Issue: Pre-deploy script fails

**Solution:** 
1. Run `npm run validate-schemas` to see exact errors
2. Fix all critical errors in reported files
3. Re-run validation until exit code = 0

## Performance Impact

- **Development**: Minimal (~50ms validation after 2s delay)
- **Production**: Zero (monitor doesn't run)
- **Build Time**: Adds ~500ms to validate entire codebase

## Future Enhancements

- [ ] Google Rich Results Test API integration
- [ ] Automatic fix suggestions with code patches
- [ ] CI/CD pipeline integration (GitHub Actions)
- [ ] Slack/email alerts for production errors
- [ ] Historical tracking of schema health
- [ ] Automated regression tests

## Current Status

✅ **Fix Deployed:** All aggregateRating schemas removed
✅ **Validator Active:** Monitors all schemas in development
✅ **Pre-Deploy Check:** Ready to catch future errors
⏳ **Pending:** Google re-crawl (24-48 hours)

## Next Steps

1. **Immediate:** Wait for Google to re-crawl fixed pages
2. **Request Indexing:** Submit priority URLs in Google Search Console
3. **Monitor GSC:** Check for error resolution in 3-7 days
4. **Enable Pre-Build:** Add `prebuild` script to package.json (optional)

## Support

- **Validator Docs**: This file
- **Google Guidelines**: https://developers.google.com/search/docs/appearance/structured-data
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Docs**: https://schema.org/

---

**System Version:** 1.0  
**Last Updated:** November 11, 2025  
**Maintainer:** SafeOrStolen Development Team
