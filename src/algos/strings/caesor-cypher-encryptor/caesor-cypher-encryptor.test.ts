import { caesorCypherEcryptor } from '.';

describe('caesorCypherEcryptor', () => {
    test('encrypts a simple string with a key of 1', () => {
        expect(caesorCypherEcryptor('abc', 1)).toBe('bcd');
    });

    test('encrypts a simple string with a key of 3', () => {
        expect(caesorCypherEcryptor('abc', 3)).toBe('def');
    });

    test('handles wrapping from z to a', () => {
        expect(caesorCypherEcryptor('xyz', 3)).toBe('abc');
    });

    test('encrypts a string with both uppercase and lowercase letters', () => {
        expect(caesorCypherEcryptor('AbC', 2)).toBe('CdE');
    });

    test('keeps non-alphabet characters unchanged', () => {
        expect(caesorCypherEcryptor('abc123', 2)).toBe('cde123');
    });

    test('handles negative keys (shifting left)', () => {
        expect(caesorCypherEcryptor('def', -1)).toBe('cde');
    });

    test('handles a key larger than 26', () => {
        expect(caesorCypherEcryptor('abc', 27)).toBe('bcd');
    });

    test('handles an empty string', () => {
        expect(caesorCypherEcryptor('', 5)).toBe('');
    });

    test('keeps punctuation and spaces unchanged', () => {
        expect(caesorCypherEcryptor('hello, world!', 5)).toBe('mjqqt, btwqi!');
    });

    test('handles special characters and mixed content', () => {
        expect(caesorCypherEcryptor('123! abc XYZ', 4)).toBe('123! efg BCD');
    });
});
