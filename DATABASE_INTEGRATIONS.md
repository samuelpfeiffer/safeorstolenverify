# Database Integration Guide for SafeOrStolen.com

This document provides comprehensive integration details for all stolen item verification databases.

---

## 🔴 Priority Integrations (With API Access)

### 1. **CheckMEND** - Global Device Verification
**Status:** ✅ API Available  
**Website:** https://www.checkmend.com/us  
**API Docs:** https://gapi99.checkmend.com/docs/

**What it checks:**
- Mobile phones (IMEI)
- Tablets, laptops, gaming devices
- Multiple theft databases worldwide
- Insurance blacklists
- Finance checks

**Integration Steps:**
1. Sign up for CheckMEND Trader Account
2. Contact Recipero Ltd for API credentials
3. Add `CHECKMEND_API_KEY` to Supabase secrets
4. Edge function: `verify-checkmend` (already exists)

**API Example:**
```bash
POST https://gapi99.checkmend.com/api/v1/check
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "imei": "123456789012345",
  "check_type": "full"
}
```

**Pricing:** Commercial - contact for pricing  
**Rate Limits:** Varies by plan  
**Data Refresh:** Real-time

---

### 2. **IMEI.info** - IMEI Device Verification + Lost Database
**Status:** ✅ API Available  
**Website:** https://www.imei.info  
**API Docs:** https://dash.imei.info/swagger/  
**Lost Device DB:** https://www.imei.info/lost-device/

**What it checks:**
- IMEI verification and device specs
- Lost/stolen device reports (user-submitted)
- Device specifications and warranty info
- SIM lock status

**Integration Steps:**
1. Sign up at https://dash.imei.info/register/
2. Generate API key in dashboard
3. Add `IMEI_INFO_API_KEY` to Supabase secrets
4. Edge function: `imei-info-lookup` (already exists - updated)

**API Endpoints:**
```bash
# Device Check
POST https://api.imei.info/api/check
Authorization: Bearer YOUR_API_KEY

# Lost Device Check
POST https://www.imei.info/api/lost-device/check
Authorization: Bearer YOUR_API_KEY
```

**Pricing:** Free tier available, paid plans for high volume  
**Rate Limits:** Based on subscription tier  
**Data Refresh:** Real-time

---

### 3. **GSMA Device Check** - Carrier Blacklist Database
**Status:** ⚠️ Requires Enterprise Partnership  
**Website:** https://devicecheck.gsma.com/  
**Contact:** devicechecksupport@gsma.com

**What it checks:**
- Global carrier blacklists (IMEI/MEID/ESN)
- Stolen device reports from carriers
- Lost device flags
- Network lock status

**Integration Steps:**
1. **Manual Mode (Current):** Redirect users to GSMA website
2. **API Mode (Enterprise):**
   - Contact devicechecksupport@gsma.com
   - Request GSMA Device Check API partnership
   - Requires business account and verification
   - Add `GSMA_API_KEY` to Supabase secrets when approved

**Manual Check URL:**
```
https://devicecheck.gsma.com/
```

**Pricing:** Enterprise partnership required  
**Rate Limits:** 5 checks per IP per 24 hours (manual)  
**Data Refresh:** Real-time from carrier databases

---

### 4. **NICB VINCheck** - Vehicle Theft Database
**Status:** ⚠️ Requires Partnership for API  
**Website:** https://www.nicb.org/vincheck  
**Contact:** communications@nicb.org

**What it checks:**
- Stolen vehicles (USA)
- Salvage title vehicles
- Insurance theft claims
- Total loss records

**Integration Steps:**
1. **Manual Mode (Current):** Redirect to NICB VINCheck
2. **API Mode:**
   - Email communications@nicb.org
   - Subject: "VINCheck API Partnership - SafeOrStolen"
   - Include company details and intended use
   - Add `NICB_API_KEY` when approved

**Manual Check URL:**
```
https://www.nicb.org/vincheck?vin=YOURVINNUMBER
```

**Rate Limits:** 5 VINs per IP per 24 hours (manual)  
**Pricing:** Free manual checks, API requires partnership  
**Data Refresh:** Updated from insurance claims

---

## 🟡 Public Access Databases (No API Required)

### 5. **StolenRegister.com** - Worldwide Property Registry
**Status:** ✅ Public Access  
**Website:** https://www.stolenregister.com/

**What it checks:**
- Serial numbers, IMEIs, VINs, MAC addresses
- User-reported stolen items worldwide
- Free registration and checking

**Integration:**
- Edge function: `stolen-register-check` (created)
- Redirect mode: Users manually check
- May have API in future (check with them)

**Check URL:**
```
https://www.stolenregister.com/check
```

**Pricing:** Free  
**Rate Limits:** Unknown  
**Data:** User-submitted reports

---

### 6. **Immobilize.net** - US National Property Register
**Status:** ✅ Public Registration  
**Website:** https://www.immobilise.net/

**What it checks:**
- Electronics, tools, bikes, jewelry
- User-registered property (preventive)
- Theft reports

**Integration:**
- Edge function: `immobilize-lookup` (already exists)
- Currently in simulation mode
- Check if API access available

**Pricing:** Free registration and checks  
**Data:** User-registered items

---

### 7. **Bike Index** - Bicycle Registry
**Status:** ✅ API Available  
**Website:** https://bikeindex.org/  
**API Docs:** https://bikeindex.org/documentation/api_v3

