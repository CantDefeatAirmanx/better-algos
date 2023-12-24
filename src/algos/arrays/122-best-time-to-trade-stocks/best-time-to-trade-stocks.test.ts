import exp from 'constants';
import { calculateBestTimeToTrade } from '.';

describe('calculateBestTimeToTrade tests', () => {
    describe('brute', () => {
        test('should work with empty prices array', () => {
            expect(calculateBestTimeToTrade([])).toBe(0);
        });

        test('should work with prices array with length = 1', () => {
            expect(calculateBestTimeToTrade([1])).toBe(0);
        });

        test('should work when price is only decreasing', () => {
            expect(calculateBestTimeToTrade([5, 4, 3, 2, 1])).toBe(0);
        });

        test('should work with happy path', () => {
            expect(calculateBestTimeToTrade([7, 1, 5, 3, 6, 4])).toBe(5);
        });

        test('should work with complex input', () => {
            expect(calculateBestTimeToTrade([2, 1, 2, 0, 1])).toBe(1);
            expect(calculateBestTimeToTrade([3, 2, 6, 5, 0, 3])).toBe(4);
            expect(calculateBestTimeToTrade([2, 1, 2, 1, 0, 1, 2])).toBe(2);
        });
    });
});
