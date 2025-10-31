# Edge Functions Input Validation Guide

## ✅ What Was Fixed

Server-side input validation has been implemented for critical edge functions to prevent injection attacks, API abuse, and data corruption.

### Fixed Edge Functions

#### 1. **api-v1-check** ✅
- **Status**: Complete
- **Validation Added**: Serial numbers, VINs, and IMEIs
- **Changes**:
  - Type-specific validation (serial/vin/imei)
  - Suspicious pattern detection
  - Length and format enforcement
  - Sanitized identifiers used throughout

#### 2. **verify-checkmend** ✅
- **Status**: Complete
- **Validation Added**: Serial number validation
- **Changes**:
  - Server-side validation before API calls
  - Clean serial used for cache keys
  - Protected against malicious inputs

#### 3. **nicb-vincheck** ✅
- **Status**: Complete
- **Validation Added**: VIN validation
- **Changes**:
  - Enhanced VIN format validation
  - 17-character requirement enforced
  - Invalid character detection (I, O, Q excluded)

---

## 📚 Shared Validation Utility

Created `supabase/functions/_shared/validation.ts` with reusable validation functions:

### Available Validators

```typescript
// Serial numbers (alphanumeric with hyphens/underscores)
validateSerialNumber(input: unknown): ValidationResult<string>

// VINs (17 characters, A-H, J-N, P-Z, 0-9)
validateVIN(input: unknown): ValidationResult<string>

// IMEIs (14-15 digits)
validateIMEI(input: unknown): ValidationResult<string>

// Item types (phone, laptop, tablet, etc.)
validateItemType(input: unknown): ValidationResult<string>

// Email addresses
validateEmail(input: unknown): ValidationResult<string>

// Rate limiting helper
checkRateLimit(supabase, identifier, action, maxRequests, windowMinutes)

// Error sanitization
sanitizeError(error: any): string
```

### Usage Pattern

```typescript
import { validateSerialNumber } from '../_shared/validation.ts';

// In your edge function
const { serialNumber } = await req.json();

const validation = validateSerialNumber(serialNumber);
if (!validation.success) {
  return new Response(
    JSON.stringify({ error: validation.error }),
    { status: 400, headers: corsHeaders }
  );
}

// Use validated data
const cleanSerial = validation.data!;
```

---

## ⚠️ Edge Functions Still Needing Validation

The following edge functions should be updated to use shared validation utilities:

### High Priority

#### 1. **verify-firearm-hotgunz**
- **Current State**: Likely accepts serial numbers without validation
- **Recommended Fix**:
  ```typescript
  import { validateSerialNumber } from '../_shared/validation.ts';
  
  const validation = validateSerialNumber(serialNumber);
  if (!validation.success) {
    return errorResponse(validation.error);
  }
  ```

#### 2. **verify-claude-analysis**
- **Current State**: Accepts user-provided text for AI analysis
- **Recommended Fix**:
  - Add length limits (max 10,000 characters)
  - Sanitize input before sending to AI API
  - Validate item type if applicable

#### 3. **enhanced-verification**
- **Current State**: Aggregates multiple verification sources
- **Recommended Fix**:
  - Validate all input fields before processing
  - Use appropriate validators for each identifier type

#### 4. **arizona-theft-lookup**
- **Current State**: Accepts type/value pairs
- **Recommended Fix**:
  - Validate identifier based on lookup type
  - Enforce type restrictions

### Medium Priority

#### 5. **api-verify** (Generic Endpoint)
- **Current State**: API key validation only
- **Recommended Fix**:
  - Add validation for verification identifiers
  - Implement type-specific validation based on request

#### 6. **marketplace-integration**
- **Current State**: Likely accepts marketplace data
- **Recommended Fix**:
  - Validate all marketplace identifiers
  - Sanitize product titles and descriptions

#### 7. **enterprise-api**
- **Current State**: Generic enterprise endpoint
- **Recommended Fix**:
  - Review what data is accepted
  - Add comprehensive validation for all fields

---

## 🔒 Security Best Practices

### 1. Always Validate on the Server

**❌ Don't rely on client-side validation alone:**
```typescript
// Client validation can be bypassed
if (input.length > 50) return;
```

**✅ Always validate server-side:**
```typescript
const validation = validateSerialNumber(input);
if (!validation.success) {
  return new Response(
    JSON.stringify({ error: validation.error }),
    { status: 400, headers: corsHeaders }
  );
}
```

### 2. Sanitize Before External API Calls

**❌ Don't pass raw user input to external APIs:**
```typescript
const response = await fetch(`${apiUrl}?serial=${userInput}`);
```

