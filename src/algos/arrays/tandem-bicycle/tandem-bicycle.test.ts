import { calculateTandemBicycleTotalSpeed } from '.';

describe('tandem bicycle tests', () => {
    test('should throw with different array lengths', () => {
        expect(() => calculateTandemBicycleTotalSpeed([], [1])).toThrow();
    });

    test('should throw with empty array lengths', () => {
        expect(() => calculateTandemBicycleTotalSpeed([], [])).toThrow();
    });

    test('should calculate max total speed', () => {
        expect(calculateTandemBicycleTotalSpeed([1, 2, 3, 4], [1, 2, 3, 4])).toBe(10);
        expect(calculateTandemBicycleTotalSpeed([0, 1, 2, 3], [1, 2, 3, 4])).toBe(6);
    });

    test('should calculate min total speed', () => {
        expect(calculateTandemBicycleTotalSpeed([1, 2, 3, 4], [1, 2, 3, 4], false)).toBe(6);
        expect(calculateTandemBicycleTotalSpeed([0, 1, 2, 3], [1, 2, 3, 4], false)).toBe(4);
    });
});
