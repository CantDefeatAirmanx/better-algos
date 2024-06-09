// O(N) time O(N) space
export const findNthFibonacciRecursion = (n: number): number => {
    if (n < 1 || Math.round(n) !== n) {
        throw new Error('incorrect arguments');
    }

    if (n === 1) {
        return 0;
    }

    if (n === 2) {
        return 1;
    }

    return findNthFibonacciRecursion(n - 2) + findNthFibonacciRecursion(n - 1);
};

// O(N) time O(1) space
export const findNthFibonacciOptimized = (n: number): number => {
    if (n < 1 || Math.round(n) !== n) {
        throw new Error('incorrect arguments');
    }

    let first = 0;
    let second = 1;

    if (n === 1) {
        return first;
    }

    if (n === 2) {
        return second;
    }

    for (let index = 3; index <= n; index++) {
        const newSecond = first + second;
        first = second;
        second = newSecond;
    }

    return second;
};