**What it checks:**
- Stolen bicycles worldwide
- Bike registrations
- Recovery reports

**Integration:**
- Edge function: `verify-item` (already exists)
- Public API available
- No API key required for basic searches

**API Example:**
```bash
GET https://bikeindex.org/api/v3/search?serial=SERIAL123
```

**Pricing:** Free  
**Rate Limits:** Reasonable use  
**Data:** Community-reported

---

### 8. **HotGunz.com** - Firearms Database
**Status:** ✅ Public Access  
**Website:** https://www.hotgunz.com/

**What it checks:**
- Stolen firearms by serial number
- Law enforcement reports
- User submissions

**Integration:**
- Edge function: `verify-firearm-hotgunz` (already exists)
- Web scraping method (no official API)
- POST to https://www.hotgunz.com/search.php

**Pricing:** Free  
**Rate Limits:** Unknown  
**Data:** Law enforcement + user reports

---

## 🟠 Law Enforcement Only Databases

### 9. **Interpol Stolen Property Databases**
**Status:** ⚠️ Law Enforcement Only  
**Website:** https://www.interpol.int/en/How-we-work/Databases

**Databases (19 total):**
- Stolen Motor Vehicles (SMV)
- Stolen Works of Art
- Stolen Administrative Documents
- Firearms Tracing
- MIND/Find (missing persons)

**Public Access:**
- ID-Art app for stolen art (limited)
- Red Notices API (wanted persons only)

**Integration:**
- Edge function: `interpol-stolen-check` (created)
- Redirect mode for public databases
- Full access requires law enforcement credentials
- Add `INTERPOL_API_KEY` if credentials obtained

**Public API:**
```
https://interpol.api.bund.dev/ (Red Notices only)
```

---

### 10. **LeadsOnline / ReportIt**
**Status:** ⚠️ Law Enforcement Platform  
**Website:** https://leadsonline.com/

**What it checks:**
- Pawn shop transactions
- Second-hand dealer reports
- Property recovery database

**Integration:**
- Primarily for law enforcement
- Citizens can register property on ReportIt.leadsonline.com
- No public API for verification

---

## 🔵 Commercial APIs (Paid Services)

### 11. **VehicleDatabases.com** - Stolen Vehicle API
**Status:** 💰 Commercial API  
**Website:** https://vehicledatabases.com/stolen-vehicle-api

**Integration:**
- Sign up for API access
- Add `VEHICLE_DB_API_KEY` to Supabase secrets
- Create edge function if needed

---

### 12. **CarFax** - Vehicle History
**Status:** 💰 Requires Partnership  
**Contact:** CarFax for affiliate/API access

**Integration:**
- Edge function: `carfax-vin-lookup` (exists in placeholder mode)
- Requires CarFax partnership
- Add `CARFAX_API_KEY` when available

---

## 📋 Implementation Priority

### Phase 1 (Immediate - Free/Public):
1. ✅ StolenRegister.com - redirect mode
2. ✅ Bike Index - API integration
3. ✅ HotGunz - web scraping
4. ✅ IMEI.info - API signup

### Phase 2 (Enterprise Partnerships):
1. ⚠️ CheckMEND - contact for API
2. ⚠️ GSMA Device Check - request partnership
3. ⚠️ NICB VINCheck - request partnership

### Phase 3 (Optional/Advanced):
1. 🔵 Interpol (if law enforcement credentials obtained)
2. 🔵 Commercial APIs (if budget allows)

---

## 🔐 Required Supabase Secrets

Add these secrets as you obtain API keys:

```bash
# Already configured:
BIKEINDEX_ACCESS_TOKEN
IMEI_INFO_API_KEY (old - update to new one)

# Need to add:
CHECKMEND_API_KEY          # CheckMEND partnership
IMEI_INFO_API_KEY          # New IMEI.info account
GSMA_API_KEY               # GSMA partnership
NICB_API_KEY               # NICB partnership
INTERPOL_API_KEY           # If law enforcement access
STOLEN_REGISTER_API_KEY    # If API becomes available
VEHICLE_DB_API_KEY         # VehicleDatabases.com
```

---

## 📊 Data Coverage Summary

| Database | Coverage | API | Cost |
|----------|----------|-----|------|
| CheckMEND | Global electronics | ✅ | 💰 |
| IMEI.info | Global IMEI | ✅ | Free tier |
| GSMA Device Check | Global carriers | ⚠️ Partnership | 💰 |
| NICB VINCheck | USA vehicles | ⚠️ Partnership | Free/Partner |
| StolenRegister | Worldwide | ❌ Public | Free |
| Immobilize | US property | ❌ Public | Free |
| Bike Index | Worldwide bikes | ✅ | Free |
| HotGunz | USA firearms | ⚠️ Scraping | Free |
| Interpol | International | ⚠️ LE only | N/A |

---

## 🚀 Next Steps

1. **Immediate:**
   - Sign up for IMEI.info API key
   - Test all public databases
   - Document any new APIs found

2. **Within 1 Week:**
   - Contact CheckMEND for API partnership
   - Request GSMA Device Check partnership
   - Apply for NICB API access

3. **Ongoing:**
   - Monitor for new database APIs
   - Test integration reliability
   - Document rate limits and best practices

---

**Last Updated:** 2025-01-26  
**Maintained by:** SafeOrStolen Development Team
