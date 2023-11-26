export const filter = <Item>(
    array: Item[],
    callback: (item: Item, index: number, array: Item[]) => {}
): Item[] => {
    const result: Item[] = [];

    for (let index = 0; index < array.length; index++) {
        const item = array[index];

        if (!callback(item, index, array)) {
            continue;
        }
        result.push(item);
    }

    return result;
};
