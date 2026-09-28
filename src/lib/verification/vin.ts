/**
 * VIN format + check-digit validation, shared by the browser and the server.
 * Runs BEFORE the usage gate so a mistyped VIN never uses up a free check.
 */
const TRANSLIT: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
  J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9,
  S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};
const WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

export function normalizeVin(raw: string): string {
  return (raw || '').replace(/[\s-]/g, '').trim().toUpperCase();
}

export function validateVin(raw: string): { valid: true } | { valid: false; message: string } {
  const vin = normalizeVin(raw);
  if (vin.length !== 17) {
    return { valid: false, message: `A VIN is 17 characters. You entered ${vin.length}.` };
  }
  if (/[IOQ]/.test(vin)) {
    return { valid: false, message: 'VINs never use the letters I, O, or Q. Check for a 1 or a 0 instead.' };
  }
  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
    return { valid: false, message: 'This VIN has characters a VIN cannot contain.' };
  }
  let sum = 0;
  for (let i = 0; i < 17; i++) sum += TRANSLIT[vin[i]] * WEIGHTS[i];
  const c = sum % 11;
  if (vin[8] !== (c === 10 ? 'X' : String(c))) {
    return {
      valid: false,
      message:
        "This VIN fails the built-in math check, so it is mistyped, fake, or altered. Re-enter it carefully. If it's typed correctly and the seller's paperwork shows this exact number, treat that as a serious red flag.",
    };
  }
  return { valid: true };
}
