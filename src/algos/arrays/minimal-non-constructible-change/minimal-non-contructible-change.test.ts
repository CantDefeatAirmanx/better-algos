import { findMinimaNonConstructibleChange } from '.';

describe('findMinimalNonConstructibleChange tests', () => {
    test('should work with empty array', () => {
        expect(findMinimaNonConstructibleChange([])).toBe(0);
    });

    test('should find minimal non contructible change', () => {
        expect(findMinimaNonConstructibleChange([1, 2, 5])).toBe(4);
        expect(findMinimaNonConstructibleChange([2, 5, 1])).toBe(4);
        expect(findMinimaNonConstructibleChange([1, 1, 5, 3, 10, 4])).toBe(25);
        expect(findMinimaNonConstructibleChange([1, 3, 10, 4])).toBe(2);
        expect(findMinimaNonConstructibleChange([1, 1, 2, 7])).toBe(5);
        expect(findMinimaNonConstructibleChange([1, 1, 2, 3, 11])).toBe(8);
    });
});
