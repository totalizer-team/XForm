import { beforeEach, describe, expect, test } from '@jest/globals';
import $$Store from '../src/core/Store';
import schema from './instance/schema';
import store from './instance/store';

// TODO: add more test cases
describe('module: src/code/Store', () => {
  let storeIns;
  beforeEach(() => {
    storeIns = new $$Store('myFormData', store, schema);
  });

  test('instance should be created', () => {
    expect(storeIns).toBeInstanceOf($$Store);
  });

  test('instance should have the correct variables', () => {
    expect(storeIns.path).toBe('myFormData');
    expect(storeIns.store).toBe(store);
    expect(storeIns.schema).toStrictEqual(schema);
  });
});
