import {
    InsertionSortNumbers,
    insertionSortWithShift,
    insertionSortWithSwap,
    intertionSortWithPredicate,
} from '.';

const generateBasicTests = (func: InsertionSortNumbers) => {
    return () => {
        test('should work with empty array', () => {
            expect(func([])).toEqual([]);
        });

        test('should work with single length array', () => {
            expect(func([1])).toEqual([1]);
        });

        test('should with two length array', () => {
            expect(func([2, 1])).toEqual([1, 2]);
        });

        test('should work with negative values', () => {
            const input = [-3, -5, 2, -10, 1, 3];

            expect(func(input)).toEqual([-10, -5, -3, 1, 2, 3]);
        });

        test('should work', () => {
            const input = [10, 3, 0, 2, 3, 1];

            expect(func(input)).toEqual([0, 1, 2, 3, 3, 10]);
        });

        test('should work in place', () => {
            const input = [2, 1];
            expect(func(input)).toBe(input);
        });
    };
};

describe('insetion sort', () => {
    describe('withShift', generateBasicTests(insertionSortWithShift));
    describe('withSwap', generateBasicTests(insertionSortWithSwap));

    describe('with predicate', () => {
        test('should work with empty array', () => {
            expect(intertionSortWithPredicate([], (f, s) => f - s)).toEqual([]);
        });

        test('should work with single length array', () => {
            expect(intertionSortWithPredicate([1], (f, s) => f - s)).toEqual([1]);
        });

        test('should with two length array', () => {
            expect(intertionSortWithPredicate([2, 1], (f, s) => f - s)).toEqual([1, 2]);
            expect(intertionSortWithPredicate([2, 1], (f, s) => s - f)).toEqual([2, 1]);
        });

        test('should work with negative values', () => {
            const input = [-3, -5, 2, -10, 1, 3];

            expect(intertionSortWithPredicate(input, (f, s) => f - s)).toEqual([-10, -5, -3, 1, 2, 3]);
            expect(intertionSortWithPredicate(input, (f, s) => s - f)).toEqual([3, 2, 1, -3, -5, -10]);
        });

        test('should work', () => {
            const input = [10, 3, 0, 2, 3, 1];

            expect(intertionSortWithPredicate(input, (f, s) => f - s)).toEqual([0, 1, 2, 3, 3, 10]);
            expect(intertionSortWithPredicate(input, (f, s) => s - f)).toEqual([10, 3, 3, 2, 1, 0]);
        });

        test('should work in place', () => {
            const input = [2, 1];
            expect(intertionSortWithPredicate(input, (f, s) => f - s)).toBe(input);
        });
    });
});
