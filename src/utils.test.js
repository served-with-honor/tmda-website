import { slugify } from './utils'

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
