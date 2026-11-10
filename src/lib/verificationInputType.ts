/**
 * Picks the item type a check runs as, from what detection guessed and what the visitor chose.
 *
 * Explicit serial/gun choices disambiguate identifiers that have no unique number format.
 *
 * Nov 10 2026: detection sometimes labels a short serial (for example a 12-character bike or
 * tool serial) as a car VIN. A VIN is always 17 characters, so that check was refused and the
 * visitor saw "Something went wrong on our end". Now a "VIN" that is nowhere near 17 characters
 * is treated as a serial number, and a type the visitor picked wins over that wrong guess.
 * A near miss (16 or 18 characters) still runs as a VIN so the visitor is told to fix the typo.
 */
export function resolveVerificationInputType(
  detected: string,
  hint: string | null,
  identifier?: string,
): string {
  let guess = detected;
  if ((guess === 'vin' || guess === 'vehicle') && typeof identifier === 'string') {
    const len = identifier.replace(/[\s-]/g, '').length;
    if (len !== 17) {
      if (hint) return hint;
      if (len < 16 || len > 18) guess = 'serial';
    }
  }
  return hint && (hint === 'serial' || hint === 'firearm' || guess === 'serial' || guess === 'unknown')
    ? hint
    : guess;
}
