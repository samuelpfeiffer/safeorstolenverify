import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

/**
 * Vehicle VIN Verification — HONEST VERSION (Sept 27 2026) + TheftAZ Arizona law enforcement records (Sept 28 2026)
 * Rules:
 *  - Only list sources that were actually queried and answered.
 *  - Never return "safe"/"stolen" without a real theft database answer.
 *    No automated theft database is available for vehicles right now, so
 *    theft status is always "unknown" and the user gets the free NICB
 *    VINCheck link to check it themselves.
 *  - Response contract unchanged: success, status, confidence, source, message, details.
 */

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(id: string) {
  const now = Date.now();
  const e = rateLimitStore.get(id);
  if (!e || e.resetAt < now) { rateLimitStore.set(id, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS }); return { allowed: true, resetAt: now + RATE_LIMIT_WINDOW_MS }; }
  if (e.count >= MAX_REQUESTS_PER_WINDOW) return { allowed: false, resetAt: e.resetAt };
  e.count++; return { allowed: true, resetAt: e.resetAt };
}

const NICB_URL = 'https://www.nicb.org/vincheck';

async function fetchJson(url: string, ms = 8000): Promise<any | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { 'Accept': 'application/json' } });
    if (!r.ok) return null;
    return await r.json();
  } catch { return null; } finally { clearTimeout(t); }
}


const TAZ_URL = 'https://theftaz.azag.gov/index.php';
type TazResult = { checked: boolean; found: boolean; message: string; record?: string };

/** Arizona Attorney General TheftAZ: records from participating Arizona law enforcement agencies. */
async function searchTheftAZ(q: { vin?: string; plate?: string; state?: string }): Promise<TazResult> {
  const vin = q.vin ?? '';
  const plate = q.plate ?? '';
  const form = new URLSearchParams({ mode: 'search', state: q.state ?? 'AZ', plate: vin ? '' : plate, vin, Submit: 'Submit Search' });
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 10000);
  try {
    const r = await fetch(TAZ_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'SafeOrStolen/1.0 (+https://safeorstolen.com)' },
      body: form.toString(),
      signal: ctrl.signal,
    });
    if (!r.ok) return { checked: false, found: false, message: `TheftAZ HTTP ${r.status}` };
    const text = (await r.text())
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
    const i = text.indexOf('Search Results:');
    if (i < 0) return { checked: false, found: false, message: 'TheftAZ returned no result section' };
    const end = text.indexOf('Disclaimer', i);
    const results = text.slice(i + 15, end > i ? end : i + 1500).trim();
    if (/not reported stolen/i.test(results)) return { checked: true, found: false, message: 'Not reported stolen' };
    const key = (vin || plate).toUpperCase();
    if (results.toUpperCase().replace(/[\s-]/g, '').includes(key)) {
      return { checked: true, found: true, message: 'Reported stolen', record: results.slice(0, 600) };
    }
    console.error('[TheftAZ] Unrecognized result:', results.slice(0, 300));
    return { checked: false, found: false, message: 'TheftAZ result not recognized' };
  } catch (e) {
    console.error('[TheftAZ] Error:', e);
    return { checked: false, found: false, message: 'TheftAZ unavailable' };
  } finally { clearTimeout(t); }
}

const TAZ_LABEL = 'TheftAZ (Arizona Attorney General, law enforcement stolen-vehicle records)';

