import { findProductSumRecursion, findProductSumStack } from '.';

describe('find product sum', () => {
    describe('recursion', () => {
        test('should work with empty array', () => {
            expect(findProductSumRecursion([])).toBe(0);
        });

        test('should work with plain numbers array', () => {
            const input = [1, 2, 3, 4, 5];
            expect(findProductSumRecursion(input)).toBe(input.reduce((acc, curr) => acc + curr, 0));
        });

        test('should work with nested arrays', () => {
            const input = [1, [[[2], 3], 4], [5]];
            expect(findProductSumRecursion(input)).toBe(15);
        });
    });

    describe('stack', () => {
        test('should work with empty array', () => {
            expect(findProductSumStack([])).toBe(0);
        });

        test('should work with plain numbers array', () => {
            const input = [1, 2, 3, 4, 5];
            expect(findProductSumStack(input)).toBe(input.reduce((acc, curr) => acc + curr, 0));
        });

        test('should work with nested arrays', () => {
            const input = [1, [[[2], 3], 4], [5]];
            expect(findProductSumStack(input)).toBe(15);
        });
    });
});
