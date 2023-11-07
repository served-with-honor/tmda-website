import { slugify, truncateString } from './utils'

describe('slugify', () => {
  test('converts a simple string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('converts a string with special characters to a slug', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  test('converts a string with leading and trailing spaces to a slug', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world');
  });

  test('converts an empty string to an empty slug', () => {
    expect(slugify('')).toBe('');
  });
});

describe('truncateString', () => {
  test('', () => { expect(truncateString('Hello World', 5)).toBe('Hello'); });
  test('', () => { expect(truncateString('Hello World', 6, true)).toBe('Hello...'); });
  test('', () => { expect(truncateString('Hello World', 50, true)).toBe('Hello World'); });
  test('', () => { expect(truncateString('Hello World')).toBe('Hello World'); });
  test('', () => { expect(truncateString()).toBe(''); });
});