serve(async (req) => {
  const pre = handleCorsPreFlight(req);
  if (pre) return pre;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip') || 'unknown';
  const rl = checkRateLimit(ip);
  if (!rl.allowed) return json({ success: false, error: 'Rate limit exceeded', retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000) }, 429);

  try {
    const { identifier, make, model, year, plate, state } = await req.json();
    const startTime = Date.now();

    // Plate mode: search TheftAZ by plate (Arizona law enforcement records).
    if (typeof plate === 'string' && plate.trim()) {
      const cleanPlate = plate.replace(/[\s-]/g, '').toUpperCase();
      if (!/^[A-Z0-9]{1,10}$/.test(cleanPlate)) {
        return json({ success: true, status: 'unknown', confidence: 0, source: 'Vehicle_Verification', message: 'Plate format not recognized.', details: { plate: cleanPlate, databases: [] } });
      }
      const st = typeof state === 'string' && /^[A-Z]{2}$/i.test(state) ? state.toUpperCase() : 'AZ';
      const taz = await searchTheftAZ({ plate: cleanPlate, state: st });
      const details = { plate: cleanPlate, state: st, theftaz: taz, databases: taz.checked ? [TAZ_LABEL] : [], notChecked: taz.checked ? [] : ['TheftAZ (did not respond)'] };
      if (taz.found) {
        return json({ success: true, status: 'stolen', confidence: 95, source: 'Vehicle_Verification', message: `🚨 REPORTED STOLEN in Arizona law enforcement records (TheftAZ) for ${st} plate ${cleanPlate}. Do not buy or approach the vehicle. Contact local police.`, details, responseTime: Date.now() - startTime });
      }
      return json({ success: true, status: 'unknown', confidence: 0, source: 'Vehicle_Verification', message: taz.checked ? `${st} plate ${cleanPlate} is not reported stolen in Arizona law enforcement records (TheftAZ) as of today.` : 'Arizona law enforcement records (TheftAZ) could not be searched right now.', details, responseTime: Date.now() - startTime });
    }

    if (!identifier || String(identifier).trim().length === 0) {
      return json({ success: false, error: 'VIN is required', status: 'error', confidence: 0, source: 'Vehicle_Verification' }, 400);
    }

    const cleanVin = String(identifier).replace(/[\s\-]/g, '').trim().toUpperCase();
    const vinValidation = validateVIN(cleanVin);
    if (!vinValidation.valid) {
      return json({ success: false, status: 'error', confidence: 0, source: 'Vehicle_Verification', message: vinValidation.error, details: { providedVin: cleanVin, validation: vinValidation } }, 400);
    }

    const checked: string[] = [];
    const notChecked: string[] = [];

    // 1. NHTSA VIN decode (free US government API)
    const [nhtsaData, taz] = await Promise.all([
      fetchJson(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${cleanVin}?format=json`),
      searchTheftAZ({ vin: cleanVin }),
    ]);
    if (taz.checked) checked.push(TAZ_LABEL); else notChecked.push('TheftAZ Arizona records (did not respond)');
    const get = (v: string) => {
      const val = nhtsaData?.Results?.find((r: any) => r.Variable === v)?.Value;
      return val && String(val).trim() !== '' ? String(val).trim() : null;
    };
    const vinInfo = decodeVIN(cleanVin);
    let vehicleDetails: Record<string, unknown> = { year: vinInfo.modelYear };
    if (nhtsaData?.Results) {
      checked.push('NHTSA VIN Decoder (U.S. Dept. of Transportation)');
      vehicleDetails = {
        make: get('Make'), model: get('Model'), year: get('Model Year') ?? vinInfo.modelYear,
        trim: get('Trim'), vehicleType: get('Vehicle Type'), bodyClass: get('Body Class'),
        plantCountry: get('Plant Country'), engineSize: get('Displacement (L)'), fuelType: get('Fuel Type - Primary'),
      };
    } else {
      notChecked.push('NHTSA VIN Decoder (did not respond)');
    }

    // 2. Cross-check against details the user typed in (VIN swap red flag)
    const crossRefDetails: string[] = [];
    const nMake = vehicleDetails.make as string | null;
    const nModel = vehicleDetails.model as string | null;
    const nYear = vehicleDetails.year ? String(vehicleDetails.year) : null;
    if (make && nMake && String(make).toLowerCase() !== nMake.toLowerCase()) crossRefDetails.push(`Make mismatch: listing says ${make}, VIN says ${nMake}`);
    if (model && nModel && !nModel.toLowerCase().includes(String(model).toLowerCase())) crossRefDetails.push(`Model mismatch: listing says ${model}, VIN says ${nModel}`);
    if (year && nYear && String(year) !== nYear) crossRefDetails.push(`Year mismatch: listing says ${year}, VIN says ${nYear}`);
    const crossRefMismatch = crossRefDetails.length > 0;

    // 3. NHTSA safety recalls for this make/model/year (model-level, not VIN-specific)
    let recalls: { count: number; items: Array<Record<string, unknown>> } | null = null;
    if (nMake && nModel && nYear) {
      const r = await fetchJson(`https://api.nhtsa.gov/recalls/recallsByVehicle?make=${encodeURIComponent(nMake)}&model=${encodeURIComponent(nModel)}&modelYear=${encodeURIComponent(nYear)}`);
      if (r && Array.isArray(r.results)) {
        checked.push('NHTSA Safety Recalls (model-level)');
        recalls = {
          count: r.results.length,
          items: r.results.slice(0, 10).map((x: any) => ({ campaign: x.NHTSACampaignNumber, component: x.Component, date: x.ReportReceivedDate })),
        };
      } else {
        notChecked.push('NHTSA Safety Recalls (did not respond)');
      }
    }

    // 4. NICB (national) cannot be queried automatically.
    notChecked.push('NICB VINCheck (no public API; check it yourself for free at nicb.org/vincheck)');

    const finalStatus = taz.found ? 'stolen' : crossRefMismatch ? 'suspicious' : 'unknown';
    const confidence = taz.found ? 95 : crossRefMismatch ? 60 : 0;

    const result = {
      success: true,
      status: finalStatus,
      confidence,
      source: 'Vehicle_Verification',
      message: taz.found
        ? `🚨 REPORTED STOLEN in Arizona law enforcement records (TheftAZ). Do not buy or approach the vehicle. Contact local police with this VIN.`
        : getVehicleMessage(crossRefMismatch, crossRefDetails, vehicleDetails, recalls, taz),
      details: {
        vin: cleanVin,
        validation: vinValidation,
        vinDecoded: vinInfo,
        vehicleDetails,
        recalls,
        theftaz: taz,
        theftCheck: {
          automated: taz.checked,
          arizonaRecords: taz.checked ? (taz.found ? 'reported stolen' : 'not reported stolen') : 'not checked',
          status: taz.found ? 'stolen' : 'unknown',
          nextStep: `Run the free NICB VINCheck: ${NICB_URL}`,
          nicbUrl: NICB_URL,
        },
        crossReference: { mismatchDetected: crossRefMismatch, issues: crossRefDetails },
        databases: checked,          // ONLY sources that actually answered
        notChecked,
        nicbChecked: false,
      },
      responseTime: Date.now() - startTime,
    };
    console.log(`[Vehicle] ${cleanVin} -> ${finalStatus} (${result.responseTime}ms) checked=${checked.length}`);
    return json(result);
  } catch (error) {
    console.error('[Vehicle] Error:', error);
    const msg = error instanceof Error ? error.message : String(error);
    return json({ success: false, status: 'error', confidence: 0, source: 'Vehicle_Verification', message: msg || 'Vehicle verification failed', error: msg }, 500);
  }
});

function validateVIN(vin: string): { valid: boolean; error?: string; checkDigitOk?: boolean } {
  if (vin.length !== 17) return { valid: false, error: `VIN must be 17 characters (you entered ${vin.length})` };
  if (/[IOQ]/i.test(vin)) return { valid: false, error: 'VINs never contain the letters I, O, or Q. Double-check for 1 or 0.' };
  if (!/^[A-HJ-NPR-Z0-9]+$/i.test(vin)) return { valid: false, error: 'VIN contains invalid characters' };
  if (!validateVINCheckDigit(vin)) return { valid: false, error: 'This VIN fails the built-in math check (position 9). It may be mistyped, fake, or altered.' };
  return { valid: true, checkDigitOk: true };
}

function validateVINCheckDigit(vin: string): boolean {
  const t: Record<string, number> = { A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9 };
  const w = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
  let sum = 0;
  for (let i = 0; i < 17; i++) { const v = t[vin[i].toUpperCase()]; if (v === undefined) return false; sum += v * w[i]; }
  const c = sum % 11;
  return vin[8].toUpperCase() === (c === 10 ? 'X' : String(c));
}

// Model year: position 10 code repeats every 30 years. Position 7 being a
// letter means 2010-2039; a digit means 1980-2009 (standard for US passenger vehicles).
function decodeVIN(vin: string) {
  const codes = 'ABCDEFGHJKLMNPRSTVWXY123456789';
  const idx = codes.indexOf(vin[9].toUpperCase());
  let modelYear: number | null = null;
  if (idx >= 0) modelYear = (/[A-Z]/i.test(vin[6]) ? 2010 : 1980) + idx;
  return { wmi: vin.substring(0, 3), vds: vin.substring(3, 8), checkDigit: vin[8], vis: vin.substring(9), modelYear, plantCode: vin[10], sequenceNumber: vin.substring(11) };
}

function getVehicleMessage(mismatch: boolean, issues: string[], v: Record<string, unknown>, recalls: { count: number } | null, taz: TazResult): string {
  const desc = [v.year, v.make, v.model].filter(Boolean).join(' ');
  if (mismatch) return `⚠️ MISMATCH: ${issues.join('. ')}. The VIN does not match the vehicle described, which can be a sign of a swapped or cloned VIN. Do not buy until this is explained.`;
  const recallText = recalls ? ` ${recalls.count} safety recall${recalls.count === 1 ? '' : 's'} on record for this model.` : '';
  const azText = taz.checked
    ? ' Not reported stolen in Arizona law enforcement records (TheftAZ) as of today.'
    : ' Arizona law enforcement records (TheftAZ) could not be searched right now.';
  return `ℹ️ VIN is valid${desc ? ` and decodes to a ${desc}` : ''}.${recallText}${azText} For a nationwide check, run the free NICB VINCheck (nicb.org/vincheck) and ask to see the title before you pay.`;
}
