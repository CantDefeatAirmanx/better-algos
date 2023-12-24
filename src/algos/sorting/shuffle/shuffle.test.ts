import _ from 'lodash';
import { shuffle, shuffleFisher } from '.';

describe('shufflle tests', () => {
    let stringArrayDefault = ['Yegor', 'Marya', 'Yaroslav', 'Yegor', 'Vika'];
    let numberArrayDefault = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 2, 3];

    let stringArray = ['Yegor', 'Marya', 'Yaroslav', 'Yegor', 'Vika'];
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 2, 3];

    afterEach(() => {
        stringArray = _.cloneDeep(stringArrayDefault);
        numberArray = _.cloneDeep(numberArrayDefault);
    });

    const areItemsEqual = <T>(first: T[], second: T[]) => {
        const firstMap = new Map<T, number>();
        const secondMap = new Map<T, number>();

        for (let ind = 0; ind < first.length; ind++) {
            const firstItem = first[ind];
            const secondItem = second[ind];

            if (!firstMap.has(firstItem)) {
                firstMap.set(firstItem, 0);
            }

            if (!secondMap.has(secondItem)) {
                secondMap.set(secondItem, 0);
            }

            firstMap.set(firstItem, firstMap.get(firstItem)! + 1);
            secondMap.set(secondItem, secondMap.get(secondItem)! + 1);
        }

        if (firstMap.size !== secondMap.size) {
            return false;
        }

        for (const [item, count] of firstMap.entries()) {
            const secondCount = secondMap.get(item);

            if (count !== secondCount) {
                return false;
            }
        }

        return true;
    };

    describe('basic', () => {
        test('should work', () => {
            const stringResult = shuffle(stringArray);
            const numberResult = shuffle(numberArray);

            expect(stringResult.length).toBe(stringArrayDefault.length);
            expect(numberResult.length).toBe(numberArrayDefault.length);

            expect(stringResult).not.toEqual(stringArrayDefault);
            expect(numberResult).not.toEqual(numberArrayDefault);

            expect(areItemsEqual(stringResult, stringArrayDefault)).toBe(true);
            expect(areItemsEqual(numberResult, numberArrayDefault)).toBe(true);
        });
    });

    describe('iets-fisher', () => {
        test('should work', () => {
            const stringResult = shuffleFisher(stringArray);
            const numberResult = shuffleFisher(numberArray);

            expect(stringResult.length).toBe(stringArrayDefault.length);
            expect(numberResult.length).toBe(numberArrayDefault.length);

            expect(stringResult).not.toEqual(stringArrayDefault);
            expect(numberResult).not.toEqual(numberArrayDefault);

            expect(areItemsEqual(stringResult, stringArrayDefault)).toBe(true);
            expect(areItemsEqual(numberResult, numberArrayDefault)).toBe(true);
        });
    });
});
