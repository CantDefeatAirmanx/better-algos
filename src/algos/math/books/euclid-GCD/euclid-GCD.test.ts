import { getGcdRecursion, getGcdStack } from '.';

describe('euclid CGD tests', () => {
    describe('recursion', () => {
        test('should work with correct arguments', () => {
            expect(getGcdRecursion(4, 2)).toBe(2);
            expect(getGcdRecursion(36, 27)).toBe(9);
        });

        test('should work with inverted arguments', () => {
            expect(getGcdRecursion(2, 4)).toBe(2);
            expect(getGcdRecursion(27, 36)).toBe(9);
        });

        test('should throw error with incorrect arguments', () => {
            expect(() => getGcdRecursion(-2, 4)).toThrow();
            expect(() => getGcdRecursion(27, -36)).toThrow();
        });
    });

    describe('recursion', () => {
        test('should work with correct arguments', () => {
            expect(getGcdStack(4, 2)).toBe(2);
            expect(getGcdStack(36, 27)).toBe(9);
        });

        test('should work with inverted arguments', () => {
            expect(getGcdStack(2, 4)).toBe(2);
            expect(getGcdStack(27, 36)).toBe(9);
        });

        test('should throw error with incorrect arguments', () => {
            expect(() => getGcdStack(-2, 4)).toThrow();
            expect(() => getGcdStack(27, -36)).toThrow();
        });
    });
});
