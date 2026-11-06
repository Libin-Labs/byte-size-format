import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats zero bytes', () => {
  assert.equal(api.formatByteSize(0), '0.0 B');
});
test('formats binary units', () => {
  assert.equal(api.formatByteSize(1536), '1.5 KiB');
});
test('formats decimal units', () => {
  assert.equal(api.formatByteSize(1500, { base: 1000, decimals: 2 }), '1.50 kB');
});
test('supports custom precision', () => {
  assert.equal(api.formatByteSize(12, { decimals: 0 }), '12 B');
});
test('caps at largest documented unit', () => {
  assert.match(api.formatByteSize(1024 ** 8), / PiB$/);
});
test('rejects negative values', () => {
  assert.throws(() => api.formatByteSize(-1), RangeError);
});
