import { swap } from '$shared/utils/swap';

export const selectionSort = (array: number[]) => {
    if (array.length < 2) {
        return array;
    }

    let sortedPartEndIndex = 0;

    while (sortedPartEndIndex < array.length - 1) {
        let smallestInd = sortedPartEndIndex;
        let smallest = array[sortedPartEndIndex];

        for (let index = sortedPartEndIndex; index < array.length; index++) {
            if (array[index] >= smallest) {
                continue;
            }

            smallest = array[index];
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
        let smallest = array[sortedPartEndIndex];

        for (let index = sortedPartEndIndex; index < array.length; index++) {
            if (predicate(array[index], smallest) >= 0) {
                continue;
            }

            smallest = array[index];
            smallestInd = index;
        }
        swap(array, smallestInd, sortedPartEndIndex);

        sortedPartEndIndex++;
    }

    return array;
};
