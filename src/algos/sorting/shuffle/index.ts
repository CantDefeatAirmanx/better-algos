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
    throw new Error();
};

export const shuffleFisher = <T>(array: T[]): T[] => {
    throw new Error();
};
