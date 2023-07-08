const isPositiveNumber = (value: unknown) => typeof value === 'number' && value > 0;

const validateArguments = (first: number, second: number) => {
    if (!isPositiveNumber(first) || !isPositiveNumber(second)) {
        return null;
    }
    return first >= second ? [first, second] : [second, first];
};

export const getGcdRecursion = (first: number, second: number) => {
    const argumentsInOrder = validateArguments(first, second);
    if (argumentsInOrder === null) {
        throw new Error('both arguments must be positive numbers');
    }

    const [greater, lesser] = argumentsInOrder;

    const recursionWrapper = (greater: number, lesser: number): number => {
        const remainder = greater % lesser;
        if (remainder === 0) {
            return lesser;
        }
        return recursionWrapper(lesser, remainder);
    };
    return recursionWrapper(greater, lesser);
};
export const getGcdStack = (first: number, second: number) => {
    const argumentsInOrder = validateArguments(first, second);
    if (argumentsInOrder === null) {
        throw new Error('both arguments must be positive numbers');
    }

    let [greater, lesser] = argumentsInOrder;
    let remainder = greater % lesser;

    while (greater % lesser !== 0) {
        greater = lesser;
        lesser = remainder;
        remainder = greater % lesser;
    }

    return lesser;
};
