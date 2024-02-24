import { calculateTandemBicycleTotalSpeed } from '.';

describe('tandem bicycle tests', () => {
    test('should throw with different array lengths', () => {
        expect(() => calculateTandemBicycleTotalSpeed([], [1])).toThrow();
    });

    test('should throw with empty array lengths', () => {
        expect(() => calculateTandemBicycleTotalSpeed([], [])).toThrow();
    });

    test('should calculate max total speed', () => {
        expect(calculateTandemBicycleTotalSpeed([1, 2, 3, 4], [1, 2, 3, 4])).toBe(14);
        expect(calculateTandemBicycleTotalSpeed([0, 1, 2, 3], [1, 2, 3, 4])).toBe(12);
        expect(calculateTandemBicycleTotalSpeed([3, 1], [3, 2])).toBe(6);
    });

    test('should calculate min total speed', () => {
        expect(calculateTandemBicycleTotalSpeed([1, 2, 3, 4], [1, 2, 3, 4], false)).toBe(10);
        expect(calculateTandemBicycleTotalSpeed([0, 1, 2, 3], [1, 2, 3, 4], false)).toBe(10);
        expect(calculateTandemBicycleTotalSpeed([3, 1], [3, 2], false)).toBe(5);
    });
});
