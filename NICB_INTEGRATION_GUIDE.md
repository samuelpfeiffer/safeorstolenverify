# NICB VINCheck Integration Guide for SafeOrStolen.com

## Overview
This guide explains how SafeOrStolen.com integrates with the National Insurance Crime Bureau (NICB) VINCheck service to verify vehicle theft and salvage records.

## Current Implementation Status

### ✅ Phase 1: Manual Redirect Method (ACTIVE)
The edge function is **currently operational** using the manual redirect method. Users are directed to the official NICB website to verify VINs.

**How it works:**
1. User enters a VIN on SafeOrStolen.com
2. System validates the VIN format (17 characters)
3. Edge function returns a redirect URL to: `https://www.nicb.org/vincheck?vin=YOURVIN`
4. User clicks the link to view results on the official NICB site
5. Results are cached for 24 hours per NICB rate limits

**Compliance:**
- ✅ Fully compliant with NICB Terms of Use
- ✅ Respects 5 checks per IP per 24 hours limit
- ✅ Credits NICB as data source
- ✅ No data scraping or unauthorized access

### 🔄 Phase 2: API Integration (PENDING APPROVAL)
To enable automated API integration, you must obtain approval from NICB.

## How to Request NICB API Access

### Step 1: Contact NICB
Email: **communications@nicb.org**

Subject: "VINCheck Database Partnership Request - SafeOrStolen.com"

### Step 2: Email Template

```
Dear NICB Communications Team,

I am writing on behalf of SafeOrStolen.com to request partnership access to the NICB VINCheck API for automated vehicle theft verification.

Company Details:
- Company Name: SafeOrStolen.com
- Incorporation: July 7, 2025, Arizona
- Website: https://safeorstolen.com
- Business Purpose: Stolen item verification service to protect buyers and sellers

Integration Plan:
- Use Case: Automated VIN verification for our users
- Expected Traffic: [Your estimated monthly VIN checks]
- Data Usage: Verify vehicles against theft/salvage records
- Display: Results shown with clear NICB attribution
- Caching: 24-hour cache to respect rate limits
- Compliance: Full adherence to NICB Terms of Use

We currently use the manual redirect method and wish to provide automated results for improved user experience while maintaining full compliance with NICB guidelines.

Please advise on the partnership application process and any required documentation.

Thank you for your consideration.

Best regards,
[Your Name]
[Your Title]
SafeOrStolen.com
```

### Step 3: Once Approved

When NICB provides API access, you'll need to:

1. **Add the NICB API Key to Supabase Secrets:**
   - Go to: https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/settings/functions
   - Add secret: `NICB_API_KEY` with the key provided by NICB
   - Optionally add: `NICB_API_ENDPOINT` if they provide a custom endpoint

2. **Edge Function Will Auto-Switch:**
   The edge function automatically detects the API key and switches from redirect to API mode.

3. **Test the Integration:**
   ```bash
   # Test VIN (use a real VIN from NICB test data)
   curl -X POST https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/nicb-vincheck \
     -H "Authorization: Bearer YOUR_USER_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"vin": "1HGBH41JXMN109186"}'
   ```

## Technical Details

### VIN Format Validation
- Must be exactly 17 characters
- Alphanumeric only (excludes I, O, Q to avoid confusion)
- Automatically converted to uppercase
- Example valid VIN: `1HGBH41JXMN109186`

### Rate Limiting & Caching
- **NICB Limit:** 5 checks per IP per 24 hours (free manual method)
- **Our Cache:** 24-hour expiration to respect NICB limits
- **API Mode:** May have different limits based on partnership agreement

### Response Format

**Redirect Mode (Current):**
```json
{
  "status": "redirect_required",
  "message": "NICB VINCheck requires manual verification...",
  "source": "nicb_vincheck",
  "timestamp": "2025-01-26T20:00:00Z",
  "redirectUrl": "https://www.nicb.org/vincheck?vin=1HGBH41JXMN109186",
  "details": {
    "nicbUrl": "https://www.nicb.org/vincheck?vin=1HGBH41JXMN109186",
    "lastUpdate": "2025-01-26T20:00:00Z"
  }
}
```

