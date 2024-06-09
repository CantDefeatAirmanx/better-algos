import { findNthFibonacciOptimized, findNthFibonacciRecursion } from '.';

describe('find nth fibonacci', () => {
    describe('recursion', () => {
        test('should find first', () => {
            expect(findNthFibonacciRecursion(1)).toBe(0);
        });

        test('should find second', () => {
            expect(findNthFibonacciRecursion(2)).toBe(1);
        });

        test('should find third', () => {
            expect(findNthFibonacciRecursion(3)).toBe(1);
        });

        test('should further position', () => {
            expect(findNthFibonacciRecursion(4)).toBe(2);
            expect(findNthFibonacciRecursion(7)).toBe(8);
            expect(findNthFibonacciRecursion(8)).toBe(13);
            expect(findNthFibonacciRecursion(9)).toBe(21);
        });
    });

    describe('optimized', () => {
        test('should find first', () => {
            expect(findNthFibonacciOptimized(1)).toBe(0);
        });

        test('should find second', () => {
            expect(findNthFibonacciOptimized(2)).toBe(1);
        });

        test('should find third', () => {
            expect(findNthFibonacciOptimized(3)).toBe(1);
        });

        test('should further position', () => {
            expect(findNthFibonacciOptimized(4)).toBe(2);
            expect(findNthFibonacciOptimized(7)).toBe(8);
            expect(findNthFibonacciOptimized(8)).toBe(13);
            expect(findNthFibonacciOptimized(9)).toBe(21);
        });
    });
});
