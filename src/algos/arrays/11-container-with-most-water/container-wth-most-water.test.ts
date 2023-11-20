import { findMaximumWaterAmountBruteForce, findMaximumWaterAmountTwoPointers } from '.';

describe('findMaximumWaterAmount tests', () => {
    describe('brute force', () => {
        test('should work with empty highs array', () => {
            expect(findMaximumWaterAmountBruteForce([])).toBe(0);
        });

        test('should work with single high', () => {
            expect(findMaximumWaterAmountBruteForce([])).toBe(0);
        });

        test('should work with equal highs', () => {
            expect(findMaximumWaterAmountBruteForce([1, 1, 1, 1, 1])).toBe(4);
        });

        test('should work with highs in center', () => {
            expect(findMaximumWaterAmountBruteForce([1, 2, 10, 3, 3, 10, 1])).toBe(30);
        });

        test('should work with not equal highs', () => {
            expect(findMaximumWaterAmountBruteForce([1, 2, 10, 3, 3, 15, 1])).toBe(30);
        });
    });

    describe('two pointers', () => {
        test('should work with empty highs array', () => {
            expect(findMaximumWaterAmountTwoPointers([])).toBe(0);
        });
        test('should work with equal highs', () => {
            expect(findMaximumWaterAmountTwoPointers([1, 1, 1, 1, 1])).toBe(4);
        });
        test('should work with highs in center', () => {
            expect(findMaximumWaterAmountTwoPointers([1, 2, 10, 3, 3, 10, 1])).toBe(30);
        });
        test('should work with not equal highs', () => {
            expect(findMaximumWaterAmountTwoPointers([1, 2, 10, 3, 3, 15, 1])).toBe(30);
        });
    });
});
