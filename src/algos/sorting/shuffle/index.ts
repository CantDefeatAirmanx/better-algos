/*
 * Task: shuffle array items in place
 *
 */

const swap = <T>(array: T[], firstInd: number, secondInd: number): T[] => {
    const buffer = array[firstInd];
    array[firstInd] = array[secondInd];
    array[secondInd] = buffer;

    return array;
};

export const shuffle = <T>(array: T[]): T[] => {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.round(Math.random() * (array.length - 1));
        swap(array, i, randomIndex);
    }

    return array;
};

export const shuffleFisher = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i >= 1; i--) {
        const randomIndex = Math.round(Math.random() * i);
        swap(array, i, randomIndex);
    }

    return array;
};
