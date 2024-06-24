import { swap } from '$shared/utils/swap';

export const selectionSort = (array: number[]) => {
    if (array.length < 2) {
        return array;
    }

    let sortedPartEndIndex = 0;

    while (sortedPartEndIndex < array.length - 1) {
        let smallestInd = sortedPartEndIndex;

        for (let index = sortedPartEndIndex; index < array.length; index++) {
            if (array[index] >= array[smallestInd]) {
                continue;
            }
            smallestInd = index;
        }
        swap(array, smallestInd, sortedPartEndIndex);

        sortedPartEndIndex++;
    }

    return array;
};

export const selectionSortWithPredicate = <GValue>(
    array: GValue[],
    predicate: (first: GValue, second: GValue) => number
) => {
    if (array.length < 2) {
        return array;
    }

    let sortedPartEndIndex = 0;

    while (sortedPartEndIndex < array.length - 1) {
        let smallestInd = sortedPartEndIndex;

        for (let index = sortedPartEndIndex; index < array.length; index++) {
            if (predicate(array[index], array[smallestInd]) >= 0) {
                continue;
            }
            smallestInd = index;
        }
        swap(array, smallestInd, sortedPartEndIndex);

        sortedPartEndIndex++;
    }

    return array;
};
