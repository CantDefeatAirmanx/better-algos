import { bubbleSort, bubbleSortWithPredicate } from '.';

describe('bubble sort', () => {
    describe('simplified', () => {
        test('should work with empty array', () => {
            expect(bubbleSort([])).toEqual([]);
        });

        test('should work with single length array', () => {
            expect(bubbleSort([1])).toEqual([1]);
        });

        test('should with two length array', () => {
            expect(bubbleSort([2, 1])).toEqual([1, 2]);
        });

        test('should work with negative values', () => {
            const input = [-3, -5, 2, -10, 1, 3];

            expect(bubbleSort(input)).toEqual([-10, -5, -3, 1, 2, 3]);
        });

        test('should work', () => {
            const input = [10, 3, 0, 2, 3, 1];

            expect(bubbleSort(input)).toEqual([0, 1, 2, 3, 3, 10]);
        });

        test('should work in place', () => {
            const input = [2, 1];
            expect(bubbleSort(input)).toBe(input);
        });
    });

    describe('with predicate', () => {
        test('should work with empty array', () => {
            expect(bubbleSortWithPredicate([], (f, s) => f - s)).toEqual([]);
        });

        test('should work with single length array', () => {
            expect(bubbleSortWithPredicate([1], (f, s) => f - s)).toEqual([1]);
        });

        test('should with two length array', () => {
            expect(bubbleSortWithPredicate([2, 1], (f, s) => f - s)).toEqual([1, 2]);
            expect(bubbleSortWithPredicate([2, 1], (f, s) => s - f)).toEqual([2, 1]);
        });

        test('should work with negative values', () => {
            const input = [-3, -5, 2, -10, 1, 3];

            expect(bubbleSortWithPredicate(input, (f, s) => f - s)).toEqual([-10, -5, -3, 1, 2, 3]);
            expect(bubbleSortWithPredicate(input, (f, s) => s - f)).toEqual([3, 2, 1, -3, -5, -10]);
        });

        test('should work', () => {
            const input = [10, 3, 0, 2, 3, 1];

            expect(bubbleSortWithPredicate(input, (f, s) => f - s)).toEqual([0, 1, 2, 3, 3, 10]);
            expect(bubbleSortWithPredicate(input, (f, s) => s - f)).toEqual([10, 3, 3, 2, 1, 0]);
        });

        test('should work in place', () => {
            const input = [2, 1];
            expect(bubbleSortWithPredicate(input, (f, s) => f - s)).toBe(input);
        });
    });
});
