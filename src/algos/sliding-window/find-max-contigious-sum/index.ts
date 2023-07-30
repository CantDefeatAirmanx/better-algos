/*
 *  input - number[], partSize - number (size of part of the array)
 *
 *  task - find subarray with length of partSize which has maximum sum of the elements
 *  comparing to other existing subarrays
 */

export const findMaxContigiousSumBruteForce = (array: number[], partSize: number) => {
    if (partSize > array.length) {
        return 0;
    }

    let maxSum = 0;

    for (let i = 0; i <= array.length - partSize; i++) {
        const currentSum = array.slice(i, i + partSize).reduce((acc, cur) => acc + cur, 0);
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};

export const findMaxContigiousSum = (array: number[], partSize: number) => {
    if (partSize > array.length) {
        return 0;
    }

    let initialSum = array.slice(0, partSize).reduce((acc, cur) => acc + cur, 0);
    let maxSum = initialSum;

    for (let i = partSize; i < array.length; i++) {
        const newNumber = array[i];
        const numberToDelete = array[i - partSize];

        initialSum = initialSum - numberToDelete + newNumber;
        maxSum = Math.max(maxSum, initialSum);
    }

    return maxSum;
};

console.log(findMaxContigiousSum([1, 2, 3, 4, 5, 6], 2));
console.log(findMaxContigiousSumBruteForce([1, 2, 3, 4, 5, 6], 2));

export {};