**API Mode (When Approved):**
```json
{
  "status": "stolen" | "salvage" | "safe",
  "message": "Vehicle found in NICB database - theft",
  "source": "nicb_vincheck",
  "timestamp": "2025-01-26T20:00:00Z",
  "details": {
    "category": "theft",
    "lastUpdate": "2025-01-20T00:00:00Z",
    "reportDate": "2025-01-15T00:00:00Z"
  }
}
```

## Legal Compliance Requirements

### ✅ Must Do:
1. **Credit NICB:** Always display "Data courtesy of National Insurance Crime Bureau (NICB VINCheck®)"
2. **Terms Link:** Include link to NICB Terms of Use on results page
3. **Rate Limits:** Respect 5 checks per IP per 24 hours (manual method)
4. **No Reselling:** Cannot rebrand or resell NICB data without explicit permission
5. **Transparency:** Users must know data comes from NICB

### ❌ Must Not Do:
1. Bulk-scrape NICB data without partnership
2. Remove or hide NICB attribution
3. Resell NICB data as your own product
4. Exceed rate limits without approval
5. Use data for purposes not approved by NICB

## Frontend Integration

Add this to your VIN results display component:

```tsx
// Display NICB results with proper attribution
{result.source === 'nicb_vincheck' && (
  <div className="nicb-attribution border-t pt-4 mt-4">
    <p className="text-xs text-muted-foreground">
      Data courtesy of{' '}
      <a 
        href="https://www.nicb.org/vincheck" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sos-orange hover:underline"
      >
        National Insurance Crime Bureau (NICB VINCheck®)
      </a>
    </p>
    <p className="text-xs text-muted-foreground mt-1">
      To verify results directly, visit{' '}
      <a 
        href={result.redirectUrl || 'https://www.nicb.org/vincheck'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sos-orange hover:underline"
      >
        nicb.org/vincheck
      </a>
    </p>
    <p className="text-xs text-muted-foreground mt-1">
      By using this service, you agree to the{' '}
      <a 
        href="https://www.nicb.org/vincheck/terms-use-vincheck" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sos-orange hover:underline"
      >
        NICB Terms of Use
      </a>
    </p>
  </div>
)}
```

## Monitoring & Logs

View edge function logs at:
https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/functions/nicb-vincheck/logs

Key log messages:
- `[NICB-VINCHECK] User requesting VIN check` - User initiated check
- `[NICB-VINCHECK] Cache hit` - Result served from cache
- `[NICB-VINCHECK] No API key - providing redirect URL` - Manual redirect mode
- `[NICB-VINCHECK] API check completed` - API mode successful
- `[NICB-VINCHECK] API call failed, falling back to redirect` - API error fallback

## Support & Resources

- NICB VINCheck: https://www.nicb.org/vincheck
- NICB Terms of Use: https://www.nicb.org/vincheck/terms-use-vincheck
- NICB Contact: communications@nicb.org
- NICB Phone: (800) 447-6422

## Status Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Edge Function | ✅ Deployed | Ready to use |
| Manual Redirect | ✅ Active | Fully functional |
| VIN Validation | ✅ Active | 17-char format check |
| Caching | ✅ Active | 24-hour expiration |
| API Integration | ⏳ Pending | Requires NICB approval |
| Legal Compliance | ✅ Complete | Follows all NICB terms |

## Next Steps

1. ✅ **Edge function is ready** - You can start using it now with manual redirect
2. 📧 **Email NICB** for API access using the template above
3. ⏳ **Wait for approval** (typically 2-4 weeks)
4. 🔑 **Add API key** to Supabase secrets when approved
5. 🚀 **System auto-upgrades** to API mode

---

**Important:** The current manual redirect implementation is fully functional and compliant. The API integration is an enhancement that requires NICB partnership approval.
