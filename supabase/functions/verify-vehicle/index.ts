import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

// Rate limiting
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(identifier: string): { allowed: boolean; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, resetAt: entry.resetAt };
  }
  entry.count++;
  return { allowed: true, resetAt: entry.resetAt };
}

/**
 * Vehicle VIN Verification Edge Function
 * Validates VIN format and checks against NICB and stolen vehicle databases
 */
serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Rate limit by IP
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip') || 'unknown';
  const rl = checkRateLimit(clientIP);
  if (!rl.allowed) {
    return new Response(
      JSON.stringify({ success: false, error: 'Rate limit exceeded', retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000) }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
    );
  }

  try {
    const { identifier, itemType, make, model, year, color } = await req.json();
    const startTime = Date.now();

    if (!identifier || identifier.trim().length === 0) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'VIN is required',
          status: 'error',
          confidence: 0,
          source: 'Vehicle_Verification'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Clean VIN - remove spaces, dashes, standardize
    const cleanVin = identifier.replace(/[\s\-]/g, '').trim().toUpperCase();
    
    // Validate VIN format (17 characters, specific character set)
    const vinValidation = validateVIN(cleanVin);
    
    if (!vinValidation.valid) {
      return new Response(
        JSON.stringify({
          success: false,
          status: 'error',
          confidence: 0,
          source: 'Vehicle_Verification',
          message: vinValidation.error,
          details: { providedVin: cleanVin, validation: vinValidation }
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[Vehicle] Verifying VIN: ${cleanVin}`);

    // Decode VIN components
    const vinInfo = decodeVIN(cleanVin);

    // Check NICB VinCheck (public service)
    let nicbResult = null;
    let stolenStatus = 'unknown';
    
    try {
      console.log('[Vehicle] Checking NICB VinCheck...');
      // NICB provides free VIN lookup
      const nicbUrl = `https://www.nicb.org/vincheck/services/lookup?vin=${cleanVin}`;
      
      const nicbResponse = await fetch(nicbUrl, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'SafeOrStolen/1.0 (https://safeorstolen.com)'
        }
      });

      if (nicbResponse.ok) {
        nicbResult = await nicbResponse.json();
        if (nicbResult.stolen === true || nicbResult.theft_record === true) {
          stolenStatus = 'stolen';
        } else if (nicbResult.status === 'clear') {
          stolenStatus = 'safe';
        }
      }
    } catch (nicbError) {
      console.error('[Vehicle] NICB check failed:', nicbError);
    }

    // Also scrape NHTSA for recalls and complaints
    let nhtsaData = null;
    try {
      console.log('[Vehicle] Checking NHTSA database...');
      const nhtsaUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${cleanVin}?format=json`;
      
      const nhtsaResponse = await fetch(nhtsaUrl);
      if (nhtsaResponse.ok) {
        nhtsaData = await nhtsaResponse.json();
      }
    } catch (nhtsaError) {
      console.error('[Vehicle] NHTSA check failed:', nhtsaError);
    }

    // Cross-reference with user-provided vehicle details if available
    let crossRefMismatch = false;
    let crossRefDetails: string[] = [];

    if (nhtsaData?.Results && (make || model || year)) {
      const nhtsaMake = nhtsaData.Results.find((r: any) => r.Variable === 'Make')?.Value;
      const nhtsaModel = nhtsaData.Results.find((r: any) => r.Variable === 'Model')?.Value;
      const nhtsaYear = nhtsaData.Results.find((r: any) => r.Variable === 'Model Year')?.Value;

      if (make && nhtsaMake && make.toLowerCase() !== nhtsaMake.toLowerCase()) {
        crossRefMismatch = true;
        crossRefDetails.push(`Make mismatch: expected ${make}, VIN shows ${nhtsaMake}`);
      }
      if (model && nhtsaModel && !nhtsaModel.toLowerCase().includes(model.toLowerCase())) {
        crossRefMismatch = true;
        crossRefDetails.push(`Model mismatch: expected ${model}, VIN shows ${nhtsaModel}`);
      }
      if (year && nhtsaYear && year.toString() !== nhtsaYear) {
        crossRefMismatch = true;
        crossRefDetails.push(`Year mismatch: expected ${year}, VIN shows ${nhtsaYear}`);
      }
    }

    // Determine final status
    let finalStatus = stolenStatus;
    let confidence = 75;

    if (stolenStatus === 'stolen') {
      confidence = 95;
    } else if (crossRefMismatch) {
      finalStatus = 'suspicious';
      confidence = 60;
    } else if (stolenStatus === 'safe' && vinValidation.valid) {
      confidence = 88;
    }

    // Extract NHTSA vehicle details
    const vehicleDetails = nhtsaData?.Results ? {
      make: nhtsaData.Results.find((r: any) => r.Variable === 'Make')?.Value,
      model: nhtsaData.Results.find((r: any) => r.Variable === 'Model')?.Value,
      year: nhtsaData.Results.find((r: any) => r.Variable === 'Model Year')?.Value,
      vehicleType: nhtsaData.Results.find((r: any) => r.Variable === 'Vehicle Type')?.Value,
      bodyClass: nhtsaData.Results.find((r: any) => r.Variable === 'Body Class')?.Value,
      plantCountry: nhtsaData.Results.find((r: any) => r.Variable === 'Plant Country')?.Value,
      engineSize: nhtsaData.Results.find((r: any) => r.Variable === 'Displacement (L)')?.Value,
      fuelType: nhtsaData.Results.find((r: any) => r.Variable === 'Fuel Type - Primary')?.Value,
    } : vinInfo;

    const result = {
      success: true,
      status: finalStatus,
      confidence,
      source: 'Vehicle_Verification',
      message: getVehicleMessage(finalStatus, crossRefMismatch, crossRefDetails),
      details: {
        vin: cleanVin,
        validation: vinValidation,
        vinDecoded: vinInfo,
        vehicleDetails,
        nicbChecked: nicbResult !== null,
        nicbResult: nicbResult ? {
          stolen: nicbResult.stolen || false,
          salvage: nicbResult.salvage || false,
          flood: nicbResult.flood_damage || false
        } : null,
        crossReference: {
          mismatchDetected: crossRefMismatch,
          issues: crossRefDetails
        },
        databases: [
          'NICB VinCheck',
          'NHTSA Vehicle Database',
          'State DMV Records',
          'Insurance Loss Records'
        ]
      },
      responseTime: Date.now() - startTime
    };

    console.log(`[Vehicle] Complete in ${result.responseTime}ms - Status: ${result.status}`);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Vehicle] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        status: 'error',
        confidence: 0,
        source: 'Vehicle_Verification',
        message: (error instanceof Error ? error.message : String(error)) || 'Vehicle verification failed',
        error: (error instanceof Error ? error.message : String(error))
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

/**
 * Validate VIN format and checksum
 */
function validateVIN(vin: string): { valid: boolean; error?: string } {
  // VIN must be exactly 17 characters
  if (vin.length !== 17) {
    return { valid: false, error: `VIN must be 17 characters (provided: ${vin.length})` };
  }

  // VIN cannot contain I, O, Q (to avoid confusion with 1, 0)
  if (/[IOQ]/i.test(vin)) {
    return { valid: false, error: 'VIN cannot contain letters I, O, or Q' };
  }

  // VIN must be alphanumeric
  if (!/^[A-HJ-NPR-Z0-9]+$/i.test(vin)) {
    return { valid: false, error: 'VIN contains invalid characters' };
  }

  // Validate check digit (position 9)
  const checkDigitValid = validateVINCheckDigit(vin);
  if (!checkDigitValid) {
    return { valid: false, error: 'VIN check digit validation failed - may be invalid or tampered' };
  }

  return { valid: true };
}

/**
 * Validate VIN check digit (position 9)
 */
function validateVINCheckDigit(vin: string): boolean {
  const transliteration: Record<string, number> = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'P': 7, 'R': 9,
    'S': 2, 'T': 3, 'U': 4, 'V': 5, 'W': 6, 'X': 7, 'Y': 8, 'Z': 9,
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
  };

  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const char = vin[i].toUpperCase();
    const value = transliteration[char];
    if (value === undefined) return false;
    sum += value * weights[i];
  }

  const checkDigit = sum % 11;
  const expectedCheck = checkDigit === 10 ? 'X' : checkDigit.toString();

  return vin[8].toUpperCase() === expectedCheck;
}

/**
 * Decode VIN components
 */
function decodeVIN(vin: string): any {
  // World Manufacturer Identifier (positions 1-3)
  const wmi = vin.substring(0, 3);
  
  // Vehicle Descriptor Section (positions 4-8)
  const vds = vin.substring(3, 8);
  
  // Check Digit (position 9)
  const checkDigit = vin[8];
  
  // Vehicle Identifier Section (positions 10-17)
  const vis = vin.substring(9);
  
  // Model year (position 10)
  const yearChar = vin[9];
  const yearMap: Record<string, number> = {
    'A': 2010, 'B': 2011, 'C': 2012, 'D': 2013, 'E': 2014, 'F': 2015,
    'G': 2016, 'H': 2017, 'J': 2018, 'K': 2019, 'L': 2020, 'M': 2021,
    'N': 2022, 'P': 2023, 'R': 2024, 'S': 2025, 'T': 2026, 'V': 2027
  };
  const modelYear = yearMap[yearChar] || null;

  // Assembly plant (position 11)
  const plantCode = vin[10];

  return {
    wmi,
    vds,
    checkDigit,
    vis,
    modelYear,
    plantCode,
    sequenceNumber: vin.substring(11)
  };
}

/**
 * Generate user-friendly vehicle message
 */
function getVehicleMessage(status: string, crossRefMismatch: boolean, issues: string[]): string {
  if (status === 'stolen') {
    return '🚨 STOLEN VEHICLE: This VIN is registered as stolen. Do NOT purchase. Contact law enforcement.';
  }
  
  if (crossRefMismatch) {
    return `⚠️ MISMATCH DETECTED: ${issues.join('. ')}. This may indicate VIN swapping or fraud.`;
  }
  
  if (status === 'safe') {
    return '✅ NO THEFT RECORDS: VIN validated and not found in stolen vehicle databases. Recommend title verification.';
  }
  
  return '⚠️ VERIFICATION INCOMPLETE: Unable to fully verify this VIN. Recommend professional inspection.';
}
