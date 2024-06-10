const swap = <GValue>(array: GValue[], idx1: number, idx2: number) => {
    const buffer = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = buffer;
};

export const bubbleSort = (array: number[]) => {
    if (array.length < 2) {
        return array;
    }

    let lasSortingPos = array.length - 2;
    while (lasSortingPos >= 0) {
        let swapped = false;

        for (let index = 0; index <= lasSortingPos; index++) {
            const first = array[index];
            const second = array[index + 1];

            if (first > second) {
                swap(array, index, index + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            return array;
        }
        lasSortingPos--;
    }

    return array;
};

export const bubbleSortWithPredicate = <GValue>(
    array: GValue[],
    predicate: (f: GValue, s: GValue) => number
) => {
    let swapped: boolean | null = null;

    for (let idx1 = 0; idx1 < array.length; idx1++) {
        if (swapped === false) {
            return array;
        }

        for (let idx2 = 0; idx2 < array.length; idx2++) {
            const predicateResult = predicate(array[idx2], array[idx2 + 1]);

            if (predicateResult > 0) {
                swap(array, idx2, idx2 + 1);
                swapped = true;
            } else if (idx2 === array.length - 1 && !swapped) {
                swapped = false;
            }
        }
    }
    return array;
};
