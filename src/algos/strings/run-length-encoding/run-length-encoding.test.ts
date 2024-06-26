import { runLengthEncoding } from '.';

describe('run length encoding', () => {
    test('should work with empty string', () => {
        expect(runLengthEncoding('')).toBe('');
    });

    test('should work with single length string', () => {
        expect(runLengthEncoding('a')).toBe('1a');
    });

    test('should work with string without duplicate chars', () => {
        expect(runLengthEncoding('abcdefg')).toBe('1a1b1c1d1e1f1g');
    });

    test('should work with string with consecutive duplicates less than 9', () => {
        expect(runLengthEncoding('aaabbddddd')).toBe('3a2b5d');
    });

    test('should work with string with both consecutive duplicates and single chars also', () => {
        expect(runLengthEncoding('aaabddeffff')).toBe('3a1b2d1e4f');
    });

    test('should work with string with consecutive duplicates more than 9', () => {
        expect(runLengthEncoding('aaaaaaaaaaaaabbfffdff')).toBe('9a4a2b3f1d2f');
    });
});
