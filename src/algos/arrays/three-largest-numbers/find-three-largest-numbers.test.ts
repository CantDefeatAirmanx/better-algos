import { FindThreeLargestNumbers, findThreeLargestNumbersOptimized, findThreeLargestNumbersSorting } from '.';

const generateTests = (func: FindThreeLargestNumbers) => {
    return () => {
        test('should throw error with incorrect arguments', () => {
            expect(() => func([])).toThrow();
            expect(() => func([1])).toThrow();
            expect(() => func([1, 2])).toThrow();
        });

        test('should work', () => {
            const numbers = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
            expect(func(numbers)).toEqual([18, 141, 541]);
        });
    };
};

describe('find three largest numbers', () => {
    describe('sorting', generateTests(findThreeLargestNumbersSorting));
    describe('optimized', generateTests(findThreeLargestNumbersOptimized));
});
