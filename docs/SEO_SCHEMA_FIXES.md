# SEO Schema & Canonical URL Fixes

## Fixed Issues

### 1. Product Schema Validation Errors
**Problem**: Product schema was missing required fields causing Google Search Console warnings.

**Fixed**:
- ✅ Added `brand` field with Brand object
- ✅ Added `image` field (required by Google)
- ✅ Added `url` field to Product root
- ✅ Added `seller` to Offer object
- ✅ Ensured all Offer fields include `priceValidUntil` and `validFrom`

### 2. Service Schema Enhancement
**Problem**: Service schema was missing recommended fields.

**Fixed**:
- ✅ Added `url` field to Service root
- ✅ Added `url` to provider Organization
- ✅ Added `serviceType` field
- ✅ Enhanced `areaServed` with proper Place object

### 3. Article Schema Validation
**Problem**: Article schema missing fields for rich results.

**Fixed**:
- ✅ Added `image` field (required)
- ✅ Added logo dimensions to publisher
- ✅ Added `mainEntityOfPage` reference
- ✅ Enhanced publisher with URL

### 4. Canonical URL Improvements
**Problem**: Canonical URLs could contain query params or formatting issues.

**Fixed**:
- ✅ Strip query parameters from canonical URLs
- ✅ Strip hash fragments
- ✅ Remove double slashes
- ✅ Consistent trailing slash handling
- ✅ Validate empty/invalid paths

### 5. Development Validation System
**New Feature**: Automatic schema validation in development mode.

**Added**:
- `src/utils/seo/schemaValidation.ts` - Comprehensive validation utilities
- Validates Product, Service, Article schemas
- Validates canonical URL format
- Console logging for dev environment
- Warnings for missing recommended fields
- Errors for missing required fields

## Validation Features

### Product Schema Validation
- ✅ Required: name, image, brand, offers
- ✅ Offers: price, priceCurrency, availability, url
- ⚠️ Warns about aggregateRating without reviews

### Service Schema Validation
- ✅ Required: name, description, provider
- ⚠️ Recommends: areaServed, serviceType

### Article Schema Validation
- ✅ Required: headline, image, author, publisher, datePublished
- ✅ Publisher must have logo
- ⚠️ Recommends: mainEntityOfPage

### Canonical URL Validation
- ✅ Must use HTTPS
- ⚠️ Warns about query parameters
- ⚠️ Warns about hash fragments
- ⚠️ Warns about trailing slashes
- ⚠️ Warns about www subdomain

## Usage

### In Development
Schema validation runs automatically and logs to console:
```
✅ Product #1 Schema Valid
⚠️ Service #1 Schema Warnings: [...]
❌ Article #1 Schema Validation Failed: [...]
```

### Creating Valid Schemas

#### Product Schema
```typescript
import { createProductSchema } from '@/components/seo/EnhancedStructuredData';

const schema = createProductSchema(
  "Premium Verification Plan",
  "Unlimited stolen item verification",
  "29.99",
  "https://safeorstolen.com/pricing",
  "SafeOrStolen", // brand
  "https://safeorstolen.com/images/product.png" // image
);
```

#### Service Schema
```typescript
import { createServiceSchema } from '@/components/seo/EnhancedStructuredData';

const schema = createServiceSchema(
  "Item Verification Service",
  "Check if items are stolen",
  "SafeOrStolen",
  "0",
  "https://safeorstolen.com"
);
```

#### Article Schema
```typescript
import { createArticleSchema } from '@/components/seo/EnhancedStructuredData';

const schema = createArticleSchema(
  "How to Check if Something is Stolen",
  "Complete guide to verification",
  "https://safeorstolen.com/blog/guide",
  "2025-01-01",
  "2025-01-15",
  "SafeOrStolen Team",
  "https://safeorstolen.com/images/article.png"
);
```

## Google Search Console Expected Improvements

After these fixes, you should see:
1. ✅ No more "Missing field 'brand'" errors
2. ✅ No more "Missing field 'image'" errors  
3. ✅ No more "Missing field 'priceValidUntil'" warnings
4. ✅ No more "Missing field 'availability'" warnings
5. ✅ Canonical URLs properly formatted
6. ✅ Better rich result eligibility

## Testing

### Manual Testing
1. Open browser DevTools
2. Navigate to any page
3. Check Console for validation messages
4. Look for ✅, ⚠️, or ❌ indicators

### Google Testing
1. Use [Rich Results Test](https://search.google.com/test/rich-results)
2. Use [Schema Markup Validator](https://validator.schema.org/)
3. Check Google Search Console for validation issues

## Files Modified

- `src/components/seo/EnhancedStructuredData.tsx` - Enhanced schemas
- `src/utils/seo/canonicalUtils.ts` - Improved URL handling
- `src/components/seo/OptimizedSEOHead.tsx` - Added validation
- `src/utils/seo/schemaValidation.ts` - New validation utilities

## Best Practices

1. **Always include images** for Product and Article schemas
2. **Always include brand** for Product schemas
3. **Never add aggregateRating** without actual Review markup
4. **Use absolute URLs** for all schema URLs
5. **Keep canonical URLs clean** - no query params or hashes
6. **Check dev console** during development for warnings
7. **Test with Google tools** before deploying
