import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEGACY_REDIRECT_MAP, resolveLegacyRedirect } from './legacyRedirectMap';

test('numbered retired blog series redirect directly to their existing destinations', () => {
  const series = {
    'chicago-vin-check-how-to-verify-used-cars-in-illinois': '/vin-checker',
    'samsung-galaxy-s24-ultra-stolen-check-complete-imei-guide': '/check-samsung-stolen',
    'facebook-marketplace-safety-2025-complete-stolen-item-guide': '/how-to-tell-if-marketplace-item-is-stolen',
    'iphone-16-pro-max-imei-check-complete-2025-buyer-protection-guide': '/blog/how-to-check-if-iphone-stolen',
    'safeorstolen-mobile-app-complete-guide-to-on-the-go-verification': '/app',
    'safeorstolen-offline-mode-verify-without-internet': '/app',
    'playstation-5-serial-number-verification-guide': '/check-ps5',
    'tesla-model-3-vin-verification-avoid-stolen-electric-vehicles': '/vin-checker',
    'los-angeles-imei-verification-phone-fraud-protection': '/how-to-check-if-item-stolen',
    'stolen-item-checker-in-new-york-city-complete-2025-guide': '/how-to-check-if-item-stolen',
  };
  for (const [slug, destination] of Object.entries(series)) {
    for (let n = 1; n <= 20; n++) {
      const path = `/blog/${slug}-${n}`;
      assert.equal(resolveLegacyRedirect(path), LEGACY_REDIRECT_MAP[path] ?? destination);
      assert.equal(resolveLegacyRedirect(destination), null);
    }
  }
});

test('malformed domain path permanently resolves to the homepage', () => {
  assert.equal(resolveLegacyRedirect('/safeorstolen.com/safeorstolen-checker'), '/');
});

test('unrelated numbered articles are not retired by their suffix alone', () => {
  assert.equal(resolveLegacyRedirect('/blog/ai-stolen-item-detection-2026'), null);
  assert.equal(resolveLegacyRedirect('/blog/theft-trends-report-2024'), null);
});