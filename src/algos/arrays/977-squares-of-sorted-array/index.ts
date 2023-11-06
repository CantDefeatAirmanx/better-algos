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

export const squaresOfSortedArray = (nums: number[]) => {
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

export const squaresOfSortedArray2 = (nums: number[]) => {
    const dict: Record<number, number[]> = {};

    for (let ind = 0; ind < nums.length; ind++) {
        const num = nums[ind];
        const key = Math.abs(num);
        const squared = num ** 2;

        if (dict[key] === undefined) {
            dict[key] = [squared];

            continue;
        }

        dict[key].push(squared);
    }

    return Object.values(dict).flat();
};

export const squaresOfSortedArrayTwoPointers = (nums: number[]) => {
    const result: number[] = new Array(nums.length);

    let left = 0;
    let right = nums.length - 1;

    for (let index = result.length - 1; index >= 0; index--) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
    }

    return result;
};
