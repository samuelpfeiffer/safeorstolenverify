import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveLegacyRedirect } from './legacyRedirectMap';

test('recover retired guides with relevant canonical destinations', () => {
  const expected = {
    '/blog/craigslist-facebook-bike-scams': '/how-to-tell-if-marketplace-item-is-stolen',
    '/blog/bought-stolen-bike-what-to-do': '/what-to-do-if-you-bought-something-stolen',
    '/blog/fbi-lost-stolen-gun-database': '/blog/ncic-gun-serial-number-check',
    '/blog/rolex-serial-number-check-stolen': '/serial-number-checker',
    '/blog/firearm-serial-number-checker': '/firearms-check',
    '/blog/gun-serial-number-lookup-free': '/firearms-check',
    '/blog/stolen-bike-serial-number-check': '/check-bike',
  };
  for (const [source, target] of Object.entries(expected)) {
    assert.equal(resolveLegacyRedirect(source), target);
    assert.equal(resolveLegacyRedirect(source + '/'), target);
    assert.equal(resolveLegacyRedirect(target), null);
  }
});

test('junk asset stack locations and placeholder paths are not redirected', () => {
  assert.equal(resolveLegacyRedirect('/assets/index-BnGzzGD0.js:9:114984'), null);
  assert.equal(resolveLegacyRedirect('/blog/[SAFEORSTOLEN_APP_ANDROID_LINK]'), null);
});
