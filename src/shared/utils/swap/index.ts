export const swap = <GValue>(array: GValue[], idx1: number, idx2: number) => {
    const buffer = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = buffer;

    return array;
};
