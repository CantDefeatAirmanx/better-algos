/**
 *  Task: find common characters in string arrays given as input
 *  ex: ['abc', 'bcdffb', 'szczxbc'] -> ['b', 'c']
 */

export type FindCommonCharacters = (array: string[]) => string[];

export const findCommonCharactersBrute: FindCommonCharacters = (array) => {
    if (array.length === 0) {
        return [];
    }

    let result: string[] = [...array[0].split('')];

    for (let index = 1; index < array.length; index++) {
        const string = array[index];
        result = findArraysUniqueIntersections(result, string.split(''));
    }

    return result;
};

function findArraysUniqueIntersections<GValue>(array1: GValue[], array2: GValue[]): GValue[] {
    const uniqueArray1 = new Set(array1);
    const result = new Set<GValue>();

    for (const item of array2) {
        if (uniqueArray1.has(item)) {
            result.add(item);
        }
    }

    return Array.from(result);
}

export const findCommonCharactersOptimized: FindCommonCharacters = (array) => {
    if (array.length === 0) {
        return [];
    }

    const charsMap = new Map<string, number>();

    for (let index = 1; index < array.length; index++) {
        const string = array[index];
        const set = new Set(string);

        for (const char of set) {
            if (!charsMap.has(char)) {
                charsMap.set(char, 0);
            }
            charsMap.set(char, charsMap.get(char)! + 1);
        }
    }

    return [...charsMap.entries()].reduce<string[]>((acc, [char, count]) => {
        if (count === array.length) {
            acc.push(char);
        }
        return acc;
    }, []);
};
