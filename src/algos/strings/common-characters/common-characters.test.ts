import { FindCommonCharacters, findCommonCharactersBrute, findCommonCharactersOptimized } from '.';

const generateTests = (func: FindCommonCharacters) => {
    return () => {
        test('should work with empty array', () => {
            expect(findCommonCharactersBrute([])).toEqual([]);
        });

        test('should work with single length array', () => {
            expect(findCommonCharactersBrute(['abc'])).toEqual(['a', 'b', 'c']);
        });

        test('should work without common chars', () => {
            expect(findCommonCharactersBrute(['abc', 'ABC', 'def'])).toEqual([]);
        });

        test('should work when all chars are common', () => {
            expect(findCommonCharactersBrute(['abcef', 'febca', 'acebf']).sort()).toEqual([
                'a',
                'b',
                'c',
                'e',
                'f',
            ]);
        });

        test('should work', () => {
            expect(findCommonCharactersBrute(['bcdddd', 'scsczb', 'aScASb']).sort()).toEqual(['b', 'c']);
        });

        test('should work with duplicates of common chars in single string', () => {
            expect(findCommonCharactersBrute(['bcdddd', 'scsczb', 'aScASb']).sort()).toEqual(['b', 'c']);
        });
    };
};

describe('find common characters', () => {
    describe('brute force', generateTests(findCommonCharactersBrute));
    describe('optimized', generateTests(findCommonCharactersOptimized));
});
