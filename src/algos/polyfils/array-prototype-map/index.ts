/*
 *  Task: implement Array.prototype.map method copy as func
 */

export const map = <T, U>(
    array: T[],
    cb: (item: T, index: number, array: T[]) => U,
    thisArg?: unknown
): U[] => {
    const result = new Array(array.length);

    for (let index = 0; index < array.length; index++) {
        result[index] = cb.call(thisArg, array[index], index, array);
    }

    return result;
};