**✅ Validate and sanitize first:**
```typescript
const validation = validateSerialNumber(userInput);
if (!validation.success) return errorResponse(validation.error);

const response = await fetch(`${apiUrl}?serial=${validation.data}`);
```

### 3. Check for Suspicious Patterns

The validation utility automatically checks for:
- SQL injection patterns (SELECT, DROP, UNION)
- XSS patterns (SCRIPT, <, >)
- Path traversal (../, ..\)
- Command injection (--, /*, */)

### 4. Implement Rate Limiting

```typescript
import { checkRateLimit } from '../_shared/validation.ts';

const rateCheck = await checkRateLimit(
  supabase,
  user.id,
  'verify_serial',
  10,  // max 10 requests
  60   // per 60 minutes
);

if (!rateCheck.allowed) {
  return new Response(
    JSON.stringify({ error: rateCheck.error }),
    { status: 429, headers: corsHeaders }
  );
}
```

### 5. Log Validation Failures

```typescript
if (!validation.success) {
  await supabase.from('audit_logs').insert({
    user_id: user?.id,
    action: 'VALIDATION_FAILURE',
    table_name: 'edge_function',
    new_values: {
      function: 'verify-checkmend',
      error: validation.error,
      timestamp: new Date().toISOString()
    }
  });
  
  return errorResponse(validation.error);
}
```

---

## 📋 Implementation Checklist

For each edge function that needs validation:

- [ ] Import appropriate validators from `_shared/validation.ts`
- [ ] Validate all user inputs before processing
- [ ] Return 400 status with clear error messages for invalid input
- [ ] Use validated/sanitized data for all operations
- [ ] Add rate limiting for expensive operations
- [ ] Log validation failures to audit_logs
- [ ] Test with malicious inputs:
  - SQL injection patterns
  - XSS attempts
  - Oversized inputs
  - Invalid formats
- [ ] Verify legitimate inputs still work
- [ ] Document validation rules in function comments

---

## 🧪 Testing Input Validation

### Test Cases to Run

1. **Valid Inputs** (should succeed):
   ```json
   {"serialNumber": "ABC123DEF456"}
   {"vin": "1HGBH41JXMN109186"}
   {"imei": "123456789012345"}
   ```

2. **Invalid Formats** (should return 400):
   ```json
   {"serialNumber": "AB"}  // Too short
   {"vin": "INVALID"}      // Wrong length
   {"imei": "ABC123"}      // Not numeric
   ```

3. **Malicious Inputs** (should be rejected):
   ```json
   {"serialNumber": "ABC'; DROP TABLE--"}
   {"serialNumber": "<script>alert(1)</script>"}
   {"serialNumber": "A".repeat(1000)}
   ```

4. **Rate Limiting** (should return 429):
   - Make 11+ requests in quick succession
   - Verify 429 status after limit exceeded
   - Check error message mentions rate limit

---

## 🔄 Migration Guide

### Step 1: Import Validators

```typescript
// At the top of your edge function
import { 
  validateSerialNumber,
  validateVIN,
  validateIMEI,
  validateEmail
} from '../_shared/validation.ts';
```

### Step 2: Add Validation Logic

```typescript
// After parsing request body
const { serialNumber } = await req.json();

const validation = validateSerialNumber(serialNumber);
if (!validation.success) {
  return new Response(
    JSON.stringify({ error: validation.error }),
    { status: 400, headers: corsHeaders }
  );
}

const cleanSerial = validation.data!;
```

### Step 3: Replace All References

Search and replace all uses of the raw input with the validated version:

```typescript
// Before
const result = await checkDatabase(serialNumber);
const cacheKey = `cache_${serialNumber}`;

// After
const result = await checkDatabase(cleanSerial);
const cacheKey = `cache_${cleanSerial}`;
```

### Step 4: Test Thoroughly

- Test with valid inputs
- Test with invalid inputs
- Test with malicious inputs
- Verify error messages are clear
- Check that logs don't expose sensitive data

---

## 📞 Support

If you encounter issues implementing validation:

1. Check existing implementations in:
   - `api-v1-check/index.ts`
   - `verify-checkmend/index.ts`
   - `nicb-vincheck/index.ts`

2. Review validation utility:
   - `_shared/validation.ts`

3. Refer to security documentation:
   - `SECURITY_SETUP_GUIDE.md`
   - `README_SECURITY.md`

---

## 🎯 Next Steps

1. **Immediate**: Review and update high-priority edge functions
2. **This Week**: Update medium-priority edge functions
3. **Ongoing**: Add validation to all new edge functions
4. **Monthly**: Audit validation rules and update patterns

Remember: **Server-side validation is mandatory for all user inputs!**
