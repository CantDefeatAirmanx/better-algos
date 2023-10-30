/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order
 *
 *   Example 1:
 *
 *   Input: nums = [-4,-1,0,3,10]
 *   Output: [0,1,9,16,100]
 *   Explanation: After squaring, the array becomes [16,1,0,9,100].
 *   After sorting, it becomes [0,1,9,16,100].
 *
 *   Example 2:
 *
 *   Input: nums = [-7,-3,2,3,11]
 *   Output: [4,9,9,49,121]
 */

const squaresOfSortedArray = (nums: number[]) => {
    const result: (number[] | undefined)[] = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const targetIndex = Math.abs(num);
        const squared = num ** 2;

        if (result[targetIndex] === undefined) {
            result[targetIndex] = [squared];

            continue;
        }

        result[targetIndex]?.push(squared);
    }

    return result.reduce<number[]>((acc, cur) => {
        if (cur === undefined) {
            return acc;
        }
        acc.push(...cur);

        return acc;
    }, []);
};
