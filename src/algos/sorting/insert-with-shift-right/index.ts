export const insertWithShiftRight = <GValue>(array: GValue[], insertValue: GValue, insertIndex: number) => {
    if (insertIndex < 0 || insertIndex > array.length - 1 || Math.round(insertIndex) !== insertIndex) {
        throw new Error('Incorrect insertIndex');
    }

    let prevValue = array[insertIndex];
    for (let index = insertIndex + 1; index < array.length; index++) {
        const buffer = array[index];
        array[index] = prevValue;
        prevValue = buffer;
    }
    array[insertIndex] = insertValue;

    return array;
};
