import { describe, expect, test } from '@jest/globals';
import getPrefixPath, {
  removeLastArraySuffix,
  removeRoot,
} from '../src/core/getPrefixPath';

describe('module: src/code/getPrefixPath', () => {
  test('should remove last array suffix', () => {
    expect(removeLastArraySuffix()).toBe('');
    expect(removeLastArraySuffix(false)).toBe('');
    expect(removeLastArraySuffix(null)).toBe('');
    expect(removeLastArraySuffix('')).toBe('');
    expect(removeLastArraySuffix('normalString')).toBe('normalString');
    expect(removeLastArraySuffix('a.b.c.d')).toBe('a.b.c.d');
    expect(removeLastArraySuffix('a.b[0].c.d')).toBe('a.b[0]');
    expect(removeLastArraySuffix('a.b[0].c[0].d.e')).toBe('a.b[0].c[0]');
    expect(removeLastArraySuffix('a.b[].c[].d[].e')).toBe('a.b[].c[].d[].e');
    expect(removeLastArraySuffix('a.b[].c[].d[0]')).toBe('a.b[].c[].d[0]');
  });

  test('should remove root', () => {
    expect(removeRoot('', '')).toBe('');
    expect(removeRoot('', '-')).toBe('');
    expect(removeRoot('a.b.c', '')).toBe('a.b.c');
    expect(removeRoot('a.b.c', 'a')).toBe('b.c');
    expect(removeRoot('a.b[0].c.d', 'a.b[0]')).toBe('c.d');
    expect(removeRoot(undefined, 'a')).toBe('');
    expect(removeRoot(false, 'a')).toBe('');
    expect(removeRoot(null, 'a')).toBe('');
  });

  test('should get prefix path', () => {
    expect(getPrefixPath('', '')).toBe('');
    expect(getPrefixPath('a.b.c', '')).toBe('a.b.c');
    expect(getPrefixPath('a.b.c', 'a')).toBe('b.c');
    expect(getPrefixPath('a.b.c', 'a.b')).toBe('c');
    expect(getPrefixPath('a.b[0].c.d', 'a.b[0]')).toBe('c.d');
    expect(getPrefixPath('a.b[0].c[0].d.e', 'a.b[0].c[0]')).toBe('d.e');
    expect(getPrefixPath('a.b[0].c.d', 'a')).toBe('b[0]');
    expect(getPrefixPath(undefined, 'a')).toBe('');
    expect(getPrefixPath(false, undefined)).toBe('');
    expect(getPrefixPath(null, '-')).toBe('');
  });
});
