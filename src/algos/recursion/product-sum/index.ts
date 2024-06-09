/**
 * Task: find product sum, which is sum of every number is input array(/s). Input is an array
 * consists of either numbers or arrays of numbers / other mixed array
 */

type NestedArray = Array<number | NestedArray>;

export const findProductSumRecursion = (array: NestedArray) => {
    let result = 0;

    for (const item of array) {
        if (typeof item !== 'number') {
            result += findProductSumRecursion(item);
            continue;
        }
        result += item;
    }

    return result;
};

export const findProductSumStack = (array: NestedArray) => {
    let result = 0;

    const stack = [...array];

    while (stack.length > 0) {
        const item = stack.pop();
        if (item === undefined) {
            continue;
        }

        if (typeof item === 'number') {
            result += item;
            continue;
        }
        stack.push(...item);
    }

    return result;
};
