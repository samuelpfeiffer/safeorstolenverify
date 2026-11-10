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

test('a short serial detected as a VIN runs as a serial, or as the type the visitor picked', () => {
  assert.equal(resolveVerificationInputType('vin', null, 'WTU123G4567H'), 'serial');
  assert.equal(resolveVerificationInputType('vin', 'bicycle', 'WTU123G4567H'), 'bicycle');
  assert.equal(resolveVerificationInputType('vehicle', 'phone', 'WTU123G4567H'), 'phone');
});

test('a real 17-character VIN and a near-miss VIN still run as a VIN', () => {
  assert.equal(resolveVerificationInputType('vin', null, '1HGCM82633A004352'), 'vin');
  assert.equal(resolveVerificationInputType('vin', null, '1HGCM82633A00435'), 'vin');
  assert.equal(resolveVerificationInputType('vehicle', 'phone', '1HGCM82633A004352'), 'vehicle');
});
