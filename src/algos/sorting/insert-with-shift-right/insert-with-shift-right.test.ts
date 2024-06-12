import { insertWithShiftRight } from '.';

describe('insert with shift right', () => {
    test('should work with empty array', () => {
        expect(() => insertWithShiftRight([], 1, 1)).toThrow();
    });

    test('should work with single length array', () => {
        expect(insertWithShiftRight([0], 1, 0)).toEqual([1]);
    });

    test('should work with array with 2 length', () => {
        expect(insertWithShiftRight([0, 1], 2, 1)).toEqual([0, 2]);
        expect(insertWithShiftRight([0, 1], 2, 0)).toEqual([2, 0]);
    });

    test('should work with shifting from start', () => {
        expect(insertWithShiftRight([1, 2, 3, 4, 5], 0, 0)).toEqual([0, 1, 2, 3, 4]);
    });

    test('should work with shifting from end', () => {
        expect(insertWithShiftRight([1, 2, 3, 4, 5], 4, 4)).toEqual([1, 2, 3, 4, 4]);
    });

    test('should work with shifting from middle', () => {
        expect(insertWithShiftRight([1, 2, 3, 4, 5], 2, 2)).toEqual([1, 2, 2, 3, 4]);
    });
});
