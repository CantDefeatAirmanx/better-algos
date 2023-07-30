import { findMaxContigiousSum, findMaxContigiousSumBruteForce } from '.';

describe('findMaxContigiousSum tests', () => {
    describe('brute force variant', () => {
        test('should work with empty array', () => {
            expect(findMaxContigiousSum([], 2)).toBe(0);
        });

        test('should work with array with lesser size that partSize', () => {
            expect(findMaxContigiousSum([1, 2, 3], 4)).toBe(0);
        });

        test('should work with array same sized as partSize', () => {
            expect(findMaxContigiousSum([2, 3, 4, 1, 1], 5)).toBe(11);
        });

        test('should work with array that has bigger length than partSize', () => {
            expect(findMaxContigiousSum([2, 3, 4, 1, 1], 3)).toBe(9);
            expect(findMaxContigiousSum([2, 3, 4, 3, 1], 3)).toBe(10);
        });

        test('should work with array that has bigger length than partSize and max sum is in the end', () => {
            expect(findMaxContigiousSum([2, 3, 4, 6, 5], 3)).toBe(15);
        });
    });
    describe('sliding window variant', () => {
        test('should work with empty array', () => {
            expect(findMaxContigiousSum([], 2)).toBe(0);
        });

        test('should work with array with lesser size that partSize', () => {
            expect(findMaxContigiousSum([1, 2, 3], 4)).toBe(0);
        });

        test('should work with array same sized as partSize', () => {
            expect(findMaxContigiousSum([2, 3, 4, 1, 1], 5)).toBe(11);
        });

        test('should work with array that has bigger length than partSize', () => {
            expect(findMaxContigiousSum([2, 3, 4, 1, 1], 3)).toBe(9);
            expect(findMaxContigiousSum([2, 3, 4, 3, 1], 3)).toBe(10);
        });

        test('should work with array that has bigger length than partSize and max sum is in the end', () => {
            expect(findMaxContigiousSum([2, 3, 4, 6, 5], 3)).toBe(15);
        });
    });
});
