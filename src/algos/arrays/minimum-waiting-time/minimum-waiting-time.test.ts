import { findMinimumWaitingTime } from '.';

describe('minimum waiting time tests', () => {
    test('should work with empty array', () => {
        expect(findMinimumWaitingTime([])).toBe(0);
    });

    test('should work with single length array', () => {
        expect(findMinimumWaitingTime([2])).toBe(0);
        expect(findMinimumWaitingTime([10])).toBe(0);
    });

    test('should find minimum waiting time', () => {
        expect(findMinimumWaitingTime([1, 3, 6, 9])).toBe(15);
        expect(findMinimumWaitingTime([3, 2, 1, 2, 6])).toBe(17);
    });
});
