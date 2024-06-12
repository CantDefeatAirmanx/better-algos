const shiftRight = <GValue>(array: GValue[], startIndex: number, endIndex: number) => {
    let prevValue = array[startIndex];
    for (let index = startIndex; index <= endIndex; index++) {
        const buffer = array[index];
        array[index] = prevValue;
        prevValue = buffer;
    }
};

export const insertionSort = (numbers: number[]) => {
    if (numbers.length < 2) {
        return numbers;
    }

    for (let idx1 = 1; idx1 < numbers.length; idx1++) {
        const number = numbers[idx1];
        const prevIndex = idx1 - 1;

        if (number >= numbers[prevIndex]) {
            continue;
        }

        let idx2 = prevIndex;
        while (idx2 >= 0) {
            if (number >= numbers[idx2]) {
                shiftRight(numbers, idx2 + 1, idx1);
                numbers[idx2 + 1] = number;
                break;
            }

            if (idx2 === 0) {
                shiftRight(numbers, 0, idx1);
                numbers[0] = number;
                break;
            }
            idx2--;
        }
    }

    return numbers;
};

export const intertionSortWithPredicate = <GValue>(
    array: GValue[],
    predicate: (f: GValue, s: GValue) => number
) => {
    if (array.length < 2) {
        return array;
    }

    for (let idx1 = 1; idx1 < array.length; idx1++) {
        const element = array[idx1];
        const prevIndex = idx1 - 1;
        const prevElement = array[prevIndex];

        if (predicate(prevElement, element) <= 0) {
            continue;
        }

        let idx2 = prevIndex;
        while (idx2 >= 0) {
            if (predicate(array[idx2], element) <= 0) {
                shiftRight(array, idx2 + 1, idx1);
                array[idx2 + 1] = element;
                break;
            }

            if (idx2 === 0) {
                shiftRight(array, 0, idx1);
                array[0] = element;
                break;
            }
            idx2--;
        }
    }

    return array;
};
