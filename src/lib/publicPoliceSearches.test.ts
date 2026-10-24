import { test } from 'node:test';
import assert from 'node:assert/strict';
const expect = (value: boolean) => ({ toBe: (expected: boolean) => assert.equal(value, expected) });
import { isPublicPoliceSearch } from './publicPoliceSearches';

test('allow exactly the five owner-requested manual public searches', () => {
  for (const url of [
    'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenGun.jsf',
    'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenVehicles.jsf',
    'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenArticle.jsf',
    'https://www.ohioattorneygeneral.gov/stolengun',
    'https://serialandcfp.ps.utah.gov/',
  ]) expect(isPublicPoliceSearch(url)).toBe(true);
  expect(isPublicPoliceSearch('https://pas.fdle.state.fl.us/other')).toBe(false);
  expect(isPublicPoliceSearch('https://example.com/')).toBe(false);
  expect(isPublicPoliceSearch('https://www.ohioattorneygeneral.gov/stolengun?redirect=other')).toBe(false);
});