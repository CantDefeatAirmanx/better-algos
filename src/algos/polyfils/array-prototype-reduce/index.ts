/*
 * Task: implement Array.prototype.reduce method as func
 */

export const reduce = <Acc, Item>(
    array: Item[],
    callback: (acc: Acc, item: Item, index: number, array: Item[]) => Acc,
    initValue?: Acc
): Acc => {
    if (array.length === 0 && initValue === undefined) {
        throw new TypeError('reduce on empty array with no initial value');
    }

    let acc: Acc = initValue ?? (array[0] as unknown as Acc);
    let startIndex = initValue !== undefined ? 0 : 1;

    for (let index = startIndex; index < array.length; index++) {
        const current = array[index];
        acc = callback(acc, current, index, array);
    }

    return acc;
};
