/**
 * Task: find product sum, which is sum of every number is input array(/s). Input is an array
 * consists of either numbers or arrays of numbers / other mixed array. Product price have a multiplier
 * that is based on depth of the current number in subarrays. For ex, if number has 1 depth => 1 * price;
 * 2 depth => 2 * price.
 */

type NestedArray = Array<number | NestedArray>;

export const findProductSumRecursion = (array: NestedArray) => {
    const recFunction = (array: NestedArray, depth: number) => {
        let result = 0;

        for (const item of array) {
            if (typeof item !== 'number') {
                result += recFunction(item, depth + 1);
                continue;
            }
            result += item * depth;
        }
        return result;
    };
    return recFunction(array, 1);
};

export const findProductSumStack = (array: NestedArray) => {
    let result = 0;

    const stack = [...array.map((item) => ({ value: item, depth: 1 }))];

    while (stack.length > 0) {
        const item = stack.pop();
        if (item === undefined) {
            continue;
        }

        if (typeof item.value === 'number') {
            result += item.value * item.depth;
            continue;
        }
        stack.push(...item.value.map((value) => ({ value, depth: item.depth + 1 })));
    }

    return result;
};
