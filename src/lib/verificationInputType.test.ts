import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveVerificationInputType } from './verificationInputType';

test('an explicitly selected generic serial is not silently reclassified as a gun', () => {
  assert.equal(resolveVerificationInputType('firearm', 'serial'), 'serial');
  assert.equal(resolveVerificationInputType('bicycle', 'serial'), 'serial');
});

test('preserves gun hints, unambiguous detection and fallback behavior', () => {
  assert.equal(resolveVerificationInputType('serial', 'firearm'), 'firearm');
  assert.equal(resolveVerificationInputType('phone', null), 'phone');
  assert.equal(resolveVerificationInputType('vehicle', 'phone'), 'vehicle');
  assert.equal(resolveVerificationInputType('unknown', 'bicycle'), 'bicycle');
});
