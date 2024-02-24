import { canFormClassPhoto, canFormClassPhotoOptimized } from '.';

describe('class photos tests', () => {
    describe('basic variant', () => {
        test('should work with empty arrays', () => {
            expect(canFormClassPhoto([], [])).toBe(false);
        });

        test('should work with different arrays length', () => {
            expect(() => canFormClassPhoto([1], [1, 2])).toThrow();
        });

        test('should work with positive', () => {
            expect(canFormClassPhoto([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])).toBe(true);
        });

        test('should work with negative', () => {
            expect(canFormClassPhoto([6, 8, 1, 3, 4], [6, 9, 2, 4, 5])).toBe(false);
        });
    });

    describe('optimized variant', () => {
        test('should work with empty arrays', () => {
            expect(canFormClassPhotoOptimized([], [])).toBe(false);
        });

        test('should work with different arrays length', () => {
            expect(() => canFormClassPhotoOptimized([1], [1, 2])).toThrow();
        });

        test('should work with positive', () => {
            expect(canFormClassPhotoOptimized([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])).toBe(true);
        });

        test('should work with negative', () => {
            expect(canFormClassPhotoOptimized([6, 8, 1, 3, 4], [6, 9, 2, 4, 5])).toBe(false);
        });
    });
});
