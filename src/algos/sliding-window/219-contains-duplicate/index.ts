/**
 * Given an integer array nums and an integer k, return true if
 * there are two distinct indices i and j in the array such that nums[i] == nums[j]
 * and abs(i - j) <= k.
 *
 * Input: nums = [1,2,3,1], k = 3 Output: true
 *
 * Input: nums = [1,0,1,1], k = 1 Output: true
 *
 * Input: nums = [1,2,3,1,2,3], k = 2 Output: false
 */

const containsNearbyDuplicate = (nums: number[], k: number) => {
    if (nums.length < 2) {
        return false;
    }

    let result = false;

    const dict = new Map<number, number>([[nums[0], 0]]);
    for (let right = 1; right < nums.length; right++) {
        const num = nums[right];
        if (dict.has(num)) {
            const savedIndex = dict.get(num)!;
            dict.set(num, right);
            if (Math.abs(right - savedIndex) <= k) {
                return true;
            }
        } else {
            dict.set(num, right);
        }
    }

    return result;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
