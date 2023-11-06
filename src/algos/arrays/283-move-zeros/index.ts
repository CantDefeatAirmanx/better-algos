/**
 *  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements
 *  Note that you must do this in-place without making a copy of the array.
 *
 *   Example 1:
 *       Input: nums = [0,1,0,3,12]
 *       Output: [1,3,12,0,0]
 *
 *   Example 2:
 *       Input: nums = [0]
 *       Output: [0]
 */

export const moveZerosToEndBuiltInSorting = (nums: number[]) => {
    nums.sort((_, second) => {
        if (second === 0) {
            return -1;
        }
        return 0;
    });
    return nums;
};

export const moveZerosLinearComplexity = (nums: number[]) => {
    let replaceIndex = 0;
    for (const num of nums) {
        if (num !== 0) {
            nums[replaceIndex] = num;
            replaceIndex++;
        }
    }

    for (let i = replaceIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};
