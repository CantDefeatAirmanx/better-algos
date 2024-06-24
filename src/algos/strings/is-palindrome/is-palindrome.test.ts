import { IsPalindrome, isPalindromeOneLine, isPalindromeOptimized } from '.';

const generateTests = (f: IsPalindrome) => {
    return () => {
        test('should work with empty string', () => {
            expect(f('')).toBe(true);
        });

        test('should work with single length string', () => {
            expect(f('a')).toBe(true);
        });

        test('should work with two length string', () => {
            expect(f('ab')).toBe(false);
            expect(f('aa')).toBe(true);
        });

        test('should work with even length string', () => {
            expect(f('abba')).toBe(true);
            expect(f('abaaba')).toBe(true);

            expect(f('aaba')).toBe(false);
            expect(f('abaabb')).toBe(false);
        });

        test('should work with odd length string', () => {
            expect(f('bcacb')).toBe(true);
            expect(f('abadaba')).toBe(true);

            expect(f('bcacx')).toBe(false);
            expect(f('abadabx')).toBe(false);
        });
    };
};

describe('isPalindrome', () => {
    describe('isPalindromeOptimized', generateTests(isPalindromeOptimized));
    describe('isPalindromeOneLine', generateTests(isPalindromeOneLine));
});
