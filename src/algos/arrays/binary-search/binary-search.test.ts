import { findNumberWithBinarySearch } from '.';
import { NOT_FOUND_RESULT } from './constants';

describe('find number with binary search', () => {
    test('should work with empty array', () => {
        expect(findNumberWithBinarySearch([], 1)).toBe(NOT_FOUND_RESULT);
    });

    test('should return not found result', () => {
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(NOT_FOUND_RESULT);
    });

    test('should work with single element', () => {
        expect(findNumberWithBinarySearch([1], 1)).toBe(0);
        expect(findNumberWithBinarySearch([2], 1)).toBe(NOT_FOUND_RESULT);
    });

    test('should work with two elements', () => {
        expect(findNumberWithBinarySearch([1, 2], 1)).toBe(0);
        expect(findNumberWithBinarySearch([1, 2], 2)).toBe(1);
        expect(findNumberWithBinarySearch([1, 3], 2)).toBe(NOT_FOUND_RESULT);
    });

    test('should work with even elements count', () => {
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(NOT_FOUND_RESULT);
    });

    test('should work with odd elements count', () => {
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
        expect(findNumberWithBinarySearch([1, 2, 3, 4, 5], 7)).toBe(NOT_FOUND_RESULT);
    });
});
