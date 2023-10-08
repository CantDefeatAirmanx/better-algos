/**
 * Giving a string, find the length of the longest substring without repeating chars
 *
 * ex 1:
 * string = "abcabcbb" -> 3
 *
 * ex 2:
 * string = "bbbbb" -> 1
 */

const findLengthOfLongestSubstring = (string: string) => {
    if (string.length < 2) {
        return string.length;
    }

    let result = 1;
    let left = 0;

    const dict = new Map<string, number>([[string[left], 0]]);
    for (let right = 1; right < string.length; right++) {
        const char = string[right];
        const currentLength = right - left + 1;

        if (dict.has(char)) {
            const savedCharInd = dict.get(char)!;
            if (savedCharInd < left) {
                dict.set(char, right);
            } else {
                if (currentLength - 1 > result) {
                    result = currentLength - 1;
                }
                left = savedCharInd + 1;
                dict.set(char, right);
                continue;
            }
        } else {
            dict.set(char, right);
        }

        if (right === string.length - 1 && currentLength > result) {
            result = currentLength;
        }
    }

    return result;
};

console.log(findLengthOfLongestSubstring('abcabcbb')); // 3
console.log(findLengthOfLongestSubstring('bbbbbb')); // 1
console.log(findLengthOfLongestSubstring('pwawkew')); // 4
console.log(findLengthOfLongestSubstring('au')); // 2
